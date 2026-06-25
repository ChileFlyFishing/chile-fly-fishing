// src/components/organisms/InternalHero.tsx
import Link from "next/link";

interface InternalHeroProps {
  title: React.ReactNode;
  subtitle: string;
  paragraph: string;
  imageUrl: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function InternalHero({
  title,
  subtitle,
  paragraph,
  imageUrl,
  buttonText = "Secure your dates",
  buttonHref = "/contact-us"
}: InternalHeroProps) {
  return (
    <header className="relative w-full h-[85vh] md:h-[85vh] flex items-center pt-32 md:pt-40 px-[24px] md:px-[48px] overflow-hidden bg-[#202020]">
      {/* Capa de Imagen con Optimización de Carga Crítica (LCP) */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <img 
          src={imageUrl} 
          alt={typeof title === "string" ? title : "Chile Fly Fishing Exploration"} 
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover opacity-35 transform scale-102 transition-transform duration-1000"
        />
        {/* Degradado cinematográfico hacia el color de fondo de la app */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/50 to-transparent" />
      </div>
      
      {/* Contenedor de Contenido Semántico */}
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        {/* SUBTITLE: Átomo Badge */}
        <span className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold mb-[12px] block">
          {subtitle}
        </span>
        
        {/* TITLE: Átomo Heading H1 */}
        <h1 className="font-display text-4xl md:text-6xl text-white font-normal tracking-tight max-w-5xl leading-[1.1] mb-[24px]">
          {title}
        </h1>
        
        {/* PARAGRAPH: Texto descriptivo de soporte para SEO */}
        <p className="font-sans text-base md:text-lg text-white/80 font-normal max-w-2xl leading-relaxed mb-[36px]">
          {paragraph}
        </p>
        
        {/* BUTTON: Acción principal */}
        <Link 
          href={buttonHref}
          className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
        >
          <span>{buttonText}</span>
          {/* Sutil micro-interacción cinemática en el hover */}
          <svg 
            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </header>
  );
}