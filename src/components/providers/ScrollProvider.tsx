"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicialización de Lenis con parámetros optimizados para suavidad cinemática
    const lenis = new Lenis({
      duration: 1.4,     // Duración del desplazamiento en segundos (más alto = más suave)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleración ultra fluida
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Respuesta al scroll del mouse o trackpad de tu Mac
      infinite: false,
    });

    // Sincronización en tiempo real con el ciclo de animación del navegador
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpieza al desmontar el componente
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}