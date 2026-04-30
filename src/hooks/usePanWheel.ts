import { useCallback } from 'react'

export default function usePanWheel() {
  return useCallback((e: React.WheelEvent<HTMLElement>) => {
    const el = e.currentTarget
    if (!el) return
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
    if (el.scrollWidth <= el.clientWidth) return
    e.preventDefault()
    el.scrollLeft += e.deltaY
  }, [])
}

