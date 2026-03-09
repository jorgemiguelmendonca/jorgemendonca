"use client";

import { useState } from "react";

export default function Simulador() {
  const [valor, setValor] = useState(150000);
  const [prazo, setPrazo] = useState(30);
  const [tipo, setTipo] = useState("habitação");

  const taxa = 0.035 / 12; // 3.5% anual estimado
  const meses = prazo * 12;

  const prestacao = (valor * taxa) / (1 - Math.pow(1 + taxa, -meses));

  const enviarEmail = async () => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "credit-simulator",
        data: {
          tipo,
          valor,
          prazo,
          prestacao: prestacao.toFixed(2),
        },
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Simulação enviada com sucesso!");
    } else {
      alert("Erro ao enviar simulação.");
    }
  };
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simule o seu Crédito
          </h2>

          <p className="text-gray-500 mt-4">
            Descubra em poucos segundos uma estimativa da sua prestação mensal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* COLUNA FORM */}

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            {/* Tipo de crédito */}

            <label className="text-sm text-gray-600">Tipo de Crédito</label>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full mt-2 mb-6 p-3 border rounded-lg text-gray-700"
            >
              <option value="habitação">Crédito Habitação</option>
              <option value="construção">Crédito Construção</option>
              <option value="consolidação">Consolidação de Dívidas</option>
            </select>

            {/* VALOR */}

            <label className="text-sm text-gray-600">Valor Pretendido</label>

            <div className="text-xl font-semibold mt-1 mb-3 text-[#c5a059]">
              € {valor.toLocaleString()}
            </div>

            <input
              type="range"
              min="30000"
              max="1000000"
              step="5000"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="w-full mb-8"
            />

            {/* PRAZO */}

            <label className="text-sm text-gray-600">Prazo (anos)</label>

            <div className="text-xl font-semibold mt-1 mb-3 text-[#c5a059]">
              {prazo} anos
            </div>

            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={prazo}
              onChange={(e) => setPrazo(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* RESULTADO */}

          <div className="bg-white p-10 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Estimativa da Prestação
            </h3>

            <div className="text-4xl font-bold text-blue-900 mb-2">
              € {prestacao.toFixed(2)}
            </div>

            <p className="text-gray-500 mb-8">Valor mensal estimado</p>

            <ul className="space-y-2 text-gray-600 mb-8">
              <li>✔ Simulação gratuita</li>

              <li>✔ Análise personalizada</li>

              <li>✔ Sem compromisso</li>
            </ul>

            <button
              onClick={enviarEmail}
              className="cursor-pointer w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Pedir Análise Gratuita
            </button>

            <p className="text-xs text-gray-400 mt-4">
              Esta é apenas uma estimativa. A proposta final depende da análise
              da instituição financeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
