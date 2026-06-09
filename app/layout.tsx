import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WhatsappFloat from "@/components/WhatsappFloat";
const geistSans = Geist({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Miguel Mendonça | Intermediação de Crédito",
  description:
    "Intermediário de Crédito Vinculado registado no Banco de Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <title>
          Jorge Miguel Mendonça | Intermediação de Crédito nos Açores
        </title>

        <meta
          name="description"
          content="Jorge Miguel Mendonça é Intermediário de Crédito Vinculado registado no Banco de Portugal (n.º 0001707). Soluções de crédito habitação, crédito pessoal e consolidação de créditos na Ilha de São Jorge, Açores."
        />

        <meta
          name="keywords"
          content="
intermediação de crédito açores,
intermediário de crédito são jorge,
crédito habitação açores,
crédito pessoal açores,
consolidação de crédito portugal,
intermediário de crédito banco de portugal,
jorge miguel mendonça crédito
"
        />

        <meta name="author" content="Jorge Miguel Mendonça" />
        <meta name="robots" content="index, follow" />

        <meta name="geo.region" content="PT-20" />
        <meta name="geo.placename" content="Ilha de São Jorge, Açores" />
        <meta name="geo.position" content="38.6520;-28.0650" />
        <meta name="ICBM" content="38.6520, -28.0650" />

        <meta
          property="og:title"
          content="Jorge Miguel Mendonça – Intermediação de Crédito"
        />

        <meta
          property="og:description"
          content="Especialista em soluções de crédito habitação, crédito pessoal e consolidação de créditos. Intermediário registado no Banco de Portugal."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://jorgemendonca.com/" />

        <meta
          property="og:image"
          content="https://jorgemendonca.com/logo-meta.png"
        />
        <link rel="canonical" href="https://jorgemendonca.com/" />
        <link rel="shortcut icon" href="/logo-meta.png" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManager gtmId="GTM-PMK23MLG" />
        <Header />

        {children}
        <Footer />

        <CookieConsent />
        <WhatsappFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Jorge Miguel Mendonça - Intermediação de Crédito",
              url: "https://jorgemendonca.com",
              telephone: "",
              email: "jorgemiguel26@sapo.pt",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lugar Pontinha, s/n",
                addressLocality: "Calheta",
                postalCode: "9875-116",
                addressRegion: "Açores",
                addressCountry: "PT",
              },
              areaServed: "Portugal",
              description:
                "Intermediário de Crédito Vinculado registado no Banco de Portugal sob o nº 0001707.",
            }),
          }}
        />
      </body>
    </html>
  );
}
