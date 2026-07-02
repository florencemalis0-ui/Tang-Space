# TangTang Homepage — Agent Context

## 编码通则（AGENTS.md · 写代码最权威）

> 通用 LLM 编码纪律（英文原文）。与下方「重要规则」项目专属铁律冲突时，**项目铁律优先**。文中 Python/REST/DB 例子为通用示意，本项目实际栈见下方「技术栈」。

AGENTS.md
This file exists because LLMs make predictable mistakes when writing code. Not random mistakes. The same ones, over and over. I've watched it happen enough times to write them down.
These are not suggestions. These are rules. Follow them and you'll produce code that doesn't need to be rewritten. Ignore them and you'll produce code that looks impressive and breaks in production.

### 1. Read Before You Write
The single biggest source of bad LLM code is not reading the existing codebase before writing new code. You see a task, you pattern-match to something in your training data, and you start generating. This is almost always wrong.

Before writing anything:
- Read the files you're about to modify. Not skim. Read.
- Look at how similar things are done elsewhere in the project. If there's a pattern for API routes, follow that pattern. If there's a utility function that does half of what you need, use it.
- Check the imports at the top of the file. They tell you what libraries this project actually uses. Don't introduce axios if the project uses fetch everywhere. Don't introduce lodash if the project uses native methods.
- Look at the test files. They tell you what the expected behavior actually is, not what you think it should be.

The failure mode here is obvious: you generate "correct" code that's completely alien to the codebase it lives in. It works but it looks like a different person wrote it (because a different entity did). The human then has to either rewrite it to match the project style or live with inconsistency forever. Both are bad.

If you're not sure how something is done in this project, say so. "I don't see a pattern for X in the codebase, should I follow the approach in Y or do something different?" is always better than guessing.

### 2. Think Before You Code
Don't start writing code until you've figured out what you're actually doing. This sounds obvious but it's the most common failure mode. What this looks like in practice:

**State your assumptions.** If the user says "add authentication" that could mean session cookies, JWTs, OAuth, basic auth, or five other things. Don't pick one silently. Say "I'm assuming you want JWT-based auth with refresh tokens, stored in HttpOnly cookies. If you want something different, let me know." If you're wrong, you've lost 10 seconds. If you silently guess wrong, you've lost an hour.

**Name the tradeoffs.** Almost every implementation choice has a tradeoff. If you're adding caching, say "this trades memory for speed and introduces cache invalidation as a thing we now have to think about." The user might say "actually I don't want that complexity." Better to know before you write 200 lines.

**If multiple approaches exist, present them briefly.** Not five. Two, maybe three. With a recommendation. "There are two ways to do this. Option A is simpler but doesn't handle edge case X. Option B handles everything but adds a dependency on Z. I'd go with A unless you expect X to actually happen."

**If something is confusing, stop.** Don't fill confusion with plausible-sounding code. The result of generating code when you don't understand the requirements is code that passes a casual review but fails when it matters. Just say what's confusing and ask.

### 3. Simplicity
Write the minimum amount of code that solves the problem. Not the minimum amount of code you can imagine theoretically solving the problem. The minimum amount that actually solves this specific problem right now.

The instinct to over-engineer is strong. Resist it. Here's what over-engineering looks like in practice:

**Premature abstraction.** You need to send one type of email. You write an EmailService class with a strategy pattern that supports multiple providers, template engines, and retry policies. The user wanted `send_welcome_email(user)`. Write that function. If they need more later, they'll ask.

```python
# bad: you wrote this
class EmailService:
    def __init__(self, provider: EmailProvider, template_engine: TemplateEngine):
        self.provider = provider
        self.template_engine = template_engine
    async def send(self, template: str, context: dict, recipient: str, **kwargs):
        rendered = self.template_engine.render(template, context)
        await self.provider.send(recipient, rendered, **kwargs)

# good: you should have written this
async def send_welcome_email(user):
    body = f"Welcome {user.name}! Your account is ready."
    await send_email(to=user.email, subject="Welcome", body=body)
```

**Speculative error handling.** You wrap everything in try/catch blocks for errors that can't happen. You validate inputs that come from your own code and are already validated upstream. You add null checks on values that are never null. Every line of error handling is a line someone has to read and understand. Only handle errors that can actually occur.

