# Skills for Real Learners

一组把「我想学什么」变成可观察能力证据的 Agent Skills。它们不替学习者决定人生，也不把课程完成或投入时长误当成掌握；每个 skill 都只负责学习过程中的一个清晰环节，因此可以按你的现实问题自由组合。

本仓库借鉴 [Matt Pocock 的 Skills for Real Engineers](https://github.com/mattpocock/skills)：依赖其中的 `grill-me`、`grilling`、`research` 与 `prototype`，并把原版 `teach` 镜像为可被 `teach-me` 调用的 `teach-core`。它们分别用短访谈或持续追问对齐真正的问题、用教学和练习形成反馈、用研究核实外部事实，并以低成本原型验证关键假设。学习流程本身保留在你自己的工作区，随时可以阅读、调整和扩展。

## Design sources

本仓库的学习方法还受以下材料启发；它们决定的是**如何学习和验证**，不是替代某个领域的一手资料或专业判断。

| 材料                      | 对 Skill 设计的贡献                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| 《好好学习：个人知识管理精进指南（升级版）》 | 将「行动改变」而非阅读完成作为学习标准；启发了 `teach-me` 的讲回、微实验和反馈，以及 `study-review` 用结果检验学习内容是否真正用起来，再校正学习设计。           |
| 《好好思考（全新升级版）》          | 将基本问题、最小必要知识、概念边界与对知识的诚实带入流程；它们成为 `to-sop` 的范围设计、`learn-modeling` 对原材料与补充解释的区分，以及 `teach-me` 的概念校准。 |
| [Eero Alvar: How I Use AI to Learn Things](https://www.youtube.com/watch?v=kzcI5F4tGiU) | 将教学路径放在学习者当前理解的边缘：跳过已掌握内容，先补不可理解的前置断层，再用持续反馈校准学习画像、课程范围与难度。 |

这些方法被编译为 [教学闭环](skills/teach-me/references/learning-loop.md)、[学习画像格式](skills/teach-me/references/LEARNER-PROFILE-FORMAT.md) 与 [学习效果审查依据](skills/study-review/references/learning-effect-review.md) 中的可执行判断。这些执行规则不替代设计来源，也不以一般学习方法代替查证最新事实或专业规范。

## Installation

先安装上游的基础能力。你可以直接安装完整套件；若在安装器中只选择部分 skill，至少选择 `grill-me`、`grilling`、`research` 与 `prototype`：

```bash
npx skills@latest add mattpocock/skills
```

再安装本仓库的学习 skills：

```bash
npx skills@latest add MingStudentSE/skill-for-real-learner
```

也可以把下面这段提示词直接发给你的 agent：

```text
请为当前环境安装 Skills for Real Learners。先执行 `npx skills@latest add mattpocock/skills`，在交互式选择器中选择 `grill-me`、`grilling`、`research` 与 `prototype`。完成后执行 `npx skills@latest add MingStudentSE/skill-for-real-learner`。请按此顺序完成安装。
```

每个入口的面向人说明见[学习 skill 文档](docs/README.md)：它们说明何时使用、可观察的有效信号和与其他入口的边界，而不复述运行步骤。

## Start here

### `/ask-ming`：显式导航入口

不知道从哪个学习 skill 开始时，先手动运行 `/ask-ming`。它只会推荐下一条由你输入的 `/skill` 命令，并说明应读取或交付哪个工件；不会自动启动流程、写入文件或替你作出学习取舍。

### 推荐调用顺序

当你要开始一个新阶段、重新分配学习精力，或希望这次学习能留下可复用的计划时，从下面三个入口中选一个。稳定阶段的推荐路径经过 `/to-sop`；当当前任务简报已具备问题、时间或约束，以及已知起点或证据缺口时，短期行动可以直接进入 `/to-task`。这不表示 skill 会自动跳转；每一步仍由你手动运行。

```text
grill-me / grill-with-learn / strategyfinder
                  ↓
                to-sop ────────────┐
                                   ↓
明确的当前任务简报
（问题、时间／约束、起点／证据缺口） ──→ to-task
                                   ↓
                                teach-me
                                   ↓
                              study-review
```

- `/grill-me`：无状态访谈。聊完即结束，不留下文件。
- `/grill-with-learn`：学习质询入口。它通过 `grilling` 澄清学习使命或当前决策；只有指定材料本身阻塞判断时，才可复用 `learn-modeling` 建立学习模型。
- `/strategyfinder`：长期战略入口。适合决定有限精力该投入、暂停或放弃什么；它维护唯一的 `STRATEGY-MAP.md`，不替代日常学习计划。
- `/to-sop`：把已经澄清的学习方向整理为当前阶段可长期执行的 SOP，明确目标能力、学习方法、资源策略与复盘检查点。
- `/to-task`：优先根据 SOP 规划当前一批可执行的学习任务；当前对话已形成包含问题、时间或约束、起点或证据缺口的任务简报时，也可直接规划。每项任务写清证据、练习、反馈、投入与完成条件。
- `/teach-me`：围绕真实问题开展跨会话教学，持续记录学习画像，将下一个学习块放在当前理解边缘，再通过讲回、练习与微实验校准难度并产生行动证据。
- `/study-review`：先确定要证明的解释、判断或行动，再盘点已有作品与反馈；证据不足时通过无提示展示和苏格拉底式追问现场取证。它既能独立检验一个概念，也能在学习检查点校正课程、SOP 与任务，并记录需要重审的使命或战略信号。

### Shortest path

当你只想马上把一个真实问题学会，不需要先建立长期计划时：

```text
/grill-me → /learn-one-concept
```

先运行 `/grill-me`，把现实问题或好奇点收敛为一个要解决的概念；再运行 `/learn-one-concept <概念>`，通过讲回、判断或微行动完成一个轻量学习回合。它适合从讲解开始学懂一个点；若想先检验当前掌握而不接受教学，使用 `/study-review`。

### Building model notes

书、文章、视频、章节或单个概念需要先被整理清楚时，可手动调用 `/learn-modeling`。它根据范围建立材料模型或概念模型，统一写入 `learning-models/<date>-<topic>.md`。它也是可复用的 model-invoked 能力：`teach-me` 或 `learn-one-concept` 在需要模型笔记时可以复用它。

`/learn-modeling` 只建模知识内容，不代替互动教学、练习、任务规划或掌握评估。

## Invocation and ownership

### User-invoked

这些流程只能由学习者手动选择。它们通过工件交接，不会彼此自动启动。

| Skill                                                             | 何时使用                 | 产出                               |
| ----------------------------------------------------------------- | -------------------- | -------------------------------- |
| [`ask-ming`](skills/ask-ming/SKILL.md)                   | 不确定下一步该用哪个学习 skill   | 一条建议手动执行的命令与工件说明                 |
| [`strategyfinder`](skills/strategyfinder/SKILL.md)       | 审视长期方向、精力配置和重大取舍     | `STRATEGY-MAP.md` 与决策卡           |
| [`grill-with-learn`](skills/grill-with-learn/SKILL.md)   | 澄清学习使命或当前学习决策        | 已达成的学习共识；指定材料需要建模时，可建立 `learning-models/` 中的模型 |
| [`learn-one-concept`](skills/learn-one-concept/SKILL.md) | 轻量、互动地学懂一个点名概念       | 本轮解释、判断或行动证据；可选概念模型              |
| [`to-sop`](skills/to-sop/SKILL.md)                       | 已有清晰方向，需要稳定的阶段方法     | `MISSION.md` 与 `LEARNING-SOP.md` |
| [`to-task`](skills/to-task/SKILL.md)                     | 当前任务简报已具备问题、时间或约束、起点或证据缺口，需要规划当前一批行动；有 SOP 时优先读取 | `TASKS.md`；第一项任务可立即开始，并记录规划依据 |
| [`teach-me`](skills/teach-me/SKILL.md)                   | 用真实问题启动较长、跨会话的课程学习   | `LEARNER-PROFILE.md`、课程、参考资料、学习记录与本轮练习证据              |
| [`study-review`](skills/study-review/SKILL.md)           | 检验一个概念/能力，或在检查点审核学习效果 | 证据化结论、工件处理决定与 `reviews/` 复盘 |

### Model-invoked

以下能力可由模型在当前学习流程需要时复用。

| Skill | 何时使用 | 产出 |
| --- | --- | --- |
| [`teach-core`](skills/teach-core/SKILL.md) | 为 `teach-me` 提供原版、完整的有状态教学工作区 | `MISSION.md`、课程、资源、参考资料、术语表与学习记录 |
| [`learn-modeling`](skills/learn-modeling/SKILL.md) | 将指定材料、章节或概念建成学习者可读的模型笔记 | `learning-models/` 中的材料模型或概念模型 |

## The evidence loop

学习不是直线，也不是「完成一门课」后自动结束。每次复盘先检验学习内容产生的实际效果，再用证据记录需要校正的假设和下一步：

```text
学习模型 / 课程 / 任务 → 独立解释 / 真实产物 / 新情境迁移 → 学习效果审查
                                                                  ↓
                                                       校正假设与下一步
```

长期战略只在出现影响总体取舍的新证据时，才在下一次 `/strategyfinder` 中重新打开；一次表现波动不会自动改写战略。

## Shared workspace

流程会在当前学习工作区逐步维护以下状态，而不是另起一套隐藏课程：

- `STRATEGY-MAP.md` 与 `strategy-decisions/`：长期战略与关键取舍。
- `MISSION.md` 与 `LEARNING-SOP.md`：学习的现实原因、范围、目标能力、方法和检查点。
- `TASKS.md`：当前批次的适应性任务及其规划依据。
- `LEARNER-PROFILE.md`：当前学习使命下的教学决定视图，只保留会改变下一节课的活跃分支、前置断层与理解边缘，由 `teach-me` 持续校准。
- `learning-models/`：按指定材料、章节或概念建立的内容模型，不是学习证据。
- `RESOURCES.md`、`lessons/`、`reference/`、`GLOSSARY.md`、`NOTES.md` 与 `assets/`：由 `teach-core` 维护的教学来源、课程、参考知识、术语、笔记与复用组件。
- `reviews/`：检查点的学习效果证据、设计诊断与校正动作。
- `learning-records/`：只记录会影响后续教学的持久理解、纠正或真实证据。

学习流程共享哪些工件及其边界见 [学习工件说明](skills/ARTIFACTS.md)；每个 skill 所创建文件的格式随该 skill 一起发布。

## Why these skills exist

Agent 可以很快给出一份看似完整的学习计划，但学习中真正昂贵的部分通常没有被解决：目标是否值得投入、输入是否转化为行动、以及能力是否真的能在没有提示时被展示。

这组 skills 把三个问题拆开处理：

- 用访谈和战略地图，把「想学」转换成经过取舍的现实问题。
- 用 SOP、适应性任务与对话式教学，把问题转换成小而有反馈的行动。
- 用复盘中的表现证据，而非课程完成度或熟悉感，决定下一步。

你始终是路线的所有者；这些 skills 只是让每次学习决策都能留下可检查、可修订的依据。
