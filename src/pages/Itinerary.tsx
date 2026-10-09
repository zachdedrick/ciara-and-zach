import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import { MapPinIcon } from '../components/icons'
import castleAerial from '../assets/watercolor/castle-leslie-aerial.jpg'
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
        <Reveal as="section">
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Friday, 20 August
          </h2>

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
              favourite old pub &mdash; for light bites and drinks.
            </p>
          </EventCard>
        </Reveal>

        <Reveal as="section">
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Saturday, 21 August
          </h2>

          <div className="space-y-12">
            <EventCard
              time="1:00 &ndash; 2:00 PM"
              title="Ceremony"
              address="St. Patrick's Cathedral, 41 Cathedral Road, Armagh, BT61 7QX"
              visual={<img src={cathedralPhoto} alt="St. Patrick's Cathedral, Armagh" className="h-full w-full object-cover" />}
            >
              <p>
                Please join us for the ceremony at St Patrick&rsquo;s Cathedral, about a 25 minute drive from Castle
                Leslie.
              </p>
              <p>Bus transportation will be provided to the ceremony in Armagh from Glaslough. Details to come!</p>
            </EventCard>

            <EventCard
              time="3:00 PM"
              title="Reception"
              address="Castle Leslie Estate, Glaslough, Co. Monaghan"
              visual={<img src={castleAerial} alt="Castle Leslie Estate" className="h-full w-full object-cover" />}
              imageSide="right"
            >
              <p>Buses will bring everyone back to the Castle after the ceremony.</p>
              <p>Cocktail hours in Ireland are twice as long &mdash; lucky us!</p>
              <p>
                Dress code: <span className="font-script text-2xl text-gold-600">Castle Formal</span>
              </p>
            </EventCard>
          </div>
        </Reveal>

        <Reveal as="section">
          <h2 className="font-display text-center text-xl uppercase tracking-[0.25em] text-gold-600">
            Sunday, 22 August
          </h2>
          <p className="text-center text-ivy-700">
            The Lodge will offer breakfast the next day in Snaffles for those staying on the Estate, and most
            hotels/B&amp;Bs in the area also include breakfast. More details to come!!
          </p>
        </Reveal>
      </div>
    </div>
  )
}
