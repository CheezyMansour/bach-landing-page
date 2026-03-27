"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Split layout: text left, image right ────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ──────────────────────────────────────── */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Section label */}
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
              About BACH
            </p>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-4xl md:text-[42px] font-light text-dark leading-tight mb-5 sm:mb-6">
              An indigenous firm{" "}
              <br className="hidden sm:block" />
              built for scale.
            </h2>

            {/* Divider */}
            <div className="w-16 h-px bg-silver mb-6 sm:mb-8" />

            {/* Body copy */}
            <div className="space-y-4 sm:space-y-5 text-dark/70 text-base sm:text-[17px] leading-relaxed max-w-xl">
              <p>
                Batch Project Limited is a multi-disciplinary construction
                engineering firm headquartered in Abuja. We plan, design, and
                deliver complex civil, structural, electrical, and energy
                projects — end-to-end, anywhere in Nigeria and West Africa.
              </p>
              <p>
                Our integrated in-house team of civil, structural, electrical,
                telecoms, and solar engineers means no handoffs between
                contractors, no coordination gaps, and no excuses. One firm,
                one standard, from groundbreaking to handover.
              </p>
            </div>
          </div>

          {/* ── Right: Image ────────────────────────────────────── */}
          <div
            className={`relative transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main image — shorter aspect ratio on mobile */}
            <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-image.jpg"
                alt="Completed building by BACH"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={85}
              />
            </div>

            {/* Floating accent block — responsive positioning */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-0 sm:-left-6 bg-primary text-white px-5 sm:px-6 py-4 sm:py-5 rounded-md shadow-lg max-w-[200px] sm:max-w-[220px]">
              <p className="text-2xl font-bold leading-none mb-1">20+</p>
              <p className="text-[12px] sm:text-[13px] font-light tracking-wide opacity-90">
                Years of professional experience
              </p>
            </div>
          </div>
        </div>

        {/* ── Stat row ──────────────────────────────────────────── */}
        <div
          className={`mt-16 sm:mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 transition-all duration-700 delay-500 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "5-Yr", label: "Product Warranty" },
            { value: "20-Yr", label: "Structural Warranty" },
            { value: "95%+", label: "Computerized Ops" },
            { value: "E2E", label: "Turnkey Delivery" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left group">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </p>
              <div className="w-8 h-px bg-silver mb-2 mx-auto md:mx-0" />
              <p className="text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-dark/50 font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
