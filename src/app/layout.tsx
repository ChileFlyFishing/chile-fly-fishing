import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ScrollProvider from "@/components/providers/ScrollProvider"; // Integración de Lenis
import TextAnimationProvider from "@/components/providers/TextAnimationProvider"; // Animación de tipografías nativa
import { GoogleAnalytics } from "@next/third-parties/google"; // <-- 1. Importación del componente oficial de Vercel/Next.js
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

// METADATOS GLOBALES CONFIGURADOS PARA SOPORTAR LANDINGS PERSONALIZADAS
export const metadata: Metadata = {
  title: {
    // El template %s permite que cada landing inyecte su propio título delante del nombre de la marca
    template: "%s | Chile Fly Fishing",
    default: "Patagonia Fly Fishing | Wild Trout Expeditions in Chilean Patagonia",
  },
  description: "Experience premier Patagonia fly fishing out of Coyhaique, Chile. Target wild brown and rainbow trout in remote, unpressured waters.",
  metadataBase: new URL("https://chileflyfishingexpeditions.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "assets/images/favicon.ico",
    shortcut: "assets/images/favicon.ico",
    apple: "assets/images/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        // Quitamos el max-w de aquí para que los bloques y secciones ocupen el 100% del ancho del monitor
        className={`${inter.variable} ${playfair.variable} antialiased bg-brand-charcoal text-white`}
      >
        <ScrollProvider>
          {/* Envolvemos el contenido para activar la animación de textos a nivel global */}
          <TextAnimationProvider>
            {children}
          </TextAnimationProvider>
        </ScrollProvider>

        {/* 2. INYECCIÓN NATIVA Y OPTIMIZADA DE GA4 (No bloquea el renderizado) */}
        <GoogleAnalytics gaId="G-538364884" />
      </body>
    </html>
  );
}