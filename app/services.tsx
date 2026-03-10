export default function Services() {
  const services = [
    "Branding marki i branding osobisty",
    "Projektowanie i modernizacja stron internetowych",
    "Grafiki i ilustracje okolicznościowe",
    "Materiały na potrzeby Social Mediów",
    "Sesje zdjęciowe",
    "Projektowanie materiałów graficznych na potrzeby DTP",
    "Papeteria ślubna i dekoracje weselne",
  ];

  return (
    <section id="services" className="bg-background py-12">
      <div className="max-w-5xl mx-auto min-h-screen">
        <div className="inline-block bg-light-pink px-6 py-3 mb-10 ml-0">
          <h2 className="text-3xl font-semibold text-accent">
            Co możemy razem zrobić?
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-3xl mx-auto w-full px-4 md:pl-16 pt-12">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-[60px_1fr] items-center">
              <span className="text-accent tabular-nums font-mono text-xl transition group-hover:bg-accent group-hover:text-white">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <p className="border-b border-accent pb-2 text-2xl text-accent transition-transform duration-300 group-hover:translate-x-2">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
