import Header from "./header";
import About from "./about";
import Services from "./services";
import "../styles/global.css";
import Image from "next/image";
import Footer from "./footer";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Collaboration from "./collaboration";
import projects from "@/app/data/projects-miniatures.json";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#e88b7c] via-[#b79bb2] via-20% to-background overflow-x-hidden">
        <Header />
        <main>
          <div className="px-16 flex flex-row justify-between items-center mt-4 text-white min-h-screen max-h-screen z-3">
            <div className="max-w-1/2 ml-16 sm:w-full">
              <h1 className="text-transform: lowercase --font-halfre font-semibold text-5xl md:text-7xl p-4">
                Studio kreatywne
              </h1>
              <p className="font-serif --font-gloock md:text-5xl text-4xl p-4">
                z którym opowiesz swoją historie
              </p>
              <a
                href="#services"
                className="px-8 py-1 mt-8 text-smaller border-white border rounded-tr-3xl rounded-bl-3xl hover:bg-white hover:text-[#e88b7c] transition-colors duration-300 p-6"
              >
                poznaj ofertę
              </a>
            </div>
            <div className="relative hidden w-90 h-65 max-w-1/2">
              <div
                className="absolute 
                  w-[220px] h-[220px]
                  rounded-full
                  bg-linear-to-br from-[#f05a28] to-[#f6a3c2]
                  left-[20px] top-[10px] md:z-2"
              />
              <div
                className="absolute 
                  w-[260px] h-[260px]
                  rounded-full
                  border border-white/90
                  right-[20px] top-[0px] md:z-1"
              />
            </div>
          </div>
          <div className="pl-16 min-h-screen w-full pr-0 flex flex-col md:flex-row text-accent">
            <div>
              <p className="text-9xl font-bold --font-halfre">+100</p>
              <p className="text-5xl --font-halfre font-semibold">
                projektów kreatywnych dla firm, przedsiębiorców i marek
                osobistych
              </p>
            </div>

            <ul className="w-1/2 grid grid-cols-5 gap-4 mt-8 grid-rows-3">
              {projects.projects_miniatures.map((project, index) => (
                <li key={index} className="relative w-full aspect-square">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      <About />
      <Services />
      <Collaboration />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
