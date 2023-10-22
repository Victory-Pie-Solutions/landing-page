import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import  {useState}  from "react"

export default function Document() {

  const [first, setfirst] = useState("none")

  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
