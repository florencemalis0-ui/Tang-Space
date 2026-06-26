import { useEffect, useState } from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { CommandPalette } from './components/CommandPalette'
import { WeChatModal } from './components/WeChatModal'

// 代码分割：每个页面单独 chunk，首屏只加载 Home
const Home = lazy(() => import('./pages/Home'))
const Blog = lazy(() => import('./pages/Blog'))
const NoteDetail = lazy(() => import('./pages/NoteDetail'))
const About = lazy(() => import('./pages/About'))
const Resume = lazy(() => import('./pages/Resume'))

// /blog → /notes 的兼容重定向。
// 导航已统一到 /notes；保留 /blog/* 旧链接可达，避免外链失效。
function RedirectToNotes() {
  const splat = useParams()['*'] ?? ''
  return <Navigate to={splat ? `/notes/${splat}` : '/notes'} replace />
}

function App() {
  // 全局微信弹窗：统一监听 'tang:open-wechat'，命令面板 / 头像 / 关于页都通过它唤起。
  // 这样 Resume/Blog/NoteDetail 等内页触发微信命令也能正常打开（不再静默失败）。
  const [wechatVisible, setWechatVisible] = useState(false)

  useEffect(() => {
    const openWechat = () => setWechatVisible(true)
    window.addEventListener('tang:open-wechat', openWechat)
    return () => window.removeEventListener('tang:open-wechat', openWechat)
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Blog />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/blog/*" element={<RedirectToNotes />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      {/* 放 Suspense 外：懒加载期间 ⌘K 也可用 */}
      <CommandPalette />
      <WeChatModal visible={wechatVisible} onClose={() => setWechatVisible(false)} />
    </>
  )
}

export default App
