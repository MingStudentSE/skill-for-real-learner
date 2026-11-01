// One folder is the strategy workspace. Older bindings stored workspace + project path; fold them into one folder.
export function folderBinding(value) {
  if (!value || typeof value.workspace !== 'string' || !value.workspace.trim()) return null;
  const workspace = value.workspace.trim();
  const project = typeof value.project === 'string' && value.project.trim() ? value.project.trim() : '.';
  if (project === '.' || project === './') return { workspace, project: '.' };
  const parts = project.split(/[\\/]+/);
  if (parts.includes('..')) return null;
  const base = workspace.replace(/[\\/]+$/, '');
  const rel = project.replace(/^\.?[\\/]+/, '').replace(/^[\\/]+/, '');
  return { workspace: `${base}/${rel}`, project: '.' };
}
