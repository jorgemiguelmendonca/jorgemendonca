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
    <section className="heroMaster relative w-full bg-[#F8F9FA] py-20">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-3 flex gap-16 items-center mt-10 justify-center">
        {/* LEFT SIDE */}
        <div className="text-center flex flex-col items-center justify-center">
          <span className="bg-[#1A2B4C]/80 text-[#c5a059] px-3 py-2 rounded-full text-sm font-medium">
            Intermediário de Crédito Registrado no Banco de Portugal
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#c5a059] mt-6 leading-tigh text-shadow-2xs text-shadow-black">
            Intermediação de crédito Unipessoal
          </h1>

          <p className="text-gray-100 mt-6 text-lg flex items-center text-center">
            Soluções de financiamento
          </p>

          <div className="flex flex-col items-center gap-3 mt-6 text-gray-200">
            <p>✔ Habitação</p>
            <p>✔ Construção</p>
            <p>✔ Empresas</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-8 py-4 rounded-lg transition cursor-pointer"
              onClick={() => router.push("/simulacao")}
            >
              Pedir Simulação
            </button>

            {/*<button
              className="border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 hover:text-[#c5a059] transition cursor-pointer"
              onClick={() => window.open("", "_blank")}
            >
              Falar com Especialista
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
