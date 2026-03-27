"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/hero-image2.jpg", position: "object-center" },
  { src: "/hero-4.jpg", position: "object-center" },
  { src: "/hero-image3.jpg", position: "object-center" },
];

const SLIDE_DURATION = 7000;
const FADE_DURATION = 800;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (current + 1) % slides.length;
      setNext(nextSlide);
      setTimeout(() => {
        setCurrent(nextSlide);
        setNext(null);
      }, FADE_DURATION);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[560px] max-h-[1200px] flex flex-col justify-end overflow-hidden bg-dark"
    >
      {/* ── Image layers ─────────────────────────────────────────── */}
      {/* Current — always fully visible */}
      <div className="absolute inset-0 z-0">
        <div className="animate-kenburns w-full h-full" key={current}>
          <Image
            src={slides[current].src}
            alt="BACH construction project"
            fill
            className={`object-cover ${slides[current].position}`}
            priority
            quality={90}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Incoming — fades in on top */}
      {next !== null && (
        <div
          className="absolute inset-0 z-1 animate-fadein"
          style={{
            animationDuration: `${FADE_DURATION}ms`,
            animationFillMode: "forwards",
          }}
        >
          <Image
            src={slides[next].src}
            alt="BACH construction project"
            fill
            className={`object-cover ${slides[next].position}`}
            quality={90}
            sizes="100vw"
          />
        </div>
      )}

      {/* ── Overlays — cinematic bottom shelf ────────────────────── */}
      {/* Base tint — just enough to unify the image */}
      <div className="absolute inset-0 z-10 bg-black/20" />
      {/* Heavy bottom gradient — the "stage floor" that grounds the text */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.15) 50%, transparent 70%)",
        }}
      />
      {/* Left vignette — subtle directional light */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/15 via-transparent to-transparent" />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 md:pb-32">

        {/* Headline — responsive clamp, tighter on mobile */}
        <h1 className="font-bold text-white leading-[1.1] sm:leading-tight mb-3 sm:mb-4 md:mb-5 max-w-2xl
                        text-[clamp(1.75rem,6vw,4rem)]">
          Engineering. Construction. Delivered.
        </h1>

        {/* Subtext — slightly smaller on mobile for breathing room */}
        <p className="text-white/90 font-light leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl
                      text-[clamp(0.9rem,2.2vw,1.2rem)]">
          Civil engineering and integrated construction solutions across
          Nigeria and West Africa — executed safely, on time, and with certainty.
        </p>

        {/* CTA — larger touch area on mobile */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-white font-semibold tracking-wide group py-2
                     text-[clamp(1rem,2.2vw,1.35rem)]"
        >
          Get in Touch
          <span className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>

      {/* ── Slide dots — repositioned for mobile thumb reach ───── */}
      <div className="absolute bottom-5 sm:bottom-8 right-5 sm:right-8 z-20 flex gap-2.5 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === current) return;
              setNext(i);
              setTimeout(() => {
                setCurrent(i);
                setNext(null);
              }, FADE_DURATION);
            }}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "w-2.5 h-2.5 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
