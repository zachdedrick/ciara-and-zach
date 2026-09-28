import { useEffect, useState } from 'react'
import WatercolorDivider from '../components/WatercolorDivider'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import castleHero from '../assets/watercolor/castle-leslie-hero.jpg'
import engagementPosed from '../assets/photos/engagement-posed.jpg'
import engagementOnKnee from '../assets/photos/engagement-on-knee.jpg'
import engagementBwBoat from '../assets/photos/engagement-bw-boat.jpg'

const WEDDING_DATE = new Date('2027-08-21T15:00:00+01:00')

function useDaysUntil(date: Date) {
  const [days, setDays] = useState(() => daysBetween(date))

  useEffect(() => {
    const id = window.setInterval(() => setDays(daysBetween(date)), 1000 * 60 * 60)
    return () => window.clearInterval(id)
  }, [date])

  return days
}

function daysBetween(date: Date) {
  return Math.max(0, Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
}

export default function Home() {
  const daysToGo = useDaysUntil(WEDDING_DATE)

  return (
    <div>
      <section
        className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-ivy-700 bg-cover bg-center px-4 text-center text-parchment"
        style={{ backgroundImage: `url(${castleHero})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-ivy-900/75 via-ivy-800/65 to-ivy-900/85"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-300">We&rsquo;re getting married</p>
          <h1 className="font-display mt-4 text-5xl sm:text-7xl">Ciara &amp; Zach</h1>
          <WatercolorDivider />
          <p className="text-lg sm:text-xl">21 August 2027</p>
          <p className="mt-1 text-base text-ivy-100">Castle Leslie &middot; Glaslough, Ireland</p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold-300">{daysToGo} days to go</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <h2 className="font-display text-center text-3xl text-ivy-800">A castle in the Irish countryside</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ivy-700">
          We can&rsquo;t wait to celebrate with you at Castle Leslie, our favourite corner of Ireland. More details on
          the day, travel, and everything in between are coming soon &mdash; for now, here&rsquo;s a little bit about us.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md">
            <PhotoPlaceholder src={engagementPosed} alt="Ciara & Zach, engagement photo" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md">
            <PhotoPlaceholder src={engagementOnKnee} alt="Zach proposing to Ciara" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-md">
            <PhotoPlaceholder src={engagementBwBoat} alt="Ciara & Zach celebrating with friends" />
          </div>
        </div>
      </section>
    </div>
  )
}
