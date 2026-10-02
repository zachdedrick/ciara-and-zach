import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { TrainIcon } from '../components/icons'
import dublinGrogans from '../assets/photos/dublin-grogans.jpg'
import dundalkFamilyHome from '../assets/photos/dundalk-family-home.jpg'

// TODO: add more trip photos here as we get them.
const TRIP_GALLERY = [
  { src: dublinGrogans, alt: "Ciara, Zach, and a friend at Grogan's on South William Street, Dublin" },
  { alt: 'More of our trips to Ireland, coming soon' },
  { alt: 'More of our trips to Ireland, coming soon' },
]

export default function OurStory() {
  return (
    <div>
      <PageHeader title="Our Story" subtitle="Family roots, favourite memories, and a few of our trips" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Ciara&rsquo;s Family Roots</h2>
          <WatercolorDivider />

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <PhotoPlaceholder src={dundalkFamilyHome} alt="Ciara and her family outside their home in Dundalk" />
            </div>
            <div className="space-y-2 text-ivy-700">
              <p>
                Ciara&rsquo;s family is based in Dundalk, Co. Louth, just south of the border &mdash; it&rsquo;s
                where her mother and grandmother call home, and where Ciara grew up visiting often.
              </p>
              <p>It&rsquo;s a quick detour if you&rsquo;re driving between Dublin and the wedding.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Zach&rsquo;s Favourite Memories</h2>
          <WatercolorDivider />

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <PhotoPlaceholder alt="Ciara & Zach in Howth" />
            </div>
            <div>
              <h3 className="font-display text-xl text-ivy-800">A Day Trip to Howth</h3>
              <div className="mt-1 flex items-center gap-1.5 text-sm uppercase tracking-wide text-gold-600">
                <TrainIcon className="h-4 w-4" />
                ~30 min by DART from Dublin
              </div>
              <div className="mt-3 space-y-2 text-ivy-700">
                <p>
                  One of our favourite days in Ireland together was a trip out to Howth, just outside Dublin. Hop on
                  the DART (the train, not a bus!) from Tara Street or Connolly Station &mdash; it&rsquo;s about 30
                  minutes and drops you right at the harbour.
                </p>
                <p>
                  Walk the cliff path for the views, then grab fish and chips from one of the stalls by the pier. If
                  you&rsquo;ve got a day to spare in Dublin before or after the wedding, we can&rsquo;t recommend it
                  enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Our Trips to Ireland</h2>
          <WatercolorDivider />

          <div className="grid gap-4 sm:grid-cols-3">
            {TRIP_GALLERY.map((photo, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                <PhotoPlaceholder src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
