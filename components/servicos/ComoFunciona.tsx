"use client";

import { FileText, Search, CheckCircle } from "lucide-react";

export default function ComoFunciona() {
  const passos = [
    {
      icon: FileText,
      titulo: "1. Peça a sua simulação",
      descricao:
        "Preencha o formulário de simulação com algumas informações básicas sobre o crédito que procura.",
    },
    {
      icon: Search,
      titulo: "2. Análise do seu perfil",
      descricao:
        "Analisamos o seu perfil financeiro e procuramos as melhores soluções junto das nossas instituições parceiras.",
    },
    {
      icon: CheckCircle,
      titulo: "3. Aprovação e acompanhamento",
      descricao:
        "Acompanhamos todo o processo até à aprovação do crédito e formalização do contrato.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Como Funciona o Processo
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            O nosso processo é simples, rápido e transparente. Ajudamos a
            encontrar a melhor solução de crédito para si.
          </p>
        </div>

        {/* Passos */}

        <div className="grid md:grid-cols-3 gap-10">
          {passos.map((passo, index) => {
            const Icon = passo.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B4C]/10 mb-6">
                  <Icon size={28} className="text-[#1A2B4C]" />
                </div>

                <h3 className="text-xl font-semibold text-[#1A2B4C]">
                  {passo.titulo}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {passo.descricao}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
