'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Layout,
  Terminal,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

interface ServiceItem {
  number: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Scalable web apps built with modern frameworks and clean architecture.',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Mobile Apps',
    description:
      'Native-feel mobile experiences for iOS and Android.',
    icon: Smartphone,
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'Interfaces that are intuitive, accessible, and on-brand.',
    icon: Layout,
  },
  {
    number: '04',
    title: 'Custom Software',
    description:
      'Tailored software solutions built around your exact workflow.',
    icon: Terminal,
  },
  {
    number: '05',
    title: 'AI & Automation',
    description:
      'Smart automation and AI features that save time and effort.',
    icon: Sparkles,
  },
  {
    number: '06',
    title: 'Maintenance & Support',
    description:
      'Ongoing care and support to keep your product running smoothly.',
    icon: ShieldCheck,
  },
]

// Staggered horizontal offsets on desktop to form a balanced semi-circular fan matching the radial arcs
const offsetClasses = [
  'lg:ml-0',
  'lg:ml-8',
  'lg:ml-14',
  'lg:ml-14',
  'lg:ml-8',
  'lg:ml-0',
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] py-24 lg:py-32 border-t border-zinc-200 relative overflow-hidden"
    >
      {/* Decorative Dot Matrix in Top-Right Corner (echoing geometric detail) */}
      <div className="absolute top-8 right-8 pointer-events-none opacity-40 hidden sm:block">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[#2563EB]"
              style={{
                opacity: ((i % 8) + 1) * 0.12,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Eyebrow + Condensed Display Headline + Concentric Arcs */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
              <span className="w-8 h-[2px] bg-[#2563EB]" />
              <span>WHAT WE DO</span>
            </div>

            {/* Headline */}
            <h2 className="mt-4 font-display font-normal tracking-[0.03em] uppercase leading-[0.98] text-5xl xl:text-[64px]">
              <span className="block text-[#09090B]">OUR</span>
              <span className="block text-[#2563EB]">CORE</span>
              <span className="block text-[#09090B]">ENGINEERING</span>
              <span className="block text-[#09090B]">SERVICES.</span>
            </h2>

            {/* Editorial Description */}
            <p className="mt-6 text-[#52525B] text-base leading-relaxed max-w-sm">
              Bespoke digital architecture, intelligent systems, and scalable full-stack products engineered for ambitious global teams.
            </p>

            {/* Action Link */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#09090B] hover:text-[#2563EB] group transition-colors"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#2563EB]" />
              </a>
            </div>

            {/* 3 Concentric SVG Semi-Circular Arcs (Desktop Only, Connecting Hub to Service Nodes) */}
            <div className="hidden lg:block absolute -right-16 xl:-right-24 top-1/2 -translate-y-1/2 w-52 xl:w-64 h-[560px] pointer-events-none z-0">
              <svg
                viewBox="0 0 260 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Outer Arc: Electric Blue #2563EB, strokeWidth 4 */}
                <motion.path
                  d="M 10 30 A 240 240 0 0 1 10 530"
                  stroke="#2563EB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />

                {/* Middle Arc: Deep Black #09090B, strokeWidth 3 */}
                <motion.path
                  d="M 30 80 A 190 190 0 0 1 30 480"
                  stroke="#09090B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
                />

                {/* Inner Arc: Electric Blue #2563EB, strokeWidth 2.5 with dashes */}
                <motion.path
                  d="M 50 130 A 140 140 0 0 1 50 430"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: 'easeInOut' }}
                />

                {/* Central Radial Accent Node */}
                <circle cx="220" cy="280" r="5" fill="#2563EB" />
                <circle
                  cx="220"
                  cy="280"
                  r="11"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeOpacity="0.45"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: 6 Balanced Fan-Out Service Nodes */}
          <div className="lg:col-span-7 relative">
            {/* Mobile/Tablet Vertical Spine Accent Line */}
            <div className="lg:hidden absolute left-7 top-4 bottom-4 w-[2px] bg-zinc-200 pointer-events-none -z-0" />

            <div className="space-y-6 lg:space-y-6 relative z-10">
              {servicesData.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`group relative flex items-start gap-5 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-zinc-50/80 transition-all duration-300 ${offsetClasses[index]}`}
                  >
                    {/* Desktop Radial Pointer Line (Connects each node toward concentric arcs) */}
                    <div className="hidden lg:flex items-center absolute -left-10 xl:-left-14 top-7 -translate-y-1/2 pointer-events-none">
                      <div
                        className={`h-[2px] transition-all duration-300 ${
                          index % 2 === 0
                            ? 'w-7 xl:w-10 bg-[#2563EB]/40 group-hover:bg-[#2563EB] group-hover:w-12'
                            : 'w-7 xl:w-10 bg-[#09090B]/30 group-hover:bg-[#09090B] group-hover:w-12'
                        }`}
                      />
                      <div
                        className={`w-2 h-2 rounded-full -ml-1 transition-transform group-hover:scale-125 ${
                          index % 2 === 0
                            ? 'bg-[#2563EB] shadow-[0_0_8px_#2563EB]'
                            : 'bg-[#09090B]'
                        }`}
                      />
                    </div>

                    {/* Circular Icon Badge: Alternating Electric Blue and Deep Black */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm ${
                        index % 2 === 0
                          ? 'bg-[#2563EB] text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]'
                          : 'bg-[#09090B] text-white group-hover:bg-[#2563EB] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]'
                      }`}
                    >
                      <Icon className="w-6 h-6 transition-transform group-hover:rotate-6" />
                    </div>

                    {/* Text Block */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-zinc-400">
                          {service.number}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-[#2563EB] group-hover:text-[#09090B] transition-colors tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#52525B] leading-relaxed max-w-md">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
