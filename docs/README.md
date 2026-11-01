# Skills for Real Learners 文档

本目录帮助选择入口，说明适用场景、有效信号和能力边界；具体运行步骤见 [skills 清单](../skills/README.md)。第一次了解项目可先读[项目全貌与阅读导航](project-overview.md)。

## Learn

| Skill | 调用方式 | 适合解决的问题 |
| --- | --- | --- |
| [setup-learn-skills](setup-learn-skills.md) | User-invoked | 建立一个根 Agent 入口、多项目布局与读取规则 |
| [grill-with-learn](grill-with-learn.md) | User-invoked | 学习问题需要澄清，材料理解可能阻塞判断 |
| [strategyfinder](strategyfinder.md) | User-invoked | 从实践投入与反馈分析长期方向，测试关键假设后决定投入取舍 |
| [to-plan](to-plan.md) | User-invoked | 澄清学习目标，共同讨论适合个人情况的方案，同意后生成学习计划 |
| [to-task](to-task.md) | User-invoked | 沿用对话计划或已有文件，拆成简洁编号任务，复杂任务按需展开 |
| [teach-me](teach-me.md) | User-invoked | 从编号任务或真实问题开始教学，理解机制、判断适用性并检验表现 |
| [learn-modeling](learn-modeling.md) | Model-invoked | 把指定材料或概念建成可回溯模型 |

## Up-stream

| Skill | 调用方式 | 适合解决的问题 |
| --- | --- | --- |
| [grill-me](grill-me.md) | User-invoked | 显式启动一轮质询 |
| [grilling](grilling.md) | Model-invoked | 为质询入口提供官方访谈方法 |

User-invoked 入口由学习者显式选择，不相互自动启动；Model-invoked 能力可以按需复用，也可直接点名。共 9 个公开 skill；官方 `teach` 是 `teach-me` 的内部教学基础，没有单独的人类页面或安装入口。

## DeepSeek Harness 插件

[学习工作台](strategy-plugin.md)：统一承载各 skill 的可视化功能，逐个实现与验收。目前已实现学习战略（`strategyfinder`）。

## Deprecated

[历史文档索引](deprecated/README.md)只说明退出 MVP 的旧能力，不作为当前入口推荐。`to-sop` 已改为 `to-plan`。安装与官方来源说明见[根 README](../README.md#installation)和[统一上游记录](../UPSTREAM.md)。
