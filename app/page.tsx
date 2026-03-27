import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyBach from "@/components/WhyBach";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyBach />
      <CTA />
      <Footer />
    </>
  );
}
