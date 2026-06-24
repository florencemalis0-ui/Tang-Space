# Notes 写作指南

这个站不使用数据库，也没有后端。后续写内容时，只需要维护两个地方：

```text
src/data/notes.ts              # 写内容
public/assets/img/life/        # 放图片
```

## 1. 新增无图随想

打开 `src/data/notes.ts`，在 `notes` 数组里新增：

```ts
{
  id: 'my-first-thought',
  type: 'thought',
  title: '今天想到的一句话',
  date: '2026.06.24',
  summary: '很多时候，真正难的是把复杂的事情讲清楚。',
  tags: ['随想', '生活']
}
```

## 2. 新增技术记录

```ts
{
  id: 'go-timeout-retry',
  type: 'tech',
  title: 'Go 服务治理里的超时与重试',
  date: '2026.07.01',
  summary: '重试不是简单地再来一次，它会改变系统的负载模型。',
  tags: ['Go', 'Backend', 'Reliability']
}
```

## 3. 新增旅行照片

先把照片放到：

```text
public/assets/img/life/chongqing-01.jpg
public/assets/img/life/chongqing-02.jpg
```

然后在 `src/data/notes.ts` 里新增：

```ts
{
  id: 'chongqing-night',
  type: 'travel',
  title: '重庆 · 山城夜色',
  date: '2026.07.01',
  summary: '雾气、灯光、坡道和凌晨还没结束的城市。',
  tags: ['旅行', '重庆', '照片'],
  images: lifeImages('chongqing-01.jpg', 'chongqing-02.jpg'),
  featured: true
}
```

## 4. 发布流程

目前 GitHub Pages 部署的是本地打包后的 `dist/`，所以更新内容后执行：

```bash
npm run build
git add .
git commit -m "content: update notes"
git push
```

如果只是本地预览：

```bash
npm run dev
```

访问终端提示的本地地址即可。

## 5. 详情页地址

每条记录的 `id` 会自动变成详情页地址。

例如：

```ts
id: 'chongqing-night'
```

对应页面：

```text
/notes/chongqing-night
```

列表页只展示记录本身；照片不会作为单独分类出现。每条记录如果有 `images`，会在详情页里展示。

## 6. 字段说明

- `id`：唯一标识，英文小写，用短横线连接，例如 `hangzhou-west-lake`
- `type`：类型，可选 `tech` / `life` / `travel` / `thought`
- `title`：标题
- `date`：日期，建议写 `2026.06.24` 或 `2026.06`
- `summary`：正文摘要或短文内容
- `tags`：标签数组
- `images`：图片数组，可选
- `featured`：是否作为精选内容，可选
