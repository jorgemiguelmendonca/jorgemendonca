"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed border-b-2 top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-white/90 backdrop-blur"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A2B4C] text-[#c5a059] rounded-lg flex items-center justify-center  font-bold">
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
              href="/simulacao"
              className="bg-[#C5A059] hover:bg-[#b08f4d] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Pedir Simulação
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#1A2B4C]"
            onClick={() => setOpen(true)}
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <p className="font-semibold text-[#1A2B4C]">Menu</p>

          <button onClick={() => setOpen(false)} className="text-[#1A2B4C]">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-8 text-gray-700 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>
            Início
          </Link>

          <Link href="/servicos" onClick={() => setOpen(false)}>
            Serviços
          </Link>

          <Link href="/sobre" onClick={() => setOpen(false)}>
            Sobre
          </Link>

          <Link href="/contactos" onClick={() => setOpen(false)}>
            Contactos
          </Link>

          <Link
            href="/simulacao"
            className="bg-[#C5A059] text-white text-center py-3 rounded-lg font-semibold mt-4"
            onClick={() => setOpen(false)}
          >
            Pedir Simulação
          </Link>
        </nav>
      </div>
    </>
  );
}
