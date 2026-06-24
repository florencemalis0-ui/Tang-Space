import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NOTE_TYPE_LABEL, notes } from '../../data/notes'
import { useBingBg } from '../../hooks/useBingBg'

const INITIAL_IMAGE_COUNT = 12

export default function NoteDetail() {
  const { id } = useParams()
  const pageRef = useRef<HTMLElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  useBingBg(pageRef)

  const note = notes.find((item) => item.id === id)

  const visibleImages = useMemo(() => {
    if (!note?.images) return []
    return expanded ? note.images : note.images.slice(0, INITIAL_IMAGE_COUNT)
  }, [expanded, note])

  if (!note) {
    return (
      <main ref={pageRef} className="notes-page notes-page--wallpaper">
        <section className="notes-shell note-detail note-detail--empty">
          <Link to="/notes" className="inner-page__back">← 返回记录</Link>
          <span className="inner-page__badge">Not Found</span>
          <h1 className="notes-hero__title">这条记录不存在</h1>
          <p className="notes-hero__desc">可能是链接写错了，或者这条记录已经被删除。</p>
        </section>
      </main>
    )
  }

  const images = note.images ?? []
  const hasImages = images.length > 0
  const hasHiddenImages = images.length > visibleImages.length
  const activeImage = activeImageIndex === null ? null : images[activeImageIndex]

  function showPrevImage() {
    setActiveImageIndex((current) => {
      if (current === null) return null
      return current === 0 ? images.length - 1 : current - 1
    })
  }

  function showNextImage() {
    setActiveImageIndex((current) => {
      if (current === null) return null
      return current === images.length - 1 ? 0 : current + 1
    })
  }

  return (
    <main ref={pageRef} className="notes-page notes-page--wallpaper">
      <article className="notes-shell note-detail">
        <header className="note-detail__header">
          <Link to="/notes" className="inner-page__back note-detail__back">← 返回记录</Link>
          <div className="note-detail__meta">
            <span>{NOTE_TYPE_LABEL[note.type]}</span>
            <span>{note.date}</span>
          </div>
          <h1 className="note-detail__title">{note.title}</h1>
          <p className="note-detail__summary">{note.summary}</p>
          <div className="note-card__tags note-detail__tags">
            {note.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        {hasImages ? (
          <section className="note-detail__gallery" aria-label="记录图片">
            <div className="note-detail__gallery-head">
              <h2>Photos</h2>
              <span>{visibleImages.length} / {images.length}</span>
            </div>

            <div className="note-detail__grid">
              {visibleImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className="note-detail__thumb"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`查看第 ${index + 1} 张图片`}
                >
                  <img src={image} alt={`${note.title} - 图片 ${index + 1}`} loading="lazy" />
                </button>
              ))}
            </div>

            {hasHiddenImages ? (
              <button className="note-detail__more" type="button" onClick={() => setExpanded(true)}>
                展开全部 {images.length} 张照片
              </button>
            ) : null}
          </section>
        ) : null}
      </article>

      {activeImage ? (
        <div className="note-lightbox" role="dialog" aria-modal="true" aria-label="图片预览">
          <button className="note-lightbox__close" type="button" onClick={() => setActiveImageIndex(null)}>关闭</button>
          <button className="note-lightbox__nav note-lightbox__nav--prev" type="button" onClick={showPrevImage}>←</button>
          <img src={activeImage} alt={`${note.title} - 大图预览`} />
          <button className="note-lightbox__nav note-lightbox__nav--next" type="button" onClick={showNextImage}>→</button>
          <div className="note-lightbox__count">
            {(activeImageIndex ?? 0) + 1} / {images.length}
          </div>
        </div>
      ) : null}
    </main>
  )
}
