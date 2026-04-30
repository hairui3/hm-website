import Lenis from 'lenis'
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type LenisContextValue = {
  scrollTo: (target: string | number | HTMLElement, opts?: { offset?: number }) => void
}

const LenisContext = createContext<LenisContextValue | null>(null)

export function useLenisScroll() {
  const ctx = useContext(LenisContext)
  if (!ctx) throw new Error('useLenisScroll must be used within LenisProvider')
  return ctx
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setEnabled(!mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) {
      lenisRef.current?.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
      document.body.classList.remove('lenis')
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
      gestureOrientation: 'vertical',
    })

    lenisRef.current = lenis
    document.documentElement.classList.add('lenis')
    document.body.classList.add('lenis')

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
      document.documentElement.classList.remove('lenis')
      document.body.classList.remove('lenis')
    }
  }, [enabled])

  const value = useMemo<LenisContextValue>(() => {
    return {
      scrollTo: (target, opts) => {
        const offset = opts?.offset ?? 0
        const lenis = lenisRef.current
        if (lenis) {
          lenis.scrollTo(target, { offset })
          return
        }
        if (typeof target === 'number') {
          window.scrollTo({ top: target + offset, behavior: 'smooth' })
          return
        }
        const el =
          typeof target === 'string' ? (document.querySelector(target) as HTMLElement | null) : target
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      },
    }
  }, [])

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
}

