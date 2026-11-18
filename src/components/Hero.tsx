'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Star particle coordinates for twinkling background
const starParticles = [
  { top: '12%', left: '8%', size: 2, delay: 0 },
  { top: '24%', left: '38%', size: 3, delay: 1.2 },
  { top: '10%', left: '72%', size: 2.5, delay: 0.7 },
  { top: '42%', left: '16%', size: 2, delay: 2.1 },
  { top: '68%', left: '32%', size: 3, delay: 1.6 },
  { top: '82%', left: '10%', size: 2, delay: 0.4 },
  { top: '18%', left: '88%', size: 2.5, delay: 2.5 },
  { top: '50%', left: '84%', size: 2, delay: 1.0 },
  { top: '78%', left: '64%', size: 3, delay: 1.8 },
  { top: '86%', left: '78%', size: 2, delay: 0.9 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-center overflow-hidden bg-[#050505] pt-24 sm:pt-28 lg:pt-28 pb-12 sm:pb-16 lg:pb-12">
      {/* 1. Dynamic Atmospheric Background */}

      {/* Subtle animated twinkling star particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {starParticles.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.15, 0.95, 0.15],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Flowing Electric Blue Topographic / Wireframe Wave Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <motion.svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          animate={{
            y: [-10, 10, -10],
            rotate: [-0.4, 0.4, -0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <path
            d="M-100 450 C 300 250, 600 620, 1100 320 C 1300 200, 1500 380, 1600 350"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            strokeDasharray="6 8"
          />
          <path
            d="M-80 520 C 350 320, 650 680, 1150 380 C 1350 260, 1550 440, 1620 400"
            stroke="#2563EB"
            strokeWidth="2.2"
            strokeOpacity="0.55"
          />
          <path
            d="M-50 590 C 400 390, 700 740, 1200 440 C 1400 320, 1580 500, 1650 460"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
        </motion.svg>
      </div>

      {/* 2. Large Seamless World Map Layer (z-0, Behind Text) Full-Bleed to top-0 */}
      <div className="absolute top-0 inset-x-0 h-full w-full pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-6%] lg:right-[0%] top-0 h-full w-[1150px] lg:w-[1480px] max-w-none mix-blend-lighten opacity-95 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_85%,transparent_100%)] flex items-center justify-end"
        >
          <img
            src="/images/hero-world-map.jpg"
            alt="MuchLogic Global Reach from Sri Lanka"
            className="w-full h-full object-cover object-[68%_55%] block"
          />
        </motion.div>
      </div>

      {/* Top-Edge Seamless Black Fade Overlay (Vignette) */}
      <div className="absolute top-0 inset-x-0 h-36 sm:h-44 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-[1]" />
      {/* Left-Edge Seamless Fade Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[1]" />
      {/* Bottom-Edge Seamless Fade Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-[1]" />

      {/* Content Container (z-10 Overlapping the Map) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* 1. Oversized Flowiix-Scale Display Headline (Spanning full width) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[122px] font-normal uppercase leading-[0.95] tracking-[0.03em] text-white lg:whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] select-none">
            BEYOND TECHNOLOGY
          </h1>
        </motion.div>

        {/* 2. Lower Section: Headlines, Paragraph & CTA Row */}
        <div className="mt-4 md:mt-5 max-w-3xl lg:max-w-4xl">
          {/* Secondary Headline (mt-4 md:mt-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold uppercase tracking-wide text-white flex items-center gap-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
              <span>WE BUILD WHAT&apos;S NEXT.</span>
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#2563EB] inline-block shadow-[0_0_15px_#2563EB]" />
            </h2>
          </motion.div>

          {/* Sub-headline Paragraph (mt-6 md:mt-7) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-7 max-w-lg text-zinc-200 text-base md:text-lg leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-normal"
          >
            We transform bold ideas into intelligent digital solutions that empower businesses, simplify complexity, and shape the future.
          </motion.p>

          {/* Primary CTA Button & Sleek Glass Stat Card Side-by-Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8"
          >
            {/* Left: Start Your Project Electric Blue Pill Button */}
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_45px_rgba(37,99,235,0.7)] hover:scale-[1.02] active:scale-95 group shrink-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right: Translucent Frosted-Glass Stat Card (Directly beside button) */}
            <div className="w-full sm:max-w-[360px] p-4 rounded-2xl bg-[#050505]/70 backdrop-blur-xl border border-white/10 hover:border-[#2563EB]/50 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all overflow-hidden group relative">
              {/* Top micro-label */}
              <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                <span>SRI LANKA • GLOBAL DELIVERY</span>
              </div>

              {/* Main Stat Row */}
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                <span className="text-xs sm:text-sm font-semibold text-[#2563EB]">Custom-Engineered</span>
              </div>

              {/* Clean Description */}
              <p className="text-zinc-300 text-xs leading-relaxed mt-1.5">
                Bespoke web platforms, intelligent software systems, and high-speed digital products engineered for real business scale.
              </p>

              {/* Bottom Accent Line: Thin 1px animated Electric Blue progress glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full w-24 bg-[#2563EB] shadow-[0_0_10px_#2563EB]"
                  animate={{
                    x: ['-100%', '350%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
