export default function TrustSection() {
  return (
    <section className="w-full bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A2B4C]">
            Confiança e Transparência em Cada Processo
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Atuamos em conformidade com o Banco de Portugal e trabalhamos com
            instituições financeiras reconhecidas no mercado.
          </p>
        </div>

        {/* PARTNERS */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-70">
          <div className="font-semibold text-lg">Banco de Portugal</div>
          <div className="font-semibold text-lg">Cofidis</div>
          <div className="font-semibold text-lg">Bicredit</div>
        </div>

        {/* TRUST CARDS */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-[#F8F9FA] p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Serviço Gratuito
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Não cobramos pelo serviço de intermediação. A comissão é paga
              pelas instituições financeiras.
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Resposta Rápida
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Receba uma análise preliminar do seu pedido em 48 a 72 horas
              úteis.
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Atendimento Personalizado
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Cada processo é analisado de forma individual para encontrar a
              melhor solução de crédito.
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-[#1A2B4C]">
              Total Segurança
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Os seus dados são protegidos conforme as normas do RGPD e do Banco
              de Portugal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
