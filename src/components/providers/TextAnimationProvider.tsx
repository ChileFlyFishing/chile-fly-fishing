"use client";

import { useEffect, useRef } from "react";

export default function TextAnimationProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detectamos automáticamente todos los H1, H2, H3 y P dentro del Home
    const textElements = container.querySelectorAll("h1, h2, h3, p");

    // Configuramos los estilos iniciales de invisibilidad (sin parpadeos de carga)
    textElements.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-[1000ms]", "ease-[cubic-bezier(0.215,0.61,0.355,1)]", "will-change-transform");
    });

    // Creamos el observador nativo (Cero impacto en el procesador principal)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // El texto aparece de forma elegante cuando entra en pantalla
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target); // Dejamos de observarlo una vez revelado
          }
        });
      },
      {
        threshold: 0.1,      // Se activa apenas asoma el 10% del texto
        rootMargin: "0px 0px -30px 0px" // Margen inferior para anticipar la aparición antes del tope visual
      }
    );

    textElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}