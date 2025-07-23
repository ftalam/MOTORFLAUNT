'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Traveler',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: 'M0T0SP0RT made my business trips so much easier. The rental process was seamless, and the vehicles were always in perfect condition. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Family Vacation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: 'We rented an SUV for our family vacation and it was perfect! The staff was friendly, the car was clean, and the pricing was transparent. Will definitely use them again.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Car Buyer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: 'I purchased my dream car from M0T0SP0RT and the experience was outstanding. They helped me with financing and the entire process was smooth and professional.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Weekend Renter',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    content: 'Great service for weekend getaways! The online booking was easy, pickup was quick, and the car was exactly as described. Very satisfied customer.',
    rating: 4
  }
]

export default function Testimonials() {
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
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <blockquote className="mt-4 text-gray-600">
                "{testimonial.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the M0T0SP0RT difference today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/rental" className="btn-primary">
                Start Renting
              </a>
              <a href="/sales" className="btn-secondary">
                Browse Cars for Sale
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 