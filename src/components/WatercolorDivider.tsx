import celticDivider from '../assets/watercolor/celtic-divider.png'

export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  return (
    <img
      src={celticDivider}
      alt=""
      aria-hidden="true"
      className={`mx-auto h-8 w-80 object-contain sm:h-10 sm:w-[28rem] ${className}`}
    />
  )
}
