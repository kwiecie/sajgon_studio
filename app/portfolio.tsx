import Image from "next/image";

const imageClasses = "rounded-4xl w-full max-w-[420px] h-auto";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto bg-[#FDFBF0] min-h-screen text-[#484293] max-w-full"
    >
      <div className="flex flex-col gap-4 p-8 text-left w-full">
        <h1 className="text-4xl font-mono md:pl-16">Zrealizowane projekty</h1>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:px-8 max-w-full">
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className={imageClasses}
          />
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className={imageClasses}
          />
          <Image
            src="/portfolio1.jpg"
            alt=""
            width={434}
            height={593}
            className={imageClasses}
          />
        </div>
      </div>
    </section>
  );
}
