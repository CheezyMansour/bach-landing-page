export default function WhyChooseUs() {
  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl text-center mb-6">
          Building Excellence Since 1982.
        </h2>

        {/* Body text */}
        <p className="text-lg text-dark/70 text-center max-w-3xl mx-auto mb-12">
          BACH is a licensed and insured contracting company serving Lagos and
          Abuja. We specialize in renovations, new construction, and repairs.
          Our team brings X years of combined experience to every project.
        </p>

        {/* Trust points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="font-medium">Licensed & Insured</p>
          </div>
          <div className="text-center">
            <p className="font-medium">20+ Years Experience</p>
          </div>
          <div className="text-center">
            <p className="font-medium">Free Estimates</p>
          </div>
          <div className="text-center">
            <p className="font-medium">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
