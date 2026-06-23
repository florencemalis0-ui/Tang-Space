# 壁纸目录

把你的壁纸图片放到这个目录，然后在 `src/hooks/useBingBg.ts` 的 `BG_IMAGES` 数组里加上文件名即可。

## 示例

1. 把图片放进来，例如 `kuaishou-bg.jpg`
2. 打开 `src/hooks/useBingBg.ts`，找到 `BG_IMAGES` 数组，改为：

```ts
const BG_IMAGES: string[] = [
  'kuaishou-bg.jpg',
]
```

## 规则

- 支持 jpg / png / webp 格式
- 建议分辨率 1920×1080 或以上，文件大小控制在 1MB 以内（用于 web）
- 有多张图时，按当天日期固定选一张（同一天不会变）
