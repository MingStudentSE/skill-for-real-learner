import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { readStrategy, discussionText } from './repository.mjs';

export const name = 'learning-workbench';
export const inject = ['connection', 'skills'];
const LIMIT = 32768;
export async function handleRequest(request) {
  if (request.method !== 'POST') return Response.json({ error: '请使用 POST 请求。' }, { status: 405 });
  if (Number(request.headers.get('content-length') || 0) > LIMIT) return Response.json({ error: '请求内容过长。' }, { status: 413 });
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > LIMIT) return Response.json({ error: '请求内容过长。' }, { status: 413 });
    const body = JSON.parse(text);
    if (!body || !['snapshot', 'discussion'].includes(body.action)) throw new Error('未知的战略操作。');
    const requestBinding = body.binding;
    if (!requestBinding || typeof requestBinding !== 'object') throw new Error('请先选择学习战略文件夹。');
    for (const k of ['workspace','project','configPath','mapPath','cardsPath']) if (requestBinding[k] !== undefined && (typeof requestBinding[k] !== 'string' || requestBinding[k].length > 4096)) throw new Error('路径格式不正确。');
    const snapshot = await readStrategy(requestBinding);
    if (body.action === 'snapshot') return Response.json(snapshot, { headers: { 'cache-control': 'no-store' } });
    const discussion = body.discussion || {};
    if (typeof (discussion.message ?? '') !== 'string' || (discussion.message || '').length > 12000) throw new Error('补充内容过长或格式不正确。');
    if (discussion.cardId !== undefined && typeof discussion.cardId !== 'string') throw new Error('决策卡标识不正确。');
    if (discussion.intent !== undefined && !['discuss','feedback'].includes(discussion.intent)) throw new Error('讨论类型不正确。');
    return Response.json({ prompt: discussionText(snapshot, discussion), cwd: snapshot.project, workspace: snapshot.workspace }, { headers: { 'cache-control': 'no-store' } });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : '读取战略资料失败。' }, { status: 400 });
  }
}

export function apply(ctx) {
  ctx.connection.fetch.register({
    path: '/api/strategy-workbench/state', methods: ['POST'], requestBody: 'buffered', fetch: handleRequest,
  });
  // A low-priority fallback keeps project/user installed skills authoritative.
  // Resources are copied unchanged from this repository at build time.
  const provider = 'learning-workbench-bundled';
  const entries = [
    ['strategyfinder', '通过质询、投入反馈分析和低成本测试，建立或调整长期学习方向与资源取舍。', false],
    ['grilling', '可复用的分轮访谈和质询方法。', true],
    ['learn-modeling', '对指定学习材料和概念建立有来源的学习模型。', true],
  ].map(([name,description,modelInvocable]) => ({
    name, description, invocation: { modelInvocable, userInvocable: true }, source: '学习工作台', provider, rank: 10000,
    path: fileURLToPath(new URL(`../dist/skills/${name}/SKILL.md`, import.meta.url)),
  }));
  ctx.skills.registerProvider(() => ({ name: provider, list: () => entries, async get(candidate) {
    const entry = entries.find(e => e.name === candidate.name && e.path === candidate.path);
    if (!entry) return undefined;
    return { ...entry, content: await readFile(entry.path, 'utf8') };
  } }));
}
