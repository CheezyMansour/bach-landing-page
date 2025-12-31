import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background Image */}
      <Image src="/why-choose-us.avif" alt="" fill className="object-cover" />
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-primary/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center mb-6 text-white">
          Building Excellence Since 1987
        </h2>

        <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-12">
          BACH is a licensed and insured contracting company serving Lagos and
          Abuja. We specialize in renovations, new construction, and repairs.
          Our team brings X years of combined experience to every project.
        </p>

        {/* Trust points - keep as you have them */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* ... your trust points with icons ... */}
        </div>
      </div>
    </section>
  );
}
