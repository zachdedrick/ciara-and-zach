/**
 * Celtic rope-braid divider with a trinity-knot accent at centre, matching
 * the woven knotwork border on the couple's save-the-date: a two-strand
 * plait of tight interlocking links with a triquetra inserted mid-way.
 */
const PERIOD = 26
const AMPLITUDE = 8
const WIDTH = 208
const STEP = 3
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

// A simplified triquetra: three overlapping vesica "petals" rotated 120°
// apart around the centre.
const PETAL = 'M0,0 C-2.6,-2.6 -2.6,-7.4 0,-10 C2.6,-7.4 2.6,-2.6 0,0 Z'

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

      {/* trinity-knot accent at centre, echoing the knot inserted along the reference border */}
      <g transform={`translate(${midX}, ${CENTER_Y})`}>
        <g transform="rotate(0) scale(0.6)">
          <path d={PETAL} fill="none" stroke="currentColor" strokeWidth="1.3" />
        </g>
        <g transform="rotate(120) scale(0.6)">
          <path d={PETAL} fill="none" stroke="currentColor" strokeWidth="1.3" />
        </g>
        <g transform="rotate(240) scale(0.6)">
          <path d={PETAL} fill="none" stroke="currentColor" strokeWidth="1.3" />
        </g>
      </g>
    </svg>
  )
}
