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
import throughYearsRainbow from '../assets/photos/through-years-rainbow.jpg'
import throughYearsHatShop from '../assets/photos/through-years-hat-shop.jpg'
import throughYearsCubsGame from '../assets/photos/through-years-cubs-game.jpg'
import throughYearsGoldenDome from '../assets/photos/through-years-golden-dome.jpg'
import throughYearsSnowGame from '../assets/photos/through-years-snow-game.jpg'
import throughYearsFormalPlaid from '../assets/photos/through-years-formal-plaid.jpg'
import throughYearsCinqueTerre from '../assets/photos/through-years-cinque-terre.jpg'
import throughYearsTailgate from '../assets/photos/through-years-tailgate.jpg'
import loveyouFilmFamily from '../assets/photos/loveyou-film-family.jpg'
import loveyouPierMom from '../assets/photos/loveyou-pier-mom.jpg'
import loveyouBeachFamily from '../assets/photos/loveyou-beach-family.jpg'
import loveyouRooftopGirls from '../assets/photos/loveyou-rooftop-girls.jpg'
import loveyouPubGuys from '../assets/photos/loveyou-pub-guys.jpg'
import loveyouBostonFormal from '../assets/photos/loveyou-boston-formal.jpg'
import loveyouMuralFamily from '../assets/photos/loveyou-mural-family.jpg'
import loveyouDockFamily from '../assets/photos/loveyou-dock-family.jpg'
import loveyouStpatricksGroup from '../assets/photos/loveyou-stpatricks-group.jpg'
import loveyouMetlifeTailgate from '../assets/photos/loveyou-metlife-tailgate.jpg'
import loveyouGraduation from '../assets/photos/loveyou-graduation.jpg'
import loveyouFlowersGirls from '../assets/photos/loveyou-flowers-girls.jpg'
import loveyouGrandmaCafe from '../assets/photos/loveyou-grandma-cafe.jpg'
import loveyouPorchGirls from '../assets/photos/loveyou-porch-girls.jpg'
import loveyouBeachGirlsSunset from '../assets/photos/loveyou-beach-girls-sunset.jpg'

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
  { src: galleryBarGuinness, alt: 'The lads pulling pints of Guinness' },
  { src: lahinchGolfDunes, alt: 'A round at Lahinch' },
  { src: golfCourseGroup, alt: 'A round of golf on the Co. Clare coast' },
  { src: galleryChurch, alt: 'A church we visited in Ireland' },
  { src: galleryFamilyFenceDog, alt: 'Cousins and the dog back home' },
  { src: galleryAlpacas, alt: 'Alpacas on a hillside in Co. Kerry' },
]

const THROUGH_THE_YEARS = [
  { src: engagementPosed, alt: 'Ciara & Zach, engagement photo', objectPosition: '50% 20%' },
  { src: engagementOnKnee, alt: 'Zach proposing to Ciara' },
  { src: engagementBwBoat, alt: 'Ciara & Zach celebrating with friends', objectPosition: '30% 45%' },
  { src: galleryGlydeInn, alt: 'Ciara & Zach outside the Glyde Inn', objectPosition: '50% 75%' },
  { src: throughYearsCliffside, alt: 'Ciara & Zach at sunset by the sea', objectPosition: '50% 15%' },
  { src: throughYearsSunsetSelfie, alt: 'Ciara & Zach at sunset', objectPosition: '50% 60%' },
  { src: throughYearsFilmParty, alt: 'Ciara & Zach at a party', objectPosition: '75% 60%' },
  { src: throughYearsGolfCart, alt: 'Ciara & Zach golfing together', objectPosition: '50% 40%' },
  { src: throughYearsFormalNight, alt: 'Ciara & Zach dressed up for a night out', objectPosition: '45% 20%' },
  { src: throughYearsPoolSunset, alt: 'Ciara & Zach at sunset by the pool', objectPosition: '50% 20%' },
  { src: throughYearsGolfFormal, alt: 'Ciara & Zach at a wedding', objectPosition: '50% 42%' },
  { src: throughYearsLakeHats, alt: 'Ciara & Zach by the water' },
  { src: throughYearsFilmHug, alt: 'Ciara & Zach laughing together', objectPosition: '50% 58%' },
  { src: throughYearsDockSelfie, alt: 'Ciara & Zach on the water' },
  { src: throughYearsRainbow, alt: 'Ciara & Zach under a rainbow', objectPosition: '50% 70%' },
  { src: throughYearsHatShop, alt: 'Ciara & Zach trying on hats', objectPosition: '50% 30%' },
  { src: throughYearsCubsGame, alt: 'Ciara & Zach at a baseball game', objectPosition: '50% 45%' },
  { src: throughYearsGoldenDome, alt: "Ciara & Zach at Notre Dame", objectPosition: '50% 40%' },
  { src: throughYearsSnowGame, alt: 'Ciara & Zach at a snowy Notre Dame football game' },
  { src: throughYearsFormalPlaid, alt: 'Ciara & Zach at a formal in front of the Golden Dome' },
  { src: throughYearsCinqueTerre, alt: 'Ciara & Zach in Cinque Terre, Italy', objectPosition: '50% 55%' },
  { src: throughYearsTailgate, alt: 'Ciara & Zach tailgating at Notre Dame', objectPosition: '50% 38%' },
]

