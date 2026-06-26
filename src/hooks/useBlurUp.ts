import { useCallback, useState } from 'react'

/**
 * 图片 blur-up 渐显 Hook
 *
 * 图片以模糊+透明态加载，加载完成后清晰淡入。功能性渐进加载，非装饰。
 *
 * 治「缓存图 onLoad 不触发」的坑：
 * - ref 回调在挂载时检查 img.complete && naturalWidth>0，缓存图立即标记 loaded
 * - onLoad 处理流式加载（非缓存）
 * - 二者幂等，重复 setLoaded(true) 无副作用
 *
 * 用法：
 *   const blur = useBlurUp()
 *   <img ref={blur.ref} onLoad={blur.onLoad} className={blur.className} />
 *   CSS：img 基态 filter:blur(10px);opacity:0；img.is-loaded 清晰态
 */

export function useBlurUp() {
  const [loaded, setLoaded] = useState(false)

  const ref = useCallback((img: HTMLImageElement | null) => {
    // 缓存图挂载即 complete：兜底触发，否则永久模糊
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  const onLoad = useCallback(() => setLoaded(true), [])

  return { ref, onLoad, className: loaded ? 'is-loaded' : '' }
}
