# Grilling

`grilling` 是本项目随附的官方 model-invoked 质询能力，可由 [grill-me](grill-me.md) 或 [grill-with-learn](grill-with-learn.md) 调用，也可直接点名使用。

它把待确定的决定组织成设计树，按依赖关系分轮提问，为问题给出建议，再依据回答推进下一轮。需要核实的环境事实由 Agent 调查；有待取舍的决定由用户回答。有效信号是每轮问题都有已确定的前提，并在达成共识后才进入行动。

它负责质询，不负责建立学习模型、制定学习计划或教学；材料建模由 `learn-modeling` 承担。希望显式开始一轮质询时使用 `/grill-me`。

[运行正文](../skills/up-stream/grilling/SKILL.md)与界面配置原样来自 [Matt Pocock Skills](https://github.com/mattpocock/skills/tree/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/productivity/grilling)，同步提交为 `5beb35b040e3de97e54fa9e386d7e42d15c295c2`。同步时整体核对这两份上游文件。
