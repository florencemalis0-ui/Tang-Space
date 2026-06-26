import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { notes, NOTE_TYPE_LABEL } from '../../data/notes'
import { EMAIL_B64, GITHUB_URL } from '../../data/contacts'
import { decryptEmail } from '../../utils/email'
import styles from './index.module.css'

type Group = '跳转' | '笔记' | '外部' | '操作'

interface Command {
  id: string
  group: Group
  title: string
  subtitle?: string
  keywords?: string
  run: () => void
}

// 导航项（与 Navigation 组件保持一致）
const NAV_COMMANDS = [
  { path: '/', label: '首页' },
  { path: '/notes', label: '记录' },
  { path: '/resume', label: '简历' },
  { path: '/about', label: '关于' },
]

export function CommandPalette() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const backdropRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  // 记录打开前的焦点，关闭后归还
  const lastFocused = useRef<HTMLElement | null>(null)

  const close = () => setOpen(false)

  // 全局热键：⌘K / Ctrl+K 唤出或关闭
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault() // 吞掉浏览器原生「聚焦搜索栏」行为
        setOpen((v) => !v)
      }
    }
    const openCmdK = () => setOpen(true)
    window.addEventListener('keydown', handler)
    // 页面上的 ⌘K 提示按钮通过事件唤起（与微信弹窗同一解耦模式）
    window.addEventListener('tang:open-cmdk', openCmdK)
    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('tang:open-cmdk', openCmdK)
    }
  }, [])

  // 打开/关闭生命周期（仿 WeChatModal：display+opacity+rAF，归还焦点）
  useEffect(() => {
    const el = backdropRef.current
    if (!el) return
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement
      el.style.display = 'flex'
      setQuery('')
      setActiveIndex(0)
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        el.style.opacity = '1'
        inputRef.current?.focus()
      })
      return () => {}
    }
    el.style.opacity = '0'
    document.body.style.overflow = ''
    const t = setTimeout(() => {
      if (backdropRef.current) backdropRef.current.style.display = 'none'
    }, 280)
    lastFocused.current?.focus?.()
    return () => clearTimeout(t)
  }, [open])

  // 构造扁平命令数组
  const commands = useMemo<Command[]>(() => {
    const go = (path: string) => () => {
      navigate(path)
      close()
    }
    const nav: Command[] = NAV_COMMANDS.map((n) => ({
      id: `nav-${n.path}`,
      group: '跳转',
      title: n.label,
      subtitle: n.path,
      run: go(n.path),
    }))
    const noteCmds: Command[] = notes.map((n) => ({
      id: `note-${n.id}`,
      group: '笔记',
      title: n.title,
      subtitle: `${n.date} · ${NOTE_TYPE_LABEL[n.type]}`,
      keywords: [n.title, n.summary, n.tags.join(' '), NOTE_TYPE_LABEL[n.type]].join(' '),
      run: go(`/notes/${n.id}`),
    }))
    const external: Command[] = [
      {
        id: 'ext-github',
        group: '外部',
        title: 'GitHub',
        subtitle: '@florencemalis0-ui',
        keywords: 'github 代码 源码',
        run: () => {
          window.open(GITHUB_URL, '_blank', 'noopener,noreferrer')
          close()
        },
      },
    ]
    const actions: Command[] = [
      {
        id: 'act-wechat',
        group: '操作',
        title: '微信',
        subtitle: '扫码添加',
        keywords: 'wechat 联系 加我',
        run: () => {
          window.dispatchEvent(new CustomEvent('tang:open-wechat'))
          close()
        },
      },
      {
        id: 'act-email',
        group: '操作',
        title: '邮箱',
        subtitle: '点击发送',
        keywords: 'email mail 联系',
        run: () => {
          decryptEmail(EMAIL_B64)
          close()
        },
      },
    ]
    return [...nav, ...noteCmds, ...external, ...actions]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  // 过滤（简单子串匹配）
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) =>
      `${c.title} ${c.subtitle ?? ''} ${c.keywords ?? ''}`.toLowerCase().includes(q)
    )
  }, [commands, query])

  // query 变化重置选中项
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  // 选中项滚动到可见
  useEffect(() => {
    itemRefs.current[activeIndex]?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, filtered])

  const move = (delta: number) => {
    if (!filtered.length) return
    setActiveIndex((i) => (i + delta + filtered.length) % filtered.length)
  }

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      move(1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      move(-1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[activeIndex]?.run()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
    } else if (e.key === 'Tab') {
      // 焦点陷阱：input ↔ 关闭按钮循环
      e.preventDefault()
      closeRef.current?.focus()
    }
  }

  const onCloseKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      inputRef.current?.focus()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
    }
  }

  const activeId = filtered[activeIndex] ? `cmd-${activeIndex}` : undefined

  // 分组渲染：沿 filtered 扁平顺序，group 变化时插入分组标题
  let currentGroup: Group | null = null

  return (
    <div
      ref={backdropRef}
      className={styles.backdrop}
      style={{ display: 'none', opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="命令面板"
      onClick={close}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.searchIcon} aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            className={styles.input}
            placeholder="输入命令或搜索…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            role="combobox"
            aria-expanded={open}
            aria-controls="cmd-listbox"
            aria-autocomplete="list"
            aria-activedescendant={activeId}
            autoComplete="off"
            spellCheck={false}
          />
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={close}
            onKeyDown={onCloseKeyDown}
            aria-label="关闭命令面板"
          >
            ✕
          </button>
        </div>

        <div className={styles.list} id="cmd-listbox" role="listbox">
          {filtered.length === 0 ? (
            <div className={styles.empty} role="presentation">
              无匹配命令
            </div>
          ) : (
            filtered.map((cmd, i) => {
              const nodes: React.ReactNode[] = []
              if (cmd.group !== currentGroup) {
                currentGroup = cmd.group
                nodes.push(
                  <div key={`g-${cmd.group}`} className={styles.group} aria-hidden="true">
                    {cmd.group}
                  </div>
                )
              }
              nodes.push(
                <div
                  key={cmd.id}
                  id={`cmd-${i}`}
                  ref={(el) => {
                    itemRefs.current[i] = el
                  }}
                  role="option"
                  aria-selected={i === activeIndex}
                  className={`${styles.item} ${i === activeIndex ? styles.itemActive : ''}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => cmd.run()}
                >
                  <span className={styles.itemTitle}>{cmd.title}</span>
                  {cmd.subtitle && (
                    <span className={styles.itemSubtitle}>{cmd.subtitle}</span>
                  )}
                </div>
              )
              return nodes
            })
          )}
        </div>

        <div className={styles.footer} aria-hidden="true">
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>↑</kbd>
            <kbd className={styles.footerKbd}>↓</kbd>
            选择
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>↵</kbd>
            执行
          </span>
          <span className={styles.footerHint}>
            <kbd className={styles.footerKbd}>esc</kbd>
            关闭
          </span>
        </div>
      </div>
    </div>
  )
}
