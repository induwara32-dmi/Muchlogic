'use client'

import React, { useState, useEffect } from 'react'

export default function Preloader() {
  const [show, setShow] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    try {
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
      const isReload = navEntries.length > 0 && navEntries[0].type === 'reload'
      const hasLoaded = sessionStorage.getItem('muchlogic_preloaded')

      if (hasLoaded && !isReload) {
        setShow(false)
        return
      }

      sessionStorage.setItem('muchlogic_preloaded', 'true')
    } catch {
      // Graceful fallback if storage/navigation is restricted
    }

    // Hold visibly for 1400ms, then trigger smooth 500ms exit transition
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 1400)

    const unmountTimer = setTimeout(() => {
      setShow(false)
    }, 1900)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(unmountTimer)
    }
  }, [])

  useEffect(() => {
    if (show && !isExiting) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [show, isExiting])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050505] overflow-hidden flex items-center justify-center transition-all duration-500 ease-out ${
        isExiting ? 'opacity-0 blur-md pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      aria-hidden={isExiting}
    >
      {/* Blurred Brand-Color Atmospheric Background */}
      {/* 1. Top-right / bottom-right Vibrant Electric Blue orb */}
      <div
        className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-[#2563EB]/45 blur-[120px] sm:blur-[150px] pointer-events-none animate-pulse"
        aria-hidden="true"
      />

      {/* 2. Upper-left Soft Crisp White diffused highlight orb */}
      <div
        className="absolute top-1/6 left-1/4 w-[380px] h-[340px] rounded-full bg-white/20 blur-[120px] sm:blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Center-deep Royal Blue radial aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#1D4ED8]/35 blur-[120px] sm:blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Frosted Glass Backdrop Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-3xl bg-[#050505]/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Micro-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Animated Center Geometric Logo Mark */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center transition-all duration-500 ease-out select-none ${
          isExiting ? 'opacity-0 scale-105 blur-sm' : 'opacity-100 scale-100'
        }`}
      >
        <img
          src="/images/muchlogic-logo.png"
          alt="MuchLogic"
          className="w-36 sm:w-44 h-auto object-contain relative z-20 opacity-100 select-none drop-shadow-[0_0_36px_rgba(37,99,235,0.65)] animate-pulse"
        />
      </div>
    </div>
  )
}
