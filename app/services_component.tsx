"use client";
import { useState } from "react";
import services from "./data/services.json";

export default function ServicesComponent() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="services" className="bg-background py-10 min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="inline-block bg-light-pink px-6 w-3/4 md:w-2/3">
          <h2 className="text-2xl md:text-5xl text-accent my-2 md:my-4 pl-4 md:pl-10">
            Co możemy razem zrobić?
          </h2>
        </div>

        <div className="px-4 pt-4 flex justify-center items-center">
          <div className="w-full max-w-5xl mx-auto">
            {services.map((service, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <div key={index} className="p-4 w-full">
                  <div className="grid grid-cols-[60px_1fr_40px] w-full">
                    <span className="text-accent font-mono text-xl tabular-nums">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => toggleSection(index)}
                      className="text-left cursor-pointer pb-3"
                    >
                      <h3 className="text-xl md:text-2xl text-accent">
                        {service.title}
                      </h3>
                    </button>
                    <button
                      onClick={() => toggleSection(index)}
                      className="justify-self-end"
                    >
                      <svg
                        className={`w-6 h-6 text-accent transition-transform duration-300 ${
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
                    <div className="col-start-1 md:col-start-2 col-end-4 h-px bg-accent mt-2" />
                    <div
                      className={`col-start-1 md:col-start-2 col-end-4 max-w-full md:max-w-[90%] overflow-hidden transition-all duration-500 ${
                        isOpen
                          ? "max-h-dvh opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className="text-accent fira-mono-regular leading-relaxed pt-2"
                        dangerouslySetInnerHTML={{
                          __html: service.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
