import { useEffect, useState } from 'react'
import styles from './index.module.css'

/**
 * BackToTop — 内页滚动超过一屏后右下角浮现的「回顶部」浮窗。
 *
 * - 全局挂在 App.tsx，所有页面共享
 * - 滚动 > 1 视口才显示，避免首屏就出现
 * - 点击平滑回顶；reduced-motion 用 instant（铁律 8/10）
 * - 只动 transform/opacity，reduced-motion 降级
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const reduced = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`${styles.back} ${visible ? styles.show : ''}`}
      onClick={handleClick}
      aria-label="回到顶部"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
