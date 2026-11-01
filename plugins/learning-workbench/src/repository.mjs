import { realpath, stat, readdir, open } from 'node:fs/promises';
import { resolve, relative, isAbsolute, basename, dirname } from 'node:path';
import { parseStrategyMap, parseDecision, connectDecisions } from './model.mjs';

const MAX_BYTES = 1024 * 1024;
const MAX_CARDS = 400;
export function within(root, target) {
  const rel = relative(root, target);
  return rel === '' || (!rel.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`) && rel !== '..' && !isAbsolute(rel));
}
async function contained(root, path) {
  const lexical = resolve(root, path);
  if (!within(root, lexical)) throw new Error('路径必须位于所选学习战略文件夹内。');
  let actual;
  let ancestor = lexical;
  for (;;) {
    try { actual = await realpath(ancestor); break; }
    catch (error) {
      if (error.code !== 'ENOENT') throw error;
      const parent = dirname(ancestor);
      if (parent === ancestor) throw error;
      ancestor = parent;
    }
  }
  if (!within(root, actual)) throw new Error('链接指向了学习战略文件夹以外的位置。');
  return resolve(actual, relative(ancestor, lexical));
}
async function textFile(root, path, optional = false) {
  const target = await contained(root, path);
  let handle;
  try {
    handle = await open(target, 'r');
    const info = await handle.stat();
    if (!info.isFile()) throw new Error(`不是普通文件：${path}`);
    if (info.size > MAX_BYTES) throw new Error(`文件超过 1 MiB，无法展示：${path}`);
    const buffer = Buffer.alloc(MAX_BYTES + 1);
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
    if (bytesRead > MAX_BYTES) throw new Error(`文件超过 1 MiB：${path}`);
    return buffer.subarray(0, bytesRead).toString('utf8');
  } catch (error) { if (optional && error.code === 'ENOENT') return null; throw error; }
  finally { await handle?.close(); }
}
function configuredPath(config, label) {
  for (const line of (config || '').split('\n')) {
    const cells = line.split('|').map(s => s.trim());
    if (cells[1] !== label) continue;
    const value = cells[2]?.replace(/^`|`$/g, '').trim();
    if (!value || /[<>；;]/.test(value)) return null;
    return value;
  }
  return null;
}
export async function readStrategy(request) {
  if (!request || typeof request.workspace !== 'string' || !isAbsolute(request.workspace.trim())) throw new Error('请先选择一个绝对路径的学习战略文件夹。');
  const workspace = await realpath(request.workspace.trim());
  if (!(await stat(workspace)).isDirectory()) throw new Error('学习战略文件夹必须是文件夹。');
  const projectRelative = typeof request.project === 'string' && request.project.trim() ? request.project.trim() : '.';
  const project = await contained(workspace, projectRelative);
  if (!(await stat(project)).isDirectory()) throw new Error('所选学习战略文件夹不存在。');
  const configPath = typeof request.configPath === 'string' && request.configPath.trim() ? request.configPath.trim() : 'docs/agents/learning.md';
  const config = await textFile(workspace, configPath, true);
  const mapPath = request.mapPath?.trim() || configuredPath(config, '长期战略地图') || 'STRATEGY-MAP.md';
  const cardsPath = request.cardsPath?.trim() || configuredPath(config, '战略决策卡') || 'strategy-decisions';
  const mapAbsolute = await contained(workspace, resolve(project, mapPath));
  const cardsAbsolute = await contained(workspace, resolve(project, cardsPath));
  const warnings = [];
  const mapText = await textFile(workspace, mapAbsolute, true);
  let entries = [];
  try { entries = await readdir(cardsAbsolute, { withFileTypes: true }); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const candidates = entries.filter(entry => entry.isFile() && /\.md$/i.test(entry.name)).sort((a,b) => a.name.localeCompare(b.name, 'zh-CN'));
  if (candidates.length > MAX_CARDS) warnings.push(`决策卡超过 ${MAX_CARDS} 张，本次仅展示前 ${MAX_CARDS} 张。`);
  const cards = [];
  for (const entry of candidates.slice(0, MAX_CARDS)) {
    const path = resolve(cardsAbsolute, entry.name);
    try { cards.push(parseDecision(await textFile(workspace, path), { path: relative(workspace, path) })); }
    catch (error) { warnings.push(`${entry.name}：${error.message}`); }
  }
  return {
    workspace, project, projectRelative: relative(workspace, project) || '.', name: basename(project),
    configPath, configFound: config !== null, mapPath: relative(project, mapAbsolute), cardsPath: relative(project, cardsAbsolute),
    map: mapText === null ? null : parseStrategyMap(mapText, { path: relative(workspace, mapAbsolute) }),
    cards: connectDecisions(cards), warnings, loadedAt: new Date().toISOString(),
  };
}

export function discussionText(snapshot, { cardId, intent = 'discuss', message = '' } = {}) {
  const card = cardId ? snapshot.cards.find(card => card.id === cardId) : null;
  if (cardId && !card) throw new Error('决策卡已不存在，请刷新后再试。');
  const action = intent === 'feedback' ? '我带回了真实测试反馈，请先问我实际结果，再对照原预期复盘，由我决定下一步投入。' : card ? '请继续推进这张战略决策卡，先让我表达当前判断与依据。' : '请与我讨论当前学习战略，先了解我的实践、投入和反馈。';
  return `/strategyfinder\n\n${action}\n学习战略文件夹：${snapshot.workspace}\n战略地图：${snapshot.mapPath}\n战略决策卡目录：${snapshot.cardsPath}${card ? `\n当前决策卡：${card.path}\n决策问题：${card.title}` : ''}\n请遵循已有根 Agent 指令与学习配置，只维护该文件夹的战略工件，不自动启动计划、任务或教学入口。${message.trim() ? `\n\n我的补充：\n${message.trim()}` : ''}`;
}
