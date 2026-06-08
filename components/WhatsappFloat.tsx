"use client";

import React from "react";

const WhatsappFloat = () => {
  const phone = "553135828296";

  const message = encodeURIComponent(
    "Olá! Gostaria de pedir uma simulação de crédito."
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <div className="bg-green-500 hover:bg-green-600 transition-all duration-300 p-4 rounded-full shadow-lg flex items-center justify-center">
        {/* 🔥 COLOCA SEU SVG AQUI */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.03 0C5.41 0 .04 5.37.04 11.99c0 2.11.55 4.17 1.6 5.99L0 24l6.17-1.61a11.96 11.96 0 0 0 5.86 1.5h.01c6.62 0 11.99-5.37 11.99-11.99 0-3.2-1.25-6.21-3.51-8.42ZM12.04 21.4a9.38 9.38 0 0 1-4.77-1.31l-.34-.2-3.66.96.98-3.57-.22-.37a9.37 9.37 0 1 1 8.01 4.49Zm5.14-7.03c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.62.14-.19.28-.71.9-.87 1.08-.16.19-.32.21-.6.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1.01 2.72 1.15 2.91c.14.19 1.99 3.04 4.83 4.26.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33Z" />
        </svg>
      </div>

      {/* Tooltip opcional */}
      <span className="absolute right-16 bottom-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsappFloat;
