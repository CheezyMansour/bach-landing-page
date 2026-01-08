"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-2xl md:text-3xl tracking-wider transition-colors duration-300 ${
                scrolled || mobileMenuOpen ? "text-primary" : "text-white"
              }`}
            >
              BACH
            </span>
            <div className="flex flex-col gap-1">
              <div
                className={`w-12 md:w-16 h-1 md:h-1.5 transition-colors duration-300 ${
                  scrolled || mobileMenuOpen ? "bg-silver" : "bg-white/50"
                }`}
              />
              <div
                className={`w-12 md:w-16 h-3 md:h-4 transition-colors duration-300 ${
                  scrolled || mobileMenuOpen ? "bg-primary" : "bg-white"
                }`}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-dark/70 hover:text-dark"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-dark/70 hover:text-dark"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-dark/70 hover:text-dark"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-hover"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-dark" strokeWidth={2} />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 top-18 bg-dark/30 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide Panel */}
      <div
        className={`md:hidden fixed top-18 right-0 h-[calc(100vh-72px)] w-3/5 bg-white/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 pt-12 gap-6">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-xl text-dark/70 hover:text-dark transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={handleLinkClick}
            className="text-xl text-dark/70 hover:text-dark transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={handleLinkClick}
            className="text-xl text-dark/70 hover:text-dark transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-md font-medium text-center transition-colors mt-4"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
