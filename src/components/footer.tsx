import React from 'react'
import logo from '@/imgs/logo.png'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600">
      <img className="w-40 h-15 text-white" src={logo.src}/>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Victory Pie Solutions
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    Dies ist die Impressum-Seite für Victory Pie Solutions.
    <br></br>

Unternehmensname: Victory Pie Solutions
<br></br>

Anschrift: Reichenhainer Straße
<br></br>
Kontakt: +4915736206861
<br></br>
Vertreten durch: Saleh Ghraiyib
</p>
</span>
  </div>
</footer>
  )
}

export default Footer