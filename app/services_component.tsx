"use client";
import { useState } from "react";
import services from "./data/services.json";

export default function ServicesComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  return (
    <section id="services" className="bg-background py-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block bg-light-pink px-6 py-4 w-1/2">
          <h2 className="text-3xl font-semibold text-accent mb-10">
            Co możemy razem zrobić?
          </h2>
        </div>

        <div className="max-w-6xl md:px-30 px-4 pt-10 flex flex-col items-center justify-center">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="mb-10 p-4">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full grid grid-cols-[60px_1fr_40px] text-left cursor-pointer"
                >
                  <span className="text-accent font-mono text-xl tabular-nums">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl text-accent">
                    {service.title}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-accent justify-self-end transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="border-b border-accent mt-4" />
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-accent text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
