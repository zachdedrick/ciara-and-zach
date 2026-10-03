/**
 * A line of interconnected hearts, echoing the trinity-knot accents on the
 * couple's save-the-date in a softer, more legible motif for a thin
 * divider strip.
 */
const HEART_SPACING = 15
const HEART_COUNT = 13
const WIDTH = (HEART_COUNT - 1) * HEART_SPACING
const CENTER_Y = 13

// A single heart, centred on its own origin, pointing down.
const HEART = 'M0,6.5 C-7,0.5 -7,-5.5 -3,-6.8 C-1,-7.4 0,-5 0,-2.8 C0,-5 1,-7.4 3,-6.8 C7,-5.5 7,0.5 0,6.5 Z'

export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  return (
    <svg
      viewBox={`-10 0 ${WIDTH + 20} 24`}
      className={`mx-auto h-6 w-56 text-gold-500 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {Array.from({ length: HEART_COUNT }).map((_, index) => (
        <g key={index} transform={`translate(${index * HEART_SPACING}, ${CENTER_Y})`}>
          <path d={HEART} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </g>
      ))}
    </svg>
  )
}
