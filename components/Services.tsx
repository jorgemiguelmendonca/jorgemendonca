import { Home, Hammer, Wallet } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Soluções de Crédito à Sua Medida
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ajudamos a encontrar a melhor solução de financiamento para o seu
            projeto ou necessidade financeira.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* HABITAÇÃO */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B4C] text-white mb-6">
              <Home size={26} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Crédito Habitação
            </h3>

            <p className="text-gray-600 mt-3">
              Apoio completo para comprar casa ou transferir o seu crédito
              habitação para melhores condições.
            </p>

            <a
              href="/simulacao"
              className="inline-block mt-6 text-[#C5A059] font-semibold"
            >
              Pedir Simulação →
            </a>
          </div>

          {/* CONSTRUÇÃO */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B4C] text-white mb-6">
              <Hammer size={26} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Crédito Construção
            </h3>

            <p className="text-gray-600 mt-3">
              Financiamento estruturado para construir a sua casa ou desenvolver
              projetos imobiliários.
            </p>

            <a
              href="/simulacao"
              className="inline-block mt-6 text-[#C5A059] font-semibold"
            >
              Pedir Simulação →
            </a>
          </div>

          {/* CONSOLIDAÇÃO */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B4C] text-white mb-6">
              <Wallet size={26} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Consolidação de Créditos
            </h3>

            <p className="text-gray-600 mt-3">
              Agrupe os seus créditos num único pagamento e reduza o valor da
              sua prestação mensal.
            </p>

            <a
              href="/simulacao"
              className="inline-block mt-6 text-[#C5A059] font-semibold"
            >
              Pedir Simulação →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
