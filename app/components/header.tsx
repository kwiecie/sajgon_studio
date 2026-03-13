"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className={`w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 md:px-10 transition-colors ${
          isMenuOpen || isScrolled
            ? "bg-background text-accent"
            : "bg-transparent text-white"
        }`}
      >
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
                ? "translate-y-2 rotate-45 bg-accent z-50"
                : `${isScrolled ? "bg-accent z-50" : "bg-white"}`
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white transition duration-200 ${
              isMenuOpen ? "opacity-0" : `${isScrolled ? "bg-accent z-50" : ""}`
            }`}
          />
          <span
            className={`block w-full h-0.5 transform transition duration-200 ${
              isMenuOpen
                ? "-translate-y-2 -rotate-45 bg-accent z-50"
                : `${isScrolled ? "bg-accent z-50" : "bg-white"}`
            }`}
          />
        </button>
      </div>
      <div
        className={`bg-white h-0.5 z-50 ${isMenuOpen ? "w-0 bg-accent" : "w-full"} transition-all duration-300`}
      ></div>

      {/*mobile menu*/}
      <nav
        className={`md:hidden fixed top-16 left-0 w-full bg-white text-accent flex flex-col items-center gap-8 font-mono uppercase transition-all duration-300 ${
          isMenuOpen ? "h-[calc(100vh-64px)] py-12 z-50" : "h-0 overflow-hidden"
        }`}
      >
        <a
          href="#about"
          onClick={toggleMenu}
          className="border-b-2 border-transparent hover:border-b-2 hover:border-accent transition-colors"
        >
          O mnie
        </a>
        <a
          href="#services"
          onClick={toggleMenu}
          className="border-b-2 border-transparent hover:border-b-2 hover:border-accent transition-colors"
        >
          Usługi
        </a>
        <a
          href="#portfolio"
          onClick={toggleMenu}
          className="border-b-2 border-transparent hover:border-b-2 hover:border-accent transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="border-b-2 border-transparent hover:border-b-2 hover:border-accent transition-colors"
        >
          Kontakt
        </a>
      </nav>
    </>
  );
}
