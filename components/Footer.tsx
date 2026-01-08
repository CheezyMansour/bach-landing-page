export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-12">
          {/* Logo & About - hidden on mobile */}
          <div className="hidden md:block">
            <div className="mb-4 flex items-center gap-2">
              {/* White Logo */}
              <span className="font-bold text-3xl text-white tracking-wider">
                BACH
              </span>
              <div className="flex flex-col gap-1">
                <div className="w-16 h-1.5 bg-white/50" />
                <div className="w-16 h-4 bg-white" />
              </div>
            </div>
            <p className="text-white/60 text-sm">
              Quality construction and interior design services in Lagos and
              Abuja.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-white/60 text-xs md:text-sm">
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Locations</h3>
            <ul className="space-y-1 md:space-y-2 text-white/60 text-xs md:text-sm">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Port Harcourt</li>
              <li>Kano</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Contact Us</h3>
            <ul className="space-y-1 md:space-y-2 text-white/60 text-xs md:text-sm">
              <li>+234 123 456 7890</li>
              <li className="break-all">info@bach.ng</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          © 2026 BACH Contracting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
