"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ServicosCTA() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "+351 ",
    email: "",
    tipo: "Crédito Pessoal",
    valor: "30000",
    prazo: "120",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      let numbers = value.replace(/\D/g, "");

      if (numbers.startsWith("351")) {
        numbers = numbers.slice(3);
      }

      numbers = numbers.slice(0, 9);

      let formatted = "+351";

      if (numbers.length > 0) {
        formatted += ` ${numbers.slice(0, 3)}`;
      }

      if (numbers.length > 3) {
        formatted += ` ${numbers.slice(3, 6)}`;
      }

      if (numbers.length > 6) {
        formatted += ` ${numbers.slice(6, 9)}`;
      }

      setForm(prev => ({
        ...prev,
        whatsapp: formatted,
      }));

      return;
    }

    if (name === "valor" || name === "renda") {
      const numeric = value.replace(/\D/g, "");

      setForm(prev => ({
        ...prev,
        [name]: numeric,
      }));

      return;
    }

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const valor = Number(form.valor || 0);
  const meses = Number(form.prazo || 120);
  const valorMinimo = 30000;
  const valorInvalido = valor > 0 && valor < valorMinimo;

  const jurosMensal = 0.01 / 12;

  const prestacao =
    valor > 0
      ? (
          (valor * jurosMensal) /
          (1 - Math.pow(1 + jurosMensal, -meses))
        ).toFixed(2)
      : "0";
  const totalPago = (Number(prestacao) * meses).toFixed(2);

  const jurosTotal = (Number(totalPago) - valor).toFixed(2);
  const enviarEmail = async () => {
    if (valor < 30000) {
      alert("O valor mínimo para solicitação é de 30.000 €.");
      return;
    }
    if (!form.nome || !form.email || !form.whatsapp || !form.valor) {
      alert("Preencha todos os campos obrigatórios.");
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
          data: {
            ...form,
            prestacao,
          },
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/obrigado-contacto");

        setForm({
          nome: "",
          email: "",
          whatsapp: "+351 ",
          tipo: "Crédito Pessoal",
          valor: "",
          prazo: "120",
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
            type="text"
            name="valor"
            placeholder="30.000 €"
            value={form.valor ? Number(form.valor).toLocaleString("pt-PT") : ""}
            onChange={handleChange}
            className={`w-full border rounded-lg p-3 text-[#1A2B4C]
  ${
    valorInvalido ? "border-red-500 focus:border-red-500" : "border-[#1A2B4C]"
  }`}
          />

          {valorInvalido && (
            <p className="text-red-500 text-sm mt-2">
              O valor mínimo para solicitação é de 30.000 €.
            </p>
          )}

          {/* PRAZO */}
          <label className="text-[#1A2B4C]">Prazo de Pagamento</label>

          <div className="mb-6">
            <input
              type="range"
              name="prazo"
              min={120}
              max={360}
              step={12}
              value={Number(form.prazo)}
              onChange={handleChange}
              className="w-full cursor-pointer accent-[#c5a059]"
            />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>120 meses</span>
              <span>360 meses</span>
            </div>

            <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center border">
              <p className="text-[#1A2B4C] font-semibold">Prazo Selecionado</p>

              <p className="text-2xl font-bold text-[#c5a059]">
                {form.prazo} meses
              </p>

              <p className="text-gray-600">({Number(form.prazo) / 12} anos)</p>

              <hr className="my-4" />

              <p className="text-[#1A2B4C] font-semibold">Prestação Estimada</p>

              <p className="text-3xl font-bold text-green-600">
                {Number(prestacao).toLocaleString("pt-PT", {
                  style: "currency",
                  currency: "EUR",
                })}
                <span className="text-lg text-gray-500"> / mês</span>
              </p>

              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>
                  Valor financiado:
                  <strong>
                    {" "}
                    {valor.toLocaleString("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </strong>
                </p>

                <p>
                  Total estimado pago:
                  <strong>
                    {" "}
                    {Number(totalPago).toLocaleString("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </strong>
                </p>

                <p>
                  Juros estimados:
                  <strong>
                    {" "}
                    {Number(jurosTotal).toLocaleString("pt-PT", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </strong>
                </p>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Simulação indicativa com taxa de referência de 1% ao ano.
              </p>
            </div>
          </div>

          {/* BOTÃO */}
          <button
            onClick={enviarEmail}
            disabled={valorInvalido}
            className={`w-full font-semibold py-4 rounded-lg mt-4 transition
${
  valorInvalido
    ? "bg-gray-300 cursor-not-allowed"
    : "bg-[#1A2B4C] hover:bg-[#16233f] text-white cursor-pointer"
}`}
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
