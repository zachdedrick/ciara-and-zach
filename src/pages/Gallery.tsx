import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import FadeCarousel from '../components/FadeCarousel'
import SlideCarousel from '../components/SlideCarousel'
import MarqueeStrip from '../components/MarqueeStrip'
import dublinGrogans from '../assets/photos/dublin-grogans.jpg'
import dundalkFamilyHome from '../assets/photos/dundalk-family-home.jpg'
import engagementPosed from '../assets/photos/engagement-posed.jpg'
import engagementOnKnee from '../assets/photos/engagement-on-knee.jpg'
import engagementBwBoat from '../assets/photos/engagement-bw-boat.jpg'

// TODO: swap in more trip photos as we get them — just add an import above
// and drop it into one of the arrays below.
const FEATURED = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo' },
  { src: dundalkFamilyHome, alt: "Ciara and her family outside their home in Dundalk, Co. Louth" },
  { src: engagementOnKnee, alt: 'Zach proposing to Ciara' },
]

const SLIDES = [
  { src: dublinGrogans, alt: "Ciara, Zach, and a friend at Grogan's on South William Street, Dublin" },
  { src: engagementBwBoat, alt: 'Ciara & Zach celebrating with friends' },
  { alt: 'More of our trips to Ireland, coming soon' },
]

const STRIP = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo' },
  { src: dublinGrogans, alt: "At Grogan's in Dublin" },
  { src: dundalkFamilyHome, alt: "Outside Ciara's family home in Dundalk" },
  { src: engagementOnKnee, alt: 'The proposal' },
  { alt: 'More photos coming soon' },
  { alt: 'More photos coming soon' },
]

export default function Gallery() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Snapshots from our trips to Ireland" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Featured Moments</h2>
          <WatercolorDivider />
          <div className="mx-auto max-w-2xl">
            <FadeCarousel photos={FEATURED} />
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">On Our Travels</h2>
          <WatercolorDivider />
          <div className="mx-auto max-w-3xl">
            <SlideCarousel photos={SLIDES} />
          </div>
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">More From Our Trips</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={STRIP} />
        </section>
      </div>
    </div>
  )
}
