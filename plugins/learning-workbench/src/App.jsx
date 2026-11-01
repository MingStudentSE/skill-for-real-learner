import React, { useState, useEffect, useRef, useId } from 'react';
import { WorkbenchFrame, FeatureHome } from './WorkbenchFrame.jsx';
import { Icon } from './icons.jsx';
import { folderBinding } from './binding.mjs';
import cssText from './style.css';

export const STATUS = { open: '待推进', claimed: '讨论中', closed: '已形成取舍', out_of_scope: '不再相关' };
const TYPE = { grilling: '取舍质询', research: '事实查证', experiment: '真实测试', prototype: '原型验证', task: '前置行动' };
const RESOURCE_COLUMNS = [['invested', '实际投入'], ['results', '结果与沉淀'], ['next', '下一阶段投入'], ['reduce', '相应减少什么']];
const EVIDENCE = [['facts', '事实'], ['selfReport', '自述'], ['inference', '推断'], ['unknowns', '未知']];
const DEFAULT_DECISIONS = { filter: 'all', query: '', selected: null, graph: true };
function Inline({ text }) {
  const pieces = String(text || '').split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return pieces.map((p, i) => p.startsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : p.startsWith('`') ? <code key={i}>{p.slice(1, -1)}</code> : /^\[/.test(p) ? <span key={i} title={p.match(/\((.*)\)$/)?.[1]}>{p.match(/^\[([^\]]+)\]/)?.[1]} <span className="sw-ref">↗</span></span> : p);
}
function Text({ value, empty = '尚未记录', className = '' }) {
  if (!value?.trim()) return <p className="sw-empty-line">{empty}</p>;
  return <div className={`sw-text ${className}`}>{value.split(/\n\s*\n/).map((part, i) => <div key={i}>{part.split('\n').map((line, j) => <p key={j} className={/^\s*[-*]\s/.test(line) ? 'sw-bullet' : ''}><Inline text={line.replace(/^\s*[-*]\s/, '')}/></p>)}</div>)}</div>;
}
function warningText(value) {
  return value.replace('Missing dependency:', '未找到前置决策：').replace('Ambiguous dependency:', '前置决策重名，请核对路径：').replace('Cyclic dependency:', '决策依赖出现循环：').replace('Dependency is not closed:', '前置决策尚未形成取舍：').replace(/\((open|claimed|out_of_scope)\)/g, (_, s) => `（${STATUS[s]}）`);
}
function Badge({ status }) { return <span className={`sw-badge sw-status-${['open','claimed','closed','out_of_scope'].includes(status) ? status : 'custom'}`}><i aria-hidden="true"/>{STATUS[status] || status || '未标状态'}</span>; }
function Empty({ title, children, action }) {
  return <div className="sw-empty"><span className="sw-empty-mark"><Icon name="book" size={22}/></span><h3>{title}</h3><p>{children}</p>{action}</div>;
}
function Section({ title, children, extra, caption, card = false, className = '' }) {
  return <section className={`sw-section ${card ? 'sw-card' : ''} ${className}`}><div className="sw-section-head"><div><h3>{title}</h3>{caption && <p className="sw-caption">{caption}</p>}</div>{extra}</div>{children}</section>;
}
function SourceDialog({ source, onClose }) {
  const dialog = useRef(null), titleId = useId();
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} className="sw-dialog sw-source" aria-labelledby={titleId} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <header className="sw-dialog-head"><div><span className="sw-eyebrow">来源文件</span><h2 id={titleId}>{source.path}</h2></div><button type="button" className="sw-icon-btn" aria-label="关闭来源" onClick={onClose}><Icon name="close" size={18}/></button></header>
    <pre>{source.markdown}</pre>
  </dialog>;
}

