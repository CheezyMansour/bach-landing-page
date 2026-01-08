"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-3xl tracking-wider transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              BACH
            </span>
            <div className="flex flex-col gap-1">
              <div
                className={`w-16 h-1.5 transition-colors duration-300 ${
                  scrolled ? "bg-silver" : "bg-white/50"
                }`}
              />
              <div
                className={`w-16 h-4 transition-colors duration-300 ${
                  scrolled ? "bg-primary" : "bg-white"
                }`}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className={`transition-colors duration-300 ${
                scrolled ? "text-dark/70 hover:text-dark" : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`transition-colors duration-300 ${
                scrolled ? "text-dark/70 hover:text-dark" : "text-white/80 hover:text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`transition-colors duration-300 ${
                scrolled ? "text-dark/70 hover:text-dark" : "text-white/80 hover:text-white"
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
        </div>
      </div>
    </header>
  );
}
