import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Globe,
  Smartphone,
  Layers,
  Code2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services & Capabilities | MuchLogic - Software Engineering Studio',
  description:
    'From high-speed web platforms and mobile applications to custom business software and intelligent automation—we design, build, and maintain digital products tailored around your goals.',
  openGraph: {
    title: 'MuchLogic Services | Web, Mobile, Custom Software & AI Automation',
    description:
      'Explore our core engineering services: Web Development, Mobile Apps, UI/UX Design, Custom Software, AI & Automation, and Maintenance & Support.',
    url: 'https://muchlogic.com/services',
    siteName: 'MuchLogic',
  },
}

interface ServiceData {
  id: string
  index: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  overview: string
  deliverables: string[]
}

const servicesData: ServiceData[] = [
  {
    id: 'web-development',
    index: '01 / SERVICE',
    title: 'Web Development',
    icon: Globe,
    overview:
      'Scalable web apps and corporate platforms built with modern frameworks and clean architecture for sub-second speed, search visibility, and high conversion.',
    deliverables: [
      'Custom Next.js & React Web Platforms',
      'Responsive Mobile-First Architecture',
      'Technical SEO & Sub-Second Speed Optimization',
      'CMS, Payment & Third-Party Integrations',
    ],
  },
  {
    id: 'mobile-apps',
    index: '02 / SERVICE',
    title: 'Mobile Apps',
    icon: Smartphone,
    overview:
      'Native-feel mobile experiences for iOS and Android engineered for smooth performance, intuitive gestures, and reliable offline-ready operation.',
    deliverables: [
      'Cross-Platform iOS & Android App Development',
      'Fluid Touch Interactions & Native Navigation',
      'Push Notifications & Real-Time Sync',
      'App Store & Google Play Deployment Support',
    ],
  },
  {
    id: 'ui-ux-design',
    index: '03 / SERVICE',
    title: 'UI/UX Design',
    icon: Layers,
    overview:
      'Interfaces that are intuitive, accessible, and unmistakably on-brand—turning complex workflows into effortless user journeys that build immediate trust.',
    deliverables: [
      'Wireframing & Interactive Clickable Prototypes',
      'High-Contrast Design Systems & Typography',
      'Conversion-Focused Landing & Product Flows',
      'Responsive Layouts Across Desktop, Tablet & Mobile',
    ],
  },
  {
    id: 'custom-software',
    index: '04 / SERVICE',
    title: 'Custom Software',
    icon: Code2,
    overview:
      'Tailored software solutions built around your exact operational workflow—eliminating rigid off-the-shelf limitations and manual spreadsheet bottlenecks.',
    deliverables: [
      'Bespoke Web Portals & Internal Dashboards',
      'Secure Role-Based Access & Database Design',
      'Custom REST / GraphQL API Engineering',
      'Scalable Cloud Deployment & Architecture',
    ],
  },
  {
    id: 'ai-automation',
    index: '05 / SERVICE',
    title: 'AI & Automation',
    icon: Sparkles,
    overview:
      'Smart automation and practical AI capabilities embedded directly into your business processes to save hours of repetitive work and accelerate response times.',
    deliverables: [
      'Custom AI Assistants & Knowledge Chatbots',
      'Automated Lead & Customer Support Workflows',
      'Document Processing & Smart Data Extraction',
      'API-Connected Business Process Automation',
    ],
  },
  {
    id: 'maintenance-support',
    index: '06 / SERVICE',
    title: 'Maintenance & Support',
    icon: ShieldCheck,
    overview:
      'Ongoing technical care, proactive monitoring, and rapid updates to keep your website or software platform secure, fast, and running smoothly 24/7.',
    deliverables: [
      '24/7 Uptime, Performance & Security Monitoring',
      'Regular Framework, Dependency & Patch Updates',
      'Automated Backups & Disaster Recovery',
      'Priority Feature Enhancements & Bug Fixes',
    ],
  },
]

export default function ServicesPage() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
              <span>— WHAT WE DO</span>
            </div>

            {/* Crisp Two-Tone Condensed Display Headline */}
            <h1 className="mt-4 font-display font-normal tracking-[0.03em] uppercase text-5xl sm:text-6xl lg:text-[76px] leading-[0.98]">
              <span className="text-white block">ENGINEERING DIGITAL </span>
              <span className="text-[#2563EB] block mt-1.5">SOLUTIONS THAT SCALE.</span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="mt-6 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
              From high-speed web platforms and mobile applications to custom business software and
              intelligent automation—we design, build, and maintain digital products tailored around
              your goals.
            </p>

            {/* Quick-Jump Service Filter Pills */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-2.5">
              {servicesData.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/[0.04] hover:bg-[#2563EB] text-zinc-300 hover:text-white border border-white/10 hover:border-[#2563EB] transition-all"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed 6 Core Services Showcase */}
      <section className="bg-[#FFFFFF] text-[#09090B] py-20 lg:py-28 relative">
        {/* Section Header Block */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span>— CORE DISCIPLINES</span>
          </div>

          {/* Two-Tone Condensed Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[60px] leading-[1.0]">
            <span className="text-[#09090B]">BUILT FOR REAL-WORLD </span>
            <span className="text-[#2563EB]">BUSINESS IMPACT.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-[#52525B] text-base md:text-lg leading-relaxed">
            Every solution we engineer is tailored to your exact workflow—combining clean
            architecture, fast performance, and intuitive user interfaces.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-[#FAFAFA] border border-zinc-200/90 hover:border-[#2563EB]/40 rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-300 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column (lg:col-span-5) */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#2563EB]/30">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#2563EB]">
                        {service.index}
                      </span>
                    </div>

                    <h2 className="mt-5 font-sans font-bold text-2xl sm:text-3xl text-[#09090B] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-[#52525B] text-base leading-relaxed">
                      {service.overview}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] group transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right Column (lg:col-span-7) */}
                  <div className="lg:col-span-7 bg-[#FFFFFF] border border-zinc-200/80 rounded-2xl p-6 sm:p-8">
                    <div className="text-xs font-bold tracking-[0.16em] uppercase text-zinc-400 mb-4">
                      WHAT&apos;S INCLUDED
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.deliverables.map((deliverable, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-[#09090B]">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. Bottom Dark CTA Card */}
      <section className="bg-[#FFFFFF] pb-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto bg-[#050505] text-white rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden border border-white/10 shadow-2xl">
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
              — START A PROJECT
            </span>

            <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl text-white">
              NOT SURE WHICH SOLUTION FITS BEST?
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-base leading-relaxed">
              Tell us about your business goals and we&apos;ll recommend the right technical roadmap.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold transition-all duration-200 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] active:scale-95"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
