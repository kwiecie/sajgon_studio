"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative w-full">
      {/*top bar*/}
      <div
        className={`flex justify-between items-center px-6 py-4 md:px-10 transition-colors ${
          isMenuOpen ? "bg-white text-[#484293]" : "text-white"
        }`}
      >
        {/*logo*/}
        <a href="/" className="text-xl font-semibold">
          Sajgon
        </a>

        {/*desktop nav*/}
        <nav className="hidden md:flex gap-8 font-mono uppercase">
          <a href="#about" className="hover:opacity-70 transition">
            O mnie
          </a>
          <a href="#services" className="hover:opacity-70 transition">
            Usługi
          </a>
          <a href="#portfolio" className="hover:opacity-70 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Kontakt
          </a>
        </nav>

        {/*hamburger*/}
        <button
          onClick={toggleMenu}
          className={`md:hidden flex flex-col justify-around h-6 ${
            isMenuOpen ? "w-8" : "w-9"
          }`}
        >
          <span
            className={`block w-full h-0.5 transform transition duration-200 ${
              isMenuOpen
                ? "translate-y-2 rotate-45 bg-[#484293] z-50"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white transition duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 transform transition duration-200 ${
              isMenuOpen
                ? "-translate-y-2 -rotate-45 bg-[#484293] z-50"
                : "bg-white"
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-white h-0.5 ${isMenuOpen ? "w-0" : "w-full"} transition-width duration-300`}
      ></div>

      {/*mobile menu*/}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-white text-[#484293] flex flex-col items-center gap-8 font-mono uppercase transition-all duration-300 ${
          isMenuOpen ? "h-[calc(100vh-64px)] py-12" : "h-0 overflow-hidden"
        }`}
      >
        <a href="#about" onClick={toggleMenu}>
          O mnie
        </a>
        <a href="#services" onClick={toggleMenu}>
          Usługi
        </a>
        <a href="#portfolio" onClick={toggleMenu}>
          Portfolio
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Kontakt
        </a>
      </nav>
    </header>
  );
}
