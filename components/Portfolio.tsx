import Image from "next/image";

const projects = [
  {
    name: "Julius Berger",
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
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
            Selected Projects
          </h2>
          <div className="w-16 h-px bg-silver mb-4" />
          <p className="text-dark/60 max-w-xl">
            A selection of work delivered for leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative aspect-square overflow-hidden rounded-md"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-medium text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
