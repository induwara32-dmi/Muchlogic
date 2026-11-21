'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'top-4 px-4 sm:px-6 pointer-events-none bg-transparent border-transparent'
          : 'top-0 w-full bg-[#050505] border-b border-white/10 px-0'
      }`}
    >
      <div
        className={`transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'pointer-events-auto max-w-6xl mx-auto bg-[#050505]/95 backdrop-blur-md border border-white/12 rounded-full px-5 sm:px-7 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.28)]'
            : 'pointer-events-auto max-w-7xl mx-auto px-6 h-20 bg-transparent border-transparent rounded-none shadow-none'
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/images/muchlogic-logo.png"
            alt="MuchLogic"
            className={`${
              isScrolled ? 'h-10 sm:h-11' : 'h-11 sm:h-12'
            } w-auto object-contain mix-blend-lighten select-none transition-all duration-300`}
          />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(link.href)

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm transition-colors rounded-full ${
                  isActive
                    ? 'text-white font-semibold bg-white/10'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right: Electric Blue CTA Pill Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 shrink-0"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto transition-all duration-300 ${
              isScrolled
                ? 'mt-2 max-w-6xl mx-auto rounded-2xl bg-[#050505]/95 backdrop-blur-md border border-white/12 px-6 py-6 shadow-2xl text-white'
                : 'w-full bg-[#050505] border-b border-zinc-800 px-6 py-6 shadow-xl text-white'
            }`}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname === link.href || pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-2 border-b transition-colors ${
                      isActive
                        ? 'border-white/20 text-white font-semibold'
                        : 'border-zinc-800 text-zinc-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 w-full py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-md transition-all"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
