import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="inner-page">
      <span className="inner-page__badge">Blog</span>
      <h1 className="inner-page__title">文章</h1>
      <p className="inner-page__desc">
        技术笔记、工程实践与零散思考。<br />
        正在整理中，即将上线。
      </p>
      <Link to="/" className="inner-page__back">← 返回首页</Link>
    </div>
  )
}
