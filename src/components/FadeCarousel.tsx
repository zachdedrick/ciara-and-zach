import { useEffect, useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function FadeCarousel({
  photos,
  intervalMs = 4000,
  className = 'aspect-[16/10]',
}: {
  photos: { src?: string; alt: string; caption?: string }[]
  intervalMs?: number
  className?: string
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (photos.length <= 1) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [photos.length, intervalMs])

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-md ${className}`}>
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <PhotoPlaceholder src={photo.src} alt={photo.alt} />
          {photo.caption && (
            <p className="absolute inset-x-0 bottom-0 bg-ivy-900/60 px-4 py-2 text-center text-sm text-parchment">
              {photo.caption}
            </p>
          )}
        </div>
      ))}

      {photos.length > 1 && (
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
      )}
    </div>
  )
}
