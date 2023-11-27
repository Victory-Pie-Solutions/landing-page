import React from "react";

const Impressum = () => {
  return (
    <section id="impressum" className="text-black-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/1 lg:w-3/4 w-full mx-auto text-left">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Impressum
          </h1>
          <p>Dies ist die Impressum-Seite für Victory Pie Solutions.</p>
          <br></br>
          <p>
            <strong>Unternehmensname:</strong> Victory Pie Solutions
          </p>
          <p>
            <strong>Anschrift:</strong> Reichenhainer Straße
          </p>
          <p>
            <strong>Kontakt:</strong> +4915736206861
          </p>
          <p>
            <strong>Vertreten durch:</strong> Saleh Ghraiyib
          </p>
          <p>
            <strong>Handelsregister:</strong> TUC-PLANSPIEL
          </p>
          <br></br>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Descimal
          </h1>
          <p className="leading-relaxed text-lg">
            This website does not belong to a real company. It is a Planspiel
            Web Engineering project at University of Technology Chemnitz
          </p>
          <br></br>
          <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
