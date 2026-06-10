"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Simulacao() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    creditType: "",
    amount: "",
    income: "",
    name: "",
    phone: "",
    email: "",
  });

  function updateField(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function next() {
    setStep(prev => prev + 1);
  }

  function back() {
    setStep(prev => prev - 1);
  }

  const progress = (step / 6) * 100;

  const sendSimulation = async () => {
    if (!canProceed()) return;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "simulacao",
          data: form,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/obrigado-simulacao");

        setForm({
          creditType: "",
          amount: "",
          income: "",
          name: "",
          phone: "",
          email: "",
        });

        setStep(1);
      } else {
        alert("Erro ao enviar simulação.");
      }
    } catch (error) {
      alert("Erro ao enviar simulação.");
    }
  };
  const canProceed = () => {
    if (step === 1) return form.name !== "";
    if (step === 2) return form.email !== "";
    if (step === 3) return form.phone !== "";
    if (step === 4) return form.creditType !== "";
    if (step === 5) return form.amount !== "";
    if (step === 6) return form.income !== "";

    return false;
  };
  const optionStyle = (selected: boolean) =>
    `border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
  ${selected ? "border-[#C5A059] bg-[#f9f6ef]" : "hover:bg-gray-100"}`;
  function OptionButton({
    label,
    value,
    field,
  }: {
    label: string;
    value: string;
    field: keyof typeof form;
  }) {
    const selected = form[field] === value;

    return (
      <button
        onClick={() => updateField(field, value)}
        className={optionStyle(selected)}
      >
        {label}

        {selected && (
          <span className="text-[#C5A059] font-bold text-lg">✓</span>
        )}
      </button>
    );
  }
  return (
    <section className=" bg-[linear-gradient(rgba(10,20,40,0.75),rgba(10,20,40,0.75)),url('/hero.png')] bg-cover bg-center  min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {/* Progress */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Passo {step} de 6</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: `${progress}%` }}
              className="bg-[#1A2B4C] h-2 rounded-full transition-all"
            />
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu nome?
            </h2>

            <input
              placeholder="Nome completo"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => updateField("name", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.name}
                className={`px-6 py-2 rounded-lg text-white ${
                  form.name
                    ? "bg-[#1A2B4C] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu email?
            </h2>

            <input
              placeholder="Email"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => updateField("email", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={next}
                className="px-6 py-2 rounded-lg text-white bg-[#C5A059]"
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu telefone?
            </h2>

            <input
              placeholder="Telefone"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={e => updateField("phone", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.phone}
                className={`px-6 py-2 rounded-lg text-white ${
                  form.phone
                    ? "bg-[#1A2B4C] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual tipo de crédito pretende?
            </h2>

            <div className="flex flex-col gap-3">
              {["Crédito Pessoal", "Crédito para Empresas"].map(type => (
                <button
                  key={type}
                  onClick={() => updateField("creditType", type)}
                  className={`border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
          ${
            form.creditType === type
              ? "border-[#C5A059] bg-[#f9f6ef]"
              : "hover:bg-gray-100"
          }`}
                >
                  {type}

                  {form.creditType === type && (
                    <span className="text-[#C5A059] font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <div />

              <button
                onClick={next}
                disabled={!form.creditType}
                className={`px-6 py-2 rounded-lg text-white
        ${
          form.creditType
            ? "bg-[#1A2B4C] cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual valor pretende?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "30.000€",
                "30.000€ - 100.000€",
                "100.000€ - 250.000€",
                "250.000€ - 500.000€",
                "Até 23.000.000€",
              ].map(value => (
                <button
                  key={value}
                  onClick={() => updateField("amount", value)}
                  className={`border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
          ${
            form.amount === value
              ? "border-[#C5A059] bg-[#f9f6ef]"
              : "hover:bg-gray-100"
          }`}
                >
                  {value}

                  {form.amount === value && (
                    <span className="text-[#C5A059] font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.amount}
                className={`px-6 py-2 rounded-lg text-white
        ${form.amount ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Prazo desejado
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "12 meses",
                "12 meses - 24 meses",
                "24 meses - 36 meses",
                "36 meses - 48 meses",
              ].map(income => (
                <OptionButton
                  key={income}
                  label={income}
                  value={income}
                  field="income"
                />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={sendSimulation}
                disabled={!form.income}
                className={`px-6 py-2 rounded-lg text-white
        ${form.income ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
              >
                Enviar Simulação
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