function SpaceForm({ initial, onLoad, onCancel, pickDirectory, busy }) {
  const base = { folder: initial?.workspace || '' };
  const [draft, setDraft] = useState(base);
  const [error, setError] = useState('');
  const [confirming, setConfirming] = useState(false);
  const errorRef = useRef(null), folderRef = useRef(null), continueRef = useRef(null);
  const dirty = draft.folder.trim() !== base.folder.trim();
  useEffect(() => { if (error) errorRef.current?.focus({ preventScroll: false }); }, [error]);
  useEffect(() => { if (confirming) continueRef.current?.focus(); }, [confirming]);
  function field(key, value) { setDraft(d => ({ ...d, [key]: value })); setConfirming(false); }
  async function choose() { try { const path = await pickDirectory(); if (path) field('folder', path); } catch (e) { setError(e.message); } }
  function cancel() { if (busy) return; if (dirty) setConfirming(true); else onCancel?.(); }
  return <form className="sw-space-form" aria-label={initial?.workspace ? '战略文件夹设置' : undefined} onSubmit={e => { e.preventDefault(); setError(''); setConfirming(false); onLoad({ workspace: draft.folder.trim(), project: '.' }).catch(e => setError(e.message)); }}>
    {!initial?.workspace && <header className="sw-form-head"><span className="sw-eyebrow">学习工作台</span><h1>从学习战略文件夹开始</h1><p>选择直接包含战略地图与决策卡的文件夹。工作台只读取其中的内容。</p></header>}
    <fieldset className="sw-fieldset">
      <label className="sw-field"><span>学习战略文件夹<span className="sw-required">必填</span></span>
        <div className="sw-input-row"><input ref={folderRef} required aria-label="学习战略文件夹" value={draft.folder} placeholder="学习战略文件夹的完整路径" onChange={e => field('folder', e.target.value)}/>{pickDirectory && <button type="button" className="sw-btn" onClick={choose}><Icon name="folder" size={17}/>选择文件夹</button>}</div>
        <small>读取该文件夹下的 STRATEGY-MAP.md 与 strategy-decisions/。若该文件夹内的 docs/agents/learning.md 映射了其他位置，以配置为准。</small>
      </label>
    </fieldset>
    {error && <p ref={errorRef} tabIndex={-1} role="alert" className="sw-error">{error}</p>}
    {onCancel && confirming && <div className="sw-confirm"><span role="status">有未保存的修改，确定放弃？</span><div><button ref={continueRef} type="button" className="sw-btn sw-btn-ghost" onClick={() => { setConfirming(false); requestAnimationFrame(() => folderRef.current?.focus()); }}>继续编辑</button><button type="button" className="sw-btn" onClick={() => { setConfirming(false); onCancel(); }}>放弃修改</button></div></div>}
    <div className="sw-form-actions">{onCancel && <button type="button" className="sw-btn sw-btn-ghost" onClick={cancel} disabled={busy}>取消</button>}<button className="sw-btn sw-btn-primary" disabled={busy} type="submit">{busy ? '正在读取…' : initial?.workspace ? '保存并重新读取' : '打开学习工作台'}{!busy && <Icon name="arrowRight" size={16}/>}</button></div>
  </form>;
}

function Overview({ data, onSource, onView }) {
  const map = data.map;
  if (!map) return <Empty title="还没有战略地图" action={data.cards.length ? <button type="button" className="sw-btn sw-btn-ghost" onClick={() => onView('decisions')}>查看决策地图<Icon name="arrowRight" size={15}/></button> : undefined}>从已有实践和投入聊起，逐步形成值得持续投入的方向。已有决策卡仍可在“决策地图”查看。</Empty>;
  return <div className="sw-overview">
    <section className="sw-direction">
      <span className="sw-eyebrow">当前长期方向</span>
      <Text value={map.direction} empty="方向尚未明确，可从一个候选方向开始讨论。" className="sw-direction-text"/>
      <button type="button" className="sw-link" onClick={() => onSource(map)}><Icon name="source" size={15}/>查看战略原文</button>
    </section>
    <Section title="投入与取舍" caption="保留原始记录 · 计划投入与实际投入分别呈现">
      {map.resources.length
        ? <div className="sw-table-wrap"><table className="sw-resources"><thead><tr><th scope="col">方向</th>{RESOURCE_COLUMNS.map(([key, label]) => <th scope="col" key={key}>{label}</th>)}</tr></thead><tbody>{map.resources.map((r, i) => <tr key={i}><th scope="row" data-label="方向"><Inline text={r.direction}/></th>{RESOURCE_COLUMNS.map(([key, label]) => <td key={key} data-label={label}><Inline text={r[key] || '未记录'}/></td>)}</tr>)}</tbody></table></div>
        : <Text value={map.sections['当前阶段与资源配置']} empty="尚未记录投入对照。没有可比数字时，可以保留定性判断。"/>}
    </Section>
    <div className="sw-card-grid">
      <Section card title="要守住的底座"><Text value={map.principles}/></Section>
      <Section card title="长期积累的假设"><Text value={map.compounding}/></Section>
      <Section card title="已经作出的取舍"><Text value={map.choices}/></Section>
      <Section card title="明确不做"><Text value={map.excluded}/></Section>
    </div>
    <Section title="仍需想清楚" className="sw-callout"><Text value={map.unknowns}/></Section>
  </div>;
}

