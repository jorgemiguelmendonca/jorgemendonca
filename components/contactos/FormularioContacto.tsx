"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function FormularioContato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const mensagem = `Olá, gostaria de obter mais informações.

Nome: ${form.nome}
Email: ${form.email}
Telefone: ${form.telefone}

Mensagem:
${form.mensagem}`;

    const url = `https://wa.me/351965710640?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    // limpar formulário
    setForm({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    });
  }

  return (
    <section className="py-20 px-6 bg-gray-50 bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/contacto.png')] bg-cover bg-top">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-baseline">
        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold text-[#c5a059] mb-6 uppercase">
            Fale com um especialista em crédito
          </h2>

          <p className="text-white mb-6">
            Se preferir, envie-nos uma mensagem através do formulário. A nossa
            equipa irá analisar o seu pedido e entrar em contacto o mais
            rapidamente possível.
          </p>

          <ul className="space-y-3 text-gray-100">
            <li>✔ Resposta rápida</li>
            <li>✔ Análise gratuita do seu perfil</li>
            <li>✔ Atendimento personalizado</li>
            <li>✔ Total confidencialidade dos seus dados</li>
          </ul>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-xl shadow-lg border space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A2B4C]">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A2B4C]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A2B4C]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A2B4C]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A2B4C]">
              Telefone
            </label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A2B4C]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#1A2B4C]">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C5A059] outline-none text-[#1A2B4C]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C5A059] hover:bg-[#b8934f] text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
