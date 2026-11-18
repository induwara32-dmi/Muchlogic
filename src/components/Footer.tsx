'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = 2026

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const appUrl = 'whatsapp://send?phone=94721233296'
    const webUrl = 'https://wa.me/94721233296'

    window.location.href = appUrl
    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(webUrl, '_blank', 'noopener,noreferrer')
      }
    }, 1500)
  }

  return (
    <footer className="relative bg-[#050505] text-white border-t border-zinc-800 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center p-1.5 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-full h-full text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18V6L12 13L20 6V18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-editorial text-white">
                MuchLogic
              </span>
            </Link>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Software engineering studio building modern websites, custom software, and intelligent digital solutions for ambitious businesses.
            </p>

            <div className="text-xs font-mono text-zinc-500">
              Southern Province, Sri Lanka • Global Engineering Studio
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About MuchLogic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Capabilities &amp; Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Project Brief
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-3">
              {/* Phone / WhatsApp */}
              <a
                href="whatsapp://send?phone=94721233296"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>+94 72 123 3296</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
              </a>

              {/* Email */}
              <a
                href="mailto:hello@muchlogic.com?subject=Project%20Inquiry%20-%20MuchLogic"
                className="flex items-center gap-2.5 text-sm text-zinc-400 hover:text-white transition-colors group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>hello@muchlogic.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white transition-colors" />
              </a>

              <div className="pt-2 text-xs font-mono text-zinc-500">
                muchlogic.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {currentYear} MuchLogic. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span className="text-zinc-400">Engineered for High Performance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
