import { FileText, Search, Landmark, CheckCircle } from "lucide-react";

export default function ComoFunciona() {
  return (
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            Como Funciona o Processo
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Simplificamos todo o processo de crédito para que encontre a melhor
            solução de forma rápida, segura e transparente.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* STEP 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1A2B4C] text-white mb-6">
              <FileText size={28} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Pedido de Simulação
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Preencha o formulário de simulação com os dados básicos do seu
              pedido de crédito.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1A2B4C] text-white mb-6">
              <Search size={28} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Análise do Perfil
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Avaliamos o seu perfil financeiro para identificar as melhores
              opções de financiamento.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1A2B4C] text-white mb-6">
              <Landmark size={28} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Proposta Bancária
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Apresentamos as melhores propostas das instituições financeiras
              parceiras.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#1A2B4C] text-white mb-6">
              <CheckCircle size={28} />
            </div>

            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Aprovação e Contrato
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Acompanhamos todo o processo até a aprovação e assinatura do
              contrato.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#simulador"
            className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-10 py-4 rounded-lg transition"
          >
            Pedir Simulação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
