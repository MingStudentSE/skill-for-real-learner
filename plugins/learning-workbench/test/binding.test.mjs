import test from 'node:test';
import assert from 'node:assert/strict';
import { folderBinding } from '../src/binding.mjs';
test('single strategy folder binding normalizes older workspace + project values', () => {
  assert.equal(folderBinding(null), null);
  assert.equal(folderBinding({ workspace: '  ' }), null);
  assert.deepEqual(folderBinding({ workspace: '/学习/战略', project: '.' }), { workspace: '/学习/战略', project: '.' });
  assert.deepEqual(folderBinding({ workspace: '/学习/战略/', project: 'projects/体验' }), { workspace: '/学习/战略/projects/体验', project: '.' });
  assert.deepEqual(folderBinding({ workspace: '/学习/战略', project: './项目' }), { workspace: '/学习/战略/项目', project: '.' });
  assert.equal(folderBinding({ workspace: '/学习/战略', project: '../外部' }), null);
  assert.deepEqual(folderBinding({ workspace: '/学习/战略', project: '.', mapPath: 'x.md', cardsPath: 'cards' }), { workspace: '/学习/战略', project: '.' });
});
