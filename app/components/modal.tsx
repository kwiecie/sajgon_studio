"use client";
import { useEffect } from "react";
import Image from "next/image";

type ModalProps = {
  onClose: () => void;
  title: string;
  description: string;
  src: string;
};

export default function Modal({
  onClose,
  title,
  description,
  src,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 overflow-y-auto min-h-screen w-full z-50">
      <div className="flex flex-row">
        <div className="bg-[#484293] opacity-70 min-h-screen w-1/3"></div>
        <div className="p-8 min-h-screen w-2/3 bg-background flex flex-col">
          <div className="text-center flex flex-row justify-between px-7 py-5">
            <h3 className="text-2xl font-bold text-accent">{title}</h3>
            <button
              onClick={onClose}
              className="w-9 h-9 justify-center items-center rounded-md"
            >
              <span className="block w-full h-0.5 bg-accent rotate-45"></span>
              <span className="block w-full h-0.5 bg-accent -rotate-45"></span>
            </button>
          </div>
          <div className="mt-2 px-7 py-3">
            <p className="">{description}</p>
            <p className="">{description}</p>
            <p className="">{description}</p>
          </div>
          <div className="grid grid-flow-col grid-rows-3 gap-4 px-7 py-3">
            <Image
              src={src}
              alt={`${title} image`}
              width={400}
              height={300}
              className="row-span-3 rounded-md"
            />
            {/* <Image
              src={src}
              alt={`${title} image`}
              width={400}
              height={300}
              className="col-span-2 rounded-md"
            /> */}
            <div className="col-span-2 rounded-md bg-light-blue"></div>
            <div className="col-span-2 row-span-2 rounded-md bg-light-pink"></div>
            {/* <Image
              src={src}
              alt={`${title} image`}
              width={400}
              height={300}
              className="col-span-2 row-span-2 rounded-md"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
