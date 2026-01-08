"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  PhoneOff,
  Users,
  Award,
  HeartHandshake,
  CircleDollarSign,
  Clock,
} from "lucide-react";

const trustPoints = [
  {
    icon: PhoneOff,
    title: "Zero Callbacks",
    description: "Our finishing eliminates rework.",
  },
  {
    icon: Users,
    title: "In-House Expertise",
    description: "Specialists across every discipline.",
  },
  {
    icon: Award,
    title: "Premium Execution",
    description: "Built for brands that cannot afford mistakes.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Handover Support",
    description: "Quality doesn't end at delivery.",
  },
  {
    icon: CircleDollarSign,
    title: "No Hidden Costs",
    description: "All contingencies are covered upfront.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We meet deadlines without compromising quality.",
  },
];

export default function WhyBach() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-primary/8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-3">
            The Difference
          </h2>
          <div className="w-16 h-px bg-silver mb-4" />
          <p className="text-dark/60 max-w-xl text-sm sm:text-base">
            What sets Bach apart from the rest.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 mb-16 sm:mb-20 md:mb-28">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                <point.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-0.5 sm:mb-1 text-sm sm:text-base">{point.title}</h3>
                <p className="text-dark/70 text-xs sm:text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          ref={testimonialRef}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Quote with staggered word reveal */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dark/80 italic mb-6 sm:mb-8">
            {`"Working with Bach was effortless. They delivered a flagship store that exceeded every expectation. Precision, professionalism, and an uncompromising standard of quality."`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-[0.25em] transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 40}ms` : "0ms",
                  }}
                >
                  {word}
                </span>
              ))}
          </p>

          {/* Attribution - appears after quote finishes */}
          <div
            className={`flex items-center justify-center gap-3 sm:gap-4 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{
              transitionDelay: isVisible ? "1000ms" : "0ms",
            }}
          >
            <div className="w-14 h-14 sm:w-17.5 sm:h-17.5 rounded-full overflow-hidden shrink-0">
              <Image
                src="/adidas-ceo.jpeg"
                alt="Bjørn Gulden"
                width={70}
                height={70}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-dark text-base sm:text-lg">Bjørn Gulden</p>
              <p className="text-dark/60 text-sm sm:text-base">CEO, Adidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
