import { useRef, useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder'

/**
 * Manual-only carousel: advances on swipe/drag or the arrow buttons, never
 * on a timer.
 */
export default function SwipeCarousel({
  photos,
  className = 'aspect-[3/2] sm:aspect-[16/9]',
}: {
  photos: { src?: string; alt: string }[]
  className?: string
}) {
  const [active, setActive] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef<number | null>(null)
  const [dragOffsetPct, setDragOffsetPct] = useState(0)

  function go(delta: number) {
    setActive((current) => (current + delta + photos.length) % photos.length)
  }

  function handleStart(clientX: number) {
    dragStartX.current = clientX
    setIsDragging(true)
  }

  function handleMove(clientX: number, width: number) {
    if (dragStartX.current === null || width === 0) return
    setDragOffsetPct(((clientX - dragStartX.current) / width) * 100)
  }

  function handleEnd() {
    const SWIPE_THRESHOLD_PCT = 12
    if (dragOffsetPct < -SWIPE_THRESHOLD_PCT) go(1)
    else if (dragOffsetPct > SWIPE_THRESHOLD_PCT) go(-1)
    dragStartX.current = null
    setIsDragging(false)
    setDragOffsetPct(0)
  }

  return (
    <div
      className={`relative touch-pan-y select-none overflow-hidden rounded-lg shadow-md ${className}`}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.clientWidth)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => {
        if (dragStartX.current !== null) handleMove(e.clientX, e.currentTarget.clientWidth)
      }}
      onMouseUp={handleEnd}
      onMouseLeave={() => {
        if (dragStartX.current !== null) handleEnd()
      }}
    >
      <div
        className="flex h-full"
        style={{
          transform: `translateX(calc(-${active * 100}% + ${dragOffsetPct}%))`,
          transition: isDragging ? 'none' : 'transform 400ms ease-in-out',
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="h-full w-full shrink-0">
            <PhotoPlaceholder src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ivy-900/50 text-parchment hover:bg-ivy-900/70"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-ivy-900/50 text-parchment hover:bg-ivy-900/70"
          >
            &#8250;
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {photos.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show photo ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === active ? 'bg-gold-500' : 'bg-parchment/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
