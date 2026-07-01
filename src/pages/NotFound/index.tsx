import { Link } from 'react-router-dom'
import './index.css'

/**
 * NotFound — 404 定制页。
 *
 * 凤凰水晶风格：大号 404 + 玫红信号点缀（One Signal：此页无 nav active 圆点，
 * 玫红用于背景光晕示意）+ 返回首页 / 记录入口。
 * 路由 catch-all 渲染此组件，而非静默重定向首页 —— 让访客知道路径不存在。
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <span className="inner-page__badge">404 · Not Found</span>
      <h1 className="not-found__code">404</h1>
      <p className="not-found__desc">
        这片宇宙里没有这个坐标。<br />
        The page you're looking for drifted out of orbit.
      </p>
      <div className="not-found__actions">
        <Link to="/" className="inner-page__back">← 返回首页</Link>
        <Link to="/notes" className="inner-page__back">浏览记录 →</Link>
      </div>
    </div>
  )
}
