import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RentalFilters from '@/components/RentalFilters'
import VehicleGrid from '@/components/VehicleGrid'

export default function RentalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Car Rental Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose from our extensive fleet of vehicles for your next journey. Flexible rental periods, competitive rates, and exceptional service.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <RentalFilters />
          </div>
          
          {/* Vehicle Grid */}
          <div className="lg:col-span-3">
            <VehicleGrid />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 