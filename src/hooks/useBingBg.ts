import { useEffect } from 'react'

/**
 * Bing 每日壁纸 Hook
 *
 * Bing 提供最近 8 天的高质量壁纸（idx 0~7）。
 * 每次刷新页面切换到下一张，8 张轮播。
 *
 * 使用 bing.biturl.top 镜像 API，国内访问稳定，直接返回图片，无跨域问题。
 */

const BING_TOTAL = 8 // Bing 最多提供最近 8 天的壁纸

// 每次刷新 index +1，到 8 归零
function getNextIndex(): number {
  const key = 'bing-bg-index'
  const current = parseInt(sessionStorage.getItem(key) ?? '-1', 10)
  const next = (current + 1) % BING_TOTAL
  sessionStorage.setItem(key, String(next))
  return next
}

// bing.biturl.top 是稳定的 Bing 壁纸镜像，直接返回图片，国内可用
function getBingUrl(idx: number): string {
  return `https://bing.biturl.top/?resolution=1920&format=image&index=${idx}&mkt=zh-CN`
}

function applyBg(panelEl: HTMLElement, url: string) {
  panelEl.style.backgroundImage = `url('${url}')`
  panelEl.style.backgroundPosition = 'center center'
  panelEl.style.backgroundRepeat = 'no-repeat'
  panelEl.style.backgroundColor = '#0d0d1a'
  panelEl.style.backgroundSize = 'cover'
}

export function useBingBg(panelRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const idx = getNextIndex()
    const url = getBingUrl(idx)
    applyBg(panel, url)
  }, [panelRef])
}
