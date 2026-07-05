"use client";

import { useEffect, useRef, useState } from "react";

export default function CinematicVideo() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Ruta local eficiente apuntando a tu carpeta public/
  const videoUrl = "/assets/videos/spring-creek-chilean-patagonia.mp4";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Carga el video dinámicamente solo cuando el usuario hace scroll hacia la sección (Optimización SEO)
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Se activa un poco antes de aparecer en pantalla para una transición fluida
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-neutral-900 border-t border-white/5"
      aria-label="Patagonia Wilderness Video"
    >
      {/* Contenedor del video de borde a borde */}
      <div className="absolute inset-0 w-full h-full">
        {shouldLoad ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-80 transition-opacity duration-700 ease-out"
            poster=""
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Esqueleto estructural (Poster) antes de que el usuario haga scroll */
          <div 
            className="w-full h-full bg-cover bg-center opacity-80"
            style={{ backgroundImage: "url('')" }}
          />
        )}

        {/* Capas de gradiente cinemático para fundir el video con el fondo oscuro (#202020) */}
        <div className="absolute inset-0 bg-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-[#202020]/40" />
      </div>
    </section>
  );
}