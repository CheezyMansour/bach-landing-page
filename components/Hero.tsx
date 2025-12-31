import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Quality Construction You Can Trust
            </h1>
            <p className="text-lg text-dark/70 mb-8">
              Residential and commercial contracting services in Lagos and
              Abuja. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/hero-img.avif"
              alt="Construction project"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
