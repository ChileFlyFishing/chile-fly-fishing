// src/components/organisms/UntamedWatersSection.tsx
export default function UntamedWatersSection() {
  return (
    <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
        
        {/* Título */}
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight leading-tight">
            The Untamed Waters of Patagonia
          </h2>
        </div>
        
        {/* Descripción técnica */}
        <div className="lg:col-span-7 font-sans text-white/60 text-base md:text-lg leading-relaxed">
          <p>
            Coyhaique is the strategic epicenter of South America’s most exclusive fisheries. From legendary freestone rivers to hidden spring creeks, our waters offer unpressured access to wild trout. This is where technical angling meets the absolute isolation of the Patagonian wilderness.
          </p>
        </div>

      </div>
    </section>
  );
}