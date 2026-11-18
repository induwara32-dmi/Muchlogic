'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  image: string
  liveUrl: string
}

const PROJECTS: Project[] = [
  {
    title: 'Designkoolama.lk',
    image: '/images/work-designkoolama.jpg',
    liveUrl: 'https://www.designkoolama.lk',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#FAFAFA] border border-zinc-200/80 hover:border-[#2563EB]/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col">
      {/* Clean Project Preview Image */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-900 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 block select-none pointer-events-none"
        />
      </div>

      {/* Minimal Bottom Bar */}
      <div className="px-5 py-4 bg-[#FFFFFF] flex items-center justify-between gap-4 border-t border-zinc-100">
        {/* Left: Project Name */}
        <h3 className="text-xl md:text-2xl font-bold text-[#09090B] tracking-tight">
          {project.title}
        </h3>

        {/* Right: Sleek Electric Blue CTA Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 shrink-0"
        >
          <span>Live Site</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  )
}

export default function CaseStudy() {
  const isSingle = PROJECTS.length === 1

  return (
    <section
      id="work"
      className="bg-[#FFFFFF] py-24 lg:py-32 border-t border-zinc-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-18"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span className="w-6 h-[2px] bg-[#2563EB]" />
            <span>SELECTED WORK</span>
            <span className="w-6 h-[2px] bg-[#2563EB]" />
          </div>

          {/* Crisp Condensed Display Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] text-[#09090B]">
            WORK THAT SPEAKS <span className="text-[#2563EB]">FOR ITSELF.</span>
          </h2>

          {/* Section Description */}
          <p className="mt-4 max-w-2xl mx-auto text-center text-[#52525B] text-base md:text-lg leading-relaxed">
            Explore real-world web platforms and custom digital products engineered by our team for speed, clarity, and measurable business growth.
          </p>
        </motion.div>

        {/* Project Showcase: Single Centered Card OR Continuous Marquee Flow when > 1 */}
        {isSingle ? (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="max-w-[520px] w-full mx-auto"
          >
            <ProjectCard project={PROJECTS[0]} />
          </motion.div>
        ) : (
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
            <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4">
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, idx) => (
                <div key={idx} className="w-[420px] md:w-[480px] shrink-0">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
