import Hero from "../components/Hero";
import FAQ from "@/components/FAQ";
import ServicosCTA from "@/components/servicos/ServicosCTA";

import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicosCTA />
      <FAQ />
    </>
  );
}
