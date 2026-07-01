import { Link } from 'react-router-dom'
import styles from './index.module.css'

/**
 * SiteFooter — 全站统一页脚。
 *
 * 身份 + 微信（CustomEvent 解耦）+ ⌘K 提示 + 版权。
 * Home 与所有内页共用，保持收尾一致。
 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Made with ♥ by TangTang</span>
        <button
          type="button"
          className={styles.wechat}
          onClick={() => window.dispatchEvent(new CustomEvent('tang:open-wechat'))}
          aria-label="查看微信二维码"
        >
          微信
        </button>
        <button
          type="button"
          className={styles.cmdk}
          onClick={() => window.dispatchEvent(new CustomEvent('tang:open-cmdk'))}
          aria-label="打开命令面板"
        >
          ⌘K
        </button>
      </p>
      <p className={styles.meta}>
        <Link to="/about" className={styles.link}>关于</Link>
        <span aria-hidden="true">·</span>
        <span>© {new Date().getFullYear()} TangTang</span>
      </p>
    </footer>
  )
}
