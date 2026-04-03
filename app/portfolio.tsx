"use client";

import Image from "next/image";
import Modal from "./components/modal";
import { useState } from "react";
import portfolio from "@/app/data/portfolio.json";
import Banner from "./components/banner";

type PortfolioItemType = {
  title: string;
  description: string;
  src: string;
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemType | null>(
    null,
  );

  return (
    <section id="portfolio">
      <Banner title="Portfolio" />
      <div
        className={`mx-0 bg-background min-h-screen max-w-full flex justify-center items-center ${selectedItem ? "overflow-hidden" : ""}`}
      >
        <div className="w-full max-w-6xl md:mx-auto mt-6 lg:mt-12 py-8 lg:py-16 bg-light-blue">
          {/* mobile view */}
          <div className="flex md:hidden max-w-6xl gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="relative shrink-0 w-[75%] ml-4 rounded-3xl aspect-2/3 snap-start cursor-pointer shadow-lg shadow-[#484293] hover:brightness-110 transition-shadow duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="75vw"
                  className="object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>

          {/* desktop view*/}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-20">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="relative w-[120%] -translate-x-8 aspect-2/3 overflow-hidden cursor-pointer group rounded-3xl shadow-lg shadow-[#484293] hover:shadow-2xl hover:shadow-[#484293] transition-all duration-300 group-hover:shadow-2xl group hover:brightness-110"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 468px) 50vw, 33vw"
                  className="object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
        {selectedItem && (
          <Modal
            onClose={() => setSelectedItem(null)}
            title={selectedItem.title}
            description={selectedItem.description}
            src={selectedItem.src}
          />
        )}
      </div>
    </section>
  );
}
