'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactView() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const appUrl = 'whatsapp://send?phone=94721233296'
    const webUrl = 'https://wa.me/94721233296'
    const start = Date.now()

    window.location.href = appUrl
    setTimeout(() => {
      if (Date.now() - start < 2000 && document.hasFocus()) {
        window.open(webUrl, '_blank')
      }
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formattedText =
      `*New Project Inquiry - MuchLogic*\n\n` +
      `*Name:* ${fullName}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Project Brief:*\n${message}`

    const encodedText = encodeURIComponent(formattedText)
    const appUrl = `whatsapp://send?phone=94721233296&text=${encodedText}`
    const webUrl = `https://wa.me/94721233296?text=${encodedText}`
    const start = Date.now()

    window.location.href = appUrl
    setTimeout(() => {
      if (Date.now() - start < 2000 && document.hasFocus()) {
        window.open(webUrl, '_blank')
      }
    }, 1500)
  }

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
              <span>— GET IN TOUCH</span>
            </div>

            {/* Crisp Two-Tone Condensed Display Headline */}
            <h1 className="mt-4 font-display font-normal tracking-[0.03em] uppercase text-5xl sm:text-6xl lg:text-[76px] leading-[0.98]">
              <span className="text-white block">LET&apos;S BUILD </span>
              <span className="text-[#2563EB] block mt-1.5">SOMETHING TOGETHER.</span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="mt-6 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
              Have a project in mind? Share your requirements below and we&apos;ll connect with you
              directly to plan the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 2. White Contact Section */}
      <section className="bg-[#FFFFFF] py-20 lg:py-28 relative">
        {/* Section Header Block */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB]">
            <span>— DIRECT INQUIRY</span>
          </div>

          {/* Two-Tone Condensed Headline */}
          <h2 className="mt-3 font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[60px] leading-[1.0]">
            <span className="text-[#09090B]">START YOUR NEXT </span>
            <span className="text-[#2563EB]">DIGITAL PROJECT.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-[#52525B] text-base md:text-lg leading-relaxed">
            Reach out directly via email, phone, or the project brief form below—our engineering
            team responds promptly to discuss your goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column — 3 Interactive Studio Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* 1. EMAIL Card */}
            <a
              href="mailto:hello@muchlogic.com?subject=Project%20Inquiry%20-%20MuchLogic"
              className="group bg-[#FAFAFA] hover:bg-[#FFFFFF] border border-zinc-200/90 hover:border-[#2563EB]/50 rounded-2xl p-5 flex items-center gap-4 transition-all shadow-xs block"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                  EMAIL
                </div>
                <div className="text-base font-semibold text-[#09090B]">
                  hello@muchlogic.com
                </div>
              </div>
            </a>

            {/* 2. PHONE / DIRECT CHAT Card */}
            <a
              href="https://wa.me/94721233296"
              onClick={handlePhoneClick}
              className="group bg-[#FAFAFA] hover:bg-[#FFFFFF] border border-zinc-200/90 hover:border-[#2563EB]/50 rounded-2xl p-5 flex items-center gap-4 transition-all shadow-xs block cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                  PHONE
                </div>
                <div className="text-base font-semibold text-[#09090B]">
                  +94 72 123 3296
                </div>
              </div>
            </a>

            {/* 3. STUDIO LOCATION Card */}
            <div className="group bg-[#FAFAFA] hover:bg-[#FFFFFF] border border-zinc-200/90 hover:border-[#2563EB]/50 rounded-2xl p-5 flex items-center gap-4 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                  STUDIO
                </div>
                <div className="text-base font-semibold text-[#09090B]">
                  Southern Province, Sri Lanka
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Clean White Project Brief Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-zinc-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleSubmit}>
              {/* Row 1: Full name and Email address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-[#09090B] mb-2 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#09090B] mb-2 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-[#09090B] mb-2 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Web Platform Redesign & Development"
                  className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                />
              </div>

              {/* Row 3: Tell us about your project textarea */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-[#09090B] mb-2 uppercase tracking-wider"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your goals, requirements, timeline, or any specific questions..."
                  className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-2xl p-4 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2.5 shadow-sm transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
