const testimonials = [
  {
    quote:
      "BACH transformed our office space beyond our expectations. Professional team, on-time delivery, and exceptional attention to detail.",
    name: "Adebayo Johnson",
    role: "CEO, TechHub Lagos",
  },
  {
    quote:
      "From concept to completion, they handled our home renovation with care. The quality of work speaks for itself.",
    name: "Chioma Okonkwo",
    role: "Homeowner, Abuja",
  },
  {
    quote:
      "We've worked with BACH on three retail projects now. Consistent quality and reliable communication every time.",
    name: "Emeka Nwosu",
    role: "Operations Manager, StyleCo",
  },
];

export default function Testimonials() {
  // Show just the first testimonial for now (can rotate later)
  const featured = testimonials[0];

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        {/* Large quotation mark */}
        <span className="text-8xl md:text-9xl text-primary/20 font-serif leading-none">
          "
        </span>

        {/* Quote */}
        <blockquote className="-mt-12 md:-mt-16">
          <p className="text-2xl md:text-3xl lg:text-4xl text-dark/80 leading-relaxed mb-8">
            {featured.quote}
          </p>
          <footer>
            <cite className="not-italic">
              <span className="font-medium text-dark">{featured.name}</span>
              <span className="text-dark/50 mx-2">—</span>
              <span className="text-dark/50">{featured.role}</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
