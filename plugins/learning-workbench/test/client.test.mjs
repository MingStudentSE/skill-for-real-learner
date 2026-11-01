import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { randomUUID } from 'node:crypto';
const compiled=await build({entryPoints:[new URL('../src/client.jsx',import.meta.url).pathname],bundle:true,write:false,format:'cjs',platform:'node',jsx:'automatic',external:['react'],loader:{'.css':'empty'}});
function harness({failOnce=false, desktop=false}={}){
 const calls=[];let attempt=0;const storage=new Map();const exports={};
 const response={prompt:'/strategyfinder\n\n继续指定决策',cwd:'/学习/项目',workspace:'/学习'};
 const sandbox={module:{exports},exports,require:createRequire(import.meta.url),Response,Intl,crypto:{randomUUID},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},__DSH_TRANSPORT__:{fetch:async(path,options)=>{const body=JSON.parse(options.body);calls.push(['fetch',path,body]);return Response.json(response);}}};
 vm.runInNewContext(compiled.outputFiles[0].text,sandbox);
 const ctx={workspaces:{create:async request=>{calls.push(['workspace',request]);return{workspaceId:'project-workspace',path:request.path};}},remote:{session:{create:async request=>{calls.push(['create',request]);return{ok:true,value:{sessionId:'actual-session-id'}};},prompt:async request=>{calls.push(['prompt',request]);if(failOnce&&attempt++===0)return{ok:false,error:{message:'短暂连接失败'}};return{ok:true,value:{accepted:true}};}}},uiWorkspace:{pickDirectory:async()=>null,openSession:id=>calls.push(['open',id])},layout:{selectPanel:id=>calls.push(['panel',id])}};
 const workbenches = desktop ? {
  isActive:()=>true, ownsSession:id=>id==='actual-session-id', currentSession:()=>'actual-session-id',
  ensureSession:async request=>{calls.push(['ensure',request]);return 'actual-session-id';},
 } : undefined;
 return{adapter:sandbox.module.exports.createAdapter(ctx,{workbenches}),calls,storage,response};

}
test('explicit discussion uses project Workspace, actual session ID and real slash prompt',async()=>{
 const{adapter,calls}=harness();await adapter.discuss({workspace:'/学习',project:'项目'},{cardId:'02-test',intent:'feedback',message:'真实反馈'});
 assert.deepEqual(JSON.parse(JSON.stringify(calls.find(c=>c[0]==='workspace')[1])),{path:'/学习/项目'});
 assert.deepEqual(JSON.parse(JSON.stringify(calls.find(c=>c[0]==='create')[1])),{workspaceId:'project-workspace'});
 const prompt=calls.find(c=>c[0]==='prompt')[1];assert.equal(prompt.sessionId,'actual-session-id');assert.equal(prompt.mode,'queue');assert.match(prompt.content[0].text,/^\/strategyfinder\n/);
 assert.deepEqual(calls.slice(-2),[['open','actual-session-id'],['panel',null]]);
 const payload=calls[0];assert.equal(payload[1],'api/strategy-workbench/state');assert.equal(payload[2].discussion.intent,'feedback');
});
test('failed submission retries same session and request ID, without navigating on failure',async()=>{
 const{adapter,calls}=harness({failOnce:true});const binding={workspace:'/学习',project:'项目'},discussion={intent:'discuss'};
 await assert.rejects(adapter.discuss(binding,discussion),/短暂连接失败/);assert.equal(calls.filter(c=>c[0]==='open').length,0);
 await adapter.discuss(binding,discussion);assert.equal(calls.filter(c=>c[0]==='create').length,1);
 const prompts=calls.filter(c=>c[0]==='prompt');assert.equal(prompts[0][1].requestId,prompts[1][1].requestId);assert.equal(prompts[0][1].sessionId,prompts[1][1].sessionId);
});
test('shared adapter rejects concurrent discussions from different UI instances',async()=>{
 const{adapter,calls}=harness();
 const first=adapter.discuss({workspace:'/学习',project:'项目A'},{intent:'discuss'});
 await assert.rejects(adapter.discuss({workspace:'/学习',project:'项目B'},{intent:'feedback'}),/另一项战略讨论正在打开/);
 await first;
 assert.equal(calls.filter(c=>c[0]==='create').length,1);
 assert.equal(calls.filter(c=>c[0]==='prompt').length,1);
 assert.deepEqual(calls.filter(c=>c[0]==='open'),[['open','actual-session-id']]);
});

test('retry keeps original text for the same request ID even when source files change',async()=>{
 const{adapter,calls,response}=harness({failOnce:true});const binding={workspace:'/学习',project:'项目'},discussion={intent:'discuss'};
 await assert.rejects(adapter.discuss(binding,discussion),/短暂连接失败/);
 response.prompt='/strategyfinder\n\n文件更新后的新内容';
 await adapter.discuss(binding,discussion);
 const prompts=calls.filter(c=>c[0]==='prompt');
 assert.equal(prompts[0][1].requestId,prompts[1][1].requestId);
 assert.equal(prompts[0][1].content[0].text,prompts[1][1].content[0].text);
});
test('retry binds a new session when the real project directory changes',async()=>{
 const{adapter,calls,response}=harness({failOnce:true});const binding={workspace:'/学习',project:'项目'},discussion={intent:'discuss'};
 await assert.rejects(adapter.discuss(binding,discussion),/短暂连接失败/);
 response.cwd='/学习/重新定位项目';
 await adapter.discuss(binding,discussion);
 assert.equal(calls.filter(c=>c[0]==='create').length,2);
 const prompts=calls.filter(c=>c[0]==='prompt');
 assert.notEqual(prompts[0][1].requestId,prompts[1][1].requestId);
 assert.equal(calls.filter(c=>c[0]==='workspace')[1][1].path,'/学习/重新定位项目');
});
test('desktop adapter prepares a workbench-owned session without navigating shell panels',async()=>{
 const{adapter,calls}=harness({desktop:true});await adapter.discuss({workspace:'/学习',project:'项目'},{intent:'discuss'});
 assert.deepEqual(JSON.parse(JSON.stringify(calls.find(c=>c[0]==='ensure')[1])),{folder:'/学习/项目'});
 assert.equal(calls.filter(c=>c[0]==='create').length,0);assert.equal(calls.filter(c=>c[0]==='open').length,0);assert.equal(calls.filter(c=>c[0]==='panel').length,0);
 assert.equal(adapter.surface,'desktop');
});
test('binding persistence stores UI paths, not duplicated strategy state',()=>{
 const{adapter,storage}=harness();assert.equal(adapter.getBinding(),null);const binding={workspace:'/学习',project:'项目'};adapter.saveBinding(binding);assert.deepEqual(JSON.parse(JSON.stringify(adapter.getBinding())),binding);assert.equal(storage.size,1);
});
