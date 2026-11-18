'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Glowing Electric Blue (#2563EB) & Dark Zinc (#09090B) geometric particle shards & dots positioned around the outer edges
const edgeParticles = [
  // Upper Left outer edge
  { id: 1, type: 'dot', x: '-2%', y: '14%', size: 5, color: '#2563EB', delay: 0, duration: 4.8, driftX: [0, 6, -4, 0], driftY: [0, -10, 5, 0] },
  { id: 2, type: 'shard', x: '6%', y: '6%', size: 6, color: '#2563EB', delay: 0.6, duration: 5.4, driftX: [0, -8, 4, 0], driftY: [0, -8, 8, 0] },
  { id: 3, type: 'symbol', symbol: '✦', x: '-4%', y: '26%', size: 10, color: '#2563EB', delay: 1.2, duration: 6.2, driftX: [0, 8, -6, 0], driftY: [0, -12, 6, 0] },

  // Upper Right outer edge
  { id: 4, type: 'shard', x: '96%', y: '10%', size: 7, color: '#2563EB', delay: 0.3, duration: 5.0, driftX: [0, -6, 6, 0], driftY: [0, -10, 6, 0] },
  { id: 5, type: 'dot', x: '102%', y: '22%', size: 4, color: '#09090B', delay: 1.5, duration: 4.5, driftX: [0, -5, 8, 0], driftY: [0, -8, 5, 0] },
  { id: 6, type: 'symbol', symbol: '+', x: '92%', y: '32%', size: 12, color: '#2563EB', delay: 0.9, duration: 5.8, driftX: [0, 7, -5, 0], driftY: [0, -6, 8, 0] },

  // Middle Left outer edge
  { id: 7, type: 'shard', x: '-5%', y: '50%', size: 5, color: '#09090B', delay: 2.0, duration: 5.2, driftX: [0, 6, -6, 0], driftY: [0, -8, 6, 0] },
  { id: 8, type: 'dot', x: '2%', y: '62%', size: 6, color: '#2563EB', delay: 1.1, duration: 4.6, driftX: [0, 8, -4, 0], driftY: [0, -10, 8, 0] },

  // Middle Right outer edge
  { id: 9, type: 'dot', x: '98%', y: '56%', size: 5, color: '#2563EB', delay: 1.8, duration: 5.6, driftX: [0, -8, 5, 0], driftY: [0, -12, 6, 0] },
  { id: 10, type: 'shard', x: '94%', y: '68%', size: 6, color: '#09090B', delay: 0.4, duration: 6.0, driftX: [0, -6, 8, 0], driftY: [0, -6, 10, 0] },

  // Lower Left outer edge
  { id: 11, type: 'symbol', symbol: '✦', x: '4%', y: '82%', size: 10, color: '#2563EB', delay: 2.3, duration: 5.5, driftX: [0, 5, -8, 0], driftY: [0, -8, 5, 0] },
  { id: 12, type: 'dot', x: '-2%', y: '74%', size: 4.5, color: '#2563EB', delay: 1.4, duration: 4.9, driftX: [0, 7, -4, 0], driftY: [0, -9, 7, 0] },

  // Lower Right outer edge
  { id: 13, type: 'dot', x: '100%', y: '80%', size: 4, color: '#2563EB', delay: 0.7, duration: 5.1, driftX: [0, -6, 6, 0], driftY: [0, -10, 6, 0] },
  { id: 14, type: 'shard', x: '90%', y: '88%', size: 5.5, color: '#2563EB', delay: 1.7, duration: 4.7, driftX: [0, -5, 7, 0], driftY: [0, -8, 8, 0] },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FFFFFF] relative z-20 py-24 lg:py-28 border-t border-zinc-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Borderless Static VR Agent with Surrounding Floating Blue Particles (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative">
            <div className="relative w-full lg:w-[560px] xl:w-[640px] lg:-ml-6 flex items-center justify-center">
              {/* Static VR Agent Character Artwork Seamlessly Blended on #FFFFFF (No grey box, No borders, Seamless Radial Edge Fade) */}
              <img
                src="/images/about-vr-agent.jpg"
                alt="MuchLogic AI Vision"
                className="w-full lg:w-[560px] xl:w-[640px] max-w-none h-auto object-contain mix-blend-multiply contrast-[1.08] brightness-[1.05] [mask-image:radial-gradient(ellipse_66%_72%_at_50%_48%,black_56%,transparent_98%)] select-none pointer-events-none relative z-10 block"
              />

              {/* Floating Glowing Electric Blue & Dark Zinc Particles (Positioned around the outer edges) */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {edgeParticles.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute pointer-events-none flex items-center justify-center"
                    style={{
                      left: p.x,
                      top: p.y,
                    }}
                    animate={{
                      x: p.driftX,
                      y: p.driftY,
                      rotate: [0, 180, 360],
                      opacity: [0.35, 0.95, 0.35],
                      scale: [0.9, 1.25, 0.9],
                    }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      delay: p.delay,
                      ease: 'easeInOut',
                    }}
                  >
                    {p.type === 'dot' ? (
                      <div
                        className="rounded-full"
                        style={{
                          width: p.size,
                          height: p.size,
                          backgroundColor: p.color,
                          boxShadow:
                            p.color === '#2563EB'
                              ? '0 0 10px rgba(37, 99, 235, 0.85)'
                              : 'none',
                        }}
                      />
                    ) : p.type === 'shard' ? (
                      <div
                        className="rotate-45"
                        style={{
                          width: p.size,
                          height: p.size,
                          backgroundColor: p.color,
                          boxShadow:
                            p.color === '#2563EB'
                              ? '0 0 12px rgba(37, 99, 235, 0.9)'
                              : 'none',
                        }}
                      />
                    ) : (
                      <span
                        className="font-mono text-xs font-bold select-none leading-none"
                        style={{
                          color: p.color,
                          textShadow:
                            p.color === '#2563EB'
                              ? '0 0 8px rgba(37, 99, 235, 0.8)'
                              : 'none',
                        }}
                      >
                        {p.symbol}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Precise Editorial Content & Structural Alignment (Full width on mobile/tablet, 7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#52525B]">
              <span className="w-8 h-[2px] bg-[#2563EB]" />
              <span>ABOUT MUCHLOGIC</span>
            </div>

            {/* Two-Tone Crisp Display Headline (Natural font-normal without faux-bolding, balanced line gap) */}
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal uppercase leading-[1.02] tracking-[0.03em]">
              <span className="block text-[#09090B]">WE ENGINEER</span>
              <span className="block text-[#2563EB] mt-2 sm:mt-2.5 lg:mt-3">BEYOND CODE.</span>
            </h2>

            {/* Editorial Narrative */}
            <p className="mt-6 text-[#52525B] text-base md:text-lg leading-relaxed max-w-xl">
              MuchLogic is a software engineering company building modern websites, custom software, and powerful digital solutions. We transform ambitious ideas into high-performance, scalable products through innovative thinking, thoughtful design, and expert engineering. Our focus is on simplifying complexity, solving real-world challenges, and creating technology that helps businesses grow and move forward.
            </p>

            {/* Primary Action Button */}
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:scale-[1.02] active:scale-95 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Metric Layout (Horizontal Divider Grid) */}
            <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-3 gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div className="space-y-1.5">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                  100%
                </div>
                <p className="text-xs sm:text-sm text-[#52525B] leading-snug">
                  Custom-engineered architecture built for scale.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1.5 border-l border-zinc-200 pl-4 sm:pl-6">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                  &lt; 1.0s
                </div>
                <p className="text-xs sm:text-sm text-[#52525B] leading-snug">
                  Target load speed across modern web platforms.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1.5 border-l border-zinc-200 pl-4 sm:pl-6">
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-[#52525B] leading-snug">
                  AI-powered automation &amp; reliable support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
