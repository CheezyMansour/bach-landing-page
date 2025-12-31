import Image from "next/image";

const projects = [
  {
    name: "Nike Store",
    location: "Lagos, Nigeria",
    image: "/portfolio/storefront-1.avif",
  },
  {
    name: "Adidas Store",
    location: "Lagos, Nigeria",
    image: "/portfolio/storefront-2.avif",
  },
  {
    name: "Refurbished Bathroom",
    location: "Abuja, Nigeria",
    image: "/portfolio/bathroom-portfolio.avif",
  },
  {
    name: "Refurbished Kitchen",
    location: "Lagos, Nigeria",
    image: "/portfolio/kitchen-refurbished-portfolio.avif",
  },
  {
    name: "Renovated Apartment",
    location: "Abuja, Nigeria",
    image: "/portfolio/renovated-apartment-portfolio.avif",
  },
  {
    name: "Custom Sofa Design",
    location: "Lagos, Nigeria",
    image: "/portfolio/beautiful-sofa-portfolio.avif",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            OUR WORK
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="relative aspect-3/4 overflow-hidden rounded-lg"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg text-white mb-1">{project.name}</h3>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
