import celticDivider from '../assets/watercolor/celtic-divider.png'

export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  return (
    <img
      src={celticDivider}
      alt=""
      aria-hidden="true"
      className={`mx-auto h-auto w-[26rem] sm:w-[36rem] ${className}`}
    />
  )
}
