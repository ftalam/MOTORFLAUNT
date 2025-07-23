'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const vehicleTypes = [
  { id: 'economy', name: 'Economy', count: 45 },
  { id: 'compact', name: 'Compact', count: 32 },
  { id: 'midsize', name: 'Midsize', count: 28 },
  { id: 'fullsize', name: 'Full Size', count: 22 },
  { id: 'suv', name: 'SUV', count: 35 },
  { id: 'luxury', name: 'Luxury', count: 18 },
  { id: 'truck', name: 'Truck', count: 12 },
  { id: 'van', name: 'Van', count: 8 },
]

const brands = [
  { id: 'toyota', name: 'Toyota', count: 25 },
  { id: 'honda', name: 'Honda', count: 20 },
  { id: 'ford', name: 'Ford', count: 18 },
  { id: 'chevrolet', name: 'Chevrolet', count: 15 },
  { id: 'bmw', name: 'BMW', count: 12 },
  { id: 'mercedes', name: 'Mercedes', count: 10 },
  { id: 'audi', name: 'Audi', count: 8 },
  { id: 'nissan', name: 'Nissan', count: 15 },
]

const priceRanges = [
  { id: '0-50', name: 'Under $50/day', min: 0, max: 50 },
  { id: '50-100', name: '$50 - $100/day', min: 50, max: 100 },
  { id: '100-150', name: '$100 - $150/day', min: 100, max: 150 },
  { id: '150+', name: 'Over $150/day', min: 150, max: null },
]

const features = [
  { id: 'automatic', name: 'Automatic Transmission', count: 120 },
  { id: 'manual', name: 'Manual Transmission', count: 15 },
  { id: 'hybrid', name: 'Hybrid/Electric', count: 25 },
  { id: '4wd', name: '4WD/AWD', count: 30 },
  { id: 'bluetooth', name: 'Bluetooth', count: 110 },
  { id: 'gps', name: 'GPS Navigation', count: 95 },
  { id: 'backup-camera', name: 'Backup Camera', count: 105 },
  { id: 'leather', name: 'Leather Seats', count: 40 },
]

export default function RentalFilters() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const toggleType = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    )
  }

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    )
  }

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedBrands([])
    setSelectedPriceRange('')
    setSelectedFeatures([])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-primary-600 hover:text-primary-500"
        >
          Clear all
        </button>
      </div>

      {/* Vehicle Type */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Vehicle Type</h3>
        <div className="space-y-2">
          {vehicleTypes.map((type) => (
            <label key={type.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type.id)}
                onChange={() => toggleType(type.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{type.name}</span>
              <span className="ml-auto text-sm text-gray-500">({type.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.id)}
                onChange={() => toggleBrand(brand.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{brand.name}</span>
              <span className="ml-auto text-sm text-gray-500">({brand.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center">
              <input
                type="radio"
                name="price-range"
                checked={selectedPriceRange === range.id}
                onChange={() => setSelectedPriceRange(range.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Features</h3>
        <div className="space-y-2">
          {features.map((feature) => (
            <label key={feature.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{feature.name}</span>
              <span className="ml-auto text-sm text-gray-500">({feature.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full btn-primary">
        Apply Filters
      </button>
    </div>
  )
} 