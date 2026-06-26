# Tang-Space — Claude Code 指南

TangTang（唐睿阳）的个人品牌主页。React 18 + TypeScript + Vite 6 + react-router-dom v7，部署在 GitHub Pages 项目页 `/Tang-Space/`。

## 必读文档（动手前先读）
- `.agents/context/agents.md` — 完整项目规则与结构（权威）
- `PRODUCT.md` — 品牌意图
- `DESIGN.md` — 设计系统与 Named Rules
- `docs/notes-guide.md` — Notes 内容写作指南

## 铁律（违反会破坏线上可用性或设计一致性）

1. **禁止** 在 `main.tsx` 恢复 `<StrictMode>` —— 会导致 iUp 入场动画双重执行失效
2. **部署传已构建的 `dist/`**：`.github/workflows/deploy.yml` 直接上传 `dist/`，CI 不重新 build。改完代码必须本地 `npm run build` 再提交 `dist/`，否则线上不更新
3. **不要手删 `dist/404.html`**：SPA fallback——它是 `index.html` 的副本，由 `vite.config.ts` 的 `spa-404-fallback` 插件在 build 时自动生成。GitHub Pages 对找不到的路径回退到它，刷新内页（`/about`、`/notes/xxx`）才不会 404
4. **图片路径用绝对前缀** `/Tang-Space/assets/...`（参考 `src/data/notes.ts` 的 `lifeImages`），不要用相对 `./assets/...`——嵌套路由（`/notes/xxx`）下相对路径会 404
5. **Kuaishou Orange `#ff4906` 每页最多一处**；所有页面深色背景，禁止白底
6. **等宽字体只用于技术元数据**（标签、出处 `—「source」`），不进导航/标题/正文
7. **壁纸** 来自 `bing.biturl.top` API + `sessionStorage` 轮播（`useBingBg`），无本地静态图、无 GitHub Actions 抓取
8. **`/blog/*` 重定向到 `/notes/*`**，导航统一用 `/notes`
9. **任何动画都要 `prefers-reduced-motion` 降级**

## 工作方式
- 用户开 ultracode：exhaustive 正确优先，substantive 任务用 workflow 多视角审视 + 对抗验证
- 发现新的非显然规则，主动追加进 `.agents/context/agents.md` 和本文件
- 设计决策遵循 DESIGN.md 北极星 "The Engineer's Signal"（克制的科技美学）
