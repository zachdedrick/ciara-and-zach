/**
 * Original line-art illustrations in the site's hand-drawn style, used in
 * place of scraped photos for places we don't have our own picture of yet.
 * Swap any of these for a real photo later by rendering an <img> instead.
 */

export function CathedralSketch() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect width="320" height="240" fill="var(--color-ivy-50)" />
      <g fill="none" stroke="var(--color-ivy-700)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* ground */}
        <path d="M20 210h280" />
        {/* twin spires */}
        <path d="M95 210V90l20-40 20 40v120" />
        <path d="M185 210V90l20-40 20 40v120" />
        <path d="M95 90h40M185 90h40" />
        {/* spire crosses */}
        <path d="M115 50v-14M109 40h12" />
        <path d="M205 50v-14M199 40h12" />
        {/* nave between towers */}
        <path d="M135 210V120h70v90" />
        <path d="M135 120l35-28 35 28" />
        {/* rose window */}
        <circle cx="170" cy="150" r="16" />
        <path d="M170 134v32M154 150h32M159 139l22 22M181 139l-22 22" />
        {/* doors */}
        <path d="M150 210v-30a20 20 0 0 1 40 0v30" />
        {/* small arched windows on towers */}
        <path d="M107 150v-20a8 8 0 0 1 16 0v20" />
        <path d="M197 150v-20a8 8 0 0 1 16 0v20" />
        {/* steps */}
        <path d="M130 210v8h80v-8" />
        <path d="M122 218v8h96v-8" />
      </g>
    </svg>
  )
}

export function PubSketch() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect width="320" height="240" fill="var(--color-ivy-50)" />
      <g fill="none" stroke="var(--color-ivy-700)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* ground */}
        <path d="M20 210h280" />
        {/* building body */}
        <path d="M50 210V100h220v110" />
        {/* roofline */}
        <path d="M40 100 160 50l120 50" />
        <path d="M40 100h240" />
        {/* chimney */}
        <path d="M225 70V45h16v33" />
        {/* windows */}
        <path d="M75 125h40v45H75zM205 125h40v45h-40z" />
        <path d="M95 125v45M225 125v45M75 147h40M205 147h40" />
        {/* door */}
        <path d="M140 210v-55h40v55" />
        <circle cx="172" cy="182" r="2" fill="var(--color-ivy-700)" />
        {/* hanging pub sign */}
        <path d="M60 100V85M60 85h18v14H60Z" />
        <path d="M78 88h8" />
        {/* flower boxes */}
        <path d="M70 170h30M235 170h30" />
      </g>
    </svg>
  )
}
