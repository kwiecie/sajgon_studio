import Link from "next/link";

const linkClasses =
  "border-b-2 border-background font-mono md:text-xl md:font-semibold mr-2 hover:border-b-2 hover:border-accent transition-colors";

const tilesClasses =
  "md:w-160 md:h-32 md:pr-4 pt-4 p-4 text-right transition-transform duration-300 hover:translate-x-2";

export default function Contact() {
  return (
    <section id="contact" className="mx-0 bg-background text-accent max-w-full">
      <div className="flex flex-col  gap-4 p-8 text-left max-w-full">
        <h2 className="text-4xl font-halfre md:pl-16 hidden">
          Skontaktuj się z nami
        </h2>
        <div className="flex md:flex-row flex-col justify-center gap-0 md:px-16">
          <div className={`bg-pink ` + tilesClasses}>
            <Link href="mailto:kontakt@sajgon.pl" className={linkClasses}>
              napisz
            </Link>
          </div>
          <div className={`bg-orange ` + tilesClasses}>
            <Link href="tel:+48123456789" className={linkClasses}>
              zadzwoń
            </Link>
          </div>
          <div className={`bg-light-pink ` + tilesClasses}>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Sajgon+Studio,+Warsaw"
              className={linkClasses}
            >
              spotkajmy się
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
