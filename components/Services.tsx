"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Civil Engineering & Infrastructure",
    description:
      "Roads, drainage systems, culverts, dredging, and erosion control — from rural access roads to urban highway networks.",
    scope: ["Road construction & maintenance", "Drainage & culvert systems", "Dredging & land reclamation", "Erosion control"],
    image: "/services/civil-engineering.jpg",
  },
  {
    title: "Building Construction",
    description:
      "Residential, commercial, and industrial structures delivered from foundation to finishing — warehouses, offices, and full estate builds.",
    scope: ["Residential & commercial builds", "Warehouse construction", "Estate development", "Structural engineering"],
    image: "/services/building-construction.jpg",
  },
  {
    title: "Electrical Services",
    description:
      "Power distribution, rural electrification, transformer installation, SCADA systems, and high-voltage engineering.",
    scope: ["Power distribution networks", "Rural electrification", "HV transformers & switchgear", "Surge & lightning protection"],
    image: "/services/electrical-services.jpg",
  },
  {
    title: "Solar Energy",
    description:
      "Design, deployment, and maintenance of solar solutions — from street lighting to commercial-scale solar farms across West Africa.",
    scope: ["Off-grid & on-grid systems", "Solar street lighting", "Energy consultancy", "Equipment maintenance"],
    image: "/services/solar-energy.jpg",
  },
  {
    title: "Estate Development",
    description:
      "End-to-end property development — planning, construction, and facility management for housing projects and residential estates.",
    scope: ["Housing project delivery", "Property development", "Renovations & upgrades", "Facility management"],
    image: "/services/estate-development.jpg",
  },
  {
    title: "Project Management",
    description:
      "Monitoring, evaluation, and design coordination — ensuring every project meets specification, timeline, and budget.",
    scope: ["M&E consultancy", "Design coordination", "Project monitoring", "Quality assurance"],
    image: "/services/project-management.jpg",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reversed = index % 2 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg shadow-sm border border-silver/30 overflow-hidden transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image — constrained height on mobile, natural on desktop */}
      <div
        className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[360px] ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={85}
        />
      </div>

      {/* Text — tighter padding on mobile */}
      <div
        className={`flex flex-col justify-center px-5 py-6 sm:p-8 md:p-10 lg:p-14 ${
          reversed ? "lg:order-1" : ""
        }`}
      >
        {/* Number accent */}
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-2 sm:mb-3">
          0{index + 1}
        </span>

        <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-dark leading-tight mb-3 sm:mb-4">
          {service.title}
        </h3>

        <div className="w-10 h-px bg-silver mb-4 sm:mb-5" />

        <p className="text-dark/65 text-[15px] sm:text-base leading-relaxed mb-5 sm:mb-6">
          {service.description}
        </p>

        {/* Scope bullets — single column on small mobile, 2-col on sm+ */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 sm:gap-y-2">
          {service.scope.map((item) => (
            <li
              key={item}
              className="text-[13px] sm:text-sm text-dark/50 flex items-start gap-2"
            >
              <span className="text-primary mt-1.5 text-[8px]">&#9644;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-light py-16 sm:py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-10 sm:mb-16 md:mb-24 max-w-2xl transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
            Our Capabilities
          </p>
          <h2 className="text-[28px] sm:text-4xl md:text-[42px] font-light text-dark leading-tight mb-5 sm:mb-6">
            What We Build.
          </h2>
          <div className="w-16 h-px bg-silver mb-5 sm:mb-6" />
          <p className="text-dark/60 text-base sm:text-[17px] leading-relaxed">
            End-to-end execution across civil engineering, construction,
            infrastructure, and energy.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
