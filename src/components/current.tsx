import React from 'react'
import across from '@/imgs/across.png'

function Current() {
  return (
    <section id="current" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Current Project</h1>
        <p className="mb-8 leading-relaxed">
          We are currently working on a project under Technische Universität Chemnitz as part of our studies. Our aim is to contribute to an initiative led by our university known as the Across Alliance. This alliance consists of ten European universities that collectively form the European cross border University Across. The goal is to facilitate successful cross-border exchange and collaboration within different regions in Europe. The initiative seeks to deepen cooperation among European universities situated across borders. The focus of this cooperation will be on crucial cross-border issues such as development and economic challenges, comparative law and public administration, education, natural resource management, tourism, migrations transportation, culture, and the preservation of cross-border cultural heritage.  
          </p>
          <br></br>
          <img className="w-40 h-15" style={{display:"inline"}}
            src={across.src}
            />
          <br></br>
    </div>
  </div>
</section>
  )
}

export default Current