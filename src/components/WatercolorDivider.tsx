/**
 * Celtic rope-braid divider, echoing the woven knotwork border on the
 * couple's save-the-date. Two interlacing strands twist across the width,
 * crossing at a shared centre point, with a small trinity-knot bead at
 * the midpoint to echo the knot accents on the reference border.
 */
const PERIOD = 36
const AMPLITUDE = 6
const WIDTH = 216
const STEP = 4
const CENTER_Y = 12

function wavePath(phase: number) {
  let d = ''
  for (let x = 0; x <= WIDTH; x += STEP) {
    const y = CENTER_Y + AMPLITUDE * Math.sin((2 * Math.PI * (x + phase)) / PERIOD)
    d += x === 0 ? `M${x},${y.toFixed(2)}` : `L${x},${y.toFixed(2)}`
  }
  return d
}

const STRAND_A = wavePath(0)
const STRAND_B = wavePath(PERIOD / 2)

export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  const midX = WIDTH / 2

  return (
    <svg
      viewBox={`0 0 ${WIDTH} 24`}
      className={`mx-auto h-6 w-56 text-gold-500 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={STRAND_B} fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.45" />
      <path d={STRAND_A} fill="none" stroke="currentColor" strokeWidth="1.8" />

      {/* trinity-knot bead at centre, echoing the knot accents on the border */}
      <g transform={`translate(${midX}, ${CENTER_Y})`}>
        <circle r="3.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
        <circle r="1" fill="currentColor" />
      </g>
    </svg>
  )
}
