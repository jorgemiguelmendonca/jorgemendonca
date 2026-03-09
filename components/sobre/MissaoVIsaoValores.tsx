export default function MissaoVisaoValores() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Nossa Essência
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* MISSÃO */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4 mx-auto">
              🚀
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Missão</h3>

            <p className="text-gray-600 leading-relaxed">
              Facilitar o acesso ao crédito de forma segura, transparente e
              acessível, conectando nossos clientes às melhores soluções
              financeiras disponíveis no mercado.
            </p>
          </div>

          {/* VISÃO */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4 mx-auto">
              👁
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Visão</h3>

            <p className="text-gray-600 leading-relaxed">
              Ser reconhecida como uma referência em soluções financeiras,
              oferecendo atendimento de excelência e gerando resultados reais
              para nossos clientes.
            </p>
          </div>

          {/* VALORES */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4 mx-auto">
              ⭐
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Valores
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Transparência, responsabilidade, compromisso com resultados e
              respeito total aos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
