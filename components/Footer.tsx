import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B4C] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* MARCA */}

        <div>
          <h3 className="text-xl font-semibold mb-4">Jorge Mendonça</h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Intermediação de Crédito especializada em soluções de financiamento
            para habitação, construção e consolidação de créditos.
          </p>

          <p className="text-sm text-gray-300 mt-4">
            Atuamos com transparência, rigor financeiro e total conformidade com
            a legislação portuguesa.
          </p>
        </div>

        {/* LINKS */}

        <div>
          <h4 className="font-semibold mb-4">Navegação</h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Início
              </Link>
            </li>

            <li>
              <a href="/servicos" className="hover:text-white">
                Serviços
              </a>
            </li>

            <li>
              <a href="/sobre" className="hover:text-white">
                Sobre Nós
              </a>
            </li>

            <li>
              <a href="/contactos" className="hover:text-white">
                Contactos
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTOS */}

        <div>
          <h4 className="font-semibold mb-4">Contactos</h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>Lugar Pontinha, s/n</li>

            <li>9875-116 Topo</li>

            <li>Calheta – Ilha de São Jorge</li>

            <li>Açores, Portugal</li>
          </ul>
        </div>
      </div>

      {/* DIVISÃO */}

      <div className="border-t border-blue-800"></div>

      {/* BLOCO LEGAL */}

      <div className="max-w-7xl mx-auto px-6 py-8 text-xs text-gray-300 leading-relaxed">
        <p className="mb-2">
          <strong>Jorge Miguel Mendonça, Unipessoal Lda.</strong>, com sede no
          Lugar Pontinha, s/n, 9875-116 Topo, Calheta (Açores). Intermediário de
          Crédito Vinculado registado no Banco de Portugal sob o n.º
          <strong> 0001707</strong>.
        </p>

        <p className="mb-2">
          Serviços de intermediação de crédito: apresentação ou proposta de
          contratos de crédito a consumidores e assistência em atos
          preparatórios.
        </p>

        <p className="mb-2">
          Mutuantes vinculados: <strong>Cofidis</strong> e
          <strong> Bicredit – Sociedade Financeira de Crédito, S.A.</strong>
        </p>

        <p className="mb-2">
          Seguro de responsabilidade civil profissional contratado junto da
          <strong> Hiscox S.A. – Sucursal em Portugal</strong> (Apólice n.º
          2522203).
        </p>

        <p>
          O intermediário de crédito não está autorizado a receber ou entregar
          quaisquer valores relacionados com a formação, execução ou cumprimento
          antecipado dos contratos de crédito.
        </p>
      </div>

      {/* COPYRIGHT */}

      <div className="text-center text-xs text-gray-400 pb-6">
        © {new Date().getFullYear()} Jorge Mendonça – Intermediação de Crédito
      </div>
    </footer>
  );
}
