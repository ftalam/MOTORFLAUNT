'use client'

import { useState } from 'react'
import { StarIcon, MapPinIcon, UserIcon, CalendarIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

const vehicles = [
  {
    id: 1,
    name: '2023 Toyota Camry',
    type: 'Sedan',
    price: 28500,
    originalPrice: 32000,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 124,
    location: 'Downtown',
    year: 2023,
    mileage: '15,000',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    features: ['Bluetooth', 'GPS', 'Backup Camera', 'Cruise Control'],
    condition: 'Excellent',
    financing: 'Available'
  },
  {
    id: 2,
    name: '2022 Honda CR-V',
    type: 'SUV',
    price: 32000,
    originalPrice: 38000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 89,
    location: 'Airport',
    year: 2022,
    mileage: '22,000',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    features: ['AWD', 'Bluetooth', 'GPS', 'Backup Camera'],
    condition: 'Very Good',
    financing: 'Available'
  },
  {
    id: 3,
    name: '2023 BMW 3 Series',
    type: 'Luxury',
    price: 48500,
    originalPrice: 55000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviews: 156,
    location: 'Downtown',
    year: 2023,
    mileage: '8,500',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    features: ['Leather Seats', 'Premium Audio', 'Navigation', 'Parking Sensors'],
    condition: 'Excellent',
    financing: 'Available'
  },
  {
    id: 4,
    name: '2021 Ford F-150',
    type: 'Truck',
    price: 38000,
    originalPrice: 45000,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.6,
    reviews: 203,
    location: 'Industrial Area',
    year: 2021,
    mileage: '35,000',
    fuel: 'Gasoline',
    transmission: 'Automatic',
    seats: 6,
    features: ['4WD', 'Towing Package', 'Bluetooth', 'Backup Camera'],
    condition: 'Good',
    financing: 'Available'
  }
]

export default function SalesVehicles() {
  const [sortBy, setSortBy] = useState('recommended')
  const [viewMode, setViewMode] = useState('grid')

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vehicles for Sale
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Quality pre-owned vehicles with competitive pricing and financing options
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <p className="text-gray-600">{vehicles.length} vehicles available</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field w-auto"
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="year">Year: Newest First</option>
              <option value="mileage">Mileage: Low to High</option>
            </select>

            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 text-sm ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } rounded-l-lg`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 text-sm ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } rounded-r-lg`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Vehicle Image */}
              <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className={`w-full object-cover rounded-lg ${
                    viewMode === 'list' ? 'h-full' : 'aspect-[16/9]'
                  }`}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <HeartIcon className="h-4 w-4 text-gray-600" />
                  </button>
                  <div className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-medium shadow-md">
                    {vehicle.condition}
                  </div>
                </div>
                {vehicle.originalPrice > vehicle.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-medium shadow-md">
                    Save ${(vehicle.originalPrice - vehicle.price).toLocaleString()}
                  </div>
                )}
              </div>

              {/* Vehicle Details */}
              <div className={`mt-4 ${viewMode === 'list' ? 'ml-6 flex-1' : ''}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">{vehicle.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({vehicle.reviews})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      ${vehicle.price.toLocaleString()}
                    </div>
                    {vehicle.originalPrice > vehicle.price && (
                      <div className="text-sm text-gray-500 line-through">
                        ${vehicle.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {vehicle.location}
                </div>

                <div className={`mt-4 grid gap-2 text-sm text-gray-600 ${
                  viewMode === 'list' ? 'grid-cols-3' : 'grid-cols-2'
                }`}>
                  <div>Year: {vehicle.year}</div>
                  <div>Mileage: {vehicle.mileage}</div>
                  <div>Fuel: {vehicle.fuel}</div>
                  <div>Trans: {vehicle.transmission}</div>
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {vehicle.seats} seats
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {vehicle.condition}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {vehicle.features.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        +{vehicle.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex space-x-2">
                  <button className="flex-1 btn-primary">
                    Buy Now
                  </button>
                  <button className="btn-secondary">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  )
} 