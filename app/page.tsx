import FAQ from "@/components/FAQ";
import NewHero from "@/components/NewHero";
import ServicosCTA from "@/components/servicos/ServicosCTA";

import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <NewHero />
      <WhyChooseUs />
      <ServicosCTA />
    </>
  );
}
