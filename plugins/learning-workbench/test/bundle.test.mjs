import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const bundle = fileURLToPath(new URL('../dist/client.js', import.meta.url));
const nodeRequire = createRequire(import.meta.url);

test('real client bundle parses inside ModuleLoader and exports plugin apply', async () => {
  let loaded;
  const context = {
    window: { __ModuleLoader__: { load: entry => { loaded = entry; } } },
    console,
  };
  vm.runInNewContext(await readFile(bundle, 'utf8'), context, { filename: bundle });
  assert.ok(loaded, 'bundle must register through window.__ModuleLoader__.load');
  assert.equal(loaded.id, 'dsh-learning-workbench');
  const exports = loaded.factory(id => {
    if (id === 'react' || id === 'react/jsx-runtime') return nodeRequire(id);
    throw new Error(`unexpected external module: ${id}`);
  });
  assert.equal(typeof exports.apply, 'function');
  assert.ok(Array.isArray(exports.inject));
  assert.ok(exports.inject.includes('remote.session'), 'client must declare remote.session');
  const registered = [];
  const ctx = {
    get: () => undefined,
    inject: () => {},
    slots: {
      inject: (name, setup) => { setup(); },
      register: options => { registered.push(options.name); return () => {}; },
    },
    layout: { selectPanel: () => {} },
  };
  exports.apply(ctx);
  assert.deepEqual(registered.sort(), ['main', 'sidebar.panellist']);
  assert.ok(!registered.includes('conversation.hero.options'), 'ordinary conversations must not be modified');
});
