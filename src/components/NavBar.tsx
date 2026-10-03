import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/itinerary', label: 'Itinerary' },
  { to: '/travel', label: 'Travel & Accommodation' },
  { to: '/things-to-do', label: 'Exploring Ireland' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/registry', label: 'Registry' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/faq', label: 'FAQ' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm uppercase tracking-[0.15em] transition-colors ${
      isActive ? 'text-gold-500' : 'text-ivy-50 hover:text-gold-300'
    }`

  return (
    <header className="sticky top-0 z-50 bg-ivy-800/95 backdrop-blur-sm shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="font-display text-xl text-parchment sm:text-2xl" onClick={() => setOpen(false)}>
          Ciara &amp; Zach
        </NavLink>

        <nav className="hidden md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="text-parchment md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gold-500/20 bg-ivy-800 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
