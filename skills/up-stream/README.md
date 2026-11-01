# Up-stream

随本项目分发、按固定版本原样同步的官方独立 skill。

| Skill | 调用方式 | 职责 |
| --- | --- | --- |
| [grill-me](grill-me/SKILL.md) | User-invoked | 显式质询入口，调用 `grilling` |
| [grilling](grilling/SKILL.md) | Model-invoked | 供其他入口复用的质询方法 |

来源、提交与许可统一见 [UPSTREAM](../../UPSTREAM.md)。更新正文与界面配置时逐文件核对上游；不在副本内混入本项目补丁。完整官方 `teach` 位于 [teach-me 内部](../learn/teach-me/references/teach/SKILL.md)，没有独立安装入口。
