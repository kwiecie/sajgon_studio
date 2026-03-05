import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto ml-8 bg-[#484293] min-h-screen text-white flex flex-row gap-8"
    >
      <div className="flex min-h-full w-1/2 flex-row gap-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 min-w-1/3">
          <Image src="/michalek1.png" alt="" width={200} height={200} />
          <Image src="/michalek2.png" alt="" width={200} height={200} />
          <Image src="/michalek3.png" alt="" width={200} height={200} />
          <Image src="/michalek4.png" alt="" width={200} height={200} />
        </div>
        <div className="bg-white h-80 w-0.5" />
      </div>

      <div className="w-1/2 flex flex-col gap-4 p-8 text-left">
        <h1 className="font-serif text-5xl --font-gloock">
          W zgodzie z filozofią less is more
        </h1>
        <p>
          W projektowaniu stawiam na prostotę, wysoki stopień czytelności i
          pełną transparentność na każdym etapie współpracy. Do każdego projektu
          podchodzę indywidualnie, szukając najbardziej optymalnych i
          kreatywnych rozwiązań, które odpowiadają potrzebom współczesnego
          rynku.
        </p>
        <p>
          Jeśli szukasz partnera, który podejmie się wszystkiego,co tylko
          przyjdzie Ci do głowy i cenisz jasną komunikację, to dobrze trafiłeś!
        </p>
      </div>
    </section>
  );
}
