"use client";

import { Shield, Award, CheckSquare } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Porquê escolher-nos?
          </h2>

          <p className="text-gray-500 mt-4">
            Compromisso, transparência e conhecimento profundo da realidade
            açoriana
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#1A2B4C] text-[#c5a059]  rounded-lg mb-4">
              <Shield size={22} />
            </div>

            <h3 className="font-semibold text-[#1A2B4C] mb-2">
              Regulamentação
            </h3>

            <p className="text-gray-500 text-sm">
              Totalmente regulado e registado no Banco de Portugal, garantindo
              total segurança e conformidade legal.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#1A2B4C] text-[#c5a059]  rounded-lg mb-4">
              <Award size={22} />
            </div>

            <h3 className="font-semibold text-[#1A2B4C] mb-2">
              Experiência Local
            </h3>

            <p className="text-gray-500 text-sm">
              Conhecimento profundo do mercado açoriano e da ilha de São Jorge,
              oferecendo soluções adaptadas à realidade local.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#1A2B4C] text-[#c5a059]  rounded-lg mb-4">
              <CheckSquare size={22} />
            </div>

            <h3 className="font-semibold text-[#1A2B4C] mb-2">
              Acompanhamento Personalizado
            </h3>

            <p className="text-gray-500 text-sm">
              Seguimos todo o processo do seu crédito, desde a simulação até à
              assinatura, com total transparência.
            </p>
          </div>
        </div>

        {/* REGULATORY CARD */}

        <div className="border border-[#C5A059] rounded-2xl p-8 bg-white">
          <div className="flex gap-4 align-baseline">
            <div className="w-12 h-12 flex items-center justify-center bg-[#c5a059] text-[#1a2b4c] rounded-lg mb-4">
              <Shield size={22} />
            </div>

            <div className="flex flex-col gap-0  justify-center ">
              <h3 className="text-lg font-semibold text-[#1A2B4C]">
                Intermediário de Crédito Vinculado
              </h3>

              <p className="text-gray-600 mb-6">
                Registado no Banco de Portugal sob o n.º{" "}
                <strong>0001707</strong>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#c5a059] text-[#1a2b4c] rounded-lg mb-4">
                <Award size={22} />
              </div>
              <div>
                <p className="font-medium text-[#1A2B4C]">
                  Mutuantes com Contrato de Vinculação
                </p>
                <p>Cofidis e Bicredit</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#c5a059] text-[#1a2b4c] rounded-lg mb-4">
                <CheckSquare size={22} />
              </div>
              <div className="">
                <p className="font-medium text-[#1A2B4C]">
                  Seguro de Responsabilidade Civil
                </p>
                <p>Hiscox S.A. (Apólice 2522203)</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            Isento de receção de valores de clientes conforme o Art.º 46.º do
            RJIC.
          </p>
        </div>
      </div>
    </section>
  );
}
