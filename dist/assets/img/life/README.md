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
