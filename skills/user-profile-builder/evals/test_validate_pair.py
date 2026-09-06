"""Run with: python3 <skill-dir>/evals/test_validate_pair.py"""

import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "validate_pair.py"
USER = "# USER.md\n\n## Preferences\n- 先给结论。\n"
SOUL = "# SOUL.md\n\n## Role\n研究伙伴。\n"


class ValidatePairTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="profile-validator-test-")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)

    def run_pair(self, user=USER, soul=SOUL, args=()):
        for name, text in (("USER.md", user), ("SOUL.md", soul)):
            path = self.root / name
            if text is None:
                path.unlink(missing_ok=True)
            else:
                path.write_text(text, encoding="utf-8")
        before = {p.name: p.read_bytes() for p in self.root.iterdir()}
        proc = subprocess.run(
            [sys.executable, str(SCRIPT), str(self.root), "--json", *args],
            capture_output=True, text=True,
        )
        self.assertEqual(before, {p.name: p.read_bytes() for p in self.root.iterdir()})
        return proc, json.loads(proc.stdout)

    def test_clean_pair(self):
        proc, data = self.run_pair()
        self.assertEqual(proc.returncode, 0)
        self.assertEqual(data["findings"], [])

    def test_both_default_budget_boundaries_with_unicode(self):
        for role, limit, base in (("user", 4000, USER), ("soul", 8000, SOUL)):
            for extra in (0, 1):
                with self.subTest(role=role, extra=extra):
                    text = base + "中" * (limit + extra - len(base))
                    proc, data = self.run_pair(**{role: text})
                    self.assertEqual(proc.returncode, extra)
                    self.assertEqual([f["code"] for f in data["findings"]],
                                     [f"{role}-budget"] if extra else [])

    def test_explicit_budgets_are_enforced(self):
        for role, base in (("user", USER), ("soul", SOUL)):
            for delta in (0, -1):
                with self.subTest(role=role, delta=delta):
                    proc, data = self.run_pair(args=(f"--{role}-budget", str(len(base) + delta)))
                    self.assertEqual(proc.returncode, int(delta < 0))
                    self.assertEqual(data["errors"], int(delta < 0))

    def test_invalid_budgets_fail(self):
        for flag in ("--user-budget", "--soul-budget"):
            for value in ("0", "-1", "abc"):
                with self.subTest(flag=flag, value=value):
                    proc = subprocess.run(
                        [sys.executable, str(SCRIPT), str(self.root), flag, value],
                        capture_output=True, text=True,
                    )
                    self.assertEqual(proc.returncode, 2)

    def test_short_duplicate_within_and_across_files(self):
        proc, data = self.run_pair(user=USER + "+ 先给结论。\n", soul=SOUL + "1. 先给结论。\n")
        self.assertEqual(proc.returncode, 0)  # Warnings require semantic review.
        self.assertEqual({f["code"] for f in data["findings"]},
                         {"duplicate-bullet-in-file", "duplicate-bullet"})

    def test_whitespace_and_case_normalization(self):
        _, data = self.run_pair(user=USER + "- Prefer  evidence\n2) prefer evidence\n")
        self.assertEqual([f["code"] for f in data["findings"]], ["duplicate-bullet-in-file"])

    def test_historical_entries_in_either_file(self):
        for role in ("user", "soul"):
            for entry in ("- 2026-01-01 · superseded — 旧偏好。\n", "+ 已失效：旧规则。\n"):
                with self.subTest(role=role, entry=entry):
                    proc, data = self.run_pair(**{role: (USER if role == "user" else SOUL) + entry})
                    self.assertEqual(proc.returncode, 1)
                    self.assertEqual([f["code"] for f in data["findings"]], ["historical-entry"])

    def test_active_entry_and_history_pointer_are_allowed(self):
        proc, data = self.run_pair(user=USER + "- 2026-01-01 · active — 设计课程。\n"
                                  "- 追溯旧决策时读取 history.md 中的 superseded 记录。\n")
        self.assertEqual(proc.returncode, 0)
        self.assertEqual(data["findings"], [])

    def test_missing_empty_and_placeholder_still_fail(self):
        for text, code in ((None, "missing-file"), ("", "empty-file"), (USER + "{{NAME}}", "placeholder")):
            with self.subTest(code=code):
                proc, data = self.run_pair(user=text)
                self.assertEqual(proc.returncode, 1)
                self.assertIn(code, [f["code"] for f in data["findings"]])

    def test_sensitive_value_is_not_echoed(self):
        value = "sk-" + "x" * 24
        proc, data = self.run_pair(user=USER + value)
        self.assertEqual(proc.returncode, 1)
        self.assertIn("possible-secret", [f["code"] for f in data["findings"]])
        self.assertNotIn(value, proc.stdout + proc.stderr)


if __name__ == "__main__":
    unittest.main()
