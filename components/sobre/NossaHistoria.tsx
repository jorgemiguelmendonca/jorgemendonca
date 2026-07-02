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
            Jorge Mendonça
          </h2>

          {/*         <p className="text-gray-600 mb-6 leading-relaxed">
            Responsável pela EUROBRIDGE – Serviços de Crédito Internacional
            Ltda. CNPJ:{" "}
            <strong className="text-[#c5a059] uppercase">
              65.559.910/0001-88
            </strong>
          </p> */}

          <p className="text-gray-600 mb-8 leading-relaxed">
            Profissional especializado na intermediação e consultoria de crédito
            pessoal e empresarial, atuando com profissionalismo, transparência e
            compromisso na procura das melhores soluções financeiras para os
            seus clientes.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Sob a responsabilidade de Jorge Mendonça, a empresa dedica-se ao
            acompanhamento personalizado de particulares e empresas que procuram
            alternativas de financiamento, apoiando cada processo com rigor,
            seriedade e atenção às necessidades específicas de cada cliente.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            A nossa missão é facilitar o acesso a soluções de crédito e
            financiamento, promovendo relações de confiança, clareza na
            informação e elevado padrão de atendimento, sempre orientados para
            os interesses dos nossos clientes e parceiros.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Com uma abordagem profissional e uma rede de contactos no setor
            financeiro internacional,{" "}
            <strong className="text-[#c5a059] uppercase">Jorge Mendonça</strong>{" "}
            trabalha diariamente para identificar oportunidades e apresentar
            soluções adequadas a cada projeto, contribuindo para o crescimento e
            desenvolvimento dos seus clientes.
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
      <div className="max-w-6xl m-auto grid md:grid-cols-3 gap-10 text-center mt-20 mb-20">
        {/* ITEM */}
        {/*  <div className=" border p-5 text-left rounded-[20px]">
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
        </div>*/}

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
