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
  approach: "过程化水晶体（IcosahedronGeometry + MeshPhysicalMaterial 透射）+ Bloom 后处理 + 远处微尘，不导入外部 3D 模型（零版权风险、体积轻）"
  signature: "过程化水晶体 + Bloom 辉光 + 滚动视差穿越 + 信号水晶玫红脉冲"
---

# Design System: TangTang Homepage

## 1. Overview

**Creative North Star: "Phoenix Rose · 代码即艺术"**

这个系统以 3D 过程化视觉表达「代码即艺术」。几何由 Three.js 原生 `IcosahedronGeometry` 生成、材质用 `MeshPhysicalMaterial` 透射（玻璃水晶体）——不导入任何外部 3D 模型。大小悬殊的水晶体在 Bloom 辉光中悬浮、漂移、呼吸；其中一颗玫红「信号水晶」脉冲发光，作为深蓝紫宇宙里的唯一高饱和信号。

视觉语言：深蓝紫宇宙背景（`#0a0e1f`）吸收注意力，把内容推向更深处；粉白（白→淡紫粉 `#eabdf6`）水晶体作为主体，Phoenix Rose `#fb5959` 作为每屏唯一的信号色。3D canvas 全局挂在 `App.tsx`，所有页面共享同一水晶场，切页不卸载——背景常驻连续，内容层在其上淡入滚动。每一处效果都因过程化生成而属于这个站本身，而非搬运的美术资产。

这个系统拒绝搬运别家作品：不导入受版权的 glb 模型、不复用他站 shader、不堆砌现成材质。所有 3D 从零写起，追求精确与原创。（配色氛围灵感取自 Noomo Storytelling 的「凤凰」，但全部资产原创。）

**Key Characteristics:**
- 深蓝紫全屏 3D 背景（过程化水晶体，无外部模型），全局常驻 `App.tsx`，切页不卸载
- Single accent color（Phoenix Rose `#fb5959`）作为信号水晶，每屏最多一处
- 白→淡紫粉水晶主体，透射 + Bloom 辉光；violet `#6248a4` 辅助光晕
- 滚动驱动相机推进 + 水晶视差穿越（lerp 平滑）
- 路由切换：3D 不动，内容层 translateY+opacity 淡入（page-enter）
- Monospace 仅用于技术元数据（标签、编号、出处）
- 全部动效提供 prefers-reduced-motion 降级；触屏/移动端自动降级水晶/微尘数与关闭鼠标视差

## 2. Colors

深蓝紫底 + 一个高饱和品牌信号色 + 粉白水晶主体 + 紫辅助光晕。

### Primary
- **Phoenix Rose** (`#fb5959`)：唯一饱和信号色。作为 3D「信号水晶」出现（一颗玫红 emissive 水晶体脉冲发光），以及导航 active 圆点、avatar ring、focus 环。每屏最多一处可见（UI 文字 / badge / 卡片边框不用）。

### Neutral
- **Deep Space** (`#0a0e1f`)：背景。canvas 透明，由根容器填此色；内页用 `rgba(10,14,31,0.7)` 轻遮罩让 3D 透出。
- **Pure White** (`#ffffff`)：显示文字、hero 名字。
- **Soft White** (`rgba(255,255,255,0.72)`)：正文。
- **Ghost White** (`rgba(255,255,255,0.42)`)：mono 标签、caption。

### Secondary
- **Phoenix Violet** (`#6248a4`)：辅助光晕（径向背景、travel/tech 分类色），非信号色。

### Crystal Palette
- **Pink Gradient**：水晶主体 tint `#ffffff → #fdebfd → #eabdf6`（白到淡紫粉），`MeshPhysicalMaterial` 透射 + `attenuationColor` 让玻璃体在深蓝紫上发粉白光，叠加 Bloom 辉光。
- **Signal Crystal**：玫红 `#fb5959` 水晶体（emissive 脉冲），大小悬殊成节奏里唯一高饱和点，滚动穿越时可见。

### Named Rules
**The One Signal Rule.** Phoenix Rose `#fb5959` 在任意时刻的可见屏幕上最多出现一处。3D 信号水晶是主要承载；UI 文字、badge、卡片边框不使用玫红。导航 active 圆点、avatar ring 与信号水晶不会同时成为视觉焦点（信号水晶随滚动出现，圆点 / ring 常驻但极小）。

## 3. Typography

