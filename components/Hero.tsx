'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your Journey Starts with{' '}
              <span className="text-accent-200">M0T0RFLAUNT</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Premium car rental and sales services. Whether you need a vehicle for a day or want to own your dream car, we've got you covered with our extensive fleet and competitive prices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/rental" className="btn-primary text-lg px-8 py-4">
                Rent a Car
              </Link>
              <Link href="/sales" className="btn-secondary text-lg px-8 py-4">
                Buy a Car
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative bg-white/10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-300">Vehicles Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white">1K+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 