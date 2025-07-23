import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SalesHero from '@/components/SalesHero'
import SalesVehicles from '@/components/SalesVehicles'

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SalesHero />
      <SalesVehicles />
      <Footer />
    </main>
  )
} 