export default function Header() {
  return (
    <header>
      <div className="container flex flex-row justify-between items-center py-4 mr-1 ml-1">
        <a href="/">Sajgon</a>
        <nav className="flex flex-row gap-4 text-transform: uppercase">
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
