import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import SwipeCarousel from '../components/SwipeCarousel'
import SlideCarousel from '../components/SlideCarousel'
import MarqueeStrip from '../components/MarqueeStrip'
import dublinGrogans from '../assets/photos/dublin-grogans.jpg'
import dundalkFamilyHome from '../assets/photos/dundalk-family-home.jpg'
import engagementPosed from '../assets/photos/engagement-posed.jpg'
import engagementOnKnee from '../assets/photos/engagement-on-knee.jpg'
import engagementBwBoat from '../assets/photos/engagement-bw-boat.jpg'
import galleryBarGuinness from '../assets/photos/gallery-bar-guinness.jpg'
import galleryGlydeInn from '../assets/photos/gallery-glyde-inn.jpg'
import galleryChurch from '../assets/photos/gallery-church.jpg'
import galleryTempleBar from '../assets/photos/gallery-temple-bar.jpg'
import galleryPubToast from '../assets/photos/gallery-pub-toast.jpg'

// TODO: swap in more trip photos as we get them — just add an import above
// and drop it into one of the arrays below.
const FEATURED = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo' },
  { src: dundalkFamilyHome, alt: "Ciara and her family outside their home in Dundalk, Co. Louth" },
  { src: engagementOnKnee, alt: 'Zach proposing to Ciara' },
  { src: galleryGlydeInn, alt: 'Ciara & Zach outside the Glyde Inn' },
]

const SLIDES = [
  { src: dublinGrogans, alt: "Ciara, Zach, and a friend at Grogan's on South William Street, Dublin" },
  { src: galleryTempleBar, alt: 'Ciara with friends at Temple Bar, Dublin' },
  { src: engagementBwBoat, alt: 'Ciara & Zach celebrating with friends' },
  { src: galleryPubToast, alt: 'Raising a glass with friends at a Dublin pub' },
]

const STRIP = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo' },
  { src: dublinGrogans, alt: "At Grogan's in Dublin" },
  { src: dundalkFamilyHome, alt: "Outside Ciara's family home in Dundalk" },
  { src: engagementOnKnee, alt: 'The proposal' },
  { src: galleryBarGuinness, alt: 'The lads pulling pints of Guinness' },
  { src: galleryChurch, alt: 'A church we visited in Ireland' },
  { src: galleryTempleBar, alt: 'Temple Bar, Dublin' },
  { src: galleryPubToast, alt: 'Cheers at a Dublin pub' },
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
            <SwipeCarousel photos={FEATURED} />
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
