import Hero from "../components/Hero";
import FAQ from "@/components/FAQ";
import CreditSimulator from "@/components/CreditSimulator";
import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CreditSimulator />
      <FAQ />
    </>
  );
}
