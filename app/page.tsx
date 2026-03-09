import TrustSection from "@/components/TrustSection";
import Hero from "../components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CreditSimulator from "@/components/CreditSimulator";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ComoFunciona />
      <Services />
      <Testimonials />
      <FAQ />
      <CreditSimulator />
    </>
  );
}
