import ComoFunciona from "@/components/servicos/ComoFunciona";
import DetalheServicos from "@/components/servicos/DetalheServicos";

import ServicosCTA from "@/components/servicos/ServicosCTA";
import ServicosHero from "@/components/servicos/ServicosHero";

export default function ServicosPage() {
  return (
    <>
      <ServicosHero />
      <DetalheServicos />
      <ComoFunciona />
      <ServicosCTA />
    </>
  );
}
