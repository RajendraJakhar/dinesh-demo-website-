import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "../components/Services";
import Problem from "../components/Problem";
import GrowthSystem from "../components/GrowthSystem";
import CaseStudies from "../components/CaseStudies";
import WhiteLabel from "../components/WhiteLabel";
import Testimonials from "../components/Testimonials";
import Stats from "@/components/Stats";
import Founder from "../components/Founder";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
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
      <Problem />
      <GrowthSystem />
      <CaseStudies />
      <WhiteLabel />
      <Testimonials />
      <Stats />
      <Founder />
      <ContactForm />
      <WhatsAppButton />
      <MobileStickyCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
