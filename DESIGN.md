---
name: TangTang Homepage
description: TangTang 的个人品牌主页 — 凤凰粉白 3D 过程化视觉，代码即艺术
colors:
  bg-dark: "#0a0e1f"
  ink-deep: "#ffffff"
  ink-secondary: "rgba(255,255,255,0.72)"
  ink-muted: "rgba(255,255,255,0.42)"
  phoenix-rose: "#fb5959"
  phoenix-violet: "#6248a4"
  particle-pink: "linear-gradient(180deg,#ffffff 0%,#fdebfd 65%,#eabdf6 100%)"
  signal-blue: "#4e97d8"
typography:
  display:
    fontFamily: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', -apple-system, sans-serif"
    fontWeight: 700
  mono:
    fontFamily: "'SF Mono', 'Fira Code', 'Source Code Pro', Consolas, monospace"
    fontWeight: 400
    letterSpacing: "0.05em"
rendering:
  engine: "Three.js (WebGL)"
  approach: "过程化 shader 生成全部几何与运动，不导入外部 3D 模型（零版权风险、体积轻）"
  signature: "粒子流场 + curl-noise + additive 发光 + 滚动驱动相机推进"
---

# Design System: TangTang Homepage

## 1. Overview

**Creative North Star: "The Engineer's Signal · Phoenix Rose"**

这个系统以 3D 过程化视觉表达工程师的信号。所有几何与运动由 GLSL shader 原生生成——不导入任何外部 3D 模型，代码即艺术。粒子在 curl-noise 流场中流动，形成数据流/星河感；少数玫红粒子聚成「信号束」，作为深蓝紫宇宙里的唯一高饱和信号。

视觉语言：深蓝紫宇宙背景（`#0a0e1f`）吸收注意力，把内容推向更深处；粉白（白→淡紫粉 `#eabdf6`）粒子作为主体，Phoenix Rose `#fb5959` 作为每屏唯一的信号色。3D canvas 全局挂在 `App.tsx`，所有页面共享同一粒子场，切页不卸载——背景常驻连续，内容层在其上淡入滚动。每一处效果都因过程化生成而属于这个站本身，而非搬运的美术资产。

这个系统拒绝搬运别家作品：不导入受版权的 glb 模型、不复用他站 shader、不堆砌现成材质。所有 3D 从零写起，追求精确与原创。（配色氛围灵感取自 Noomo Storytelling 的「凤凰」，但全部资产原创。）

**Key Characteristics:**
- 深蓝紫全屏 3D 背景（过程化粒子流场，无外部模型），全局常驻 `App.tsx`，切页不卸载
- Single accent color（Phoenix Rose `#fb5959`）作为信号束，每屏最多一处
- 白→淡紫粉粉白粒子主体，additive 发光；violet `#6248a4` 辅助光晕
- 滚动驱动相机与粒子演化（lerp 平滑）
- 路由切换：3D 不动，内容层 translateY+opacity 淡入（page-enter）
- Monospace 仅用于技术元数据（标签、编号、出处）
- 全部动效提供 prefers-reduced-motion 降级；触屏/移动端自动降级粒子数与关闭鼠标视差

## 2. Colors

深蓝紫底 + 一个高饱和品牌信号色 + 粉白粒子主体 + 紫辅助光晕。

### Primary
- **Phoenix Rose** (`#fb5959`)：唯一饱和信号色。作为 3D 粒子「信号束」出现（shader 内 ~6% 粒子向玫红过渡），以及导航 active 圆点、avatar ring、focus 环。每屏最多一处可见（UI 文字 / badge / 卡片边框不用）。

### Neutral
- **Deep Space** (`#0a0e1f`)：背景。canvas 透明，由根容器填此色；内页用 `rgba(10,14,31,0.7)` 轻遮罩让 3D 透出。
- **Pure White** (`#ffffff`)：显示文字、hero 名字。
- **Soft White** (`rgba(255,255,255,0.72)`)：正文。
- **Ghost White** (`rgba(255,255,255,0.42)`)：mono 标签、caption。

### Secondary
- **Phoenix Violet** (`#6248a4`)：辅助光晕（径向背景、travel/tech 分类色），非信号色。

### Particle Palette
- **Pink Gradient**：粒子主体 `#ffffff → #fdebfd → #eabdf6`（白到淡紫粉），additive 混合在深蓝紫上发粉白光。
- **Signal Beam**：玫红粒子束，沿斜带分布，滚动穿越时可见。

### Named Rules
**The One Signal Rule.** Phoenix Rose `#fb5959` 在任意时刻的可见屏幕上最多出现一处。3D 信号束是主要承载；UI 文字、badge、卡片边框不使用玫红。导航 active 圆点、avatar ring 与信号束不会同时成为视觉焦点（信号束随滚动出现，圆点 / ring 常驻但极小）。

## 3. Typography

