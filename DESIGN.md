---
name: TangTang Homepage
description: TangTang 的个人品牌主页 — 3D 过程化视觉，代码即艺术
colors:
  bg-dark: "#0d0d1a"
  ink-deep: "#ffffff"
  ink-secondary: "rgba(255,255,255,0.72)"
  ink-muted: "rgba(255,255,255,0.42)"
  kuaishou-orange: "#FF4906"
  particle-cool: "linear-gradient(180deg,#ffffff 0%,#e3f0ff 65%,#b8c8e8 100%)"
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

**Creative North Star: "The Engineer's Signal"**

这个系统以 3D 过程化视觉表达工程师的信号。所有几何与运动由 GLSL shader 原生生成——不导入任何外部 3D 模型，代码即艺术。粒子在 curl-noise 流场中流动，形成数据流/星河感；少数橙色粒子聚成「信号束」，作为深色宇宙里的唯一高饱和信号。

视觉语言：深色宇宙背景吸收注意力，冷调（白→淡蓝）粒子作为主体，Kuaishou Orange 作为每屏唯一的信号色。滚动驱动相机穿越粒子场，文字叙事层在上层滚动。每一处效果都因过程化生成而属于这个站本身，而非搬运的美术资产。

这个系统拒绝搬运别家作品：不导入受版权的 glb 模型、不复用他站 shader、不堆砌现成材质。所有 3D 从零写起，追求精确与原创。

**Key Characteristics:**
- 深色全屏 3D 背景（过程化粒子流场，无外部模型）
- Single accent color（Kuaishou orange）作为信号束，每屏最多一处
- 白→淡蓝冷调粒子主体，additive 发光
- 滚动驱动相机与粒子演化（lerp 平滑）
- Monospace 仅用于技术元数据（标签、编号、出处）
- 全部动效提供 prefers-reduced-motion 降级；触屏/移动端自动降级粒子数与关闭鼠标视差

## 2. Colors

近单色深色系统 + 一个高饱和品牌信号色 + 冷调粒子主体。

### Primary
- **Kuaishou Orange** (`#FF4906`)：唯一饱和信号色。作为 3D 粒子「信号束」出现（shader 内 ~6% 粒子向橙过渡），以及导航 active 圆点。每屏最多一处可见。

### Neutral
- **Deep Space** (`#0d0d1a`)：背景。canvas 透明，由根容器填此色。
- **Pure White** (`#ffffff`)：显示文字、hero 名字。
- **Soft White** (`rgba(255,255,255,0.72)`)：正文。
- **Ghost White** (`rgba(255,255,255,0.42)`)：mono 标签、caption。

### Particle Palette
- **Cool Gradient**：粒子主体 `#ffffff → #e3f0ff → #b8c8e8`（白到淡蓝），additive 混合在深色上发冷光。
- **Signal Beam**：橙色粒子束，沿斜带分布，滚动穿越时可见。

### Named Rules
**The One Signal Rule.** Kuaishou orange 在任意时刻的可见屏幕上最多出现一处。3D 信号束是主要承载；UI 文字与卡片不使用橙。导航 active 圆点与信号束不会同时成为视觉焦点（信号束随滚动出现，圆点常驻但极小）。

## 3. Typography

- **Display / Body**：PingFang SC（CJK 优先）
- **Mono**：SF Mono / Fira Code / Source Code Pro，仅用于技术元数据（kicker、section 编号、tech tags、出处、⌘K 提示）。不进导航文字、标题正文。

### Named Rules
**The Mono Boundary Rule.** Mono 字族专用于技术元数据，永不进导航或正文标题。

## 4. Motion & 3D

### 3D 主控（`src/webgl/Experience.ts`）
- WebGLRenderer（alpha 透明、antialias、DPR 上限 2）
- PerspectiveCamera，滚动推进 z（18 → 4），鼠标视差偏移
- 粒子 ShaderMaterial：自定义 vertex（curl-noise 流场位移 + 滚动推进 + 鼠标视差）+ fragment（软圆 additive 发光 + 信号束橙色过渡）
- FogExp2 远处淡入背景色

### 滚动驱动
- 原生 scroll 事件 + lerp（0.08）平滑 → `uScroll` uniform 与 camera z
- 不用 background-position / layout 属性动画；3D 只动 transform（合成器）与 uniform

### 性能分级
- 桌面 30000 粒子，移动端 12000，reduced-motion 6000 且静止渲染单帧
- `uPixelRatio` 上限 2

### Named Rules
**The Reduced-Motion Rule.** 所有 3D 与动效必须降级：`matchMedia('(prefers-reduced-motion: reduce)')` 命中时不推进时间、不绑鼠标监听、渲染单帧静态。CSS 层额外兜底（关闭 transition / 动画）。

**The Procedural-First Rule.** 3D 几何与运动一律过程化生成（shader / Three.js 原生），不导入外部 glb/gltf 模型资产。保证零版权风险、原创性、轻体积。

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
- **Do** 保持橙色为每屏唯一信号（信号束 / nav 圆点）
- **Do** 为所有 3D 与动效提供 prefers-reduced-motion 降级
- **Do** 移动端 / 触屏降级粒子数与关闭鼠标视差
- **Do** 用 mask-composite 做渐变描边，替代 box-shadow
- **Do** 3D 动画只用 transform / uniform，不动画 layout 属性

### Don't:
- **Don't** 导入外部受版权的 3D 模型 / shader / 字体
- **Don't** 在 UI 文字、卡片上使用橙色（橙专属 3D 信号束）
- **Don't** 用白底/浅色背景——所有页面深色
- **Don't** 在导航或标题使用 monospace 字体
- **Don't** 省略 reduced-motion 降级
- **Don't** 搬运别家作品的 bundle 或资产——手法可学，资产必须原创
