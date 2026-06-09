"use client";

import { Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function Contactos() {
  return (
    <section className="py-24 px-1 md:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* COLUNA ESQUERDA */}

        <div className="space-y-8">
          {/* INFO CONTACTO */}
          <div
            className="
bg-white
rounded-3xl
shadow-xl
p-3
md:p-8
w-full
max-w-full
overflow-hidden
"
          >
            <h2 className="text-2xl font-bold text-[#1A2B4C] mb-6">
              Informações de Contacto
            </h2>

            <div className="space-y-4">
              {/* EMAIL */}
              <a
                href="mailto:jorgemiguel26@sapo.pt"
                className="flex items-start gap-4 p-1 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="bg-[#1A2B4C] text-[#C5A059] p-3 rounded-lg">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[#1A2B4C]">Email</p>
                  <p className="text-gray-600 text-[1rem]">
                    intermediario@jorgemendonca.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/351965710640?text=Olá,%20gostaria%20de%20marcar%20um%20atendimento."
                target="_blank"
                className="flex items-start gap-4 p-1 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="bg-[#1A2B4C] text-[#C5A059] p-3 rounded-lg">
                  <Clock size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[#1A2B4C]">
                    Horário de Atendimento
                  </p>

                  <p className="text-gray-600">
                    Segunda a Sexta: 09:00 - 18:00 <br />
                    Sábados: Mediante marcação
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* INFO LEGAL */}

          <div className="bg-[#1A2B4C] text-white p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Informação Legal</h3>

            <div className="text-sm text-gray-200 space-y-2">
              <p>Jorge Miguel Mendonça, Unipessoal Lda.</p>

              <p>Intermediário de Crédito Vinculado</p>

              <p>Registo Banco de Portugal: 0001707</p>

              <p>Mutuantes: Cofidis; Bicredit</p>

              <p>Seguro RC: Hiscox S.A. (Apólice 2522203)</p>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA */}

        <div className="space-y-8">
          {/* MAPA */}

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <div className="rounded-xl overflow-hidden">
              <Image src="/logo.png" width={500} height={200} alt="" />
            </div>
          </div>

          {/* COMO ENCONTRAR */}

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold text-[#1A2B4C] mb-3">
              Como nos encontrar
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Situados na encantadora Ilha de São Jorge, nos Açores, estamos
              disponíveis para atendimento presencial mediante marcação prévia.
              Para maior comodidade, também oferecemos consultas à distância
              através de videochamada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
