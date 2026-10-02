import type { ReactNode } from 'react'
import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import { MapPinIcon } from '../components/icons'
import castleHero from '../assets/watercolor/castle-leslie-hero.jpg'
import cathedralPhoto from '../assets/watercolor/cathedral-armagh.jpg'
import coachHousePub from '../assets/watercolor/coach-house-pub.jpg'

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

function EventCard({
  time,
  title,
  address,
  children,
  visual,
  imageSide = 'left',
}: {
  time: string
  title: string
  address?: string
  children: ReactNode
  visual: ReactNode
  imageSide?: 'left' | 'right'
}) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-2">
      <div className={`aspect-[4/3] overflow-hidden rounded-lg shadow-md ${imageSide === 'right' ? 'sm:order-2' : ''}`}>
        {visual}
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-gold-600">{time}</p>
        <h3 className="font-display mt-1 text-2xl text-ivy-800">{title}</h3>
        {address && (
          <a
            href={mapsUrl(address)}
            target="_blank"
            rel="noreferrer"
            className="mt-1 flex items-center gap-1.5 text-sm text-ivy-700 hover:text-gold-600"
          >
            <MapPinIcon className="h-4 w-4 shrink-0" />
            {address}
          </a>
        )}
        <div className="mt-3 space-y-2 text-ivy-700">{children}</div>
      </div>
    </div>
  )
}

export default function Itinerary() {
  return (
    <div>
      <PageHeader title="Itinerary" subtitle="A weekend at Castle Leslie" />

      <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Friday, 20 August
          </h2>
          <WatercolorDivider />

          <EventCard
            time="7:00 PM"
            title="Welcome Party"
            address="The Coach House & Olde Bar, Main Street, Glaslough, Co. Monaghan"
            visual={
              <img src={coachHousePub} alt="The Coach House & Olde Bar, Glaslough" className="h-full w-full object-cover" />
            }
          >
            <p>
              Kick off the weekend with us! Join us at the Coach House &amp; Olde Bar &mdash; Glaslough&rsquo;s
              favourite old pub &mdash; for light bites and drinks. Come whenever you land, stay as late as you like.
            </p>
          </EventCard>
        </section>

        <section>
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Saturday, 21 August
          </h2>
          <WatercolorDivider />

          <div className="space-y-12">
            <EventCard
              time="1:00 &ndash; 2:00 PM"
              title="Ceremony"
              address="St. Patrick's Cathedral, 41 Cathedral Road, Armagh, BT61 7QX"
              visual={<img src={cathedralPhoto} alt="St. Patrick's Cathedral, Armagh" className="h-full w-full object-cover" />}
            >
              <p>
                We&rsquo;ll say &ldquo;I do&rdquo; at St. Patrick&rsquo;s Cathedral in Armagh, about a 25-minute
                drive from Castle Leslie Estate.
              </p>
              <p>We&rsquo;ll have transportation bringing everyone back to the Estate after the ceremony.</p>
            </EventCard>

            <EventCard
              time="3:00 PM onward"
              title="Reception"
              address="Castle Leslie Estate, Glaslough, Co. Monaghan"
              visual={<img src={castleHero} alt="Castle Leslie Estate" className="h-full w-full object-cover" />}
              imageSide="right"
            >
              <p>Cocktail hour starts at 3:00 PM back at the Estate, flowing into dinner as the evening goes on.</p>
              <p>Then it&rsquo;s dancing long into the night &mdash; we&rsquo;ll keep going until 3:30 AM.</p>
            </EventCard>
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Sunday, 22 August
          </h2>
          <WatercolorDivider />
          <p className="text-center text-ivy-700">
            Details to come &mdash; we&rsquo;re still figuring this one out. Check back soon!
          </p>
        </section>
      </div>
    </div>
  )
}
