import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import SlideCarousel from '../components/SlideCarousel'
import IrelandMap from '../components/IrelandMap'
import { BusIcon, CarIcon, GolfIcon, TrainIcon } from '../components/icons'
import cliffsOfMoher from '../assets/photos/cliffs-of-moher.jpg'
import howthCouple from '../assets/photos/howth-couple.jpg'
import kerryTown from '../assets/photos/kerry-town.jpg'
import dingleHarbour from '../assets/photos/dingle-harbour.jpg'
import dingleBabyLambSign from '../assets/photos/dingle-baby-lamb-sign.jpg'
import ringOfKerryCliffs from '../assets/photos/ring-of-kerry-cliffs.jpg'
import lahinchGolfDunes from '../assets/photos/lahinch-golf-dunes.jpg'
import lahinchGolfGreen from '../assets/photos/lahinch-golf-green.jpg'
import golfCourseGroup from '../assets/photos/golf-course-group.jpg'
import golfClockTowerGroup from '../assets/photos/golf-clock-tower-group.jpg'
import golfTripCliffsGroup from '../assets/photos/golf-trip-cliffs-group.jpg'
import cliffsOfMoherBoys from '../assets/photos/gallery-cliffs-of-moher-boys.jpg'
import galwayFlagsStreet from '../assets/photos/galway-flags-street.jpg'
import galwayAranCliffs from '../assets/photos/galway-aran-cliffs.jpg'

const GOLF_COURSES = [
  { src: lahinchGolfDunes, alt: 'Lahinch Golf Club, Co. Clare' },
  { src: lahinchGolfGreen, alt: 'Lahinch Golf Club, Co. Clare' },
  { src: golfCourseGroup, alt: 'A round of golf on the Co. Clare coast', objectPosition: '50% 25%' },
  { src: golfClockTowerGroup, alt: 'The lads at Lahinch Golf Club', objectPosition: '50% 35%' },
  { src: golfTripCliffsGroup, alt: 'The lads on the Co. Clare coast' },
]

const WEST_COAST = [
  {
    name: 'Cliffs of Moher',
    county: 'Co. Clare',
    driveTime: 'about 55 min from Shannon',
    description: 'Beautiful cliff views in Co. Clare, about an hour from Shannon Airport.',
    photos: [cliffsOfMoher, cliffsOfMoherBoys],
  },
  {
    name: 'Galway',
    county: 'Co. Galway',
    driveTime: 'about 1h 20m from Shannon',
    description:
      'A lively, colourful city with some of the best pubs, live music, and food in Ireland. Take the ferry over to the Aran Islands and rent bikes for about €15 to ride around and see all the views.',
    photos: [galwayFlagsStreet, galwayAranCliffs],
  },
  {
    name: 'Dingle Peninsula',
    county: 'Co. Kerry',
    driveTime: 'about 2h 15m from Shannon',
    description:
      'Charming harbour town in the southwest of Ireland in Co. Kerry, a stop along the Wild Atlantic Way.',
    photos: [dingleHarbour, dingleBabyLambSign],
  },
  {
    name: 'Ring of Kerry',
    county: 'Co. Kerry',
    driveTime: 'about 1.5h from Shannon to Killarney',
    description:
      'A 111-mile loop of coastal views, mountains, and little villages. Give yourself a full day to do it properly.',
    photos: [kerryTown, ringOfKerryCliffs],
  },
]

export default function ThingsToDo() {
  return (
    <div>
      <PageHeader title="Exploring Ireland" subtitle="Making the most of your trip" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <Reveal className="flex justify-center">
          <IrelandMap className="w-full max-w-xs" />
        </Reveal>

        <Reveal as="section">
          <h2 className="font-display text-center text-2xl text-ivy-800">If You Have a Couple of Days</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">Dublin</p>

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Dublin has plenty of museums, shops and things to do if you only have a day or two. We highly suggest
            walking through the college campus of Trinity and checking out the National Gallery!
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            <div className="overflow-hidden rounded-lg border border-ivy-100">
              <div className="grid items-center sm:grid-cols-[160px_1fr]">
                <div className="aspect-[4/3] sm:aspect-square">
                  <PhotoPlaceholder src={howthCouple} alt="Ciara & Zach in Howth" />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <TrainIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                  <div className="space-y-2 text-ivy-700">
                    <h3 className="font-display text-lg text-ivy-800">A Day Trip to Howth</h3>
                    <p>
                      A trip out to Howth, just outside Dublin, is well worth the trip. Hop on the DART from Tara
                      Street or Connolly Station &mdash; it&rsquo;s about 30 minutes and drops you right at the
                      harbour.
                    </p>
                    <p>
                      Walk the Howth Cliff Walk, enjoy some fish and chips on the pier and end the day with a pint
                      before heading back into Dublin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section">
          <h2 className="font-display text-center text-2xl text-ivy-800">If You Have a Week</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">The Southwest &amp; West Coast</p>

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            If you&rsquo;re extending your trip, we highly recommend flying into Shannon and exploring the West
            Coast of Ireland.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WEST_COAST.map((spot) => (
              <div key={spot.name} className="overflow-hidden rounded-lg border border-ivy-100 shadow-sm">
                {spot.photos.length > 1 ? (
                  <div className="grid grid-cols-2 gap-0.5">
                    {spot.photos.map((photo, index) => (
                      <div key={index} className="aspect-square">
                        <PhotoPlaceholder src={photo} alt={`Photo of ${spot.name}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[16/9]">
                    <PhotoPlaceholder src={spot.photos[0]} alt={`Photo of ${spot.name}`} />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display text-xl text-ivy-800">{spot.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-gold-600">{spot.county}</p>
                  <p className="mt-2 text-sm text-ivy-700">{spot.description}</p>
                  <p className="mt-2 text-xs italic text-ivy-600/70">{spot.driveTime}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 mx-auto max-w-xl overflow-hidden rounded-lg border border-ivy-100 shadow-sm">
            <SlideCarousel photos={GOLF_COURSES} />
            <div className="p-5">
              <div className="flex items-start gap-3">
                <GolfIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                <div>
                  <h3 className="font-display text-xl text-ivy-800">Golfing in Ireland</h3>
                  <p className="mt-2 text-sm text-ivy-700">
                    If you want to fit in a round while you&rsquo;re here, Ireland has no shortage of world-class
                    links courses &mdash; Lahinch in Co. Clare is a great option near Shannon, and Royal County
                    Down, Portmarnock, and Ballybunion are all worth the detour if you have the time. Book tee
                    times well ahead.
                  </p>
                  <p className="mt-2 text-sm italic text-ivy-600">
                    If you&rsquo;re unsure where to play, reach out to the groom for some golf recs!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section">
          <h2 className="font-display text-center text-2xl text-ivy-800">Coming Straight to Glaslough</h2>

          <p className="mx-auto max-w-2xl text-center text-lg text-ivy-700">
            Flying directly into Dublin and heading straight up to us? We&rsquo;re so excited to see you! Take the{' '}
            <Link to="/travel" className="underline hover:text-gold-600">
              bus or rent a car
            </Link>{' '}
            up to Glaslough.
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
        </Reveal>
      </div>
    </div>
  )
}
