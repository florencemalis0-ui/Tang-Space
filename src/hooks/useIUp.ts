import { useEffect } from 'react'

/**
 * iUp 错落淡入动画
 * 挂载后延迟，依次给 .iUp 元素添加 .up class
 */

// 时序常量（与 index.css 的 .iUp transition 配合）
const INITIAL_DELAY = 300 // 开始级联前的初始延迟
const STAGGER = 150 // 每个元素的错落间隔

export function useIUp(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const timers: ReturnType<typeof setTimeout>[] = []

    const init = setTimeout(() => {
      const elements = container.querySelectorAll<HTMLElement>('.iUp')
      let time = 0

      elements.forEach((el) => {
        const t = setTimeout(() => {
          el.classList.add('up')
        }, time)
        timers.push(t)
        time += STAGGER
      })
    }, INITIAL_DELAY)

    return () => {
      clearTimeout(init)
      timers.forEach(clearTimeout)
    }
  // 只在挂载时执行一次
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