// TODO: add more family & friends photos here as we get them.
const WE_LOVE_YOU_ALL = [
  { src: loveyouFilmFamily, alt: "Ciara with family at a celebration", objectPosition: '50% 42%' },
  { src: loveyouPierMom, alt: "Zach and his mom", objectPosition: '50% 38%' },
  { src: loveyouBeachFamily, alt: "Ciara's family on the beach at sunset", objectPosition: '50% 42%' },
  { src: loveyouRooftopGirls, alt: "Ciara and friends on a NYC rooftop", objectPosition: '50% 45%' },
  { src: loveyouPubGuys, alt: "Zach and friends at a pub" },
  { src: loveyouBostonFormal, alt: "Zach and Ciara with friends in Boston", objectPosition: '50% 28%' },
  { src: loveyouMuralFamily, alt: "Zach with family" },
  { src: loveyouDockFamily, alt: "Zach and Ciara with Zach's family", objectPosition: '50% 38%' },
  { src: loveyouStpatricksGroup, alt: "Ciara and friends celebrating St. Patrick's Day" },
  { src: loveyouMetlifeTailgate, alt: "Zach and friends tailgating at MetLife Stadium", objectPosition: '50% 32%' },
  { src: loveyouGraduation, alt: "Ciara with her grandparents at graduation", objectPosition: '50% 25%' },
  { src: loveyouFlowersGirls, alt: "Ciara and friends in Italy", objectPosition: '50% 65%' },
  { src: loveyouGrandmaCafe, alt: "Ciara's grandmother enjoying dessert", objectPosition: '50% 22%' },
  { src: loveyouPorchGirls, alt: "Ciara and friends at sunset", objectPosition: '50% 38%' },
  { src: loveyouBeachGirlsSunset, alt: "Ciara and friends on the beach at sunset", objectPosition: '50% 44%' },
]

export default function Gallery() {
  return (
    <div>
      <PageHeader title="Gallery" subtitle="Snapshots from our trips to Ireland" />

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">From Our Trips</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={FEATURED} tileClassName="aspect-[4/3] w-80 sm:w-[28rem]" durationSeconds={48} />
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">Ciara &amp; Zach Through the Years</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={THROUGH_THE_YEARS} tileClassName="aspect-[4/3] w-72 sm:w-96" durationSeconds={32} reverse />
        </section>

        <section>
          <h2 className="font-display text-center text-2xl text-ivy-800">We Love You All!</h2>
          <WatercolorDivider />
          <MarqueeStrip photos={WE_LOVE_YOU_ALL} tileClassName="aspect-[4/3] w-72 sm:w-96" durationSeconds={30} />
        </section>
      </div>
    </div>
  )
}
