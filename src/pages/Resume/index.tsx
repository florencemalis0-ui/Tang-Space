import { Link } from 'react-router-dom'
import './index.css'

export default function Resume() {
  return (
    <div className="resume-page">
      <span className="inner-page__badge">Resume</span>
      <h1 className="inner-page__title">简历</h1>
      <p className="inner-page__desc">
        快手工程师 · AI · Go · Python · Backend<br />
        详细简历建设中，敬请期待。
      </p>
      <Link to="/" className="inner-page__back">← 返回首页</Link>
    </div>
  )
}
