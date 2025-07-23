'use client'

import { motion } from 'framer-motion'
import { CarIcon, ShoppingCartIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react'

const services = [
  {
    name: 'Car Rental',
    description: 'Flexible rental options for daily, weekly, or monthly needs. Wide selection of vehicles from economy to luxury.',
    icon: CarIcon,
    features: ['Daily/Weekly/Monthly rentals', 'Wide vehicle selection', 'Flexible pickup/drop-off', 'Insurance included'],
    href: '/rental'
  },
  {
    name: 'Car Sales',
    description: 'Quality pre-owned and new vehicles with competitive pricing and financing options available.',
    icon: ShoppingCartIcon,
    features: ['Quality pre-owned vehicles', 'Competitive pricing', 'Financing available', 'Warranty included'],
    href: '/sales'
  },
  {
    name: 'Insurance & Protection',
    description: 'Comprehensive insurance coverage and protection plans for your peace of mind.',
    icon: ShieldCheckIcon,
    features: ['Comprehensive coverage', '24/7 roadside assistance', 'No hidden fees', 'Quick claims process'],
    href: '/insurance'
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer support and roadside assistance whenever you need us.',
    icon: ClockIcon,
    features: ['24/7 customer support', 'Roadside assistance', 'Emergency services', 'Online booking'],
    href: '/contact'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive automotive solutions tailored to your needs
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">
                    <a href={service.href} className="text-primary-600 hover:text-primary-500 font-medium">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 