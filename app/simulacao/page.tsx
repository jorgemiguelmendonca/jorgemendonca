"use client";

import { useState } from "react";

export default function Simulacao() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    creditType: "",
    amount: "",
    income: "",
    employment: "",
    name: "",
    email: "",
    phone: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setStep((prev) => prev + 1);
  }

  function back() {
    setStep((prev) => prev - 1);
  }

  const progress = (step / 5) * 100;

  const sendToWhatsApp = () => {
    const phone = "555596588678"; // número do dono do site (com código do país)

    const message = `
*Nova Simulação de Crédito*

Tipo de Crédito: ${form.creditType}

Valor Pretendido: €${form.amount}

Rendimento Mensal: €${form.income}

Situação Profissional: ${form.employment}

Nome: ${form.name}
Email: ${form.email}
Telefone: ${form.phone}
  `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const canProceed = () => {
    if (step === 1) return form.creditType !== "";
    if (step === 2) return form.amount !== "";
    if (step === 3) return form.income !== "";
    if (step === 4) return form.employment !== "";
    if (step === 5)
      return form.name !== "" && form.email !== "" && form.phone !== "";

    return false;
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {/* Progress */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Passo {step} de 5</p>

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
              Qual tipo de crédito pretende?
            </h2>

            <div className="flex flex-col gap-3">
              {["Habitação", "Construção", "Consolidação"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    updateField("creditType", type);
                    next();
                  }}
                  className="border p-4 rounded-lg hover:bg-gray-100 text-left text-[#1A2B4C] cursor-pointer"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual valor pretende?
            </h2>

            <input
              type="number"
              placeholder="Ex: 150000"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={(e) => updateField("amount", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg text-white ${
                  canProceed()
                    ? "bg-[#1A2B4C] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
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
              Qual o seu rendimento mensal?
            </h2>

            <input
              type="number"
              placeholder="Ex: 2500"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={(e) => updateField("income", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg text-white ${
                  canProceed()
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
              Qual sua situação profissional?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Empregado",
                "Trabalhador Independente",
                "Empresário",
                "Outro",
              ].map((job) => (
                <button
                  key={job}
                  onClick={() => {
                    updateField("employment", job);
                    next();
                  }}
                  className="border p-4 rounded-lg hover:bg-gray-100 text-left text-[#1A2B4C] cursor-pointer"
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Para finalizar, seus dados
            </h2>

            <div className="flex flex-col gap-4">
              <input
                placeholder="Nome"
                className="border p-3 rounded-lg text-[#1A2B4C]"
                onChange={(e) => updateField("name", e.target.value)}
              />

              <input
                placeholder="Email"
                className="border p-3 rounded-lg text-[#1A2B4C]"
                onChange={(e) => updateField("email", e.target.value)}
              />

              <input
                placeholder="Telefone"
                className="border p-3 rounded-lg text-[#1A2B4C]"
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={sendToWhatsApp}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg text-white ${
                  canProceed()
                    ? "bg-[#C5A059] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
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
