window.__ModuleLoader__.load({id:'dsh-learning-workbench',factory:(require)=>{var module={exports:{}};var exports=module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.jsx
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  createAdapter: () => createAdapter,
  inject: () => inject,
  request: () => request
});
module.exports = __toCommonJS(client_exports);
var import_react4 = __toESM(require("react"), 1);

// src/App.jsx
var import_react3 = __toESM(require("react"), 1);

// src/WorkbenchFrame.jsx
var import_react2 = __toESM(require("react"), 1);

// src/icons.jsx
var import_react = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PATHS = {
  compass: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.6 8.4-2.3 5-5 2.3 2.3-5 5-2.3Z" })
  ] }),
  decisions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "3", y: "9", width: "5.5", height: "5.5", rx: "1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "15.5", y: "3", width: "5.5", height: "5.5", rx: "1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "15.5", y: "15.5", width: "5.5", height: "5.5", rx: "1.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 11.75h3.5V5.75h3.5M12 11.75v6.5h3.5" })
  ] }),
  experiment: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 3h6M10 3v5.3L5.4 17a2 2 0 0 0 1.8 3h9.6a2 2 0 0 0 1.8-3L14 8.3V3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.6 14.5h8.8" })
  ] }),
  history: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 5v5h5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.7 9.2A8.2 8.2 0 1 1 4 14.2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v4.6l3 1.8" })
  ] }),
  folder: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 7.5A1.5 1.5 0 0 1 4.5 6H9l2 2.5h8.5A1.5 1.5 0 0 1 21 10v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V7.5Z" }),
  refresh: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 11a8 8 0 1 0-2.35 5.65" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4v7h-7" })
  ] }),
  settings: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.35 5.35l1.55 1.55M17.1 17.1l1.55 1.55M18.65 5.35 17.1 6.9M6.9 17.1l-1.55 1.55" })
  ] }),
  arrowRight: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 12h16" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m14 6 6 6-6 6" })
  ] }),
  arrowLeft: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 12H4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m10 6-6 6 6 6" })
  ] }),
  close: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 6 12 12M18 6 6 18" }),
  source: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 3h8l4 4v14H6V3Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 3v5h5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 13h6M9 17h5" })
  ] }),
  check: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 12.5 4.5 4.5L19 6.5" }),
  chevronDown: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9.5 6 6 6-6" }),
  chevronUp: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 14.5 6-6 6 6" }),
  search: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "10.5", cy: "10.5", r: "6.5" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.5 15.5 5 5" })
  ] }),
  external: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 4h6v6" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 4 11 13" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" })
  ] }),
  plus: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14M5 12h14" }),
  info: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10.5V17M12 7.6v.4" })
  ] }),
  book: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 18.5A2.5 2.5 0 0 1 6.5 16H20" })
  ] })
};
function Icon({ name = "compass", size = 20, className = "", strokeWidth = 1.6 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { className, width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: PATHS[name] || PATHS.compass });
}

// src/WorkbenchFrame.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var VIEWS = [
  ["overview", "\u65B9\u5411\u4E0E\u53D6\u820D", "compass"],
  ["decisions", "\u51B3\u7B56\u5730\u56FE", "decisions"],
  ["experiments", "\u771F\u5B9E\u6D4B\u8BD5", "experiment"],
  ["history", "\u6218\u7565\u8BB0\u5F55", "history"]
];
var DESCRIPTIONS = {
  overview: "\u628A\u5B9E\u9645\u6295\u5165\u3001\u7ED3\u679C\u4E0E\u4E0B\u4E00\u6B65\u53D6\u820D\u653E\u5728\u4E00\u8D77\u3002",
  decisions: "\u5148\u63A8\u8FDB\u524D\u7F6E\u6761\u4EF6\u5DF2\u6EE1\u8DB3\u7684\u5173\u952E\u95EE\u9898\u3002",
  experiments: "\u5BF9\u7167\u6D4B\u8BD5\u524D\u7684\u9884\u671F\u4E0E\u771F\u5B9E\u8FD4\u56DE\u7684\u53CD\u9988\u3002",
  history: "\u4FDD\u7559\u65B9\u5411\u53D8\u5316\u3001\u53D6\u820D\u4E0E\u652F\u6491\u5224\u65AD\u7684\u4F9D\u636E\u3002"
};
var FEATURES = [{
  id: "strategy",
  title: "\u5B66\u4E60\u6218\u7565",
  skill: "strategyfinder",
  icon: "compass",
  tagline: "\u65B9\u5411 \xB7 \u51B3\u7B56 \xB7 \u771F\u5B9E\u6D4B\u8BD5",
  description: "\u628A\u5B9E\u9645\u6295\u5165\u3001\u7ED3\u679C\u4E0E\u4E0B\u4E00\u6B65\u53D6\u820D\u653E\u5728\u4E00\u8D77\uFF1B\u6309\u524D\u7F6E\u4F9D\u8D56\u63A8\u8FDB\u5173\u952E\u51B3\u7B56\uFF0C\u5E76\u5BF9\u7167\u771F\u5B9E\u6D4B\u8BD5\u7684\u9884\u671F\u4E0E\u53CD\u9988\u3002",
  views: VIEWS
}];
function formatTime(value) {
  return new Date(value).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}
