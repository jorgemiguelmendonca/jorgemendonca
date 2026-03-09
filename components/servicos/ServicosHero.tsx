import Image from "next/image";

export default function ServicosHero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}

        <div>
          <span className="text-sm text-[#C5A059] font-semibold uppercase tracking-wider">
            Serviços de Intermediação de Crédito
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4C] mt-4 leading-tight">
            Soluções de Crédito Adaptadas ao Seu Perfil
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Analisamos o seu perfil financeiro e apresentamos as melhores
            soluções de financiamento junto das nossas instituições parceiras.
            Acompanhamos todo o processo com transparência e rigor profissional.
          </p>

          <p className="text-gray-600 mt-4">
            O serviço de intermediação é totalmente gratuito para o cliente.
          </p>

          {/* BOTÕES */}

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#simulador"
              className="bg-[#C5A059] hover:bg-[#b8914e] text-white px-7 py-3 rounded-lg font-medium transition"
            >
              Pedir Simulação
            </a>

            <a
              href="/contactos"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-7 py-3 rounded-lg font-medium transition"
            >
              Falar com Consultor
            </a>
          </div>
        </div>

        {/* IMAGEM */}

        <div className="relative w-full h-[520px]">
          <Image
            src="/solucoes-credito-e-financiamento-2.png"
            alt="Soluções de crédito e financiamento"
            fill
            className="object-cover object-top rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
