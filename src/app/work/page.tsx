import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | MuchLogic',
  description:
    'A curated showcase of modern web platforms and custom digital solutions engineered by MuchLogic for speed, clarity, and measurable growth.',
  openGraph: {
    title: 'Selected Work | MuchLogic - Software Engineering Studio',
    description:
      'Explore live client case studies, custom web platforms, and digital products engineered by MuchLogic.',
    url: 'https://muchlogic.com/work',
    siteName: 'MuchLogic',
  },
}

interface Project {
  title: string
  category: string
  summary: string
  image: string
  liveUrl: string
}

const PROJECTS: Project[] = [
  {
    title: 'DESIGNKOOLAMA.LK',
    category: 'WEB PLATFORM & CORPORATE SITE',
    summary:
      'High-speed corporate web platform with instant Dark/Light mode switching and dynamic portfolio showcases.',
    image: '/images/designkoolama-showcase.png',
    liveUrl: 'https://www.designkoolama.lk',
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* 1. Dark Editorial Hero */}
      <section className="bg-[#050505] text-white pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Subtle Electric Blue radial ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[450px] bg-[#2563EB]/15 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Micro-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
              <span>— SELECTED WORK</span>
            </div>

            {/* Crisp Two-Tone Condensed Display Headline */}
            <h1 className="mt-4 font-display font-normal tracking-[0.03em] uppercase text-5xl sm:text-6xl lg:text-[76px] leading-[0.98]">
              <span className="text-white block">WORK THAT SPEAKS </span>
              <span className="text-[#2563EB] block mt-1.5">FOR ITSELF.</span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="mt-6 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
              Explore real-world web platforms and custom digital products engineered by our team for
              speed, clarity, and measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* 2. White Showcase Section */}
      <section className="bg-[#FFFFFF] py-20 lg:py-28 relative">
        {/* Section Header Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span>— FEATURED CASE STUDIES</span>
          </div>

          {/* Two-Tone Condensed Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[60px] leading-[1.0]">
            <span className="text-[#09090B]">CRAFTED WITH PRECISION </span>
            <span className="text-[#2563EB]">&amp; PURPOSE.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-[#52525B] text-base md:text-lg leading-relaxed">
            A closer look at the web platforms and digital products we have designed, engineered,
            and launched for ambitious brands.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="w-full rounded-3xl overflow-hidden bg-[#070709] shadow-[0_28px_70px_rgba(0,0,0,0.18)] grid grid-cols-1 lg:grid-cols-12 items-center relative"
            >
              {/* Left Editorial Text Column */}
              <div className="lg:col-span-5 p-8 sm:p-12 lg:pl-14 lg:pr-4 relative z-20">
                {/* Category Eyebrow */}
                <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#60A5FA]">
                  {project.category}
                </span>

                {/* Project Display Headline */}
                <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[54px] text-white leading-[0.98]">
                  {project.title}
                </h2>

                {/* Concise Description */}
                <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md">
                  {project.summary}
                </p>

                {/* Primary Electric Blue CTA Button */}
                <div className="mt-7">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Uncropped Image Column with Seamless Dark Blend */}
              <div className="lg:col-span-7 relative w-full bg-[#070709] flex items-center justify-end overflow-hidden">
                {/* Desktop feathered gradient blend */}
                <div
                  className="hidden lg:block absolute inset-y-0 -left-12 w-56 bg-gradient-to-r from-[#070709] via-[#070709]/85 via-[45%] to-transparent z-10 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Mobile feathered gradient blend */}
                <div
                  className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070709] to-transparent z-10 pointer-events-none"
                  aria-hidden="true"
                />

                <img
                  src={project.image}
                  alt="Designkoolama.lk Desktop & Mobile Showcase"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
