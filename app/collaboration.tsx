const squareClasses =
  "bg-light-pink h-28 w-28 hover:opacity-70 transition-opacity";

export default function Collaboration() {
  return (
    <section className="relative min-h-screen bg-background py-16">
      <h2 className="md:text-4xl text-accent mb-8 pl-22">
        Jak wygląda współpraca?
      </h2>

      <div className="bg-[dark-orange] h-140 w-[94%]"></div>

      {/* squares */}
      {/* <div className="absolute right-0 top-70 grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-24  h-24 bg-[#F3C1B3]" />
        ))}
      </div> */}
      <div className="absolute grid grid-cols-4 grid-rows-4 gap-2 right-0 top-38 z-1">
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={`opacity-0 ${squareClasses}`}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
        <div className={squareClasses}></div>
      </div>
    </section>
  );
}
