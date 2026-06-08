"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewHero() {
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
    <section className="heroMaster relative md:min-h-[80vh] w-full py-20">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

      <div className="relative max-w-300 mx-auto mt-20 px-3 flex gap-16 items-center flex-col justify-center">
        {/* LEFT SIDE */}
        <div className="text-center flex flex-col items-center justify-center mt-20">
          <h1 className="text-4xl md:text-7xl font-bold text-[#c5a059] m-auto leading-tigh text-shadow-2xs text-shadow-black">
            Soluções de Crédito entre 30.000€ e 23.000.000€
          </h1>

          <p className="text-gray-100 mt-6  md:text-2xl  text-lg flex items-center text-center">
            Intermediação profissional, segura e adaptada à realidade de Toda a
            Portugal.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-8 py-4 rounded-lg transition cursor-pointer"
              href="https://wa.me/553135828296"
              target="_blank"
            >
              Pedir Simulação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
