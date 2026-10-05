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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
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
