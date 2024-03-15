import React from "react";
import across from "@/imgs/across.png";
import group from "@/imgs/group.jpeg";
import final from "@/imgs/team_final.jpg";
import gitlab from "@/imgs/gitlab.png"



function Current() {
  return (
    <section id="current" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Current Project
          </h1>
          <p className="mb-8 leading-relaxed">
            We are currently working on a project under Technische Universität
            Chemnitz as part of our studies. Our aim is to contribute to an
            initiative led by our university known as the Across Alliance. This
            alliance consists of ten European universities that collectively
            form the European cross border University Across. The goal is to
            facilitate successful cross-border exchange and collaboration within
            different regions in Europe. The initiative seeks to deepen
            cooperation among European universities situated across borders. The
            focus of this cooperation will be on crucial cross-border issues
            such as development and economic challenges, comparative law and
            public administration, education, natural resource management,
            tourism, migrations transportation, culture, and the preservation of
            cross-border cultural heritage.
          </p>
          <br></br>
          <a href="https://www.across-alliance.eu/">
          <img
            className="w-40 h-15"
            style={{ display: "inline" }}
            src={across.src}
          />
          </a>
          <br></br>
          <br></br>
          <a href="https://gitlab.hrz.tu-chemnitz.de/vsr/edu/planspiel/WS2324/victory-pie-solutions">
          <img
          className="w-40 h-15"
          style={{ display: "inline" }}
          src={gitlab.src}
        />
        </a>
        </div>
        <div className="container px-5 py-24 mx-auto"></div>
      </div>
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
          Final Pitch
        </h1>
        <p className="mb-8 leading-relaxed">
          We recently concluded our final pitch for the Across Initiative
          project to our customers, and it was an absolute success. We began by introducing
          our team, laying out a compelling case for our
          product's unique value proposition. With a fully functional software
          demonstration, we showcased how our module catalog embodies all the features
          that set us apart and make our offering truly powerful. Our
          presentation wasn't just about the software.
          We conducted a thorough market and stakeholder analysis,
          providing valuable insights into our target audience and their needs.
          Additionally, we delved into the business aspects, outlining our
          future plans and diverse income streams. One of the highlights was
          our corporate theme and design, which unified our team's identity. The cohesive
          branding elevated our presentation, leaving a lasting impression on
          our audience. Overall, it was an amazing experience to present
          our vision and hard work to the stakeholders, and we're thrilled about
          the possibilities that lie ahead.
        </p>
        <br></br>
        <img
          className="w-80% h-80%"
          style={{ display: "inline" }}
          src={final.src}
        />
        <br></br>
        <div className="container px-5 py-24 mx-auto"></div>
      </div>
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600 text-center">
        Across Module Catalog - Video
      </h1>
      <br />
      <div className="aspect-w-16 aspect-h-9"> {/* Maintain aspect ratio */}
        <iframe
          title="Google Drive Video"
          src="https://drive.google.com/file/d/1DxQQf9hojZLb1m03uNM3lfV7K0TfK9Mj/preview"
          width="100%" // Adjust to full width
          height="480" // Allow height to adjust based on aspect ratio
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <br></br>
        <div className="container px-5 py-24 mx-auto"></div>
      </div>
    </div>
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
          Pitch 3 - Product Demo
        </h1>
        <p className="mb-8 leading-relaxed">
          End of January, we presented our Across module catalogue to
          customers, spotlighting the initial product and illustrating its
          advancements from both technical and business perspectives. We
          received valuable feedback from customers, providing insights into how
          we can enhance and further develop in subsequent phases. We are eager
          to unveil our final product in the upcoming pitch.
        </p>
        <br></br>
        <img
          className="w-80% h-80%"
          style={{ display: "inline" }}
          src={group.src}
        />
        <br></br>
      </div>
    </section>
  );
}

export default Current;
