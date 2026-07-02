import { Link } from 'react-router-dom'
import { projects, workExperience } from '../../data/resume'
import { SiteFooter } from '../../components/SiteFooter'
import './index.css'

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <header className="resume-hero">
          <div className="resume-hero__top">
            <Link to="/" className="inner-page__back">← 返回首页</Link>
            <span className="inner-page__badge">Resume</span>
          </div>
          <h1 className="resume-hero__title">简历</h1>
          <p className="resume-hero__desc">
            唐睿阳 · 快手工程师
            <br />
            AI · Backend · Cloud Native
          </p>
        </header>

        {/* 工作 */}
        <section className="resume-section" aria-label="工作经历">
          <div className="resume-section__head">
            <span className="resume-section__num">01</span>
            <h2 className="resume-section__title">工作</h2>
          </div>
          {workExperience.length > 0 ? (
            <div className="resume-timeline">
              {workExperience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="resume-item">
                  <div className="resume-item__rail" aria-hidden="true" />
                  <div className="resume-item__body">
                    <div className="resume-item__top">
                      <h3 className="resume-item__name">{item.company}</h3>
                      <span className="resume-item__period">{item.period}</span>
                    </div>
                    <span className="resume-item__role">{item.role}</span>
                    <p className="resume-item__desc">{item.description}</p>
                    {item.highlights && item.highlights.length > 0 ? (
                      <ul className="resume-item__highlights">
                        {item.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="resume-tech">
                      {item.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="resume-empty">
              <span className="resume-empty__label">待补充</span>
              <p>工作经历待填写（<code>src/data/resume.ts</code> 的 <code>workExperience</code>）</p>
            </div>
          )}
        </section>

        {/* 项目 */}
        <section className="resume-section" aria-label="项目经历">
          <div className="resume-section__head">
            <span className="resume-section__num">02</span>
            <h2 className="resume-section__title">项目</h2>
          </div>
          {projects.length > 0 ? (
            <div className="resume-timeline">
              {projects.map((item) => (
                <article key={`${item.name}-${item.period}`} className="resume-item">
                  <div className="resume-item__rail" aria-hidden="true" />
                  <div className="resume-item__body">
                    <div className="resume-item__top">
                      <h3 className="resume-item__name">{item.name}</h3>
                      <span className="resume-item__period">{item.period}</span>
                    </div>
                    <span className="resume-item__role">{item.role}</span>
                    {item.tag ? <span className="resume-item__tag">{item.tag}</span> : null}
                    <p className="resume-item__desc">{item.description}</p>
                    {item.highlights && item.highlights.length > 0 ? (
                      <ul className="resume-item__highlights">
                        {item.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.link ? (
                      <a
                        className="resume-item__link"
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.text} →
                      </a>
                    ) : null}
                    <div className="resume-tech">
                      {item.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="resume-empty">
              <span className="resume-empty__label">待补充</span>
              <p>项目经历待填写（<code>src/data/resume.ts</code> 的 <code>projects</code>）</p>
            </div>
          )}
        </section>
      </div>
      <SiteFooter />
    </main>
  )
}
