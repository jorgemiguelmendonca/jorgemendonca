"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Como funciona a solicitação de crédito?",
      answer:
        "Você realiza a simulação online, envia seus dados e nossa equipe analisa para apresentar a melhor proposta disponível.",
    },
    {
      question: "A simulação afeta meu score?",
      answer: "Não. A simulação inicial não impacta seu score de crédito.",
    },
    {
      question: "Quanto tempo demora a aprovação?",
      answer:
        "Em muitos casos a análise acontece no mesmo dia, dependendo das informações enviadas.",
    },
    {
      question: "Preciso pagar algo para solicitar?",
      answer:
        "Não. A simulação e análise da proposta são totalmente gratuitas.",
    },
    {
      question: "Quais documentos são necessários?",
      answer:
        "Normalmente solicitamos documento de identificação, CPF e comprovante de renda.",
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>

          <p className="text-gray-500 mt-4">
            Tire suas principais dúvidas antes de solicitar seu crédito
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
