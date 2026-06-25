interface SeasonCardProps {
  title: string;
  dates: string;
  description: string;
  imageSrc: string;
}

export default function SeasonCard({ title, dates, description, imageSrc }: SeasonCardProps) {
  return (
    <a 
      href="/patagonia-fly-fishing" 
      className="relative h-[620px] w-full rounded-lg overflow-hidden group border border-white/5 bg-neutral-900 block cursor-pointer transition-all duration-300 hover:border-brand-gold/30"
    >
      
      {/* Contenedor de Imagen con Efecto Parallax y Zoom suave en Hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={imageSrc} 
          className="w-full h-[120%] object-cover absolute -top-[10%] opacity-90 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.04]" 
          style={{ transform: 'translateY(var(--scroll-tilt, 0px))' }}
          alt={title}
        />
      </div>
      
      {/* Gradiente sofisticado solo en el texto inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 transition-opacity duration-300 group-hover:via-black/70" />
      
      {/* Contenido en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 z-10 flex flex-col justify-end h-1/2">
        <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-brand-gold uppercase mb-3 block">
          {dates}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-white font-normal mb-3 transition-colors duration-300 group-hover:text-brand-gold">
          {title}
        </h3>
        <p className="font-sans text-sm text-white/60 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </a>
  );
}