"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1A2B4C] rounded-lg flex items-center justify-center text-white font-bold">
            JM
          </div>

          <div className="leading-tight">
            <p className="font-semibold text-[#1A2B4C]">Jorge Mendonça</p>
            <p className="text-xs text-gray-500">Intermediação de Crédito</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#1A2B4C]">
            Início
          </Link>

          <Link href="/servicos" className="hover:text-[#1A2B4C]">
            Serviços
          </Link>

          <Link href="/sobre" className="hover:text-[#1A2B4C]">
            Sobre
          </Link>

          <Link href="/contactos" className="hover:text-[#1A2B4C]">
            Contactos
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#simulador"
            className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Pedir Simulação
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700">
            <Link href="/">Início</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contactos">Contactos</Link>

            <Link
              href="#simulador"
              className="bg-[#C5A059] text-white text-center py-3 rounded-lg font-semibold mt-4"
            >
              Pedir Simulação
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
