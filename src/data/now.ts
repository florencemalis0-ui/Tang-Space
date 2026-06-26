export type NowCategory = 'working' | 'reading' | 'learning' | 'building'

export interface NowItem {
  id: string
  category: NowCategory
  title: string // 那件事本身，如《Designing Data-Intensive Applications》
  detail?: string // 一行上下文/感受，可选
  link?: { label: string; href: string } // 可选：内链（/开头走 SPA 路由）或外链
}

export const NOW_CATEGORY_LABEL: Record<NowCategory, string> = {
  working: '在做',
  reading: '在读',
  learning: '在学',
  building: '在建',
}

// 最近更新时间。更新 nowItems 时同步改这里（硬编码，无后端，靠手动维护）。
export const nowUpdatedAt = '2026.06.26'

/**
 * Now —— 此刻在做什么。比简历近一点。
 *
 * 内容新增模板：
 * { id: 'unique-id', category: 'working', title: '标题', detail: '一句话' }
 * { id: 'site', category: 'building', title: '这个站点', link: { label: '看看记录', href: '/notes' } }
 *
 * TODO: 把下面的内容换成你真实在做的。这是数据文件，改这里即可，不用动组件。
 * 换完记得同步上面的 nowUpdatedAt。
 */
export const nowItems: NowItem[] = [
  {
    id: 'ai-agent',
    category: 'working',
    title: 'AI Agent 工程化',
    detail: '把 Demo 推进到长期可运行的系统。',
  },
  {
    id: 'backend-stability',
    category: 'working',
    title: '后端系统稳定性',
    detail: 'GPU 算力调度与稳定性。',
  },
  {
    id: 'ddia',
    category: 'reading',
    title: '《Designing Data-Intensive Applications》',
    detail: '重读数据系统设计。',
  },
  {
    id: 'ebpf',
    category: 'learning',
    title: 'eBPF · 可观测性',
    detail: '内核态观测的新工具链。',
  },
  {
    id: 'this-site',
    category: 'building',
    title: '这个站点',
    detail: '慢慢长出来。',
    link: { label: '看看记录', href: '/notes' },
  },
  {
    id: 'life-log',
    category: 'building',
    title: '生活记录',
    detail: '照片、旅行、碎碎念。',
    link: { label: '看看记录', href: '/notes' },
  },
]
