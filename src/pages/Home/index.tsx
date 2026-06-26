import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'
import { Navigation } from '../../components/Navigation'
import { useHitokoto } from '../../hooks/useHitokoto'
import { useBingBg } from '../../hooks/useBingBg'
import { useParallaxBg } from '../../hooks/useParallaxBg'
import { useIUp } from '../../hooks/useIUp'
import './index.css'

const TECH_TAGS = ['Go', 'Python', 'AI/ML', 'Cloud Native', 'Backend', '快手']

export default function Home() {
  // 壁纸独立成层：bg 负责图片 + 视差 transform，::after 遮罩固定做「窗框」，内容不动
  const bgRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)

  const { hitokoto, from } = useHitokoto()

  useBingBg(bgRef)
  useParallaxBg(bgRef)
  useIUp(appRef)

  return (
    <div ref={appRef}>
      <header className="panel-cover">
        <div ref={bgRef} className="panel-cover__bg" aria-hidden="true" />
        <div className="panel-main">
          <div className="panel-main__inner">
            <div className="hero-avatar iUp">
              <Avatar onClick={() => window.dispatchEvent(new CustomEvent('tang:open-wechat'))} />
            </div>

            <h1 className="hero-name iUp">
              <Link to="/" title="TangTang">TangTang</Link>
            </h1>

            <p className="hero-subtitle iUp">唐睿阳 · Kuaishou Engineer</p>
            <hr className="hero-divider iUp" />

            <p className="hero-hitokoto iUp">
              {hitokoto}
              <br />
              <strong>—「{from}」</strong>
            </p>

            <div className="hero-tags iUp">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>

            <Navigation />
          </div>
        </div>

        <div className="remark iUp">
          <p className="power">
            Made with ♥ by TangTang
            <button
              type="button"
              className="cmdk-hint"
              onClick={() => window.dispatchEvent(new CustomEvent('tang:open-cmdk'))}
              aria-label="打开命令面板"
            >
              ⌘K
            </button>
          </p>
        </div>
      </header>
    </div>
  )
}
