"use client";

import { useEffect, useRef } from "react";
import Link from 'next/link';

export default function DestinationsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Efecto Fade In secuencial (1 por 1) al hacer scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".destination-fade-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añadimos el delay secuencial usando clases nativas de Tailwind
            const cardElement = entry.target as HTMLElement;
            cardElement.classList.add("opacity-100", "translate-y-0");
            cardElement.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(cardElement);
          }
        });
      },
      {
        threshold: 0.1, // Se activa en cuanto asoma el 10% de la sección
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/5">
      <div ref={containerRef} className="max-w-[1260px] mx-auto">
        
        {/* Encabezado Principal */}
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white font-normal tracking-tight leading-tight">
            Fly Fishing the Untouched Rivers of Patagonia
          </h2>
        </div>

        {/* Distribución Asimétrica del Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Patagonia Rivers (Caja Vertical Grande Izquierda) */}
          <a
            href="/patagonia-fly-fishing"
            className="destination-fade-card opacity-0 translate-y-8 transition-all duration-1000 ease-out relative h-[640px] rounded-lg overflow-hidden group border border-white/5 bg-neutral-900 block cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="assets/images/julie-brown-trout-patagonia.avif"
                alt="Patagonia Rivers"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {/* Gradiente restringido al tercio inferior únicamente para el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100" />
            <div className="absolute bottom-12 left-12 right-12 z-10">
              <h3 className="font-display text-3xl text-white font-normal mb-3 transition-colors duration-300 group-hover:text-brand-gold">
                Patagonia Rivers
              </h3>
              <p className="font-sans text-base text-white/60 font-light leading-relaxed">
                Fly fish remote rivers in the heart of Chilean Patagonia.
              </p>
            </div>
          </a>

          {/* Columna Derecha: Bloque contenedor de Sub-Cajas */}
          <div className="flex flex-col gap-8 lg:gap-10">
            
            {/* Fila Superior: Contiene 2 tarjetas horizontales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 h-full md:h-[300px]">
              
              {/* Card 2: Spring Creek Adventures */}
              <Link
                href="/patagonia-fly-fishing"
                className="destination-fade-card opacity-0 translate-y-8 transition-all duration-1000 ease-out [transition-delay:150ms] relative rounded-lg overflow-hidden group border border-white/5 bg-neutral-900 block cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src="assets/images/spring-creek-flyfishing-patagonia.avif"
                    alt="Spring Creek Adventures"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
                <div className="relative p-10 h-full flex flex-col justify-end z-10">
                  <h3 className="font-display text-xl text-white font-normal mb-2 transition-colors duration-300 group-hover:text-brand-gold">
                    Spring Creek Adventures
                  </h3>
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    Challenge wild trout in technical, hidden waters.
                  </p>
                </div>
              </Link>

              {/* Card 3: High-Andes Lakes */}
              <Link
                href="/patagonia-fly-fishing"
                className="destination-fade-card opacity-0 translate-y-8 transition-all duration-1000 ease-out [transition-delay:300ms] relative rounded-lg overflow-hidden group border border-white/5 bg-neutral-900 block cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src="assets/images/river-lake-coyhaique-patagonia.avif"
                    alt="High-Andes Lakes"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100" />
                <div className="relative p-10 h-full flex flex-col justify-end z-10">
                  <h3 className="font-display text-xl text-white font-normal mb-2 transition-colors duration-300 group-hover:text-brand-gold">
                    High-Andes Lakes
                  </h3>
                  <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
                    Fish deep, crystal-clear lakes for legendary browns.
                  </p>
                </div>
              </Link>
            </div>

            {/* Fila Inferior: Card 4 (Patagonian Lagoons Horizontal Ancha) */}
            <Link
              href="/patagonia-fly-fishing"
              className="destination-fade-card opacity-0 translate-y-8 transition-all duration-1000 ease-out [transition-delay:450ms] relative h-[300px] rounded-lg overflow-hidden group border border-white/5 bg-neutral-900 block cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src="assets/images/trophy-brown-trout-catch-release-coyhaique-patagonia.avif"
                  alt="Patagonian Lagoons"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-100" />
              <div className="relative p-12 h-full flex flex-col justify-center max-w-md z-10">
                <h3 className="font-display text-2xl text-white font-normal mb-3 transition-colors duration-300 group-hover:text-brand-gold">
                  Patagonian Lagoons
                </h3>
                <p className="font-sans text-sm text-white/60 font-light leading-relaxed">
                  Explore untouched stillwaters full of surprises.
                </p>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}