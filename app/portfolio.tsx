"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./components/modal";
import { useState } from "react";
import portfolio from "@/app/data/portfolio.json";
import Banner from "./components/banner";

const imageClasses =
  "rounded-4xl w-full max-w-[360px] h-auto shadow-lg shadow-[#484293] hover:shadow-2xl hover:shadow-[#484293] hover:brightness-110 transition-shadow duration-300 cursor-pointer object-cover ratio-2/3";

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
        <div className="flex flex-col gap-4 p-8 text-left max-w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:px-8 w-[80vw] bg-light-blue py-10 mx-16">
            {portfolio.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt=""
                width={400}
                height={553}
                className={imageClasses}
                onClick={() => setSelectedItem(item)}
              />
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
