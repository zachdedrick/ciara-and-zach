import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Itinerary from './pages/Itinerary'
import Travel from './pages/Travel'
import ThingsToDo from './pages/ThingsToDo'
import Gallery from './pages/Gallery'
import Registry from './pages/Registry'
import RSVP from './pages/RSVP'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="itinerary" element={<Itinerary />} />
          <Route path="travel" element={<Travel />} />
          <Route path="things-to-do" element={<ThingsToDo />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="registry" element={<Registry />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
