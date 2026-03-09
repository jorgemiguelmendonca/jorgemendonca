import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfoCards() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Fale Connosco</h2>
          <p className="text-gray-600 mt-4">
            Estamos disponíveis para esclarecer qualquer dúvida sobre o seu
            crédito.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Telefone */}
          <div className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition">
            <Phone className="text-[#C5A059] mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Telefone</h3>
            <p className="text-gray-600">+351 XXX XXX XXX</p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition">
            <Mail className="text-[#C5A059] mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">contacto@exemplo.pt</p>
          </div>

          {/* Morada */}
          <div className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition">
            <MapPin className="text-[#C5A059] mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Morada</h3>
            <p className="text-gray-600">
              Lugar Pontinha, s/n
              <br />
              9875-116 Topo
              <br />
              Calheta – São Jorge
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-50 p-8 rounded-xl border hover:shadow-lg transition">
            <MessageCircle className="text-[#C5A059] mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600">Atendimento rápido</p>
          </div>
        </div>
      </div>
    </section>
  );
}
