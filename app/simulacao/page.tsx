"use client";

import { useState } from "react";

export default function Simulacao() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    creditType: "",
    amount: "",
    employment: "",
    income: "",
    ownCapital: "",
    propertyLocation: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
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

  const progress = (step / 10) * 100;

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
        alert("Simulação enviada com sucesso!");

        setForm({
          creditType: "",
          amount: "",
          employment: "",
          income: "",
          ownCapital: "",
          propertyLocation: "",
          timeline: "",
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
    if (step === 1) return form.creditType !== "";
    if (step === 2) return form.amount !== "";
    if (step === 3) return form.employment !== "";
    if (step === 4) return form.income !== "";
    if (step === 5) return form.ownCapital !== "";
    if (step === 6) return form.propertyLocation !== "";
    if (step === 7) return form.timeline !== "";
    if (step === 8) return form.name !== "";
    if (step === 9) return form.phone !== "";
    return true;
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
          <p className="text-sm text-gray-500 mb-2">Passo {step} de 10</p>

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
              {[
                "Crédito Habitação",
                "Crédito para Construção",
                "Consolidação de Créditos",
                "Outro",
              ].map((type) => (
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

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual valor pretende?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Até 50.000€",
                "50.000€ - 100.000€",
                "100.000€ - 250.000€",
                "250.000€ - 500.000€",
                "Mais de 500.000€",
              ].map((value) => (
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

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual sua situação profissional?
            </h2>

            <div className="flex flex-col gap-3">
              {["Conta de Outrem", "Conta Própria", "Reformado", "Outra"].map(
                (job) => (
                  <OptionButton
                    key={job}
                    label={job}
                    value={job}
                    field="employment"
                  />
                ),
              )}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.employment}
                className={`px-6 py-2 rounded-lg text-white
        ${form.employment ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
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
              Qual é o seu rendimento mensal?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Até 1.000€",
                "1.000€ - 2.000€",
                "2.000€ - 3.000€",
                "3.000€ - 5.000€",
                "Mais de 5.000€",
              ].map((income) => (
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
                onClick={next}
                disabled={!form.income}
                className={`px-6 py-2 rounded-lg text-white
        ${form.income ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
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
              Possui capitais próprios para entrada?
            </h2>

            <div className="flex flex-col gap-3">
              {["Sim", "Não", "Parcialmente"].map((value) => (
                <OptionButton
                  key={value}
                  label={value}
                  value={value}
                  field="ownCapital"
                />
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={next}
                disabled={!form.ownCapital}
                className={`px-6 py-2 rounded-lg text-white
        ${form.ownCapital ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
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
              Localização do imóvel e prazo
            </h2>

            <div className="flex flex-col gap-4">
              <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#C5A059] focus:outline-none text-lg bg-white text-[#1A2B4C]">
                <option value="">Selecione uma opção...</option>
                <option value="Aveiro">Aveiro</option>
                <option value="Beja">Beja</option>
                <option value="Braga">Braga</option>
                <option value="Bragança">Bragança</option>
                <option value="Castelo Branco">Castelo Branco</option>
                <option value="Coimbra">Coimbra</option>
                <option value="Évora">Évora</option>
                <option value="Faro">Faro</option>
                <option value="Guarda">Guarda</option>
                <option value="Leiria">Leiria</option>
                <option value="Lisboa">Lisboa</option>
                <option value="Portalegre">Portalegre</option>
                <option value="Porto">Porto</option>
                <option value="Santarém">Santarém</option>
                <option value="Setúbal">Setúbal</option>
                <option value="Viana do Castelo">Viana do Castelo</option>
                <option value="Vila Real">Vila Real</option>
                <option value="Viseu">Viseu</option>
                <option value="Ilha de São Miguel (Açores)">
                  Ilha de São Miguel (Açores)
                </option>
                <option value="Ilha Terceira (Açores)">
                  Ilha Terceira (Açores)
                </option>
                <option value="Ilha de São Jorge (Açores)">
                  Ilha de São Jorge (Açores)
                </option>
                <option value="Ilha do Pico (Açores)">
                  Ilha do Pico (Açores)
                </option>
                <option value="Ilha do Faial (Açores)">
                  Ilha do Faial (Açores)
                </option>
                <option value="Ilha Graciosa (Açores)">
                  Ilha Graciosa (Açores)
                </option>
                <option value="Ilha de Santa Maria (Açores)">
                  Ilha de Santa Maria (Açores)
                </option>
                <option value="Ilha das Flores (Açores)">
                  Ilha das Flores (Açores)
                </option>
                <option value="Ilha do Corvo (Açores)">
                  Ilha do Corvo (Açores)
                </option>
                <option value="Ilha da Madeira">Ilha da Madeira</option>
                <option value="Ilha de Porto Santo">Ilha de Porto Santo</option>
              </select>
            </div>

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500 cursor-pointer">
                Voltar
              </button>

              <button
                onClick={next}
                className="px-6 py-2 rounded-lg text-white bg-[#1A2B4C]"
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {/* STEP 7 */}
        {step === 7 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Quando pretende avançar com o crédito?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                "Imediatamente",
                "Nos próximos 30 dias",
                "Nos próximos 3 meses",
                "Ainda estou a planear",
              ].map((value) => (
                <button
                  key={value}
                  onClick={() => updateField("timeline", value)}
                  className={`border p-4 rounded-lg text-left text-[#1A2B4C] flex justify-between items-center cursor-pointer transition
          ${
            form.timeline === value
              ? "border-[#C5A059] bg-[#f9f6ef]"
              : "hover:bg-gray-100"
          }`}
                >
                  {value}

                  {form.timeline === value && (
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
                disabled={!form.timeline}
                className={`px-6 py-2 rounded-lg text-white
        ${form.timeline ? "bg-[#1A2B4C]" : "bg-gray-300 cursor-not-allowed"}`}
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* STEP 8 */}
        {step === 8 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu nome?
            </h2>

            <input
              placeholder="Nome completo"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={(e) => updateField("name", e.target.value)}
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

        {/* STEP 9 */}
        {step === 9 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu telefone?
            </h2>

            <input
              placeholder="Telefone"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={(e) => updateField("phone", e.target.value)}
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

        {/* STEP 10 */}
        {step === 10 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#c5a059]">
              Qual é o seu email?
            </h2>

            <input
              placeholder="Email"
              className="w-full border p-3 rounded-lg text-[#1A2B4C]"
              onChange={(e) => updateField("email", e.target.value)}
            />

            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-gray-500">
                Voltar
              </button>

              <button
                onClick={sendSimulation}
                className="px-6 py-2 rounded-lg text-white bg-[#C5A059]"
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
