import CTAAnaliseCredito from "@/components/sobre/CTAAnaliseCredito";
import HeroSobre from "@/components/sobre/HeroSobre";
import MissaoVisaoValores from "@/components/sobre/MissaoVIsaoValores";
import NossaHistoria from "@/components/sobre/NossaHistoria";
import NumerosEmpresa from "@/components/sobre/NumerosEmpresa";

export default function SobrePage() {
  return (
    <>
      <HeroSobre />
      <NossaHistoria />
      <MissaoVisaoValores />
      <CTAAnaliseCredito />
    </>
  );
}
