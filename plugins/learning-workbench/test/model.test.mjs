import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStrategyMap, parseDecision, connectDecisions } from '../src/model.mjs';

const card = (id, status = 'open', dependsOn = []) => ({ id, title: `问题 ${id}`, path: `cards/${id}.md`, status, dependsOn });

test('地图保留中文自然正文、所有对应章节和原始投入字符串', () => {
  const markdown = `# 战略地图：实践\n\n## 当前长期方向\n先用真实反馈检验方向，不急于量化。\n\n## 当前阶段与资源配置\n目前没有可比记录。\n\n| 方向 | 已投入时间/金钱/精力 | 结果与沉淀 | 下一阶段投入 | 相应减少什么 |\n| --- | --- | --- | --- | --- |\n| 写作\\|教学 | 未知 | [笔记](notes.md) | 每周半天 | 随意浏览 |\n\n## 战略原则与不失败底座\n保持现金储备。\n## 复利假设\n经验可以复用。\n## 已定取舍\n暂缓扩张。\n## 尚未明确\n客户愿付多少？\n## 明确不做\n盲目追热点。\n## 战略修订记录\n今天：缩小范围。\n`;
  const map = parseStrategyMap(markdown, { path: '战略地图.md' });
  assert.equal(map.markdown, markdown);
  assert.equal(map.title, '战略地图：实践');
  assert.equal(map.direction, '先用真实反馈检验方向，不急于量化。');
  assert.deepEqual(map.resources, [{ direction: '写作\\|教学', invested: '未知', results: '[笔记](notes.md)', next: '每周半天', reduce: '随意浏览' }]);
  for (const key of ['principles', 'compounding', 'choices', 'unknowns', 'excluded', 'revisions']) assert.ok(map[key]);
  assert.deepEqual(parseStrategyMap('# 只有定性判断\n## 当前阶段与资源配置\n缺少记录').resources, []);
});

test('决策卡提取自然正文和四类证据，不把段落伪装成字段', () => {
  const markdown = `---\ntype: experiment\nstatus: claimed\ndepends_on: ["准备.md", '访谈', "含,逗号"]\n---\n# 是否继续投入？\n## 问题与当前判断\n我喜欢这件事，但还没有收入证据。\n## 证据与投入反馈\n这段只是背景。\n- **事实：** 已访谈两人。\n  来源：本周记录。\n- **自述：** 我每周只能投入半天。\n- **推断：** 可能存在小众需求。\n- **未知：** 是否愿意付费。\n## 下一步验证\n尝试一次付费交付。\n## 长期投入检查\n不动用应急资金。\n## 关闭条件\n完成交付并复盘。\n## 实际结果与结论\n尚未返回。`;
  const parsed = parseDecision(markdown, { path: 'strategy-decisions/中文问题.md' });
  assert.equal(parsed.id, '中文问题');
  assert.equal(parsed.markdown, markdown);
  assert.equal(parsed.judgment, '我喜欢这件事，但还没有收入证据。');
  assert.deepEqual(parsed.dependsOn, ['准备.md', '访谈', '含,逗号']);
  assert.deepEqual(parsed.evidence, { facts: '已访谈两人。\n  来源：本周记录。', selfReport: '我每周只能投入半天。', inference: '可能存在小众需求。', unknowns: '是否愿意付费。' });
  assert.equal(parsed.next, '尝试一次付费交付。');
  assert.equal(parsed.guardrails, '不动用应急资金。');
  assert.equal(parsed.closure, '完成交付并复盘。');
  assert.equal(parsed.result, '尚未返回。');
});

test('多行 YAML 引号列表、旧 prototype 和自定义状态原样保留', () => {
  const parsed = parseDecision(`---\ntype: 'prototype'\nstatus: "等待用户反馈"\ndepends_on:\n  - 'first.md'\n  - "../research/second.md"\n---\n# 旧卡\n## 证据与投入反馈\n只有自然描述，没有事实标签。`, { path: '旧卡.md' });
  assert.equal(parsed.type, 'prototype');
  assert.equal(parsed.status, '等待用户反馈');
  assert.deepEqual(parsed.dependsOn, ['first.md', '../research/second.md']);
  assert.deepEqual(parsed.evidence, { facts: '', selfReport: '', inference: '', unknowns: '' });
  assert.equal(connectDecisions([parsed])[0].frontier, false);
});

test('缺失、非 closed、closed 依赖与前沿，且不修改原卡', () => {
  const cards = [card('ready', 'closed'), card('next', 'claimed', ['ready.md']), card('missing', 'open', ['absent']), card('waiting', 'open', ['next']), card('retired', 'out_of_scope')];
  const snapshot = structuredClone(cards);
  const result = connectDecisions(cards);
  assert.deepEqual(cards, snapshot);
  assert.equal(result[1].frontier, true);
  assert.deepEqual(result[1].dependencies, [{ id: 'ready', title: '问题 ready', status: 'closed', resolved: true, missing: false }]);
  assert.equal(result[2].blocked, true);
  assert.equal(result[2].dependencies[0].missing, true);
  assert.match(result[2].warnings[0], /Missing/);
  assert.equal(result[3].frontier, false);
  assert.equal(result[3].blocked, true);
  assert.equal(result[4].frontier, false);
});

test('循环即使卡都已关闭仍然阻塞，并能识别自循环', () => {
  const result = connectDecisions([card('a', 'closed', ['b']), card('b', 'closed', ['a']), card('self', 'open', ['self'])]);
  for (const item of result) {
    assert.equal(item.blocked, true);
    assert.equal(item.frontier, false);
    assert.match(item.warnings[0], /Cyclic/);
  }
});

test('路径、basename.md、显式 stem 匹配，重名歧义不猜测', () => {
  const cards = [
    { ...card('same', 'closed'), path: 'one/same.md' },
    { ...card('same', 'closed'), path: 'two/same.md' },
    { ...card('owner', 'open', ['same.md', '../two/same.md', 'one/same.md']), path: 'one/owner.md' },
    { ...card('explicit', 'closed'), path: 'different-filename.md' },
    card('by-id', 'open', ['explicit']),
  ];
  const result = connectDecisions(cards);
  assert.equal(result[2].dependencies[0].resolved, false);
  assert.equal(result[2].dependencies[0].missing, false);
  assert.match(result[2].warnings[0], /Ambiguous/);
  assert.equal(result[2].dependencies[1].resolved, true);
  assert.equal(result[2].dependencies[2].resolved, true);
  assert.equal(result[4].frontier, true);
});

test('代码块中的标题不会创建章节，重复标题保留内容', () => {
  const parsed = parseDecision('# 标题\n## 问题与当前判断\n第一段\n```md\n## 假标题\n```\n## 问题与当前判断\n第二段');
  assert.equal(parsed.sections['假标题'], undefined);
  assert.match(parsed.judgment, /第一段[\s\S]*第二段/);
  assert.equal(parsed.status, '');
  assert.equal(connectDecisions([parsed])[0].frontier, false);
});
