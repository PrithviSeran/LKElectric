import './page.css'

import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FaqSection } from './components/FaqSection'
import { HeroSection } from './components/HeroSection'
import { LocationsSlider } from './components/LocationsSlider'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrustSection } from './components/TrustSection'
import { ValueSection } from './components/ValueSection'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ValueSection />
        <ContactSection />
        <LocationsSlider />
        <TestimonialsSection />
        <TrustSection />
        <AboutSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
