import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Zap,
  Layers,
  Users,
  Palette,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | MuchLogic - Software Engineering Studio',
  description:
    'MuchLogic is a Sri Lankan software engineering studio building modern websites, custom software, and applied AI solutions that simplify complexity and accelerate business growth.',
  openGraph: {
    title: 'About MuchLogic | Engineering Intelligent Digital Futures',
    description:
      'Discover our story, mission, core engineering principles, and how we turn complex ideas into production-ready digital products.',
    url: 'https://muchlogic.com/about',
    siteName: 'MuchLogic',
  },
}

const processSteps = [
  {
    step: 'STEP 01',
    title: 'Discovery & Strategy',
    desc: 'We analyze your business objectives, define technical requirements, and map a clear product roadmap before development begins.',
  },
  {
    step: 'STEP 02',
    title: 'UI/UX & System Design',
    desc: 'We craft intuitive user interfaces, responsive layouts, and scalable system architecture tailored to your workflow.',
  },
  {
    step: 'STEP 03',
    title: 'Full-Stack Engineering',
    desc: 'We build clean, high-performance frontends, secure backend APIs, and databases tested across every device.',
  },
  {
    step: 'STEP 04',
    title: 'Launch & Ongoing Care',
    desc: 'We deploy with zero downtime, optimize load speed, and provide reliable support as your business scales.',
  },
]

const principles = [
  {
    num: '01',
    title: 'Precision Architecture',
    desc: 'Clean, modular codebases engineered with modern frameworks for long-term scalability.',
    icon: Layers,
  },
  {
    num: '02',
    title: 'Performance by Default',
    desc: 'Sub-second load speeds, lean bundles, and resilient architecture engineered to perform smoothly under real-world traffic.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Editorial UI/UX Craft',
    desc: 'High-contrast, intuitive interfaces designed around user clarity and brand authority.',
    icon: Palette,
  },
  {
    num: '04',
    title: 'Direct Collaboration',
    desc: 'Transparent milestones, rapid iteration, and direct access to the engineers building your product.',
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      {/* 1. Dark Editorial Hero */}
      <section className="bg-[#050505] text-white pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Subtle Electric Blue radial ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[450px] bg-[#2563EB]/15 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
              <span>— ABOUT MUCHLOGIC</span>
            </div>

            {/* Crisp Condensed Display Headline */}
            <h1 className="mt-4 font-display font-normal tracking-[0.03em] uppercase text-5xl sm:text-6xl lg:text-[76px] leading-[0.98]">
              <span>ENGINEERING </span>
              <span className="text-[#2563EB] block mt-1.5">INTELLIGENT</span>
              <span className="text-white block mt-1.5">DIGITAL FUTURES.</span>
            </h1>

            {/* Editorial Subheadline */}
            <p className="mt-6 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
              MuchLogic is a Sri Lankan software engineering studio building modern websites,
              custom software, and applied AI solutions that simplify complexity and accelerate
              business growth.
            </p>

            {/* Studio Status Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
                </span>
                <span className="font-medium text-zinc-300">Based in Southern Province, Sri Lanka</span>
              </div>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400">Serving Ambitious Brands Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story, Mission & Vision */}
      <section className="bg-[#FFFFFF] text-[#09090B] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-Column Editorial Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <span className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
                — WHO WE ARE
              </span>
              <h2 className="font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl leading-[1.0]">
                <span className="text-[#09090B]">BUILT FOR SPEED, </span>
                <span className="text-[#2563EB]">CLARITY &amp; SCALE.</span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-5 text-[#52525B] text-base md:text-lg leading-relaxed">
              <p>
                We started MuchLogic with a clear conviction: business software and web platforms
                shouldn&apos;t feel bloated, slow, or generic. Every product we ship combines sharp
                UI/UX design with resilient full-stack engineering.
              </p>
              <p>
                From high-converting corporate web flagships like Designkoolama.lk to custom
                enterprise systems and AI-driven workflows, we partner closely with founders and
                teams to turn bold ideas into production-ready reality.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Our Mission Card */}
            <div className="bg-[#FAFAFA] border border-zinc-200/90 rounded-3xl p-8 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-md">
              <div className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold tracking-widest uppercase">
                01 / MISSION
              </div>
              <h3 className="font-display font-normal uppercase tracking-[0.02em] text-2xl sm:text-3xl leading-[1.08] text-[#09090B] mt-4">
                Simplify Complexity Through Engineering
              </h3>
              <p className="mt-3 text-[#52525B] text-sm md:text-base leading-relaxed">
                To design and build fast, reliable, and intelligent digital products that solve real
                operational challenges and empower businesses to scale effortlessly.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-[#FAFAFA] border border-zinc-200/90 rounded-3xl p-8 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-md">
              <div className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold tracking-widest uppercase">
                02 / VISION
              </div>
              <h3 className="font-display font-normal uppercase tracking-[0.02em] text-2xl sm:text-3xl leading-[1.08] text-[#09090B] mt-4">
                Global Engineering Standard From Sri Lanka
              </h3>
              <p className="mt-3 text-[#52525B] text-sm md:text-base leading-relaxed">
                To stand as a trusted international software and AI innovation partner recognized for
                engineering precision, modern design craft, and measurable client impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS (Positioned directly below WHO WE ARE) */}
      <section className="bg-[#FFFFFF] text-[#09090B] py-20 lg:py-28 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span>— OUR PROCESS</span>
          </div>

          {/* Crisp Two-Tone Condensed Display Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[60px] leading-[1.0]">
            <span className="text-[#09090B]">FROM IDEA TO </span>
            <span className="text-[#2563EB]">PRODUCTION.</span>
          </h2>

          {/* Matching Section Description */}
          <p className="mt-4 max-w-2xl text-[#52525B] text-base md:text-lg leading-relaxed">
            A structured, transparent engineering workflow designed to take your product from initial
            concept to a fast, reliable launch.
          </p>

          {/* 4 Clean White Step Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAFAFA] border border-zinc-200/90 hover:border-[#2563EB]/40 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB]">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-sans font-bold text-xl text-[#09090B] tracking-tight normal-case">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Engineering Principles */}
      <section className="bg-[#FAFAFA] py-20 lg:py-28 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
              — OUR PRINCIPLES
            </span>
            <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl leading-[1.0] text-center">
              <span className="text-[#09090B]">HOW WE THINK </span>
              <span className="text-[#2563EB]">&amp; BUILD.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-[#52525B] text-base md:text-lg leading-relaxed">
              The core engineering standards that guide every interface we design, every line of code we write, and every system we ship.
            </p>
          </div>

          {/* 4 Clean Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.num}
                  className="bg-white border border-zinc-200/90 rounded-2xl p-7 hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                        {principle.num}
                      </span>
                      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-[#2563EB] transition-colors" />
                    </div>
                    <h3 className="font-sans font-bold text-xl text-[#09090B] tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#52525B] leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="bg-[#FFFFFF] py-20 lg:py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#050505] text-white rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Ambient Electric Blue glow */}
            <div
              className="absolute -top-24 -right-24 w-80 h-80 bg-[#2563EB]/25 blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#2563EB]/15 blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="text-[#2563EB] text-xs font-bold tracking-[0.2em] uppercase">
                — LET&apos;S COLLABORATE
              </span>

              <h2 className="mt-4 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.0]">
                READY TO BUILD YOUR NEXT PLATFORM?
              </h2>

              <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed">
                Partner with MuchLogic to engineer a fast, modern digital product tailored to your
                goals.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base font-semibold transition-all duration-200 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] active:scale-95"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