- **Display / Body**：PingFang SC（CJK 优先）
- **Mono**：SF Mono / Fira Code / Source Code Pro，仅用于技术元数据（kicker、section 编号、tech tags、出处、⌘K 提示）。不进导航文字、标题正文。

### Named Rules
**The Mono Boundary Rule.** Mono 字族专用于技术元数据，永不进导航或正文标题。

## 4. Motion & 3D

### 3D 主控（`src/webgl/Experience.ts`）
- WebGLRenderer（alpha 透明、antialias、DPR 上限 2、ACESFilmicToneMapping），背景色 `#0a0e1f`
- PerspectiveCamera，滚动推进 z（18 → 4），鼠标视差偏移
- 水晶体：`IcosahedronGeometry`（detail 0/1）+ `MeshPhysicalMaterial`（transmission 0.94、ior 1.5、iridescence、clearcoat、`attenuationColor`）；`RoomEnvironment` + `PMREMGenerator` 程序化 envMap（透射折射必需）；8 颗（移动 6）—— 2 大主体 + 小点缀 + 1 信号水晶（玫红 emissive 脉冲）
- 远处微尘：`THREE.Points` 少量尘点补纵深（非主体，不抢戏）
- `FogExp2` 远处淡入背景色
- 后处理：`EffectComposer` + `RenderPass` + `UnrealBloomPass`（温和辉光，threshold 0.25 只让高亮发光）+ `OutputPass`

### 全局常驻（`src/App.tsx`）
- 3D canvas 在 App 级 fixed 挂载（`useExperience`），所有路由共享同一水晶场，切页不卸载/不重建——背景连续，视觉"切换时一样"
- 内容层 `.app-shell`（z-1）在 canvas（z-0）之上；路由 `<div key={pathname} className="page-transition">` 触发淡入
- 内页用 `rgba(10,14,31,0.7)` 轻遮罩让 3D 透出（~30% bleed），不挡文字可读性

### 滚动驱动
- 原生 scroll 事件 + lerp（0.08）平滑 → camera z 推进 + 各水晶 z 视差位移（近快远慢，`parallax` 系数）
- 不用 background-position / layout 属性动画；3D 只动 transform（合成器）与 uniform

### 性能分级
- 桌面 8 颗水晶 + 600 微尘，移动端 6 颗 + 300 微尘；reduced-motion 静止渲染单帧（`renderOnce`）
- `setPixelRatio` 上限 2；Bloom 后处理 `UnrealBloomPass`

### Named Rules
**The Reduced-Motion Rule.** 所有 3D 与动效必须降级：`matchMedia('(prefers-reduced-motion: reduce)')` 命中时不推进时间、不绑鼠标监听、渲染单帧静态（`renderOnce`）。CSS 层额外兜底（关闭 transition / 动画）。

**The Procedural-First Rule.** 3D 几何与运动一律过程化生成（Three.js 原生 Material + Bloom 后处理），不导入外部 glb/gltf 模型资产。保证零版权风险、原创性、轻体积。

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
- **Do** 过程化生成所有 3D（Three.js 原生 Material + Bloom 后处理），不导入模型
- **Do** 保持 Phoenix Rose 为每屏唯一信号（信号水晶 / nav 圆点 / avatar ring / focus）
- **Do** 全局挂载 3D canvas 在 App.tsx，切页不卸载；内页半透明遮罩透出 3D
- **Do** 为所有 3D 与动效提供 prefers-reduced-motion 降级
- **Do** 移动端 / 触屏降级水晶/微尘数与关闭鼠标视差
- **Do** 用 mask-composite 做渐变描边，替代 box-shadow
- **Do** 3D 动画只用 transform / opacity（CSS）+ mesh 变换（JS），不动画 layout 属性

### Don't:
- **Don't** 导入外部受版权的 3D 模型 / shader / 字体
- **Don't** 在 UI 文字、卡片、badge 上使用玫红（玫红专属 3D 信号水晶 / nav 圆点 / avatar ring / focus）。注：note-detail__more「展开全部」按钮当前用玫红，属已知张力，后续统一
- **Don't** 用白底/浅色背景——所有页面深蓝紫底
- **Don't** 给内页不透明背景挡住全局 3D canvas——必须半透明遮罩透出
- **Don't** 在导航或标题使用 monospace 字体
- **Don't** 省略 reduced-motion 降级
- **Don't** 搬运别家作品的 bundle 或资产——手法可学，资产必须原创（凤凰配色氛围可学，3D 资产必须原创）
