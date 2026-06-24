export type NoteType = 'tech' | 'life' | 'travel' | 'thought'

export interface Note {
  id: string
  type: NoteType
  title: string
  date: string
  summary: string
  tags: string[]
  images?: string[]
  featured?: boolean
}

export const NOTE_TYPE_LABEL: Record<NoteType | 'all', string> = {
  all: '全部',
  tech: '技术',
  life: '生活',
  travel: '旅行',
  thought: '随想',
}

/**
 * 图片辅助函数。
 *
 * 以后你只需要把图片放到：public/assets/img/life/
 * 然后在 notes 里写：lifeImages('hangzhou-01.jpg', 'hangzhou-02.jpg')
 */
export function lifeImages(...fileNames: string[]) {
  return fileNames.map((fileName) => `/Tang-Space/assets/img/life/${fileName}`)
}

/**
 * 内容新增模板：
 *
 * 无图随想：
 * {
 *   id: 'unique-id',
 *   type: 'thought',
 *   title: '标题',
 *   date: '2026.06.24',
 *   summary: '正文或摘要',
 *   tags: ['随想']
 * }
 *
 * 旅行照片：
 * {
 *   id: 'city-trip',
 *   type: 'travel',
 *   title: '城市 · 标题',
 *   date: '2026.06.24',
 *   summary: '旅行文案',
 *   tags: ['旅行', '照片'],
 *   images: lifeImages('xxx-01.jpg', 'xxx-02.jpg')
 * }
 */
export const notes: Note[] = [
  {
    id: 'ai-agent-engineering',
    type: 'tech',
    title: 'AI Agent 工程化实践：从 Demo 到系统',
    date: '2026.06.24',
    summary: '记录一个 AI 应用从想法到可用系统中遇到的问题、约束和取舍。技术不是做出来就结束，而是要能长期运行。',
    tags: ['AI', 'Backend', 'System Design'],
    // images: lifeImages('wechat.jpg', 'wechat.jpg', 'wechat.jpg'),
    featured: true,
  },
  {
    id: 'first-note-about-this-site',
    type: 'thought',
    title: '这个网站会慢慢长出来',
    date: '2026.06.24',
    summary: '我希望这里不只是简历，也像一个长期生长的地方：记录工程，也记录生活里的瞬间。',
    tags: ['随想', '生活'],
  },

]
