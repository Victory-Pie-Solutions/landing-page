import React from "react";

function Vision() {
  return (
    <section className="text-gray-600 body-font">
      <div
        id="about"
        className="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600">
            About Us
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
      <div id="vision" className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">
            Vision
          </h1>
          <p className="leading-relaxed text-lg">
            Our company name, Victory Pie Solutions, tells you what we're all
            about. "Victory" means we're always working hard to help our clients
            succeed. "Pie" shows how we bring together different kinds of
            technology to solve problems. And "Solution" is just that— we offer
            good, solid answers to business challenges. We aim to make our
            services as easy to use as pie by focusing on what users really
            want. To do this, we mix the best technologies together, just like
            the perfect pie combines different ingredients
          </p>
          <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}

export default Vision;
