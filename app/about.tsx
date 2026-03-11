import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full md:p-16 p-4 bg-[#484293] min-h-screen md:max-h-screen items-center text-white flex flex-col-reverse md:flex-row gap-8"
    >
      <div className="sm:p-4 lg:p-16 flex min-h-full w-full lg:w-1/2 flex-col-reverse md:flex-row gap-8 md:gap-8 items-center">
        <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-4 grid-rows-1 gap-4 min-w-1/3 max-h-full p-4">
          <Image src="/michalek1.png" alt="" width={200} height={200} />
          <Image src="/michalek2.png" alt="" width={200} height={200} />
          <Image src="/michalek3.png" alt="" width={200} height={200} />
          <Image src="/michalek4.png" alt="" width={200} height={200} />
        </div>
        <div className="bg-white md:h-80 md:w-0.5 h-0.5 w-40" />
      </div>

      <div className="lg:w-1/2 w-full min-h-full flex flex-col gap-4 p-2 text-left">
        <h1 className="lg:text-5xl text-3xl --font-gloock">
          W zgodzie z filozofią less is more
        </h1>
        <p className="text-small">
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
