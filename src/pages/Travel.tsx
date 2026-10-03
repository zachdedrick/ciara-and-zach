import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import {
  BusIcon,
  CarIcon,
  ExternalLinkIcon,
  HotelIcon,
  HouseIcon,
  MapPinIcon,
  PhoneIcon,
  PlaneIcon,
} from '../components/icons'

const AIRPORTS = [
  {
    code: 'DUB',
    name: 'Dublin Airport',
    driveTime: 'about 1.5 hours (90 min) from Glaslough',
    note: 'The most direct route for most people.',
  },
  {
    code: 'BFS',
    name: 'Belfast International',
    driveTime: 'about 1h 20m from Glaslough',
    note: 'A good option if you want to spend some time in Northern Ireland.',
  },
  {
    code: 'SNN',
    name: 'Shannon Airport',
    driveTime: 'about 3 hours from Glaslough',
    note: null,
  },
]

const ON_ESTATE = [
  {
    name: 'The Lodge',
    description: 'A 4-star hotel right at the entrance to the Estate, steps from the Equestrian Centre.',
    websiteUrl: 'https://www.castleleslie.com/stay/the-lodge/',
  },
  {
    name: 'The Old Stable Mews',
    description: 'Self-catering courtyard cottages on the Estate grounds — great for groups.',
    websiteUrl: 'https://www.castleleslie.com/stay/old-stable-mews/',
  },
]

const HILLGROVE = {
  name: 'Hillgrove Hotel',
  address: 'Old Armagh Road, Monaghan, Co. Monaghan, Ireland',
  websiteUrl: 'https://www.hillgrovehotel.com',
  bookingCode: 'REF 199847',
}

const AIRBNBS: { name: string; capacity: string; url?: string }[] = [
  {
    name: '5 Bed House in Glaslough',
    capacity: 'Sleeps 8',
    url: 'https://www.airbnb.com/rooms/44093585?check_in=2027-08-20&check_out=2027-08-22&guests=8',
  },
  {
    name: '5 Bed Townhouse in Glaslough',
    capacity: 'Sleeps 8',
    url: 'https://www.airbnb.com/rooms/42213711?check_in=2027-08-20&check_out=2027-08-22&guests=8',
  },
  {
    name: '6 Bed Cottage in Glaslough',
    capacity: 'Sleeps 10',
    url: 'https://www.airbnb.com/rooms/44455976?check_in=2027-08-20&check_out=2027-08-22&guests=10',
  },
  {
    name: '7 Bed House in Glaslough',
    capacity: 'Sleeps 11',
    url: 'https://www.airbnb.com/rooms/1424552398036837395?check_in=2027-08-20&check_out=2027-08-22&guests=11',
  },
  {
    name: '5 Bed Townhouse in Glaslough',
    capacity: '5 bedrooms',
    url: 'https://www.airbnb.com/rooms/832412021470029339?check_in=2027-08-20&check_out=2027-08-22',
  },
  {
    name: '2 Bed Townhouse in Glaslough',
    capacity: '2 bedrooms',
    url: 'https://www.airbnb.com/rooms/25003224?check_in=2027-08-20&check_out=2027-08-22',
  },
]

