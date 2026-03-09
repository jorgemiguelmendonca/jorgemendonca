export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4C]">
            O que dizem os nossos clientes
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A confiança dos nossos clientes é o nosso maior orgulho. Veja
            algumas experiências de quem já encontrou a solução de crédito ideal
            connosco.
          </p>
        </div>

        {/* TESTIMONIALS */}

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600">
              "Processo rápido e muito profissional. Consegui financiamento para
              a minha casa com melhores condições do que esperava."
            </p>

            <div className="mt-6 font-semibold text-[#1A2B4C]">João Silva</div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600">
              "Excelente acompanhamento durante todo o processo. Explicaram tudo
              com clareza e sem custos."
            </p>

            <div className="mt-6 font-semibold text-[#1A2B4C]">
              Ana Rodrigues
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600">
              "Consegui juntar os meus créditos e reduzir a prestação mensal.
              Recomendo totalmente."
            </p>

            <div className="mt-6 font-semibold text-[#1A2B4C]">
              Miguel Pereira
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
