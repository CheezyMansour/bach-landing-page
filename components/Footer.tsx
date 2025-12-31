export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div>
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
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60">
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

          {/* Contact Info */}
          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>+234 123 456 7890</li>
              <li>info@bachcontracting.com</li>
              <li>Lagos & Abuja, Nigeria</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          © 2025 BACH Contracting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
