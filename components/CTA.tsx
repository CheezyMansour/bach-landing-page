"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden bg-dark"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/cta-image.jpg"
          alt="Completed construction project"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Dark overlay — slightly heavier on mobile for readability */}
      <div className="absolute inset-0 bg-black/65 sm:bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-4 sm:mb-6">
          Let&rsquo;s Build Something
          <br className="hidden sm:block" />
          {" "}That Lasts.
        </h2>

        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
          From first consultation to final handover — tell us what
          you&rsquo;re building and we&rsquo;ll show you how we deliver.
        </p>

        {/* Buttons — full-width stacked on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://wa.me/2341234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-medium text-base sm:text-lg
                       hover:bg-[#1ebe57] hover:shadow-xl hover:shadow-[#25D366]/25 hover:-translate-y-0.5
                       active:scale-[0.98] transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="mailto:info@bach.ng"
            className="inline-flex items-center justify-center gap-3 bg-white text-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-md font-medium text-base sm:text-lg
                       hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5
                       active:scale-[0.98] transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-none stroke-current flex-shrink-0" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
