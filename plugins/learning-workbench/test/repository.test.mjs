import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readdir, rm, realpath, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, relative, isAbsolute, resolve } from 'node:path';
import { readStrategy, discussionText } from '../src/repository.mjs';

async function fixture(t) {
  const parent = await realpath(tmpdir());
  const root = await mkdtemp(join(parent, 'strategy-repository-test-'));
  t.after(async () => {
    const target = await realpath(root);
    const rel = relative(parent, target);
    assert.equal(isAbsolute(rel), false);
    assert.ok(!rel.startsWith('..'));
    assert.match(rel, /^strategy-repository-test-[^/\\]+$/);
    assert.equal(target, resolve(parent, rel));
    await rm(target, { recursive: true, force: true });
  });
  const workspace = join(root, 'workspace');
  await mkdir(workspace);
  const put = async (path, text) => {
    const target = join(workspace, path);
    await mkdir(resolve(target, '..'), { recursive: true });
    await writeFile(target, text);
  };
  return { root, workspace, put };
}
const decision = (title = '是否继续？') => `---\ntype: experiment\nstatus: open\ndepends_on: []\n---\n# ${title}\n## 下一步验证\n先做一次真实交付。\n`;

test('空工作空间只读取，不创建任何战略工件', async t => {
  const { workspace } = await fixture(t);
  const snapshot = await readStrategy({ workspace });
  assert.equal(snapshot.map, null);
  assert.deepEqual(snapshot.cards, []);
  assert.equal(snapshot.mapPath, 'STRATEGY-MAP.md');
  assert.equal(snapshot.cardsPath, 'strategy-decisions');
  assert.equal(snapshot.configFound, false);
  assert.deepEqual(await readdir(workspace), []);
});

test('默认地图和决策卡读取，忽略非 Markdown 文件', async t => {
  const { workspace, put } = await fixture(t);
  await put('STRATEGY-MAP.md', '# 战略地图：测试\n## 当前长期方向\n用实践获得反馈。');
  await put('strategy-decisions/真实测试.md', decision());
  await put('strategy-decisions/notes.txt', '不是卡片');
  const snapshot = await readStrategy({ workspace });
  assert.equal(snapshot.map.direction, '用实践获得反馈。');
  assert.equal(snapshot.cards.length, 1);
  assert.equal(snapshot.cards[0].id, '真实测试');
  assert.equal(snapshot.cards[0].frontier, true);
});

test('配置表提供自定义相对路径，路径相对指定项目解析', async t => {
  const { workspace, put } = await fixture(t);
  await put('docs/agents/learning.md', '| 工件 | 路径 |\n| --- | --- |\n| 长期战略地图 | `strategy/map.md` |\n| 战略决策卡 | `strategy/cards` |\n');
  await put('projects/中文项目/strategy/map.md', '# 项目地图');
  await put('projects/中文项目/strategy/cards/交付.md', decision('交付是否有效？'));
  await put('STRATEGY-MAP.md', '# 不应读取根地图');
  const snapshot = await readStrategy({ workspace, project: 'projects/中文项目' });
  assert.equal(snapshot.configFound, true);
  assert.equal(snapshot.project, join(workspace, 'projects/中文项目'));
  assert.equal(snapshot.projectRelative, 'projects/中文项目');
  assert.equal(snapshot.mapPath, 'strategy/map.md');
  assert.equal(snapshot.cardsPath, 'strategy/cards');
  assert.equal(snapshot.map.title, '项目地图');
  assert.equal(snapshot.cards[0].path, 'projects/中文项目/strategy/cards/交付.md');
});

test('缺地图仍保留已有决策卡', async t => {
  const { workspace, put } = await fixture(t);
  await put('strategy-decisions/保留.md', decision());
  const snapshot = await readStrategy({ workspace });
  assert.equal(snapshot.map, null);
  assert.equal(snapshot.cards[0].id, '保留');
});

