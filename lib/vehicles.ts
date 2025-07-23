import vehicleData from '@/data/vehicles.json'

export interface Vehicle {
  id: string
  name: string
  type: string
  category: string
  price: number
  originalPrice?: number
  image: string
  imageAlt: string
  rating: number
  reviews: number
  location: string
  year: number
  mileage: string
  fuel: string
  transmission: string
  seats: number
  features: string[]
  available?: boolean
  condition?: string
  financing?: string
  color: string
  engine: string
  fuelEfficiency: string
  description: string
  additionalImages?: string[]
  brand?: string
}

export interface VehicleFilters {
  type?: string[]
  category?: string[]
  brand?: string[]
  priceRange?: { min: number; max: number }
  features?: string[]
  year?: { min: number; max: number }
  fuel?: string[]
  transmission?: string[]
}

export function getAllVehicles(): { rental: Vehicle[]; sales: Vehicle[] } {
  return vehicleData as { rental: Vehicle[]; sales: Vehicle[] }
}

export function getRentalVehicles(): Vehicle[] {
  return vehicleData.rental as Vehicle[]
}

export function getSalesVehicles(): Vehicle[] {
  return vehicleData.sales as Vehicle[]
}

export function getFeaturedVehicles(limit: number = 4): Vehicle[] {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  return allVehicles
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

export function getVehicleById(id: string): Vehicle | null {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  return allVehicles.find(vehicle => vehicle.id === id) || null
}

export function filterVehicles(
  vehicles: Vehicle[],
  filters: VehicleFilters
): Vehicle[] {
  return vehicles.filter(vehicle => {
    // Type filter
    if (filters.type && filters.type.length > 0) {
      if (!filters.type.includes(vehicle.type)) return false
    }

    // Category filter
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(vehicle.category)) return false
    }

    // Price range filter
    if (filters.priceRange) {
      if (vehicle.price < filters.priceRange.min || vehicle.price > filters.priceRange.max) {
        return false
      }
    }

    // Features filter
    if (filters.features && filters.features.length > 0) {
      const hasAllFeatures = filters.features.every(feature => 
        vehicle.features.some(vf => vf.toLowerCase().includes(feature.toLowerCase()))
      )
      if (!hasAllFeatures) return false
    }

    // Year filter
    if (filters.year) {
      if (vehicle.year < filters.year.min || vehicle.year > filters.year.max) {
        return false
      }
    }

    // Fuel filter
    if (filters.fuel && filters.fuel.length > 0) {
      if (!filters.fuel.includes(vehicle.fuel)) return false
    }

    // Transmission filter
    if (filters.transmission && filters.transmission.length > 0) {
      if (!filters.transmission.includes(vehicle.transmission)) return false
    }

    return true
  })
}

export function searchVehicles(
  vehicles: Vehicle[],
  searchTerm: string
): Vehicle[] {
  const term = searchTerm.toLowerCase()
  return vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(term) ||
    vehicle.brand?.toLowerCase().includes(term) ||
    vehicle.type.toLowerCase().includes(term) ||
    vehicle.category.toLowerCase().includes(term) ||
    vehicle.description.toLowerCase().includes(term)
  )
}

export function sortVehicles(
  vehicles: Vehicle[],
  sortBy: string
): Vehicle[] {
  const sortedVehicles = [...vehicles]
  
  switch (sortBy) {
    case 'price-low':
      return sortedVehicles.sort((a, b) => a.price - b.price)
    case 'price-high':
      return sortedVehicles.sort((a, b) => b.price - a.price)
    case 'rating':
      return sortedVehicles.sort((a, b) => b.rating - a.rating)
    case 'year':
      return sortedVehicles.sort((a, b) => b.year - a.year)
    case 'mileage':
      return sortedVehicles.sort((a, b) => {
        const aMileage = parseInt(a.mileage.replace(/,/g, ''))
        const bMileage = parseInt(b.mileage.replace(/,/g, ''))
        return aMileage - bMileage
      })
    default:
      return sortedVehicles
  }
}

// Get unique values for filters
export function getUniqueTypes(): string[] {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  return [...new Set(allVehicles.map(v => v.type))]
}

export function getUniqueCategories(): string[] {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  return [...new Set(allVehicles.map(v => v.category))]
}

export function getUniqueFeatures(): string[] {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  const allFeatures = allVehicles.flatMap(v => v.features)
  return [...new Set(allFeatures)]
}

export function getPriceRange(): { min: number; max: number } {
  const allVehicles = [...getRentalVehicles(), ...getSalesVehicles()]
  const prices = allVehicles.map(v => v.price)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  }
} 