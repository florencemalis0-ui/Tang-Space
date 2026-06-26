import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css'

const NAV_ITEMS = [
  { to: '/', label: '首页' },
  { to: '/notes', label: '记录' },
  { to: '/resume', label: '简历' },
  { to: '/about', label: '关于' },
]

export function Navigation() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav-root iUp">
      {/* 移动端 toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="切换菜单"
      >
        {open ? '✕' : '☰'}
      </button>

      <ul className={`nav-list${open ? ' visible' : ''}`}>
        {NAV_ITEMS.map(({ to, label }) => {
          const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
          return (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link${isActive ? ' nav-link-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
