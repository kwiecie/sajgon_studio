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
      <div className="overflow-x-hidden">
        <main>
          <div className="px-6 flex flex-col md:flex-row justify-between items-center md:items-start mt-8 text-white h-[60vh] md:min-h-screen">
            <div className="w-full md:w-1/2 md:pl-10 md:ml-10 pt-10 md:pt-32 lg:pt-50 text-left">
              <h1 className="text-transform: lowercase --font-halfre text-5xl md:text-7xl lg:text-8xl">
                Studio kreatywne
              </h1>
              <p className="gloock-regular mt-4 py-2 text-2xl md:text-5xl tracking-widest">
                z którym opowiesz swoją historie
              </p>
              <a
                href="#services"
                className="inline-block px-8 py-1 mt-8 text-smaller border-white border rounded-tr-3xl rounded-bl-3xl hover:bg-white hover:text-[#e88b7c] transition-colors duration-300 p-6"
              >
                poznaj ofertę
              </a>
            </div>
            <div className="relative w-155 h-65 max-w-1/2">
              <div
                className="hidden md:block absolute
                  w-117 h-117
                  rounded-full
                  bg-linear-[105deg] from-[#EA5629] via-[#EA6851] to-[#EA96B4]
                  left-0 top-15 md:z-2"
              />
              <div
                className="hidden md:block md:absolute
                  md:w-150 md:h-150
                  rounded-full
                  border-2 border-white/90
                  right-0 top-4 md:z-1"
              />
            </div>
          </div>
          <div className="px-2 md:pl-16 h-[90vh] md:h-screen w-full bg-linear-to-b to-background md:pr-0 text-accent">
            <div className="flex flex-col-reverse justify-between md:flex-row md:top-[50%] md:translate-y-1/2 gap-16 md:gap-0">
              <div className="w-full md:w-1/3 pr-12 pb-10 md:pb-0">
                <p className="text-7xl md:text-9xl pl-10 md:pl-0 --font-halfre">
                  +100
                </p>
                <p className="text-2xl md:text-4xl --font-halfre pl-12">
                  projektów kreatywnych dla firm, przedsiębiorców i marek
                  osobistych
                </p>
              </div>

              <ul className="w-full md:w-1/2 grid grid-cols-5 grid-rows-3 gap-2 md:gap-4 ">
                {projects.projects_miniatures.map((project, index) => (
                  <li key={index} className="relative w-full aspect-square">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:invert transition-all duration-300"
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
