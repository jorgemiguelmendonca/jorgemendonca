export default function NumerosEmpresa() {
  const numeros = [
    {
      numero: "+5.000",
      titulo: "Clientes atendidos",
      descricao: "Pessoas que confiaram em nossas soluções financeiras",
    },
    {
      numero: "+R$50M",
      titulo: "Crédito aprovado",
      descricao: "Valor liberado através das nossas soluções",
    },
    {
      numero: "+20",
      titulo: "Instituições parceiras",
      descricao: "Bancos e financeiras disponíveis para análise",
    },
    {
      numero: "100%",
      titulo: "Atendimento personalizado",
      descricao: "Foco total nas necessidades de cada cliente",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Resultados que demonstram nossa experiência
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {numeros.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <div className="text-4xl font-bold mb-3">{item.numero}</div>

              <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>

              <p className="text-blue-100 text-sm">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
