import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { GolfIcon } from '../components/icons'

const DESTINATIONS = [
  {
    name: 'Cliffs of Moher',
    county: 'Co. Clare',
    driveTime: 'about 3h 20m from Castle Leslie',
    description:
      'Ireland’s most famous sea cliffs, rising 700 feet straight out of the Atlantic. Go for sunset if you can.',
  },
  {
    name: 'Galway',
    county: 'Co. Galway',
    driveTime: 'about 2.5–3h from Castle Leslie',
    description:
      'A lively, colourful city with some of the best live music and food in Ireland. Wander the Latin Quarter and stay for dinner.',
  },
  {
    name: 'Dingle Peninsula',
    county: 'Co. Kerry',
    driveTime: 'about 4.5h from Castle Leslie',
    description:
      'Dramatic coastline, Irish-speaking villages, and the Slea Head Drive — one of the most beautiful routes in the country.',
  },
  {
    name: 'Ring of Kerry',
    county: 'Co. Kerry',
    driveTime: 'about 4.5h from Castle Leslie',
    description:
      'A 111-mile loop of coastal views, mountains, and little villages. Give yourself a full day to do it properly.',
  },
]

export default function ThingsToDo() {
  return (
    <div>
      <PageHeader title="Things to Do" subtitle="A few of our favourite spots" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Castle Leslie is tucked up in the northeast, so Ireland&rsquo;s big bucket-list spots are a proper road
            trip away &mdash; not a day trip. If you&rsquo;re turning this into a longer Irish adventure before or
            after the wedding, here are a few of our favourites.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {DESTINATIONS.map((spot) => (
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
          <h2 className="font-display text-center text-2xl text-ivy-800">Golfing</h2>
          <WatercolorDivider />
          <div className="mx-auto max-w-2xl rounded-lg border border-ivy-100 p-5">
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
