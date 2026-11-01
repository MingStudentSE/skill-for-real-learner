import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, realpath, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname, basename } from 'node:path';
import { handleRequest, apply, inject } from '../src/host.mjs';
const root = await realpath(tmpdir());
async function temporary(fn){const p=await mkdtemp(join(root,'strategy-host-test-'));try{await fn(p);}finally{const actual=await realpath(p);assert.equal(dirname(actual),root);assert.ok(basename(actual).startsWith('strategy-host-test-'));await rm(actual,{recursive:true});}}
const request = body => new Request('http://localhost/api/strategy-workbench/state',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
test('authenticated route registration and fallback user-only strategy skill',()=>{
 let route,provider;apply({connection:{fetch:{register:r=>{route=r;}}},skills:{registerProvider:factory=>{provider=factory({});}}});
 assert.ok(inject.includes('connection'));assert.equal(route.path,'/api/strategy-workbench/state');assert.deepEqual(route.methods,['POST']);assert.equal(route.requestBody,'buffered');assert.equal(route.fetch,handleRequest);
 const skills=provider.list();const strategy=skills.find(s=>s.name==='strategyfinder');assert.equal(strategy.invocation.modelInvocable,false);assert.equal(strategy.invocation.userInvocable,true);assert.equal(strategy.rank,10000);assert.equal(strategy.provider,provider.name);assert.ok(strategy.path.endsWith('/dist/skills/strategyfinder/SKILL.md'));
});
test('empty workspace returns readable empty snapshot without creating artifacts',()=>temporary(async workspace=>{
 const response=await handleRequest(request({action:'snapshot',binding:{workspace}}));assert.equal(response.status,200);assert.equal(response.headers.get('cache-control'),'no-store');const data=await response.json();assert.equal(data.map,null);assert.deepEqual(data.cards,[]);assert.deepEqual(await readdir(workspace),[]);
}));
test('discussion endpoint revalidates workspace and returns correct cwd',()=>temporary(async workspace=>{
 const response=await handleRequest(request({action:'discussion',binding:{workspace},discussion:{intent:'discuss',message:'我想重新分配时间'}}));assert.equal(response.status,200);const data=await response.json();assert.equal(data.cwd,workspace);assert.match(data.prompt,/^\/strategyfinder\n/);assert.match(data.prompt,/我想重新分配时间/);assert.deepEqual(await readdir(workspace),[]);
}));
test('invalid and oversized input cannot call arbitrary actions',async()=>{
 for(const body of [{action:'delete',binding:{}},{action:'snapshot'},{action:'snapshot',binding:{workspace:7}},{action:'discussion',binding:{workspace:'.'},discussion:{intent:'publish'}}]){assert.equal((await handleRequest(request(body))).status,400);}
 assert.equal((await handleRequest(new Request('http://localhost/api/strategy-workbench/state'))).status,405);
 assert.equal((await handleRequest(new Request('http://localhost/api/strategy-workbench/state',{method:'POST',body:'x'.repeat(33000)}))).status,413);
});
