import Image from "next/image";
import projects from "@/app/data/projects-miniatures.json";

export default function Projects() {
  return (
    <div className="pl-16 min-h-screen w-full pr-0 flex flex-col md:flex-row text-[#484293]">
      <div>
        <p className="text-6xl font-bold">+100</p>
        <p>
          projektów kreatywnych dla firm, przedsiębiorców i marek osobistych
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
  );
}
