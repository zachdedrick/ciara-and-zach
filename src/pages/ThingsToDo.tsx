import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { BusIcon, CarIcon, GolfIcon, TrainIcon } from '../components/icons'

const WEST_COAST = [
  {
    name: 'Cliffs of Moher',
    county: 'Co. Clare',
    driveTime: 'about 55 min from Shannon',
    description:
      'Ireland’s most famous sea cliffs, rising 700 feet straight out of the Atlantic. Go for sunset if you can.',
  },
  {
    name: 'Galway',
    county: 'Co. Galway',
    driveTime: 'about 1h 20m from Shannon',
    description:
      'A lively, colourful city with some of the best live music and food in Ireland. Wander the Latin Quarter and stay for dinner.',
  },
  {
    name: 'Dingle Peninsula',
    county: 'Co. Kerry',
    driveTime: 'about 2h 15m from Shannon',
    description:
      'Dramatic coastline, Irish-speaking villages, and the Slea Head Drive — one of the most beautiful routes in the country.',
  },
  {
    name: 'Ring of Kerry',
    county: 'Co. Kerry',
    driveTime: 'about 1.5h from Shannon to Killarney',
    description:
      'A 111-mile loop of coastal views, mountains, and little villages. Give yourself a full day to do it properly.',
  },
  {
    name: 'Golf at Lahinch',
    county: 'Co. Clare',
    driveTime: 'about 45 min from Shannon',
    description:
      'One of Ireland’s great links courses, right on the coast near the Cliffs of Moher. Book a tee time well ahead.',
  },
]

export default function ThingsToDo() {
  return (
    <div>
      <PageHeader title="Things to Do" subtitle="Making the most of your trip" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">If You Have a Week</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">The Southwest &amp; West Coast</p>
          <WatercolorDivider />

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Flying in early or staying on after the wedding? Consider flying into Shannon Airport (SNN) instead of
            Dublin and making a loop of the west coast &mdash; it&rsquo;s a different part of the country from
            Glaslough, so it&rsquo;s worth the extra days if you have them.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WEST_COAST.map((spot) => (
              <div key={spot.name} className="overflow-hidden rounded-lg border border-ivy-100 shadow-sm">
                <div className="aspect-[16/9]">
                  <PhotoPlaceholder alt={`Photo of ${spot.name}`} />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-ivy-800">{spot.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-gold-600">{spot.county}</p>
                  <p className="mt-2 text-sm text-ivy-700">{spot.description}</p>
                  <p className="mt-2 text-xs italic text-ivy-600/70">{spot.driveTime}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">If You Have a Couple of Days</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">Dublin</p>
          <WatercolorDivider />

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Dublin is an easy add-on before or after the wedding &mdash; a day or two is enough to get a real feel
            for the city.
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            <div className="rounded-lg border border-ivy-100 p-5 text-ivy-700">
              Trinity College&rsquo;s campus is beautiful to just walk around, and Dublin has no shortage of museums
              &mdash; the National Museum and National Gallery are both free.
            </div>
            <div className="rounded-lg border border-ivy-100 p-5">
              <div className="flex items-start gap-3">
                <TrainIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                <p className="text-ivy-700">
                  Howth is only a short DART ride from the city centre and one of our favourite spots &mdash; see{' '}
                  <Link to="/our-story" className="underline hover:text-gold-600">
                    Our Story
                  </Link>{' '}
                  for the full recommendation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Coming Straight to Glaslough</h2>
          <WatercolorDivider />

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Flying directly into Dublin and heading straight up to us? We&rsquo;re so excited to see you! Take the{' '}
            <Link to="/travel" className="underline hover:text-gold-600">
              bus or rent a car
            </Link>{' '}
            up to Glaslough &mdash; and we&rsquo;ll do our best to pack as much Irish culture as we can into the
            wedding weekend itself.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-ivy-100 p-5">
              <div className="flex items-start gap-3">
                <BusIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                <p className="text-ivy-700">
                  See the{' '}
                  <Link to="/travel" className="underline hover:text-gold-600">
                    Travel page
                  </Link>{' '}
                  for the Dublin Airport to Monaghan bus.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-ivy-100 p-5">
              <div className="flex items-start gap-3">
                <CarIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                <p className="text-ivy-700">It&rsquo;s about a 1.5&ndash;2 hour drive from Dublin, mostly via the N2.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-ivy-100 p-5">
            <div className="flex items-start gap-3">
              <GolfIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <p className="text-ivy-700">
                There are some excellent golf courses around Monaghan and Armagh if you want to fit in a round while
                you&rsquo;re here &mdash; reach out to us and we&rsquo;ll point you to our favourites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
