import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NoteDetail from './pages/NoteDetail'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Blog />} />
      <Route path="/notes/:id" element={<NoteDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<NoteDetail />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
