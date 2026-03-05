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
    <section id="services" className="bg-[#FDFBF0] py-12">
      <div className="max-w-5xl mx-auto h-screen">
        <div className="inline-block bg-[#efb4a4] px-6 py-3 mb-10 ml-0">
          <h2 className="text-3xl font-semibold text-[#3b3f99]">
            Co możemy razem zrobić?
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center max-w-3xl mx-auto w-full pl-16 pt-12">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-[60px_1fr] items-center">
              {/* Number column */}
              <span className="text-[#3b3f99] tabular-nums font-mono text-xl transition group-hover:bg-[#3b3f99] group-hover:text-white">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Text column with underline */}
              <p className="border-b border-[#3b3f99] pb-2 text-2xl text-[#3b3f99] transition-transform duration-300 group-hover:translate-x-2">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
