import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { NOTE_TYPE_LABEL, notes, type Note, type NoteType } from '../../data/notes'
import { useBingBg } from '../../hooks/useBingBg'

const FILTERS: Array<NoteType | 'all'> = ['all', 'tech', 'life', 'travel', 'thought']

function getYear(date: string) {
  return date.slice(0, 4)
}

function getDayLabel(date: string) {
  const parts = date.split('.')
  if (parts.length >= 3) return `${parts[1]}.${parts[2]}`
  if (parts.length >= 2) return parts[1]
  return date
}

function groupNotesByYear(items: Note[]) {
  return items.reduce<Record<string, Note[]>>((groups, note) => {
    const year = getYear(note.date)
    groups[year] = groups[year] ?? []
    groups[year].push(note)
    return groups
  }, {})
}

function NoteTimelineItem({ note }: { note: Note }) {
  return (
    <Link to={`/notes/${note.id}`} className={`notes-entry notes-entry--${note.type}`}>
      <time className="notes-entry__date">{getDayLabel(note.date)}</time>
      <div className="notes-entry__content">
        <div className="notes-entry__meta">
          <span>{NOTE_TYPE_LABEL[note.type]}</span>
          <span>{note.tags.join(' / ')}</span>
        </div>
        <h2>{note.title}</h2>
        <p>{note.summary}</p>

      </div>
    </Link>
  )
}

export default function Blog() {
  const pageRef = useRef<HTMLElement>(null)
  const [activeType, setActiveType] = useState<NoteType | 'all'>('all')

  useBingBg(pageRef)

  const filteredNotes = useMemo(() => {
    if (activeType === 'all') return notes
    return notes.filter((note) => note.type === activeType)
  }, [activeType])

  const groupedNotes = useMemo(() => groupNotesByYear(filteredNotes), [filteredNotes])
  const years = Object.keys(groupedNotes).sort((a, b) => Number(b) - Number(a))

  return (
    <main ref={pageRef} className="notes-page notes-page--wallpaper notes-page--timeline">
      <section className="notes-shell notes-timeline-shell">
        <header className="notes-timeline-hero">
          <div className="notes-timeline-hero__top">
            <Link to="/" className="inner-page__back notes-hero__back">← 返回首页</Link>
            <span className="inner-page__badge">Notes</span>
          </div>
          <div className="notes-timeline-hero__copy">
            <h1>Notes</h1>
            <p>不是博客，更像我留下的一些痕迹。技术、生活、旅途和突然冒出来的想法，都先放在这里。</p>
          </div>
        </header>

        <nav className="notes-index" aria-label="记录分类">
          {FILTERS.map((type, index) => (
            <button
              key={type}
              type="button"
              className={activeType === type ? 'notes-index__item notes-index__item--active' : 'notes-index__item'}
              onClick={() => setActiveType(type)}
            >
              {NOTE_TYPE_LABEL[type]}
              {index < FILTERS.length - 1 ? <span>·</span> : null}
            </button>
          ))}
        </nav>

        <section className="notes-timeline" aria-label="记录时间轴">
          {years.map((year) => (
            <section key={year} className="notes-year">
              <h2 className="notes-year__label">{year}</h2>
              <div className="notes-year__list">
                {groupedNotes[year].map((note) => (
                  <NoteTimelineItem key={note.id} note={note} />
                ))}
              </div>
            </section>
          ))}
        </section>
      </section>
    </main>
  )
}
