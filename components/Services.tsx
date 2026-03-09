"use client";

import { Home, Wallet, Building } from "lucide-react";

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITULO */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Os Nossos Serviços
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Soluções de crédito personalizadas para cada necessidade, com
            acompanhamento profissional e transparente em todas as etapas do
            processo.
          </p>
        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}

          <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-6">
              <Home size={22} />
            </div>

            <h3 className="text-lg font-semibold text-[#1A2B4C] mb-4">
              Crédito Habitação
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Financiamento para aquisição da sua casa própria nos Açores.
              Encontramos as melhores condições do mercado adaptadas ao seu
              perfil.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Taxas competitivas
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Prazos até 40 anos
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Sem custos de
                intermediação
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Análise de múltiplas
                propostas
              </li>
            </ul>
          </div>

          {/* CARD 2 */}

          <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-6">
              <Building size={22} />
            </div>

            <h3 className="text-lg font-semibold text-[#1A2B4C] mb-4">
              Crédito para Construção
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Soluções de financiamento para construção ou remodelação do seu
              imóvel. Acompanhamento em todas as fases do projeto.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Financiamento faseado
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Análise técnica
                incluída
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Apoio documental
                completo
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Especialização em
                projetos açorianos
              </li>
            </ul>
          </div>

          {/* CARD 3 */}

          <div className="bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-6">
              <Wallet size={22} />
            </div>

            <h3 className="text-lg font-semibold text-[#1A2B4C] mb-4">
              Consolidação de Créditos
            </h3>

            <p className="text-gray-500 text-sm mb-6">
              Unifique todos os seus créditos numa única prestação mensal mais
              baixa. Reduza encargos e melhore a sua saúde financeira.
            </p>

            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Prestação única
                reduzida
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Maior liquidez mensal
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Simplificação da
                gestão
              </li>

              <li className="flex items-center gap-2">
                <span className="text-[#C5A059]">•</span> Melhoria do perfil de
                crédito
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 bg-[#1A2B4C] rounded-2xl py-14 px-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-3">Pronto para avançar?</h3>

          <p className="text-gray-300 mb-8">
            Solicite uma simulação gratuita e sem compromisso
          </p>

          <a
            href="#simulador"
            className="bg-[#C5A059] hover:bg-[#b08f4d] px-8 py-4 rounded-lg font-semibold transition"
          >
            Pedir Simulação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
