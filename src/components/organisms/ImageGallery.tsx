"use client";

import { useState, useEffect } from "react";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export default function ImageGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [randomizedImages, setRandomizedImages] = useState<GalleryImage[]>([]);

  // 1. Base de datos completa con tus imágenes de la carpeta public/assets/images
  const allImages: GalleryImage[] = [
    { id: 1, url: "assets/images/cataraft-dragonfly-trout-fishing-lake-zenteno-dragon-fly.avif", alt: "Drone view of a cataraft fly fishing at Lake Zenteno, Coyhaique" },
    { id: 2, url: "assets/images/cantaria-patagonia-flyfishing.webp", alt: "Close-up of a live Cantaria beetle insect in Patagonia" },
    { id: 3, url: "assets/images/brown-trout-with-fat-albert-coyhaique.avif", alt: "Massive wild brown trout captured with a Fat Albert in Coyhaique" },
    { id: 4, url: "assets/images/brown-trout-in-a-boat-coyhaique.avif", alt: "Fly fisherman showcasing a trophy brown trout inside a jet boat" },
    { id: 5, url: "assets/images/brown-trout-fishing-spring-creek-patagonia.avif", alt: "Colorful wild brown trout at a private spring creek" },
    { id: 6, url: "assets/images/brow-trout-patagonia-fly-fishing.avif", alt: "Releasing a healthy wild brown trout back into the Aysén river system" },
    { id: 7, url: "assets/images/apertura-temporada-flyfishing-rainbow-trout.jpg", alt: "Giant trophy rainbow trout during early season opening in Patagonia" },
    { id: 8, url: "assets/images/anglers-fishing-blue-river-and-lake.avif", alt: "Panoramic landscape of a cataraft drifting down a turquoise river" },
    { id: 9, url: "assets/images/anglers-enjoying-patagonia.jpg", alt: "Fly fishing guests enjoying a traditional riverside lunch and wine" },
    { id: 10, url: "assets/images/angler-nirehuao-river-patagonia-fly-fishing.avif", alt: "Technical angler casting dry flies on the Ñirehuao River" },
  ];

  useEffect(() => {
    // 2. Algoritmo Fisher-Yates para mezclar aleatoriamente de forma eficiente
    const shuffleAndPick = (array: GalleryImage[], count: number) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, count);
    };

    const selected = shuffleAndPick(allImages, 9);
    setRandomizedImages(selected);
  }, []);

  useEffect(() => {
    if (randomizedImages.length === 0) return;

    // 3. Observer nativo para hacer aparecer cada imagen al hacer scroll (Afecta la grilla de escritorio)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    const items = document.querySelectorAll(".gallery-parallax-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [randomizedImages]);

  const col1 = randomizedImages.slice(0, 3);
  const col2 = randomizedImages.slice(3, 6);
  const col3 = randomizedImages.slice(6, 9);

  return (
    <>
      <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-black/5 overflow-hidden">
        <div className="max-w-[1260px] mx-auto">
          
          {/* Cabecera Editorial */}
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-[#202020] mb-6 tracking-tight">
              Unforgettable Fly Fishing Moments in Coyhaique, Patagonia
            </h2>
            <p className="font-sans text-[#202020]/70 text-base md:text-lg font-light leading-relaxed">
              A glimpse into the isolation, the crystalline waters, and the wild trout that define our private beats. Real moments, captured on the drift.
            </p>
          </div>

          {/* ESTRUCTURA MOBILE: Carrusel Horizontal con Desplazamiento Fluido de Alta Gama (md:hidden) */}
          <div className="flex md:hidden overflow-x-auto gap-6 pb-8 scrollbar-none snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
            {randomizedImages.map((img) => (
              <div
                key={`mobile-${img.id}`}
                onClick={() => setActiveImage(img.url)}
                className="w-[78vw] sm:w-[60vw] flex-shrink-0 snap-center rounded-lg overflow-hidden bg-neutral-100 shadow-sm aspect-[3/4] relative cursor-zoom-in"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.02]" />
              </div>
            ))}
          </div>

          {/* ESTRUCTURA DESKTOP: Grilla Asimétrica de 3 Columnas Tradicional (hidden md:grid) */}
          <div className="hidden md:grid grid-cols-3 gap-8 items-start">
            
            {/* Columna 1 */}
            <div className="flex flex-col gap-8">
              {col1.map((img) => (
                <div 
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className="gallery-parallax-item opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform relative overflow-hidden rounded-lg bg-neutral-100 shadow-sm group cursor-zoom-in aspect-[3/4]"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col gap-8 md:translate-y-16">
              {col2.map((img) => (
                <div 
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className="gallery-parallax-item opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform relative overflow-hidden rounded-lg bg-neutral-100 shadow-sm group cursor-zoom-in aspect-[3/4]"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>

            {/* Columna 3 */}
            <div className="flex flex-col gap-8 md:-translate-y-8">
              {col3.map((img) => (
                <div 
                  key={img.id}
                  onClick={() => setActiveImage(img.url)}
                  className="gallery-parallax-item opacity-0 translate-y-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform relative overflow-hidden rounded-lg bg-neutral-100 shadow-sm group cursor-zoom-in aspect-[3/4]"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6 cursor-zoom-out"
        >
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-xs font-sans tracking-widest uppercase"
          >
            ✕ Close
          </button>
          <div className="relative max-w-[1100px] max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={activeImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}