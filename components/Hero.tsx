import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/hero-image-luxury.avif"
        alt="Luxury interior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6">
            Premium Contracting. Executed Without Compromise.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-xl">
            Turnkey construction, interior execution, and custom furniture
            manufacturing for brands that demand perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium text-center"
            >
              Book a Site Visit
            </a>
            <a
              href="#portfolio"
              className="border border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-md font-medium text-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