function Graph({ cards, onSelect, selected }) {
  const marker = useId().replace(/:/g, '');
  const visible = cards.slice(0, 40);
  const ids = new Set(visible.map(c => c.id));
  const levels = new Map();
  const level = (c, seen = new Set()) => { if (levels.has(c.id)) return levels.get(c.id); if (seen.has(c.id)) return 0; const s = new Set(seen).add(c.id); const parents = c.dependencies.filter(d => !d.missing && ids.has(d.id)).map(d => visible.find(n => n.id === d.id)); const computed = Math.min(5, parents.length ? 1 + Math.max(...parents.map(p => level(p, s))) : 0); levels.set(c.id, computed); return computed; };
  visible.forEach(c => levels.set(c.id, level(c)));
  const counts = {};
  const positions = new Map(visible.map(c => { const l = levels.get(c.id); const y = (counts[l] || 0); counts[l] = y + 1; return [c.id, { x: 24 + l * 260, y: 24 + y * 104 }]; }));
  const width = Math.max(540, ...[...positions.values()].map(p => p.x + 250));
  const height = Math.max(180, ...[...positions.values()].map(p => p.y + 100));
  return <div className="sw-graph">
    <div className="sw-graph-note"><span>前置决策 → 后续决策</span><small>实线只表示文件中明确记录的依赖<span className="sw-graph-hint"> · 横向滚动查看更多</span></small></div>
    <div className="sw-graph-scroll" tabIndex={0} aria-label="决策依赖图，可横向滚动，下方列表包含相同信息">
      <div style={{ width, height, position: 'relative' }}>
        <svg width={width} height={height} aria-hidden="true" className="sw-edges"><defs><marker id={marker} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7" fill="currentColor"/></marker></defs>{visible.flatMap(c => c.dependencies.filter(d => positions.has(d.id)).map(d => { const from = positions.get(d.id), to = positions.get(c.id); return <path key={`${d.id}-${c.id}`} d={`M${from.x + 218},${from.y + 38} C${from.x + 240},${from.y + 38} ${to.x - 22},${to.y + 38} ${to.x},${to.y + 38}`} fill="none" stroke="currentColor" strokeWidth="1.4" markerEnd={`url(#${marker})`}/>; }))}</svg>
        {visible.map(c => { const pos = positions.get(c.id); return <button type="button" key={c.id} style={{ left: pos.x, top: pos.y }} className={`sw-node ${selected === c.id ? 'is-selected' : ''}`} onClick={e => onSelect(c.id, e.currentTarget)}><span className="sw-node-type">{TYPE[c.type] || c.type || '决策'} · {c.frontier ? '可推进' : c.blocked ? '有前置依赖' : STATUS[c.status] || c.status}</span><strong>{c.title}</strong></button>; })}
      </div>
    </div>
    {cards.length > 40 && <p className="sw-caption">图中显示前 40 张卡；完整信息见下方列表。</p>}
  </div>;
}

