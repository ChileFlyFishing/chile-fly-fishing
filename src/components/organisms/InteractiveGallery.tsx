"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface GalleryItem {
  title: string;
  desc: string;
  season: string;
  rod: string;
  flies: string;
  lines: string;
  usaMedia: string;
  otherMedia: string;
}

const items: GalleryItem[] = [
  { 
    title: "Early Season: Big Rainbows Trout", 
    desc: "High water velocity and aggressive pre-hatch feeding. Target migratory and massive resident rainbow trout tight against the structure using heavy streamers and sink-tips.",
    season: "October - November",
    rod: "#7 or #8 weight",
    flies: "Heavy streamers (Sculpin patterns)",
    lines: "Fast sinking (Type 6 or 7)",
    usaMedia: "apertura-temporada-flyfishing-rainbow-trout.avif", 
    otherMedia: "apertura-temporada-flyfishing-rainbow-trout.avif" 
  },
  { 
    title: "High Season: World-Class Dry Fly", 
    desc: "The terrestrial explosion. Beetles and grasshoppers drop from the banks, triggering violent surface strikes in hidden spring creeks. A dry fly sight-fishing experience unique in the world.",
    season: "January - February",
    rod: "#5 or #6 weight",
    flies: "Terrestrials (Grasshoppers, Beetles)",
    lines: "Weight Forward Floating",
    usaMedia: "brown-trout-with-fat-albert-coyhaique.avif", 
    otherMedia: "brown-trout-with-fat-albert-coyhaique.avif" 
  },
  { 
    title: "Close Season: Trophy Browns", 
    desc: "Cooler, windless afternoons and massive mayfly hatches. Legendary brown trout begin their pre-spawn migrations through stunning autumn valleys. Your chance at a true monster.",
    season: "April - May",
    rod: "#7 or #8 weight",
    flies: "Articulated streamers",
    lines: "Weight Forward Floating and sinking tip",
    usaMedia: "chileflyfishing-brown-trout-end-of-season.avif", 
    otherMedia: "chileflyfishing-brown-trout-end-of-season.avif" 
  },
];

export default function InteractiveGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUSA, setIsUSA] = useState(false);

  useEffect(() => {
    const lang = navigator.language || "";
    setIsUSA(lang.startsWith("en"));
  }, []);

  return (
    <section className="w-full py-[144px] bg-[#202020] px-[24px] md:px-[48px]">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        {/* Columna Izquierda: Accordeon UI con Delay Animado */}
        <div className="flex flex-col space-y-4">
          {items.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveIndex(idx)}
              className="text-left py-6 border-b border-white/10 transition-all duration-500 ease-in-out"
            >
              <h3 className={`font-display text-4xl mb-4 transition-all duration-500 ${activeIndex === idx ? "text-[#C4944E]" : "text-white/30"}`}>
                {item.title}
              </h3>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  activeIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Parrafo aparece primero */}
                <div className="transition-opacity duration-500 delay-100 opacity-100">
                  <p className="font-sans text-white/70 leading-relaxed pt-2">{item.desc}</p>
                </div>
                
                {/* Tabla aparece después */}
                <div className={`transition-opacity duration-500 delay-300 ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}>
                  <ul className="grid grid-cols-2 gap-4 text-sm font-sans text-white/50 border-t border-white/5 mt-6 pt-6">
                    <li><span className="block text-[#C4944E] text-xs uppercase tracking-widest">Season</span>{item.season}</li>
                    <li><span className="block text-[#C4944E] text-xs uppercase tracking-widest">Rod</span>{item.rod}</li>
                    <li><span className="block text-[#C4944E] text-xs uppercase tracking-widest">Flies</span>{item.flies}</li>
                    <li><span className="block text-[#C4944E] text-xs uppercase tracking-widest">Lines</span>{item.lines}</li>
                  </ul>
                  <Link href="/contact-us" className="inline-block mt-6 text-[#C4944E] font-semibold tracking-wide hover:underline underline-offset-4">
                    Secure your fishing trip →
                  </Link>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Columna Derecha: Imagen con delay largo para efecto cinemático final */}
        <div className="relative w-full h-[700px] overflow-hidden">
          {items.map((item, idx) => (
            <img 
              key={idx}
              src={`/assets/images-usa/${isUSA ? item.usaMedia : item.otherMedia}`} 
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeIndex === idx ? "opacity-100 delay-500" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}