import { posix } from 'node:path';

const stem = value => posix.basename(String(value).replaceAll('\\', '/')).replace(/\.md$/i, '');
const normalize = value => posix.normalize(String(value).replaceAll('\\', '/')).replace(/^\.\//, '').replace(/\.md$/i, '');
const unquote = value => {
  const text = value.trim();
  if (text.startsWith('"') && text.endsWith('"')) {
    try { return JSON.parse(text); } catch { return text.slice(1, -1); }
  }
  return text.startsWith("'") && text.endsWith("'") ? text.slice(1, -1).replaceAll("''", "'") : text;
};

// Read scalar metadata and string dependency lists without a YAML dependency.
function frontmatter(markdown) {
  const match = markdown.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n(?:---|\.\.\.)(?:\r?\n|$)/);
  const fields = {};
  if (!match) return { fields, body: markdown };
  let list = null;
  for (const line of match[1].split(/\r?\n/)) {
    const item = line.match(/^\s*-\s+(.+?)\s*$/);
    if (item && list) { fields[list].push(unquote(item[1])); continue; }
    const field = line.match(/^([\w-]+):\s*(.*?)\s*$/);
    if (!field) continue;
    const [, key, value] = field;
    list = null;
    if (key === 'depends_on') {
      fields[key] = [];
      if (!value) list = key;
      else if (value.startsWith('[') && value.endsWith(']')) {
        const items = value.slice(1, -1).match(/"(?:\\.|[^"\\])*"|'(?:''|[^'])*'|[^,\s][^,]*/g) || [];
        fields[key] = items.map(unquote).filter(Boolean);
      } else fields[key] = [unquote(value)];
    } else fields[key] = unquote(value);
  }
  return { fields, body: markdown.slice(match[0].length) };
}

function document(markdown, path) {
  if (typeof markdown !== 'string') throw new TypeError('markdown must be a string');
  const { fields, body } = frontmatter(markdown);
  const sections = {};
  let title = '', heading = null, lines = [], fence = null;
  const flush = () => {
    if (heading !== null) {
      const content = lines.join('\n').trim();
      Object.defineProperty(sections, heading, { value: Object.hasOwn(sections, heading) ? `${sections[heading]}\n\n${content}` : content, enumerable: true, configurable: true });
    }
    lines = [];
  };
  for (const line of body.split(/\r?\n/)) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null;
      if (heading !== null) lines.push(line);
      continue;
    }
    const h1 = !fence && line.match(/^#\s+(.+?)(?:\s+#+)?\s*$/);
    if (h1 && !title) title = h1[1];
    const h2 = !fence && line.match(/^##\s+(.+?)(?:\s+#+)?\s*$/);
    if (h2) { flush(); heading = h2[1]; }
    else if (heading !== null) lines.push(line);
  }
  flush();
  return { markdown, path: path || '', title: title || fields.title || (path ? stem(path) : ''), sections, fields };
}

function cells(line) {
  const result = []; let cell = '', slashes = 0;
  for (const char of line.trim()) {
    if (char === '|' && slashes % 2 === 0) { result.push(cell.trim()); cell = ''; }
    else cell += char;
    slashes = char === '\\' ? slashes + 1 : 0;
  }
  result.push(cell.trim());
  if (result[0] === '') result.shift();
  if (result.at(-1) === '') result.pop();
  return result;
}

