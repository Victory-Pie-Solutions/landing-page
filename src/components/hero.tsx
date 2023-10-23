import React from "react";
import img from "../imgs/pexels-kaboompics-com-54283.jpg";
function Hero() {
  return (
    <section className="text-gray-600 body-font" id="home">
      <div className="mx-auto flex py-5 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" 
          alt="Victory Pie Solutions"
          src={img.src}
          style={{ height:"500px", width: "100%", maxWidth:"2560px", marginTop:"2em", display:"flex", justifyContent:"center", flexWrap:"wrap", marginLeft: "auto", marginRight: "auto",
          filter:"brightness(0.9)"}}
        />
        <div className="text-center lg:w-2/3 w-full text-white position: absolute"
        style={{ height:"500px", width: "100%", maxWidth:"2560px", marginTop:"2em", display:"flex", justifyContent:"center", flexWrap:"wrap", marginLeft: "auto", marginRight: "auto"}}
        >
          <div style={{margin:"10px"}}>
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium"
            style={{marginTop:"150px"}}>
              Victory Pie Solutions{" "}
            </h1>
            <p className="mb-8 leading-relaxed" style={{marginTop:"100px"}}>  
              A Slice of Trust, Innovation, and Comfort in Every Morning,
              Unlocking Your Industry's Full Potential
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            About
          </h1>
          <p className="mb-8 leading-relaxed">
            Victory Pie Solutions is a tech company in Chemnitz, Germany. We
            started in 2023 with the goal to offer better tech solutions. We
            focus on three things: making our services easy to use, solving
            problems for all types of customers using new technology, and mixing
            the best tech tools to make complete solutions. At VPS, we make it
            easy to fix your problems—just tell us what you need with one click,
            and we'll help you succeed
          </p>
          <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
