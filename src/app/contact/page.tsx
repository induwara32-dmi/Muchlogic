import type { Metadata } from 'next'
import ContactView from '@/components/ContactView'

export const metadata: Metadata = {
  title: 'Contact Us & Project Inquiry | MuchLogic - Software Engineering Studio',
  description:
    "Have a project in mind? Share your requirements with MuchLogic to plan your web platform, mobile app, or custom software solution. We'll connect with you directly to plan the next steps.",
  openGraph: {
    title: "Contact MuchLogic | Let's Build Something Together",
    description:
      'Connect directly with MuchLogic to discuss your project, request a proposal, or schedule a free engineering consultation.',
    url: 'https://muchlogic.com/contact',
    siteName: 'MuchLogic',
  },
}

export default function ContactPage() {
  return <ContactView />
}
