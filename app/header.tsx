export default function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between py-1 px-8 w-full">
        <a href="/" className="m-0">
          Sajgon
        </a>
        <nav className="flex flex-row gap-8 font-mono text-base text-transform: uppercase">
          <a href="#about">O mnie</a>
          <a href="#services">Usługi</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
      <div className="h-0.25 bg-white" />
    </header>
  );
}
