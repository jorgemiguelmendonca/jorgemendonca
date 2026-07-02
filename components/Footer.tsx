import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B4C] text-white">
      <div className="max-w-300 m-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        {/* EMPRESA */}

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#c5a059] uppercase">
            Jorge Mendonça
          </h3>
          {/*
          <p>Eurobridge - Serviços de Crédito Internacional Ltda</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            CNPJ:
            <strong className="text-[#c5a059] uppercase">
              65.559.910/0001-88
            </strong>
            .
          </p>
       */}

          <p className="text-sm text-gray-300 mt-4">
            Responsável especializado em soluções de financiamento para crédito
            pessoal e empresarial.
          </p>
        </div>

        {/* CONTACTOS */}

        {/* CONTACTOS */}

        <div>
          <h4 className="font-semibold mb-4 text-[#c5a059] uppercase">
            Contactos
          </h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a
                href="mailto:intermediario@jorgemendonca.com"
                className="hover:text-white"
              >
                intermediario@jorgemendonca.com
              </a>
            </li>
          </ul>
        </div>

        {/*    <div>
          <h4 className="font-semibold mb-4 text-[#c5a059] uppercase">
            Informação Legal
          </h4>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <span className="font-bold text-[#c5a059]">Mutuantes:</span>{" "}
              Cofidis; Bicredit
            </li>

            <li className="pt-2">
              <span className="font-bold text-[#c5a059]">Seguro RC:</span>{" "}
              Hiscox S.A. (Apólice 2522203)
            </li>
            <li className="pt-2">
              Isento de receção de valores de clientes conforme o Art.º 46.º do
              RJIC
            </li>
          </ul>
        </div> */}
      </div>

      {/* LINHA */}

      <div className="border-t border-[#c5a059] mb-10"></div>

      {/* INFORMAÇÃO LEGAL */}

      <div className="flex gap-4 text-sm text-gray-400 items-center justify-center mb-4">
        <Link href="/politica-privacidade" className="hover:text-amber-200">
          Política de Privacidade
        </Link>
        <Link href="/termos" className="hover:text-amber-200">
          Termos
        </Link>
        <Link href="/rgpd" className="hover:text-amber-200">
          RGPD
        </Link>
        <Link href="/aviso-legal" className="hover:text-amber-200">
          Aviso Legal
        </Link>
      </div>
      {/* COPYRIGHT */}

      <div className="text-center text-xs text-gray-400 pb-6">
        © 2026 Jorge Mendonça — Todos os direitos reservados
      </div>
    </footer>
  );
}