**Unnecessary configurability.** You make the batch size a parameter. You make the retry count configurable. You add environment variables for things that will never change. Configuration is not free. Every config option is a decision someone has to make and a value someone has to set correctly. Hardcode things until there's a real reason not to.

**Dead flexibility.** Interfaces with one implementation. Abstract base classes with one child. Generic type parameters that are only ever instantiated with one type. These things have a cost (cognitive overhead, indirection, more files to navigate) and zero benefit until a second implementation actually exists.

The test for simplicity: show your code to someone unfamiliar with the project. If they have to ask "why is this abstracted like this?" and the answer is "in case we need to..." then you've over-engineered it. "In case we need to" is not a requirement. It's a guess about the future, and guesses about the future are usually wrong.

### 4. Surgical Changes
When you edit existing code, your diff should be as small as possible. Every line you change is a line that could introduce a bug, a line someone has to review, and a line that shows up in git blame forever.

Rules:

**Don't touch what you weren't asked to touch.** If you're fixing a bug in function A and you notice function B has a weird variable name, leave it. If function C has a comment with a typo, leave it. If the import order doesn't match your preference, leave it. Your job is to fix the bug in function A.

**Match the existing style.** If the file uses single quotes, use single quotes. If the file uses 'snake_case', use 'snake_case'. If the file has no semicolons, don't add semicolons. If the file uses 'var' (yes, even in 2025), use 'var' in your additions unless the user asked you to modernize. Consistency within a file beats your personal preference.

**Clean up after yourself, not after others.** If your change makes an import unused, remove that import. If your change makes a variable unused, remove that variable. If your change makes a function unused, remove that function. But only if your change caused it. Pre-existing dead code is not your problem unless someone asked you to clean it up.

**Don't reformat.** Don't run prettier on a file that wasn't formatted with prettier. Don't change indentation from 4 spaces to 2. Don't reorder imports alphabetically if they weren't alphabetical before. Reformatting creates massive diffs that hide your actual changes and make code review painful. The test: look at your diff. Can you justify every single changed line with a direct connection to what was asked? If any line is there because "while I was in there I thought I'd..." then revert it.

### 5. Verification
The difference between code that works and code you think works is testing. You should be paranoid about this distinction.

**Write the test first when fixing bugs.** Before you fix anything, write a test that reproduces the bug. Run it. Watch it fail. Then fix the bug. Run the test. Watch it pass. This is not optional and not TDD dogma. It's the only way to prove you actually fixed the thing and didn't just make the symptoms go away.

**Run existing tests before and after your changes.** If tests passed before your change and fail after, you broke something. This is obvious. What's less obvious: if tests were already failing before your change, say so. Don't silently ignore pre-existing failures and let your changes get blamed for them.

**Don't write tests for the sake of writing tests.** A test that checks whether a constructor sets properties is worthless. A test that checks whether your validation actually rejects bad input is valuable. Test behavior, not implementation. Test the interesting cases, not the trivial ones.

**If you can't write a test, say why.** Sometimes the architecture makes testing hard. That's useful information. "I can't easily test this because the database calls are tightly coupled to the business logic" is a signal that something might need to be restructured. Don't just skip testing and hope.

### 6. Goal-Driven Execution
Every task should have a clear success criterion before you start writing code. If the criterion is vague, make it specific. If you can't make it specific, ask.

Transform vague tasks into verifiable ones:
 - "Add validation" becomes "reject inputs where email is missing or invalid, return 400 with a message that says what's wrong, add tests for both cases"
 - "Fix the bug" becomes "write a test that reproduces the reported behavior, make the test pass, verify existing tests still pass"
 - "Improve performance" becomes "profile first, identify the bottleneck, fix that specific thing, measure again"

For anything that takes more than one step, state the plan before executing:
```
Plan:
1. Add the new database column with a migration
2. Update the model to include the new field
3. Modify the API endpoint to accept and return the field
4. Add validation for the field
5. Write tests for the new behavior
6. Run full test suite to check for regressions
```

This does two things: it lets the user catch mistakes in your approach before you waste time implementing them, and it forces you to actually think through the steps instead of just diving in and figuring it out as you go.

### 7. Debugging
When something doesn't work, don't guess. Investigate.

