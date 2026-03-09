import Image from "next/image";
import { MapPin, Heart, Target, Users } from "lucide-react";

export default function NossaHistoria() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 flex">
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
            Jorge Miguel Mendonça, Unipessoal Lda.
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Somos um intermediário de crédito vinculado, devidamente registado
            no Banco de Portugal sob o n.º 0001707, com sede na Ilha de São
            Jorge, Açores.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            A nossa missão é proporcionar soluções de crédito personalizadas e
            transparentes, adaptadas às especificidades do mercado açoriano e às
            necessidades de cada cliente.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Com profundo conhecimento da realidade local e parceria com
            instituições financeiras de referência, trabalhamos diariamente para
            encontrar as melhores condições de financiamento para os nossos
            clientes.
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
      <div className="max-w-6xl m-auto grid md:grid-cols-4 gap-10 text-center mt-20 mb-20">
        {/* ITEM */}
        <div className=" border p-5 text-left rounded-[20px]">
          <div className="flex flex-wrap items-center gap-4 uppercase">
            <div className="w-12 h-12  bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-4">
              <MapPin size={22} />
            </div>

            <h3 className="font-semibold text-[#1A2B4C] mb-2">
              Raízes Açorianas
            </h3>
          </div>

          <p className="text-gray-500 text-sm">
            Sediados em São Jorge, conhecemos profundamente a realidade regional
          </p>
        </div>

        {/* ITEM */}
        <div className="border p-5 text-left rounded-[20px]">
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-12 h-12 bg-[#1A2B4C] text-[#C5A059] flex  items-center justify-center rounded-lg mb-4">
              <Heart size={22} />
            </div>
            <h3 className="font-semibold text-[#1A2B4C] mb-2 uppercase">
              Compromisso
            </h3>
          </div>

          <p className="text-gray-500 text-sm">
            Dedicação total ao sucesso de cada projeto dos nossos clientes
          </p>
        </div>

        {/* ITEM */}
        <div className="border p-5 text-left rounded-[20px]">
          <div className="flex flex-wrap items-center gap-4 uppercase">
            <div className="w-12 h-12 bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-4">
              <Target size={22} />
            </div>
            <h3 className="font-semibold text-[#1A2B4C] mb-2">Transparência</h3>
          </div>

          <p className="text-gray-500 text-sm">
            Informação clara e honesta em todas as fases do processo
          </p>
        </div>

        {/* ITEM */}
        <div className="border p-5 text-left rounded-[20px]">
          <div className="items-center flex flex-wrap gap-4 uppercase">
            <div className="w-12 h-12  bg-[#1A2B4C] text-[#C5A059] flex items-center justify-center rounded-lg mb-4">
              <Users size={22} />
            </div>

            <h3 className="font-semibold text-[#1A2B4C] mb-2">Proximidade</h3>
          </div>

          <p className="text-gray-500 text-sm">
            Atendimento personalizado e acompanhamento em cada etapa
          </p>
        </div>
      </div>
    </section>
  );
}
