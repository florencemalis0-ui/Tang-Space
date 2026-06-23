import { useEffect } from 'react'

/**
 * 本地壁纸背景 Hook
 * 图片放在 public/assets/img/bg/ 目录下，文件名列表在下方 BG_IMAGES 中维护。
 * 每次刷新/访问按当天日期固定选一张（同一天看到同一张壁纸）。
 * 
 * 添加壁纸：把图片放到 public/assets/img/bg/ 并在 BG_IMAGES 数组里加上文件名。
 */
const BG_IMAGES: string[] = [
  // 在这里添加你的壁纸文件名，例如：
  // 'wallpaper1.jpg',
  // 'wallpaper2.jpg',
]

function applyLocalBg(panelEl: HTMLElement) {
  if (BG_IMAGES.length === 0) {
    // 没有配置壁纸时使用纯色兜底
    panelEl.style.backgroundColor = '#1a1a2e'
    return
  }

  // 按天数取模，同一天同一张壁纸
  const dayIndex = Math.floor(Date.now() / 86400000)
  const index = dayIndex % BG_IMAGES.length
  const fileName = BG_IMAGES[index]

  const url = `./assets/img/bg/${fileName}`
  panelEl.style.backgroundImage = `url('${url}')`
  panelEl.style.backgroundPosition = 'center center'
  panelEl.style.backgroundRepeat = 'no-repeat'
  panelEl.style.backgroundColor = '#1a1a2e'
  panelEl.style.backgroundSize = 'cover'
}

export function useBingBg(panelRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (panelRef.current) {
      applyLocalBg(panelRef.current)
    }
  }, [panelRef])
}