test('绝对路径和 ../ 越出工作空间均拒绝，包括项目及配置路径', async t => {
  const { root, workspace } = await fixture(t);
  const outside = join(root, 'outside');
  await mkdir(outside);
  await writeFile(join(outside, 'map.md'), '# 外部');
  const requests = [
    { project: outside }, { project: '../outside' },
    { mapPath: join(outside, 'map.md') }, { mapPath: '../outside/map.md' },
    { cardsPath: outside }, { cardsPath: '../outside' },
    { configPath: join(outside, 'map.md') }, { configPath: '../outside/map.md' },
  ];
  for (const request of requests) await assert.rejects(readStrategy({ workspace, ...request }), /战略文件夹/);
});

test('已有符号链接指向工作空间外的项目、地图、目录和配置均拒绝', async t => {
  const { root, workspace } = await fixture(t);
  const outside = join(root, 'outside');
  await mkdir(outside);
  await writeFile(join(outside, 'map.md'), '# 外部');
  await symlink(outside, join(workspace, 'external'), 'dir');
  await symlink(join(outside, 'map.md'), join(workspace, 'external-map.md'), 'file');
  for (const request of [{ project: 'external' }, { cardsPath: 'external' }, { mapPath: 'external-map.md' }, { configPath: 'external-map.md' }]) {
    await assert.rejects(readStrategy({ workspace, ...request }), /战略文件夹以外/);
  }
});

test('超过 1 MiB 的地图拒绝，过大的卡跳过且提供警告', async t => {
  const { workspace, put } = await fixture(t);
  const huge = 'x'.repeat(1024 * 1024 + 1);
  await put('huge-map.md', huge);
  await assert.rejects(readStrategy({ workspace, mapPath: 'huge-map.md' }), /1 MiB/);
  await put('strategy-decisions/huge.md', huge);
  await put('strategy-decisions/valid.md', decision());
  const snapshot = await readStrategy({ workspace });
  assert.deepEqual(snapshot.cards.map(card => card.id), ['valid']);
  assert.ok(snapshot.warnings.some(warning => warning.includes('huge.md') && warning.includes('1 MiB')));
});

test('feedback 提示包含战略文件夹、工件路径与用户主导指令，错误卡 ID 拒绝', async t => {
  const { workspace, put } = await fixture(t);
  await put('projects/体验/strategy-decisions/付费交付.md', decision('继续投入吗？'));
  const snapshot = await readStrategy({ workspace, project: 'projects/体验' });
  const prompt = discussionText(snapshot, { intent: 'feedback', cardId: '付费交付', message: '  实际收到一次付费。  ' });
  assert.ok(prompt.startsWith('/strategyfinder\n'));
  for (const expected of [workspace, snapshot.mapPath, snapshot.cardsPath, 'projects/体验/strategy-decisions/付费交付.md', '继续投入吗？', '先问我实际结果', '由我决定下一步投入', '已有根 Agent 指令与学习配置', '只维护该文件夹', '实际收到一次付费。']) assert.ok(prompt.includes(expected), expected);
  assert.throws(() => discussionText(snapshot, { cardId: '不存在', intent: 'feedback' }), /决策卡已不存在/);
  const general = discussionText(snapshot, { intent: 'feedback' });
  assert.equal(general.includes('当前决策卡：'), false);
  assert.equal(general.includes('undefined'), false);
});

test('单一战略文件夹读取默认地图与决策卡，提示不再区分项目', async t => {
  const { workspace, put } = await fixture(t);
  await put('STRATEGY-MAP.md', '## 当前长期方向\n围绕真实交付形成可重复能力。\n');
  await put('strategy-decisions/交付.md', decision('值得继续交付吗？'));
  const snapshot = await readStrategy({ workspace, project: '.' });
  assert.equal(snapshot.projectRelative, '.');
  assert.equal(snapshot.mapPath, 'STRATEGY-MAP.md');
  assert.equal(snapshot.cardsPath, 'strategy-decisions');
  const prompt = discussionText(snapshot, { intent: 'discuss' });
  assert.match(prompt, /学习战略文件夹：/);
  assert.equal(prompt.includes('当前学习项目'), false);
  assert.match(prompt, /只维护该文件夹/);
});
