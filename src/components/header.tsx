import React from 'react'
import logo from '@/imgs/logo.png'

export const Header = () => {


  return (
    <header className={`sticky top-0 z-50 transition-shadow shadow bg-opacity-80 backdrop-blur-lg backdrop-filter"`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-40 h-15 text-white" src={logo.src}/>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href='#hero'>Home</a>
      <a className="mr-5 hover:text-gray-900" href='#vision'>Vision</a>
      <a className="mr-5 hover:text-gray-900" href='#team'>Team</a>
      <a className="mr-5 hover:text-gray-900" href='#contact'>Contact</a>
    </nav>
  </div>
</header>
  )
}

export default Header
