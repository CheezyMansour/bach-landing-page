"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Users,
  ClipboardCheck,
  Globe,
  Zap,
  Handshake,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "5 + 20-Year Warranties",
    description:
      "Product and structural warranty on every new build. Standard, no extra cost.",
  },
  {
    icon: Users,
    title: "In-House Multi-Disciplinary Team",
    description:
      "Civil, structural, electrical, solar, and telecoms engineers under one roof.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Management System",
    description:
      "Formal 14-section QA Manual applied to every project we deliver.",
  },
  {
    icon: Globe,
    title: "Pan-African Reach",
    description:
      "Operating across Nigeria, Gabon, and Equatorial Guinea.",
  },
  {
    icon: Zap,
    title: "Fast-Track Execution",
    description:
      "Every project runs on an accelerated completion strategy without compromising quality.",
  },
  {
    icon: Handshake,
    title: "Community-Integrated Approach",
    description:
      "Host communities are partners from conception to completion.",
  },
];

export default function WhyBach() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-bach"
      className="bg-white py-16 sm:py-20 md:py-32 lg:py-40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`mb-12 sm:mb-16 md:mb-24 max-w-2xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
            Why BACH
          </p>
          <h2 className="text-[28px] sm:text-4xl md:text-[42px] font-light text-dark leading-tight mb-5 sm:mb-6">
            The Difference.
          </h2>
          <div className="w-16 h-px bg-silver mb-5 sm:mb-6" />
          <p className="text-dark/60 text-base sm:text-[17px] leading-relaxed">
            Built different. Backed by proof.
          </p>
        </div>

        {/* Trust points — 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-16 gap-y-10 sm:gap-y-12 md:gap-y-16 mb-16 sm:mb-24 md:mb-32">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className={`transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${150 + i * 100}ms` : "0ms",
              }}
            >
              <point.icon
                className="w-6 h-6 text-primary mb-3 sm:mb-4"
                strokeWidth={1.5}
              />

              <h3 className="text-lg sm:text-xl font-semibold text-dark mb-2 sm:mb-3 leading-snug">
                {point.title}
              </h3>

              <div className="w-8 h-px bg-silver mb-2 sm:mb-3" />

              <p className="text-dark/55 text-[14px] sm:text-[15px] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          ref={quoteRef}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            quoteVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-12 h-px bg-primary mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-2xl md:text-3xl text-dark/80 font-light italic leading-relaxed mb-5 sm:mb-6">
            &ldquo;We build it once, we build it right — and we stand
            behind every structure we deliver.&rdquo;
          </p>
          <p className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-dark/40">
            — CEO, Batch Project Limited
          </p>
        </div>
      </div>
    </section>
  );
}
