'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '94721233296'

export default function Contact() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const openWhatsApp = (encodedText?: string) => {
    const appUrl = encodedText
      ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`
      : `whatsapp://send?phone=${WHATSAPP_NUMBER}`
    const webUrl = encodedText
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`
      : `https://wa.me/${WHATSAPP_NUMBER}`

    // Attempt to open the installed WhatsApp desktop / mobile app directly
    window.location.href = appUrl

    // Automatic fallback: If browser remains focused after 1500ms, open web version in a new tab
    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(webUrl, '_blank', 'noopener,noreferrer')
      }
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setError('')

    const text = `Hello MuchLogic! I'd like to start a project.%0A%0A*Name:* ${encodeURIComponent(fullName.trim())}%0A*Email:* ${encodeURIComponent(email.trim())}%0A*Subject:* ${encodeURIComponent(subject.trim())}%0A*Project Details:* ${encodeURIComponent(message.trim())}`

    openWhatsApp(text)
  }

  return (
    <section
      id="contact"
      className="bg-[#FFFFFF] py-24 lg:py-32 border-t border-zinc-200 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Editorial Header & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Eyebrow */}
          <div className="text-center text-xs font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
            — GET IN TOUCH
          </div>

          {/* Centered Two-Line Condensed Display Headline */}
          <h2 className="text-center font-display font-normal tracking-[0.03em] uppercase text-4xl sm:text-5xl lg:text-[64px] leading-[1.0]">
            <span className="text-[#09090B] block">LET&apos;S BUILD</span>
            <span className="text-[#2563EB] block mt-1.5">SOMETHING TOGETHER.</span>
          </h2>

          {/* Centered Subtitle */}
          <p className="mt-4 max-w-md mx-auto text-center text-[#52525B] text-base leading-relaxed">
            Have a project in mind? Tell us about it and connect with us directly on WhatsApp.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 3 Clean Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* 1. EMAIL */}
            <a
              href="mailto:hello@muchlogic.com?subject=Project%20Inquiry%20-%20MuchLogic"
              className="bg-[#FFFFFF] border border-zinc-200/80 hover:border-[#2563EB]/60 rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-xs cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                  EMAIL
                </div>
                <div className="text-base font-semibold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                  hello@muchlogic.com
                </div>
              </div>
            </a>

            {/* 2. WHATSAPP */}
            <a
              href={`whatsapp://send?phone=${WHATSAPP_NUMBER}`}
              onClick={(e) => {
                e.preventDefault()
                openWhatsApp()
              }}
              className="bg-[#FFFFFF] border border-zinc-200/80 hover:border-[#2563EB]/60 rounded-2xl p-5 flex items-center gap-4 transition-all group block shadow-xs cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                  WHATSAPP
                </div>
                <div className="text-base font-semibold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                  +94 72 123 3296
                </div>
              </div>
            </a>

            {/* 3. STUDIO */}
            <div className="bg-[#FFFFFF] border border-zinc-200/80 hover:border-[#2563EB]/40 rounded-2xl p-5 flex items-center gap-4 transition-colors group shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
          </motion.div>

          {/* Right Column: White Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#FFFFFF] border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit}>
              {/* Row 1: Full name & Email address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="mt-4">
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-xl px-4 py-3.5 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all"
                />
              </div>

              {/* Row 3: Tell us about your project */}
              <div className="mt-4">
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project"
                  className="w-full bg-[#F8FAFC] border border-zinc-200/90 focus:bg-white focus:border-[#2563EB] rounded-2xl p-4 text-sm text-[#09090B] placeholder:text-zinc-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Validation Error Message */}
              {error && (
                <div className="mt-3 text-xs text-red-500 font-medium">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-sm transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
