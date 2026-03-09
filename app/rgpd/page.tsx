export default function RGPD() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-bold text-[#1A2B4C] mb-8">
          Proteção de Dados (RGPD)
        </h1>

        <p className="text-gray-600 mb-6">
          Em conformidade com o Regulamento Geral sobre a Proteção de Dados
          (RGPD), garantimos que os dados pessoais recolhidos através deste
          website são tratados de forma transparente, segura e apenas para as
          finalidades para as quais foram fornecidos.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          1. Responsável pelo tratamento
        </h2>

        <p className="text-gray-600">
          O responsável pelo tratamento dos dados pessoais recolhidos através
          deste website é a IntermedCredit, que garante o cumprimento da
          legislação aplicável em matéria de proteção de dados.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          2. Dados pessoais recolhidos
        </h2>

        <p className="text-gray-600 mb-4">
          Os dados pessoais recolhidos podem incluir:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Nome</li>
          <li>Email</li>
          <li>Número de telefone</li>
          <li>Informações financeiras fornecidas para simulações de crédito</li>
          <li>Outras informações fornecidas voluntariamente pelo utilizador</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          3. Finalidade do tratamento
        </h2>

        <p className="text-gray-600 mb-4">
          Os dados pessoais são recolhidos e tratados apenas para as seguintes
          finalidades:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Análise de pedidos de crédito</li>
          <li>Contacto com o utilizador</li>
          <li>Apresentação de propostas de instituições financeiras</li>
          <li>Prestação de serviços de intermediação de crédito</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          4. Base legal para o tratamento
        </h2>

        <p className="text-gray-600">
          O tratamento dos dados pessoais baseia-se no consentimento do
          utilizador e na necessidade de execução de serviços solicitados
          através deste website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          5. Direitos do titular dos dados
        </h2>

        <p className="text-gray-600 mb-4">
          Nos termos do RGPD, o utilizador tem direito a:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Aceder aos seus dados pessoais</li>
          <li>Solicitar a retificação de dados incorretos</li>
          <li>Solicitar a eliminação dos seus dados</li>
          <li>Limitar ou opor-se ao tratamento dos dados</li>
          <li>Solicitar a portabilidade dos dados</li>
        </ul>

        <p className="text-gray-600 mt-4">
          Para exercer qualquer um destes direitos, o utilizador poderá entrar
          em contacto através do email disponibilizado no website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          6. Conservação dos dados
        </h2>

        <p className="text-gray-600">
          Os dados pessoais serão conservados apenas pelo período necessário
          para cumprir as finalidades para as quais foram recolhidos ou conforme
          exigido pela legislação aplicável.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          7. Segurança dos dados
        </h2>

        <p className="text-gray-600">
          São implementadas medidas técnicas e organizativas adequadas para
          proteger os dados pessoais contra perda, uso indevido, acesso não
          autorizado ou divulgação indevida.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
