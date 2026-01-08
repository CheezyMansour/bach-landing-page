export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Headline + Body */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-dark mb-4 sm:mb-6">
            Two Decades of Precision.
          </h2>
          <p className="text-base sm:text-lg text-dark/70 leading-relaxed">
            We execute complex projects end-to-end — on time, to specification,
            and without compromise. Headquartered in Lagos, we partner with
            leading international brands on flagship retail spaces and
            large-scale developments.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
              20+
            </p>
            <p className="text-dark/60 text-xs sm:text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
              4
            </p>
            <p className="text-dark/60 text-xs sm:text-sm">Locations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
              50+
            </p>
            <p className="text-dark/60 text-xs sm:text-sm">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
              E2E
            </p>
            <p className="text-dark/60 text-xs sm:text-sm">Turnkey Execution</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-dark/80 italic">
            "We don't compete on price. We compete on precision, finish quality,
            and reliability."
          </p>
        </div>
      </div>
    </section>
  );
}
