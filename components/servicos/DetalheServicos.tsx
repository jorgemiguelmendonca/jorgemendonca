import Image from "next/image";
import Link from "next/link";

export default function DetalheServicos() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Crédito Habitação */}

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-[360px]">
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
              Ajudamos a encontrar as melhores condições de financiamento para a
              compra da sua casa. Acompanhamos todo o processo desde a simulação
              inicial até à aprovação do crédito.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Financiamento para compra de imóvel</li>
              <li>• Transferência de crédito habitação</li>
              <li>• Análise personalizada do seu perfil</li>
              <li>• Apoio durante todo o processo</li>
            </ul>

            <Link
              href="#simulador"
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
              Financiamento para construção de moradias ou projetos
              imobiliários. Trabalhamos para encontrar a solução mais adequada
              ao seu projeto e capacidade financeira.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Financiamento para construção de casa</li>
              <li>• Apoio na estruturação do crédito</li>
              <li>• Acompanhamento técnico do processo</li>
              <li>• Liberação de capital por fases</li>
            </ul>

            <Link
              href="#simulador"
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
              Se possui vários créditos ativos, podemos ajudar a agrupá-los num
              único financiamento com uma prestação mensal mais equilibrada e
              adequada à sua realidade financeira.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Agrupamento de vários créditos</li>
              <li>• Redução da prestação mensal</li>
              <li>• Melhor gestão financeira</li>
              <li>• Análise personalizada do seu perfil</li>
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
