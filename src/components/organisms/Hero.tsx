"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { WaterSceneController } from "@/lib/three/waterScene"; 

// Definimos qué textos e información puede recibir este Hero desde cualquier página
interface HeroProps {
  title?: React.ReactNode; // Permite pasar texto con saltos de línea <br />
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function Hero({ 
  title = <>Aguas sin presión.<br />Patagonia real.</>, 
  description = "Diseñamos expediciones técnicas en Coyhaique, Valle de Ñirehuao y Cerro Castillo. Un estándar estricto de máximo 1 hora y 30 minutos de traslado diario para que pases más tiempo en el agua tentando truchas salvajes.",
  buttonText = "Explorar Destinos",
  buttonHref = "/contact-us"
}: HeroProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. INICIALIZAR THREE.JS (El río abstracto)
    let waterScene: WaterSceneController | null = null;
    if (canvasContainerRef.current) {
      waterScene = new WaterSceneController(canvasContainerRef.current);
    }

    // 2. INICIALIZACIÓN DE LENIS (Scroll suave)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. ANIMACIONES CINEMÁTICAS CON GSAP (Entrada elegante de textos)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(canvasContainerRef.current, {
        opacity: 0,
        duration: 2,
      })
      .from("[data-animate='title']", {
        y: 60,
        opacity: 0,
        duration: 1.4,
      }, "-=1.5")
      .from("[data-animate='description']", {
        y: 30,
        opacity: 0,
        duration: 1.0,
      }, "-=0.9")
      .from("[data-animate='action-btn']", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.7");

    }, scopeRef);

    // 4. LIMPIEZA ABSOLUTA DE MEMORIA (Evita que se caliente el computador)
    return () => {
      ctx.revert();
      lenis.destroy();
      if (waterScene) {
        waterScene.dispose();
      }
    };
  }, []);

  return (
    <section 
      ref={scopeRef} 
      className="relative w-full h-screen flex items-end justify-start overflow-hidden bg-[#202020]"
      aria-label="Expedición de Pesca con Mosca en Patagonia"
    >
      {/* Contenedor del Canvas 3D */}
      <div 
        ref={canvasContainerRef}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,#202020_90%)]"
      >
        {/* Degradado oscuro unificado (#202020) para blindar el contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent opacity-60" />
      </div>

      {/* Textos del Hero ajustados estrictamente a la escala de espaciados de la marca */}
      <div className="relative z-10 max-w-3xl px-[48px] pb-[72px] md:px-[72px] md:pb-[92px]">
        
        <h1 
          data-animate="title"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-white tracking-tight select-none"
        >
          {title}
        </h1>

        <p 
          data-animate="description"
          className="mt-[36px] font-sans text-base md:text-lg text-white/80 max-w-xl leading-relaxed tracking-normal"
        >
          {description}
        </p>

        {/* Cambiado a etiqueta <a> nativa para soportar la navegación fluida */}
        <a
          href={buttonHref}
          data-animate="action-btn"
          className="mt-[30px] inline-flex items-center justify-center px-[36px] py-[18px] font-sans font-medium text-white bg-[#006DC6] rounded-[30px] shadow-lg hover:bg-[#006DC6]/90 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm tracking-wide uppercase font-semibold"
        >
          {buttonText}
        </a>

      </div>
    </section>
  );
}