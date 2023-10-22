import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Team from '@/components/team'
import Vision from '@/components/vision'
import Contact from '@/components/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

  <section>
    <Hero />
    <Vision />
    <Team />
    <Contact />
  </section>
  )
}
