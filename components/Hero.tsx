"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const [creditType, setCreditType] = useState("Habitação");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!amount || !income) {
      alert("Por favor preencha o valor pretendido e o rendimento mensal.");
      return;
    }

    setLoading(true);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "hero",
        data: {
          creditType,
          amount,
          income,
        },
      }),
    });

    setLoading(false);

    if (response.ok) {
      alert("Pedido enviado com sucesso! Entraremos em contacto em breve.");

      setAmount("");
      setIncome("");
    } else {
      alert("Erro ao enviar pedido.");
    }
  }

  return (
    <section className="heroMaste relative w-full bg-[#F8F9FA] py-20">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-3 grid md:grid-cols-2 gap-16 items-center mt-10">
        {/* LEFT SIDE */}
        <div>
          <span className="bg-[#1A2B4C]/80 text-[#c5a059] px-3 py-2 rounded-full text-sm font-medium">
            Intermediário de Crédito Registrado no Banco de Portugal
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#c5a059] mt-6 leading-tigh text-shadow-2xs text-shadow-black">
            Soluções de Crédito entre 30.000€ e 23.000.000€
          </h1>

          <p className="text-gray-100 mt-6 text-lg">
            Intermediação profissional, segura e adaptada à realidade de Toda a
            Portugal.
          </p>

          <div className="flex flex-col gap-3 mt-6 text-gray-200">
            <p>✔ Serviço gratuito para o cliente</p>
            <p>✔ Resposta em 48 a 72 horas</p>
            <p>✔ Análise personalizada do seu perfil</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-8 py-4 rounded-lg transition cursor-pointer"
              onClick={() => router.push("/simulacao")}
            >
              Pedir Simulação
            </button>

            <button
              className="border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 hover:text-[#c5a059] transition cursor-pointer"
              onClick={() =>
                window.open("https://wa.me/351965710640", "_blank")
              }
            >
              Falar com Especialista
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#1A2B4C]">
            Simule o seu Crédito
          </h3>

          <p className="text-gray-500 mb-6">
            Pedido rápido em menos de 2 minutos
          </p>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Tipo de Crédito
            </label>

            <select
              value={creditType}
              onChange={(e) => setCreditType(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 text-gray-600"
            >
              <option>Habitação</option>
              <option>Construção</option>
              <option>Consolidação de Dívidas</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Valor Pretendido (€)
            </label>

            <input
              type="number"
              placeholder="Ex: 150000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 text-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Rendimento Mensal (€)
            </label>

            <input
              type="number"
              placeholder="Ex: 2500"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg p-3 text-gray-600"
            />
          </div>

          <button
            className="w-full bg-[#1A2B4C] hover:bg-[#16233f] text-white font-semibold py-4 rounded-lg mt-4 transition cursor-pointer"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Receber Simulação Gratuita"}
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Os seus dados são protegidos e usados apenas para análise de
            crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
