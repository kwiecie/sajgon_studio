import About from "./about";
import ServicesComponent from "./services_component";
import "./globals.css";
import Image from "next/image";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Collaboration from "./collaboration";
import projects from "@/app/data/projects-miniatures.json";

export default function Home() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
        <main>
          <div className="px-16 flex flex-row justify-between items-start mt-4 text-white min-h-screen max-h-screen z-3">
            <div className="max-w-1/2 ml-16 sm:w-full pt-50">
              <h1 className="text-transform: lowercase --font-halfre text-5xl md:text-8xl p-4">
                Studio kreatywne
              </h1>
              <p className="gloock-regular md:text-5xl text-4xl p-4 tracking-widest">
                z którym opowiesz swoją historie
              </p>
              <a
                href="#services"
                className="px-8 py-1 mt-8 text-smaller border-white border rounded-tr-3xl rounded-bl-3xl hover:bg-white hover:text-[#e88b7c] transition-colors duration-300 p-6"
              >
                poznaj ofertę
              </a>
            </div>
            <div className="relative w-155 h-65 max-w-1/2">
              <div
                className="absolute 
                  w-117 h-117
                  rounded-full
                  bg-linear-[105deg] from-[#EA5629] via-[#EA6851] to-[#EA96B4]
                  left-0 top-15 md:z-2"
              />
              <div
                className="absolute 
                  w-150 h-150
                  rounded-full
                  border-2 border-white/90
                  right-0 top-4 md:z-1"
              />
            </div>
          </div>
          <div className="pl-16 min-h-screen w-full bg-linear-to-b to-background pr-0  text-accent">
            <div className="flex flex-col md:flex-row top-[50%] translate-y-1/2 gap-16 md:gap-0">
              <div className="max-w-1/2  pr-12">
                <p className="text-9xl font-bold --font-halfre">+100</p>
                <p className="text-4xl --font-halfre font-semibold">
                  projektów kreatywnych dla firm, przedsiębiorców i marek
                  osobistych
                </p>
              </div>

              <ul className="w-full md:w-1/2 grid grid-cols-3 md:grid-cols-5 gap-4 ">
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
          </div>
        </main>
      </div>
      <About />
      <ServicesComponent />
      {/* <Collaboration /> */}
      <Portfolio />
      <Contact />
    </>
  );
}
