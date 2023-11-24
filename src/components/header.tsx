import React from "react";
import logo from "@/imgs/logo.png";

export const Header = ({ showDecleration }) => {
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow shadow bg-opacity-80 backdrop-blur-lg backdrop-filter"`}
    >
      <div className="container mx-auto flex flex-wrap px-5 py-8 flex-col md:flex-row">
        <a
          className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0"
          href="#home"
          onClick={() => showDecleration(0)}
        >
          <img
            className="md:justify-center w-40 h-15 text-white absolute "
            src={logo.src}
          />
        </a>
        <nav className="md:mx-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mx-3 hover:text-orange-500"
            onClick={() => showDecleration(0)}
            href="#home"
          >
            Home
          </a>
          <a
            className="mx-3 hover:text-orange-500"
            onClick={() => showDecleration(0)}
            href="#vision"
          >
            Vision
          </a>
          <a
            className="mx-3 hover:text-orange-500"
            onClick={() => showDecleration(0)}
            href="#team"
          >
            Team
          </a>
          <a
            className="mx-3 hover:text-orange-500"
            onClick={() => showDecleration(0)}
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
