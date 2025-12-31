import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-dark hover:text-primary ">
              Home
            </a>
            <a href="#services" className="text-dark hover:text-primary">
              Services
            </a>
            <a href="#portfolio" className="text-dark hover:text-primary">
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
