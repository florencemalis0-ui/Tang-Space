import { useEffect } from 'react'

/**
 * iUp 错落淡入动画
 * 挂载后延迟 300ms，依次给 .iUp 元素添加 .up class
 */
export function useIUp(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const timers: ReturnType<typeof setTimeout>[] = []

    const init = setTimeout(() => {
      const elements = container.querySelectorAll<HTMLElement>('.iUp')
      let time = 0
      const duration = 150

      elements.forEach((el) => {
        const t = setTimeout(() => {
          el.classList.add('up')
        }, time)
        timers.push(t)
        time += duration
      })
    }, 300)

    return () => {
      clearTimeout(init)
      timers.forEach(clearTimeout)
    }
  // 只在挂载时执行一次
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
