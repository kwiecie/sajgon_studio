"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div
        className={`flex flex-row justify-between md:py-1 md:px-8 w-full text-white items-center ${isMenuOpen ? "bg-white text-[#484293]" : ""}`}
      >
        <a href="/">Sajgon</a>

        <div
          className={`py-4 w-20 flex flex-col justify-between items-center `}
        >
          <button
            onClick={toggleMenu}
            className={`flex flex-col items-center justify-around h-6 relative group ${isMenuOpen ? "w-8 " : "w-9 "}`}
          >
            <span
              className={`md:hidden block w-full h-0.75 bg-white transform transition-transform duration-200 ease-in-out ${
                isMenuOpen ? "translate-y-2 rotate-45 bg-[#484293]" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.75 bg-white transition-opacity duration-200 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.75 bg-white transform transition-transform duration-200 ease-in-out ${
                isMenuOpen ? "-translate-y-2 -rotate-45 bg-[#484293]" : ""
              }`}
            ></span>
          </button>
          <nav
            className={`flex gap-8 font-mono text-base text-transform: uppercase ${isMenuOpen ? "flex-col text-[#484293]" : "hidden"} md:flex-row`}
          >
            <a href="#about">O mnie</a>
            <a href="#services">Usługi</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </div>
      <span className="h-1 bg-white"></span>
    </header>
  );
}
