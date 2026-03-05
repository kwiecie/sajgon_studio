export default function Footer() {
  return (
    <footer className="w-full mx-auto text-[#ffffff] bg-[#8BA0F0] flex flex-row">
      <div className="flex"></div>
      <div className=" gap-4 p-8 text-left">
        <h2 className="text-4xl p-4">Sajgon</h2>© {new Date().getFullYear()}{" "}
        kwiecie
      </div>
    </footer>
  );
}
