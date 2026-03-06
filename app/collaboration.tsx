const squareClasses =
  "bg-[#F3C1B3] h-28 w-28 hover:opacity-70 transition-opacity";

// export default function Collaboration() {
//   return (
//     <section
//       id="collaboration"
//       className="relative w-full md:p-16 p-4 bg-[#FDFBF0] min-h-screen md:max-h-screen items-center flex flex-col-reverse md:flex-row gap-8 text-[#484293]"
//     >
//       <div>
//         <h1 hidden>Współpraca</h1>
//         <h2 className="text-4xl font-mono">Jak wygląda współpraca?</h2>
//         <div className="bg-[#EA5629] w-[90%] h-[40vw] z-0">
//           <div className="absolute grid grid-cols-4 grid-rows-4 gap-2 right-0 top-24 z-1">
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={`opacity-0 ${squareClasses}`}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//             <div className={squareClasses}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Collaboration() {
  return (
    <section className="relative min-h-screen bg-[#FDFBF0] py-16">
      <h2 className="md:text-4xl text-[#484293] mb-8 pl-22 font-mono">
        Jak wygląda współpraca?
      </h2>

      {/* orange block */}
      <div className="bg-[#EB5225] h-140 w-[94%]"></div>

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
