"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl bg-white shadow-2xl border rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Utilizamos cookies para melhorar a sua experiência no nosso site,
          analisar tráfego e personalizar conteúdo. Ao continuar a navegar,
          concorda com a nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="text-[#c5a059] underline"
          >
            Política de Privacidade
          </a>
          .
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
          >
            Rejeitar
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-[#1A2B4C] text-white rounded-lg hover:bg-[#16233f] cursor-pointer"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
