/**
 * Procedural placeholder for a watercolor divider. Swap for a scanned/painted
 * watercolor asset in src/assets/watercolor once we have one — see
 * src/assets/README.md.
 */
export default function WatercolorDivider({ className = 'my-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 24"
      className={`mx-auto h-6 w-48 text-gold-500 ${className}`}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M0 12 C 40 2, 60 22, 100 12 S 160 2, 200 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}
