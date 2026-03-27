import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 md:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-4">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Integrated construction engineering across Nigeria and West
              Africa. Civil, structural, electrical, and solar — delivered
              end-to-end.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-5">
              Navigate
            </p>
            <ul className="space-y-1">
              <li>
                <a
                  href="#services"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#why-bach"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
                >
                  Why BACH
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-5">
              Locations
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm text-white/80">
              <li>Abuja, FCT</li>
              <li>Lagos</li>
              <li>Kano</li>
            </ul>
          </div>

          {/* Contact — proper touch targets for phone/email links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 sm:mb-5">
              Contact
            </p>
            <ul className="space-y-1">
              <li>
                <a
                  href="tel:+2341234567890"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bach.ng"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
                >
                  info@bach.ng
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2341234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors duration-200 py-1.5"
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs tracking-wide">
            &copy; 2026 Batch Project Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            RC 151645050
          </p>
        </div>
      </div>
    </footer>
  );
}
