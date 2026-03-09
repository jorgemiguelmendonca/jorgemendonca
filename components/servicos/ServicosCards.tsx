"use client";

import { Home, Hammer, Wallet } from "lucide-react";
import Link from "next/link";

export default function ServicosCards() {
  const servicos = [
    {
      icon: Home,
      titulo: "Crédito Habitação",
      descricao:
        "Financiamento para compra de casa, transferência de crédito ou renegociação das condições do seu empréstimo.",
    },
    {
      icon: Hammer,
      titulo: "Crédito Construção",
      descricao:
        "Soluções de financiamento para construção de moradias ou projetos imobiliários com acompanhamento completo.",
    },
    {
      icon: Wallet,
      titulo: "Consolidação de Créditos",
      descricao:
        "Agrupe vários créditos numa única prestação mensal e reduza a sua taxa de esforço.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Soluções de Crédito Disponíveis
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trabalhamos com diferentes soluções de financiamento para ajudar
            famílias e empresas a encontrar as melhores condições de crédito.
          </p>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => {
            const Icon = servico.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                {/* Icon */}

                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#1A2B4C]/10 mb-6">
                  <Icon size={28} className="text-[#1A2B4C]" />
                </div>

                {/* Título */}

                <h3 className="text-xl font-semibold text-[#1A2B4C]">
                  {servico.titulo}
                </h3>

                {/* Descrição */}

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {servico.descricao}
                </p>

                {/* Botão */}

                <Link
                  href="#simulador"
                  className="inline-block mt-6 text-[#C5A059] font-medium hover:underline"
                >
                  Simular Crédito →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
