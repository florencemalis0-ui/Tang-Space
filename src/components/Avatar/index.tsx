import { useRef, useState } from 'react'
import styles from './index.module.css'

interface AvatarProps {
  onClick?: () => void
}

export function Avatar({ onClick }: AvatarProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleLoad = () => {
    imgRef.current?.classList.add('show')
    setImgLoaded(true)
  }

  const handleError = () => {
    setImgError(true)
    setImgLoaded(true) // 失败也放开 overlay，保证点击微信仍可用
  }

  const dayStamp = Math.floor(Date.now() / 86400000)
  const avatarUrl = `https://avatars.githubusercontent.com/florencemalis0-ui?t=${dayStamp}`

  return (
    <button
      className={styles.avatar}
      onClick={onClick}
      aria-label="点击查看微信二维码"
    >
      {/* 头像图片 */}
      <div className={styles.imgWrap}>
        {imgError ? (
          <div className={styles.fallback} aria-hidden="true">T</div>
        ) : (
          <img
            ref={imgRef}
            src={avatarUrl}
            alt="TangTang"
            className={`js-avatar ${styles.img}`}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
      </div>

      {/* Hover 覆盖层 */}
      <div
        className={styles.overlay}
        style={{ visibility: imgLoaded ? 'visible' : 'hidden' }}
      >
        <span className={styles.overlayText}>Be Brave</span>
        <span className={styles.overlayYear}>2026 · 向前</span>
      </div>
    </button>
  )
}
