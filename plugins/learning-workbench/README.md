# 学习工作台 / Learning Workbench

`dsh-learning-workbench` 是本仓库的 DeepSeek Harness 学习工作台插件。每个 skill 对应一个功能，逐个实现、逐个验收；学习战略（`strategyfinder`）是当前第一个已实现的功能。后续能力继续加入同一个插件，不按 skill 拆成多个插件。使用说明见[学习工作台](../../docs/strategy-plugin.md)。

## 使用

构建后，在 Harness 的 Plugins / Add plugin 中添加本目录的绝对路径。安装完成后刷新页面，从左栏“学习工作台”进入。先选择一个学习战略文件夹，工作台显示已实现的功能列表；点开学习战略后才展开它的视图与内容，可随时返回功能列表。

本轮没有替用户选择实际学习目录，也没有通过未认证通道修改当前运行的 Harness。当前 GUI 的安装与真实模型会话仍需在登录态验证。插件接口按本机 0.2.1-rc.3 核对；不要把离线预览当作已安装界面。

## 界面结构

采用固定工作台框架：顶部显示当前战略文件夹、刷新与文件夹设置，左侧为功能列表（功能默认折叠，点选后展开该功能的视图导航），中间业务内容，底部文件状态。未实现的功能不占位预告。桌面宿主提供工作台服务时，业务面板与原生对话并排；普通 Harness Web 使用左栏入口打开的独立页面，不嵌入新会话主页，插件自身不仿造聊天窗口。

