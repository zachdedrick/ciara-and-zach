import { useEffect, useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function SlideCarousel({
  photos,
  intervalMs = 3500,
}: {
  photos: { src?: string; alt: string }[]
  intervalMs?: number
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [photos.length, intervalMs])

  function go(delta: number) {
    setActive((current) => (current + delta + photos.length) % photos.length)
  }

  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-md sm:aspect-[16/9]">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
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
        </>
      )}
    </div>
  )
}
