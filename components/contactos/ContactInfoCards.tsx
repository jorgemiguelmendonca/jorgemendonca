"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contactos() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* COLUNA ESQUERDA */}

        <div className="space-y-8">
          {/* INFO CONTACTO */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h2 className="text-2xl font-bold text-[#1A2B4C] mb-6">
              Informações de Contacto
            </h2>

            <div className="space-y-6">
              {/* TELEFONE */}
              <a
                href="https://wa.me/351965710640"
                target="_blank"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="bg-[#1A2B4C] text-[#C5A059] p-3 rounded-lg">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[#1A2B4C]">Telefone</p>
                  <p className="text-gray-600">+351 965 710 640</p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:jorgemiguel26@sapo.pt"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="bg-[#1A2B4C] text-[#C5A059] p-3 rounded-lg">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[#1A2B4C]">Email</p>
                  <p className="text-gray-600">jorgemiguel26@sapo.pt</p>
                </div>
              </a>

              {/* MORADA */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lugar+Pontinha+9875-116+Topo+Calheta+Ilha+de+São+Jorge+Açores"
                target="_blank"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
              >
                <div className="bg-[#1A2B4C] text-[#C5A059] p-3 rounded-lg">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[#1A2B4C]">Morada</p>
                  <p className="text-gray-600">
                    Lugar Pontinha, s/n
                    <br />
                    9875-116 Topo, Calheta
                    <br />
                    Ilha de São Jorge, Açores
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/351965710640?text=Olá,%20gostaria%20de%20marcar%20um%20atendimento."
                target="_blank"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
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
            <h2 className="text-xl font-semibold text-[#1A2B4C] mb-4">
              Localização
            </h2>

            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Topo%20Calheta%20Sao%20Jorge%20Azores&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                loading="lazy"
              ></iframe>
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
