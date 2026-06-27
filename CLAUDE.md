# Tang-Space — Claude Code 指南

TangTang（唐睿阳）的个人品牌主页。React 18 + TypeScript + Vite 6 + react-router-dom v7，部署在 GitHub Pages 项目页 `/Tang-Space/`。全局 Three.js 3D 过程化视觉（过程化水晶体 + Bloom 后处理 + 远处微尘），凤凰粉白配色。

## 必读文档（动手前先读）
- `.agents/context/agents.md` — 完整项目规则与结构（权威）
- `PRODUCT.md` — 品牌意图
- `DESIGN.md` — 设计系统（3D 过程化视觉）与 Named Rules
- `docs/notes-guide.md` — Notes 内容写作指南

## 铁律（违反会破坏线上可用性、设计一致性或版权合规）

1. **禁止** 在 `main.tsx` 恢复 `<StrictMode>` —— 会导致 iUp 入场动画双重执行失效
2. **部署传已构建的 `dist/`**：`.github/workflows/deploy.yml` 直接上传 `dist/`，CI 不重新 build。改完代码必须本地 `npm run build` 再提交 `dist/`，否则线上不更新
3. **不要手删 `dist/404.html`**：SPA fallback——它是 `index.html` 的副本，由 `vite.config.ts` 的 `spa-404-fallback` 插件在 build 时自动生成。刷新内页（`/about`、`/notes/xxx`）才不会 404
4. **图片路径用绝对前缀** `/Tang-Space/assets/...`（参考 `src/data/notes.ts` 的 `lifeImages`），不要用相对 `./assets/...`——嵌套路由（`/notes/xxx`）下相对路径会 404
5. **One Signal Rule**：Phoenix Rose `#fb5959` 每屏最多一处。现承载为 3D 信号水晶（玫红 emissive 晶体）+ 导航 active 圆点 + avatar ring + focus；UI 文字/卡片/badge 不用玫红。所有页面深蓝紫底（`#0a0e1f`），禁止白底
6. **3D 过程化优先 + 全局常驻**：3D 视觉用 Three.js 过程化生成（`IcosahedronGeometry` + `MeshPhysicalMaterial` 透射 + `RoomEnvironment` 程序化 envMap + `UnrealBloomPass` 后处理），**禁止导入外部 glb/gltf 模型、禁止复用他站 shader/bundle**。手法可学，资产必须原创（零版权风险）。3D canvas 全局挂在 `App.tsx`（`useExperience`），所有页面共享，切页不卸载；内页用 `rgba(10,14,31,0.7)` 半透明遮罩透出 3D，禁止不透明背景挡住 canvas
7. **等宽字体只用于技术元数据**（标签、编号、出处 `—「source」`、⌘K 提示），不进导航/标题/正文
8. **任何动效/3D 都要 `prefers-reduced-motion` 降级**：JS `matchMedia` 闸门 + CSS 兜底；触屏 `pointer: coarse` 关闭鼠标视差；移动端降级水晶/微尘数
9. **全局弹窗/面板用 CustomEvent 解耦**：WeChatModal 与 CommandPalette 全局挂在 `App.tsx`，触发用 `window.dispatchEvent(new CustomEvent('tang:open-wechat' | 'tang:open-cmdk'))`
10. **新动效三件套**：只用 `transform`/`opacity`（禁动 layout 属性），reduced-motion 降级，触屏关指针增强
11. **`/blog/*` 重定向到 `/notes/*`**，导航统一用 `/notes`

## 工作方式
- 用户开 ultracode：exhaustive 正确优先，substantive 任务用 workflow 多视角审视 + 对抗验证
- 发现新的非显然规则，主动追加进 `.agents/context/agents.md` 和本文件
- 设计决策遵循 DESIGN.md 北极星 "The Engineer's Signal · Phoenix Rose"（3D 过程化，代码即艺术）
- **个人板块要真实数据，不编占位**（如 Now/简历），宁可留空加 TODO 也不编造个人状态
