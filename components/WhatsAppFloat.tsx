"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "351965710640"; // colocar o número real
  const message = "Olá, gostaria de pedir uma simulação de crédito.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
        <MessageCircle size={22} />

        <span className="hidden md:block font-medium">Falar no WhatsApp</span>
      </div>
    </a>
  );
}
