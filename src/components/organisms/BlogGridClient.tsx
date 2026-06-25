"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

interface BlogPost {
  slug: string;
  excerpt: string;
  date: string;
  tag: string;
}

interface BlogGridClientProps {
  blogPosts: BlogPost[];
  destinationsRegistry: any;
}

export default function BlogGridClient({ blogPosts, destinationsRegistry }: BlogGridClientProps) {
  // Estado para el año seleccionado (por defecto muestra todos)
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const gridRef = useRef<HTMLDivElement>(null);

  // Filtrado de reportes basado en el estado
  const filteredPosts = blogPosts.filter((post) => {
    if (selectedYear === "ALL") return true;
    return post.date === selectedYear;
  });

  // Efecto Fade In al hacer Scroll usando Intersection Observer
  useEffect(() => {
    const gridElement = gridRef.current;
    if (!gridElement) return;

    // Seleccionamos todos los artículos de la grilla
    const articles = gridElement.querySelectorAll(".fade-card");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando la tarjeta entra en pantalla, se activa la opacidad
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target); // Dejamos de observar una vez visible
          }
        });
      },
      {
        threshold: 0.15, // Se activa cuando el 15% de la tarjeta es visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    articles.forEach((article) => observer.observe(article));

    return () => observer.disconnect();
  }, [selectedYear]); // Se vuelve a ejecutar al cambiar el filtro para animar los nuevos resultados

  return (
    <section id="intelligence-grid" className="w-full py-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-px36">
      <div className="max-w-[1260px] mx-auto">
        
        {/* Barra de Filtros Premium (Quiet Luxury Style) */}
        <div className="flex items-center gap-6 mb-16 border-b border-white/5 pb-6">
          <span className="font-sans text-xs uppercase tracking-widest text-white/40 font-medium">
            Filter by Year:
          </span>
          <div className="flex items-center gap-4">
            {["ALL", "2025", "2026"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`font-sans text-xs uppercase tracking-widest pb-2 border-b transition-all duration-300 ${
                  selectedYear === year
                    ? "text-brand-gold border-brand-gold font-semibold"
                    : "text-white/40 border-transparent hover:text-white"
                }`}
              >
                {year === "ALL" ? "All Reports" : year}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Reportes con Referencia de Animación */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, idx) => {
            const registryData = destinationsRegistry[post.slug];
            if (!registryData) return null;

            return (
              <article
                key={idx}
                className="fade-card flex flex-col border border-white/5 bg-neutral-900 rounded-lg overflow-hidden group hover:border-[#C4944E]/30 flex-grow relative opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              >
                {/* Contenedor Visual Limpio */}
                <div className="w-full h-[260px] relative overflow-hidden bg-brand-charcoal">
                  <img
                    src={registryData.imageUrl}
                    alt={registryData.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-100" />
                </div>

                {/* Bloque de Contenido y Datos */}
                <div className="p-8 flex flex-col justify-between flex-grow bg-neutral-900">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-sans text-xs text-[#C4944E] uppercase tracking-wider font-semibold">
                        {post.tag}
                      </span>
                      <span className="font-sans text-xs text-white/30">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl text-white font-normal leading-snug mb-3 group-hover:text-[#C4944E] transition-colors duration-300">
                      <a href={`/${post.slug}`}>
                        {registryData.title}
                      </a>
                    </h2>

                    <p className="font-sans text-sm text-white/60 leading-relaxed mb-6 font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer de Tarjeta Optimizado: Eliminamos "Aysén System • Core Intel" */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                    <Link
                      href={`/${post.slug}`}
                      className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold border-b border-[#C4944E]/20 pb-1 hover:border-[#C4944E] transition-all"
                    >
                      Examine Report
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        {/* Aviso de no resultados */}
        {filteredPosts.length === 0 && (
          <div className="w-full py-12 text-center border border-white/5 rounded-lg">
            <p className="font-sans text-sm text-white/40 font-light">No field reports archived for the selected parameters.</p>
          </div>
        )}

      </div>
    </section>
  );
}