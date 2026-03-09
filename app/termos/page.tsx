export default function TermosCondicoes() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-bold text-[#1A2B4C] mb-8">
          Termos e Condições
        </h1>

        <p className="text-gray-600 mb-6">
          Ao aceder e utilizar este website, o utilizador concorda com os
          presentes Termos e Condições. Caso não concorde com qualquer parte
          destes termos, deverá abster-se de utilizar este website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          1. Objeto do website
        </h2>

        <p className="text-gray-600">
          Este website tem como objetivo disponibilizar informações sobre
          serviços de intermediação de crédito, bem como permitir a realização
          de simulações e pedidos de contacto por parte dos utilizadores
          interessados.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          2. Utilização do website
        </h2>

        <p className="text-gray-600 mb-4">
          O utilizador compromete-se a utilizar este website apenas para fins
          legais e de forma que não infrinja os direitos de terceiros ou
          restrinja o uso e acesso por outros utilizadores.
        </p>

        <p className="text-gray-600">
          O utilizador compromete-se igualmente a fornecer informações
          verdadeiras e atualizadas sempre que preencher formulários disponíveis
          no website.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          3. Simulações de crédito
        </h2>

        <p className="text-gray-600">
          As simulações de crédito disponibilizadas neste website têm caráter
          meramente informativo e não constituem uma proposta contratual ou
          garantia de aprovação de crédito. A aprovação final depende da análise
          efetuada pelas instituições financeiras.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          4. Propriedade intelectual
        </h2>

        <p className="text-gray-600">
          Todo o conteúdo presente neste website, incluindo textos, logótipos,
          design, imagens e estrutura, encontra-se protegido por direitos de
          autor e não pode ser reproduzido, distribuído ou utilizado sem
          autorização prévia.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          5. Limitação de responsabilidade
        </h2>

        <p className="text-gray-600">
          Apesar de todos os esforços para garantir a exatidão das informações
          disponibilizadas, não garantimos que todos os conteúdos estejam sempre
          atualizados ou livres de erros. A utilização das informações
          disponibilizadas neste website é da exclusiva responsabilidade do
          utilizador.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          6. Links para websites externos
        </h2>

        <p className="text-gray-600">
          Este website pode conter ligações para websites de terceiros. Não nos
          responsabilizamos pelo conteúdo, políticas ou práticas desses websites
          externos.
        </p>

        <h2 className="text-2xl font-semibold text-[#1A2B4C] mt-10 mb-4">
          7. Alterações aos termos
        </h2>

        <p className="text-gray-600">
          Reservamo-nos o direito de alterar ou atualizar estes Termos e
          Condições a qualquer momento, sem aviso prévio. Recomendamos que o
          utilizador consulte esta página regularmente.
        </p>

        <p className="text-gray-400 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
