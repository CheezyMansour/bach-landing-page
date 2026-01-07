const services = [
  {
    title: "Turnkey Construction & Civil Works",
    description:
      "We deliver full turnkey solutions for commercial, retail, residential, and large-scale developments.",
    scope: [
      "Complete construction execution",
      "Structural and finishing works",
      "Fit-outs and refurbishments",
      "Infrastructure and external works",
    ],
    closing:
      "Bach handles complexity quietly. Clients receive clarity, structure, and certainty.",
  },
  {
    title: "Interior Design & Execution",
    description:
      "We design and execute high-end interiors for corporate, retail, and luxury environments.",
    scope: [
      "Concept design and detailing",
      "Full interior execution",
      "Execution of third-party designs",
      "Precision finishes and material coordination",
    ],
    closing:
      "Design revisions are limited by intention — our experience allows us to get it right early and execute decisively.",
  },
  {
    title: "Custom Furniture Manufacturing",
    description: "All furniture is custom-made in our own workshops.",
    scope: [
      "Retail fixtures",
      "Corporate and office furniture",
      "Custom kitchens and wardrobes",
      "Bespoke residential pieces",
    ],
    closing:
      "Complete control over quality, timeline, and finish — from sketch to installation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary/8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
            Our Capabilities
          </h2>
          <div className="w-16 h-px bg-silver mb-4" />
          <p className="text-dark/60 max-w-xl">
            End-to-end execution across construction, interiors, and manufacturing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 md:p-10 rounded-lg"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-dark/70 mb-6">{service.description}</p>

              {/* Scope */}
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6 list-disc list-inside">
                {service.scope.map((item) => (
                  <li key={item} className="text-dark/70 marker:text-primary">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Closing */}
              <p className="text-dark/60 italic">{service.closing}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
