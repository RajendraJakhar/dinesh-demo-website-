import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "../components/Services";
import Industries from "../components/Industries";
import WhiteLabel from "../components/WhiteLabel";
import Problem from "../components/Problem";
import GrowthSystem from "../components/GrowthSystem";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import CalendlyCTA from "../components/CalendlyCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Services />
      <Industries />
      <WhiteLabel />
      <Problem />
      <GrowthSystem />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
      <WhatsAppButton />
      <CalendlyCTA />
      <MobileStickyCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
