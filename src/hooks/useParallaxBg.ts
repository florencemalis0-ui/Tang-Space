import { useEffect } from 'react'

/**
 * 鼠标视差壁纸 Hook
 *
 * 壁纸层跟随鼠标做轻微反向位移，营造「壁纸在内容窗后方更深处」的纵深感。
 *
 * 克制校准（对齐 DESIGN.md "intentional motion, not whimsy"）：
 * - 偏移量 ±12px / ±8px，肉眼可感但不致晕
 * - lerp 0.12 平滑追随，无机械感
 * - 只动画 transform（translate3d），走合成器，零 reflow/repaint
 * - rAF 到位即停帧，空闲零开销
 *
 * 降级闸门：reduced-motion 或触屏 (pointer: coarse) 直接 return，不绑监听。
 * CSS 层另有 !important 兜底压住运行时切换后的内联 transform（见 .panel-cover__bg）。
 */

const MAX_X = 12 // 水平最大位移 px
const MAX_Y = 8 // 垂直最大位移 px
const EASE = 0.12 // lerp 缓动系数

export function useParallaxBg(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = (q: string) => window.matchMedia(q).matches
    // 权威闸门：偏好减少动效 / 触屏 → 不启用视差
    if (mq('(prefers-reduced-motion: reduce)') || mq('(pointer: coarse)')) return

    let raf = 0
    let tx = 0 // 目标位移
    let ty = 0
    let cx = 0 // 当前位移
    let cy = 0

    const onMove = (e: MouseEvent) => {
      // 鼠标位置归一化到 -1..1（屏幕中心为 0）
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      // 反向位移：壁纸往鼠标对侧移，强化纵深
      tx = -nx * MAX_X
      ty = -ny * MAX_Y
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const tick = () => {
      cx += (tx - cx) * EASE
      cy += (ty - cy) * EASE
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`
      // 到位即停帧，空闲零开销
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}
