import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CaseStudy from '@/components/CaseStudy'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CaseStudy />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
