import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NoteDetail from './pages/NoteDetail'
import About from './pages/About'
import Resume from './pages/Resume'

// /blog → /notes 的兼容重定向。
// 导航已统一到 /notes；保留 /blog/* 旧链接可达，避免外链失效。
function RedirectToNotes() {
  const splat = useParams()['*'] ?? ''
  return <Navigate to={splat ? `/notes/${splat}` : '/notes'} replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Blog />} />
      <Route path="/notes/:id" element={<NoteDetail />} />
      <Route path="/blog/*" element={<RedirectToNotes />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
