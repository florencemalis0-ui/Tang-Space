import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * 卡片 3D 倾斜 Hook
 *
 * 鼠标在卡片上移动时，按鼠标位置给卡片做轻微 3D 旋转，离开回正。
 *
 * 克制校准（对齐 DESIGN.md "The Engineer's Signal" 精确感）：
 * - MAX_TILT=4°，硬上限 5°，绝不碰 10-15° 的 2019 创意作品集失败模式
 * - 不加 glare/高光、不叠加 scale、不加 spring 物理 —— 只做旋转
 * - 用 CSS 变量 --rx/--ry 注入，CSS 始终是 transform 的唯一真相源
 *   （与现有 :hover 的 translateY 合并进同一条 transform 声明，互不破坏）
 * - rAF 合批：每帧最多写一次，避免 60-120Hz setProperty 与 blur 合成叠加掉帧
 *
 * 降级：reduced-motion 时 no-op；CSS 层另有 !important 把 --rx/--ry 锁 0
 *   覆盖运行时切换后的内联值（见 .note-card reduced-motion 块）。
 * 触屏无 mousemove 自然无 tilt；键盘用户无 tilt —— 纯指针增强。
 */

const MAX_TILT = 4 // 倾斜硬上限（度）

export function useTilt() {
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  const target = useRef({ rx: 0, ry: 0 })
  const rafRef = useRef(0)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduced) return
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      // 鼠标相对卡片中心归一化到 -1..1
      const dx = ((e.clientX - r.left) / r.width - 0.5) * 2
      const dy = ((e.clientY - r.top) / r.height - 0.5) * 2
      // X 取反：鼠标上移时卡顶向观察者倾，符合自然感
      target.current.rx = -dy * MAX_TILT
      target.current.ry = dx * MAX_TILT
      // 每帧最多写一次
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          el.style.setProperty('--rx', target.current.rx.toFixed(2) + 'deg')
          el.style.setProperty('--ry', target.current.ry.toFixed(2) + 'deg')
          rafRef.current = 0
        })
      }
    },
    [reduced]
  )

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
    // 重置变量，让 CSS 的 :hover transform 自然回正（不直接写 transform）
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }, [])

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    },
    []
  )

  return { onMouseMove, onMouseLeave }
}
