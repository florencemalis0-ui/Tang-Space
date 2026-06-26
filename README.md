# tangruiyang's Homepage

个人主页，基于 React + Vite + TypeScript 构建，部署在 GitHub Pages。

## 技术栈

- React 18 + TypeScript
- Vite 6
- react-router-dom v7
- CSS Modules + 全局 CSS（`src/index.css`）

## 特性

- Bing 每日壁纸背景（bing.biturl.top 镜像，sessionStorage 轮播 8 张）
- 一言（Hitokoto）随机句子
- 头像 hover 浮现「Be Brave」标语，点击弹出微信二维码
- 记录时间轴（技术 / 生活 / 旅行 / 随想）+ 图片详情页
- 移动端自适应

## 本地开发

```bash
npm install
npm run dev
```

## 构建部署

```bash
npm run build
```

构建产物在 `dist/`，部署到 GitHub Pages。部署由 `.github/workflows/deploy.yml` 在 push 到 main 时直接上传已构建的 `dist/`（CI 不重新 build），所以更新内容后需先本地执行 `npm run build` 再提交 `dist/`。

## License

MIT
