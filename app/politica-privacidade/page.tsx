export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-bold text-[#1A2B4C] mb-8">
          Política de Privacidade
        </h1>

        <p className="text-gray-600 mb-6">
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como recolhemos, utilizamos e protegemos as informações
          fornecidas pelos utilizadores deste website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          1. Recolha de dados
        </h2>

        <p className="text-gray-600 mb-4">
          Podemos recolher dados pessoais através dos formulários presentes no
          website, incluindo:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Nome</li>
          <li>Email</li>
          <li>Número de telefone</li>
          <li>Informações financeiras fornecidas para simulações de crédito</li>
          <li>Outros dados fornecidos voluntariamente pelo utilizador</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          2. Finalidade do tratamento de dados
        </h2>

        <p className="text-gray-600 mb-4">
          Os dados recolhidos são utilizados exclusivamente para:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Análise de pedidos de crédito</li>
          <li>Contacto com o utilizador</li>
          <li>Apresentação de propostas de instituições financeiras</li>
          <li>Melhoria da experiência no website</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          3. Partilha de dados
        </h2>

        <p className="text-gray-600">
          Os dados fornecidos poderão ser partilhados com instituições
          financeiras parceiras apenas para efeitos de análise de crédito ou
          apresentação de propostas, sempre respeitando a legislação aplicável.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          4. Proteção dos dados
        </h2>

        <p className="text-gray-600">
          Implementamos medidas técnicas e organizativas adequadas para proteger
          os dados pessoais contra perda, acesso não autorizado, divulgação ou
          alteração indevida.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          5. Direitos do utilizador
        </h2>

        <p className="text-gray-600 mb-4">
          Nos termos da legislação aplicável de proteção de dados, o utilizador
          tem o direito de:
        </p>

        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Aceder aos seus dados pessoais</li>
          <li>Solicitar a correção de dados incorretos</li>
          <li>Solicitar a eliminação dos seus dados</li>
          <li>Limitar ou opor-se ao tratamento dos dados</li>
          <li>Solicitar a portabilidade dos dados</li>
        </ul>

        <p className="text-gray-600 mt-4">
          Para exercer qualquer um destes direitos, poderá entrar em contacto
          através do email disponibilizado no website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          6. Conservação dos dados
        </h2>

        <p className="text-gray-600">
          Os dados pessoais serão conservados apenas pelo período necessário
          para cumprir as finalidades para as quais foram recolhidos ou conforme
          exigido por lei.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          7. Alterações à política
        </h2>

        <p className="text-gray-600">
          Reservamo-nos o direito de atualizar esta Política de Privacidade a
          qualquer momento. Recomendamos a consulta periódica desta página.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
