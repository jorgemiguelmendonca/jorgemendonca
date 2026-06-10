"use client";

import { useState } from "react";

export default function ServicosCTA() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipo: "Crédito Pessoal",
    valor: "",
    renda: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarEmail = async () => {
    if (!form.nome || !form.whatsapp || !form.valor) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "pre-analise",
          data: form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Pedido enviado com sucesso!");

        setForm({
          nome: "",
          email: "",
          whatsapp: "",
          tipo: "Cŕedito Pessoal",
          valor: "",
          renda: "",
        });
      } else {
        alert("Erro ao enviar pedido.");
      }
    } catch (error) {
      alert("Erro ao enviar pedido.");
    }
  };

  return (
    <section className="bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/hero.png')] bg-cover bg-bottom py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-baseline">
        {/* TEXTO */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 text-[#c5a059]">
            Aproveite as soluções de crédito entre 30.000€ e 23.000.000€
          </h2>

          <p className="text-lg text-white mb-8">
            Descubra rapidamente quanto você pode conseguir de crédito.
          </p>

          <div className="flex flex-col gap-2 text-white text-sm">
            <span>✔ Análise rápida</span>
            <span>✔ Sem compromisso</span>
            <span>✔ Atendimento especializado</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold text-[#1A2B4C]">
            Simule o seu Crédito
          </h3>

          <p className="text-gray-500 mb-6">
            Pedido rápido em menos de 2 minutos
          </p>

          {/* NOME */}
          <label htmlFor="nome" className="text-[#1A2B4C]">
            Insira seu nome
          </label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />
          <label className="text-[#1A2B4C]">Endereço de Email</label>

          <input
            type="email"
            name="email"
            placeholder="exemplo@email.pt"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />
          {/* WHATSAPP */}
          <label htmlFor="nome" className="text-[#1A2B4C]">
            Insira seu WhatsApp
          </label>
          <input
            type="tel"
            name="whatsapp"
            placeholder="+351 912 345 678"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
            pattern="^\+351\s?[0-9]{9}$"
          />

          {/* TIPO */}
          <label htmlFor="nome" className="text-[#1A2B4C]">
            Objetivo de cŕedito
          </label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          >
            <option>Crédito Pessoal</option>
            <option>Crédito Empresa</option>
          </select>

          {/* VALOR */}
          <label htmlFor="nome" className="text-[#1A2B4C]">
            Valor pretendido
          </label>
          <input
            type="number"
            name="valor"
            placeholder="Minimo 30.0000€"
            value={form.valor}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />

          {/* RENDA */}
          <label htmlFor="nome" className="text-[#1A2B4C]">
            Rendimento mensal
          </label>
          <input
            type="number"
            name="renda"
            placeholder="Rendimento mensal (€)"
            value={form.renda}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />

          {/* BOTÃO */}
          <button
            onClick={enviarEmail}
            className="w-full bg-[#1A2B4C] hover:bg-[#16233f] text-white font-semibold py-4 rounded-lg mt-4 transition cursor-pointer"
          >
            Receber Simulação Gratuita
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
