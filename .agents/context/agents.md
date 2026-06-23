# TangTang Homepage — Agent Context

## 关于这个项目

这是 **TangTang（唐睿阳）** 的个人品牌主页，部署在 GitHub Pages。
GitHub 用户名：`florencemalis0-ui`
快手（Kuaishou）工程师，方向：AI · Go · Python · Backend · Cloud Native。

## 技术栈

- **框架：** React 18 + TypeScript + Vite 6
- **路由：** react-router-dom v6（BrowserRouter）
- **样式：** CSS Modules + 全局 CSS（`src/index.css`）
- **构建：** `npm run build` → `dist/`，部署到 GitHub Pages
- **壁纸：** 本地静态图片，放在 `public/assets/img/bg/` 目录下，`useBingBg` hook 轮播读取
- **自动化：** GitHub Actions（`.github/workflows/auto-bing.yml`）已废弃，保留文件但不再使用

## 项目结构

```
Tang-Space/
├── src/
│   ├── App.tsx              # 路由入口 + Home 组件
│   ├── main.tsx             # BrowserRouter 包裹（无 StrictMode！）
│   ├── index.css            # 全局样式（iUp 动画、avatar 动画）
│   ├── components/
│   │   ├── Avatar/          # 3D 翻转头像，点击触发微信弹窗
│   │   ├── Navigation/      # 导航栏（Link 路由跳转）
│   │   └── WeChatModal/     # 微信二维码弹窗
│   ├── hooks/
│   │   ├── useBingBg.ts     # Bing 壁纸背景
│   │   ├── useHitokoto.ts   # 一言 API
│   │   └── useIUp.ts        # 入场动画
│   └── pages/
│       ├── Blog/            # 博客页（占位）
│       ├── Resume/          # 简历页（占位）
│       └── About/           # 关于页（占位）
├── public/
│   └── assets/
│       ├── css/             # vno.css, iconfont.css, onlinewebfonts.css
│       ├── img/             # wechat.jpg 等
│       └── json/images.js   # 壁纸 URL 列表（已废弃，改用本地图片）
├── scripts/
│   └── bing.js              # Bing 壁纸抓取脚本（由 GitHub Actions 调用）
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
- 背景：Deep Space `#1a1a2e`（内页固定背景）
- 文字：Pure White `#ffffff` → Soft White `rgba(255,255,255,0.75)` → Ghost White `rgba(255,255,255,0.45)`

**字体：**
- 主字体：ff-tisa-web-pro（有 CJK 支持）
- Mono：Source Code Pro（仅用于技术标签/引用，不用于导航和正文标题）

**动效：**
- iUp 入场：初始延迟 300ms，每元素 150ms 级联
- 缓动：`cubic-bezier(0.25, 1, 0.5, 1)`
- 必须提供 `prefers-reduced-motion` 降级

## 重要规则（每次修改必读）

1. **禁止** 在 `main.tsx` 中恢复 `<StrictMode>` —— 会导致 iUp 动画双重执行失效
2. **禁止** 白色/浅色背景——所有页面必须使用深色
3. **Kuaishou Orange 每页最多出现一次**
4. **头像点击** 触发微信弹窗（不是博客按钮）
5. **博客/简历/关于** 按钮是 react-router-dom `<Link>` 路由跳转
6. **壁纸** 来自 `public/assets/json/images.js`（GitHub Actions 每日更新），不在本地存图
7. **头像 URL：** `https://avatars.githubusercontent.com/florencemalis0-ui`

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

- [ ] 首页全面改造（更强的视觉冲击力，快手元素融入）
- [ ] 博客页实现（文章列表或链接聚合）
- [ ] 简历页实现（技术栈展示、工作经历）
- [ ] 关于页实现（个人介绍、联系方式）
- [ ] 壁纸策略优化（考虑每日固定一张还是继续轮播）
