export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] md:min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6">
            Where Craft Meets Design
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto tracking-wide">
            Premium construction, interior design, and bespoke furniture
            — built with precision, finished with purpose.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-primary/90 text-white px-8 py-3.5 rounded-md font-medium tracking-wide hover:bg-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
