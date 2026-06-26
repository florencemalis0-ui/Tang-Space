import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'

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
  return (
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
  )
}

export default App
