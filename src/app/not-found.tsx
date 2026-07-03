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

      {/* BODY CON ESPACIADO CORREGIDO Y ESTRUCTURA DE Z-INDEX */}
      <main className="flex-grow relative flex items-center justify-center min-h-[calc(100vh-140px)] pt-36 pb-20 px-6">
        
        {/* IMAGEN DE FONDO Y OVERLAY (Z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/images/cataraft-dry-fly-fishing-lake-zenteno-patagonia.avif"
            alt="Cataraft fly fishing in Lake Zenteno, Patagonia"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          {/* Capa de degradado suavizada para no oscurecer de más el botón */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-transparent to-brand-charcoal/40" />
        </div>

        {/* CONTENIDO ENFOCADO EN PRIMER PLANO (Z-10 FUERTE) */}
        <div className="relative z-10 max-w-[1260px] mx-auto text-center space-y-8">
          
          <span className="inline-block font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold">
            Error 404
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl mx-auto text-white">
            The page you are looking for does not exist...
          </h1>
          
          <p className="font-sans text-sm md:text-base text-white/80 max-w-lg mx-auto font-light leading-relaxed">
            The technical report, beat details, or destination matrix might have been relocated or updated in our database.
          </p>

          <div className="pt-6">
            {/* BOTÓN CORPORATIVO CON MÁXIMO CONTRASTE */}
            <Link
              href="/"
              className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
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