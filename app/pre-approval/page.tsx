'use client'

import { useState } from 'react'
import { getAllVehicles } from '@/lib/vehicles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PreApprovalPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    idNumber: '',
    vehicleId: '',
  })
  const vehicles = [...getAllVehicles().rental, ...getAllVehicles().sales]

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Here you would send the data to your backend or email
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Get Pre-Approved</h1>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
            Thank you! Your pre-approval request has been received.<br />
            The admin will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ID/Passport Number</label>
              <input name="idNumber" value={form.idNumber} onChange={handleChange} required className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Item of Interest</label>
              <select name="vehicleId" value={form.vehicleId} onChange={handleChange} required className="input-field">
                <option value="">Select a vehicle...</option>
                {vehicles.map(v => (
                  <option key={v.id} value={v.id}>{v.name} ({v.year})</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-primary w-full">Submit Request</button>
          </form>
        )}
      </main>
      <Footer />
    </>
  )
} 