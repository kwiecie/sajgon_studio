import Image from "next/image";
import Header from "./header";
import About from "./about";
import Services from "./services";
import "../styles/global.css";

export default function Home() {
  return (
    <>
      <div className="container mx-auto bg-gradient-to-b from-[#e88b7c] via-[#b79bb2] to-[#efe9e6] ">
        <Header />
        <main>
          <div className="flex flex-row justify-between items-center mt-4 text-white min-h-screen">
            <div className="w-1/2">
              <h1 className="text-transform: lowercase font-mono font-semibold text-8xl">
                Studio kreatywne
              </h1>
              <p className="font-serif --font-gloock text-6xl">
                z którym opowiesz swoją historie
              </p>
              <button className="px-4 py-1 border-white border rounded-tr-lg rounded-bl-lg mt-4">
                poznaj ofertę
              </button>
            </div>
            <div className="relative w-[360px] h-[260px] overflow-hidden max-w-1/2">
              <div
                className="absolute 
                  w-[220px] h-[220px]
                  rounded-full
                  bg-gradient-to-br from-[#f05a28] to-[#f6a3c2]
                  left-[20px] top-[10px] z-2"
              />
              <div
                className="absolute 
                  w-[260px] h-[260px]
                  rounded-full
                  border border-white/90
                  right-[20px] top-[0px] z-1"
              />
            </div>
          </div>
          <div className="flex flex-row text-[#484293]">
            <div>
              <p className="text-6xl font-bold ">+100</p>
              <p>
                projektów kreatywnych dla firm, przedsiębiorców i marek
                osobistych
              </p>
            </div>

            <div className="w-1/2 grid grid-cols-5 gap-4 mt-8 grid-rows-3">
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
              <Image src="/projekt1.png" alt="" width={200} height={200} />
            </div>
          </div>
        </main>
      </div>
      <About />
      <Services />
    </>
  );
}
