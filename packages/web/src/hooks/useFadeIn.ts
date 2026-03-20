import { useEffect, useRef } from 'react'

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only animate if element is NOT already in viewport
    const rect = el.getBoundingClientRect()
    const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

    if (isAlreadyVisible) {
      // Already visible on load — no animation needed
      return
    }

    // Mark for animation, then observe
    el.classList.add('willAnimate')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
