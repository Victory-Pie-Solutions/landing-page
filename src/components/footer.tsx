import React from "react";
import logo from "@/imgs/logo.png";

const Footer = ({ showDecleration, showImpressum}) => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600">
          <img className="w-40 h-15 text-white" src={logo.src} />
        </a> */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4">
          <p className="text-sm text-gray-500 sm:mr-4 sm:pr-4 sm:border-r-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            This website does not belong to a real company.
            <br></br>
            It is a Planspiel Web Engineering project at
            <br></br>
            <a
              className="text-gray-600 hover:underline"
              href="https://www.tu-chemnitz.de/"
              target="_blank"
            >
              University of Technology Chemnitz
            </a>
            <br></br>
          </p>
        </span>
        <p className="text-sm text-gray-500 sm:mr-auto sm:mt-0 mt-4">
          © 2023 Victory Pie Solutions
        </p>
        <span className="inline-flex sm:mx-auto sm:mt-0 mt-4">
          <a
            className="text-gray-600 hover:text-gray-800 hover:underline"
            onClick={() => showImpressum(1)}
            href="#imprint"
          >
            Imprint{" "}
          </a>
        </span>
        <span className="inline-flex sm:mx-auto sm:mt-0 mt-4">
          <a
            className="text-gray-600 hover:text-gray-800 hover:underline"
            onClick={() => showDecleration(1)}
            href="#privacypolicy"
          >
            Privacy Policy{" "}
          </a>
        </span>
        <span className="inline-flex sm:mx-auto sm:mt-0 mt-4">
          <a
            href="https://www.facebook.com/victorypiesolutions"
            target="_blank"
            className="mx-1.5 text-gray-500 hover:text-orange-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://x.com/VictoryPie2023"
            target="_blank"
            className="mx-1.5 text-gray-500 hover:text-orange-500"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/victorypiesolutions/"
            target="_blank"
            className="mx-1.5 text-gray-500 hover:text-orange-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/victory-pie-solutions-493516299/"
            target="_blank"
            className="mx-1.5 text-gray-500 hover:text-orange-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
