import React, { useEffect, useId, useRef } from 'react';
import { Icon } from './icons.jsx';

const VIEWS = [
  ['overview', '方向与取舍', 'compass'],
  ['decisions', '决策地图', 'decisions'],
  ['experiments', '真实测试', 'experiment'],
  ['history', '战略记录', 'history'],
];
const DESCRIPTIONS = {
  overview: '把实际投入、结果与下一步取舍放在一起。',
  decisions: '先推进前置条件已满足的关键问题。',
  experiments: '对照测试前的预期与真实返回的反馈。',
  history: '保留方向变化、取舍与支撑判断的依据。',
};
// One entry per implemented skill feature. A feature stays collapsed until the learner opens it.
export const FEATURES = [{
  id: 'strategy', title: '学习战略', skill: 'strategyfinder', icon: 'compass',
  tagline: '方向 · 决策 · 真实测试',
  description: '把实际投入、结果与下一步取舍放在一起；按前置依赖推进关键决策，并对照真实测试的预期与反馈。',
  views: VIEWS,
}];

function formatTime(value) {
  return new Date(value).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}
export function FeatureHome({ data, loading, onEnter }) {
  const frontier = data?.cards.filter(card => card.frontier).length || 0;
  return <div className="sw-home">
    <div className="sw-home-main">
      {FEATURES.map(item => <article className="sw-module" key={item.id} aria-labelledby={`sw-module-${item.id}`}>
        <header className="sw-module-head">
          <span className="sw-module-mark"><Icon name={item.icon} size={24}/></span>
          <div className="sw-module-title"><span className="sw-eyebrow">{item.skill}</span><h3 id={`sw-module-${item.id}`}>{item.title}</h3></div>
          <span className="sw-chip sw-chip-accent">已开放</span>
        </header>
        <p className="sw-module-desc">{item.description}</p>
        <div className="sw-module-meta">
          <span className="sw-stat"><strong>{loading && !data ? '…' : data ? data.cards.length : '—'}</strong><span>决策卡</span></span>
          <span className="sw-stat"><strong>{loading && !data ? '…' : data ? frontier : '—'}</strong><span>可推进</span></span>
          <span className="sw-stat"><strong>{item.views.length}</strong><span>视图</span></span>
        </div>
        <footer className="sw-module-actions">
          <button type="button" className="sw-btn sw-btn-primary" onClick={() => onEnter(item.id)}>进入{item.title}<Icon name="arrowRight" size={16}/></button>
          <span className="sw-module-hint">只读快照 · 不改动资料</span>
        </footer>
      </article>)}
    </div>
    <aside className="sw-project-panel" aria-label="当前战略文件夹">
      <span className="sw-eyebrow">当前战略文件夹</span>
      <h3>{data?.name || '尚未读取文件夹'}</h3>
      <p className="sw-project-path" title={data?.project || ''}>{data?.project || '选择文件夹后读取'}</p>
      <dl className="sw-project-facts">
        <div><dt>战略地图</dt><dd>{data ? (data.map ? data.mapPath : '尚未建立') : '—'}</dd></div>
        <div><dt>决策卡</dt><dd>{data ? data.cardsPath : '—'}</dd></div>
        <div><dt>读取时间</dt><dd>{data ? formatTime(data.loadedAt) : '—'}</dd></div>
      </dl>
      <p className="sw-project-note"><Icon name="info" size={15}/><span>地图与决策卡以本地 Markdown 为准；工作台只读快照，修改请回到战略讨论。</span></p>
    </aside>
    <section className="sw-workbench-rules" aria-label="工作台说明">
      <div className="sw-rule"><Icon name="folder" size={16}/><div><h4>读取战略文件夹</h4><p>只读取该文件夹内的地图与决策卡，不扫描其他目录。</p></div></div>
      <div className="sw-rule"><Icon name="source" size={16}/><div><h4>只读快照</h4><p>界面不改动 Markdown；刷新后读取最新内容。</p></div></div>
      <div className="sw-rule"><Icon name="external" size={16}/><div><h4>显式讨论</h4><p>需要修改时，在原生会话里运行 /strategyfinder。</p></div></div>
    </section>
    <p className="sw-home-note">更多功能会随对应 skill 逐个加入；未完成的功能不会提前出现在这里。</p>
  </div>;
}

