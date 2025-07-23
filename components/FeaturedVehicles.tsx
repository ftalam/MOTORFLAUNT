'use client'

import { motion } from 'framer-motion'
import { StarIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { getRentalVehicles, getSalesVehicles, type Vehicle } from '@/lib/vehicles'
import Link from 'next/link'

export default function FeaturedVehicles() {
  // Show both cars from both rental and sales
  const vehicles = [
    ...getRentalVehicles().filter(v => v.name === 'Toyota Land Cruiser' || v.name === 'BMW X1'),
    ...getSalesVehicles().filter(v => v.name === 'Toyota Land Cruiser' || v.name === 'BMW X1')
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Vehicles
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our handpicked selection of premium motors for sale and rent
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2">
          {vehicles.map((vehicle, index) => (
            <motion.article
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-900 shadow-sm">
                  {vehicle.category}
                </div>
                {vehicle.originalPrice && vehicle.originalPrice > vehicle.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-medium shadow-sm">
                    Save ${(vehicle.originalPrice - vehicle.price).toLocaleString()}
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{vehicle.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({vehicle.reviews})</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {vehicle.location}
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>Year: {vehicle.year}</div>
                  <div>Mileage: {vehicle.mileage}</div>
                  <div>Fuel: {vehicle.fuel}</div>
                  <div>Trans: {vehicle.transmission}</div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-primary-600">
                      ${vehicle.price.toLocaleString()}
                      {vehicle.originalPrice && vehicle.originalPrice > vehicle.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${vehicle.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {vehicle.id.startsWith('rental') ? 'per day' : 'Sale Price'}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn-primary text-sm px-4 py-2">
                      {vehicle.id.startsWith('rental') ? 'Rent' : 'Buy'}
                    </button>
                    <Link href={`/vehicles/${vehicle.id}`} className="btn-secondary text-sm px-4 py-2">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="/vehicles" className="btn-primary">
              View All Vehicles
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 