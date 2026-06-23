import { useEffect, useRef } from 'react'
import styles from './index.module.css'

interface WeChatModalProps {
  visible: boolean
  onClose: () => void
}

export function WeChatModal({ visible, onClose }: WeChatModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = modalRef.current
    if (!el) return
    if (visible) {
      el.style.display = 'flex'
      requestAnimationFrame(() => {
        el.style.opacity = '1'
      })
    } else {
      el.style.opacity = '0'
      const t = setTimeout(() => {
        if (modalRef.current) modalRef.current.style.display = 'none'
      }, 280)
      return () => clearTimeout(t)
    }
  }, [visible])

  // ESC 关闭
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [visible, onClose])

  return (
    <div
      ref={modalRef}
      className={styles.backdrop}
      style={{ display: 'none', opacity: 0 }}
      onClick={onClose}
    >
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose} aria-label="关闭">✕</button>
        <p className={styles.title}>微信扫码添加</p>
        <img
          src="./assets/img/wechat.jpg"
          alt="WeChat QR Code"
          className={styles.qr}
        />
      </div>
    </div>
  )
}
