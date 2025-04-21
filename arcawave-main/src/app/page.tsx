import Hero from '@/components/sections/hero'
import ServiceIntro from '@/components/sections/service-intro'
import TechSection from '@/components/sections/tech-section'
import MarketSection from '@/components/sections/market'
import BusinessSection from '@/components/sections/business'
import Portfolio from '@/components/sections/portfolio'
import ArtistJoin from '@/components/sections/artist-join'
import PartnersIR from '@/components/sections/partners-ir'
import ContactForm from '@/components/sections/contact-form'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceIntro />
      <TechSection />
      <MarketSection />
      <BusinessSection />
      <Portfolio />
      <ArtistJoin />
      <PartnersIR />
      <ContactForm />
    </div>
  )
}