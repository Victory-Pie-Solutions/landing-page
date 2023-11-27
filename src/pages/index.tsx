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
  const [showData2, setShowData2] = useState(0)

  const showDecleration = (showData) => {
    if(showData2 == 1)
    setShowData2(0)
   setShowData(showData)
 }

 const showImpressum = (showImpressum) => {
  if(showData == 1)
    setShowData(0)
  setShowData2(showImpressum)
 }

 const clearHome = () =>{
  setShowData(0)
  setShowData2(0)
 }





  return (
    <>
  <Header clearHomepage={clearHome}/>
  <section>
    {(showData != 1 && showData2 !=1) && <Hero />}
    {(showData != 1 && showData2 !=1) && <Vision />}
    {(showData != 1 && showData2 !=1) && <Team />}
    {(showData != 1 && showData2 !=1) && <Contact />}
    {showData == 1 && showData2 != 1 && <Data />}
    {(showData2 == 1 && showData != 1) && <Impressum />}

  </section>
  <Footer showDecleration = {showDecleration} showImpressum={showImpressum} />
  </>
  )
}
