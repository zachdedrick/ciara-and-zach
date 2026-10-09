import celticDivider from '../assets/watercolor/celtic-divider.png'

export default function WatercolorDivider({
  className = 'my-10',
  size = 'lg',
}: {
  className?: string
  size?: 'sm' | 'lg'
}) {
  const sizeClass = size === 'sm' ? 'w-56 sm:w-72' : 'w-[26rem] sm:w-[36rem]'

  return (
    <img
      src={celticDivider}
      alt=""
      aria-hidden="true"
      className={`mx-auto h-auto ${sizeClass} ${className}`}
    />
  )
}
