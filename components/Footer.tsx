export default function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl md:text-3xl text-white tracking-wider">
                BACH
              </span>
              <div className="flex flex-col gap-1">
                <div className="w-12 md:w-16 h-1 md:h-1.5 bg-white/20" />
                <div className="w-12 md:w-16 h-3 md:h-4 bg-white/40" />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Premium construction, interior design, and bespoke furniture
              manufacturing across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Navigate
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Locations
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Port Harcourt</li>
              <li>Kano</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+2341234567890"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bach.ng"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  info@bach.ng
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2341234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <p className="text-center text-white/40 text-xs tracking-wide">
            © 2026 BACH Contracting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
