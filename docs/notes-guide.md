# Notes 写作指南

这个站不使用数据库，也没有后端。笔记是 **markdown 驱动** 的：在 `content/notes/` 下新建 `.md` 文件，构建时由 `src/data/notes.ts` 的 `import.meta.glob` 读取并解析 frontmatter，生成 `notes` 数组。

## 1. 新建一篇笔记

在 `content/notes/` 下新建文件，文件名即默认 `id`（也可在 frontmatter 里覆盖）：

```text
content/notes/my-note.md
```

文件结构：

```markdown
---
id: my-note
type: tech
title: 笔记标题
date: 2026.07.02
summary: 一句话摘要，会出现在列表卡片上。
tags: [Vue, 前端]
featured: true
---

正文从这里开始，写普通 markdown。
```

`---` 之间是 frontmatter，下面是正文。frontmatter 只支持 `key: value` 和 `tags: [a, b]` 两种格式（手写极简解析器，守「最小依赖」，不引完整 YAML 库）。

## 2. 字段说明

- `id`：唯一标识，英文小写短横线，对应详情页 `/notes/<id>`。省略时取文件名
- `type`：`tech` / `life` / `travel` / `thought`
- `title`：标题
- `date`：建议 `2026.07.02`，列表按日期倒序排列
- `summary`：列表卡片摘要
- `tags`：标签数组，如 `[Go, Backend]`
- `featured`：可选 `true`，作为精选卡片（列表首张，跨两列）
- `images`：可选图片数组，见下节

## 3. 代码块（自动语法高亮）

正文里的围栏代码块会自动上色（`rehype-highlight` + VS Code Dark+ 风格主题，带语言标签头）。**围栏后写语言名**才会高亮：

````markdown
```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
```
````

常用语言：`vue` / `ts` / `js` / `bash` / `json` / `go` / `python`。不写语言名则不高亮，只显示为普通代码块。行内 `code` 显示为药丸样式，不高亮。

## 4. 配图

先把图片放到 `public/assets/img/<子目录>/`（按类型分目录）：

```text
public/assets/img/tech/roce-to-infiniband.jpg
public/assets/img/life/chongqing-01.jpg
```

frontmatter 里用 `<子目录>/<文件名>` 引用：

```markdown
images: [tech/roce-to-infiniband.jpg]
```

- 第一张图是列表卡片封面；其余在详情页图库里展示
- 文件名带子目录 → 按该目录解析；不带子目录 → 默认 `life/`
- **图片路径用绝对前缀** `/Tang-Space/assets/...`（见 `notes.ts` 的 `lifeImages`），不要用相对 `./assets/...`——嵌套路由 `/notes/xxx` 下相对路径会 404
- 正文里内联图片：直接写标准 markdown 图片语法，路径同样用绝对前缀

## 5. 发布流程

GitHub Pages 部署的是本地打包后的 `dist/`（CI 不重新 build），所以更新内容后必须：

```bash
npm run build
git add .
git commit -m "content: update notes"
git push
```

本地预览：

```bash
npm run dev
```

## 6. 详情页地址

每条记录的 `id` 自动变成详情页地址。例如 `id: chongqing-night` 对应：

```text
/notes/chongqing-night
```