**Read the error message.** The whole thing. Including the stack trace. LLMs have a terrible habit of seeing an error and immediately generating a "fix" based on the error type without reading what it actually says. A TypeError could mean a hundred different things. The message and stack trace tell you which one.

**Reproduce first.** Before you change anything, make sure you can reproduce the problem. If you can't reproduce it, you can't verify your fix. "I think this should fix it" is not debugging. It's gambling.

**Change one thing at a time.** If you change three things and the bug goes away, you don't know which change fixed it. You also don't know if the other two changes introduced new bugs. Change one thing. Test. Change another. Test.

**Don't add workarounds without understanding the root cause.** If a value is unexpectedly null, don't just add a null check and move on. Figure out why it's null. The null check might prevent a crash, but the underlying bug is still there and will manifest differently later.

**If you're stuck, say so.** "I've tried X and Y and neither worked. Here's what I'm seeing. I think the issue might be Z but I'm not sure." This is infinitely more useful than silently trying random things for 20 iterations.

### 8. Dependencies
Don't add dependencies without thinking about it.

Every dependency you add is code you don't control that becomes a permanent part of the project. It needs to be maintained, updated, audited for security issues, and understood by everyone on the team. The cost is almost always higher than it looks.

Before adding a package:
- Can you do this with what's already in the project? If the project has axios, don't add node-fetch. If the project uses date-fns, don't add moment.
- Can you do this with the standard library? You don't need lodash for 'Array.prototype.map'. You don't need uuid if 'crypto.randomUUID()' exists.
- Is this dependency actually maintained? Check the last commit date. Check the issue count. Check if the maintainer responds to issues.
- How big is it? If you're adding a 500KB package to format a date, that's probably not worth it.

When you do add a dependency, say why. "I'm adding zod because this project needs runtime schema validation and there's nothing in the existing dependencies that does this" is fine. Silently adding packages to package.json is not.

### 9. Communication
How you communicate about code matters as much as the code itself.

**Say what you did and why.** Don't just dump a code block. "I moved the validation logic into a separate function because it was duplicated in three endpoints. This also makes it testable independently." Now the user understands the change without reading every line.

**Flag concerns.** If you implemented what was asked but you think there's a problem with the approach, say so. "This works but it makes a database call for every item in the list. If the list gets large this will be slow. Want me to batch it?" is the kind of proactive communication that saves hours later.

**Be precise about what you're uncertain about.** "I'm not sure if this library supports streaming responses" is useful. "I think this should work" is not. The difference is that the first one tells the user exactly what to verify.

**Don't explain things the user already knows.** If they asked you to add a REST endpoint, don't explain what REST is. If they asked for a database index, don't explain what indexes do. Match your explanation level to the user's demonstrated knowledge.

**Commit messages matter.** If you're writing a commit message, make it specific. "Fix bug" is useless. "Fix null pointer in user lookup when email contains uppercase chars" tells the next person exactly what happened. 

### 10. Common Failure Modes
These are the patterns I see most often. If you catch yourself doing any of these, stop and reconsider.

**The Kitchen Sink.** Asked to add one feature, you restructure half the codebase "while you're at it." Don't. Do the one thing.

**The Wrong Abstraction.** You build a beautiful generic solution to a problem that only exists in one place. Duplication is far cheaper than the wrong abstraction. Copy-paste twice before you abstract.

**The Invisible Decision.** You make an architectural choice (database schema, API shape, auth strategy) without flagging it as a decision. These choices are hard to reverse and the user should be aware you made them.

**The Optimistic Path.** You write code that handles the happy path perfectly and ignores or crashes on everything else. Think about what happens when the API returns 500. When the file doesn't exist. When the user submits an empty form.

**The Knowledge Hallucination.** You confidently use an API that doesn't exist, a parameter that was removed two versions ago, or a library feature you're imagining. If you're not 100% sure a method exists with this exact signature, say so. Check the docs. Look at the actual source code in the project.

**The Style Drift.** You write code in your "preferred" style instead of matching the project. Functional patterns in an OOP codebase. Classes in a functional codebase. TypeScript patterns in a JavaScript project. Match the codebase, not your preferences.

**The Runaway Refactor.** You start fixing one thing. It touches another thing. That touches another. Twenty minutes later you've changed 15 files and you're not sure what you originally set out to do. If a fix is cascading, stop. Tell the user what's happening. Get buy-in before continuing.

