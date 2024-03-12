import React from "react";
import img2 from "../imgs/pexels-kaboompics-com-54283.jpg";
import img from "../imgs/banner.jpg";
import across from "../imgs/across.png"
function Hero() {
  return (
    <section className="text-gray-600 body-font" id="home">
      <div className="mx-auto flex py-5 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="Victory Pie Solutions"
          src={img.src}
          style={{
            height: "500px",
            width: "100%",
            maxWidth: "2560px",
            marginTop: "2em",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
            filter: "brightness(0.9)",
          }}
        />
        <div
          className="text-center lg:w-2/3 w-full text-white position: absolute"
          style={{
            height: "500px",
            width: "100%",
            maxWidth: "2560px",
            marginTop: "2em",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ margin: "10px" }}>
            <h1
              className="title-font sm:text-6xl text-3xl mb-4 font-medium"
              style={{ marginTop: "150px" }}
            >
              Victory Pie Solutions{" "}
            </h1>
            <p className="mb-8 leading-relaxed" style={{ marginTop: "100px" }}>
              A Slice of Trust, Innovation, and Comfort in Every Morning,
              Unlocking Your Industry's Full Potential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
