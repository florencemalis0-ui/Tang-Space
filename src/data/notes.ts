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
  body?: string // markdown 正文（content/notes/*.md 渲染）
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
 * 然后在 md frontmatter 里写：images: [hangzhou-01.jpg, hangzhou-02.jpg]
 */
export function lifeImages(...fileNames: string[]) {
  return fileNames.map((fileName) => `${import.meta.env.BASE_URL}assets/img/life/${fileName}`)
}

/**
 * 极简 frontmatter 解析：只支持本项目用到的 `key: value` 和 `tags: [a, b]`。
 * 不引完整 YAML 库（守「最小依赖」）。md frontmatter 格式见 content/notes/*.md。
 *
 * 格式：
 * ---
 * id: xxx
 * type: tech
 * title: 标题
 * date: 2026.06.24
 * summary: 摘要
 * tags: [AI, Backend]
 * featured: true
 * images: [a.jpg, b.jpg]
 * ---
 * 正文 markdown...
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { data: {}, body: raw }
  const yaml = m[1]
  const body = m[2].trim()
  const data: Record<string, unknown> = {}
  for (const line of yaml.split(/\r?\n/)) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const idx = t.indexOf(':')
    if (idx < 0) continue
    const key = t.slice(0, idx).trim()
    let val: unknown = t.slice(idx + 1).trim()
    // list: [a, b, c] → string[]
    if (typeof val === 'string' && val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
    }
    // bool
    else if (val === 'true') val = true
    else if (val === 'false') val = false
    // 去引号
    else if (typeof val === 'string') val = val.replace(/^['"]|['"]$/g, '')
    data[key] = val
  }
  return { data, body }
}

// 编译期读取 content/notes/*.md（?raw 拿原始字符串），解析 frontmatter 生成 notes 数组。
// 静态导入，无运行时 fetch，守 GitHub Pages 部署。消费方（Blog/NoteDetail/CommandPalette/About）
// 只见 notes 数组，契约不变。
const modules = import.meta.glob('/content/notes/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function buildNotes(): Note[] {
  const list: Note[] = []
  for (const [path, raw] of Object.entries(modules)) {
    const { data, body } = parseFrontmatter(raw)
    const id = String(data.id ?? path.split('/').pop()!.replace(/\.md$/, ''))
    let images: string[] | undefined
    if (Array.isArray(data.images)) {
      images = lifeImages(...(data.images as string[]))
    }
    list.push({
      id,
      type: (data.type as NoteType) ?? 'thought',
      title: String(data.title ?? id),
      date: String(data.date ?? ''),
      summary: String(data.summary ?? ''),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      images,
      featured: data.featured === true ? true : undefined,
      body: body || undefined,
    })
  }
  // 默认按日期倒序
  return list.sort((a, b) => b.date.localeCompare(a.date))
}

export const notes: Note[] = buildNotes()
