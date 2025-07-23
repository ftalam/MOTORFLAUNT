"use client"

import { useParams } from 'next/navigation'
import { getVehicleById } from '@/lib/vehicles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function VehicleDetailsPage() {
  const params = useParams()
  const id = params.id as string
  const vehicle = getVehicleById(id)

  if (!vehicle) {
    return <div className="text-center py-20 text-2xl">Vehicle not found.</div>
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">{vehicle.name}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src={vehicle.image}
              alt={vehicle.imageAlt}
              className="rounded-lg w-full object-cover mb-4"
            />
            {vehicle.additionalImages && vehicle.additionalImages.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {vehicle.additionalImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${vehicle.name} additional view ${i + 1}`}
                    className="w-32 h-20 object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div><strong>Type:</strong> {vehicle.type}</div>
            <div><strong>Category:</strong> {vehicle.category}</div>
            <div><strong>Year:</strong> {vehicle.year}</div>
            <div><strong>Mileage:</strong> {vehicle.mileage}</div>
            <div><strong>Fuel:</strong> {vehicle.fuel}</div>
            <div><strong>Transmission:</strong> {vehicle.transmission}</div>
            <div><strong>Seats:</strong> {vehicle.seats}</div>
            <div><strong>Color:</strong> {vehicle.color}</div>
            <div><strong>Engine:</strong> {vehicle.engine}</div>
            <div><strong>Fuel Efficiency:</strong> {vehicle.fuelEfficiency}</div>
            <div><strong>Description:</strong> {vehicle.description}</div>
            <div><strong>Features:</strong> {vehicle.features?.join(', ')}</div>
            {vehicle.price && (
              <div className="text-2xl font-bold text-primary-600 mt-4">
                {vehicle.id.startsWith('rental') ? `$${vehicle.price}/day` : `$${vehicle.price}`}
              </div>
            )}
            {vehicle.originalPrice && vehicle.originalPrice > vehicle.price && (
              <div className="text-sm text-gray-500 line-through">
                ${vehicle.originalPrice.toLocaleString()}
              </div>
            )}
            {vehicle.condition && (
              <div><strong>Condition:</strong> {vehicle.condition}</div>
            )}
            {vehicle.financing && (
              <div><strong>Financing:</strong> {vehicle.financing}</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 