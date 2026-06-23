import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="inner-page">
      <span className="inner-page__badge">About</span>
      <h1 className="inner-page__title">关于我</h1>
      <p className="inner-page__desc">
        TangTang，唐睿阳。<br />
        快手工程师，写代码，也写生活。
      </p>
      <Link to="/" className="inner-page__back">← 返回首页</Link>
    </div>
  )
}
