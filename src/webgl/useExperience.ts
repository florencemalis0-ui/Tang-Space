import { useCallback, useEffect, useRef } from 'react'
import { Experience } from './Experience'

/**
 * 接入 3D 主控到 <canvas>。
 *
 * - 滚动驱动：监听 scroll，把页面滚动进度映射到 0..1（基于内容高度）
 * - 鼠标视差：归一化到 -1..1
 * - 降级：reduced-motion / 触屏 自动检测并传给 Experience
 * - 清理：unmount 时 dispose 全部 GL 资源
 *
 * @param scrollRef 包裹可滚动内容的容器（用于计算滚动进度）
 */
export function useExperience(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const expRef = useRef<Experience | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mq = (q: string) => window.matchMedia(q).matches
    const reducedMotion = mq('(prefers-reduced-motion: reduce)')
    const isMobile = mq('(max-width: 768px)') || mq('(pointer: coarse)')

    const exp = new Experience(canvas, { reducedMotion, isMobile })
    expRef.current = exp

    const onScroll = () => {
      // 内容可滚动距离（排除视口高度）；hero 之后才有滚动
      const max = document.body.scrollHeight - window.innerHeight
      if (max <= 0) {
        exp.setScroll(0)
        return
      }
      exp.setScroll(window.scrollY / max)
    }
    const onMouse = (e: MouseEvent) => {
      exp.setMouse(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      )
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // 触屏 pointer:coarse 不绑鼠标视差（铁律8：tap 合成的 mousemove 会让相机永久歪斜）
    if (!isMobile) {
      window.addEventListener('mousemove', onMouse, { passive: true })
    }

    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
      exp.dispose()
      expRef.current = null
    }
  }, [canvasRef])

  // 切页复位 3D 滚动进度（供 App 在路由变化时调用）
  const resetScroll = useCallback(() => {
    expRef.current?.resetScroll()
  }, [])

  return resetScroll
}
