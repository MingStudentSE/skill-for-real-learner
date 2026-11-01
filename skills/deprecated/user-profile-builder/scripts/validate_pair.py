#!/usr/bin/env python3
"""Check a USER.md/SOUL.md pair using skill policy budgets, not platform limits."""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass
from pathlib import Path


DEFAULT_USER_BUDGET = 4000
DEFAULT_SOUL_BUDGET = 8000
BULLET = re.compile(r"^\s*(?:[-*+]|\d+[.)])\s+(.+?)\s*$")
HISTORICAL_ENTRY = re.compile(
    r"^\s*(?:[-*+]|\d+[.)])\s+(?:\d{4}-\d{2}-\d{2}\s*·\s*)?"
    r"(?:superseded|expired|已失效|已废弃)\s*(?:[—–:：-]|$)",
    re.IGNORECASE,
)


@dataclass
class Finding:
    level: str
    code: str
    file: str
    line: int | None
    message: str


PLACEHOLDER_PATTERNS = (
    re.compile(r"\{\{[^{}]+\}\}"),
    re.compile(r"\b(?:TODO|TBD|FIXME)\b", re.IGNORECASE),
    re.compile(r"<\s*(?:fill|insert|replace)[^>]*>", re.IGNORECASE),
)

SECRET_PATTERNS = (
    ("private-key", re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")),
    ("github-token", re.compile(r"\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b")),
    ("openai-style-key", re.compile(r"\bsk-[A-Za-z0-9_-]{20,}\b")),
    (
        "assigned-secret",
        re.compile(
            r"(?i)\b(?:password|passwd|api[_ -]?key|access[_ -]?token|secret)\b\s*[:=]\s*[^\s<{][^\n]{5,}"
        ),
    ),
)


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def normalized_bullets(text: str) -> dict[str, list[int]]:
    result: dict[str, list[int]] = {}
    for number, line in enumerate(text.splitlines(), start=1):
        match = BULLET.match(line)
        if not match:
            continue
        normalized = re.sub(r"\s+", " ", match.group(1)).strip().casefold()
        if normalized:
            result.setdefault(normalized, []).append(number)
    return result


def inspect_file(path: Path, role: str, budget: int) -> tuple[str, list[Finding]]:
    findings: list[Finding] = []
    if not path.exists():
        findings.append(Finding("ERROR", "missing-file", path.name, None, f"Missing {path.name}."))
        return "", findings
    if not path.is_file():
        findings.append(Finding("ERROR", "not-a-file", path.name, None, f"{path.name} is not a regular file."))
        return "", findings

    try:
        text = path.read_text(encoding="utf-8")
    except (OSError, UnicodeError):
        findings.append(Finding("ERROR", "unreadable-file", path.name, None, "Cannot read as UTF-8 text."))
        return "", findings
    if not text.strip():
        findings.append(Finding("ERROR", "empty-file", path.name, None, f"{path.name} is empty."))
        return text, findings

    for pattern in PLACEHOLDER_PATTERNS:
        for match in pattern.finditer(text):
            findings.append(
                Finding(
                    "ERROR",
                    "placeholder",
                    path.name,
                    line_number(text, match.start()),
                    "Unresolved template placeholder.",
                )
            )

    for kind, pattern in SECRET_PATTERNS:
        for match in pattern.finditer(text):
            findings.append(
                Finding(
                    "ERROR",
                    "possible-secret",
                    path.name,
                    line_number(text, match.start()),
                    f"Possible {kind}; inspect and remove sensitive material.",
                )
            )

    headings = re.findall(r"(?m)^#{1,6}\s+(.+?)\s*$", text)
    if len(headings) < 2:
        findings.append(
            Finding("WARNING", "weak-structure", path.name, None, "Use headings to keep the file maintainable.")
        )

    if len(text) > budget:
        findings.append(
            Finding(
                "ERROR", f"{role}-budget", path.name, None,
                f"{path.name} is {len(text)} characters; selected budget is {budget}.",
            )
        )

    for number, line in enumerate(text.splitlines(), start=1):
        if HISTORICAL_ENTRY.match(line):
            findings.append(
                Finding(
                    "ERROR", "historical-entry", path.name, number,
                    "Historical entry in current context; remove or relocate within authorized scope.",
                )
            )

    for lines in normalized_bullets(text).values():
        if len(lines) > 1:
            findings.append(
                Finding(
                    "WARNING", "duplicate-bullet-in-file", path.name, lines[1],
                    f"Repeated list text on lines {', '.join(map(str, lines))}; review scope and merge duplicates.",
                )
            )

    if role == "user":
        for number, line in enumerate(text.splitlines(), start=1):
            if re.match(r"^\s*(?:you are|the agent is)\b", line, re.IGNORECASE):
                findings.append(
                    Finding(
                        "WARNING",
                        "agent-identity-in-user",
                        path.name,
                        number,
                        "This may describe the agent and belong in SOUL.md.",
                    )
                )
    else:
        cookbook_lines = sum(1 for line in text.splitlines() if re.search(r"\b(?:curl|npm|python3?|git|cd)\s+", line))
        if cookbook_lines >= 3:
            findings.append(
                Finding(
                    "WARNING",
                    "command-cookbook",
                    path.name,
                    None,
                    "SOUL.md appears to contain a command cookbook; move operating instructions to AGENTS.md, TOOLS.md, or a skill.",
                )
            )

    return text, findings


def validate(workspace: Path, user_budget: int, soul_budget: int) -> list[Finding]:
    findings: list[Finding] = []
    user_text, user_findings = inspect_file(workspace / "USER.md", "user", user_budget)
    soul_text, soul_findings = inspect_file(workspace / "SOUL.md", "soul", soul_budget)
    findings.extend(user_findings)
    findings.extend(soul_findings)

    if user_text and soul_text:
        user_bullets = normalized_bullets(user_text)
        soul_bullets = normalized_bullets(soul_text)
        for duplicate in sorted(set(user_bullets) & set(soul_bullets)):
            findings.append(
                Finding(
                    "WARNING",
                    "duplicate-bullet",
                    "USER.md/SOUL.md",
                    None,
                    f"Duplicate list text across both files (USER.md:{user_bullets[duplicate][0]}, SOUL.md:{soul_bullets[duplicate][0]}).",
                )
            )
    return findings


def positive_int(value: str) -> int:
    number = int(value)
    if number <= 0:
        raise argparse.ArgumentTypeError("Budget must be a positive character count.")
    return number


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument("workspace", type=Path, help="Directory containing USER.md and SOUL.md")
    parser.add_argument("--json", action="store_true", help="Emit machine-readable JSON")
    parser.add_argument("--user-budget", type=positive_int, default=DEFAULT_USER_BUDGET,
                        help="Hard USER.md character budget")
    parser.add_argument("--soul-budget", type=positive_int, default=DEFAULT_SOUL_BUDGET,
                        help="Hard SOUL.md character budget")
    args = parser.parse_args()

    workspace = args.workspace.expanduser().resolve()
    if not workspace.is_dir():
        print(f"ERROR workspace: not a directory: {workspace}", file=sys.stderr)
        return 2

    findings = validate(workspace, args.user_budget, args.soul_budget)
    errors = sum(item.level == "ERROR" for item in findings)
    warnings = sum(item.level == "WARNING" for item in findings)

    if args.json:
        print(
            json.dumps(
                {
                    "workspace": str(workspace),
                    "errors": errors,
                    "warnings": warnings,
                    "findings": [asdict(item) for item in findings],
                },
                ensure_ascii=False,
                indent=2,
            )
        )
    else:
        for item in findings:
            location = item.file + (f":{item.line}" if item.line else "")
            print(f"{item.level} {item.code} {location} — {item.message}")
        print(f"Summary: {errors} error(s), {warnings} warning(s).")

    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
