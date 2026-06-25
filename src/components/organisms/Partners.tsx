export default function Partners() {
  const partners = [
    { name: "Douglas", src: "assets/images/douglas-logo.svg" },
    { name: "Patagonia", src: "assets/images/logo-patagonia.svg" },
    { name: "Mitsubishi Motors", src: "assets/images/logo-mitsubishi.svg" },
    { name: "Turtlebox", src: "assets/images/logo-turtle-box.png" }
  ];

  return (
    <section 
      className="w-full py-24 px-6 md:px-12 border-t border-b border-black/5" 
      style={{ backgroundColor: '#F8F6F2' }}
    >
      <div className="max-w-[1260px] mx-auto text-center">
        
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