界面参考了 [dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator)、[dsh-ming-life](https://github.com/dataelement/dsh-ming-life) 与 [dsh-content-workbench](https://github.com/gjz18342624299-arch/dsh-content-workbench) 的工作台布局。只借鉴信息结构，不复用它们的业务页面或视觉资产。

## 可视化设计

视觉主张：一间安静的书房工作台。暖纸背景、墨色正文与深绿强调；页面标题和长期方向使用宋体，操作与正文回到系统无衬线；信息靠字阶、留白和细线组织，不依赖装饰性阴影或渐变。

内容结构：功能目录由功能卡、战略文件夹快照和工作台规则组成；进入功能后，标题栏只承载位置、说明和一个主操作。方向与取舍为主视图；决策依赖图配可搜索列表与详情；真实测试对照预期和反馈；战略记录保留取舍变化。表格不伪造数字，关系图只使用显式依赖。

交互与响应式：功能默认折叠；文件夹设置与全局讨论各只有一个入口。视图、筛选、搜索与选中卡在功能内保留；进入/切换视图时焦点落到标题，详情关闭后恢复原列表行与滚动位置。`/` 聚焦搜索，`Esc` 清搜索或关闭详情，`⌘/Ctrl + Enter` 提交讨论，首个 Tab 可跳到内容。设置修改后取消需确认，保存后提示已重新读取；讨论提交后提供刷新资料。宽屏保留左侧功能栏，容器窄于 980px 时折叠为顶部视图标签，窄于 720px 时投入表转为逐行卡片，640px 以下单列布局。文本对比按 4.5:1 核对，焦点环常驻，触控目标在窄屏提升到 44px，`prefers-reduced-motion` 下取消动画；每个图节点均可键盘操作，下方列表提供完整替代。

界面与交互检查图：[功能目录](artifacts/strategy-home.png)、[方向与取舍](artifacts/strategy-overview.png)、[决策与依赖图](artifacts/strategy-decisions-graph.png)、[设置与未保存确认](artifacts/strategy-settings.png)、[提交后的刷新入口](artifacts/strategy-notice.png)、[移动端](artifacts/strategy-mobile.png)、[暗色](artifacts/strategy-dark.png)。

## 本地开发

需要 Node.js 22+。在本目录执行：

```sh
pnpm install
pnpm run build
pnpm test
pnpm run test:ui
```

安装依赖只允许 esbuild 的构建脚本。UI 检查优先使用 Playwright 管理的 Chromium，本机没有该浏览器时可复用 macOS 安装的 Chrome；其他平台可执行 `pnpm exec playwright install chromium` 后运行。

构建产物：

- [客户端模块](dist/client.js)：使用当前 Harness 的 ModuleLoader 工厂格式，共用宿主 React。
- [独立预览](dist/preview.html)：同一套 UI 与虚构样例构建的单文件 HTML，不访问真实文件。
- `dist/skills/`：从仓库源复制的备用 skill 及参考资料；由构建生成，不作为另一套 skill 源维护。

Host 使用 [host.mjs](src/host.mjs)，文件读取在 [repository.mjs](src/repository.mjs)，解析与依赖计算在 [model.mjs](src/model.mjs)，UI 在 [App.jsx](src/App.jsx)，宿主适配在 [client.jsx](src/client.jsx)。

## 打包

```sh
pnpm run build
pnpm pack
```

安装目录必须包含生成的 `dist/skills/` 和客户端模块。`cordis.patch.yml` 在 bundle 加载时插入 Host 插件；包清单的 `dsh.client` 声明客户端前置包。生成的 `.tgz` 是安装交付物，当前宿主的 Add plugin 支持本地绝对目录，使用 tarball 时先解压，再选择其中的 package 目录。

## 适配边界

- 工作台注册到 `main`，通过左栏“学习工作台”入口打开；当前不使用 `conversation.hero.options`，不嵌入新会话主页，也不覆盖宿主 single slot。
- `ctx.connection.fetch.register` 的 exact route 由宿主执行认证与 owner 检查；浏览器使用文档相对请求或 Desktop transport override，不单独启动 HTTP 服务器。
- 用户点“进入战略讨论”后，先重新读取并验证项目，再通过 `workspaces.create` 与 `remote.session.create` 获得实际会话 ID；`remote.session.prompt` 提交用户的 `/strategyfinder`。安装版 `tool-skill` 会在 pre-step 识别手势、加载用户可调用技能。提交成功只表示进入 inbox，不表示战略讨论已完成。
- 同一失败请求重试复用会话、requestId 和原始文本，防止重复插入；若项目真实目录已改变，则重新创建对应会话。共享 adapter 会阻止主页与展开视图并发串用会话。正常后续讨论创建新会话，沿原战略工件恢复上下文。
- 插件不直接修改地图和决策卡，不提供拖拽关闭或自动作出取舍。路径绑定保存在当前浏览器，领域工件保留在战略文件夹。
- 参考资料链接在片段中保留为文字和来源提示，可查看整份原文；任意附件阅读与自动文件监听暂未实现。

## 启动故障恢复

0.2.0 曾因客户端 bundle 顶层重复声明 `apply` 导致 Host 加载失败。0.2.1 修复了该启动错误；0.2.2 进一步把 CSS 移入工作台组件渲染；0.2.3 兼容了工作区直接返回对象与会话 RemoteResult/直接 sessionId 两种形态；0.2.4 补上 `remote.session` 注入和客户端加载依赖；0.2.5 移除了普通会话主页的嵌入，工作台只保留主面板和左栏入口；0.2.6 把学习战略改为默认折叠的功能模块，工作台先显示功能列表；0.2.7 合并重复入口：移除顶部项目选择器（设置只保留“空间设置”一处），并移除空状态里与标题栏重复的“开始战略讨论”按钮。0.3.0 重做界面：书房式纸面配色、宋体标题、功能目录与项目快照、响应式顶部标签栏与移动端表格卡片化、统一 SVG 图标；同时修复窄屏 onboarding 溢出并补齐焦点与触控尺寸。0.3.1 重做交互：保留视图/筛选/详情状态，补齐标题与详情焦点、滚动恢复、`/` 与 `⌘/Ctrl+Enter` 快捷键、设置未保存确认、讨论后刷新入口和空状态动作。0.3.2 把设置收敛为一个学习战略文件夹：地图与决策卡直接从该文件夹及其中配置读取，不再填写空间、项目、地图和卡目录。构建和测试现在会直接执行真实 ModuleLoader 包装，并在浏览器中检查计算样式。

若仍无法启动，先完全退出 Harness，备份 profile 的 `package.json`，移除 `dsh-learning-workbench` 依赖及 `node_modules` 中对应链接，再启动。不要删除学习战略文件夹或整个 `~/.dsh`。

## 测试范围

Node 测试覆盖工件解析、前沿与依赖异常、路径/符号链接边界、文件大小、空目录只读、Host 注册和请求校验、显式会话提交与重试去重。浏览器检查覆盖功能列表默认折叠与展开/收起、单一文件夹设置入口、四个视图、图节点、筛选、搜索、来源弹窗、反馈提交、文件夹空状态及错误、空战略视图、窄屏 onboarding 溢出、移动端目录与表格卡片、暗色与减少动态效果，以及跳转链接、标题/详情焦点、`/`、`Esc`、`⌘/Ctrl+Enter`、筛选与视图保留、设置未保存确认和讨论后刷新。

这些验证不替代在已登录 Harness 中实际安装、刷新和启动一次模型讨论；未在当前主会话里触发新模型调用。
