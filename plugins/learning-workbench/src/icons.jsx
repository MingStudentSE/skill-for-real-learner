import React from 'react';

// One stroke set for the whole workbench: 24px grid, 1.6 stroke, round joins.
const PATHS = {
  compass: <><circle cx="12" cy="12" r="8.5"/><path d="m15.6 8.4-2.3 5-5 2.3 2.3-5 5-2.3Z"/></>,
  decisions: <><rect x="3" y="9" width="5.5" height="5.5" rx="1.2"/><rect x="15.5" y="3" width="5.5" height="5.5" rx="1.2"/><rect x="15.5" y="15.5" width="5.5" height="5.5" rx="1.2"/><path d="M8.5 11.75h3.5V5.75h3.5M12 11.75v6.5h3.5"/></>,
  experiment: <><path d="M9 3h6M10 3v5.3L5.4 17a2 2 0 0 0 1.8 3h9.6a2 2 0 0 0 1.8-3L14 8.3V3"/><path d="M7.6 14.5h8.8"/></>,
  history: <><path d="M4 5v5h5"/><path d="M4.7 9.2A8.2 8.2 0 1 1 4 14.2"/><path d="M12 8v4.6l3 1.8"/></>,
  folder: <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H9l2 2.5h8.5A1.5 1.5 0 0 1 21 10v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V7.5Z"/>,
  refresh: <><path d="M20 11a8 8 0 1 0-2.35 5.65"/><path d="M20 4v7h-7"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.35 5.35l1.55 1.55M17.1 17.1l1.55 1.55M18.65 5.35 17.1 6.9M6.9 17.1l-1.55 1.55"/></>,
  arrowRight: <><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></>,
  arrowLeft: <><path d="M20 12H4"/><path d="m10 6-6 6 6 6"/></>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
  source: <><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h5"/></>,
  check: <path d="m5 12.5 4.5 4.5L19 6.5"/>,
  chevronDown: <path d="m6 9.5 6 6 6-6"/>,
  chevronUp: <path d="m6 14.5 6-6 6 6"/>,
  search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
  external: <><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 10.5V17M12 7.6v.4"/></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/></>,
};

export function Icon({ name = 'compass', size = 20, className = '', strokeWidth = 1.6 }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{PATHS[name] || PATHS.compass}</svg>;
}
