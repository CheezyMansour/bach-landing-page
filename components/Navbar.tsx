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
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-3xl text-primary tracking-wider">
              BACH
            </span>
            <div className="flex flex-col gap-1">
              <div className="w-16 h-1.5 bg-silver" />
              <div className="w-16 h-4 bg-primary" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-dark/70 hover:text-dark">
              Home
            </a>
            <a href="#services" className="text-dark/70 hover:text-dark">
              Services
            </a>
            <a href="#portfolio" className="text-dark/70 hover:text-dark">
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-primary text-white hover:bg-primary-hover px-4 py-2 rounded-md font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
