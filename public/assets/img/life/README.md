# 生活照片目录

把旅行、生活、日常照片放到这里，然后在 `src/data/notes.ts` 里引用。

示例：

```text
public/assets/img/life/hangzhou-01.jpg
public/assets/img/life/hangzhou-02.jpg
```

在 `notes.ts` 中写：

```ts
images: lifeImages('hangzhou-01.jpg', 'hangzhou-02.jpg')
```

> 文件名带子目录可引用其他目录的图，例如技术文章配图：
> frontmatter `images: [tech/roce-to-infiniband.jpg]` → `assets/img/tech/roce-to-infiniband.jpg`。
> 不带子目录默认 `life/`。
