# 仓库协作说明

## 结构与权威来源

当前发布 9 个 skill：本项目维护的 7 个位于 `skills/learn/<skill-name>/`，独立官方能力 `grill-me`、`grilling` 位于 `skills/up-stream/<skill-name>/`。`skills/deprecated/` 保存退役内容，入口改名为 `ARCHIVED.md`，不参与当前安装发现。

`skills/README.md` 是清单和调用分类的权威来源；`skills/ARTIFACTS.md` 定义共享状态边界；`CONTEXT.md` 定义领域术语。每个公开 skill 都有 `docs/<skill-name>.md`，由 `docs/README.md` 索引。面向人文档说明选择场景、有效信号和边界，运行步骤留在 skill 中。

`.obsidian/`、`reference/`、`skills/matt/`、`.DS_Store` 与本地 `skillhub/` 分发副本不加入版本控制；本地副本不定义正式清单。

## 官方副本

`skills/up-stream/grill-me/` 和 `skills/up-stream/grilling/` 的正文与界面配置原样保存。`skills/learn/teach-me/references/teach/` 保存完整官方教学正文与四份格式，不设独立入口或内部界面配置。`skills/learn/strategyfinder/references/research/` 保存官方研究正文，`references/prototype/` 保存官方原型正文及 LOGIC、UI 文件，均作为可选资料保留，不构成强制运行依赖，不复制 agents 配置或设独立公开入口。来源、固定提交与版权许可统一记录在根 `UPSTREAM.md`；外层记录对应副本来源和提交。

更新官方副本时先核对上游目录与固定版本，完整同步对应文件，并逐文件比较字节一致性。官方原文不承载本项目补丁；教学和战略领域适配、路径解释及授权边界只写在各外层及其自有参考资料。官方格式文件的链接相对于内部副本，课程、资产及学习记录等路径相对于用户的学习工作区。

`teach-core` 已退役，不再更新为运行依赖。内部 `teach`、`research`、`prototype` 副本均不增加可安装 skill；安装发现应在外层 `teach-me/SKILL.md` 和 `strategyfinder/SKILL.md` 停止向其资源目录递归。

## 维护 grill-with-learn

此入口沿用上游 `grill-with-docs` 的薄适配模式，把建模能力替换为 `learn-modeling`。仅当指定材料阻塞当前判断时按需建模。入口保持简短，不重复 `grilling` 的分支、停止线或交接规则。

## 调用与工件

- User-invoked 设置 `disable-model-invocation: true`，界面配置设置 `policy.allow_implicit_invocation: false`；每个入口由用户显式启动，不自动调用另一个用户入口。
- Model-invoked 不设置上述禁用项，可按需复用，也可由用户直接调用。
- `to-plan` 与用户聊清楚学习目标和个人情况，共同讨论并调整具体方案，取得明确同意后才生成或更新 `LEARNING-PLAN.md`；战略、使命文件及前置质询均非必要条件，不为制定计划强制创建它们。已有战略和使命仅作参考，不自动改写。计划独立交付，以可执行、可检验作为完成标准；to-plan 正文与格式不写任务入口或后续交接要求；`to-task` 优先沿用当前对话已明确的计划，按需参考已有计划文件，在当前项目生成 `tasks/01-标题.md` 等编号任务；不强制计划文件或特定上游入口，不在正文与格式中编排教学入口。一个根 Agent 入口支持多个项目，各项目使命、计划与教学状态独立。
- `teach-me` 支持 `/teach-me 01` 定位当前项目任务，负责课程、练习、掌握检验和教学记录，计划修订建议交给用户下一次运行 `to-plan`，任务重排交给 `to-task`。
- `strategyfinder` 以 `grilling` 为主干，从实践、时间/金钱/精力投入及反馈分析候选方向，识别关键假设，按需查证外部事实并设计低成本真实测试；复盘后由用户决定加码、维持、缩小或暂停。仅在材料理解阻塞判断时复用 `learn-modeling`，维护长期战略地图与决策卡；不强制研究子代理、独立研究笔记或代码原型。产物存用户工作区，卡留证据和上下文指针；提交临时分支、修改真实实现及 issue 操作仅在明确授权后执行。
- 旧 SOP 只作为计划迁移输入，保留原文，不自动删除学习者状态。

## 变更同步与验证

新增、改名、退役或改变行为时，同步根 README、skills 清单、对应人类文档及 docs 索引。共享状态改变时同步 ARTIFACTS，术语改变时同步 CONTEXT，格式或评测受影响时同步本入口 references/evals。目录重构时修复相对链接及运行引用；退役内容的旧命令只作为历史保留，不重新推荐。

每个当前 skill 的 frontmatter `name` 必须与目录名一致。完成前验证清单只有九个公开入口、归档无 `SKILL.md`、官方副本逐字一致、受影响链接存在，并运行 `git diff --check` 和相关已有校验。运行时工件链接按输出布局验证，不能当作仓库文件判定失效。提交前只暂存本次任务文件。