function FeatureHome({ data, loading, onEnter }) {
  const frontier = data?.cards.filter((card) => card.frontier).length || 0;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-home", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-home-main", children: FEATURES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("article", { className: "sw-module", "aria-labelledby": `sw-module-${item.id}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "sw-module-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-module-mark", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: item.icon, size: 24 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-module-title", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-eyebrow", children: item.skill }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { id: `sw-module-${item.id}`, children: item.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-chip sw-chip-accent", children: "\u5DF2\u5F00\u653E" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "sw-module-desc", children: item.description }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-module-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-stat", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: loading && !data ? "\u2026" : data ? data.cards.length : "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u51B3\u7B56\u5361" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-stat", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: loading && !data ? "\u2026" : data ? frontier : "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u53EF\u63A8\u8FDB" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-stat", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", { children: item.views.length }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u89C6\u56FE" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "sw-module-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-btn sw-btn-primary", onClick: () => onEnter(item.id), children: [
          "\u8FDB\u5165",
          item.title,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "arrowRight", size: 16 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-module-hint", children: "\u53EA\u8BFB\u5FEB\u7167 \xB7 \u4E0D\u6539\u52A8\u8D44\u6599" })
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("aside", { className: "sw-project-panel", "aria-label": "\u5F53\u524D\u6218\u7565\u6587\u4EF6\u5939", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-eyebrow", children: "\u5F53\u524D\u6218\u7565\u6587\u4EF6\u5939" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { children: data?.name || "\u5C1A\u672A\u8BFB\u53D6\u6587\u4EF6\u5939" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "sw-project-path", title: data?.project || "", children: data?.project || "\u9009\u62E9\u6587\u4EF6\u5939\u540E\u8BFB\u53D6" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("dl", { className: "sw-project-facts", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: "\u6218\u7565\u5730\u56FE" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: data ? data.map ? data.mapPath : "\u5C1A\u672A\u5EFA\u7ACB" : "\u2014" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: "\u51B3\u7B56\u5361" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: data ? data.cardsPath : "\u2014" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dt", { children: "\u8BFB\u53D6\u65F6\u95F4" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("dd", { children: data ? formatTime(data.loadedAt) : "\u2014" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "sw-project-note", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "info", size: 15 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u5730\u56FE\u4E0E\u51B3\u7B56\u5361\u4EE5\u672C\u5730 Markdown \u4E3A\u51C6\uFF1B\u5DE5\u4F5C\u53F0\u53EA\u8BFB\u5FEB\u7167\uFF0C\u4FEE\u6539\u8BF7\u56DE\u5230\u6218\u7565\u8BA8\u8BBA\u3002" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { className: "sw-workbench-rules", "aria-label": "\u5DE5\u4F5C\u53F0\u8BF4\u660E", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-rule", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "folder", size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "\u8BFB\u53D6\u6218\u7565\u6587\u4EF6\u5939" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "\u53EA\u8BFB\u53D6\u8BE5\u6587\u4EF6\u5939\u5185\u7684\u5730\u56FE\u4E0E\u51B3\u7B56\u5361\uFF0C\u4E0D\u626B\u63CF\u5176\u4ED6\u76EE\u5F55\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-rule", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "source", size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "\u53EA\u8BFB\u5FEB\u7167" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "\u754C\u9762\u4E0D\u6539\u52A8 Markdown\uFF1B\u5237\u65B0\u540E\u8BFB\u53D6\u6700\u65B0\u5185\u5BB9\u3002" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-rule", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "external", size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { children: "\u663E\u5F0F\u8BA8\u8BBA" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "\u9700\u8981\u4FEE\u6539\u65F6\uFF0C\u5728\u539F\u751F\u4F1A\u8BDD\u91CC\u8FD0\u884C /strategyfinder\u3002" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "sw-home-note", children: "\u66F4\u591A\u529F\u80FD\u4F1A\u968F\u5BF9\u5E94 skill \u9010\u4E2A\u52A0\u5165\uFF1B\u672A\u5B8C\u6210\u7684\u529F\u80FD\u4E0D\u4F1A\u63D0\u524D\u51FA\u73B0\u5728\u8FD9\u91CC\u3002" })
  ] });
}
function WorkbenchFrame({ adapter, data, binding, editing, loading, sending, view, onView, feature, onFeature, onHome, onSettings, onRefresh, onDiscuss, contentRef, headingRef: externalHeadingRef, children }) {
  const active = FEATURES.find((item) => item.id === feature) || null;
  const stageId = `sw-stage-${(0, import_react2.useId)().replace(/:/g, "")}`;
  const localHeadingRef = (0, import_react2.useRef)(null), firstRender = (0, import_react2.useRef)(true), headingRef = externalHeadingRef || localHeadingRef;
  (0, import_react2.useEffect)(() => {
    if (contentRef?.current) contentRef.current.scrollTop = 0;
  }, [feature, view, editing]);
  (0, import_react2.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [feature, view, editing]);
  const current = active?.views.find(([id]) => id === view);
  const frontier = data?.cards.filter((card) => card.frontier).length || 0;
  const sep = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-crumb-sep", "aria-hidden": "true", children: "/" });
  const breadcrumb = editing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    "\u5B66\u4E60\u5DE5\u4F5C\u53F0",
    sep,
    "\u6218\u7565\u6587\u4EF6\u5939"
  ] }) : active ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-crumb", onClick: onHome, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "arrowLeft", size: 13 }),
      "\u529F\u80FD"
    ] }),
    sep,
    active.title,
    sep,
    current?.[1]
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    "\u5B66\u4E60\u5DE5\u4F5C\u53F0",
    sep,
    "\u529F\u80FD"
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-workbench", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "sw-skip", onClick: () => headingRef.current?.focus(), children: "\u8DF3\u5230\u529F\u80FD\u5185\u5BB9" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "sw-workbench-topbar", "data-dsh-workbench-toolbar": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-brand", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-brand-mark", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "compass", size: 20 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-brand-text", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "\u5B66\u4E60\u5DE5\u4F5C\u53F0" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { children: "LEARNING WORKBENCH" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-project-context", title: data?.project || binding?.workspace || "\u672A\u9009\u62E9\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-context-label", children: "\u6218\u7565\u6587\u4EF6\u5939" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-context-name", children: data?.name || "\u672A\u9009\u62E9" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-workbench-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-tool", onClick: onRefresh, disabled: !binding || loading || editing, "aria-label": loading ? "\u6B63\u5728\u8BFB\u53D6\u6218\u7565\u6587\u4EF6" : "\u5237\u65B0\u6218\u7565\u6587\u4EF6", title: editing ? "\u5B8C\u6210\u6587\u4EF6\u5939\u8BBE\u7F6E\u540E\u518D\u5237\u65B0" : void 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "refresh", size: 17 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: loading ? "\u8BFB\u53D6\u4E2D" : "\u5237\u65B0" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-tool", onClick: onSettings, "aria-label": "\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939\u8BBE\u7F6E", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "settings", size: 17 }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u6587\u4EF6\u5939\u8BBE\u7F6E" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `sw-workbench-layout ${active ? "has-feature" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("aside", { className: "sw-workbench-sidebar", "aria-label": "\u5B66\u4E60\u5DE5\u4F5C\u53F0\u5BFC\u822A", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-sidebar-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-eyebrow", children: "\u529F\u80FD" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-sidebar-count", children: FEATURES.length })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-feature-list", children: FEATURES.map((item) => {
          const open = active?.id === item.id;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `sw-feature ${open ? "is-open" : ""}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-feature-toggle", "aria-expanded": open, "aria-label": item.title, disabled: editing, title: editing ? "\u5B8C\u6210\u6587\u4EF6\u5939\u8BBE\u7F6E\u540E\u518D\u5C55\u5F00\u529F\u80FD" : open ? `\u6536\u8D77${item.title}` : `\u5C55\u5F00${item.title}`, onClick: () => open ? onHome() : onFeature(item.id), children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-feature-icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: item.icon, size: 18 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-feature-text", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-feature-name", children: item.title }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-feature-tagline", children: item.tagline })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sw-feature-chevron", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: open ? "chevronUp" : "chevronDown", size: 15 }) })
            ] }),
            open && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "sw-workbench-nav", "aria-label": `${item.title}\u89C6\u56FE`, children: item.views.map(([id, label, icon]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", disabled: editing || !data, "aria-current": !editing && view === id ? "page" : void 0, "aria-label": id === "decisions" && data ? `${label}\uFF0C${data.cards.length} \u5F20\u51B3\u7B56\u5361` : label, className: !editing && view === id ? "is-active" : "", onClick: () => onView(id), children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: icon, size: 17 }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: label }),
              id === "decisions" && data && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("small", { "aria-hidden": "true", children: data.cards.length })
            ] }, id)) })
          ] }, item.id);
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-sidebar-footer", children: active && data ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "sw-status-line", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("i", { "aria-hidden": "true" }),
            frontier ? `${frontier} \u9879\u5173\u952E\u95EE\u9898\u53EF\u63A8\u8FDB` : "\u6682\u65E0\u5F85\u63A8\u8FDB\u7684\u524D\u6CBF\u95EE\u9898"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
            data.cards.length,
            " \u5F20\u51B3\u7B56\u5361 \xB7 \u53EA\u8BFB\u5FEB\u7167"
          ] })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u672C\u5730 Markdown \u662F\u4E8B\u5B9E\u6765\u6E90" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u529F\u80FD\u9010\u4E2A\u52A0\u5165" })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-workbench-stage", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "sw-stage-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sw-stage-heading-main", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-stage-breadcrumb", children: breadcrumb }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { ref: headingRef, tabIndex: -1, children: editing ? "\u914D\u7F6E\u6218\u7565\u6587\u4EF6\u5939" : active ? current?.[1] : "\u529F\u80FD" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: editing ? "\u9009\u62E9\u76F4\u63A5\u5305\u542B\u6218\u7565\u5730\u56FE\u4E0E\u51B3\u7B56\u5361\u7684\u6587\u4EF6\u5939\uFF1B\u4FDD\u5B58\u540E\u91CD\u65B0\u8BFB\u53D6\u3002" : active ? DESCRIPTIONS[view] : "\u5B66\u4E60\u5DE5\u4F5C\u53F0\u6309\u529F\u80FD\u9010\u4E2A\u5F00\u653E\u3002\u8FDB\u5165\u4E00\u4E2A\u529F\u80FD\u540E\uFF0C\u518D\u5C55\u5F00\u5B83\u7684\u89C6\u56FE\u3002" })
          ] }),
          !editing && active && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: "sw-btn sw-btn-primary sw-discuss-button", disabled: !data || sending, onClick: onDiscuss, children: [
            "\u8BA8\u8BBA\u6218\u7565",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: "external", size: 15 })
          ] })
        ] }),
        adapter.demo && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-preview-label", children: "\u793A\u4F8B\u6570\u636E \xB7 \u4EC5\u5C55\u793A\u754C\u9762\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u5B66\u4E60\u8D44\u6599\u6216\u542F\u52A8\u6A21\u578B" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sw-stage-content", id: stageId, tabIndex: -1, ref: contentRef, "aria-busy": loading || void 0, children }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "sw-workbench-footer", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: data ? `${data.name} \xB7 ${active ? active.title : "\u529F\u80FD\u76EE\u5F55"}` : "\u9009\u62E9\u4E00\u4E2A\u529F\u80FD\u5F00\u59CB" }),
          data && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { role: "status", "aria-live": "polite", children: [
            "\u6587\u4EF6\u5FEB\u7167 \xB7 ",
            formatTime(data.loadedAt)
          ] })
        ] })
      ] })
    ] })
  ] });
}

// src/binding.mjs
function folderBinding(value) {
  if (!value || typeof value.workspace !== "string" || !value.workspace.trim()) return null;
  const workspace = value.workspace.trim();
  const project = typeof value.project === "string" && value.project.trim() ? value.project.trim() : ".";
  if (project === "." || project === "./") return { workspace, project: "." };
  const parts = project.split(/[\\/]+/);
  if (parts.includes("..")) return null;
  const base = workspace.replace(/[\\/]+$/, "");
  const rel = project.replace(/^\.?[\\/]+/, "").replace(/^[\\/]+/, "");
  return { workspace: `${base}/${rel}`, project: "." };
}

// src/style.css
var css = '/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   Learning Workbench \xB7 study-atelier design tokens\n   Warm paper, ink, deep green. Serif for reading, sans for tools.\n   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-root{\n  --sw-bg:#f3f1e9;\n  --sw-bg-deep:#ece9df;\n  --sw-surface:#fffdf8;\n  --sw-surface-2:#f8f6ee;\n  --sw-surface-3:#f1eee4;\n  --sw-ink:#1c231f;\n  --sw-ink-2:#3a453e;\n  --sw-muted:#5f6a62;\n  --sw-muted-2:#657067;\n  --sw-line:#e3ded1;\n  --sw-line-2:#cfc9b9;\n  --sw-accent:#1f5b45;\n  --sw-accent-2:#2b7257;\n  --sw-accent-soft:#e7efe6;\n  --sw-accent-tint:#f1f5ee;\n  --sw-gold:#7a5a1f;\n  --sw-gold-soft:#f6eeda;\n  --sw-info:#2f5f8a;\n  --sw-info-soft:#e8f0f6;\n  --sw-danger:#9d3b33;\n  --sw-danger-soft:#f8e9e6;\n  --sw-shadow-sm:0 1px 2px rgba(28,35,31,.05);\n  --sw-shadow-md:0 2px 4px rgba(28,35,31,.04),0 20px 44px -30px rgba(28,35,31,.38);\n  --sw-shadow-lg:0 30px 90px -40px rgba(20,28,23,.55);\n  --sw-sans:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;\n  --sw-serif:"Songti SC","STSong","Noto Serif CJK SC","Source Han Serif SC","Songti TC",serif;\n  --sw-mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,monospace;\n  color:var(--sw-ink);\n  background:var(--sw-bg);\n  font:14px/1.65 var(--sw-sans);\n  min-height:100%;\n  height:100%;\n  width:100%;\n  text-align:left;\n  color-scheme:light;\n  isolation:isolate;\n  container-type:inline-size;\n}\n.sw-root,.sw-root *{box-sizing:border-box}\n.sw-root h1,.sw-root h2,.sw-root h3,.sw-root h4,.sw-root p,.sw-root dl,.sw-root dd,.sw-root dt,.sw-root blockquote,.sw-root figure{margin:0}\n:where(.sw-root) button{cursor:pointer;background:none;border:0;padding:0;font:inherit;color:inherit}\n.sw-root img,.sw-root svg{flex-shrink:0}\n.sw-root ::selection{background:var(--sw-accent-soft);color:var(--sw-accent)}\n.sw-root :focus-visible{outline:2px solid var(--sw-accent);outline-offset:2px;border-radius:4px}\n.sw-root ::-webkit-scrollbar{width:10px;height:10px}\n.sw-root ::-webkit-scrollbar-thumb{background:var(--sw-line-2);border:3px solid transparent;background-clip:content-box;border-radius:999px}\n.sw-root ::-webkit-scrollbar-track{background:transparent}\n.sw-skip{position:absolute;left:12px;top:-48px;z-index:30;padding:8px 12px;border:1px solid var(--sw-accent);border-radius:0 0 9px 9px;background:var(--sw-surface);color:var(--sw-accent);font-size:12px;font-weight:600;text-decoration:none;transition:top .16s ease}\n.sw-skip:focus{top:0}\n\n/* \u2500\u2500 shared atoms \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-eyebrow{display:block;font-size:10px;font-weight:600;letter-spacing:.14em;line-height:1.4;text-transform:uppercase;color:var(--sw-muted-2)}\n.sw-caption{font-size:11.5px;line-height:1.6;color:var(--sw-muted)}\n.sw-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.sw-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:38px;padding:0 14px;border:1px solid var(--sw-line-2);border-radius:9px;background:var(--sw-surface);color:var(--sw-ink);font-size:12.5px;font-weight:550;line-height:1;transition:background .16s ease,border-color .16s ease,color .16s ease,box-shadow .16s ease}\n.sw-btn:hover{border-color:var(--sw-accent);color:var(--sw-accent);background:var(--sw-accent-tint)}\n.sw-btn:active{transform:translateY(.5px)}\n.sw-btn:disabled{opacity:.5;cursor:not-allowed;transform:none}\n.sw-btn-primary{background:var(--sw-accent);border-color:var(--sw-accent);color:#fbfaf4;box-shadow:0 1px 2px rgba(31,91,69,.22)}\n.sw-btn-primary:hover{background:var(--sw-accent-2);border-color:var(--sw-accent-2);color:#fff}\n.sw-btn-ghost{border-color:transparent;background:transparent;color:var(--sw-ink-2)}\n.sw-btn-ghost:hover{background:var(--sw-surface-2);border-color:var(--sw-line);color:var(--sw-ink)}\n.sw-icon-btn{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid transparent;border-radius:9px;color:var(--sw-muted);background:transparent;transition:background .16s ease,color .16s ease,border-color .16s ease}\n.sw-icon-btn:hover{background:var(--sw-surface-2);border-color:var(--sw-line);color:var(--sw-ink)}\n.sw-link{display:inline-flex;align-items:center;gap:6px;padding:2px 0;border:0;background:none;color:var(--sw-accent);font-size:12px;font-weight:550;line-height:1.5;text-align:left;border-radius:3px}\n.sw-link:hover{text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}\n.sw-chip{display:inline-flex;align-items:center;gap:5px;flex-shrink:0;padding:3px 9px;border-radius:999px;border:1px solid var(--sw-line);background:var(--sw-surface-2);color:var(--sw-muted);font-size:10px;font-weight:600;letter-spacing:.05em;white-space:nowrap}\n.sw-chip-accent{border-color:transparent;background:var(--sw-accent-soft);color:var(--sw-accent)}\n.sw-badge{display:inline-flex;align-items:center;gap:5px;flex-shrink:0;padding:2px 8px;border:1px solid transparent;border-radius:999px;font-size:10px;font-weight:550;line-height:16px;white-space:nowrap}\n.sw-badge i{width:5px;height:5px;border-radius:50%;background:currentColor}\n.sw-status-open{color:var(--sw-gold);background:var(--sw-gold-soft)}\n.sw-status-claimed{color:var(--sw-info);background:var(--sw-info-soft)}\n.sw-status-closed{color:var(--sw-accent);background:var(--sw-accent-soft)}\n.sw-status-out_of_scope,.sw-status-custom{color:var(--sw-muted);background:var(--sw-surface-3)}\n\n/* \u2500\u2500 frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-workbench{position:relative;display:flex;flex-direction:column;height:100%;min-height:0;min-width:0;background:var(--sw-bg)}\n.sw-workbench-topbar{display:flex;align-items:center;gap:24px;height:64px;flex-shrink:0;padding:0 26px;border-bottom:1px solid var(--sw-line);background:var(--sw-surface)}\n.sw-brand{display:flex;align-items:center;gap:11px;flex-shrink:0;min-width:0}\n.sw-brand-mark{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--sw-accent);color:#f7f4e9;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}\n.sw-brand-text{display:flex;flex-direction:column;gap:1px;line-height:1.2}\n.sw-brand-text h1{font-size:14.5px;font-weight:650;line-height:1.35;letter-spacing:.01em}\n.sw-brand-text small{font-size:8px;font-weight:600;letter-spacing:.18em;color:var(--sw-muted-2)}\n.sw-project-context{display:flex;align-items:baseline;gap:8px;min-width:0;padding-left:24px;border-left:1px solid var(--sw-line);line-height:1.4}\n.sw-context-label{font-size:10px;font-weight:600;letter-spacing:.14em;color:var(--sw-muted-2);text-transform:uppercase}\n.sw-context-name{max-width:240px;overflow:hidden;text-overflow:ellipsis;font-size:12.5px;font-weight:600;color:var(--sw-ink);white-space:nowrap}\n.sw-workbench-tools{display:flex;align-items:center;gap:2px;margin-left:auto}\n.sw-tool{display:inline-flex;align-items:center;gap:7px;min-height:36px;padding:0 10px;border-radius:8px;color:var(--sw-muted);font-size:12px;font-weight:500;line-height:1;transition:background .16s ease,color .16s ease}\n.sw-tool:hover{background:var(--sw-surface-2);color:var(--sw-ink)}\n.sw-tool+.sw-tool{position:relative;margin-left:10px;padding-left:13px}\n.sw-tool+.sw-tool::before{content:"";position:absolute;left:0;top:9px;bottom:9px;width:1px;background:var(--sw-line)}\n.sw-tool:disabled{opacity:.45;cursor:wait}\n.sw-workbench-layout{display:grid;grid-template-columns:248px minmax(0,1fr);flex:1;min-height:0}\n\n/* sidebar */\n.sw-workbench-sidebar{display:flex;flex-direction:column;min-height:0;padding:26px 16px 18px;border-right:1px solid var(--sw-line);background:var(--sw-surface-2);overflow:auto}\n.sw-sidebar-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 10px;margin-bottom:10px}\n.sw-sidebar-count{min-width:20px;padding:0 6px;border:1px solid var(--sw-line-2);border-radius:999px;font-size:10px;line-height:17px;color:var(--sw-muted);text-align:center}\n.sw-feature-list{display:flex;flex-direction:column;gap:4px}\n.sw-feature-toggle{display:flex;align-items:center;gap:10px;width:100%;padding:10px;border:1px solid transparent;border-radius:11px;text-align:left;transition:background .16s ease,border-color .16s ease,box-shadow .16s ease}\n.sw-feature-toggle:hover{background:var(--sw-surface);border-color:var(--sw-line)}\n.sw-feature.is-open .sw-feature-toggle{background:var(--sw-surface);border-color:var(--sw-line);box-shadow:var(--sw-shadow-sm)}\n.sw-feature-icon{display:grid;place-items:center;width:32px;height:32px;flex-shrink:0;border-radius:8px;background:var(--sw-accent-soft);color:var(--sw-accent);transition:background .16s ease,color .16s ease}\n.sw-feature.is-open .sw-feature-icon{background:var(--sw-accent);color:#f7f4e9}\n.sw-feature-text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}\n.sw-feature-name{font-size:12.5px;font-weight:600;line-height:1.4;color:var(--sw-ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.sw-feature-tagline{font-size:10px;line-height:1.5;color:var(--sw-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.sw-feature-chevron{display:grid;place-items:center;color:var(--sw-muted);flex-shrink:0}\n.sw-feature.is-open .sw-feature-chevron{color:var(--sw-accent)}\n.sw-workbench-nav{display:flex;flex-direction:column;gap:2px;margin:4px 0 2px 16px;padding-left:12px;border-left:1px solid var(--sw-line-2)}\n.sw-workbench-nav button{display:flex;align-items:center;gap:9px;width:100%;min-height:36px;padding:0 10px;border-radius:8px;color:var(--sw-muted);font-size:12px;line-height:1.3;text-align:left;transition:background .16s ease,color .16s ease}\n.sw-workbench-nav button:hover{background:var(--sw-surface);color:var(--sw-ink)}\n.sw-workbench-nav button.is-active{background:var(--sw-accent-soft);color:var(--sw-accent);font-weight:600}\n.sw-workbench-nav button:disabled{opacity:.45;cursor:not-allowed}\n.sw-workbench-nav button svg{opacity:.8}\n.sw-workbench-nav small{margin-left:auto;min-width:18px;padding:0 5px;border-radius:5px;background:color-mix(in srgb,var(--sw-accent) 9%,transparent);font-size:9.5px;line-height:16px;text-align:center;color:inherit}\n.sw-sidebar-footer{display:flex;flex-direction:column;gap:4px;margin-top:auto;padding:18px 10px 0;border-top:1px solid var(--sw-line);font-size:10.5px;line-height:1.7;color:var(--sw-muted)}\n.sw-status-line{display:flex;align-items:center;gap:7px;color:var(--sw-ink-2)}\n.sw-status-line i{width:5px;height:5px;border-radius:50%;background:var(--sw-accent);flex-shrink:0}\n\n/* stage */\n.sw-workbench-stage{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--sw-bg)}\n.sw-stage-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-shrink:0;padding:27px 36px 21px;border-bottom:1px solid var(--sw-line);background:var(--sw-bg)}\n.sw-stage-heading-main{min-width:0}\n.sw-stage-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:10px;font-weight:550;letter-spacing:.06em;color:var(--sw-muted);line-height:1.5}\n.sw-crumb-sep{color:var(--sw-line-2)}\n.sw-crumb{display:inline-flex;align-items:center;gap:3px;border:0;background:none;padding:0;color:var(--sw-muted);font:inherit;letter-spacing:inherit;border-radius:3px}\n.sw-crumb:hover{color:var(--sw-accent)}\n.sw-stage-heading h2{font-family:var(--sw-serif);font-size:30px;font-weight:600;line-height:1.25;letter-spacing:-.01em;color:var(--sw-ink)}\n.sw-stage-heading p{margin-top:7px;font-size:12.5px;line-height:1.6;color:var(--sw-muted);max-width:62ch}\n.sw-discuss-button{flex-shrink:0}\n.sw-preview-label{flex-shrink:0;padding:8px 36px;border-bottom:1px solid color-mix(in srgb,var(--sw-gold) 15%,transparent);background:var(--sw-gold-soft);color:var(--sw-gold);font-size:10.5px}\n.sw-stage-content{flex:1;min-height:0;min-width:0;overflow:auto;padding:28px 36px 44px;overscroll-behavior:contain}\n.sw-stage-content>.sw-body,.sw-stage-content>.sw-home,.sw-stage-content>.sw-overview,.sw-stage-content>.sw-experiments,.sw-stage-content>.sw-history-view{max-width:1120px}\n.sw-workbench-footer{display:flex;justify-content:space-between;gap:16px;flex-shrink:0;padding:10px 26px;border-top:1px solid var(--sw-line);background:var(--sw-surface);font-size:10px;line-height:1.5;color:var(--sw-muted)}\n\n/* \u2500\u2500 feature directory home \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-home{display:grid;animation:sw-reveal .22s ease-out;grid-template-columns:minmax(0,1.5fr) minmax(270px,.8fr);gap:20px;align-items:start}\n.sw-home-main{min-width:0}\n.sw-module{position:relative;padding:28px 30px 26px;border:1px solid var(--sw-line);border-radius:16px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm);overflow:hidden}\n.sw-module::after{content:"";position:absolute;right:-54px;top:-64px;width:190px;height:190px;border:1px solid var(--sw-accent-soft);border-radius:50%;pointer-events:none}\n.sw-module-head{display:flex;align-items:center;gap:14px;min-width:0}\n.sw-module-mark{display:grid;place-items:center;width:46px;height:46px;flex-shrink:0;border-radius:13px;background:var(--sw-accent-soft);color:var(--sw-accent)}\n.sw-module-title{min-width:0}\n.sw-module-title h3{font-family:var(--sw-serif);font-size:24px;font-weight:600;line-height:1.3;letter-spacing:-.01em}\n.sw-module-title .sw-eyebrow{margin-bottom:2px}\n.sw-module-head .sw-chip{margin-left:auto}\n.sw-module-desc{margin-top:18px;font-size:13px;line-height:1.85;color:var(--sw-ink-2);max-width:60ch}\n.sw-module-meta{display:flex;flex-wrap:wrap;gap:0;margin-top:22px;padding:16px 0;border-top:1px solid var(--sw-line);border-bottom:1px solid var(--sw-line)}\n.sw-stat{display:flex;align-items:baseline;gap:8px;padding:0 22px;border-left:1px solid var(--sw-line)}\n.sw-stat:first-child{padding-left:0;border-left:0}\n.sw-stat strong{font-family:var(--sw-serif);font-size:24px;font-weight:600;line-height:1;color:var(--sw-ink);font-variant-numeric:tabular-nums}\n.sw-stat>span{font-size:10.5px;letter-spacing:.04em;color:var(--sw-muted)}\n.sw-module-actions{display:flex;align-items:center;gap:16px;margin-top:22px;flex-wrap:wrap}\n.sw-module-hint{font-size:10.5px;color:var(--sw-muted)}\n.sw-home-note{grid-column:1/-1;margin-top:0;font-size:10.5px;line-height:1.7;color:var(--sw-muted)}\n.sw-project-panel{padding:24px;border:1px solid var(--sw-line);border-radius:16px;background:var(--sw-surface-2)}\n.sw-project-panel>h3{font-family:var(--sw-serif);font-size:20px;font-weight:600;line-height:1.35;margin-top:6px;overflow-wrap:anywhere}\n.sw-project-path{margin-top:3px;font-size:11px;color:var(--sw-muted);overflow-wrap:anywhere}\n.sw-project-facts{margin:18px 0 0}\n.sw-project-facts>div{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;padding:9px 0;border-top:1px solid var(--sw-line)}\n.sw-project-facts dt{font-size:10px;letter-spacing:.05em;color:var(--sw-muted);flex-shrink:0}\n.sw-project-facts dd{font-size:11px;line-height:1.6;color:var(--sw-ink-2);text-align:right;font-family:var(--sw-mono);overflow-wrap:anywhere}\n.sw-project-note{display:flex;gap:8px;margin-top:16px;padding-top:14px;border-top:1px solid var(--sw-line);font-size:10.5px;line-height:1.7;color:var(--sw-muted)}\n.sw-project-note svg{margin-top:1px;color:var(--sw-muted-2)}\n\n/* \u2500\u2500 reading text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-text{font-size:13px;line-height:1.9;color:var(--sw-ink-2)}\n.sw-text>div>*+*{margin-top:5px}\n.sw-text p{overflow-wrap:anywhere}\n.sw-text strong{font-weight:600;color:var(--sw-ink)}\n.sw-text code{padding:1px 5px;border-radius:4px;background:var(--sw-surface-3);font-family:var(--sw-mono);font-size:.92em;color:var(--sw-ink)}\n.sw-text .sw-bullet{position:relative;padding-left:16px}\n.sw-text .sw-bullet::before{content:"";position:absolute;left:2px;top:.8em;width:4px;height:4px;border-radius:50%;background:var(--sw-muted-2)}\n.sw-ref{color:var(--sw-accent)}\n.sw-empty-line{font-size:12px;line-height:1.7;color:var(--sw-muted-2)}\n\n/* \u2500\u2500 overview \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-overview{padding-top:2px}\n.sw-direction{position:relative;padding:26px 30px 24px;border:1px solid var(--sw-line);border-radius:16px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm)}\n.sw-direction::before{content:"";position:absolute;left:0;top:26px;bottom:26px;width:3px;border-radius:0 3px 3px 0;background:linear-gradient(var(--sw-accent),color-mix(in srgb,var(--sw-accent) 35%,transparent))}\n.sw-direction-text{margin:11px 0 15px;max-width:66ch}\n.sw-direction-text p{font-family:var(--sw-serif);font-size:23px;line-height:1.68;letter-spacing:0;color:var(--sw-ink)}\n.sw-section{margin-top:34px}\n.sw-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:13px}\n.sw-section-head h3{font-size:14.5px;font-weight:650;line-height:1.4;letter-spacing:.005em;color:var(--sw-ink)}\n.sw-section-head .sw-caption{margin-top:4px}\n.sw-card-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}\n.sw-card{padding:20px 22px;border:1px solid var(--sw-line);border-radius:14px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm)}\n.sw-card .sw-section-head{margin-bottom:9px}\n.sw-card .sw-section-head h3{font-size:12px;letter-spacing:.02em;color:var(--sw-ink)}\n.sw-card .sw-text{font-size:12.5px;line-height:1.85}\n.sw-callout{margin-top:28px;padding:18px 22px;border:1px solid var(--sw-line);border-left:3px solid var(--sw-gold);border-radius:0 14px 14px 0;background:var(--sw-surface-2)}\n.sw-callout .sw-section-head{margin-bottom:7px}\n.sw-callout .sw-section-head h3{font-size:12px;color:var(--sw-gold);letter-spacing:.05em}\n\n/* resource table */\n.sw-table-wrap{border:1px solid var(--sw-line);border-radius:14px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm);overflow:auto}\n.sw-resources{width:100%;min-width:640px;border-collapse:separate;border-spacing:0;font-size:12.5px;line-height:1.75;table-layout:fixed}\n.sw-resources th,.sw-resources td{padding:14px 16px;text-align:left;vertical-align:top;border-bottom:1px solid var(--sw-line);overflow-wrap:anywhere}\n.sw-resources thead th{position:sticky;top:0;z-index:1;padding:10px 16px;background:var(--sw-surface-2);font-size:10px;font-weight:600;letter-spacing:.06em;color:var(--sw-muted);white-space:nowrap}\n.sw-resources tbody th{width:17%;font-weight:600;color:var(--sw-ink)}\n.sw-resources tbody tr:last-child>*{border-bottom:0}\n.sw-resources tbody tr:hover{background:var(--sw-accent-tint)}\n.sw-resources tbody td:nth-child(4){background:color-mix(in srgb,var(--sw-accent-soft) 34%,transparent)}\n.sw-resources tbody tr:hover td:nth-child(4){background:color-mix(in srgb,var(--sw-accent-soft) 52%,transparent)}\n\n/* \u2500\u2500 decisions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-toolbar{display:flex;align-items:center;gap:10px;margin-bottom:18px;flex-wrap:wrap}\n.sw-search{display:flex;flex:1 1 260px;align-items:center;gap:8px;min-width:0;height:40px;padding:0 12px;border:1px solid var(--sw-line-2);border-radius:9px;background:var(--sw-surface);color:var(--sw-muted);transition:border-color .16s ease,box-shadow .16s ease}\n.sw-search:focus-within{border-color:var(--sw-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--sw-accent) 13%,transparent)}\n.sw-search input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;font-size:12.5px;color:var(--sw-ink);outline:none}\n.sw-search input::placeholder{color:var(--sw-muted-2)}\n.sw-search-clear{display:grid;place-items:center;flex-shrink:0;width:24px;height:24px;border:0;border-radius:5px;background:transparent;color:var(--sw-muted)}\n.sw-search-clear:hover{background:var(--sw-surface-3);color:var(--sw-ink)}\n.sw-kbd{display:grid;place-items:center;flex-shrink:0;min-width:20px;height:20px;padding:0 5px;border:1px solid var(--sw-line-2);border-radius:5px;background:var(--sw-surface-2);font-family:var(--sw-mono);font-size:10px;line-height:1;color:var(--sw-muted)}\n.sw-select{flex-shrink:0}\n.sw-select select{height:40px;min-width:132px;padding:0 30px 0 12px;border:1px solid var(--sw-line-2);border-radius:9px;background:var(--sw-surface);font-size:12px;color:var(--sw-ink-2);appearance:none;background-image:linear-gradient(45deg,transparent 50%,var(--sw-muted) 50%),linear-gradient(135deg,var(--sw-muted) 50%,transparent 50%);background-position:calc(100% - 16px) 17px,calc(100% - 11px) 17px;background-size:5px 5px;background-repeat:no-repeat;cursor:pointer}\n.sw-select select:focus-visible{outline:2px solid var(--sw-accent);outline-offset:2px}\n.sw-decision-layout{display:grid;grid-template-columns:minmax(0,1fr);gap:26px;align-items:start}\n.sw-decision-layout.has-inspector{grid-template-columns:minmax(0,1fr) minmax(300px,360px)}\n.sw-decision-main{min-width:0}\n.sw-list-meta{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:12px;font-size:10.5px;line-height:1.5;color:var(--sw-muted)}\n.sw-list-meta .sw-link{font-size:10.5px;flex-shrink:0}\n.sw-graph{margin-bottom:22px;border:1px solid var(--sw-line);border-radius:14px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm);overflow:hidden}\n.sw-graph-note{display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:11px 18px;border-bottom:1px solid var(--sw-line);background:var(--sw-surface-2);font-size:11px;color:var(--sw-ink-2)}\n.sw-graph-note small{font-size:10px;color:var(--sw-muted)}\n.sw-graph-hint{display:none;color:var(--sw-accent)}\n.sw-decision-layout.has-inspector .sw-graph-hint{display:inline}\n.sw-graph-scroll{overflow:auto;max-height:470px;background-color:var(--sw-surface);background-image:radial-gradient(circle,var(--sw-line) 1px,transparent 1px);background-size:20px 20px;overscroll-behavior:contain}\n.sw-edges{color:var(--sw-line-2)}\n.sw-node{position:absolute!important;display:flex!important;flex-direction:column;align-items:flex-start;justify-content:center;gap:4px;width:218px;height:76px;padding:10px 14px;border:1px solid var(--sw-line-2);border-radius:10px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm);text-align:left;transition:border-color .16s ease,box-shadow .16s ease,transform .16s ease,background .16s ease}\n.sw-node:hover{border-color:var(--sw-accent);transform:translateY(-1px)}\n.sw-node.is-selected{border-color:var(--sw-accent);background:var(--sw-accent-tint);box-shadow:0 0 0 1px var(--sw-accent),var(--sw-shadow-sm)}\n.sw-node-type{font-size:10px;line-height:1.4;letter-spacing:.03em;color:var(--sw-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}\n.sw-node strong{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:12px;font-weight:600;line-height:1.45;color:var(--sw-ink)}\n.sw-decision-list{border:1px solid var(--sw-line);border-radius:14px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm);overflow:hidden}\n.sw-decision-row{display:flex;align-items:center;gap:14px;width:100%;min-height:0;padding:15px 18px;border-bottom:1px solid var(--sw-line);background:transparent;text-align:left;transition:background .16s ease}\n.sw-decision-row:last-child{border-bottom:0}\n.sw-decision-row:hover{background:var(--sw-surface-2)}\n.sw-decision-row.is-selected{background:var(--sw-accent-tint)}\n.sw-decision-row:focus-visible{outline-offset:-3px}\n.sw-kind{flex-shrink:0;padding:2px 7px;border:1px solid var(--sw-line);border-radius:5px;font-size:10px;line-height:1.6;letter-spacing:.03em;color:var(--sw-muted);white-space:nowrap}\n.sw-row-main{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}\n.sw-row-main strong{font-size:13px;font-weight:600;line-height:1.45;color:var(--sw-ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.sw-row-main small{font-size:11px;line-height:1.5;color:var(--sw-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.sw-row-state{display:flex;align-items:center;gap:7px;flex-shrink:0}\n.sw-frontier{padding:1px 7px;border-radius:999px;background:var(--sw-accent-soft);color:var(--sw-accent);font-size:10px;font-weight:600;line-height:16px}\n.sw-decision-row>svg{color:var(--sw-muted-2)}\n@keyframes sw-detail-in{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:none}}\n@keyframes sw-nav-in{from{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:none}}\n\n/* inspector */\n.sw-inspector{position:sticky;top:0;animation:sw-detail-in .2s ease-out;max-height:calc(100vh - 220px);overflow:auto;padding:22px 22px 26px;border:1px solid var(--sw-line);border-radius:16px;background:var(--sw-surface);box-shadow:var(--sw-shadow-md);scrollbar-gutter:stable}\n.sw-inspector-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}\n.sw-back{display:inline-flex;align-items:center;gap:4px;padding:4px 2px;border:0;background:none;color:var(--sw-muted);font-size:10.5px;font-weight:550;letter-spacing:.03em;border-radius:3px}\n.sw-back:hover{color:var(--sw-accent)}\n.sw-inspector>h3{font-family:var(--sw-serif);font-size:23px;font-weight:600;line-height:1.4;margin:7px 0 14px;overflow-wrap:anywhere}\n.sw-detail-actions{display:flex;align-items:center;gap:8px;padding-bottom:18px;border-bottom:1px solid var(--sw-line)}\n.sw-detail-actions .sw-icon-btn{border-color:var(--sw-line);background:var(--sw-surface-2)}\n.sw-inspector-section{margin-top:20px}\n.sw-inspector-section>h4{font-size:10px;font-weight:600;letter-spacing:.1em;color:var(--sw-muted);margin-bottom:8px}\n.sw-inspector-section .sw-text{font-size:12.5px;line-height:1.85}\n.sw-dependencies{list-style:none;display:flex;flex-direction:column;gap:6px;padding:0;margin:0}\n.sw-dependencies li{display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:6px;align-items:baseline;font-size:12px;line-height:1.6;color:var(--sw-ink-2)}\n.sw-dependencies li>span:first-child{color:var(--sw-accent);font-size:10px}\n.sw-dependencies small{font-size:10px;color:var(--sw-muted);white-space:nowrap}\n.sw-evidence-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}\n.sw-evidence-item{padding:10px 12px;border:1px solid var(--sw-line);border-radius:9px;background:var(--sw-surface-2);min-width:0}\n.sw-evidence-item>span{display:block;font-size:10px;font-weight:600;letter-spacing:.08em;color:var(--sw-muted-2);margin-bottom:3px}\n.sw-evidence-item .sw-text{font-size:11.5px;line-height:1.75}\n\n/* \u2500\u2500 experiments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-experiments{max-width:1000px}\n.sw-intro{padding-left:13px;margin-bottom:19px;border-left:2px solid var(--sw-line-2);font-size:12px;line-height:1.7;color:var(--sw-muted)}\n.sw-experiment{padding:26px 28px 24px;border:1px solid var(--sw-line);border-radius:16px;background:var(--sw-surface);box-shadow:var(--sw-shadow-sm)}\n.sw-experiment+.sw-experiment{margin-top:18px}\n.sw-experiment>header{display:flex;align-items:flex-start;justify-content:space-between;gap:18px}\n.sw-experiment>header h3{font-family:var(--sw-serif);font-size:24px;font-weight:600;line-height:1.35;margin-top:4px;overflow-wrap:anywhere}\n.sw-hypothesis{display:flex;gap:16px;margin:20px 0;padding:13px 16px;border-radius:10px;background:var(--sw-gold-soft)}\n.sw-hypothesis>span{flex-shrink:0;padding-top:2px;font-size:10px;font-weight:600;letter-spacing:.09em;color:var(--sw-gold)}\n.sw-hypothesis .sw-text{font-size:12px;line-height:1.8}\n.sw-comparison{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--sw-line);border-radius:12px;overflow:hidden}\n.sw-phase{display:flex;gap:14px;padding:20px;background:var(--sw-surface);min-width:0}\n.sw-phase+.sw-phase{border-left:1px solid var(--sw-line);background:var(--sw-surface-2)}\n.sw-phase-index{font-family:var(--sw-serif);font-size:22px;line-height:1;color:var(--sw-line-2);flex-shrink:0}\n.sw-phase h4{font-size:13.5px;font-weight:650;line-height:1.45;margin:5px 0 7px}\n.sw-phase .sw-text{font-size:12px;line-height:1.8}\n.sw-experiment>footer{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px;flex-wrap:wrap}\n.sw-experiment>footer .sw-btn{font-size:12px}\n\n/* \u2500\u2500 history \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-history-view{padding-top:2px}\n.sw-history{display:flex;gap:16px;padding:18px 0;border-top:1px solid var(--sw-line)}\n.sw-history:first-of-type{border-top:0;padding-top:4px}\n.sw-history>div{min-width:0}\n.sw-history h4{font-size:13.5px;font-weight:600;line-height:1.5;margin:8px 0 5px}\n.sw-history .sw-link{margin-top:8px;font-size:11px}\n.sw-history .sw-text{font-size:12.5px}\n\n/* \u2500\u2500 empty & status \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:620px;margin:24px auto;padding:54px 28px;border:1px dashed var(--sw-line-2);border-radius:16px;background:var(--sw-surface);text-align:center}\n.sw-empty-mark{display:grid;place-items:center;width:52px;height:52px;margin-bottom:15px;border-radius:50%;background:var(--sw-accent-soft);color:var(--sw-accent)}\n.sw-empty h3{font-family:var(--sw-serif);font-size:22px;font-weight:600;line-height:1.4;margin-bottom:7px}\n.sw-empty p{max-width:46ch;font-size:12.5px;line-height:1.8;color:var(--sw-muted)}\n.sw-empty .sw-btn{margin-top:18px}\n.sw-loading{display:flex;align-items:center;justify-content:center;gap:10px;padding:64px 20px;font-size:12px;color:var(--sw-muted)}\n.sw-spinner{width:15px;height:15px;border:2px solid var(--sw-line-2);border-top-color:var(--sw-accent);border-radius:50%;animation:sw-spin .8s linear infinite}\n@keyframes sw-spin{to{transform:rotate(360deg)}}\n.sw-warning{margin-bottom:10px;padding:9px 12px;border:1px solid color-mix(in srgb,var(--sw-gold) 18%,transparent);border-radius:8px;background:var(--sw-gold-soft);font-size:11px;line-height:1.7;color:var(--sw-gold)}\n.sw-error{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;padding:10px 14px;border:1px solid color-mix(in srgb,var(--sw-danger) 18%,transparent);border-radius:9px;background:var(--sw-danger-soft);font-size:11.5px;line-height:1.7;color:var(--sw-danger)}\n.sw-error .sw-link{color:inherit;text-decoration:underline;text-underline-offset:3px;flex-shrink:0;font-size:11px}\n.sw-error-actions{display:flex;align-items:center;gap:12px;flex-shrink:0;flex-wrap:wrap}\n.sw-notice{display:flex;animation:sw-reveal .18s ease-out;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:16px;padding:8px 8px 8px 14px;border:1px solid color-mix(in srgb,var(--sw-accent) 15%,transparent);border-radius:9px;background:var(--sw-accent-tint);font-size:11.5px;line-height:1.7;color:var(--sw-accent)}\n.sw-notice-actions{display:flex;align-items:center;gap:4px;flex-shrink:0}\n.sw-notice-actions .sw-link{font-size:10.5px}\n.sw-notice>span{flex:1;min-width:0}\n.sw-notice .sw-icon-btn{width:26px;height:26px;color:var(--sw-accent);flex-shrink:0}\n.sw-notice .sw-icon-btn:hover{background:var(--sw-accent-soft);border-color:transparent}\n.sw-body{animation:sw-reveal .22s ease-out}\n@keyframes sw-reveal{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}\n@keyframes sw-dialog-in{from{opacity:0;transform:translateY(6px) scale(.995)}to{opacity:1;transform:none}}\n\n/* \u2500\u2500 settings form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-space-form{display:flex;flex-direction:column;gap:26px;width:100%;max-width:700px;margin:0 auto;padding:34px 0 56px}\n.sw-form-head{display:flex;flex-direction:column;gap:7px}\n.sw-form-head h1,.sw-form-head h2{font-family:var(--sw-serif);font-size:31px;font-weight:600;line-height:1.3;letter-spacing:-.01em}\n.sw-form-head p{max-width:54ch;font-size:12.5px;line-height:1.75;color:var(--sw-muted)}\n.sw-fieldset{display:flex;flex-direction:column;gap:18px;min-width:0;padding:0;margin:0;border:0}\n.sw-legend{padding:0;margin-bottom:2px;font-size:10px;font-weight:600;letter-spacing:.11em;color:var(--sw-muted);text-transform:uppercase}\n.sw-field{display:flex;flex-direction:column;gap:7px;font-size:12px;font-weight:550;line-height:1.5;color:var(--sw-ink-2)}\n.sw-field input,.sw-field textarea,.sw-field select{width:100%;min-height:42px;padding:0 12px;border:1px solid var(--sw-line-2);border-radius:9px;background:var(--sw-surface);font-size:12.5px;font-weight:400;color:var(--sw-ink);transition:border-color .16s ease,box-shadow .16s ease}\n.sw-field textarea{min-height:150px;padding:11px 12px;line-height:1.75;resize:vertical}\n.sw-field input:focus-visible,.sw-field textarea:focus-visible,.sw-field select:focus-visible{outline:none;border-color:var(--sw-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--sw-accent) 13%,transparent)}\n.sw-field input::placeholder,.sw-field textarea::placeholder{color:var(--sw-muted-2)}\n.sw-field small{font-size:10.5px;font-weight:400;line-height:1.7;color:var(--sw-muted)}\n.sw-required{margin-left:5px;font-size:9px;font-weight:600;letter-spacing:.05em;color:var(--sw-muted-2)}\n.sw-input-row{display:flex;align-items:stretch;gap:8px}\n.sw-input-row input{flex:1;min-width:0}\n.sw-input-row .sw-btn{flex-shrink:0}\n.sw-form-advanced{padding-top:16px;border-top:1px solid var(--sw-line)}\n.sw-form-advanced>summary{display:flex;align-items:center;gap:7px;font-size:11.5px;font-weight:550;color:var(--sw-ink-2);cursor:pointer;list-style:none;padding:2px 0}\n.sw-form-advanced>summary::-webkit-details-marker{display:none}\n.sw-form-advanced>summary::before{content:"+";display:grid;place-items:center;width:16px;height:16px;border:1px solid var(--sw-line-2);border-radius:4px;font-size:11px;line-height:1;color:var(--sw-muted)}\n.sw-form-advanced[open]>summary::before{content:"\u2212"}\n.sw-form-advanced[open]>summary{margin-bottom:16px}\n.sw-form-hint{font-size:10.5px;line-height:1.7;color:var(--sw-muted)}\n.sw-confirm{display:flex;animation:sw-reveal .18s ease-out;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:12px 14px;border:1px solid color-mix(in srgb,var(--sw-gold) 22%,transparent);border-radius:9px;background:var(--sw-gold-soft);font-size:11.5px;line-height:1.6;color:var(--sw-gold)}\n.sw-confirm>div{display:flex;align-items:center;gap:8px}\n.sw-confirm .sw-btn{min-height:32px;font-size:11.5px}\n.sw-form-actions{display:flex;align-items:center;justify-content:flex-end;gap:10px;padding-top:14px;border-top:1px solid var(--sw-line)}\n.sw-onboarding{width:100%;max-width:760px}\n.sw-root-onboarding{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:44px 24px;background:radial-gradient(120% 100% at 50% 0,var(--sw-surface) 0,var(--sw-bg) 58%)}\n.sw-root-onboarding .sw-space-form{padding:38px 42px;border:1px solid var(--sw-line);border-radius:20px;background:var(--sw-surface);box-shadow:var(--sw-shadow-lg)}\n.sw-root-onboarding .sw-form-head h1{font-size:30px}\n\n/* \u2500\u2500 dialogs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.sw-dialog{width:min(760px,calc(100vw - 32px));animation:sw-dialog-in .18s ease-out;max-height:86vh;padding:0;border:1px solid var(--sw-line);border-radius:18px;background:var(--sw-surface);color:var(--sw-ink);box-shadow:var(--sw-shadow-lg);overflow:auto}\n.sw-dialog::backdrop{background:rgba(16,24,19,.52);backdrop-filter:blur(2px)}\n.sw-dialog-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 26px;border-bottom:1px solid var(--sw-line)}\n.sw-dialog-head h2{font-family:var(--sw-serif);font-size:19px;font-weight:600;line-height:1.45;margin-top:4px;overflow-wrap:anywhere}\n.sw-source pre{margin:0;padding:22px 26px 28px;max-height:60vh;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.9 var(--sw-mono);color:var(--sw-ink-2)}\n.sw-discuss form{display:flex;flex-direction:column}\n.sw-dialog-note{padding:18px 26px 0;font-size:12px;line-height:1.75;color:var(--sw-muted)}\n.sw-discuss blockquote{margin:14px 26px 0;padding:10px 14px;border-left:2px solid var(--sw-accent);border-radius:0 8px 8px 0;background:var(--sw-accent-tint);font-size:12px;line-height:1.7;color:var(--sw-ink-2)}\n.sw-discuss .sw-field{padding:18px 26px 0}\n.sw-dialog-actions{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px;padding:20px 26px 22px;border-top:1px solid var(--sw-line);flex-wrap:wrap}\n.sw-hint{font-size:10.5px;line-height:1.6;color:var(--sw-muted)}\n\n.sw-workbench-rules{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:2px;padding:18px 22px;border:1px solid var(--sw-line);border-radius:14px;background:var(--sw-surface-2)}\n.sw-rule{display:flex;gap:11px;padding:0 20px;border-left:1px solid var(--sw-line);min-width:0}\n.sw-rule:first-child{padding-left:0;border-left:0}\n.sw-rule:last-child{padding-right:0}\n.sw-rule>svg{margin-top:2px;color:var(--sw-accent)}\n.sw-rule h4{font-size:11.5px;font-weight:600;line-height:1.5;color:var(--sw-ink);margin-bottom:2px}\n.sw-rule p{font-size:10.5px;line-height:1.7;color:var(--sw-muted)}\n\n/* \u2500\u2500 responsive \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@container (max-width:1180px){\n  .sw-workbench-layout{grid-template-columns:230px minmax(0,1fr)}\n  .sw-workbench-topbar{padding:0 20px;gap:18px}\n  .sw-stage-heading{padding:24px 28px 19px}\n  .sw-stage-content{padding:24px 28px 40px}\n  .sw-preview-label{padding:8px 28px}\n  .sw-graph-hint{display:inline}\n  .sw-decision-layout.has-inspector{grid-template-columns:1fr}\n  .sw-decision-layout.has-inspector .sw-decision-main{display:none}\n  .sw-inspector{position:static;max-height:none}\n}\n@container (max-width:980px){\n  .sw-home{grid-template-columns:1fr}\n  .sw-project-panel{display:grid;grid-template-columns:1fr auto;gap:6px 24px;align-items:start}\n  .sw-project-panel>h3,.sw-project-path{grid-column:1}\n  .sw-project-facts{grid-column:2;grid-row:1/span 3;margin:0;min-width:240px}\n  .sw-project-note{grid-column:1/-1}\n  .sw-workbench-rules{grid-template-columns:1fr;padding:16px 18px;gap:12px}\n  .sw-rule{padding:0;border-left:0;border-top:1px solid var(--sw-line);padding-top:12px}\n  .sw-rule:first-child{border-top:0;padding-top:0}\n  .sw-stage-heading h2{font-size:27px}\n}\n@container (max-width:980px){\n  .sw-workbench-layout{display:flex;flex-direction:column}\n  .sw-workbench-topbar{height:60px;padding:0 16px;gap:12px}\n  .sw-brand-text small{display:none}\n  .sw-project-context{gap:7px;padding-left:16px}\n  .sw-workbench-sidebar{display:none}\n  .sw-workbench-layout.has-feature .sw-workbench-sidebar{display:flex;flex-direction:row;align-items:center;gap:8px;min-height:52px;padding:7px 12px;border-right:0;border-bottom:1px solid var(--sw-line);overflow:auto}\n  .sw-sidebar-head,.sw-sidebar-footer{display:none}\n  .sw-feature-list{flex-direction:row;align-items:center;gap:6px;flex:1;min-width:0}\n  .sw-feature{display:flex;align-items:center;gap:2px;min-width:0;flex:1}\n  .sw-workbench-layout.has-feature .sw-feature-toggle{display:none}\n  .sw-feature-icon{width:28px;height:28px;border-radius:7px}\n  .sw-feature-tagline{display:none}\n  .sw-feature-name{font-size:12px}\n  .sw-workbench-layout.has-feature .sw-workbench-nav{display:flex;flex-direction:row;gap:4px;margin:0;padding:0;border-left:0;border:0;overflow:auto;min-width:0;flex:1}\n  .sw-workbench-layout.has-feature .sw-workbench-nav button{flex:0 0 auto;justify-content:center;width:auto;min-height:44px;padding:0 12px;white-space:nowrap;gap:6px;font-size:11.5px}\n  .sw-workbench-nav small{display:none}\n  .sw-stage-heading{padding:20px 18px 17px;gap:16px}\n  .sw-stage-heading h2{font-size:26px}\n  .sw-stage-heading p{font-size:11.5px}\n  .sw-stage-content{padding:20px 18px 36px}\n  .sw-preview-label{padding:7px 18px}\n  .sw-workbench-footer{padding:8px 16px}\n  .sw-tool{padding:0 10px;min-height:44px}\n  .sw-tool span{display:none}\n  .sw-tool svg{width:19px;height:19px}\n  .sw-crumb{min-height:32px;padding:6px 4px;margin:-6px -4px}\n  .sw-link{min-height:28px}\n  .sw-back{min-height:44px;padding:8px 6px;margin-left:-6px}\n  .sw-btn{min-height:44px}\n  .sw-icon-btn{width:44px;height:44px}\n  .sw-workbench-nav button{min-height:38px}\n  .sw-field input,.sw-field textarea,.sw-field select{font-size:16px;min-height:46px}\n  .sw-dialog-actions .sw-btn{min-height:44px}\n}\n@container (max-width:720px){\n  .sw-resources{display:block;min-width:0}\n  .sw-resources thead{display:none}\n  .sw-resources tbody,.sw-resources tr,.sw-resources th,.sw-resources td{display:block;width:auto}\n  .sw-resources tr{padding:14px 16px;border-bottom:1px solid var(--sw-line)}\n  .sw-resources tr:last-child{border-bottom:0}\n  .sw-resources tbody th{width:auto;padding:0 0 9px;margin-bottom:9px;border-bottom:1px dashed var(--sw-line);font-size:14px}\n  .sw-resources tbody td{display:grid;grid-template-columns:92px minmax(0,1fr);gap:10px;padding:4px 0;border:0;font-size:12px}\n  .sw-resources tbody td::before{content:attr(data-label);font-size:9.5px;font-weight:600;letter-spacing:.05em;color:var(--sw-muted);padding-top:2px}\n  .sw-resources tbody td:nth-child(4){background:transparent}\n}\n@container (max-width:640px){\n  .sw-project-context{display:none}\n  .sw-workbench-layout.has-feature .sw-workbench-nav{gap:2px}\n  .sw-workbench-layout.has-feature .sw-workbench-nav button{flex:1 1 0;padding:0 4px;gap:4px;font-size:11px}\n  .sw-stage-heading{flex-direction:column;align-items:flex-start;gap:14px}\n  .sw-stage-heading h2{font-size:24px}\n  .sw-discuss-button{width:100%}\n  .sw-brand-text h1{font-size:13.5px}\n  .sw-brand-mark{width:30px;height:30px}\n  .sw-home-main{min-width:0}\n  .sw-module{padding:22px 20px}\n  .sw-module-title h3{font-size:21px}\n  .sw-module-mark{width:40px;height:40px;border-radius:11px}\n  .sw-module-head{gap:11px}\n  .sw-module-desc{font-size:12.5px}\n  .sw-module-meta{padding:13px 0}\n  .sw-stat{padding:0 14px}\n  .sw-stat strong{font-size:20px}\n  .sw-stat>span{font-size:9.5px}\n  .sw-module-actions{align-items:flex-start;flex-direction:column;gap:10px}\n  .sw-module-actions .sw-btn{width:100%}\n  .sw-project-panel{display:block;padding:20px}\n  .sw-project-facts{margin-top:16px;min-width:0}\n  .sw-direction{padding:20px}\n  .sw-direction::before{top:20px;bottom:20px}\n  .sw-direction-text p{font-size:19px;line-height:1.75}\n  .sw-card-grid{grid-template-columns:1fr;gap:12px;margin-top:24px}\n  .sw-section{margin-top:26px}\n  .sw-section-head{flex-direction:column;align-items:flex-start;gap:6px}\n  .sw-callout{padding:16px 18px}\n  .sw-toolbar{gap:8px}\n  .sw-search{flex-basis:100%}\n  .sw-select{flex:1}\n  .sw-select select{width:100%}\n  .sw-toolbar>.sw-btn{flex:1}\n  .sw-graph-note{flex-direction:column;gap:3px;align-items:flex-start}\n  .sw-graph-scroll{max-height:340px}\n  .sw-row-main strong{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n  .sw-row-main small{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n  .sw-kind{display:none}\n  .sw-decision-row{gap:10px;padding:13px 14px}\n  .sw-row-state .sw-badge{display:none}\n  .sw-resources{display:block;min-width:0}\n  .sw-resources thead{display:none}\n  .sw-resources tbody,.sw-resources tr,.sw-resources th,.sw-resources td{display:block;width:auto}\n  .sw-resources tr{padding:14px 16px;border-bottom:1px solid var(--sw-line)}\n  .sw-resources tr:last-child{border-bottom:0}\n  .sw-resources tbody th{width:auto;padding:0 0 9px;margin-bottom:9px;border-bottom:1px dashed var(--sw-line);font-size:14px}\n  .sw-resources tbody td{display:grid;grid-template-columns:92px minmax(0,1fr);gap:10px;padding:4px 0;border:0;font-size:12px}\n  .sw-resources tbody td::before{content:attr(data-label);font-size:9.5px;font-weight:600;letter-spacing:.05em;color:var(--sw-muted);padding-top:2px}\n  .sw-resources tbody td:nth-child(4){background:transparent}\n  .sw-experiment{padding:20px 18px}\n  .sw-experiment>header h3{font-size:21px}\n  .sw-comparison{grid-template-columns:1fr}\n  .sw-phase+.sw-phase{border-left:0;border-top:1px solid var(--sw-line)}\n  .sw-hypothesis{flex-direction:column;gap:5px}\n  .sw-evidence-grid{grid-template-columns:1fr}\n  .sw-inspector{padding:18px}\n  .sw-dialog{width:calc(100vw - 20px);max-height:90vh;border-radius:14px}\n  .sw-dialog-head{padding:18px 18px 16px}\n  .sw-source pre{padding:18px;font-size:11px}\n  .sw-dialog-note{padding:16px 18px 0}\n  .sw-discuss blockquote{margin:12px 18px 0}\n  .sw-discuss .sw-field{padding:16px 18px 0}\n  .sw-dialog-actions{padding:16px 18px 18px}\n  .sw-dialog-actions .sw-btn{width:100%}\n  .sw-hint{width:100%}\n  .sw-root-onboarding{padding:16px}\n  .sw-root-onboarding .sw-space-form{padding:26px 20px}\n  .sw-root-onboarding .sw-form-head h1{font-size:26px}\n  .sw-space-form{padding:20px 0 40px}\n  .sw-form-head h1,.sw-form-head h2{font-size:26px}\n  .sw-input-row{flex-direction:column}\n  .sw-input-row .sw-btn{width:100%}\n  .sw-confirm{align-items:flex-start;flex-direction:column}\n  .sw-confirm>div{width:100%}\n  .sw-confirm .sw-btn{flex:1}\n  .sw-form-actions{flex-direction:column;align-items:stretch}\n  .sw-form-actions .sw-btn{width:100%}\n  .sw-empty{padding:40px 20px;margin:12px auto}\n  .sw-empty h3{font-size:20px}\n  .sw-stage-breadcrumb{font-size:9.5px}\n  .sw-kbd{display:none}\n  .sw-notice{flex-direction:column;align-items:flex-start;gap:8px}\n  .sw-notice-actions{width:100%;justify-content:space-between}\n  .sw-error{flex-direction:column;align-items:flex-start;gap:8px}\n  .sw-error-actions{width:100%;justify-content:space-between}\n}\n@container (max-width:380px){\n  .sw-module-meta{flex-wrap:wrap;gap:10px 0}\n  .sw-stat{padding:0 12px}\n  .sw-stat:nth-child(3){padding-left:0;border-left:0;width:100%}\n  .sw-brand-text small{display:none}\n}\n\n@media(prefers-reduced-motion:reduce){\n  .sw-root *{animation:none!important;transition:none!important}\n  .sw-root .sw-btn:active{transform:none}\n}\n\n/* \u2500\u2500 dark theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n@media(prefers-color-scheme:dark){\n  .sw-root{\n    --sw-bg:#121713;\n    --sw-bg-deep:#0f1411;\n    --sw-surface:#1a211c;\n    --sw-surface-2:#202823;\n    --sw-surface-3:#26302a;\n    --sw-ink:#e9ece4;\n    --sw-ink-2:#c6cec6;\n    --sw-muted:#9aa69c;\n    --sw-muted-2:#828e85;\n    --sw-line:#303a33;\n    --sw-line-2:#455148;\n    --sw-accent:#93c8a9;\n    --sw-accent-2:#a9d6bc;\n    --sw-accent-soft:#24342b;\n    --sw-accent-tint:#1f2b24;\n    --sw-gold:#d9b878;\n    --sw-gold-soft:#2f2a1c;\n    --sw-info:#9cc2de;\n    --sw-info-soft:#1f2d38;\n    --sw-danger:#e6a19a;\n    --sw-danger-soft:#352120;\n    --sw-shadow-sm:0 1px 2px rgba(0,0,0,.25);\n    --sw-shadow-md:0 2px 6px rgba(0,0,0,.2),0 24px 50px -34px rgba(0,0,0,.7);\n    --sw-shadow-lg:0 30px 90px -40px rgba(0,0,0,.8);\n    color-scheme:dark;\n  }\n  .sw-btn-primary{color:#12241a;box-shadow:none}\n  .sw-btn-primary:hover{color:#0e1d15}\n  .sw-brand-mark{color:#12241a}\n  .sw-feature.is-open .sw-feature-icon{color:#12241a}\n  .sw-root-onboarding{background:radial-gradient(120% 100% at 50% 0,var(--sw-surface) 0,var(--sw-bg) 58%)}\n  .sw-select select{background-image:linear-gradient(45deg,transparent 50%,var(--sw-muted) 50%),linear-gradient(135deg,var(--sw-muted) 50%,transparent 50%)}\n}\n:where(.dark,[data-theme=dark]) .sw-root{\n  --sw-bg:#121713;\n  --sw-bg-deep:#0f1411;\n  --sw-surface:#1a211c;\n  --sw-surface-2:#202823;\n  --sw-surface-3:#26302a;\n  --sw-ink:#e9ece4;\n  --sw-ink-2:#c6cec6;\n  --sw-muted:#9aa69c;\n  --sw-muted-2:#828e85;\n  --sw-line:#303a33;\n  --sw-line-2:#455148;\n  --sw-accent:#93c8a9;\n  --sw-accent-2:#a9d6bc;\n  --sw-accent-soft:#24342b;\n  --sw-accent-tint:#1f2b24;\n  --sw-gold:#d9b878;\n  --sw-gold-soft:#2f2a1c;\n  --sw-info:#9cc2de;\n  --sw-info-soft:#1f2d38;\n  --sw-danger:#e6a19a;\n  --sw-danger-soft:#352120;\n  --sw-shadow-sm:0 1px 2px rgba(0,0,0,.25);\n  --sw-shadow-md:0 2px 6px rgba(0,0,0,.2),0 24px 50px -34px rgba(0,0,0,.7);\n  --sw-shadow-lg:0 30px 90px -40px rgba(0,0,0,.8);\n  color-scheme:dark;\n}\n:where(.dark,[data-theme=dark]) .sw-root .sw-btn-primary{color:#12241a;box-shadow:none}\n:where(.dark,[data-theme=dark]) .sw-root .sw-brand-mark{color:#12241a}\n:where(.dark,[data-theme=dark]) .sw-root .sw-feature.is-open .sw-feature-icon{color:#12241a}\n';
var style_default = css;

// src/App.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var STATUS = { open: "\u5F85\u63A8\u8FDB", claimed: "\u8BA8\u8BBA\u4E2D", closed: "\u5DF2\u5F62\u6210\u53D6\u820D", out_of_scope: "\u4E0D\u518D\u76F8\u5173" };
var TYPE = { grilling: "\u53D6\u820D\u8D28\u8BE2", research: "\u4E8B\u5B9E\u67E5\u8BC1", experiment: "\u771F\u5B9E\u6D4B\u8BD5", prototype: "\u539F\u578B\u9A8C\u8BC1", task: "\u524D\u7F6E\u884C\u52A8" };
var RESOURCE_COLUMNS = [["invested", "\u5B9E\u9645\u6295\u5165"], ["results", "\u7ED3\u679C\u4E0E\u6C89\u6DC0"], ["next", "\u4E0B\u4E00\u9636\u6BB5\u6295\u5165"], ["reduce", "\u76F8\u5E94\u51CF\u5C11\u4EC0\u4E48"]];
var EVIDENCE = [["facts", "\u4E8B\u5B9E"], ["selfReport", "\u81EA\u8FF0"], ["inference", "\u63A8\u65AD"], ["unknowns", "\u672A\u77E5"]];
var DEFAULT_DECISIONS = { filter: "all", query: "", selected: null, graph: true };
function Inline({ text }) {
  const pieces = String(text || "").split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return pieces.map((p, i) => p.startsWith("**") ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: p.slice(2, -2) }, i) : p.startsWith("`") ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: p.slice(1, -1) }, i) : /^\[/.test(p) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { title: p.match(/\((.*)\)$/)?.[1], children: [
    p.match(/^\[([^\]]+)\]/)?.[1],
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-ref", children: "\u2197" })
  ] }, i) : p);
}
function Text({ value, empty = "\u5C1A\u672A\u8BB0\u5F55", className = "" }) {
  if (!value?.trim()) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-empty-line", children: empty });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `sw-text ${className}`, children: value.split(/\n\s*\n/).map((part, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: part.split("\n").map((line, j) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: /^\s*[-*]\s/.test(line) ? "sw-bullet" : "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Inline, { text: line.replace(/^\s*[-*]\s/, "") }) }, j)) }, i)) });
}
function warningText(value) {
  return value.replace("Missing dependency:", "\u672A\u627E\u5230\u524D\u7F6E\u51B3\u7B56\uFF1A").replace("Ambiguous dependency:", "\u524D\u7F6E\u51B3\u7B56\u91CD\u540D\uFF0C\u8BF7\u6838\u5BF9\u8DEF\u5F84\uFF1A").replace("Cyclic dependency:", "\u51B3\u7B56\u4F9D\u8D56\u51FA\u73B0\u5FAA\u73AF\uFF1A").replace("Dependency is not closed:", "\u524D\u7F6E\u51B3\u7B56\u5C1A\u672A\u5F62\u6210\u53D6\u820D\uFF1A").replace(/\((open|claimed|out_of_scope)\)/g, (_, s) => `\uFF08${STATUS[s]}\uFF09`);
}
function Badge({ status }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: `sw-badge sw-status-${["open", "claimed", "closed", "out_of_scope"].includes(status) ? status : "custom"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { "aria-hidden": "true" }),
    STATUS[status] || status || "\u672A\u6807\u72B6\u6001"
  ] });
}
function Empty({ title, children, action }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-empty-mark", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "book", size: 22 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children }),
    action
  ] });
}
function Section({ title, children, extra, caption, card = false, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: `sw-section ${card ? "sw-card" : ""} ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-section-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: title }),
        caption && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-caption", children: caption })
      ] }),
      extra
    ] }),
    children
  ] });
}
function SourceDialog({ source, onClose }) {
  const dialog = (0, import_react3.useRef)(null), titleId = (0, import_react3.useId)();
  (0, import_react3.useEffect)(() => {
    dialog.current?.showModal();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("dialog", { ref: dialog, className: "sw-dialog sw-source", "aria-labelledby": titleId, onCancel: onClose, onClick: (e) => {
    if (e.target === e.currentTarget) onClose();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "sw-dialog-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "\u6765\u6E90\u6587\u4EF6" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { id: titleId, children: source.path })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-icon-btn", "aria-label": "\u5173\u95ED\u6765\u6E90", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "close", size: 18 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { children: source.markdown })
  ] });
}
function SpaceForm({ initial, onLoad, onCancel, pickDirectory, busy }) {
  const base = { folder: initial?.workspace || "" };
  const [draft, setDraft] = (0, import_react3.useState)(base);
  const [error, setError] = (0, import_react3.useState)("");
  const [confirming, setConfirming] = (0, import_react3.useState)(false);
  const errorRef = (0, import_react3.useRef)(null), folderRef = (0, import_react3.useRef)(null), continueRef = (0, import_react3.useRef)(null);
  const dirty = draft.folder.trim() !== base.folder.trim();
  (0, import_react3.useEffect)(() => {
    if (error) errorRef.current?.focus({ preventScroll: false });
  }, [error]);
  (0, import_react3.useEffect)(() => {
    if (confirming) continueRef.current?.focus();
  }, [confirming]);
  function field(key, value) {
    setDraft((d) => ({ ...d, [key]: value }));
    setConfirming(false);
  }
  async function choose() {
    try {
      const path = await pickDirectory();
      if (path) field("folder", path);
    } catch (e) {
      setError(e.message);
    }
  }
  function cancel() {
    if (busy) return;
    if (dirty) setConfirming(true);
    else onCancel?.();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { className: "sw-space-form", "aria-label": initial?.workspace ? "\u6218\u7565\u6587\u4EF6\u5939\u8BBE\u7F6E" : void 0, onSubmit: (e) => {
    e.preventDefault();
    setError("");
    setConfirming(false);
    onLoad({ workspace: draft.folder.trim(), project: "." }).catch((e2) => setError(e2.message));
  }, children: [
    !initial?.workspace && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "sw-form-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "\u5B66\u4E60\u5DE5\u4F5C\u53F0" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { children: "\u4ECE\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939\u5F00\u59CB" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "\u9009\u62E9\u76F4\u63A5\u5305\u542B\u6218\u7565\u5730\u56FE\u4E0E\u51B3\u7B56\u5361\u7684\u6587\u4EF6\u5939\u3002\u5DE5\u4F5C\u53F0\u53EA\u8BFB\u53D6\u5176\u4E2D\u7684\u5185\u5BB9\u3002" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("fieldset", { className: "sw-fieldset", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "sw-field", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
        "\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-required", children: "\u5FC5\u586B" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-input-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { ref: folderRef, required: true, "aria-label": "\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939", value: draft.folder, placeholder: "\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939\u7684\u5B8C\u6574\u8DEF\u5F84", onChange: (e) => field("folder", e.target.value) }),
        pickDirectory && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-btn", onClick: choose, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "folder", size: 17 }),
          "\u9009\u62E9\u6587\u4EF6\u5939"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { children: "\u8BFB\u53D6\u8BE5\u6587\u4EF6\u5939\u4E0B\u7684 STRATEGY-MAP.md \u4E0E strategy-decisions/\u3002\u82E5\u8BE5\u6587\u4EF6\u5939\u5185\u7684 docs/agents/learning.md \u6620\u5C04\u4E86\u5176\u4ED6\u4F4D\u7F6E\uFF0C\u4EE5\u914D\u7F6E\u4E3A\u51C6\u3002" })
    ] }) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { ref: errorRef, tabIndex: -1, role: "alert", className: "sw-error", children: error }),
    onCancel && confirming && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-confirm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { role: "status", children: "\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF0C\u786E\u5B9A\u653E\u5F03\uFF1F" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { ref: continueRef, type: "button", className: "sw-btn sw-btn-ghost", onClick: () => {
          setConfirming(false);
          requestAnimationFrame(() => folderRef.current?.focus());
        }, children: "\u7EE7\u7EED\u7F16\u8F91" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-btn", onClick: () => {
          setConfirming(false);
          onCancel();
        }, children: "\u653E\u5F03\u4FEE\u6539" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-form-actions", children: [
      onCancel && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-btn sw-btn-ghost", onClick: cancel, disabled: busy, children: "\u53D6\u6D88" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: "sw-btn sw-btn-primary", disabled: busy, type: "submit", children: [
        busy ? "\u6B63\u5728\u8BFB\u53D6\u2026" : initial?.workspace ? "\u4FDD\u5B58\u5E76\u91CD\u65B0\u8BFB\u53D6" : "\u6253\u5F00\u5B66\u4E60\u5DE5\u4F5C\u53F0",
        !busy && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 16 })
      ] })
    ] })
  ] });
}
function Overview({ data, onSource, onView }) {
  const map = data.map;
  if (!map) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Empty, { title: "\u8FD8\u6CA1\u6709\u6218\u7565\u5730\u56FE", action: data.cards.length ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-btn sw-btn-ghost", onClick: () => onView("decisions"), children: [
    "\u67E5\u770B\u51B3\u7B56\u5730\u56FE",
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 15 })
  ] }) : void 0, children: "\u4ECE\u5DF2\u6709\u5B9E\u8DF5\u548C\u6295\u5165\u804A\u8D77\uFF0C\u9010\u6B65\u5F62\u6210\u503C\u5F97\u6301\u7EED\u6295\u5165\u7684\u65B9\u5411\u3002\u5DF2\u6709\u51B3\u7B56\u5361\u4ECD\u53EF\u5728\u201C\u51B3\u7B56\u5730\u56FE\u201D\u67E5\u770B\u3002" });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-overview", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-direction", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "\u5F53\u524D\u957F\u671F\u65B9\u5411" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.direction, empty: "\u65B9\u5411\u5C1A\u672A\u660E\u786E\uFF0C\u53EF\u4ECE\u4E00\u4E2A\u5019\u9009\u65B9\u5411\u5F00\u59CB\u8BA8\u8BBA\u3002", className: "sw-direction-text" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-link", onClick: () => onSource(map), children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "source", size: 15 }),
        "\u67E5\u770B\u6218\u7565\u539F\u6587"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { title: "\u6295\u5165\u4E0E\u53D6\u820D", caption: "\u4FDD\u7559\u539F\u59CB\u8BB0\u5F55 \xB7 \u8BA1\u5212\u6295\u5165\u4E0E\u5B9E\u9645\u6295\u5165\u5206\u522B\u5448\u73B0", children: map.resources.length ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sw-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "sw-resources", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { scope: "col", children: "\u65B9\u5411" }),
        RESOURCE_COLUMNS.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { scope: "col", children: label }, key))
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: map.resources.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { scope: "row", "data-label": "\u65B9\u5411", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Inline, { text: r.direction }) }),
        RESOURCE_COLUMNS.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { "data-label": label, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Inline, { text: r[key] || "\u672A\u8BB0\u5F55" }) }, key))
      ] }, i)) })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.sections["\u5F53\u524D\u9636\u6BB5\u4E0E\u8D44\u6E90\u914D\u7F6E"], empty: "\u5C1A\u672A\u8BB0\u5F55\u6295\u5165\u5BF9\u7167\u3002\u6CA1\u6709\u53EF\u6BD4\u6570\u5B57\u65F6\uFF0C\u53EF\u4EE5\u4FDD\u7559\u5B9A\u6027\u5224\u65AD\u3002" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-card-grid", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { card: true, title: "\u8981\u5B88\u4F4F\u7684\u5E95\u5EA7", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.principles }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { card: true, title: "\u957F\u671F\u79EF\u7D2F\u7684\u5047\u8BBE", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.compounding }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { card: true, title: "\u5DF2\u7ECF\u4F5C\u51FA\u7684\u53D6\u820D", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.choices }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { card: true, title: "\u660E\u786E\u4E0D\u505A", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.excluded }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { title: "\u4ECD\u9700\u60F3\u6E05\u695A", className: "sw-callout", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: map.unknowns }) })
  ] });
}
function Graph({ cards, onSelect, selected }) {
  const marker = (0, import_react3.useId)().replace(/:/g, "");
  const visible = cards.slice(0, 40);
  const ids = new Set(visible.map((c) => c.id));
  const levels = /* @__PURE__ */ new Map();
  const level = (c, seen = /* @__PURE__ */ new Set()) => {
    if (levels.has(c.id)) return levels.get(c.id);
    if (seen.has(c.id)) return 0;
    const s = new Set(seen).add(c.id);
    const parents = c.dependencies.filter((d) => !d.missing && ids.has(d.id)).map((d) => visible.find((n) => n.id === d.id));
    const computed = Math.min(5, parents.length ? 1 + Math.max(...parents.map((p) => level(p, s))) : 0);
    levels.set(c.id, computed);
    return computed;
  };
  visible.forEach((c) => levels.set(c.id, level(c)));
  const counts = {};
  const positions = new Map(visible.map((c) => {
    const l = levels.get(c.id);
    const y = counts[l] || 0;
    counts[l] = y + 1;
    return [c.id, { x: 24 + l * 260, y: 24 + y * 104 }];
  }));
  const width = Math.max(540, ...[...positions.values()].map((p) => p.x + 250));
  const height = Math.max(180, ...[...positions.values()].map((p) => p.y + 100));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-graph", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-graph-note", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u524D\u7F6E\u51B3\u7B56 \u2192 \u540E\u7EED\u51B3\u7B56" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("small", { children: [
        "\u5B9E\u7EBF\u53EA\u8868\u793A\u6587\u4EF6\u4E2D\u660E\u786E\u8BB0\u5F55\u7684\u4F9D\u8D56",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-graph-hint", children: " \xB7 \u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u66F4\u591A" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sw-graph-scroll", tabIndex: 0, "aria-label": "\u51B3\u7B56\u4F9D\u8D56\u56FE\uFF0C\u53EF\u6A2A\u5411\u6EDA\u52A8\uFF0C\u4E0B\u65B9\u5217\u8868\u5305\u542B\u76F8\u540C\u4FE1\u606F", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { width, height, position: "relative" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width, height, "aria-hidden": "true", className: "sw-edges", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("marker", { id: marker, markerWidth: "7", markerHeight: "7", refX: "6", refY: "3.5", orient: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M0 0 L7 3.5 L0 7", fill: "currentColor" }) }) }),
        visible.flatMap((c) => c.dependencies.filter((d) => positions.has(d.id)).map((d) => {
          const from = positions.get(d.id), to = positions.get(c.id);
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: `M${from.x + 218},${from.y + 38} C${from.x + 240},${from.y + 38} ${to.x - 22},${to.y + 38} ${to.x},${to.y + 38}`, fill: "none", stroke: "currentColor", strokeWidth: "1.4", markerEnd: `url(#${marker})` }, `${d.id}-${c.id}`);
        }))
      ] }),
      visible.map((c) => {
        const pos = positions.get(c.id);
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", style: { left: pos.x, top: pos.y }, className: `sw-node ${selected === c.id ? "is-selected" : ""}`, onClick: (e) => onSelect(c.id, e.currentTarget), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "sw-node-type", children: [
            TYPE[c.type] || c.type || "\u51B3\u7B56",
            " \xB7 ",
            c.frontier ? "\u53EF\u63A8\u8FDB" : c.blocked ? "\u6709\u524D\u7F6E\u4F9D\u8D56" : STATUS[c.status] || c.status
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: c.title })
        ] }, c.id);
      })
    ] }) }),
    cards.length > 40 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-caption", children: "\u56FE\u4E2D\u663E\u793A\u524D 40 \u5F20\u5361\uFF1B\u5B8C\u6574\u4FE1\u606F\u89C1\u4E0B\u65B9\u5217\u8868\u3002" })
  ] });
}
function Inspector({ card, onSource, onDiscuss, onClose }) {
  const backRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    backRef.current?.focus({ preventScroll: true });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("aside", { className: "sw-inspector", "aria-label": "\u51B3\u7B56\u8BE6\u60C5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-inspector-top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { ref: backRef, type: "button", className: "sw-back", onClick: onClose, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowLeft", size: 15 }),
        "\u51B3\u7B56\u5217\u8868"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Badge, { status: card.status })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: TYPE[card.type] || card.type || "\u6218\u7565\u51B3\u7B56" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: card.title }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-detail-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-btn sw-btn-primary", onClick: () => onDiscuss(card.id), children: [
        "\u8BA8\u8BBA\u8FD9\u9879\u51B3\u7B56",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 15 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-icon-btn", onClick: () => onSource(card), "aria-label": "\u67E5\u770B\u51B3\u7B56\u539F\u6587", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "source", size: 18 }) })
    ] }),
    card.warnings.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-warning", children: warningText(w) }, i)),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u95EE\u9898\u4E0E\u5F53\u524D\u5224\u65AD" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.judgment })
    ] }),
    !!card.dependencies.length && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u524D\u7F6E\u51B3\u7B56" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "sw-dependencies", children: card.dependencies.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { "aria-hidden": "true", children: d.resolved && d.status === "closed" ? "\u2713" : "\u25CB" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: d.title || d.id }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { children: d.missing ? "\u65E0\u6CD5\u5B9A\u4F4D\uFF0C\u9700\u6838\u5BF9\u539F\u6587" : STATUS[d.status] || d.status })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u8BC1\u636E\u4E0E\u6295\u5165\u53CD\u9988" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sw-evidence-grid", children: EVIDENCE.map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-evidence-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.evidence[key] })
      ] }, key)) }),
      card.sections["\u8BC1\u636E\u4E0E\u6295\u5165\u53CD\u9988"] && !Object.values(card.evidence).some(Boolean) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.sections["\u8BC1\u636E\u4E0E\u6295\u5165\u53CD\u9988"] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u4E0B\u4E00\u6B65\u9A8C\u8BC1" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.next })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u957F\u671F\u6295\u5165\u68C0\u67E5" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.guardrails })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u5173\u95ED\u6761\u4EF6" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.closure })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-inspector-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u5B9E\u9645\u7ED3\u679C\u4E0E\u7ED3\u8BBA" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: card.result })
    ] })
  ] });
}
function Decisions({ data, state, onChange, onSource, onDiscuss, scrollRef }) {
  const { filter, query, selected, graph } = state;
  const cards = data.cards.filter((c) => (filter === "all" || filter === "frontier" && c.frontier || filter === "blocked" && c.blocked || c.status === filter) && `${c.title}
${c.judgment}
${c.evidence.unknowns}`.toLowerCase().includes(query.toLowerCase()));
  const card = data.cards.find((c) => c.id === selected);
  const searchRef = (0, import_react3.useRef)(null), rowRefs = (0, import_react3.useRef)(/* @__PURE__ */ new Map()), prevSelected = (0, import_react3.useRef)(null), restoreScroll = (0, import_react3.useRef)(null), trigger = (0, import_react3.useRef)(null);
  const filtered = query || filter !== "all";
  const isNarrow = () => (scrollRef?.current?.closest(".sw-root")?.clientWidth || Infinity) <= 1180;
  function open(id, el) {
    trigger.current = el || null;
    restoreScroll.current = isNarrow() ? scrollRef?.current?.scrollTop || 0 : null;
    onChange({ selected: id });
    if (isNarrow()) requestAnimationFrame(() => scrollRef?.current?.scrollTo({ top: 0 }));
  }
  function close() {
    onChange({ selected: null });
  }
  function resetFilters() {
    onChange({ query: "", filter: "all" });
    requestAnimationFrame(() => searchRef.current?.focus());
  }
  (0, import_react3.useEffect)(() => {
    if (selected) {
      prevSelected.current = selected;
      return;
    }
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
  (0, import_react3.useEffect)(() => {
    function onKey(e) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const scope = scrollRef?.current?.closest(".sw-root");
      if (!scope || !(e.target instanceof Node) || !scope.contains(e.target)) return;
      if (document.querySelector("dialog[open]")) return;
      if (card && isNarrow()) return;
      if (e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (selected && !cards.some((c) => c.id === selected)) onChange({ selected: null });
  }, [filter, query, data.cards]);
  (0, import_react3.useEffect)(() => {
    if (!card) return;
    function onKey(e) {
      if (e.key !== "Escape" || e.target.closest("dialog, input, textarea, select")) return;
      const scope = scrollRef?.current?.closest(".sw-root");
      if (!scope || !(e.target instanceof Node) || !scope.contains(e.target)) return;
      e.preventDefault();
      close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `sw-decision-layout ${card ? "has-inspector" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-decision-main", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "sw-search", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "search", size: 16 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-sr", children: "\u641C\u7D22\u6218\u7565\u95EE\u9898" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { ref: searchRef, value: query, onChange: (e) => onChange({ query: e.target.value }), onKeyDown: (e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              if (query) onChange({ query: "" });
              else e.currentTarget.blur();
            }
          }, "aria-label": "\u641C\u7D22\u6218\u7565\u95EE\u9898", placeholder: "\u641C\u7D22\u95EE\u9898\u3001\u5224\u65AD\u6216\u5047\u8BBE", title: "\u6309 / \u805A\u7126\u641C\u7D22" }),
          query ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-search-clear", "aria-label": "\u6E05\u9664\u641C\u7D22", onClick: () => {
            onChange({ query: "" });
            searchRef.current?.focus();
          }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "close", size: 13 }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-kbd", "aria-hidden": "true", children: "/" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "sw-select", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-sr", children: "\u7B5B\u9009\u51B3\u7B56\u72B6\u6001" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("select", { value: filter, onChange: (e) => onChange({ filter: e.target.value }), children: [["all", "\u5168\u90E8\u51B3\u7B56"], ["frontier", "\u73B0\u5728\u53EF\u63A8\u8FDB"], ["blocked", "\u6709\u524D\u7F6E\u4F9D\u8D56"], ...Object.entries(STATUS)].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: k, children: v }, k)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-btn sw-btn-ghost", "aria-pressed": graph, onClick: () => onChange({ graph: !graph }), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "decisions", size: 16 }),
          graph ? "\u6536\u8D77\u5173\u7CFB\u56FE" : "\u5C55\u5F00\u5173\u7CFB\u56FE"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-list-meta", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { role: "status", "aria-live": "polite", children: [
          "\u663E\u793A ",
          cards.length,
          " / ",
          data.cards.length,
          " \u5F20\u51B3\u7B56\u5361"
        ] }),
        filtered && cards.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-link", onClick: resetFilters, children: "\u6E05\u9664\u7B5B\u9009" })
      ] }),
      graph && cards.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Graph, { cards, onSelect: (id, el) => open(id, el), selected }),
      !cards.length ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Empty, { title: data.cards.length ? "\u6CA1\u6709\u5339\u914D\u7684\u51B3\u7B56" : "\u8FD8\u6CA1\u6709\u51B3\u7B56\u5361", action: data.cards.length ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-btn sw-btn-ghost", onClick: resetFilters, children: "\u6E05\u9664\u7B5B\u9009" }) : void 0, children: "\u9700\u8981\u8DE8\u4F1A\u8BDD\u8DDF\u8FDB\u7684\u5173\u952E\u95EE\u9898\uFF0C\u4F1A\u5728\u6218\u7565\u8BA8\u8BBA\u4E2D\u5F62\u6210\u51B3\u7B56\u5361\u3002" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sw-decision-list", "aria-label": "\u51B3\u7B56\u5217\u8868", children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", ref: (el) => {
        if (el) rowRefs.current.set(c.id, el);
        else rowRefs.current.delete(c.id);
      }, onClick: (e) => open(c.id, e.currentTarget), "aria-current": selected === c.id ? "true" : void 0, className: `sw-decision-row ${selected === c.id ? "is-selected" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-kind", children: TYPE[c.type] || c.type || "\u672A\u5206\u7C7B" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "sw-row-main", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("strong", { children: c.title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { children: c.dependencies.length ? `\u524D\u7F6E\uFF1A${c.dependencies.map((d) => d.title || d.id).join("\u3001")}` : c.evidence.unknowns || c.judgment || "\u6253\u5F00\u67E5\u770B\u5224\u65AD\u4E0E\u4F9D\u636E" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "sw-row-state", children: [
          c.frontier && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-frontier", children: "\u53EF\u63A8\u8FDB" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Badge, { status: c.status })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 16 })
      ] }, c.id)) })
    ] }),
    card && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Inspector, { card, onSource, onDiscuss, onClose: close }, card.id)
  ] });
}
function Experiments({ data, onSource, onDiscuss }) {
  const cards = data.cards.filter((c) => ["experiment", "prototype"].includes(c.type));
  if (!cards.length) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Empty, { title: "\u8FD8\u6CA1\u6709\u771F\u5B9E\u6D4B\u8BD5", children: "\u5F53\u5173\u952E\u5047\u8BBE\u9700\u8981\u884C\u52A8\u9A8C\u8BC1\u65F6\uFF0C\u5728\u6218\u7565\u8BA8\u8BBA\u4E2D\u8BBE\u8BA1\u4E00\u6B21\u6295\u5165\u53EF\u63A7\u7684\u6D4B\u8BD5\u3002" });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-experiments", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-intro", children: "\u628A\u9884\u671F\u548C\u5B9E\u9645\u53CD\u9988\u653E\u5728\u4E00\u8D77\u3002\u6D4B\u8BD5\u5B8C\u6210\u4E0E\u957F\u671F\u5047\u8BBE\u5F97\u5230\u8BC1\u660E\uFF0C\u5206\u522B\u5224\u65AD\u3002" }),
    cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "sw-experiment", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: TYPE[c.type] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { children: c.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Badge, { status: c.status })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-hypothesis", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u5173\u952E\u672A\u77E5" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: c.evidence.unknowns, empty: "\u5C1A\u672A\u5355\u72EC\u8BB0\u5F55\uFF0C\u53EF\u5728\u539F\u6587\u4E2D\u6838\u5BF9\u3002" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-comparison", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-phase", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-phase-index", children: "01" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "\u884C\u52A8\u524D" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u9A8C\u8BC1\u5B89\u6392\u4E0E\u9884\u671F" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: c.next })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-phase", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-phase-index", children: "02" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "\u7ED3\u679C\u8FD4\u56DE\u540E" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: "\u5B9E\u9645\u53CD\u9988\u4E0E\u6295\u5165\u51B3\u5B9A" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: c.result, empty: "\u5C1A\u672A\u8BB0\u5F55\u5B9E\u9645\u7ED3\u679C\u3002\u7B49\u5F85\u771F\u5B9E\u53CD\u9988\u540E\u518D\u5224\u65AD\u3002" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-link", onClick: () => onSource(c), children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "source", size: 16 }),
          "\u67E5\u770B\u539F\u6587"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-btn sw-btn-ghost", onClick: () => onDiscuss(c.id, "feedback"), children: [
          "\u5E26\u56DE\u6D4B\u8BD5\u53CD\u9988",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 16 })
        ] })
      ] })
    ] }, c.id))
  ] });
}
function History({ data, onSource }) {
  if (!data.map) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Empty, { title: "\u5C1A\u672A\u8BB0\u5F55\u6218\u7565\u5386\u53F2", children: "\u5F62\u6210\u65B9\u5411\u4E0E\u53D6\u820D\u540E\uFF0C\u4FEE\u8BA2\u8BB0\u5F55\u4F1A\u4FDD\u7559\u5224\u65AD\u53D8\u5316\u7684\u539F\u56E0\u3002" });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-history-view", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { title: "\u6218\u7565\u4FEE\u8BA2\u8BB0\u5F55", extra: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-link", onClick: () => onSource(data.map), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "source", size: 16 }),
      "\u67E5\u770B\u539F\u6587"
    ] }), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: data.map.revisions }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section, { title: "\u5DF2\u7ECF\u7ED3\u675F\u7684\u5173\u952E\u95EE\u9898", children: data.cards.filter((c) => ["closed", "out_of_scope"].includes(c.status)).map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-history", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Badge, { status: c.status }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: c.title }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { value: c.result, empty: "\u7ED3\u8BBA\u5C1A\u672A\u5355\u72EC\u8BB0\u5F55\uFF0C\u8BF7\u6838\u5BF9\u539F\u6587\u3002" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "button", className: "sw-link", onClick: () => onSource(c), children: [
          "\u67E5\u770B\u4F9D\u636E",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 14 })
        ] })
      ] })
    ] }, c.id)) })
  ] });
}
function StrategyApp({ adapter }) {
  const [binding, setBinding] = (0, import_react3.useState)(() => folderBinding(adapter.getBinding?.() || null));
  const [feature, setFeature] = (0, import_react3.useState)(null);
  const [data, setData] = (0, import_react3.useState)(null), [editing, setEditing] = (0, import_react3.useState)(!binding), [loading, setLoading] = (0, import_react3.useState)(false), [error, setError] = (0, import_react3.useState)(""), [tab, setTab] = (0, import_react3.useState)("overview"), [source, setSource] = (0, import_react3.useState)(null), [discussion, setDiscussion] = (0, import_react3.useState)(null), [message, setMessage] = (0, import_react3.useState)(""), [sending, setSending] = (0, import_react3.useState)(false), [notice, setNotice] = (0, import_react3.useState)(""), [decisionView, setDecisionView] = (0, import_react3.useState)(DEFAULT_DECISIONS);
  const generation = (0, import_react3.useRef)(0), launchLock = (0, import_react3.useRef)(false), discussionRef = (0, import_react3.useRef)(null), discussionTitleId = (0, import_react3.useId)(), stageContentRef = (0, import_react3.useRef)(null), stageHeadingRef = (0, import_react3.useRef)(null);
  function enterFeature(id) {
    setFeature(id);
  }
  function updateDecision(patch) {
    setDecisionView((current) => ({ ...current, ...patch }));
  }
  function leaveFeature() {
    setFeature(null);
  }
  async function load(input = binding, save = false) {
    const next = folderBinding(input);
    if (!next) return;
    const id = ++generation.current;
    setLoading(true);
    setError("");
    try {
      const result = await adapter.snapshot(next);
      if (id !== generation.current) return;
      if (result.project !== data?.project) {
        setDecisionView(DEFAULT_DECISIONS);
        setTab("overview");
      }
      setData(result);
      setSource(null);
      setBinding(next);
      if (save) {
        adapter.saveBinding?.(next);
        setNotice("\u5B66\u4E60\u6218\u7565\u6587\u4EF6\u5939\u5DF2\u4FDD\u5B58\uFF0C\u8D44\u6599\u5DF2\u91CD\u65B0\u8BFB\u53D6\u3002");
      }
      setEditing(false);
    } catch (e) {
      if (id === generation.current) setError(e.message);
      throw e;
    } finally {
      if (id === generation.current) setLoading(false);
    }
  }
  (0, import_react3.useEffect)(() => {
    if (binding) load(binding).catch(() => {
    });
    return () => {
      generation.current++;
    };
  }, []);
  (0, import_react3.useEffect)(() => {
    if (discussion) discussionRef.current?.showModal();
  }, [discussion]);
  function openDiscussion(cardId, intent = "discuss") {
    setMessage("");
    setNotice("");
    setDiscussion({ cardId, intent });
  }
  async function send(e) {
    e.preventDefault();
    if (launchLock.current) return;
    launchLock.current = true;
    setSending(true);
    setNotice("");
    try {
      await adapter.discuss(binding, { ...discussion, message });
      setDiscussion(null);
      setNotice("\u6218\u7565\u8BA8\u8BBA\u5DF2\u63D0\u4EA4\uFF0C\u8BF7\u5728\u4F1A\u8BDD\u4E2D\u7EE7\u7EED\u3002\u8BA8\u8BBA\u540E\u5237\u65B0\uFF0C\u67E5\u770B\u66F4\u65B0\u7684\u5730\u56FE\u4E0E\u53CD\u9988\u3002");
    } catch (e2) {
      setNotice(e2.message);
    } finally {
      launchLock.current = false;
      setSending(false);
    }
  }
  if (editing && !binding) return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "sw-root sw-root-onboarding", "data-surface": adapter.surface || "panel", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("style", { children: style_default }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sw-onboarding", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SpaceForm, { initial: null, pickDirectory: adapter.pickDirectory, busy: loading, onCancel: null, onLoad: (next) => load(next, true) }) })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "sw-root", "data-surface": adapter.surface || "panel", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("style", { children: style_default }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(WorkbenchFrame, { adapter, data, binding, editing, loading, sending, view: tab, onView: setTab, feature, onFeature: enterFeature, onHome: leaveFeature, onSettings: () => setEditing(true), onRefresh: () => load().catch(() => {
    }), onDiscuss: () => openDiscussion(), contentRef: stageContentRef, headingRef: stageHeadingRef, children: editing ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SpaceForm, { initial: binding, pickDirectory: adapter.pickDirectory, busy: loading, onCancel: binding ? () => setEditing(false) : null, onLoad: (next) => load(next, true) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      error && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { role: "alert", className: "sw-error", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: error }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-error-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-link", onClick: () => load().catch(() => {
          }), children: "\u91CD\u8BD5" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-link", onClick: () => setEditing(true), children: "\u68C0\u67E5\u6218\u7565\u6587\u4EF6\u5939" })
        ] })
      ] }),
      notice && !discussion && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-notice", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { role: "status", children: notice }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-notice-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-link", disabled: loading, onClick: () => {
            load().then(() => setNotice("\u8D44\u6599\u5DF2\u5237\u65B0\u3002")).catch(() => {
            });
          }, children: "\u5237\u65B0\u8D44\u6599" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-icon-btn", "aria-label": "\u5173\u95ED\u63D0\u793A", onClick: () => {
            setNotice("");
            stageHeadingRef.current?.focus({ preventScroll: true });
          }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "close", size: 14 }) })
        ] })
      ] }),
      feature ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
        data && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-body", children: [
          data.warnings.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-warning", children: w }, i)),
          tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Overview, { data, onSource: setSource, onView: setTab }) : tab === "decisions" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Decisions, { data, state: decisionView, onChange: updateDecision, scrollRef: stageContentRef, onSource: setSource, onDiscuss: openDiscussion }) : tab === "experiments" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Experiments, { data, onSource: setSource, onDiscuss: openDiscussion }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(History, { data, onSource: setSource })
        ] }, `${data.project}-${tab}`),
        !data && !loading && !error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Empty, { title: "\u6253\u5F00\u4F60\u7684\u6218\u7565\u8D44\u6599", children: "\u9009\u62E9\u5B66\u4E60\u7A7A\u95F4\uFF0C\u6216\u5237\u65B0\u540E\u91CD\u8BD5\u3002" }),
        loading && !data && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sw-loading", role: "status", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-spinner", "aria-hidden": "true" }),
          "\u6B63\u5728\u8BFB\u53D6\u6218\u7565\u5730\u56FE\u4E0E\u51B3\u7B56\u5361\u2026"
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FeatureHome, { data, loading, onEnter: enterFeature })
    ] }) }),
    source && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SourceDialog, { source, onClose: () => setSource(null) }),
    discussion && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("dialog", { ref: discussionRef, className: "sw-dialog sw-discuss", "aria-labelledby": discussionTitleId, onCancel: () => {
      if (!sending) setDiscussion(null);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { onSubmit: send, onKeyDown: (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        e.currentTarget.requestSubmit();
      }
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("header", { className: "sw-dialog-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-eyebrow", children: "STRATEGYFINDER" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { id: discussionTitleId, children: discussion.intent === "feedback" ? "\u5E26\u56DE\u771F\u5B9E\u6D4B\u8BD5\u53CD\u9988" : discussion.cardId ? "\u7EE7\u7EED\u8FD9\u9879\u6218\u7565\u5224\u65AD" : "\u5F00\u59CB\u6218\u7565\u8BA8\u8BBA" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: "sw-icon-btn", disabled: sending, "aria-label": "\u53D6\u6D88\u8BA8\u8BBA", onClick: () => setDiscussion(null), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "close", size: 18 }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "sw-dialog-note", children: [
        "\u5728\u300C",
        data?.name,
        "\u300D\u7684\u539F\u751F\u4F1A\u8BDD\u4E2D\u7EE7\u7EED\uFF0C\u7531\u4F60\u4F5C\u51FA\u53D6\u820D\u548C\u6295\u5165\u51B3\u5B9A\u3002"
      ] }),
      discussion.cardId && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("blockquote", { children: data?.cards.find((c) => c.id === discussion.cardId)?.title }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "sw-field", children: [
        "\u4F60\u60F3\u5148\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { autoFocus: true, value: message, onChange: (e) => setMessage(e.target.value), placeholder: discussion.intent === "feedback" ? "\u5B9E\u9645\u505A\u4E86\u4EC0\u4E48\uFF1F\u6295\u5165\u591A\u5C11\uFF1F\u89C2\u5BDF\u5230\u4E86\u4EC0\u4E48\uFF1F" : "\u53EF\u4EE5\u5199\u4E0B\u5F53\u524D\u5224\u65AD\u3001\u6295\u5165\u4E0E\u56F0\u60D1\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5F00\u59CB\u3002", maxLength: 12e3 })
      ] }),
      notice && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "sw-error", role: "alert", children: notice }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", { className: "sw-dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sw-hint", children: "\u70B9\u51FB\u540E\u663E\u5F0F\u8FD0\u884C /strategyfinder \xB7 \u2318/Ctrl + Enter \u63D0\u4EA4" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { type: "submit", className: "sw-btn sw-btn-primary", disabled: sending, children: [
          sending ? "\u6B63\u5728\u6253\u5F00\u4F1A\u8BDD\u2026" : "\u8FDB\u5165\u6218\u7565\u8BA8\u8BBA",
          !sending && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "arrowRight", size: 16 })
        ] })
      ] })
    ] }) })
  ] });
}

