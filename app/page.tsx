import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import TeamSection from '@/components/TeamSection'
import SponsorsSection from '@/components/SponsorsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSlider />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}