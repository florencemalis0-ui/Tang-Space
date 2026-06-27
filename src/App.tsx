import { useEffect, useRef, useState } from 'react'
import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import { CommandPalette } from './components/CommandPalette'
import { WeChatModal } from './components/WeChatModal'
import { useExperience } from './webgl/useExperience'

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

  // 全局 3D 粒子流场：挂在 App 级，所有页面共享同一背景，切页不卸载（"切换时一样"）。
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const location = useLocation()
  const resetScroll = useExperience(canvasRef)

  useEffect(() => {
    const openWechat = () => setWechatVisible(true)
    window.addEventListener('tang:open-wechat', openWechat)
    return () => window.removeEventListener('tang:open-wechat', openWechat)
  }, [])

  // 切页回到顶部 + 直接复位 3D 滚动进度（不靠间接 scroll 事件 + lerp，避免 ~0.5s 相机后拉残影）
  useEffect(() => {
    window.scrollTo(0, 0)
    resetScroll()
  }, [location.pathname, resetScroll])

  return (
    <>
      {/* 全局 3D 背景：fixed 底层，不接收指针 */}
      <canvas ref={canvasRef} className="global-canvas" aria-hidden="true" />

      {/* 内容层在 3D 之上；key 随路由变化触发淡入，3D 常驻不动 */}
      <div className="app-shell">
        <div key={location.pathname} className="page-transition">
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
        </div>
      </div>

      {/* 放 Suspense 外：懒加载期间 ⌘K 也可用 */}
      <CommandPalette />
      <WeChatModal visible={wechatVisible} onClose={() => setWechatVisible(false)} />
    </>
  )
}

export default App
