import React from 'react';
import { StrategyApp } from './App.jsx';

export const inject = ['slots', 'layout', 'uiWorkspace', 'workspaces', 'remote', 'remote.session'];
const KEY = 'dsh-learning-workbench.binding.v1';
const LEGACY_KEY = 'dsh-strategy-workbench.binding.v1';
function unwrap(result) {
  if (result?.ok === false) throw new Error(result.error?.message || result.error?.code || 'Harness 操作失败。');
  if (result?.ok === true) return result.value;
  if (result && typeof result === 'object' && result.error) throw new Error(result.error.message || result.error.code || 'Harness 操作失败。');
  if (result === undefined || result === null) throw new Error('Harness 没有返回结果，请检查插件兼容版本。');
  // Some client services return their value directly instead of a RemoteResult.
  return result;
}
export async function request(action, binding, discussion) {
  const carrier = globalThis.__DSH_TRANSPORT__?.fetch;
  const response = await (carrier ? carrier('api/strategy-workbench/state', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action, binding, discussion }),
  }) : fetch('api/strategy-workbench/state', {
    method: 'POST', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action, binding, discussion }),
  }));
  let result;
  try { result = await response.json(); } catch { throw new Error(`战略接口不可用（${response.status}），请确认 Host 插件已加载。`); }
  if (!response.ok) throw new Error(result.error || `读取失败（${response.status}）`);
  return result;
}
export function createAdapter(ctx, { workbenches } = {}) {
  let pending = null;
  let inFlight = false;
  const ownedSessions = new Map();
  return {
    surface: workbenches ? 'desktop' : 'panel',
    getBinding() { try { return JSON.parse(localStorage.getItem(KEY) || localStorage.getItem(LEGACY_KEY) || 'null'); } catch { return null; } },
    saveBinding(value) { try {localStorage.setItem(KEY,JSON.stringify(value));} catch { /* Current page still works when persistent browser storage is unavailable. */ } },
    pickDirectory: () => ctx.uiWorkspace.pickDirectory(),
    snapshot: binding => request('snapshot', binding),
    async discuss(binding, discussion) {
      if (inFlight) throw new Error('另一项战略讨论正在打开，请稍后重试。');
      inFlight = true;
      try {
        const selectionKey = JSON.stringify([binding, discussion]);
        if (pending && pending.key !== selectionKey) pending = null;
        const prepared = await request('discussion', binding, discussion);
        if (pending && pending.cwd !== prepared.cwd) pending = null;
        if (!pending) {
          let sessionId;
          if (workbenches) {
            if (!workbenches.isActive()) throw new Error('学习工作台已切换，请返回后再讨论。');
            const saved = ownedSessions.get(prepared.cwd);
            sessionId = await workbenches.ensureSession({ folder: prepared.cwd, ...(saved && workbenches.ownsSession(saved) ? { sessionId: saved } : {}) });
            ownedSessions.set(prepared.cwd, sessionId);
          } else {
            // ctx.workspaces.create returns the Workspace directly; remote.session.create returns a RemoteResult.
            const workspace = await ctx.workspaces.create({ path: prepared.cwd });
            const workspaceId = workspace?.workspaceId ?? workspace?.workspace?.workspaceId;
            if (!workspaceId) throw new Error('Harness 没有返回工作区标识，请检查工作区接口版本。');
            const created = unwrap(await ctx.remote.session.create({ workspaceId }));
            sessionId = created?.sessionId ?? created?.value?.sessionId ?? (typeof created === 'string' ? created : undefined);
            if (!sessionId) throw new Error('Harness 没有返回会话标识，请检查会话接口版本。');
          }
          pending = { key: selectionKey, cwd: prepared.cwd, prompt: prepared.prompt, sessionId, requestId: crypto.randomUUID() };
        }
        const attempt = pending;
        if (workbenches && (!workbenches.isActive() || !workbenches.ownsSession(attempt.sessionId) || workbenches.currentSession() !== attempt.sessionId)) throw new Error('工作台或当前会话已切换，请返回本项目后重试。');
        // The installed Host's tool-skill pre-step recognizes this explicit /strategyfinder gesture.
        unwrap(await ctx.remote.session.prompt({ requestId: attempt.requestId, sessionId: attempt.sessionId, mode: 'queue', content: [{ type: 'text', text: attempt.prompt }], clientTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
        if (!workbenches) {
          ctx.uiWorkspace.openSession(attempt.sessionId);
          ctx.layout.selectPanel(null);
        }
        if (pending === attempt) pending = null;
      } finally {
        inFlight = false;
      }
    },
  };
}
export function apply(ctx) {
  let desktopRegistered = false;
  ctx.inject(['desktopWorkbenches'], scoped => {
    const workbenches = scoped.desktopWorkbenches;
    const nativeAdapter = createAdapter(scoped, { workbenches });
    const DesktopPanel = () => <StrategyApp adapter={nativeAdapter}/>;
    scoped.effect(() => workbenches.register({
      title: '学习工作台', panelTitle: '学习战略', icon: '◈',
      repository: 'https://github.com/MingStudentSE/skill-for-real-learner',
      description: '在本地学习空间中讨论方向、查看决策和验证反馈。',
      author: 'Skills for Real Learners', embedded: true, initialization: 'empty',
      headerLayout: 'compact', layout: { businessSide: 'left', businessWidth: 0.7 },
    }, DesktopPanel));
    desktopRegistered = true;
  });
  if (desktopRegistered) return;
  let hasDesktop = false;
  try { hasDesktop = Boolean(ctx.get?.('desktopWorkbenches')); } catch { hasDesktop = false; }
  if (hasDesktop) return;
  const adapter = createAdapter(ctx);
  const id = 'learning-workbench';
  const Page = () => <StrategyApp adapter={adapter}/>;
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: id }, Page));
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id, label: '学习工作台', order: 25 }, () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/></svg>));
  // Ordinary conversations must stay untouched: no hero embedding or extra column.
}
