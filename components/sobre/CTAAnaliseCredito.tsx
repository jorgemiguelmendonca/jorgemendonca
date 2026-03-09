import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAAnaliseCredito() {
  return (
    <section className="py-20 px-6 bg-[#1A2B4C] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para encontrar a melhor solução de crédito?
        </h2>

        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10">
          Nossa equipa analisa o seu perfil financeiro e procura as melhores
          condições junto das instituições parceiras. O serviço é totalmente
          gratuito para si.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/#simulador"
            className="flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b8934f] text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Fazer Simulação Gratuita
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contactos"
            className="flex items-center justify-center border border-white/40 hover:bg-white hover:text-[#1A2B4C] px-8 py-4 rounded-lg transition"
          >
            Falar com um especialista
          </Link>
        </div>
      </div>
    </section>
  );
}
