export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-bold text-[#1A2B4C] mb-8">Aviso Legal</h1>

        <p className="text-gray-600 mb-6">
          O presente website tem como objetivo fornecer informações sobre
          serviços de intermediação de crédito e permitir aos utilizadores
          realizar simulações ou solicitar contacto para análise de crédito.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          1. Natureza da informação
        </h2>

        <p className="text-gray-600">
          As informações disponibilizadas neste website têm caráter meramente
          informativo e não constituem aconselhamento financeiro, proposta
          contratual ou garantia de aprovação de crédito.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          2. Intermediação de crédito
        </h2>

        <p className="text-gray-600">
          A IntermedCredit atua como intermediário de crédito, facilitando o
          contacto entre os clientes e instituições financeiras parceiras. A
          aprovação final de qualquer crédito depende exclusivamente da análise
          realizada pela instituição financeira.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          3. Limitação de responsabilidade
        </h2>

        <p className="text-gray-600">
          Apesar de todos os esforços para garantir a exatidão e atualização das
          informações apresentadas neste website, não garantimos que todos os
          conteúdos estejam livres de erros ou omissões. A utilização das
          informações disponibilizadas é da exclusiva responsabilidade do
          utilizador.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          4. Links externos
        </h2>

        <p className="text-gray-600">
          Este website pode conter ligações para websites de terceiros. Não nos
          responsabilizamos pelo conteúdo, políticas de privacidade ou práticas
          desses websites externos.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          5. Direitos de autor
        </h2>

        <p className="text-gray-600">
          Todos os conteúdos presentes neste website, incluindo textos, imagens,
          logótipos e design, encontram-se protegidos por direitos de autor e
          não podem ser reproduzidos ou utilizados sem autorização prévia.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          6. Alterações ao aviso legal
        </h2>

        <p className="text-gray-600">
          Reservamo-nos o direito de alterar ou atualizar o presente Aviso Legal
          a qualquer momento sem aviso prévio. Recomendamos a consulta periódica
          desta página.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
