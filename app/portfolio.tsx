import Image from "next/image";

const imageClasses = "rounded-4xl w-full max-w-[420px] h-auto";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-0 bg-background min-h-screen text-accent max-w-full"
    >
      <div className="flex flex-col gap-4 p-8 text-left max-w-full">
        <h1 className="text-4xl md:pl-16">Zrealizowane projekty</h1>

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
