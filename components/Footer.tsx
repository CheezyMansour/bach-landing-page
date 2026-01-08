export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:hidden">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-2xl text-white tracking-wider">
              BACH
            </span>
            <div className="flex flex-col gap-1">
              <div className="w-12 h-1 bg-white/50" />
              <div className="w-12 h-3 bg-white" />
            </div>
          </div>
          <p className="text-white/60 text-xs text-center">
            Premium construction & interior design
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-12">
          {/* Logo & About - desktop only */}
          <div className="hidden md:block">
            <div className="mb-4 flex items-center gap-2">
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
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
              Quick Links
            </h3>
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
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
              Locations
            </h3>
            <ul className="space-y-1 md:space-y-2 text-white/60 text-xs md:text-sm">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Port Harcourt</li>
              <li>Kano</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 min-w-0">
            <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
              Contact
            </h3>
            <ul className="space-y-1 md:space-y-2 text-white/60 text-xs md:text-sm">
              <li className="whitespace-nowrap">
                <a
                  href="tel:01234567890"
                  className="hover:text-white transition-colors"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bach.ng"
                  className="hover:text-white transition-colors"
                >
                  info@bach.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-white/40 text-xs md:text-sm">
          © 2026 BACH Contracting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
