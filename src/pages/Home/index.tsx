import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'
import { Navigation } from '../../components/Navigation'
import { useHitokoto } from '../../hooks/useHitokoto'
import { useIUp } from '../../hooks/useIUp'
import './index.css'

const TECH_TAGS = ['Go', 'Python', 'AI/ML', 'Cloud Native', 'Backend', '快手']

const NAV_CARDS = [
  { to: '/notes', label: '记录', desc: '技术与生活的痕迹' },
  { to: '/resume', label: '简历', desc: '经历与能力' },
  { to: '/about', label: '关于', desc: '这个站点和我' },
]

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const { hitokoto, from } = useHitokoto()
  useIUp(contentRef)

  return (
    <div className="home-root">
      {/* 顶部固定导航 */}
      <header className="home-header">
        <Link to="/" className="home-logo">TangTang</Link>
        <Navigation />
      </header>

      <div ref={contentRef} className="home-content">
        {/* 第一屏：hero */}
        <section className="hero">
          <p className="hero-kicker iUp">TangTang · Kuaishou Engineer</p>
          <h1 className="hero-name iUp">TangTang</h1>
          <p className="hero-hitokoto iUp">
            {hitokoto}
            <strong>—「{from}」</strong>
          </p>
          <div className="hero-scroll-hint iUp">
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* 第二屏：信号 */}
        <section className="signal">
          <div className="signal__inner">
            <span className="signal__label iUp">01 — Signal</span>
            <h2 className="signal__title iUp">工程师的信号</h2>
            <p className="signal__desc iUp">
              这个站点是一次广播，不是宣传册。暗色背景吸收注意力，把内容推向更深处；每一个元素都因功能与对比赢得位置，而非装饰。
            </p>
            <p className="signal__desc iUp">
              现在在快手做工程，关注 AI、后端系统与 GPU 算力。这里会放技术记录，也放生活。
            </p>
            <div className="hero-tags iUp">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>
            <div className="signal__avatar iUp">
              <Avatar onClick={() => window.dispatchEvent(new CustomEvent('tang:open-wechat'))} />
            </div>
          </div>
        </section>

        {/* 第三屏：导航入口 */}
        <section className="nav-gate">
          <span className="signal__label iUp">02 — Explore</span>
          <div className="nav-gate__grid">
            {NAV_CARDS.map((card) => (
              <Link key={card.to} to={card.to} className="nav-gate__card iUp">
                <span className="nav-gate__label">{card.label}</span>
                <span className="nav-gate__desc">{card.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* footer */}
        <footer className="home-footer">
          <p>
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
        </footer>
      </div>
    </div>
  )
}
