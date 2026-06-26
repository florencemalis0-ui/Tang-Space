import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NOTE_TYPE_LABEL, notes, type Note, type NoteType } from '../../data/notes'
import { useBingBg } from '../../hooks/useBingBg'
import { useTilt } from '../../hooks/useTilt'
import { useBlurUp } from '../../hooks/useBlurUp'
import './index.css'

const FILTERS: Array<NoteType | 'all'> = ['all', 'tech', 'life', 'travel', 'thought']

// 精选优先，其次按日期倒序
function sortNotes(items: Note[]) {
  return [...items].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return b.date.localeCompare(a.date)
  })
}

function NoteCard({ note }: { note: Note }) {
  const images = note.images ?? []
  const hasImages = images.length > 0
  const cover = hasImages ? images[0] : null
  const tilt = useTilt()
  const blur = useBlurUp()

  return (
    <Link
      to={`/notes/${note.id}`}
      className={`note-card note-card--${note.type}${note.featured ? ' note-card--featured' : ''}`}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="note-card__media">
        {cover ? (
          <img
            src={cover}
            alt={note.title}
            loading="lazy"
            ref={blur.ref}
            onLoad={blur.onLoad}
            className={blur.className}
          />
        ) : (
          <div className={`note-card__banner note-card__banner--${note.type}`} />
        )}
        <span className="note-card__type">{NOTE_TYPE_LABEL[note.type]}</span>
        {hasImages ? <span className="note-card__image-count">{images.length} 图</span> : null}
      </div>

      <div className="note-card__body">
        <h2 className="note-card__title">{note.title}</h2>
        <p className="note-card__summary">{note.summary}</p>
        <div className="note-card__tags">
          {note.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <time className="note-card__date" dateTime={note.date}>{note.date}</time>
      </div>
    </Link>
  )
}

export default function Blog() {
  const pageRef = useRef<HTMLElement>(null)
  const [activeType, setActiveType] = useState<NoteType | 'all'>('all')

  useBingBg(pageRef)

  const filteredNotes = useMemo(() => {
    const list = activeType === 'all' ? notes : notes.filter((n) => n.type === activeType)
    return sortNotes(list)
  }, [activeType])

  // 统计：总数 + 按类型分布
  const stats = useMemo(() => {
    const byType: Record<NoteType, number> = { tech: 0, life: 0, travel: 0, thought: 0 }
    notes.forEach((n) => {
      byType[n.type] += 1
    })
    return { total: notes.length, byType }
  }, [])

  // 聚焦标签：按出现频率取前 8
  const focusTags = useMemo(() => {
    const counts: Record<string, number> = {}
    notes.forEach((n) =>
      n.tags.forEach((t) => {
        counts[t] = (counts[t] ?? 0) + 1
      })
    )
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8)
      .map(([tag]) => tag)
  }, [])

  // 最近记录：日期倒序前 4
  const recent = useMemo(() => sortNotes(notes).slice(0, 4), [])

  return (
    <main ref={pageRef} className="notes-page notes-page--wallpaper">
      <section className="notes-shell">
        <header className="notes-hero">
          <div className="notes-hero__top">
            <Link to="/" className="inner-page__back notes-hero__back">← 返回首页</Link>
            <span className="inner-page__badge">Notes</span>
          </div>
          <h1 className="notes-hero__title">Notes</h1>
          <p className="notes-hero__desc">
            不是博客，更像我留下的一些痕迹。技术、生活、旅途和突然冒出来的想法，都先放在这里。
          </p>
        </header>

        <nav className="notes-toolbar" aria-label="记录分类">
          {FILTERS.map((type) => {
            const count = type === 'all' ? stats.total : stats.byType[type as NoteType]
            return (
              <button
                key={type}
                type="button"
                aria-pressed={activeType === type}
                className={activeType === type ? 'notes-filter notes-filter--active' : 'notes-filter'}
                onClick={() => setActiveType(type)}
              >
                {NOTE_TYPE_LABEL[type]}
                <span className="notes-filter__count">{count}</span>
              </button>
            )
          })}
        </nav>

        <div className="notes-layout">
          <div className="notes-grid">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>

          <aside className="notes-side" aria-label="记录概览">
            <section className="notes-side__panel notes-stats">
              <h2>记录</h2>
              <div className="notes-stats__total">
                <span className="notes-stats__num">{stats.total}</span>
                <span className="notes-stats__label">条记录</span>
              </div>
              <ul className="notes-stats__breakdown">
                {FILTERS.filter((t) => t !== 'all').map((t) => (
                  <li key={t}>
                    <span className="notes-stats__type">{NOTE_TYPE_LABEL[t as NoteType]}</span>
                    <span className="notes-stats__count">{stats.byType[t as NoteType]}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="notes-side__panel">
              <h2>聚焦</h2>
              <div className="notes-focus-tags">
                {focusTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </section>

            <section className="notes-side__panel notes-side__panel--quiet">
              <h2>最近</h2>
              <ol className="notes-recent">
                {recent.map((note) => (
                  <li key={note.id}>
                    <Link to={`/notes/${note.id}`} className="notes-recent__item">
                      <span className="notes-recent__date">{note.date}</span>
                      <span className="notes-recent__title">{note.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}
