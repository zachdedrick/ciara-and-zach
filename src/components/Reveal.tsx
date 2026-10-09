import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

/**
 * Fades + slides its children up into view the first time they scroll into
 * the viewport, like a slide-up "on enter" animation.
 */
export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // True once the element has reached the viewport, whether it's
    // currently on screen or an instant scroll jump (e.g. the End key)
    // already carried the page past it without an intermediate frame.
    // Either way there's no reason to keep it hidden.
    const hasReachedViewport = () => el.getBoundingClientRect().top < window.innerHeight

    if (hasReachedViewport()) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px' },
    )

    observer.observe(el)

    const handleScroll = () => {
      if (hasReachedViewport()) {
        setVisible(true)
        window.removeEventListener('scroll', handleScroll)
        observer.disconnect()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