// src/client.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var inject = ["slots", "layout", "uiWorkspace", "workspaces", "remote", "remote.session"];
var KEY = "dsh-learning-workbench.binding.v1";
var LEGACY_KEY = "dsh-strategy-workbench.binding.v1";
function unwrap(result) {
  if (result?.ok === false) throw new Error(result.error?.message || result.error?.code || "Harness \u64CD\u4F5C\u5931\u8D25\u3002");
  if (result?.ok === true) return result.value;
  if (result && typeof result === "object" && result.error) throw new Error(result.error.message || result.error.code || "Harness \u64CD\u4F5C\u5931\u8D25\u3002");
  if (result === void 0 || result === null) throw new Error("Harness \u6CA1\u6709\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8BF7\u68C0\u67E5\u63D2\u4EF6\u517C\u5BB9\u7248\u672C\u3002");
  return result;
}
async function request(action, binding, discussion) {
  const carrier = globalThis.__DSH_TRANSPORT__?.fetch;
  const response = await (carrier ? carrier("api/strategy-workbench/state", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ action, binding, discussion })
  }) : fetch("api/strategy-workbench/state", {
    method: "POST",
    credentials: "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ action, binding, discussion })
  }));
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(`\u6218\u7565\u63A5\u53E3\u4E0D\u53EF\u7528\uFF08${response.status}\uFF09\uFF0C\u8BF7\u786E\u8BA4 Host \u63D2\u4EF6\u5DF2\u52A0\u8F7D\u3002`);
  }
  if (!response.ok) throw new Error(result.error || `\u8BFB\u53D6\u5931\u8D25\uFF08${response.status}\uFF09`);
  return result;
}
function createAdapter(ctx, { workbenches } = {}) {
  let pending = null;
  let inFlight = false;
  const ownedSessions = /* @__PURE__ */ new Map();
  return {
    surface: workbenches ? "desktop" : "panel",
    getBinding() {
      try {
        return JSON.parse(localStorage.getItem(KEY) || localStorage.getItem(LEGACY_KEY) || "null");
      } catch {
        return null;
      }
    },
    saveBinding(value) {
      try {
        localStorage.setItem(KEY, JSON.stringify(value));
      } catch {
      }
    },
    pickDirectory: () => ctx.uiWorkspace.pickDirectory(),
    snapshot: (binding) => request("snapshot", binding),
    async discuss(binding, discussion) {
      if (inFlight) throw new Error("\u53E6\u4E00\u9879\u6218\u7565\u8BA8\u8BBA\u6B63\u5728\u6253\u5F00\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002");
      inFlight = true;
      try {
        const selectionKey = JSON.stringify([binding, discussion]);
        if (pending && pending.key !== selectionKey) pending = null;
        const prepared = await request("discussion", binding, discussion);
        if (pending && pending.cwd !== prepared.cwd) pending = null;
        if (!pending) {
          let sessionId;
          if (workbenches) {
            if (!workbenches.isActive()) throw new Error("\u5B66\u4E60\u5DE5\u4F5C\u53F0\u5DF2\u5207\u6362\uFF0C\u8BF7\u8FD4\u56DE\u540E\u518D\u8BA8\u8BBA\u3002");
            const saved = ownedSessions.get(prepared.cwd);
            sessionId = await workbenches.ensureSession({ folder: prepared.cwd, ...saved && workbenches.ownsSession(saved) ? { sessionId: saved } : {} });
            ownedSessions.set(prepared.cwd, sessionId);
          } else {
            const workspace = await ctx.workspaces.create({ path: prepared.cwd });
            const workspaceId = workspace?.workspaceId ?? workspace?.workspace?.workspaceId;
            if (!workspaceId) throw new Error("Harness \u6CA1\u6709\u8FD4\u56DE\u5DE5\u4F5C\u533A\u6807\u8BC6\uFF0C\u8BF7\u68C0\u67E5\u5DE5\u4F5C\u533A\u63A5\u53E3\u7248\u672C\u3002");
            const created = unwrap(await ctx.remote.session.create({ workspaceId }));
            sessionId = created?.sessionId ?? created?.value?.sessionId ?? (typeof created === "string" ? created : void 0);
            if (!sessionId) throw new Error("Harness \u6CA1\u6709\u8FD4\u56DE\u4F1A\u8BDD\u6807\u8BC6\uFF0C\u8BF7\u68C0\u67E5\u4F1A\u8BDD\u63A5\u53E3\u7248\u672C\u3002");
          }
          pending = { key: selectionKey, cwd: prepared.cwd, prompt: prepared.prompt, sessionId, requestId: crypto.randomUUID() };
        }
        const attempt = pending;
        if (workbenches && (!workbenches.isActive() || !workbenches.ownsSession(attempt.sessionId) || workbenches.currentSession() !== attempt.sessionId)) throw new Error("\u5DE5\u4F5C\u53F0\u6216\u5F53\u524D\u4F1A\u8BDD\u5DF2\u5207\u6362\uFF0C\u8BF7\u8FD4\u56DE\u672C\u9879\u76EE\u540E\u91CD\u8BD5\u3002");
        unwrap(await ctx.remote.session.prompt({ requestId: attempt.requestId, sessionId: attempt.sessionId, mode: "queue", content: [{ type: "text", text: attempt.prompt }], clientTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
        if (!workbenches) {
          ctx.uiWorkspace.openSession(attempt.sessionId);
          ctx.layout.selectPanel(null);
        }
        if (pending === attempt) pending = null;
      } finally {
        inFlight = false;
      }
    }
  };
}
function apply(ctx) {
  let desktopRegistered = false;
  ctx.inject(["desktopWorkbenches"], (scoped) => {
    const workbenches = scoped.desktopWorkbenches;
    const nativeAdapter = createAdapter(scoped, { workbenches });
    const DesktopPanel = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StrategyApp, { adapter: nativeAdapter });
    scoped.effect(() => workbenches.register({
      title: "\u5B66\u4E60\u5DE5\u4F5C\u53F0",
      panelTitle: "\u5B66\u4E60\u6218\u7565",
      icon: "\u25C8",
      repository: "https://github.com/MingStudentSE/skill-for-real-learner",
      description: "\u5728\u672C\u5730\u5B66\u4E60\u7A7A\u95F4\u4E2D\u8BA8\u8BBA\u65B9\u5411\u3001\u67E5\u770B\u51B3\u7B56\u548C\u9A8C\u8BC1\u53CD\u9988\u3002",
      author: "Skills for Real Learners",
      embedded: true,
      initialization: "empty",
      headerLayout: "compact",
      layout: { businessSide: "left", businessWidth: 0.7 }
    }, DesktopPanel));
    desktopRegistered = true;
  });
  if (desktopRegistered) return;
  let hasDesktop = false;
  try {
    hasDesktop = Boolean(ctx.get?.("desktopWorkbenches"));
  } catch {
    hasDesktop = false;
  }
  if (hasDesktop) return;
  const adapter = createAdapter(ctx);
  const id = "learning-workbench";
  const Page = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StrategyApp, { adapter });
  ctx.slots.inject("main", () => ctx.slots.register({ name: "main", key: id }, Page));
  ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({ name: "sidebar.panellist", id, label: "\u5B66\u4E60\u5DE5\u4F5C\u53F0", order: 25 }, () => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "m16 8-2.5 5.5L8 16l2.5-5.5Z" })
  ] })));
}

return module.exports;}});
