export default function MapaLocalizacao() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Onde Estamos
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            A nossa sede está localizada na Ilha de São Jorge, nos Açores.
            Estamos disponíveis para atendimento presencial mediante
            agendamento.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border">
          <iframe
            src="https://www.google.com/maps?q=Topo+Calheta+S%C3%A3o+Jorge+A%C3%A7ores&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0 w-full"
          ></iframe>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p>
            📍 Lugar Pontinha, s/n — 9875-116 Topo, Calheta — Ilha de São Jorge,
            Açores
          </p>
        </div>
      </div>
    </section>
  );
}
