"use client";

import { useState } from "react";

export default function ServicosCTA() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    valor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsapp = () => {
    const mensagem = `Olá, gostaria de fazer uma pré-análise de crédito.

Nome: ${form.nome}
WhatsApp: ${form.whatsapp}
Valor desejado: R$ ${form.valor}`;

    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTO */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">
            Faça agora sua pré-análise de crédito
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Descubra rapidamente quanto você pode conseguir de crédito. Nossa
            equipe analisa seu perfil e entra em contato com as melhores
            condições disponíveis.
          </p>

          <div className="flex flex-col gap-2 text-blue-200 text-sm">
            <span>✔ Análise rápida</span>
            <span>✔ Sem compromisso</span>
            <span>✔ Atendimento especializado</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Solicitar pré-análise
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="valor"
              placeholder="Valor desejado"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={enviarWhatsapp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Fazer Pré-Análise
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Seus dados são protegidos e usados apenas para análise de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
