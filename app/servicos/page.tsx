import ComoFunciona from "@/components/servicos/ComoFunciona";
import DetalheServicos from "@/components/servicos/DetalheServicos";
import ServicosCards from "@/components/servicos/ServicosCards";
import ServicosCTA from "@/components/servicos/ServicosCTA";
import ServicosHero from "@/components/servicos/ServicosHero";

export default function ServicosPage() {
  return (
    <>
      <ServicosHero />
      <ServicosCards />
      <DetalheServicos />
      <ComoFunciona />
      <ServicosCTA />
    </>
  );
}