// Numbers pulled from public directory listings for Monaghan taxi firms —
// worth a quick call ahead on the night to confirm availability.
const TAXIS = [
  { name: 'ABC Cabs', phone: '047 71500', tel: '+3534771500' },
  { name: 'Carn Taxis', phone: '047 71122', tel: '+3534771122' },
  { name: 'Call A Car', phone: '087 142 5666', tel: '+353871425666' },
]

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export default function Travel() {
  return (
    <div>
      <PageHeader title="Travel" subtitle="Getting to Glaslough, Co. Monaghan" />

      <div className="mx-auto max-w-3xl px-4 py-16 space-y-14">
        <p className="text-center text-lg text-ivy-700">
          We&rsquo;re so grateful you&rsquo;re all making the trip to Ireland for our wedding. Below you&rsquo;ll find
          lots of travel and accommodation options depending on what your itinerary looks like!
        </p>

        <section>
          <h2 className="font-display text-2xl text-ivy-800">Getting Here</h2>

          <h3 className="mt-5 text-lg uppercase tracking-wide text-ivy-600">Flying In</h3>
          <p className="mt-2 text-ivy-700">Three airports to choose from, depending on how you want to spend your trip.</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {AIRPORTS.map((airport) => (
              <div key={airport.code} className="rounded-lg border border-ivy-100 p-5">
                <div className="flex items-start gap-3">
                  <PlaneIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-lg text-ivy-800">{airport.name}</p>
                    <p className="text-xs uppercase tracking-wide text-gold-600">{airport.code}</p>
                    <p className="mt-1 text-sm text-ivy-600">{airport.driveTime}</p>
                    <p className="mt-2 text-sm text-ivy-700">
                      {airport.code === 'SNN' ? (
                        <>
                          Worth it if you want to explore the west of Ireland before heading over &mdash; see{' '}
                          <Link to="/things-to-do" className="underline hover:text-gold-600">
                            Things to Do
                          </Link>
                          .
                        </>
                      ) : (
                        airport.note
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg uppercase tracking-wide text-ivy-600">Dublin Airport Bus</h3>
          <div className="mt-3 rounded-lg border border-ivy-100 p-5">
            <div className="flex items-start gap-3">
              <BusIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <div>
                <a
                  href="https://buseireann.ie/routes-and-timetables/32"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-lg text-ivy-800 hover:text-gold-600"
                >
                  Dublin Airport &rarr; Monaghan bus
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
                <p className="mt-1 text-sm text-ivy-600">
                  Bus &Eacute;ireann Expressway Route 32/X32 runs direct from Dublin Airport to Monaghan bus station
                  roughly every couple of hours, taking about 1 hour 40 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ivy-800">Where to Stay</h2>

          <h3 className="mt-6 text-lg uppercase tracking-wide text-ivy-600">Staying on the Estate</h3>
          <p className="mt-2 text-ivy-700">
            The most special option &mdash; stay right on the grounds of Castle Leslie itself.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {ON_ESTATE.map((place) => (
              <div key={place.name} className="rounded-lg border border-ivy-100 p-5">
                <div className="flex items-start gap-3">
                  <HotelIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    <a
                      href={place.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-lg text-ivy-800 hover:text-gold-600"
                    >
                      {place.name}
                      <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                    <p className="mt-1 text-sm text-ivy-700">{place.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg uppercase tracking-wide text-ivy-600">Hotels</h3>
          <div className="mt-3 rounded-lg border border-ivy-100 p-5">
            <div className="flex items-start gap-3">
              <HotelIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <div>
                <a
                  href={HILLGROVE.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-xl text-ivy-800 hover:text-gold-600"
                >
                  {HILLGROVE.name}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>

                <a
                  href={mapsUrl(HILLGROVE.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-1.5 text-sm text-ivy-700 hover:text-gold-600"
                >
                  <MapPinIcon className="h-4 w-4 shrink-0" />
                  {HILLGROVE.address}
                </a>

                <p className="mt-2 text-sm text-ivy-600">
                  Use this reference when booking directly with the hotel:{' '}
                  <span className="font-medium">{HILLGROVE.bookingCode}</span>
                </p>
              </div>
            </div>
          </div>

          <h3 className="mt-8 text-lg uppercase tracking-wide text-ivy-600">Airbnbs</h3>
          <p className="mt-2 text-sm italic text-ivy-600">
            Most convenient if not staying on property &mdash; located in the village of Glaslough, directly adjacent
            to the Leslie estate.
          </p>
          <p className="mt-2 text-ivy-700">
            A few houses in the village of Glaslough itself, for groups who&rsquo;d rather stay together.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {AIRBNBS.map((listing, index) => (
              <div key={index} className="rounded-lg border border-ivy-100 p-5">
                <div className="flex items-start gap-3">
                  <HouseIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
                  <div>
                    {listing.url ? (
                      <a
                        href={listing.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-lg text-ivy-800 hover:text-gold-600"
                      >
                        {listing.name}
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <p className="text-lg text-ivy-800">{listing.name}</p>
                    )}
                    <p className="mt-1 text-sm text-ivy-600">{listing.capacity}</p>
                    {!listing.url && <p className="mt-1 text-xs italic text-ivy-600/70">Link coming soon</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ivy-800">Getting Around</h2>

          <div className="mt-5 rounded-lg border border-ivy-100 p-5">
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <div>
                <p className="text-lg text-ivy-800">Local taxis</p>
                <ul className="mt-1 space-y-1 text-sm text-ivy-700">
                  {TAXIS.map((taxi) => (
                    <li key={taxi.name}>
                      {taxi.name} &mdash;{' '}
                      <a href={`tel:${taxi.tel}`} className="text-ivy-700 underline hover:text-gold-600">
                        {taxi.phone}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs italic text-ivy-600/70">
                  Worth calling ahead on the night, especially later on &mdash; it&rsquo;s a small town.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-ivy-100 p-5">
            <div className="flex items-start gap-3">
              <CarIcon className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <div>
                <p className="text-lg text-ivy-800">Renting a car</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-ivy-700">
                  <li>It&rsquo;s about a 1.5&ndash;2 hour drive from Dublin, mostly via the N2.</li>
                  <li>The Hillgrove Hotel has on-site parking for hotel guests.</li>
                  <li>
                    Staying at one of the Airbnbs? Check with your host on how many parking spots the house has
                    &mdash; if a few of you are driving, carpooling is a good bet.
                  </li>
                  <li>Castle Leslie will have parking on the wedding day &mdash; more details closer to the date.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
