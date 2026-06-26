import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useBingBg } from '../../hooks/useBingBg'
import { notes } from '../../data/notes'
import { EMAIL_B64 } from '../../data/contacts'
import { decryptEmail } from '../../utils/email'
import '../Blog/index.css'
import './index.css'

const FOCUS = ['AI Agent 工程化', '后端系统稳定性', 'GPU 算力', '个人网站', '生活记录']

export default function About() {
  const pageRef = useRef<HTMLElement>(null)

  useBingBg(pageRef)

  const recentNotes = useMemo(() => {
    return [...notes].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
  }, [])

  return (
    <main ref={pageRef} className="about-page about-page--journal notes-page--wallpaper">
      <div className="about-journal-shell">
        <header className="about-journal-top">
          <Link to="/" className="inner-page__back">← 返回首页</Link>
          <span className="inner-page__badge">About</span>
        </header>

        <section className="about-journal-hero">
          <div>
            <p className="about-journal-kicker">TangTang · Personal Site</p>
            <h1>关于我</h1>
            <p>这里会放技术，也会放生活。不是很正式，但尽量真实。</p>
          </div>
        </section>

        <div className="about-journal-layout">
          <article className="about-journal-main">
            <section className="about-journal-section">
              <span className="about-journal-section__num">01</span>
              <h2>你好，我是 TangTang</h2>
              <p>
                现在在快手做工程相关的工作，主要关注 AI、后端系统和 GPU 模型。平时写得比较多的是工程实践、系统设计、AI 应用落地过程中遇到的问题，以及一些自己踩过的坑。
              </p>
            </section>

            <section className="about-journal-section">
              <span className="about-journal-section__num">02</span>
              <h2>这个网站</h2>
              <p>
                我做这个网站，最开始只是想有一个自己的主页。后来慢慢觉得，它不应该只是简历，也不应该只放技术文章。
              </p>
              <p>
                所以这里以后会放很多杂七杂八的东西：技术记录、生活照片、旅行、一些突然冒出来的想法，或者某个阶段想留下来的话。
              </p>
            </section>

            <section className="about-journal-section">
              <span className="about-journal-section__num">03</span>
              <h2>我想留下什么</h2>
              <p>
                我不太想把这里做成一个很正式的博客。它更像一个自己的小空间，能让我把一些真实发生过的东西存下来。
              </p>
              <p>
                如果你是因为技术内容来到这里，欢迎看看我的记录。如果你只是路过，也希望你能从这些文字和照片里，看到一点真实的我。
              </p>
            </section>
          </article>

          <aside className="about-journal-sidebar" aria-label="个人信息">
            <section className="about-mini-card about-mini-card--profile">
              <span className="about-mini-card__label">Me</span>
              <h2>唐睿阳</h2>
              <p>TangTang</p>
              <div className="about-mini-card__meta">
                <span>Kuaishou Engineer</span>
                <span>AI · Backend · Cloud Native</span>
              </div>
            </section>

            <section className="about-mini-card about-social">
              <span className="about-mini-card__label">联系</span>
              <div className="about-social__links">
                <button type="button" className="about-social__link" onClick={() => window.dispatchEvent(new CustomEvent('tang:open-wechat'))}>
                  <span className="about-social__name">微信</span>
                  <span className="about-social__handle">扫码添加</span>
                </button>
                <button type="button" className="about-social__link" onClick={() => decryptEmail(EMAIL_B64)}>
                  <span className="about-social__name">邮箱</span>
                  <span className="about-social__handle">点击发送</span>
                </button>
              </div>
            </section>

            <section className="about-mini-card">
              <span className="about-mini-card__label">最近在看</span>
              <div className="about-journal-tags">
                {FOCUS.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>

            <section className="about-mini-card about-mini-card--quiet">
              <span className="about-mini-card__label">最近记录</span>
              <ul className="about-recent">
                {recentNotes.map((note) => (
                  <li key={note.id}>
                    <Link to={`/notes/${note.id}`} className="about-recent__item">
                      <span className="about-recent__date">{note.date}</span>
                      <span className="about-recent__title">{note.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="about-mini-card">
              <span className="about-mini-card__label">这个站会有</span>
              <ul className="about-site-list">
                <li>技术记录</li>
                <li>生活照片</li>
                <li>旅行和碎碎念</li>
                <li>阶段性的想法</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}
