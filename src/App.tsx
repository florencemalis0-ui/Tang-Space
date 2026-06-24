import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Avatar } from './components/Avatar'
import { Navigation } from './components/Navigation'
import { WeChatModal } from './components/WeChatModal'
import { useHitokoto } from './hooks/useHitokoto'
import { useBingBg } from './hooks/useBingBg'
import { useIUp } from './hooks/useIUp'
import Blog from './pages/Blog'
import NoteDetail from './pages/NoteDetail'
import About from './pages/About'
import Resume from './pages/Resume'

const TECH_TAGS = ['Go', 'Python', 'AI/ML', 'Cloud Native', 'Backend', '快手']

function Home() {
  const panelRef = useRef<HTMLElement>(null)
  const appRef = useRef<HTMLDivElement>(null)
  const [wechatVisible, setWechatVisible] = useState(false)

  const { hitokoto, from } = useHitokoto()

  useBingBg(panelRef)
  useIUp(appRef)

  return (
    <div ref={appRef}>
      <header ref={panelRef} className="panel-cover">
        <div className="panel-main">
          <div className="panel-main__inner">

            {/* 头像 */}
            <div className="hero-avatar iUp">
              <Avatar onClick={() => setWechatVisible(true)} />
            </div>

            {/* 名字 */}
            <h1 className="hero-name iUp">
              <a href="/" title="TangTang">TangTang</a>
            </h1>

            {/* 副标题 */}
            <p className="hero-subtitle iUp">唐睿阳 · Kuaishou Engineer</p>

            {/* 橙色分割线 */}
            <hr className="hero-divider iUp" />

            {/* 一言 */}
            <p className="hero-hitokoto iUp">
              {hitokoto}
              <br />
              <strong>—「{from}」</strong>
            </p>

            {/* 技术标签 */}
            <div className="hero-tags iUp">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>

            {/* 导航 */}
            <Navigation />
          </div>
        </div>

        {/* 底部版权 */}
        <div className="remark iUp">
          <p className="power">
            Made with ♥ by TangTang
          </p>
        </div>
      </header>

      {/* 微信弹窗 */}
      <WeChatModal visible={wechatVisible} onClose={() => setWechatVisible(false)} />
    </div>
  )
}

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
