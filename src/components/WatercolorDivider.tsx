/**
 * Celtic chain-link divider, echoing the knotwork border on the couple's
 * save-the-date. A row of interlocking rings tiled across a fixed viewBox.
 */
const RING_X = [25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175]

export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={`mx-auto h-6 w-48 text-gold-500 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {RING_X.map((x) => (
        <circle key={x} cx={x} cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      ))}
    </svg>
  )
}
