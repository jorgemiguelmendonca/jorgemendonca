"use client";

import { useState } from "react";

export default function ServicosCTA() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    tipo: "Habitação",
    valor: "",
    renda: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsapp = () => {
    if (!form.nome || !form.whatsapp || !form.valor) {
      alert("Preencha os campos obrigatórios.");
      return;
    }

    const mensagem = `Olá, gostaria de fazer uma pré-análise de crédito.

Nome: ${form.nome}
WhatsApp: ${form.whatsapp}
Tipo de crédito: ${form.tipo}
Valor pretendido: € ${form.valor}
Rendimento mensal: € ${form.renda}`;

    const url = `https://wa.me/351965710640?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/hero.png')] bg-cover bg-bottom py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-baseline">
        {/* TEXTO */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">
            Faça agora sua pré-análise de crédito
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
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />

          {/* WHATSAPP */}
          <input
            type="text"
            name="whatsapp"
            placeholder="Seu WhatsApp"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />

          {/* TIPO */}
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C]rounded-lg p-3 text-[#1A2B4C]"
          >
            <option>Habitação</option>
            <option>Construção</option>
            <option>Consolidação de Dívidas</option>
          </select>

          {/* VALOR */}
          <input
            type="number"
            name="valor"
            placeholder="Valor pretendido (€)"
            value={form.valor}
            onChange={handleChange}
            className="w-full mb-4 border border-[#1A2B4C] rounded-lg p-3 text-[#1A2B4C]"
          />

          {/* RENDA */}
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
            onClick={enviarWhatsapp}
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
