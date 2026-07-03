// src/app/not-found.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Chile Fly Fishing",
  description: "The technical field report or page you are looking for does not exist within our current database.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
      {/* HEADER */}
      <Navbar />

      {/* BODY CON IMAGEN DE FONDO */}
      <main className="flex-grow relative flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        
        {/* Imagen de fondo optimizada con Opacity y Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/cataraft-dry-fly-fishing-lake-zenteno-patagonia.avif"
            alt="Cataraft fly fishing in Lake Zenteno, Patagonia"
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          {/* Degradado para fundir con el fondo Charcoal de la marca */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/80" />
        </div>

        {/* CONTENIDO CENTRADO */}
        <div className="relative z-10 max-w-[1260px] mx-auto text-center space-y-8 py-20">
          <span className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold">
            Error 404 • Operational Friction
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl mx-auto text-white">
            The page you are looking for does not exist...
          </h1>
          
          <p className="font-sans text-sm md:text-base text-white/50 max-w-lg mx-auto font-light leading-relaxed">
            The technical report, beat details, or destination matrix might have been relocated or updated in our database.
          </p>

          <div className="pt-4">
            {/* BOTÓN CORPORATIVO (ESTILO HERO BANNER) */}
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-charcoal font-sans text-xs tracking-widest uppercase transition-all rounded-sm font-semibold shadow-sm"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}