function Inspector({ card, onSource, onDiscuss, onClose }) {
  const backRef = useRef(null);
  useEffect(() => { backRef.current?.focus({ preventScroll: true }); }, []);
  return <aside className="sw-inspector" aria-label="决策详情">
    <div className="sw-inspector-top"><button ref={backRef} type="button" className="sw-back" onClick={onClose}><Icon name="arrowLeft" size={15}/>决策列表</button><Badge status={card.status}/></div>
    <span className="sw-eyebrow">{TYPE[card.type] || card.type || '战略决策'}</span>
    <h3>{card.title}</h3>
    <div className="sw-detail-actions"><button type="button" className="sw-btn sw-btn-primary" onClick={() => onDiscuss(card.id)}>讨论这项决策<Icon name="arrowRight" size={15}/></button><button type="button" className="sw-icon-btn" onClick={() => onSource(card)} aria-label="查看决策原文"><Icon name="source" size={18}/></button></div>
    {card.warnings.map((w, i) => <p className="sw-warning" key={i}>{warningText(w)}</p>)}
    <section className="sw-inspector-section"><h4>问题与当前判断</h4><Text value={card.judgment}/></section>
    {!!card.dependencies.length && <section className="sw-inspector-section"><h4>前置决策</h4><ul className="sw-dependencies">{card.dependencies.map((d, i) => <li key={i}><span aria-hidden="true">{d.resolved && d.status === 'closed' ? '✓' : '○'}</span><span>{d.title || d.id}</span><small>{d.missing ? '无法定位，需核对原文' : STATUS[d.status] || d.status}</small></li>)}</ul></section>}
    <section className="sw-inspector-section"><h4>证据与投入反馈</h4><div className="sw-evidence-grid">{EVIDENCE.map(([key, label]) => <div className="sw-evidence-item" key={key}><span>{label}</span><Text value={card.evidence[key]}/></div>)}</div>{card.sections['证据与投入反馈'] && !Object.values(card.evidence).some(Boolean) && <Text value={card.sections['证据与投入反馈']}/>}</section>
    <section className="sw-inspector-section"><h4>下一步验证</h4><Text value={card.next}/></section>
    <section className="sw-inspector-section"><h4>长期投入检查</h4><Text value={card.guardrails}/></section>
    <section className="sw-inspector-section"><h4>关闭条件</h4><Text value={card.closure}/></section>
    <section className="sw-inspector-section"><h4>实际结果与结论</h4><Text value={card.result}/></section>
  </aside>;
}

