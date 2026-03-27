"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const linkClass = `relative transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${
    scrolled
      ? "text-dark/70 hover:text-dark after:bg-dark after:w-0 hover:after:w-full"
      : "text-white after:bg-white after:w-0 hover:after:w-full"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Safe area padding for notched devices */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5">

          {/* Logo */}
          <a href="#hero" className="flex items-center h-11 transition-all duration-300">
            <Logo variant={scrolled || mobileMenuOpen ? "color" : "white"} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <a href="#about" className={linkClass}>About</a>
            <a href="#services" className={linkClass}>Services</a>
            <a href="#why-bach" className={linkClass}>Why BACH</a>
            <a href="#contact" className={linkClass}>Contact</a>
          </nav>

          {/* Mobile hamburger — 44px minimum touch target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-md active:bg-dark/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X className="w-6 h-6 text-dark" strokeWidth={2} />
              : <Menu className={`w-6 h-6 transition-colors duration-300 ${scrolled ? "text-dark" : "text-white"}`} strokeWidth={2} />
            }
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-dark/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile slide panel — full width on very small screens, 70% on larger */}
      <div
        className={`md:hidden fixed top-[60px] right-0 h-[calc(100dvh-60px)] w-4/5 max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 pt-8 pb-6 gap-1">
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#why-bach", label: "Why BACH" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center py-4 text-lg text-dark/70 hover:text-dark active:text-primary border-b border-silver/20 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
