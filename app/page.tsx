import Image from "next/image";
import Header from "./header";
import About from "./about";
import Services from "./services";
import "../styles/global.css";
import Footer from "./footer";
import Portfolio from "./portfolio";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#e88b7c] via-[#b79bb2] to-[#efe9e6] overflow-x-hidden">
        <Header />
        <main>
          <div className="px-16 flex flex-row justify-between items-center mt-4 text-white min-h-screen max-h-screen">
            <div className="max-w-1/2 ml-16 sm:w-full">
              <h1 className="text-transform: lowercase font-mono font-semibold sm:text-lg md:text-7xl">
                Studio kreatywne
              </h1>
              <p className="font-serif --font-gloock text-4xl">
                z którym opowiesz swoją historie
              </p>
              <a
                href="#services"
                className="px-8 py-1 mt-8 text-smaller border-white border rounded-tr-3xl rounded-bl-3xl hover:bg-white hover:text-[#e88b7c] transition-colors duration-300"
              >
                poznaj ofertę
              </a>
            </div>
            {/* <div className="md:relative w-[360px] h-[260px] max-w-1/2">
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
            </div> */}
          </div>
          <div className="pl-16 min-h-screen pr-0 flex flex-col md:flex-row text-[#484293] bg-[#FDFBF0]">
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
      <Portfolio />
      <Footer />
    </>
  );
}