function Decisions({ data, state, onChange, onSource, onDiscuss, scrollRef }) {
  const { filter, query, selected, graph } = state;
  const cards = data.cards.filter(c => (filter === 'all' || filter === 'frontier' && c.frontier || filter === 'blocked' && c.blocked || c.status === filter) && `${c.title}\n${c.judgment}\n${c.evidence.unknowns}`.toLowerCase().includes(query.toLowerCase()));
  const card = data.cards.find(c => c.id === selected);
  const searchRef = useRef(null), rowRefs = useRef(new Map()), prevSelected = useRef(null), restoreScroll = useRef(null), trigger = useRef(null);
  const filtered = query || filter !== 'all';
  const isNarrow = () => ((scrollRef?.current?.closest('.sw-root')?.clientWidth) || Infinity) <= 1180;
  function open(id, el) {
    trigger.current = el || null;
    restoreScroll.current = isNarrow() ? (scrollRef?.current?.scrollTop || 0) : null;
    onChange({ selected: id });
    if (isNarrow()) requestAnimationFrame(() => scrollRef?.current?.scrollTo({ top: 0 }));
  }
  function close() { onChange({ selected: null }); }
  function resetFilters() { onChange({ query: '', filter: 'all' }); requestAnimationFrame(() => searchRef.current?.focus()); }
  useEffect(() => {
    if (selected) { prevSelected.current = selected; return; }
    const id = prevSelected.current;
    if (!id) return;
    prevSelected.current = null;
    const row = rowRefs.current.get(id);
    if (restoreScroll.current != null && scrollRef?.current) scrollRef.current.scrollTop = restoreScroll.current;
    restoreScroll.current = null;
    const target = trigger.current && document.contains(trigger.current) ? trigger.current : row;
    trigger.current = null;
    (target || searchRef.current)?.focus({ preventScroll: true });
  }, [selected]);
  useEffect(() => {
    function onKey(e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
      const scope = scrollRef?.current?.closest('.sw-root');
      if (!scope || !(e.target instanceof Node) || !scope.contains(e.target)) return;
      if (document.querySelector('dialog[open]')) return;
      if (card && isNarrow()) return;
      if (e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { if (selected && !cards.some(c => c.id === selected)) onChange({ selected: null }); }, [filter, query, data.cards]);
  useEffect(() => {
    if (!card) return;
    function onKey(e) {
      if (e.key !== 'Escape' || e.target.closest('dialog, input, textarea, select')) return;
      const scope = scrollRef?.current?.closest('.sw-root');
      if (!scope || !(e.target instanceof Node) || !scope.contains(e.target)) return;
      e.preventDefault();
      close();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [card]);
  return <div className={`sw-decision-layout ${card ? 'has-inspector' : ''}`}>
    <div className="sw-decision-main">
      <div className="sw-toolbar">
        <label className="sw-search"><Icon name="search" size={16}/><span className="sw-sr">搜索战略问题</span><input ref={searchRef} value={query} onChange={e => onChange({ query: e.target.value })} onKeyDown={e => { if (e.key === 'Escape') { e.stopPropagation(); if (query) onChange({ query: '' }); else e.currentTarget.blur(); } }} aria-label="搜索战略问题" placeholder="搜索问题、判断或假设" title="按 / 聚焦搜索"/>{query ? <button type="button" className="sw-search-clear" aria-label="清除搜索" onClick={() => { onChange({ query: '' }); searchRef.current?.focus(); }}><Icon name="close" size={13}/></button> : <span className="sw-kbd" aria-hidden="true">/</span>}</label>
        <label className="sw-select"><span className="sw-sr">筛选决策状态</span><select value={filter} onChange={e => onChange({ filter: e.target.value })}>{[['all', '全部决策'], ['frontier', '现在可推进'], ['blocked', '有前置依赖'], ...Object.entries(STATUS)].map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
        <button type="button" className="sw-btn sw-btn-ghost" aria-pressed={graph} onClick={() => onChange({ graph: !graph })}><Icon name="decisions" size={16}/>{graph ? '收起关系图' : '展开关系图'}</button>
      </div>
      <div className="sw-list-meta"><span role="status" aria-live="polite">显示 {cards.length} / {data.cards.length} 张决策卡</span>{filtered && cards.length > 0 && <button type="button" className="sw-link" onClick={resetFilters}>清除筛选</button>}</div>
      {graph && cards.length > 0 && <Graph cards={cards} onSelect={(id, el) => open(id, el)} selected={selected}/>}
      {!cards.length
        ? <Empty title={data.cards.length ? '没有匹配的决策' : '还没有决策卡'} action={data.cards.length ? <button type="button" className="sw-btn sw-btn-ghost" onClick={resetFilters}>清除筛选</button> : undefined}>需要跨会话跟进的关键问题，会在战略讨论中形成决策卡。</Empty>
        : <div className="sw-decision-list" aria-label="决策列表">{cards.map(c => <button type="button" key={c.id} ref={el => { if (el) rowRefs.current.set(c.id, el); else rowRefs.current.delete(c.id); }} onClick={e => open(c.id, e.currentTarget)} aria-current={selected === c.id ? 'true' : undefined} className={`sw-decision-row ${selected === c.id ? 'is-selected' : ''}`}><span className="sw-kind">{TYPE[c.type] || c.type || '未分类'}</span><span className="sw-row-main"><strong>{c.title}</strong><small>{c.dependencies.length ? `前置：${c.dependencies.map(d => d.title || d.id).join('、')}` : c.evidence.unknowns || c.judgment || '打开查看判断与依据'}</small></span><span className="sw-row-state">{c.frontier && <span className="sw-frontier">可推进</span>}<Badge status={c.status}/></span><Icon name="arrowRight" size={16}/></button>)}</div>}
    </div>
    {card && <Inspector key={card.id} card={card} onSource={onSource} onDiscuss={onDiscuss} onClose={close}/>}
  </div>;
}

function Experiments({ data, onSource, onDiscuss }) {
  const cards = data.cards.filter(c => ['experiment', 'prototype'].includes(c.type));
  if (!cards.length) return <Empty title="还没有真实测试">当关键假设需要行动验证时，在战略讨论中设计一次投入可控的测试。</Empty>;
  return <div className="sw-experiments">
    <p className="sw-intro">把预期和实际反馈放在一起。测试完成与长期假设得到证明，分别判断。</p>
    {cards.map(c => <section className="sw-experiment" key={c.id}>
      <header><div><span className="sw-eyebrow">{TYPE[c.type]}</span><h3>{c.title}</h3></div><Badge status={c.status}/></header>
      <div className="sw-hypothesis"><span>关键未知</span><Text value={c.evidence.unknowns} empty="尚未单独记录，可在原文中核对。"/></div>
      <div className="sw-comparison">
        <div className="sw-phase"><span className="sw-phase-index">01</span><div><span className="sw-eyebrow">行动前</span><h4>验证安排与预期</h4><Text value={c.next}/></div></div>
        <div className="sw-phase"><span className="sw-phase-index">02</span><div><span className="sw-eyebrow">结果返回后</span><h4>实际反馈与投入决定</h4><Text value={c.result} empty="尚未记录实际结果。等待真实反馈后再判断。"/></div></div>
      </div>
      <footer><button type="button" className="sw-link" onClick={() => onSource(c)}><Icon name="source" size={16}/>查看原文</button><button type="button" className="sw-btn sw-btn-ghost" onClick={() => onDiscuss(c.id, 'feedback')}>带回测试反馈<Icon name="arrowRight" size={16}/></button></footer>
    </section>)}
  </div>;
}

function History({ data, onSource }) {
  if (!data.map) return <Empty title="尚未记录战略历史">形成方向与取舍后，修订记录会保留判断变化的原因。</Empty>;
  return <div className="sw-history-view">
    <Section title="战略修订记录" extra={<button type="button" className="sw-link" onClick={() => onSource(data.map)}><Icon name="source" size={16}/>查看原文</button>}><Text value={data.map.revisions}/></Section>
    <Section title="已经结束的关键问题">
      {data.cards.filter(c => ['closed', 'out_of_scope'].includes(c.status)).map(c => <div className="sw-history" key={c.id}><Badge status={c.status}/><div><h4>{c.title}</h4><Text value={c.result} empty="结论尚未单独记录，请核对原文。"/><button type="button" className="sw-link" onClick={() => onSource(c)}>查看依据<Icon name="arrowRight" size={14}/></button></div></div>)}
    </Section>
  </div>;
}

export function StrategyApp({ adapter }) {
  const [binding, setBinding] = useState(() => folderBinding(adapter.getBinding?.() || null));
  const [feature, setFeature] = useState(null);
  const [data, setData] = useState(null), [editing, setEditing] = useState(!binding), [loading, setLoading] = useState(false), [error, setError] = useState(''), [tab, setTab] = useState('overview'), [source, setSource] = useState(null), [discussion, setDiscussion] = useState(null), [message, setMessage] = useState(''), [sending, setSending] = useState(false), [notice, setNotice] = useState(''), [decisionView, setDecisionView] = useState(DEFAULT_DECISIONS);
  const generation = useRef(0), launchLock = useRef(false), discussionRef = useRef(null), discussionTitleId = useId(), stageContentRef = useRef(null), stageHeadingRef = useRef(null);
  function enterFeature(id) { setFeature(id); }
  function updateDecision(patch) { setDecisionView(current => ({ ...current, ...patch })); }
  function leaveFeature() { setFeature(null); }
  async function load(input = binding, save = false) { const next = folderBinding(input); if (!next) return; const id = ++generation.current; setLoading(true); setError(''); try { const result = await adapter.snapshot(next); if (id !== generation.current) return; if (result.project !== data?.project) { setDecisionView(DEFAULT_DECISIONS); setTab('overview'); } setData(result); setSource(null); setBinding(next); if (save) { adapter.saveBinding?.(next); setNotice('学习战略文件夹已保存，资料已重新读取。'); } setEditing(false); } catch (e) { if (id === generation.current) setError(e.message); throw e; } finally { if (id === generation.current) setLoading(false); } }
  useEffect(() => { if (binding) load(binding).catch(() => {}); return () => { generation.current++; }; }, []);
  useEffect(() => { if (discussion) discussionRef.current?.showModal(); }, [discussion]);
  function openDiscussion(cardId, intent = 'discuss') { setMessage(''); setNotice(''); setDiscussion({ cardId, intent }); }
  async function send(e) { e.preventDefault(); if (launchLock.current) return; launchLock.current = true; setSending(true); setNotice(''); try { await adapter.discuss(binding, { ...discussion, message }); setDiscussion(null); setNotice('战略讨论已提交，请在会话中继续。讨论后刷新，查看更新的地图与反馈。'); } catch (e) { setNotice(e.message); } finally { launchLock.current = false; setSending(false); } }
  if (editing && !binding) return <main className="sw-root sw-root-onboarding" data-surface={adapter.surface || 'panel'}><style>{cssText}</style><div className="sw-onboarding"><SpaceForm initial={null} pickDirectory={adapter.pickDirectory} busy={loading} onCancel={null} onLoad={next => load(next, true)}/></div></main>;
  return <main className="sw-root" data-surface={adapter.surface || 'panel'}><style>{cssText}</style><WorkbenchFrame adapter={adapter} data={data} binding={binding} editing={editing} loading={loading} sending={sending} view={tab} onView={setTab} feature={feature} onFeature={enterFeature} onHome={leaveFeature} onSettings={() => setEditing(true)} onRefresh={() => load().catch(() => {})} onDiscuss={() => openDiscussion()} contentRef={stageContentRef} headingRef={stageHeadingRef}>
    {editing ? <SpaceForm initial={binding} pickDirectory={adapter.pickDirectory} busy={loading} onCancel={binding ? () => setEditing(false) : null} onLoad={next => load(next, true)}/> : <>
      {error && <div role="alert" className="sw-error"><span>{error}</span><div className="sw-error-actions"><button type="button" className="sw-link" onClick={() => load().catch(() => {})}>重试</button><button type="button" className="sw-link" onClick={() => setEditing(true)}>检查战略文件夹</button></div></div>}
      {notice && !discussion && <div className="sw-notice"><span role="status">{notice}</span><div className="sw-notice-actions"><button type="button" className="sw-link" disabled={loading} onClick={() => { load().then(() => setNotice('资料已刷新。')).catch(() => {}); }}>刷新资料</button><button type="button" className="sw-icon-btn" aria-label="关闭提示" onClick={() => { setNotice(''); stageHeadingRef.current?.focus({ preventScroll: true }); }}><Icon name="close" size={14}/></button></div></div>}
      {feature ? <>
        {data && <div className="sw-body" key={`${data.project}-${tab}`}>{data.warnings.map((w, i) => <p key={i} className="sw-warning">{w}</p>)}{tab === 'overview' ? <Overview data={data} onSource={setSource} onView={setTab}/> : tab === 'decisions' ? <Decisions data={data} state={decisionView} onChange={updateDecision} scrollRef={stageContentRef} onSource={setSource} onDiscuss={openDiscussion}/> : tab === 'experiments' ? <Experiments data={data} onSource={setSource} onDiscuss={openDiscussion}/> : <History data={data} onSource={setSource}/>}</div>}
        {!data && !loading && !error && <Empty title="打开你的战略资料">选择学习空间，或刷新后重试。</Empty>}
        {loading && !data && <div className="sw-loading" role="status"><span className="sw-spinner" aria-hidden="true"/>正在读取战略地图与决策卡…</div>}
      </> : <FeatureHome data={data} loading={loading} onEnter={enterFeature}/>}
    </>}
  </WorkbenchFrame>{source && <SourceDialog source={source} onClose={() => setSource(null)}/>}{discussion && <dialog ref={discussionRef} className="sw-dialog sw-discuss" aria-labelledby={discussionTitleId} onCancel={() => { if (!sending) setDiscussion(null); }}>
    <form onSubmit={send} onKeyDown={e => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); e.currentTarget.requestSubmit(); } }}>
      <header className="sw-dialog-head"><div><span className="sw-eyebrow">STRATEGYFINDER</span><h2 id={discussionTitleId}>{discussion.intent === 'feedback' ? '带回真实测试反馈' : discussion.cardId ? '继续这项战略判断' : '开始战略讨论'}</h2></div><button type="button" className="sw-icon-btn" disabled={sending} aria-label="取消讨论" onClick={() => setDiscussion(null)}><Icon name="close" size={18}/></button></header>
      <p className="sw-dialog-note">在「{data?.name}」的原生会话中继续，由你作出取舍和投入决定。</p>
      {discussion.cardId && <blockquote>{data?.cards.find(c => c.id === discussion.cardId)?.title}</blockquote>}
      <label className="sw-field">你想先讨论什么？<textarea autoFocus value={message} onChange={e => setMessage(e.target.value)} placeholder={discussion.intent === 'feedback' ? '实际做了什么？投入多少？观察到了什么？' : '可以写下当前判断、投入与困惑，也可以直接开始。'} maxLength={12000}/></label>
      {notice && <p className="sw-error" role="alert">{notice}</p>}
      <footer className="sw-dialog-actions"><span className="sw-hint">点击后显式运行 /strategyfinder · ⌘/Ctrl + Enter 提交</span><button type="submit" className="sw-btn sw-btn-primary" disabled={sending}>{sending ? '正在打开会话…' : '进入战略讨论'}{!sending && <Icon name="arrowRight" size={16}/>}</button></footer>
    </form>
  </dialog>}</main>;
}
