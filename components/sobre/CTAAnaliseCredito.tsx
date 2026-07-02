import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAAnaliseCredito() {
  return (
    <section className="py-20 px-6 text-[#1A2B4C] bg-white">
      <div className="max-w-5xl mx-auto text-center bg-gray-200 rounded-2xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          A Nossa Garantia
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Como intermediário responsável por serviços de crédito pessoal e para
          empresas, operamos com total conformidade regulamentar. Temos seguro
          de responsabilidade civil e trabalhamos exclusivamente com mutuantes
          certificados, garantindo a máxima segurança e proteção aos nossos
          clientes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/simulacao"
            className="flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b8934f] text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            Fale connosco
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
