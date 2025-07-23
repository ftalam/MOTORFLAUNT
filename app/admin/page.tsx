'use client'

import { useState } from 'react'
import { getAllVehicles, type Vehicle } from '@/lib/vehicles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PAGE_SIZE = 5

export default function AdminPage() {
  const [vehicles, setVehicles] = useState(getAllVehicles())
  const [activeTab, setActiveTab] = useState<'rental' | 'sales'>('rental')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const currentVehicles = vehicles[activeTab].slice(0, visibleCount)
  const canLoadMore = visibleCount < vehicles[activeTab].length

  function handleLoadMore() {
    setVisibleCount(c => Math.min(c + PAGE_SIZE, vehicles[activeTab].length))
  }

  // Reset visibleCount when tab changes
  function handleTab(tab: 'rental' | 'sales') {
    setActiveTab(tab)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Vehicle Management</h1>
            <p className="mt-2 text-gray-600">Manage your vehicle inventory and images</p>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => handleTab('rental')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'rental'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Rental Vehicles ({vehicles.rental.length})
              </button>
              <button
                onClick={() => handleTab('sales')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'sales'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sales Vehicles ({vehicles.sales.length})
              </button>
            </nav>
          </div>

          {/* Vehicle List */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  {activeTab === 'rental' ? 'Rental' : 'Sales'} Vehicles
                </h2>
                <button className="btn-primary">
                  Add New Vehicle
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentVehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-16">
                            <img
                              className="h-12 w-16 object-cover rounded"
                              src={vehicle.image}
                              alt={vehicle.imageAlt}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {vehicle.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {vehicle.year} • {vehicle.mileage} • {vehicle.fuel}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${vehicle.price?.toLocaleString?.() ?? ''}
                        </div>
                        {vehicle.originalPrice && vehicle.originalPrice > vehicle.price && (
                          <div className="text-sm text-gray-500 line-through">
                            ${vehicle.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vehicle.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          vehicle.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {vehicle.available ? 'Available' : 'Unavailable'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            Edit
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            View
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {canLoadMore && (
              <div className="p-4 text-center">
                <button className="btn-secondary" onClick={handleLoadMore}>
                  Load More Vehicles
                </button>
              </div>
            )}
          </div>

          {/* Image Management Section */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Image Management</h2>
              <p className="mt-1 text-sm text-gray-600">
                Upload and manage vehicle images in the public/images/vehicles/ directory
              </p>
            </div>
            <div className="p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="text-gray-600">
                  <p className="text-sm">
                    Place your vehicle images in the <code className="bg-gray-100 px-1 rounded">public/images/vehicles/</code> directory
                  </p>
                  <p className="text-sm mt-2">
                    Use the naming convention: <code className="bg-gray-100 px-1 rounded">brand-model-year.jpg</code>
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn-primary">
                    Upload Images
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Database Info */}
          <div className="mt-8 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Database Information</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{vehicles.rental.length}</div>
                  <div className="text-sm text-gray-600">Rental Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{vehicles.sales.length}</div>
                  <div className="text-sm text-gray-600">Sales Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{vehicles.rental.length + vehicles.sales.length}</div>
                  <div className="text-sm text-gray-600">Total Vehicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 