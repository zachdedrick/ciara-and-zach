type IconProps = { className?: string }

export function HotelIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M3 21V7a1 1 0 0 1 1-1h7v15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 21V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21h18" strokeLinecap="round" />
      <path d="M7 10h0M7 13h0M7 16h0M17 7h0M17 10h0M17 13h0M17 16h0" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path
        d="M20 10.5c0 5.25-8 11.5-8 11.5s-8-6.25-8-11.5a8 8 0 1 1 16 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  )
}

export function HouseIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ExternalLinkIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M14 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 5 10 14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