export function WorkbenchFrame({ adapter, data, binding, editing, loading, sending, view, onView, feature, onFeature, onHome, onSettings, onRefresh, onDiscuss, contentRef, headingRef: externalHeadingRef, children }) {
  const active = FEATURES.find(item => item.id === feature) || null;
  const stageId = `sw-stage-${useId().replace(/:/g, '')}`;
  const localHeadingRef = useRef(null), firstRender = useRef(true), headingRef = externalHeadingRef || localHeadingRef;
  useEffect(() => { if (contentRef?.current) contentRef.current.scrollTop = 0; }, [feature, view, editing]);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus({ preventScroll: true });
  }, [feature, view, editing]);
  const current = active?.views.find(([id]) => id === view);
  const frontier = data?.cards.filter(card => card.frontier).length || 0;
  const sep = <span className="sw-crumb-sep" aria-hidden="true">/</span>;
  const breadcrumb = editing
    ? <>学习工作台{sep}战略文件夹</>
    : active
      ? <><button type="button" className="sw-crumb" onClick={onHome}><Icon name="arrowLeft" size={13}/>功能</button>{sep}{active.title}{sep}{current?.[1]}</>
      : <>学习工作台{sep}功能</>;
  return <div className="sw-workbench">
    <button type="button" className="sw-skip" onClick={() => headingRef.current?.focus()}>跳到功能内容</button>
    <header className="sw-workbench-topbar" data-dsh-workbench-toolbar="true">
      <div className="sw-brand"><span className="sw-brand-mark"><Icon name="compass" size={20}/></span><span className="sw-brand-text"><h1>学习工作台</h1><small>LEARNING WORKBENCH</small></span></div>
      <div className="sw-project-context" title={data?.project || binding?.workspace || '未选择学习战略文件夹'}>
        <span className="sw-context-label">战略文件夹</span>
        <span className="sw-context-name">{data?.name || '未选择'}</span>
      </div>
      <div className="sw-workbench-tools">
        <button type="button" className="sw-tool" onClick={onRefresh} disabled={!binding || loading || editing} aria-label={loading ? '正在读取战略文件' : '刷新战略文件'} title={editing ? '完成文件夹设置后再刷新' : undefined}><Icon name="refresh" size={17}/><span>{loading ? '读取中' : '刷新'}</span></button>
        <button type="button" className="sw-tool" onClick={onSettings} aria-label="学习战略文件夹设置"><Icon name="settings" size={17}/><span>文件夹设置</span></button>
      </div>
    </header>
    <div className={`sw-workbench-layout ${active ? 'has-feature' : ''}`}>
      <aside className="sw-workbench-sidebar" aria-label="学习工作台导航">
        <div className="sw-sidebar-head"><span className="sw-eyebrow">功能</span><span className="sw-sidebar-count">{FEATURES.length}</span></div>
        <div className="sw-feature-list">
          {FEATURES.map(item => {
            const open = active?.id === item.id;
            return <div key={item.id} className={`sw-feature ${open ? 'is-open' : ''}`}>
              <button type="button" className="sw-feature-toggle" aria-expanded={open} aria-label={item.title} disabled={editing} title={editing ? '完成文件夹设置后再展开功能' : open ? `收起${item.title}` : `展开${item.title}`} onClick={() => open ? onHome() : onFeature(item.id)}>
                <span className="sw-feature-icon"><Icon name={item.icon} size={18}/></span>
                <span className="sw-feature-text"><span className="sw-feature-name">{item.title}</span><span className="sw-feature-tagline">{item.tagline}</span></span>
                <span className="sw-feature-chevron" aria-hidden="true"><Icon name={open ? 'chevronUp' : 'chevronDown'} size={15}/></span>
              </button>
              {open && <nav className="sw-workbench-nav" aria-label={`${item.title}视图`}>{item.views.map(([id,label,icon]) => <button type="button" key={id} disabled={editing || !data} aria-current={!editing && view === id ? 'page' : undefined} aria-label={id === 'decisions' && data ? `${label}，${data.cards.length} 张决策卡` : label} className={!editing && view === id ? 'is-active' : ''} onClick={() => onView(id)}><Icon name={icon} size={17}/><span>{label}</span>{id === 'decisions' && data && <small aria-hidden="true">{data.cards.length}</small>}</button>)}</nav>}
            </div>;
          })}
        </div>
        <div className="sw-sidebar-footer">
          {active && data
            ? <><span className="sw-status-line"><i aria-hidden="true"/>{frontier ? `${frontier} 项关键问题可推进` : '暂无待推进的前沿问题'}</span><span>{data.cards.length} 张决策卡 · 只读快照</span></>
            : <><span>本地 Markdown 是事实来源</span><span>功能逐个加入</span></>}
        </div>
      </aside>
      <div className="sw-workbench-stage">
        <header className="sw-stage-heading">
          <div className="sw-stage-heading-main">
            <div className="sw-stage-breadcrumb">{breadcrumb}</div>
            <h2 ref={headingRef} tabIndex={-1}>{editing ? '配置战略文件夹' : active ? current?.[1] : '功能'}</h2>
            {<p>{editing ? '选择直接包含战略地图与决策卡的文件夹；保存后重新读取。' : active ? DESCRIPTIONS[view] : '学习工作台按功能逐个开放。进入一个功能后，再展开它的视图。'}</p>}
          </div>
          {!editing && active && <button type="button" className="sw-btn sw-btn-primary sw-discuss-button" disabled={!data || sending} onClick={onDiscuss}>讨论战略<Icon name="external" size={15}/></button>}
        </header>
        {adapter.demo && <div className="sw-preview-label">示例数据 · 仅展示界面，不会修改学习资料或启动模型</div>}
        <div className="sw-stage-content" id={stageId} tabIndex={-1} ref={contentRef} aria-busy={loading || undefined}>{children}</div>
        <footer className="sw-workbench-footer"><span>{data ? `${data.name} · ${active ? active.title : '功能目录'}` : '选择一个功能开始'}</span>{data && <span role="status" aria-live="polite">文件快照 · {formatTime(data.loadedAt)}</span>}</footer>
      </div>
    </div>
  </div>;
}
