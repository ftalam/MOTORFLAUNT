'use client'

import { motion } from 'framer-motion'
import { CheckIcon, CalculatorIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const benefits = [
  {
    icon: CheckIcon,
    title: 'Quality Guaranteed',
    description: 'All vehicles undergo thorough inspection and come with warranty'
  },
  {
    icon: CalculatorIcon,
    title: 'Flexible Financing',
    description: 'Competitive rates and flexible payment options available'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Buyer Protection',
    description: 'Comprehensive protection plans and after-sales support'
  }
]

export default function SalesHero() {
  return (
    <div className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find Your Perfect Car
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Browse our extensive selection of quality pre-owned and new vehicles. 
              Competitive pricing, financing options, and exceptional service guaranteed.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/vehicles" className="btn-primary text-lg px-8 py-4">
              Browse Inventory
            </Link>
            <Link href="/pre-approval" className="btn-secondary text-lg px-8 py-4">
              Get Pre-Approved
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 