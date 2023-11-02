import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Team from '@/components/team'
import Vision from '@/components/vision'
import Contact from '@/components/contact'
import Impressum from '@/components/impressum'
import Data from '@/components/data'
import { useState } from 'react'
import Footer from '@/components/footer'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [showData, setShowData] = useState(0)

  const showDecleration = (showData) => {
   setShowData(showData)
 }





  return (
    <>
  <Header showDecleration = {showDecleration}/>
  <section>
    {showData != 1 && <Hero />}
    {showData != 1 && <Vision />}
    {showData != 1 && <Team />}
    {showData != 1 && <Contact />}
    {showData == 1 && <Data />}
  </section>
  <Footer showDecleration = {showDecleration} />
  </>
  )
}
