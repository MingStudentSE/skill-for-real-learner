# Skills for Real Learners

一组把「我想学什么」变成可观察能力证据的 Agent Skills。它们不替学习者决定人生，也不把课程完成或投入时长误当成掌握；每个 skill 都只负责学习过程中的一个清晰环节，因此可以按你的现实问题自由组合。

本仓库借鉴并依赖 [Matt Pocock 的 Skills for Real Engineers](https://github.com/mattpocock/skills) 中的 `grilling`、`teach` 与 `research`：用访谈对齐真正的问题，用教学和练习形成反馈，再用证据决定下一步。学习流程本身保留在你自己的工作区，随时可以阅读、调整和扩展。

## Design sources

本仓库的学习方法还主要受成甲老师两本书启发；它们决定的是**如何学习和验证**，不是替代某个领域的一手资料或专业判断。

| 书 | 对 Skill 设计的贡献 |
| --- | --- |
| 《好好学习：个人知识管理精进指南（升级版）》 | 将「行动改变」而非阅读完成作为学习标准；启发了 `teach-me` 的讲回、微实验和反馈，以及 `study-review` 用表现证据与反思决定下一步。 |
| 《好好思考（全新升级版）》 | 将基本问题、最小必要知识、概念边界与对知识的诚实带入流程；它们成为 `to-sop` 的范围设计、`learn-modeling` 对原材料与补充解释的区分，以及 `teach-me` 的概念校准。 |

两本书的方法在 [成甲学习闭环](skills/learning/teach-me/references/chengjia-teaching-loop.md) 中被编译为可执行判断：`问题 → 概念 → 行动 → 反思`。它不替代原书，也不以书中的方法代替查证最新事实或专业规范。

## Installation

先安装上游的基础能力。你可以直接安装完整套件；若在安装器中只选择部分 skill，至少选择 `grilling`、`teach` 与 `research`：

```bash
npx skills@latest add mattpocock/skills
```

再安装本仓库的学习 skills：

```bash
npx skills@latest add MingStudentSE/skill-for-real-learner
```

安装器会让你选择目标 Agent 和要加入的 skill。`grilling` 用于澄清学习决策，`teach` 用于讲解与练习；`strategyfinder` 在需要核实外部事实时会使用 `research`。安装与更新方式以 [上游说明](https://github.com/mattpocock/skills#installation-30-second-setup) 为准。

## Start here

### Recommended path

当你要开始一个新阶段、重新分配学习精力，或希望这次学习能留下可复用的计划时，从下面三个入口中选一个：

```text
grill-me / grill-with-learn / strategyfinder
                  ↓
                to-sop
                  ↓
               to-task
                  ↓
               teach-me
                  ↓
             study-review
```

- `/grill-me`：无状态访谈。聊完即结束，不留下文件。
- `/grill-with-learn`：有状态的学习访谈。它会沉淀学习笔记，供后续学习流程复用。
- `/strategyfinder`：长期战略入口。适合决定有限精力该投入、暂停或放弃什么；它维护唯一的 `STRATEGY-MAP.md`，不替代日常学习计划。

接着，`/to-sop` 把共识变成一个稳定阶段的学习方法，`/to-task` 把它转成当前月、周、日或单次任务，`/teach-me` 围绕真实问题开展讲解、讲回和微实验。到约定检查点后，`/study-review` 只依据已经展示的能力，决定推进、补强或修订 SOP。

### Shortest path

当你只想马上把一个真实问题学会，不需要先建立长期计划时：

```text
grill-me / grill-with-learn
             ↓
          teach-me
             ↓
        study-review
```

先选 `/grill-me` 或 `/grill-with-learn` 澄清问题，再用 `/teach-me <想学的能力、概念或真实问题>` 开始一轮互动教学。`/study-review` 留到有意义的检查点：它评估的是独立解释、实际产物或新情境迁移，不是「感觉会了」。

### Learning from a source

书、文章、视频或课程讲义需要先被看懂时，可以在任一路径中插入：

```text
指定材料 → learn-modeling → teach-me
```

`/learn-modeling` 会按原材料的章节建立学习模型，标出核心概念、关系、前置知识、难点与来源位置。它只解释材料，不代替教学、练习、任务规划或掌握评估。

## What each skill owns

路线中的 `strategyfinder`、`grill-with-learn`、`to-sop`、`to-task`、`teach-me` 与 `study-review` 都由学习者主动调用；它们编排流程，但不会在后台替你启动新的学习计划。`learn-modeling` 既可直接调用，也可在引入指定材料时供 `teach` 使用。

| Skill | 何时使用 | 产出或下一步 |
| --- | --- | --- |
| [`strategyfinder`](skills/learning/strategyfinder/SKILL.md) | 审视长期方向、精力配置和重大取舍 | `STRATEGY-MAP.md` 与决策卡；路线清晰后交给 `to-sop` 或 `to-task` |
| [`grill-with-learn`](skills/learning/grill-with-learn/SKILL.md) | 澄清学习使命或当前学习决策 | 已达成的学习共识，供 `to-sop` 或 `teach-me` 使用 |
| [`learn-modeling`](skills/learning/learn-modeling/SKILL.md) | 阅读指定材料并建立学习者可读的内容模型 | `learning-models/` 中的材料模型，供教学使用 |
| [`to-sop`](skills/learning/to-sop/SKILL.md) | 已有清晰方向，需要稳定的阶段方法 | `MISSION.md` 与 `LEARNING-SOP.md` |
| [`to-task`](skills/learning/to-task/SKILL.md) | 已有 SOP，需要规划当前一批行动 | `TASKS.md`；第一项任务可立即开始 |
| [`teach-me`](skills/learning/teach-me/SKILL.md) | 围绕一个真实问题互动学习、讲回并练习 | 一次最小展示、微实验与可观察的回看点 |
| [`study-review`](skills/learning/study-review/SKILL.md) | 到达检查点，需要判断能力是否已经展示 | `reviews/` 中的证据复盘，以及推进、补强或修订 SOP 的决定 |

## The evidence loop

学习不是直线，也不是「完成一门课」后自动结束。每次复盘都让证据决定下一步：

```text
任务与教学 → 独立解释 / 真实产物 / 新情境迁移 → study-review
                                                     ↓
                       推进 → to-task    补强 → to-task    方法失配 → to-sop
```

长期战略只在出现影响总体取舍的新证据时，才在下一次 `/strategyfinder` 中重新打开；一次表现波动不会自动改写战略。

## Shared workspace

流程会在当前学习工作区逐步维护以下状态，而不是另起一套隐藏课程：

- `STRATEGY-MAP.md` 与 `strategy-decisions/`：长期战略与关键取舍。
- `MISSION.md` 与 `LEARNING-SOP.md`：学习的现实原因、范围、目标能力、方法和检查点。
- `TASKS.md`：当前批次的适应性任务。
- `learning-models/`：按指定材料建立的内容模型，不是学习证据。
- `reviews/`：检查点的能力证据与下一步决定。
- `learning-records/`：只记录会影响后续教学的持久理解、纠正或真实证据。

完整的共享工件格式与更新边界见 [学习工件说明](skills/learning/ARTIFACTS.md)。

## Why these skills exist

Agent 可以很快给出一份看似完整的学习计划，但学习中真正昂贵的部分通常没有被解决：目标是否值得投入、输入是否转化为行动、以及能力是否真的能在没有提示时被展示。

这组 skills 把三个问题拆开处理：

- 用访谈和战略地图，把「想学」转换成经过取舍的现实问题。
- 用 SOP、适应性任务与对话式教学，把问题转换成小而有反馈的行动。
- 用复盘中的表现证据，而非课程完成度或熟悉感，决定下一步。

你始终是路线的所有者；这些 skills 只是让每次学习决策都能留下可检查、可修订的依据。
