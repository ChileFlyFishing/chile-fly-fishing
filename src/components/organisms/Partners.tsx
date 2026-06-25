export default function Partners() {
  const partners = [
    { name: "Douglas", src: "https://chileflyfishingexpeditions.com/wp-content/uploads/2025/04/douglas-logo.svg" },
    { name: "Patagonia", src: "https://chileflyfishingexpeditions.com/wp-content/uploads/2025/04/logo-patagonia.svg" },
    { name: "Mitsubishi Motors", src: "https://chileflyfishingexpeditions.com/wp-content/uploads/2025/04/logo-mitsubishi.svg" },
    { name: "Turtlebox", src: "https://chileflyfishingexpeditions.com/wp-content/uploads/2025/04/logo-turtle-box.png" }
  ];

  return (
    <section 
      className="w-full py-24 px-6 md:px-12 border-t border-b border-black/5" 
      style={{ backgroundColor: '#F8F6F2' }}
    >
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Título en color oscuro para legibilidad sobre el fondo crema */}
        <h2 className="font-display text-2xl md:text-4xl text-brand-charcoal font-normal tracking-tight mb-16 max-w-2xl mx-auto leading-tight">
          Our Trusted Fly Fishing Partners
          <span className="italic opacity-80"> in Patagonia, Chile</span>
        </h2>

        {/* Grilla de Logos en su color natural */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-full h-16 max-w-[160px] flex items-center justify-center">
              <img
                src={partner.src}
                alt={partner.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}