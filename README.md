<div align="center">

# TangTang · Tang-Space

### Phoenix Rose · Code as Art

A personal brand site built as procedural 3D art — refraction crystals, Bloom glow,
scroll-driven parallax, all hand-written with Three.js. No imported models, no
borrowed assets. The code *is* the artwork.

一个以「过程化 3D 视觉」承载的个人品牌主页 —— 折射水晶、Bloom 辉光、滚动视差穿越，
全部 Three.js 自写，不导入任何外部模型，不搬运他人资产。**代码即艺术**。

[![Live Site](https://img.shields.io/badge/Live-tangtang-0a0e1f?style=flat-square&labelColor=fb5959)](https://florencemalis0-ui.github.io/Tang-Space/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0a0e1f?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18-0a0e1f?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-0a0e1f?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0a0e1f?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-0a0e1f?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

> **TangTang（唐睿阳）** — Engineer at Kuaishou. AI · Go · Python · Backend · Cloud Native.
> This is where code meets craft: every visual is generated, not imported.

## ✨ Features / 特性

| | Feature | 特性 |
|---|---|---|
| 🪟 | **Procedural 3D Crystals** — `IcosahedronGeometry` + `MeshPhysicalMaterial` (transmission / iridescence / clearcoat) refracting a procedural `RoomEnvironment` envMap | **过程化水晶体** — 透射 / 虹彩 / 清漆玻璃材质，折射程序化环境光 |
| ✨ | **Bloom Postprocessing** — `UnrealBloomPass` glow on crystal edges + the single rose signal crystal | **Bloom 辉光后处理** — 水晶边缘与玫红信号晶体发光 |
| 🌌 | **Layered Atmosphere** — mid-ground dust + far-field star points with parallax depth | **分层气韵** — 中近景微尘 + 远景星河，视差纵深 |
| 📜 | **Scroll Narrative** — camera dolly + per-crystal parallax through hero → signal → explore | **滚动叙事** — 相机推进 + 逐水晶视差穿越三屏 |
| 🧭 | **Global 3D Canvas** — mounted at `App.tsx`, shared across routes, never unmounts on navigation | **全局 3D 画布** — App 级挂载，路由共享，切页不卸载 |
| ⌨️ | **⌘K Command Palette** — global, ARIA combobox, focus trap | **⌘K 命令面板** — 全局，ARIA + 焦点陷阱 |
| 💬 | **Decoupled Modals** — WeChat / Cmd-K via `CustomEvent`, single source of truth | **解耦弹窗** — 微信 / 命令面板走 CustomEvent，单实例 |
| 📱 | **Adaptive Degradation** — `prefers-reduced-motion` freeze + `pointer: coarse` parallax off + mobile particle cull | **自适应降级** — 减动效静止 + 触屏关视差 + 移动端减粒 |

## 🎨 Design System / 设计系统

**North Star · 北极星：** *Phoenix Rose · Code as Art* — 凤凰玫瑰 · 代码即艺术

| Token | Hex | Role / 角色 |
|---|---|---|
| Phoenix Rose | `#fb5959` | The One Signal — single saturated accent per screen / 唯一饱和信号色，每屏最多一处 |
| Phoenix Violet | `#6248a4` | Secondary glow, category accent / 辅助光晕、分类色 |
| Pink Gradient | `#ffffff → #fdebfd → #eabdf6` | Crystal tint body / 水晶主体 tint |
| Deep Space | `#0a0e1f` | Cosmos background / 宇宙底色 |

**Named Rules / 命名规则** — see [`DESIGN.md`](DESIGN.md):
- **The One Signal Rule** — Phoenix Rose appears on at most one sanctioned element per screen.
- **The Procedural-First Rule** — all 3D geometry & motion procedurally generated; no external `glb`/`gltf`.
- **The Global 3D Rule** — canvas mounted once in `App.tsx`, shared by all routes; inner pages use translucent veils, never opaque.
- **The Reduced-Motion Rule** — every 3D effect & animation degrades gracefully.

## 🧱 Tech Stack / 技术栈

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 (manual vendor chunks for `three` / `gsap`) |
| Routing | react-router-dom v7 (`/notes` primary, `/blog/*` → `/notes/*` redirect) |
| 3D / WebGL | Three.js — `MeshPhysicalMaterial`, `PMREMGenerator`, `EffectComposer`, `UnrealBloomPass` |
| Styling | CSS Modules + global tokens (`src/index.css`) |
| Deploy | GitHub Pages (built `dist/` uploaded by workflow, CI does not rebuild) |

## 📁 Project Structure / 项目结构

```
src/
├── App.tsx                 # Routes + global 3D canvas + decoupled modals
├── main.tsx                # BrowserRouter (no StrictMode — iUp animation)
├── index.css               # Design tokens + global styles
├── webgl/                  # Procedural 3D
│   ├── Experience.ts       #   renderer / crystals / dust / Bloom / loop
│   └── useExperience.ts    #   scroll + mouse + degradation + cleanup
├── components/             # Avatar / Navigation / WeChatModal / CommandPalette
├── hooks/                  # useHitokoto / useIUp / useTilt / useBlurUp
├── data/                   # notes.ts / contacts.ts
├── utils/                  # email.ts (Base64 decode)
└── pages/                  # Home / Blog / NoteDetail / About / Resume
```

## 🚀 Getting Started / 本地开发

```bash
# Install / 安装
npm install

# Dev server / 开发
npm run dev

# Production build / 生产构建
npm run build
```

## 📦 Deploy / 部署

Production deploys the **pre-built** `dist/`. The workflow (`.github/workflows/deploy.yml`)
uploads `dist/` directly on push to `main` — **CI does not rebuild**. So after any code
change, run `npm run build` locally and commit `dist/` together, or the live site won't update.

> `dist/404.html` is an `index.html` copy auto-generated by Vite's `spa-404-fallback`
> plugin — GitHub Pages uses it for SPA routing on deep links (`/about`, `/notes/xxx`).
> Don't delete it manually.

## 📝 Docs / 文档

- [`CLAUDE.md`](CLAUDE.md) — Claude Code guide + iron rules / Claude Code 指南与铁律
- [`.agents/context/agents.md`](.agents/context/agents.md) — Full project context + coding principles / 项目上下文与编码通则
- [`DESIGN.md`](DESIGN.md) — Design system & named rules / 设计系统与命名规则
- [`PRODUCT.md`](PRODUCT.md) — Brand intent / 品牌意图

## 📄 License / 许可

[MIT](LICENSE) © TangTang

---

<div align="center">

<sub>Built with ♥ by TangTang · Procedural 3D, zero borrowed assets.</sub>
<sub>凤凰粉白 · 代码即艺术</sub>

</div>
