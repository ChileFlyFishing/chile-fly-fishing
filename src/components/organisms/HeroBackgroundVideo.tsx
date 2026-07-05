"use client";

import { useEffect, useRef, useState } from "react";

// Video optimizado para web (1080p, ~1.8MB, sin audio) y una variante
// liviana para mobile (720p, ~900KB). Generados con ffmpeg a partir del
// original (9.4MB, 14 Mbps): -an -crf 24/26 -maxrate 2500k/1200k -movflags +faststart.
const DESKTOP_SRC = "/assets/videos/release-brown-trout-flyfishing-patagonia-web.mp4";
const MOBILE_SRC = "/assets/videos/release-brown-trout-flyfishing-patagonia-mobile.mp4";
const FALLBACK_IMAGE = "/assets/images/chilelfyfishing-nirehuao-river.avif";

// Opacidad final del fondo (imagen o video) — se mantiene igual a la que
// tenía la imagen estática original para no alterar el contraste ya
// afinado del hero.
const BACKGROUND_OPACITY = "opacity-40";

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Difiere la carga del video hasta que el navegador termine el trabajo
    // crítico inicial (fonts, JS, primer paint) — así no compite por ancho
    // de banda con la carga del sitio, ni en desktop ni en mobile.
    const startLoading = () => {
      video.load();
      video.play().catch(() => {
        // Autoplay puede requerir un gesto del usuario en algunos navegadores;
        // la imagen de fondo queda como fallback visual permanente en ese caso.
      });
    };

    const requestIdle =
      window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(cb, 300));
    const cancelIdle =
      window.cancelIdleCallback ?? ((id: number) => window.clearTimeout(id));

    const idleId = requestIdle(startLoading);

    const handleCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      cancelIdle(idleId);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <>
      {/* Imagen de respaldo: visible de entrada y mientras el video carga.
          Se desvanece por completo una vez el video está listo (cross-fade,
          no queda mezclada debajo). */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms] ease-out ${
          videoReady ? "opacity-0" : BACKGROUND_OPACITY
        }`}
        style={{
          backgroundImage: `url('${FALLBACK_IMAGE}')`,
          backgroundAttachment: "fixed",
        }}
      />

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${
          videoReady ? BACKGROUND_OPACITY : "opacity-0"
        }`}
      >
        <source media="(max-width: 767px)" src={MOBILE_SRC} type="video/mp4" />
        <source src={DESKTOP_SRC} type="video/mp4" />
      </video>
    </>
  );
}
