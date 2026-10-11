import { useRef } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder'

/**
 * A horizontally scrollable row of photos with prev/next arrow buttons that
 * page the strip by roughly one viewport's width. Purely manual — no
 * auto-scroll.
 */
export default function MarqueeStrip({
  photos,
  tileClassName = 'aspect-square w-40 sm:w-52',
}: {
  photos: { src?: string; alt: string; objectPosition?: string }[]
  tileClassName?: string
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function page(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <div key={index} className={`shrink-0 overflow-hidden rounded-lg shadow-md ${tileClassName}`}>
            <PhotoPlaceholder src={photo.src} alt={photo.alt} objectPosition={photo.objectPosition} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => page(-1)}
        className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivy-900/60 text-xl text-parchment shadow hover:bg-ivy-900/80"
      >
        &#8249;
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => page(1)}
        className="absolute right-0 top-1/2 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivy-900/60 text-xl text-parchment shadow hover:bg-ivy-900/80"
      >
        &#8250;
      </button>
    </div>
  )
}
