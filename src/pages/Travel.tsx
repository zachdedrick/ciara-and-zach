import PageHeader from '../components/PageHeader'
import { ExternalLinkIcon, HotelIcon, HouseIcon, MapPinIcon } from '../components/icons'

const HILLGROVE = {
  name: 'Hillgrove Hotel',
  address: 'Old Armagh Road, Monaghan, Co. Monaghan, Ireland',
  websiteUrl: 'https://www.hillgrovehotel.com',
  // TODO: replace once the hotel confirms the group booking reference.
  bookingCode: 'XXXXX',
}

// TODO: swap in the real listing name + Airbnb URL for each rental once we have them.
const AIRBNBS: { name: string; sleeps: number; url?: string }[] = [
  { name: 'Glaslough Airbnb #1', sleeps: 8 },
  { name: 'Glaslough Airbnb #2', sleeps: 8 },
  { name: 'Glaslough Airbnb #3', sleeps: 10 },
  { name: 'Glaslough Airbnb #4', sleeps: 11 },
]

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export default function Travel() {
  return (
    <div>
      <PageHeader title="Travel" subtitle="Getting to Glaslough, Co. Monaghan" />

      <div className="mx-auto max-w-3xl px-4 py-16">
        <section>
          <h2 className="font-display text-2xl text-ivy-800">Hotels</h2>

          <div className="mt-6 rounded-lg border border-ivy-100 p-5">
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
                  Booking reference for our room block: <span className="font-medium">{HILLGROVE.bookingCode}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-ivy-800">Airbnbs</h2>
          <p className="mt-2 text-ivy-700">
            A few houses in the village of Glaslough itself, for groups who&rsquo;d rather stay together.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {AIRBNBS.map((listing) => (
              <div key={listing.name} className="rounded-lg border border-ivy-100 p-5">
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
                    <p className="mt-1 text-sm text-ivy-600">Sleeps {listing.sleeps}</p>
                    {!listing.url && <p className="mt-1 text-xs italic text-ivy-600/70">Link coming soon</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
