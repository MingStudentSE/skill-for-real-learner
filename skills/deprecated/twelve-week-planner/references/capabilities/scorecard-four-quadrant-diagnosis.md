# 三层记分与四象限诊断

## R — 原文（Reading）

> “It’s important to measure both lead and lag indicators because they provide different diagnostic capabilities. Measuring lead indicators helps you know that you’re following through on your plans… Measuring the lag indicators… helps tell you whether your plan is sound.”
>
> 自译：同时衡量事前与事后指标很重要，因为它们提供不同的诊断能力。事前指标说明你是否照计划行动；事后指标则帮助判断计划本身是否有效。
>
> — A. Trevor Thrall，*The 12 Week Year for Writers*，第 7 章

## I — 方法论骨架（Interpretation）

- 战术执行率回答是否按时做了计划动作，不能与结果分数混算。
- 事前指标观察关键投入，事后指标观察成果；每个目标各保留 1–2 个及时指标。
- 执行高／结果在轨时保持，执行低／结果脱轨时先修执行。
- 执行高／结果脱轨才修策略、投入或目标；执行低／结果在轨则检查偶然领先或删除伪战术。
- 80%–85% 只是经验性警戒区间，趋势、任务机制、依赖和现实事件优先于单周数字。

## A1 — 书中的应用（Past Application）

### 案例：第一周期的 93% 执行率

- **问题**：Trevor 的第四章晚一天完成，单看迟交容易把周期判断为失败。
- **使用**：他分开看每周 1000 字事前指标、章节结果和 40 项战术完成率。
- **结论**：单项迟交不等于系统失效，周期整体执行证据仍然强。
- **结果**：37 项战术按时完成，执行率 93%，并完成项目摸底与四章初稿。

## A2 — 触发场景（Future Trigger）

- 用户不知道该记录行动、产量还是最终结果。
- 执行率低且结果落后，不确定该换计划还是先恢复执行。
- 明明做完所有战术，结果却没有出现。
- 结果暂时领先，但关键行动持续滑坡。

语言信号：

- “十二周记分卡该放什么指标？”
- “我都照做了，为什么还是没结果？”
- “Should I fix execution or revise the plan?”

与相邻能力的定稿区分：`weekly-execution-loop` 负责每周收集数据；本卡解释数据。症状尚未定位时先用 `execution-system-diagnosis`；确定属于中断或范围变化时转 `cycle-phase-change-control`。

## E — 可执行步骤（Execution）

1. **建立三层指标**：为每个目标列到期战术、1–2 个事前指标和 1–2 个事后指标。完成标准：三层不混算，频率与数据来源明确。
2. **计算与看趋势**：计算周执行率，比较最近数周事前与事后走势。完成标准：单周异常有背景注释，不立即外推。
3. **进入四象限**：按执行高低与结果在轨与否定位。完成标准：给出唯一首要判断，不同时喊“更努力”和“换策略”。
4. **选择动作**：保持、修执行、修策略／目标或删伪战术。完成标准：只改一个主要变量，并规定再观察多久。
5. **检查第三变量**：核对指标失真、外部依赖、信息变化和不可控风险。完成标准：不把所有偏差硬塞进二分法。

## B — 边界（Boundary）

- 不把 80% 或 85% 当跨任务稳定的成功阈值。
- 不用字数、次数等易被 AI 放大的指标冒充质量和真实产出。
- 低执行时没有足够样本判断策略无效；不要过早换计划。
- 高执行也可能是高分完成了错误战术，必须检查目标和指标定义。
- 书中主要是成功案例与教练经验，分数与结果的因果关系没有被严格实验验证。

## 相关能力

- depends-on: `weekly-execution-loop` — 需要真实的周执行与结果记录。
- composes-with: `execution-system-diagnosis` — 可把四象限结果送回五层系统定位更深原因。
- composes-with: `cycle-phase-change-control` — 诊断出结构性中断后，决定移动、缩小或重启。
