'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialItem {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating?: number
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Dineth Pabasara',
    role: 'Founder & Creative Director',
    company: 'Designkoolama (Pvt) Ltd',
    avatar: '/images/client-dineth.jpg',
    quote:
      '"MuchLogic completely transformed our digital presence. They re-engineered Designkoolama.lk from the ground up into a blazing-fast, modern platform with effortless Dark and Light mode switching and fluid animations. Their engineering precision and clean design exceeded every expectation."',
    rating: 5,
  },
]

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="relative pt-6 pl-3">
      {/* 3D Ribbon Fold Tab (Behind Left Edge) */}
      <div className="absolute left-0 top-10 w-4 h-14 bg-[#1E3A8A] rounded-l-xl z-0" />

      {/* Top Electric Blue Header Pill */}
      <div className="relative z-20 w-[76%] sm:w-[78%] bg-[#2563EB] text-white pl-6 pr-8 py-4 rounded-r-full rounded-tl-2xl shadow-md">
        <div className="text-lg font-bold leading-tight text-white">
          {item.name}
        </div>
        <div className="text-xs sm:text-sm text-blue-100 mt-0.5 truncate">
          {item.role}, {item.company}
        </div>
      </div>

      {/* Overlapping Circular Client Avatar */}
      <div className="absolute right-2 sm:right-4 top-0 z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-zinc-200/80">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-full h-full rounded-full object-cover object-top block select-none pointer-events-none"
        />
      </div>

      {/* Main Light-Surface Card Body */}
      <div className="relative z-10 -mt-5 ml-1 bg-[#F4F4F5]/90 border border-zinc-200/90 rounded-3xl pt-10 pb-7 px-6 sm:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-stretch gap-4 sm:gap-5">
          {/* Left Thin Vertical Electric Blue Accent Line */}
          <div className="w-[2.5px] bg-[#2563EB] rounded-full shrink-0" />

          {/* Right Content Column */}
          <div className="space-y-3">
            {/* 5 Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: item.rating || 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                />
              ))}
            </div>

            {/* Clean Engineering Review Quote */}
            <blockquote className="text-sm sm:text-[15px] text-[#3F3F46] leading-relaxed font-normal">
              {item.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const isSingle = TESTIMONIALS.length === 1

  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFFFF] border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span className="w-6 h-[2px] bg-[#2563EB]" />
            <span>CLIENT STORIES</span>
            <span className="w-6 h-[2px] bg-[#2563EB]" />
          </div>

          {/* Crisp Condensed Display Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] text-center text-[#09090B]">
            TRUSTED BY <span className="text-[#2563EB]">AMBITIOUS BRANDS.</span>
          </h2>

          {/* Concise Section Description */}
          <p className="mt-4 max-w-2xl mx-auto text-center text-[#52525B] text-base md:text-lg leading-relaxed">
            Hear directly from the founders and teams who partnered with MuchLogic to engineer faster, smarter digital platforms.
          </p>
        </motion.div>

        {/* Testimonial Cards Layout: Single Centered Card OR 2-Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={
            isSingle
              ? 'max-w-xl mx-auto mt-16'
              : 'grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16'
          }
        >
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
