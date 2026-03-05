import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto bg-[#FDFBF0] min-h-screen text-[#484293] w-full"
    >
      <div className="flex flex-col gap-4 p-8 text-left w-full">
        <h1 className="text-4xl font-mono">Zrealizowane projekty</h1>

        <div className="flex flex-col md:flex-row justify-around gap-8 max-w-full">
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className="rounded-4xl"
          />
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className="rounded-4xl"
          />
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className="rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}
