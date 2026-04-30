import { useEffect, useMemo, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLenisScroll } from '@/components/LenisProvider'
import { site } from '@/content/site'

type NavItem = { id: string; label: string }

export default function TopNav() {
  const { scrollTo } = useLenisScroll()
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  const items = useMemo<NavItem[]>(
    () => [
      { id: 'business', label: '核心业务' },
      { id: 'devices', label: '设备与产品' },
      { id: 'culture', label: '文化与园景' },
      { id: 'global', label: '全球布局' },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full',
        elevated ? 'bg-white/65 backdrop-blur-xl shadow-soft' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 sm:px-8">
        <button
          type="button"
          onClick={() => scrollTo('#top')}
          className="group inline-flex items-center gap-2 rounded-full border border-line/60 bg-white/60 px-3 py-1.5 text-sm font-medium text-ink backdrop-blur-xl transition hover:border-line hover:bg-white"
        >
          <span className="font-display text-[13px] tracking-[0.08em]">{site.brand.name}</span>
          <span className="h-1 w-1 rounded-full bg-brand/80" />
          <span className="hidden text-muted sm:inline">{site.brand.tagline}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => scrollTo(`#${it.id}`, { offset: -84 })}
              className="rounded-full px-3 py-2 text-sm text-muted transition hover:bg-white/70 hover:text-ink"
            >
              {it.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo('#contact', { offset: -84 })}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:bg-ink/90"
          >
            联系我们
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line/60 bg-white/60 p-2 backdrop-blur-xl transition hover:bg-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '关闭菜单' : '打开菜单'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="mx-auto max-w-[1200px] px-6 pb-4 sm:px-8">
          <div className="rounded-3xl border border-line/70 bg-white/75 p-3 backdrop-blur-xl">
            <div className="grid gap-1">
              {items.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => {
                    scrollTo(`#${it.id}`, { offset: -84 })
                    setOpen(false)
                  }}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-ink transition hover:bg-white"
                >
                  {it.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollTo('#contact', { offset: -84 })
                  setOpen(false)
                }}
                className="mt-1 rounded-2xl bg-ink px-4 py-3 text-left text-sm font-medium text-white"
              >
                联系我们
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