---

These guidelines work when they produce fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## 关于这个项目

这是 **TangTang（唐睿阳）** 的个人主页，部署在 GitHub Pages。
GitHub 用户名：`florencemalis0-ui`
快手（Kuaishou）工程师，方向：AI · Go · Python · Backend · Cloud Native。

## 技术栈

- **框架：** React 18 + TypeScript + Vite 6
- **路由：** react-router-dom v7（`BrowserRouter`，`basename=import.meta.env.BASE_URL`）。`/notes` 是主路由，`/blog/*` 重定向到 `/notes/*` 兼容旧链接。
- **样式：** CSS Modules + 全局 CSS（`src/index.css`）
- **3D（全局）：** Three.js 过程化水晶体（`IcosahedronGeometry` + `MeshPhysicalMaterial` 透射）+ Bloom 后处理 + 远处微尘（不导入外部模型）。`src/webgl/` 下 Experience 主控（已移除自写 GLSL shader，改用原生 Material + 后处理 Pass）。全局挂在 `App.tsx`（`useExperience`），所有页面共享，切页不卸载；滚动驱动 + 鼠标视差，reduced-motion/移动端降级
- **构建：** `npm run build` → `dist/`，部署到 GitHub Pages。three/gsap 拆为独立 vendor chunk（`vite.config.ts` manualChunks）
- **内页背景：** `rgba(10,14,31,0.7)` 半透明遮罩让全局 3D 透出 ~30%（已移除 Bing 壁纸，`useBingBg` 已删）
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
│   │   ├── WeChatModal/     # 微信二维码弹窗（全局唯一，挂在 App）
│   │   ├── CommandPalette/  # ⌘K 命令面板（全局，挂在 App，Suspense 外，含笔记搜索）
│   │   ├── BackToTop/       # 回顶浮窗按钮（全局，滚动 > 1 屏浮现）
│   │   └── SiteFooter/      # 全站页脚（身份/微信/⌘K/版权，Home 与内页共用）
│   ├── webgl/               # 3D 过程化视觉（首页）
│   │   ├── Experience.ts    # Three.js 主控（renderer/camera/水晶体/微尘/Bloom 后处理/loop/dispose）
│   │   └── useExperience.ts # React hook 接入（滚动/鼠标/降级/清理 + resetScroll 复位）
│   ├── hooks/
│   │   ├── useHitokoto.ts   # 一言 API
│   │   ├── useIUp.ts        # 入场错落动画
│   │   ├── useTilt.ts       # 记录卡片 3D tilt（CSS 变量注入，MAX 4°）
│   │   └── useBlurUp.ts     # 图片 blur-up 渐显（治缓存图 onLoad 不触发）
│   ├── data/
│   │   ├── notes.ts         # 记录数据：glob 读 content/notes/*.md + 极简 frontmatter 解析（契约：notes 数组 + Note 接口，消费方零改动）
│   │   └── contacts.ts      # EMAIL_B64 常量（邮箱 Base64）
│   ├── utils/
│   │   └── email.ts         # Base64 邮箱解码
│   └── pages/
│       ├── Home/            # 首页（3D 过程化水晶背景 + 滚动叙事）
│       ├── Blog/            # /notes 列表（卡片网格 + 侧边栏，已实现）
│       ├── NoteDetail/      # /notes/:id 详情（图库 + lightbox，已实现）
│       ├── About/           # /about（journal 双栏，已实现）
│       ├── Resume/          # /resume（占位）
│       └── NotFound/        # 404 定制页（凤凰水晶风格，catch-all 渲染非重定向）
├── content/
│   └── notes/               # 笔记 markdown 源（frontmatter + 正文，notes.ts glob 读取）
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── life/        # 旅行/生活照片（lifeImages 默认路径，不带子目录）
│   │       ├── tech/        # 技术文章配图（lifeImages 带子目录引用，如 tech/xxx.jpg）
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

**设计北极星：** "Phoenix Rose · 代码即艺术"

