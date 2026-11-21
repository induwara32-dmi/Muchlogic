import type { Metadata } from 'next'
import Preloader from '@/components/Preloader'
import './globals.css'

export const metadata: Metadata = {
  title: 'MuchLogic | AI-First Software & Web Engineering Studio',
  description:
    'We engineer intelligent websites, custom web platforms, and applied AI automation that drive real business growth. Built for the AI era.',
  keywords: [
    'MuchLogic',
    'AI Software Engineering',
    'Web Development Sri Lanka',
    'Next.js Development',
    'Custom Web Systems',
    'AI Automation Studio',
  ],
  authors: [{ name: 'MuchLogic' }],
  metadataBase: new URL('https://muchlogic.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    title: 'MuchLogic | AI-First Software & Web Engineering Studio',
    description:
      'We combine modern full-stack engineering with applied AI to build high-speed websites, custom web platforms, and intelligent automation.',
    url: 'https://muchlogic.com',
    siteName: 'MuchLogic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MuchLogic | AI-First Software & Web Engineering Studio',
    description:
      'We combine modern full-stack engineering with applied AI to build high-speed websites, custom web platforms, and intelligent automation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400;1,9..40,500&family=Manrope:wght@600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#FFFFFF] antialiased selection:bg-[#2563EB] selection:text-white">
        <Preloader />
        {children}
      </body>
    </html>
  )
}
