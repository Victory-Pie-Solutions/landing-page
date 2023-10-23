import React from 'react'
import saleh from '@/imgs/saleh.jpg'
import patboke from '@/imgs/patboke.png'
import natnicha from '@/imgs/fern.png'
import emily from '@/imgs/emily.png'
import sasan from '@/imgs/sasan.png'

function Team() {
  return (
    <section id="team" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We're a group of skilled people who work hard to give you the best solutions. Each of us is important in making Victory Pie Solution a trusted and creative company. Get to know who we are.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={saleh.src} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Saleh Ghraiyib</h2>
            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={emily.src} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Eun-young Choi
</h2>
            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={natnicha.src} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Natnicha Rodtong</h2>
            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={patboke.src} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Patboke Jitthamma</h2>
            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={sasan.src} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Sasan Chitsazi</h2>
            <h3 className="text-gray-500 mb-3">Full Stack Developer</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Team
