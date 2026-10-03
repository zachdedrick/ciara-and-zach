import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import SlideCarousel from '../components/SlideCarousel'
import { BusIcon, CarIcon, GolfIcon, TrainIcon } from '../components/icons'
import cliffsOfMoher from '../assets/photos/cliffs-of-moher.jpg'
import howthCouple from '../assets/photos/howth-couple.jpg'
import kerryTown from '../assets/photos/kerry-town.jpg'
import dingleHarbour from '../assets/photos/dingle-harbour.jpg'
import ringOfKerryCliffs from '../assets/photos/ring-of-kerry-cliffs.jpg'
import lahinchGolfDunes from '../assets/photos/lahinch-golf-dunes.jpg'
import lahinchGolfGreen from '../assets/photos/lahinch-golf-green.jpg'
import golfCourseGroup from '../assets/photos/golf-course-group.jpg'
import cliffsOfMoherBoys from '../assets/photos/gallery-cliffs-of-moher-boys.jpg'

const GOLF_COURSES = [
  { src: lahinchGolfDunes, alt: 'Lahinch Golf Club, Co. Clare' },
  { src: lahinchGolfGreen, alt: 'Lahinch Golf Club, Co. Clare' },
  { src: golfCourseGroup, alt: 'A round of golf on the Co. Clare coast' },
  { alt: 'Royal County Down, Co. Down' },
  { alt: 'Portmarnock Golf Club, Co. Dublin' },
]

const WEST_COAST = [
  {
    name: 'Cliffs of Moher',
    county: 'Co. Clare',
    driveTime: 'about 55 min from Shannon',
    description:
      'Ireland’s most famous sea cliffs, rising 700 feet straight out of the Atlantic. Go for sunset if you can.',
    photos: [cliffsOfMoher, cliffsOfMoherBoys],
  },
  {
    name: 'Galway',
    county: 'Co. Galway',
    driveTime: 'about 1h 20m from Shannon',
    description:
      'A lively, colourful city with some of the best live music and food in Ireland. Wander the Latin Quarter and stay for dinner.',
    photos: [],
  },
  {
    name: 'Dingle Peninsula',
    county: 'Co. Kerry',
    driveTime: 'about 2h 15m from Shannon',
    description:
      'Dramatic coastline, Irish-speaking villages, and the Slea Head Drive — one of the most beautiful routes in the country.',
    photos: [dingleHarbour],
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

const GLOSSARY = [
  { term: 'Craic', definition: 'Fun, good times, or news. "What’s the craic?" means "what’s up?"' },
  { term: 'Gas', definition: 'Hilarious. "That’s gas!"' },
  { term: 'Grand', definition: 'Fine, good, no problem at all. "I’m grand."' },
  { term: 'Sláinte', definition: '("SLAWN-cha") Cheers! Said before a drink — literally "health."' },
  { term: 'Eejit', definition: 'A fool — usually said with affection, not malice.' },
  { term: 'Deadly', definition: 'Excellent, awesome (nothing dangerous about it).' },
  { term: 'Fair play', definition: 'Well done, respect.' },
  { term: 'Yer man / yer one', definition: 'That guy / that woman, when you don’t know or won’t say their name.' },
  { term: 'Give out', definition: 'To complain or scold. "She gave out to him."' },
  { term: 'Savage', definition: 'Amazing, brilliant (also nothing to do with being savage).' },
]

export default function ThingsToDo() {
  return (
    <div>
      <PageHeader title="Things to Do &amp; Know" subtitle="Making the most of your trip" />

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

          <div className="mt-6 overflow-hidden rounded-lg border border-ivy-100 shadow-sm">
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
                </div>
              </div>
            </div>
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
                      Walk the cliff path for the views, then grab fish and chips from one of the stalls by the
                      pier. If you&rsquo;ve got a day to spare in Dublin before or after the wedding, we can&rsquo;t
                      recommend it enough.
                    </p>
                  </div>
                </div>
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
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Irish Slang &amp; Glossary</h2>
          <p className="text-center text-sm uppercase tracking-wide text-gold-600">So You&rsquo;re Not Lost at the Bar</p>
          <WatercolorDivider />

          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {GLOSSARY.map((entry) => (
              <div key={entry.term} className="rounded-lg border border-ivy-100 p-4">
                <p className="font-display text-lg text-gold-600">{entry.term}</p>
                <p className="mt-1 text-sm text-ivy-700">{entry.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
