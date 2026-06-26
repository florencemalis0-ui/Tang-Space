import { useEffect, useRef } from 'react'
import styles from './index.module.css'

interface WeChatModalProps {
  visible: boolean
  onClose: () => void
}

export function WeChatModal({ visible, onClose }: WeChatModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  // 记录打开前的焦点，关闭后归还
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = modalRef.current
    if (!el) return
    if (visible) {
      lastFocused.current = document.activeElement as HTMLElement
      el.style.display = 'flex'
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        closeRef.current?.focus()
      })
    } else {
      el.style.opacity = '0'
      const t = setTimeout(() => {
        if (modalRef.current) modalRef.current.style.display = 'none'
      }, 280)
      lastFocused.current?.focus?.()
      return () => clearTimeout(t)
    }
  }, [visible])

  // ESC 关闭 + Tab 焦点陷阱
  useEffect(() => {
    if (!visible) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [visible, onClose])

  return (
    <div
      ref={modalRef}
      className={styles.backdrop}
      style={{ display: 'none', opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="微信二维码"
      onClick={onClose}
    >
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="关闭">✕</button>
        <p className={styles.title}>微信扫码添加</p>
        <img
          src={import.meta.env.BASE_URL + 'assets/img/wechat.jpg'}
          alt="WeChat QR Code"
          className={styles.qr}
        />
      </div>
    </div>
  )
}
