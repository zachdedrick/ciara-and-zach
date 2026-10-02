import PageHeader from '../components/PageHeader'
import WatercolorDivider from '../components/WatercolorDivider'
import MarqueeStrip from '../components/MarqueeStrip'
import dublinGrogans from '../assets/photos/dublin-grogans.jpg'
import dundalkFamilyHome from '../assets/photos/dundalk-family-home.jpg'
import galleryBarGuinness from '../assets/photos/gallery-bar-guinness.jpg'
import galleryGlydeInn from '../assets/photos/gallery-glyde-inn.jpg'
import galleryChurch from '../assets/photos/gallery-church.jpg'
import galleryTempleBar from '../assets/photos/gallery-temple-bar.jpg'
import galleryPubToast from '../assets/photos/gallery-pub-toast.jpg'
import galleryGrandmaSelfie from '../assets/photos/gallery-grandma-selfie.jpg'
import galleryKerryCliffsGroup from '../assets/photos/gallery-kerry-cliffs-group.jpg'
import galleryFamilyFenceDog from '../assets/photos/gallery-family-fence-dog.jpg'
import galleryMountainGroup from '../assets/photos/gallery-mountain-group.jpg'
import galleryAlpacas from '../assets/photos/gallery-alpacas.jpg'
import lahinchGolfDunes from '../assets/photos/lahinch-golf-dunes.jpg'
import golfCourseGroup from '../assets/photos/golf-course-group.jpg'
import galleryGolfFlagGroup from '../assets/photos/gallery-golf-flag-group.jpg'
import galleryCliffsOfMoherBoys from '../assets/photos/gallery-cliffs-of-moher-boys.jpg'
import engagementPosed from '../assets/photos/engagement-posed.jpg'
import engagementOnKnee from '../assets/photos/engagement-on-knee.jpg'
import engagementBwBoat from '../assets/photos/engagement-bw-boat.jpg'
import throughYearsCliffside from '../assets/photos/through-years-cliffside.jpg'
import throughYearsSunsetSelfie from '../assets/photos/through-years-sunset-selfie.jpg'
import throughYearsFilmParty from '../assets/photos/through-years-film-party.jpg'
import throughYearsGolfCart from '../assets/photos/through-years-golf-cart.jpg'
import throughYearsFormalNight from '../assets/photos/through-years-formal-night.jpg'
import throughYearsPoolSunset from '../assets/photos/through-years-pool-sunset.jpg'
import throughYearsGolfFormal from '../assets/photos/through-years-golf-formal.jpg'
import throughYearsLakeHats from '../assets/photos/through-years-lake-hats.jpg'
import throughYearsFilmHug from '../assets/photos/through-years-film-hug.jpg'
import throughYearsDockSelfie from '../assets/photos/through-years-dock-selfie.jpg'

// TODO: swap in more trip photos as we get them — just add an import above
// and drop it into the array below.
const FEATURED = [
  { src: dundalkFamilyHome, alt: "Ciara and her family outside their home in Dundalk, Co. Louth" },
  { src: galleryGlydeInn, alt: 'Ciara & Zach outside the Glyde Inn', objectPosition: '50% 75%' },
  { src: galleryKerryCliffsGroup, alt: 'Family at the Kerry Cliffs' },
  { src: galleryGrandmaSelfie, alt: "Ciara and her grandmother" },
  { src: dublinGrogans, alt: "Ciara, Zach, and a friend at Grogan's on South William Street, Dublin" },
  { src: galleryTempleBar, alt: 'Ciara with friends at Temple Bar, Dublin' },
  { src: galleryMountainGroup, alt: 'Family in the mountains of Co. Kerry' },
  { src: galleryPubToast, alt: 'Raising a glass with friends at a Dublin pub' },
  { src: galleryGolfFlagGroup, alt: 'A round of golf on the Co. Clare coast' },
  { src: galleryCliffsOfMoherBoys, alt: 'The lads at the Cliffs of Moher' },
]

const STRIP = [
  { src: dublinGrogans, alt: "At Grogan's in Dublin" },
  { src: dundalkFamilyHome, alt: "Outside Ciara's family home in Dundalk" },
  { src: galleryBarGuinness, alt: 'The lads pulling pints of Guinness' },
  { src: lahinchGolfDunes, alt: 'A round at Lahinch' },
  { src: golfCourseGroup, alt: 'A round of golf on the Co. Clare coast' },
  { src: galleryChurch, alt: 'A church we visited in Ireland' },
  { src: galleryFamilyFenceDog, alt: 'Cousins and the dog back home' },
  { src: galleryAlpacas, alt: 'Alpacas on a hillside in Co. Kerry' },
  { src: galleryTempleBar, alt: 'Temple Bar, Dublin' },
  { src: galleryPubToast, alt: 'Cheers at a Dublin pub' },
]

const THROUGH_THE_YEARS = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo' },
  { src: engagementOnKnee, alt: 'Zach proposing to Ciara' },
  { src: engagementBwBoat, alt: 'Ciara & Zach celebrating with friends' },
  { src: galleryGlydeInn, alt: 'Ciara & Zach outside the Glyde Inn', objectPosition: '50% 75%' },
  { src: throughYearsCliffside, alt: 'Ciara & Zach at sunset by the sea' },
  { src: throughYearsSunsetSelfie, alt: 'Ciara & Zach at sunset' },
  { src: throughYearsFilmParty, alt: 'Ciara & Zach at a party' },
  { src: throughYearsGolfCart, alt: 'Ciara & Zach golfing together' },
  { src: throughYearsFormalNight, alt: 'Ciara & Zach dressed up for a night out' },
  { src: throughYearsPoolSunset, alt: 'Ciara & Zach at sunset by the pool' },
  { src: throughYearsGolfFormal, alt: 'Ciara & Zach at a wedding' },
  { src: throughYearsLakeHats, alt: 'Ciara & Zach by the water' },
  { src: throughYearsFilmHug, alt: 'Ciara & Zach laughing together' },
  { src: throughYearsDockSelfie, alt: 'Ciara & Zach on the water' },
]

export default function Gallery() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Snapshots from our trips to Ireland" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">From Our Trips</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={FEATURED} tileClassName="aspect-[4/3] w-72 sm:w-96" durationSeconds={36} />
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">More From Our Trips</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={STRIP} />
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Ciara &amp; Zach Through the Years</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={THROUGH_THE_YEARS} tileClassName="aspect-[4/3] w-72 sm:w-96" durationSeconds={32} reverse />
        </section>
      </div>
    </div>
  )
}
