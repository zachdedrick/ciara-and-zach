/**
 * Drop a real photo in src/assets/photos and pass its path as `src` to swap
 * this out — see src/assets/README.md.
 */
export default function PhotoPlaceholder({
  src,
  alt,
  className = '',
}: {
  src?: string
  alt: string
  className?: string
}) {
  if (src) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-ivy-100 via-parchment to-gold-300/40 text-center text-ivy-600 ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="font-display px-4 text-sm italic">{alt}</span>
    </div>
  )
}
