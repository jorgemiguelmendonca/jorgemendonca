import Image from "next/image";

export default function NossaHistoria() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGEM */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/sobre.png"
            alt="Equipe especializada em soluções financeiras"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Nossa História
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Nossa empresa nasceu com o objetivo de facilitar o acesso ao crédito
            de forma simples, segura e transparente. Sabemos que muitas pessoas
            enfrentam dificuldades para encontrar soluções financeiras
            confiáveis, e por isso trabalhamos para conectar nossos clientes às
            melhores oportunidades disponíveis no mercado.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Com uma equipe especializada e parceiros estratégicos no setor
            financeiro, ajudamos diariamente clientes a conquistarem seus
            objetivos com soluções de crédito adequadas ao seu perfil.
          </p>

          {/* DIFERENCIAIS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">
                Atendimento Humano
              </h3>
              <p className="text-sm text-gray-600">
                Suporte personalizado para cada cliente.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800">
                Análise Especializada
              </h3>
              <p className="text-sm text-gray-600">
                Avaliação segura do seu perfil financeiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
