---
name: ask-ming
description: 选择适合当前学习处境的 skill 或流程。
disable-model-invocation: true
argument-hint: "我当前的学习目标、材料或卡点是："
---

# Ask Ming

不知道该从哪个学习 skill 开始时，使用本入口。它根据学习者的当前处境和已有工件，推荐一条**由学习者自己显式执行**的 `/skill` 命令；不会启动其他 skill、改写工件或替学习者推进流程。

## 先看当前状态

先读取当前对话，以及与问题直接相关的工件：`STRATEGY-MAP.md`、`MISSION.md`、`LEARNING-SOP.md`、`TASKS.md`、`learning-models/`、课程工件、`learning-records/` 或 `reviews/`。没有足够语境时，只问一个能决定下一步的问题。

## 推荐一条显式入口

根据当前最阻塞的需要，只推荐一个主入口：

| 当前需要 | 建议学习者显式运行 | 主要工件或结果 |
| --- | --- | --- |
| 长期方向、精力配置或重大取舍仍不清楚 | `/strategyfinder` | `STRATEGY-MAP.md` 与 `strategy-decisions/` |
| 学习使命或当前决策还说不清 | `/grill-with-learn` | 已澄清的学习共识与必要的学习记录 |
| 已有方向，需要稳定阶段的方法和检查点 | `/to-sop` | `MISSION.md` 与 `LEARNING-SOP.md` |
| 已有 SOP，需要安排当前一批可执行行动 | `/to-task` | `TASKS.md` |
| 围绕真实问题开展跨会话教学与练习 | `/teach-me` | 课程、参考资料与学习证据 |
| 到达检查点，需要根据表现证据决定校正什么 | `/study-review` | `reviews/<date>-<checkpoint>.md` 与校正结论 |
| 指定材料、章节或概念只需要整理成可回溯的模型笔记 | `/learn-modeling` | `learning-models/<date>-<topic>.md` |
| 想通过讲回、判断或行动互动学懂一个点名概念 | `/learn-one-concept` | 本轮解释、判断或行动证据；可选概念模型 |

`/learn-modeling` 也可被其他学习流程复用；其余表中的学习流程仍由学习者手动选择和启动。

## 回答格式

用不超过四项交付：

1. 推荐的 `/skill` 命令；
2. 为什么它最贴合当前阻塞点；
3. 它会读取或产出的主要工件；
4. 仅在确有重要取舍时给出一个备选入口。

不要在本 skill 中执行推荐的命令。学习者确认后自行运行它，或携带相关工件在新会话中运行。
