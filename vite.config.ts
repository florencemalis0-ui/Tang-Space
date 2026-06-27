import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // GitHub Pages SPA 回退：构建后把 index.html 复制为 404.html。
      // 这样直接访问 /about、/notes/xxx 刷新时，Pages 会回退到 404.html，
      // SPA 照常加载，React Router 再按 URL 渲染对应页面，不会 404。
      name: 'spa-404-fallback',
      closeBundle() {
        if (existsSync('dist/index.html')) {
          copyFileSync('dist/index.html', 'dist/404.html')
          console.log('✓ dist/404.html (GitHub Pages SPA fallback)')
        }
      },
    },
  ],
  base: '/Tang-Space/',
  build: {
    rollupOptions: {
      output: {
        // three / gsap 拆成独立 vendor chunk，利于缓存与并行加载
        manualChunks: {
          three: ['three'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