- **Display / Body**：PingFang SC（CJK 优先）
- **Mono**：SF Mono / Fira Code / Source Code Pro，仅用于技术元数据（kicker、section 编号、tech tags、出处、⌘K 提示）。不进导航文字、标题正文。

### Named Rules
**The Mono Boundary Rule.** Mono 字族专用于技术元数据，永不进导航或正文标题。

## 4. Motion & 3D

### 3D 主控（`src/webgl/Experience.ts`）
- WebGLRenderer（alpha 透明、antialias、DPR 上限 2），背景色 `#0a0e1f`
- PerspectiveCamera，滚动推进 z（18 → 4），鼠标视差偏移
- 粒子 ShaderMaterial：自定义 vertex（curl-noise 流场位移 + 滚动推进 + 鼠标视差）+ fragment（软圆 additive 发光 + 白→淡紫粉主体 + 信号束玫红过渡）
- FogExp2 远处淡入背景色

### 全局常驻（`src/App.tsx`）
- 3D canvas 在 App 级 fixed 挂载（`useExperience`），所有路由共享同一粒子场，切页不卸载/不重建——背景连续，视觉"切换时一样"
- 内容层 `.app-shell`（z-1）在 canvas（z-0）之上；路由 `<div key={pathname} className="page-transition">` 触发淡入
- 内页用 `rgba(10,14,31,0.7)` 轻遮罩让 3D 透出（~30% bleed），不挡文字可读性

### 滚动驱动
- 原生 scroll 事件 + lerp（0.08）平滑 → `uScroll` uniform 与 camera z
- 不用 background-position / layout 属性动画；3D 只动 transform（合成器）与 uniform

### 性能分级
- 桌面 30000 粒子，移动端 12000，reduced-motion 6000 且静止渲染单帧
- `uPixelRatio` 上限 2

### Named Rules
**The Reduced-Motion Rule.** 所有 3D 与动效必须降级：`matchMedia('(prefers-reduced-motion: reduce)')` 命中时不推进时间、不绑鼠标监听、渲染单帧静态。CSS 层额外兜底（关闭 transition / 动画）。

**The Procedural-First Rule.** 3D 几何与运动一律过程化生成（shader / Three.js 原生），不导入外部 glb/gltf 模型资产。保证零版权风险、原创性、轻体积。

**The Global 3D Rule.** 3D canvas 全局挂在 `App.tsx`（`useExperience`），所有页面共享，切页不卸载。内页必须用半透明遮罩（`rgba(10,14,31,~0.7)`）让 3D 透出 ~30%，禁止不透明背景挡住 canvas。

## 5. Components

### 3D Canvas 背景
- `position: fixed; inset: 0; z-index: 0; pointer-events: none`
- 内容层 `z-index: 1` 在上滚动

### 顶部固定导航
- logo「TangTang」+ Navigation（pill 形，移动端汉堡）
- `pointer-events: none` 容器，子元素 auto

### 滚动叙事 Sections
- Hero（100vh）：kicker + 大名字（冷调渐变文字）+ hitokoto + scroll hint
- Signal（100vh）：编号 + 标题 + 介绍 + tech tags + Avatar
- Nav Gate（100vh）：3 张入口卡片

### Nav Gate 卡片（mask 渐变描边）
- `mask-composite: exclude` 做 1px 渐变描边，无 box-shadow（flat）
- hover：边框提亮 + 背景填充 + 微位移

### 入场动画（iUp）
- 内容元素 `.iUp` → `.up` 级联淡入（300ms 延迟 + 150ms stagger）
- reduced-motion 降级为瞬显

### ⌘K 命令面板
- 全局挂载，ARIA combobox + 焦点陷阱，详见 `src/components/CommandPalette/`

## 6. Do's and Don'ts

### Do:
- **Do** 过程化生成所有 3D（shader + Three.js 原生），不导入模型
- **Do** 保持 Phoenix Rose 为每屏唯一信号（信号束 / nav 圆点 / avatar ring / focus）
- **Do** 全局挂载 3D canvas 在 App.tsx，切页不卸载；内页半透明遮罩透出 3D
- **Do** 为所有 3D 与动效提供 prefers-reduced-motion 降级
- **Do** 移动端 / 触屏降级粒子数与关闭鼠标视差
- **Do** 用 mask-composite 做渐变描边，替代 box-shadow
- **Do** 3D 动画只用 transform / uniform，不动画 layout 属性

### Don't:
- **Don't** 导入外部受版权的 3D 模型 / shader / 字体
- **Don't** 在 UI 文字、卡片、badge 上使用玫红（玫红专属 3D 信号束 / nav 圆点 / avatar ring / focus）
- **Don't** 用白底/浅色背景——所有页面深蓝紫底
- **Don't** 给内页不透明背景挡住全局 3D canvas——必须半透明遮罩透出
- **Don't** 在导航或标题使用 monospace 字体
- **Don't** 省略 reduced-motion 降级
- **Don't** 搬运别家作品的 bundle 或资产——手法可学，资产必须原创（凤凰配色氛围可学，3D 资产必须原创）