export function parseStrategyMap(markdown, { path } = {}) {
  const { fields, ...map } = document(markdown, path);
  const names = { direction: '当前长期方向', principles: '战略原则与不失败底座', compounding: '复利假设', choices: '已定取舍', unknowns: '尚未明确', excluded: '明确不做', revisions: '战略修订记录' };
  for (const [key, heading] of Object.entries(names)) map[key] = map.sections[heading] || '';
  map.resources = [];
  const lines = (map.sections['当前阶段与资源配置'] || '').split('\n');
  const headers = ['方向', '已投入时间/金钱/精力', '结果与沉淀', '下一阶段投入', '相应减少什么'];
  for (let i = 0; i < lines.length - 1; i++) {
    const columns = cells(lines[i]);
    const indices = headers.map(name => columns.indexOf(name));
    if (indices.some(index => index < 0) || !cells(lines[i + 1]).every(cell => /^:?-{3,}:?$/.test(cell))) continue;
    for (i += 2; i < lines.length && lines[i].includes('|') && lines[i].trim(); i++) {
      const row = cells(lines[i]);
      map.resources.push(Object.fromEntries(['direction', 'invested', 'results', 'next', 'reduce'].map((key, j) => [key, row[indices[j]] || ''])));
    }
  }
  return map;
}

export function parseDecision(markdown, { path } = {}) {
  const { fields, ...card } = document(markdown, path);
  Object.assign(card, { id: path ? stem(path) : '', type: fields.type || '', status: fields.status || '', dependsOn: fields.depends_on || [] });
  const names = { judgment: '问题与当前判断', next: '下一步验证', guardrails: '长期投入检查', closure: '关闭条件', result: '实际结果与结论' };
  for (const [key, heading] of Object.entries(names)) card[key] = card.sections[heading] || '';
  card.evidence = { facts: '', selfReport: '', inference: '', unknowns: '' };
  const keys = { '事实': 'facts', '自述': 'selfReport', '推断': 'inference', '未知': 'unknowns' };
  let key = null;
  for (const line of (card.sections['证据与投入反馈'] || '').split('\n')) {
    const match = line.match(/^\s*(?:[-*+]\s+)?(?:\*\*)?(事实|自述|推断|未知)(?:\*\*)?\s*[:：](?:\*\*)?\s*(.*)$/);
    if (match) { key = keys[match[1]]; card.evidence[key] += (card.evidence[key] ? '\n' : '') + match[2]; }
    else if (key) card.evidence[key] += '\n' + line;
  }
  for (const key of Object.keys(card.evidence)) card.evidence[key] = card.evidence[key].trim();
  return card;
}

export function connectDecisions(cards) {
  const find = (reference, owner) => {
    const value = normalize(reference);
    if (value.includes('/')) {
      const relative = normalize(posix.join(posix.dirname((owner.path || '').replaceAll('\\', '/')), value));
      const exact = cards.filter(card => card.path && [value, relative].includes(normalize(card.path)));
      if (exact.length) return exact;
    }
    return cards.filter(card => normalize(card.id) === value || stem(card.path || card.id) === value);
  };
  const edges = cards.map(card => (card.dependsOn || []).map(reference => ({ reference, matches: find(reference, card) })));
  const reaches = (from, target, seen = new Set()) => {
    if (from === target) return true;
    if (seen.has(from)) return false;
    seen.add(from);
    return edges[from].some(edge => edge.matches.length === 1 && reaches(cards.indexOf(edge.matches[0]), target, seen));
  };
  return cards.map((card, index) => {
    const warnings = [];
    let cyclic = false;
    const dependencies = edges[index].map(({ reference, matches }) => {
      if (matches.length !== 1) {
        warnings.push(`${matches.length ? 'Ambiguous' : 'Missing'} dependency: ${reference}`);
        return { id: reference, title: '', status: '', resolved: false, missing: matches.length === 0 };
      }
      const dependency = matches[0];
      if (reaches(cards.indexOf(dependency), index)) { cyclic = true; warnings.push(`Cyclic dependency: ${reference}`); }
      if (dependency.status !== 'closed') warnings.push(`Dependency is not closed: ${reference} (${dependency.status})`);
      return { id: dependency.id, title: dependency.title, status: dependency.status, resolved: true, missing: false };
    });
    const blocked = cyclic || dependencies.some(item => !item.resolved || item.status !== 'closed');
    return { ...card, dependencies, blocked, frontier: ['open', 'claimed'].includes(card.status) && !blocked, warnings };
  });
}
