export default function CTA() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 sm:mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-base sm:text-lg text-dark/70 mb-6 sm:mb-8">
          Get in touch today for a free consultation and quote.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-base sm:text-lg transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
