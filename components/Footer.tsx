import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B4C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* EMPRESA */}

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#c5a059] uppercase">
            Jorge Miguel Mendonça
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Intermediário de Crédito Vinculado registado no Banco de Portugal
            sob o n.º{" "}
            <strong className="text-[#c5a059] uppercase">0001707</strong>.
          </p>

          <p className="text-sm text-gray-300 mt-4">
            Especializado em soluções de financiamento para habitação,
            construção e consolidação de créditos.
          </p>
        </div>

        {/* NAVEGAÇÃO */}

        <div>
          <h4 className="font-semibold mb-4 text-[#c5a059] uppercase">
            Navegação
          </h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Início
              </Link>
            </li>

            <li>
              <Link href="/servicos" className="hover:text-white">
                Serviços
              </Link>
            </li>

            <li>
              <Link href="/sobre" className="hover:text-white">
                Sobre Nós
              </Link>
            </li>

            <li>
              <Link href="/contactos" className="hover:text-white">
                Contactos
              </Link>
            </li>

            <li>
              <Link href="/simulacao" className="hover:text-white">
                Simulação
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTOS */}

        <div>
          <h4 className="font-semibold mb-4 text-[#c5a059] uppercase">
            Contactos
          </h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="tel:+351965710640" className="hover:text-white">
                +351 965 710 640
              </a>
            </li>

            <li>
              <a
                href="mailto:jorgemiguel26@sapo.pt"
                className="hover:text-white"
              >
                jorgemiguel26@sapo.pt
              </a>
            </li>

            <li className="pt-2">
              Lugar Pontinha, s/n
              <br />
              9875-116 Topo, Calheta
              <br />
              Ilha de São Jorge, Açores
            </li>
          </ul>
        </div>
      </div>

      {/* LINHA */}

      <div className="border-t border-blue-800"></div>

      {/* INFORMAÇÃO LEGAL */}

      <div className="max-w-7xl mx-auto px-6 py-8 text-xs text-gray-300 leading-relaxed space-y-2">
        <p>
          <strong className="text-[#c5a059]">
            Jorge Miguel Mendonça, Unipessoal Lda.
          </strong>{" "}
          – NIF: [A definir].
        </p>

        <p>
          Mutuantes vinculados:{" "}
          <strong className="text-[#c5a059]">Cofidis</strong> e{" "}
          <strong className="text-[#c5a059]">
            Bicredit – Sociedade Financeira de Crédito, S.A.
          </strong>
        </p>

        <p>
          Seguro de Responsabilidade Civil Profissional contratado junto da{" "}
          <strong className="text-[#c5a059]">Hiscox S.A.</strong> – Apólice n.º{" "}
          <strong className="text-[#c5a059]">2522203</strong>.
        </p>

        <p>
          O intermediário de crédito está isento de receção ou entrega de
          quaisquer valores de clientes, conforme o Art.º 46.º do Regime
          Jurídico dos Intermediários de Crédito (RJIC).
        </p>
      </div>

      {/* COPYRIGHT */}

      <div className="text-center text-xs text-gray-400 pb-6">
        © 2026 Jorge Miguel Mendonça — Todos os direitos reservados
      </div>
    </footer>
  );
}
