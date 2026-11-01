import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrategyApp } from './App.jsx';
const data=window.__STRATEGY_PREVIEW__;
const emptyView=new URLSearchParams(window.location.search).has('empty');
const key='strategy-preview-binding';
const binding={workspace:'/示例/学习空间/产品探索',project:'.'};
const adapter={
  demo:true,
  getBinding:()=>sessionStorage.getItem('strategy-preview-empty') ? null : binding,
  saveBinding:()=>{},
  snapshot:async draft=>{
    if(draft.workspace!=='/示例/学习空间/产品探索')throw new Error('这是离线界面预览，请使用“/示例/学习空间/产品探索”；真实目录由安装后的插件读取。');
    return emptyView ? {...data, map:null, cards:[], warnings:[]} : data;
  },
  pickDirectory:async()=>'/示例/学习空间/产品探索',
  discuss:async()=>{window.__STRATEGY_DISCUSSIONS__=(window.__STRATEGY_DISCUSSIONS__||0)+1;},
};
function PreviewHost(){
  return <div className="preview-host">
    <section className="preview-business" aria-label="学习工作台业务面板"><StrategyApp adapter={adapter}/></section>
    <aside className="preview-native" aria-label="原生对话布局示意">
      <header className="preview-native-header"><div className="preview-native-title"><span className="preview-native-dot"/><strong>Harness</strong><span>原生对话</span></div><small>布局示意</small></header>
      <div className="preview-native-body">
        <div className="preview-native-intro"><h2>业务资料在左，对话在右</h2><p>安装到支持工作台服务的 Desktop 后，这里由 Harness 提供可交互的原生会话。</p></div>
        <div className="preview-chat" aria-hidden="true">
          <div className="preview-bubble preview-bubble-user">这周先验证哪一项真实测试？</div>
          <div className="preview-bubble preview-bubble-ai"><span>STRATEGYFINDER</span>从「一次真实交付是否值得继续投入」开始。先拿到对方的真实反馈，再决定是否扩大投入。</div>
        </div>
        <div className="preview-composer" aria-hidden="true"><span>在原生会话中继续…</span><i>↗</i></div>
        <p className="preview-native-note">预览占位 · 不会启动模型或创建会话</p>
      </div>
      <footer><span>Harness 原生会话</span><span>不可交互</span></footer>
    </aside>
  </div>;
}
createRoot(document.getElementById('root')).render(<PreviewHost/>);
