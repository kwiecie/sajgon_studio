import Image from "next/image";

const imageClasses = "rounded-4xl w-full max-w-[360px] h-auto";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-0 bg-background min-h-screen max-w-full"
    >
      <div className="flex flex-col gap-4 p-8 text-left max-w-full">
        <h1 className="text-4xl md:pl-16 bg-light-pink text-background lowercase w-full right-0 inline-block font-halfre px-6 py-4">
          Portfolio
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:px-8 w-80% bg-light-blue py-10 mx-16">
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
