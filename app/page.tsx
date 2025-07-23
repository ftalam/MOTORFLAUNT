import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedVehicles from '@/components/FeaturedVehicles'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FeaturedVehicles />
      <Testimonials />
      <Footer />
    </main>
  )
} 