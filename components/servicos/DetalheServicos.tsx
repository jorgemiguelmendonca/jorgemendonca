import Image from "next/image";
import Link from "next/link";

export default function DetalheServicos() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Crédito Habitação */}

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-90">
            <Image
              src="/credito-habitacao.png"
              alt="Crédito Habitação"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1A2B4C]">
              Crédito Habitação
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Financiamento para aquisição da sua casa própria nos Açores.
              Encontramos as melhores condições do mercado adaptadas ao seu
              perfil.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Taxas competitivas</li>
              <li>• Prazos até 40 anos</li>
              <li>• Sem custos de intermediação</li>
              <li>• Análise de múltiplas propostas</li>
            </ul>

            <Link
              href="/simulacao"
              className="inline-block mt-6 bg-[#C5A059] hover:bg-[#b8934f] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Pedir Simulação
            </Link>
          </div>
        </div>

        {/* Crédito Construção */}

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#1A2B4C]">
              Crédito Construção
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Soluções de financiamento para construção ou remodelação do seu
              imóvel. Acompanhamento em todas as fases do projeto.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Financiamento faseado</li>
              <li>• Análise técnica incluída</li>
              <li>• Apoio documental completo</li>
              <li>• Especialização em projetos açorianos</li>
            </ul>

            <Link
              href="/simulacao"
              className="inline-block mt-6 bg-[#C5A059] hover:bg-[#b8934f] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Pedir Simulação
            </Link>
          </div>

          <div className="relative w-full h-[360px] order-1 md:order-2">
            <Image
              src="/credito-construcao.png"
              alt="Crédito Construção"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Consolidação de Créditos */}

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-[360px]">
            <Image
              src="/credito-consolidacao.png"
              alt="Consolidação de Créditos"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1A2B4C]">
              Consolidação de Créditos
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Unifique todos os seus créditos numa única prestação mensal mais
              baixa. Reduza encargos e melhore a sua saúde financeira.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Prestação única reduzida</li>
              <li>• Maior liquidez mensal</li>
              <li>• Simplificação da gestão</li>
              <li>• Melhoria do perfil de crédito</li>
            </ul>

            <Link
              href="#simulador"
              className="inline-block mt-6 bg-[#C5A059] hover:bg-[#b8934f] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Pedir Simulação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
