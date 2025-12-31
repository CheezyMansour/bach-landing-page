import Image from "next/image";

const services = [
  { name: "Construction", image: "/services/construction-service.avif" },
  { name: "Interior Design", image: "/services/interior-design-service.avif" },
  { name: "Renovation", image: "/services/renovations-service.avif" },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="relative aspect-4/3 overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
              {/* Darker overlay across entire image */}
              <div className="absolute inset-0 bg-dark/40" />
              {/* Centered text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl text-white">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