**品牌色：**
- 主色：Phoenix Rose `#fb5959`（One Signal Rule：每屏最多 1 处，承载为 3D 信号水晶 + nav active 圆点 + avatar ring + focus）
- 辅助：Phoenix Violet `#6248a4`（径向光晕、travel/tech 分类色）
- 背景：Deep Space `#0a0e1f`（深蓝紫宇宙底；内页用 `rgba(10,14,31,0.7)` 半透明遮罩让全局 3D 透出 ~30%）
- 水晶：Pink Gradient `#ffffff → #fdebfd → #eabdf6`（白→淡紫粉，透射 + Bloom 发光）
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
3. **Phoenix Rose `#fb5959` 每屏最多一处**（One Signal Rule）
4. **头像点击** 触发微信弹窗（不是博客按钮）
5. **导航项**（记录/简历/关于）是 react-router-dom `<Link>` 路由跳转；内页用「← 返回首页」back-link
6. **3D 背景全局常驻**：`useExperience` 挂在 `App.tsx`，所有页面共享同一水晶场，切页不卸载。内页用 `rgba(10,14,31,0.7)` 半透明遮罩透出 3D，禁止不透明背景挡住 canvas（已移除 Bing 壁纸，`useBingBg` 已删）
7. **头像 URL：** `https://avatars.githubusercontent.com/florencemalis0-ui`（带每日 cache-bust 参数）
8. **部署传已构建的 `dist/`**：CI 不重新 build（`.github/workflows/deploy.yml` 直接上传 dist/），改完代码必须本地 `npm run build` 再提交 `dist/`，否则线上不更新
9. **不要手删 `dist/404.html`**：它是 `index.html` 的副本，由 `vite.config.ts` 的 `spa-404-fallback` 插件自动生成。GitHub Pages 对找不到的路径回退到它，刷新内页（`/about`、`/notes/xxx`）不 404
10. **图片路径用绝对前缀** `/Tang-Space/assets/...`（如 `lifeImages`），不要用相对 `./assets/...`——嵌套路由（`/notes/xxx`）下相对路径会 404
11. **全局弹窗/面板用 CustomEvent 解耦**：WeChatModal 与 CommandPalette 都全局挂在 `App.tsx`（不在各页重复挂），其他地方触发它们一律 `window.dispatchEvent(new CustomEvent('tang:open-wechat'))` 或 `'tang:open-cmdk'`，由 App 监听打开。不要新增第二份 modal/palette 实例
12. **新动效三件套**：所有新动画只用 `transform`/`opacity`（禁动 layout 属性），必须给 `prefers-reduced-motion` 降级（JS `matchMedia` 闸门 + CSS `!important` 兜底压内联值），触屏 `pointer: coarse` 默认关指针增强效果
13. **改完代码必须主动同步所有受影响的 md 和代码注释**：实现机制级（如粒子→水晶）、命名级（如北极星）、铁律级改动，grep 关键词在 `src/` + 所有 `*.md` + `design.json` 找残留，全量同步后 grep 验证清零再 build 再提交。教训：3D 从粒子重构到水晶后 CLAUDE.md / agents.md / DESIGN.md / design.json 全部漂移，要 review workflow 31 个 findings 才补救

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

- [x] ⌘K 命令面板（全站）+ 全局微信弹窗解耦
- [x] 记录卡片 3D tilt + 图片 blur-up
- [x] 首页 3D 过程化重构（Three.js 过程化水晶体 + Bloom 后处理 + 微尘 + 滚动叙事，**不导入外部模型**）
- [x] 3D 全局化：canvas 提升到 App.tsx 全局常驻，所有页面共享，切页不卸载；内页移除 Bing 壁纸改半透明遮罩透出 3D（视觉"切换时一样"）
- [x] 凤凰粉白配色：水晶主体白→淡紫粉、信号水晶橙→玫红、底色深蓝紫；CSS token `--color-orange` 重命名 `--color-signal`，新增 `--color-violet`
- [x] 删除 useBingBg.ts（内页改全局 3D 后已成死代码，已清理）
- [ ] 简历页实现（技术栈展示、工作经历）—— 目前唯一占位的主板块（用户还没想好，暂不动）
- [ ] 持续丰富 Notes 内容（技术记录 / 生活照片 / 旅行 / 随想）—— blur-up 待有图笔记生效
- [ ] `src/data/contacts.ts` 的 EMAIL_B64 仍是占位 `aGVsbG9AZXhhbXBsZS5jb20=`，需替换为真实邮箱 Base64
