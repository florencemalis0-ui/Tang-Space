# TangTang Homepage — Agent Context

## 关于这个项目

这是 **TangTang（唐睿阳）** 的个人品牌主页，部署在 GitHub Pages。
GitHub 用户名：`florencemalis0-ui`
快手（Kuaishou）工程师，方向：AI · Go · Python · Backend · Cloud Native。

## 技术栈

- **框架：** React 18 + TypeScript + Vite 6
- **路由：** react-router-dom v7（`BrowserRouter`，`basename=import.meta.env.BASE_URL`）。`/notes` 是主路由，`/blog/*` 重定向到 `/notes/*` 兼容旧链接。
- **样式：** CSS Modules + 全局 CSS（`src/index.css`）
- **构建：** `npm run build` → `dist/`，部署到 GitHub Pages
- **壁纸：** `useBingBg` 调用 `bing.biturl.top` 镜像 API 取最近 8 张 Bing 壁纸，`sessionStorage` 记录 index，每次刷新 +1 轮播（无 GitHub Actions、无本地静态图）
- **部署自动化：** `.github/workflows/deploy.yml` 在 push 到 main 时直接上传已构建的 `dist/`（CI 不重新 build）

## 项目结构

```
Tang-Space/
├── src/
│   ├── App.tsx              # 路由（/notes 主路由，/blog/* 重定向到 /notes）
│   ├── main.tsx             # BrowserRouter 包裹（无 StrictMode！）
│   ├── index.css            # 全局设计 token + iUp 动画 + 内页样式
│   ├── components/
│   │   ├── Avatar/          # 头像（hover 浮现「Be Brave」，点击弹微信二维码）
│   │   ├── Navigation/      # 首页导航（pill 形，移动端汉堡菜单）
│   │   └── WeChatModal/     # 微信二维码弹窗
│   ├── hooks/
│   │   ├── useBingBg.ts     # Bing 壁纸（bing.biturl.top + sessionStorage 轮播）
│   │   ├── useHitokoto.ts   # 一言 API
│   │   └── useIUp.ts        # 入场错落动画
│   ├── data/
│   │   └── notes.ts         # 记录内容（硬编码数组，id 即详情页地址）
│   ├── utils/
│   │   └── email.ts         # Base64 邮箱解码
│   └── pages/
│       ├── Home/            # 首页（全屏壁纸 + hero）
│       ├── Blog/            # /notes 列表（时间轴 + 分类筛选，已实现）
│       ├── NoteDetail/      # /notes/:id 详情（图库 + lightbox，已实现）
│       ├── About/           # /about（journal 双栏，已实现）
│       └── Resume/          # /resume（占位）
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── life/        # 旅行/生活照片（notes.ts 的 lifeImages 引用）
│   │       └── wechat.jpg   # 微信二维码
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── docs/
│   └── notes-guide.md       # 记录内容写作指南
├── PRODUCT.md               # 品牌战略文档
├── DESIGN.md                # 视觉设计系统文档
├── .impeccable/
│   └── design.json          # 设计系统 sidecar（impeccable live 用）
└── .agents/
    ├── skills/impeccable/   # Impeccable UI skill
    └── context/             # 本文件所在目录
```

## 设计系统速查

**设计北极星：** "The Engineer's Signal"（工程师的信号）

**品牌色：**
- 主色：Kuaishou Orange `#FF4906`（每页最多一处使用）
- 辅助：Signal Blue `#4e97d8`（链接、次级高亮）
- 背景：Deep Space `#1a1a2e`（仅 Resume 页纯色；Blog/About/NoteDetail 用 Bing 壁纸 + 遮罩）
- 文字：Pure White `#ffffff` → Soft White `rgba(255,255,255,0.72)` → Ghost White `rgba(255,255,255,0.42)`

**字体：**
- 主字体：`PingFang SC` / `Hiragino Sans GB` / `Microsoft YaHei` / `-apple-system`（CJK 优先）
- Mono：`SF Mono` / `Fira Code` / `Source Code Pro` / `Consolas`（仅用于技术标签/出处，不用于导航和正文标题）

**动效：**
- iUp 入场：初始延迟 300ms，每元素 150ms 级联
- 缓动：`cubic-bezier(0.25, 1, 0.5, 1)`
- 必须提供 `prefers-reduced-motion` 降级

## 重要规则（每次修改必读）

1. **禁止** 在 `main.tsx` 中恢复 `<StrictMode>` —— 会导致 iUp 动画双重执行失效
2. **禁止** 白色/浅色背景——所有页面必须使用深色
3. **Kuaishou Orange 每页最多出现一次**
4. **头像点击** 触发微信弹窗（不是博客按钮）
5. **导航项**（记录/简历/关于）是 react-router-dom `<Link>` 路由跳转；内页用「← 返回首页」back-link
6. **壁纸** 来自 `bing.biturl.top` API（`useBingBg` hook，sessionStorage 轮播），不在本地存图，也没有 GitHub Actions 抓取
7. **头像 URL：** `https://avatars.githubusercontent.com/florencemalis0-ui`（带每日 cache-bust 参数）
8. **部署传已构建的 `dist/`**：CI 不重新 build（`.github/workflows/deploy.yml` 直接上传 dist/），改完代码必须本地 `npm run build` 再提交 `dist/`，否则线上不更新
9. **不要手删 `dist/404.html`**：它是 `index.html` 的副本，由 `vite.config.ts` 的 `spa-404-fallback` 插件自动生成。GitHub Pages 对找不到的路径回退到它，刷新内页（`/about`、`/notes/xxx`）不 404
10. **图片路径用绝对前缀** `/Tang-Space/assets/...`（如 `lifeImages`），不要用相对 `./assets/...`——嵌套路由（`/notes/xxx`）下相对路径会 404

## Impeccable Skill 使用方式

```bash
# 查看设计上下文
node .agents/skills/impeccable/scripts/context.mjs

# 常用命令（在 AI 对话中输入）
/impeccable polish 首页        # 打磨首页细节
/impeccable bolder             # 让设计更有冲击力
/impeccable colorize           # 加入快手品牌色
/impeccable craft 博客页        # 从零构建博客页
/impeccable critique           # 全页设计评分
/impeccable audit              # 无障碍/性能检查
```

## 待办事项

- [ ] 简历页实现（技术栈展示、工作经历）—— 目前唯一占位的主板块
- [ ] 持续丰富 Notes 内容（技术记录 / 生活照片 / 旅行 / 随想）
- [ ] 壁纸策略优化（考虑每日固定一张还是继续轮播）
