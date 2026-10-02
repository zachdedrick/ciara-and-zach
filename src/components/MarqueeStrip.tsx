import PhotoPlaceholder from './PhotoPlaceholder'

/**
 * A continuously auto-scrolling row of photos (CSS keyframe translate, no JS
 * timer). The photo list is rendered twice back-to-back so the loop is
 * seamless; pass an even number of photos for the cleanest tiling.
 */
export default function MarqueeStrip({
  photos,
  durationSeconds = 28,
  reverse = false,
}: {
  photos: { src?: string; alt: string }[]
  durationSeconds?: number
  reverse?: boolean
}) {
  const track = [...photos, ...photos]

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee-scroll ${durationSeconds}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {track.map((photo, index) => (
          <div key={index} className="aspect-square w-40 shrink-0 overflow-hidden rounded-lg shadow-md sm:w-52">
            <PhotoPlaceholder src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
