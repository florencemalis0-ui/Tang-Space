import { useState, useEffect } from 'react'

interface HitokotoResult {
  hitokoto: string
  from: string
}

export function useHitokoto(): HitokotoResult {
  const [data, setData] = useState<HitokotoResult>({
    hitokoto: '如何得与凉风约, 不共尘沙一并来!',
    from: '中牟道中',
  })

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    fetch('https://v1.hitokoto.cn', { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => {
        if (res.hitokoto && res.from) {
          setData({ hitokoto: res.hitokoto, from: res.from })
        }
      })
      .catch(() => {
        // 加载失败或超时，保持默认值
      })
      .finally(() => clearTimeout(timeout))

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  return data
}
