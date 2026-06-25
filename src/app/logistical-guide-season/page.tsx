// src/app/fishing-season/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero"; // <-- Importado el Hero unificado
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTATICA (SSR)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Season & Regulations | Coyhaique",
  description: "Technical operational blueprint for fly fishing in Coyhaique, Chile. Detailed hatch timelines, weather dynamics, mandatory gear, and legal licensing rules.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/fishing-season",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Season & Regulations | Coyhaique",
    description: "Technical operational blueprint for fly fishing in Coyhaique, Chile. Detailed hatch timelines, weather dynamics, mandatory gear, and legal licensing rules.",
    url: "https://chileflyfishingexpeditions.com/fishing-season",
    type: "website",
  },
};

export default function FishingSeasonPage() {
  const seasonsDetailed = [
    {
      period: "October 12 - December",
      name: "Early Season Dynamics",
      tactics: "Streamers & Heavy Nymphing",
      description: "Our official operations kick off on October 12th. Post-spawning wild trout feed aggressively after the Patagonian winter. High water levels mean fish stick to the banks and structure. Exceptional time for targeting massive migratory browns with large streamers and sinking lines in deep freestone channels near Coyhaique."
    },
    {
      period: "January - March",
      name: "Peak Dry Fly & Terrestrials",
      tactics: "Match the Hatch / Sight Fishing",
      description: "The absolute climax for the dry-fly purist. Warmer temperatures trigger massive hatches of beetles, grasshoppers, and caddisflies. The technical spring creeks become active sight-fishing arenas where presentation, long light leaders, and stealth are critically required."
    },
    {
      period: "April - First Week of May",
      name: "Late Season Autumn Runs",
      tactics: "Technical Dries & Large Streamers",
      description: "Operations conclude during the first week of May. As the fall colors transform the valleys, large brown trout begin their pre-spawn migrations. Days are cooler, wind drops, and mayfly hatches dominate the quiet afternoons. A peaceful, highly rewarding time for seasoned anglers seeking legendary trophies in isolated waters."
    }
  ];

  // ========================================================
  // OPTIMIZACIÓN SEO: DATA ESTRUCTURADA JSON-LD
  // ========================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Coyhaique Fly Fishing Season Operations",
    "description": "Official operational blueprint and season analysis for fly fishing in the Aysén Region, Patagonia.",
    "startDate": "2026-10-12",
    "endDate": "2027-05-07",
    "location": {
      "@type": "Place",
      "name": "Coyhaique, Chilean Patagonia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coyhaique",
        "addressRegion": "Aysén",
        "addressCountry": "CL"
      }
    }
  };

  return (
    <>
      {/* Inyección estructural para rastreadores SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          {/* EL NUEVO HERO REUTILIZABLE CON TODOS SUS ATRIBUTOS DEFINIDOS */}
          <InternalHero 
            subtitle="Operational Blueprint"
            title="Coyhaique Fly Fishing Season: Operations in the Heart of Patagonia"
            paragraph="Executing a successful expedition in the heart of Patagonia requires a tactical reading of water levels, hatch cycles, and weather patterns. Coyhaique fly fishing is defined by its operational diversity. From high-water streamer tactics to technical dry fly presentations, this report details the exact conditions you will face and the logistics required to navigate the premier waters of Chilean Patagonia."
            imageUrl="assets/images/nireguao-river-flyfishing-patagonia.avif"
            buttonText="Secure your dates"
            buttonHref="/contact-us"
          />

          {/* Desglose Cronológico de Temporadas */}
          <section className="w-full py-px92 px-px24 md:px-px48 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto space-y-px72">
              {seasonsDetailed.map((season, index) => (
                <div key={index} className="border-t border-white/10 pt-px36 grid grid-cols-1 md:grid-cols-12 gap-px24">
                  <div className="md:col-span-4">
                    <span className="font-sans text-xs uppercase tracking-wider text-brand-gold font-semibold block mb-px6">
                      {season.period}
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl text-white font-normal">
                      {season.name}
                    </h2>
                    <span className="inline-block mt-px12 text-xs font-sans bg-neutral-900 px-px12 py-px6 rounded-full border border-white/5 text-white/60">
                      {season.tactics}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed pt-px6">
                      {season.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NUEVA SECCIÓN: Mandatory Gear and Technical Preparation */}
          <section className="w-full py-px92 px-px24 md:px-px48 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto">
              <div className="mb-px60 max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-px18">
                  Mandatory Gear and Technical Preparation
                </h2>
                <p className="font-sans text-white/60 text-base leading-relaxed">
                  Success in Patagonia is dictated by preparation. The conditions in Coyhaique demand reliable, high-performance equipment capable of handling wind and highly technical casting scenarios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px36">
                <div className="border-l border-brand-gold/20 pl-px24">
                  <h3 className="font-display text-xl text-brand-gold mb-px12">Rod Selection</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    A fast-action 6-weight rod is the mandatory primary tool for penetrating the Patagonian wind and turning over heavy terrestrial rigs. A 7 or 8-weight rod is required for streamer operations on lakes and larger river systems.
                  </p>
                </div>
                <div className="border-l border-brand-gold/20 pl-px24">
                  <h3 className="font-display text-xl text-brand-gold mb-px12">Fly Lines</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Standard lines will underperform in these conditions. Equip weight-forward floating lines with an aggressive front taper (half-size heavy) to load fast-action rods quickly with minimal false casting. For early season freestone rivers, a 200-250 grain sink-tip line is required.
                  </p>
                </div>
                <div className="border-l border-brand-gold/20 pl-px24">
                  <h3 className="font-display text-xl text-brand-gold mb-px12">Technical Apparel</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    The weather in the heart of Patagonia is volatile. A strict technical layering system is required. Premium Gore-Tex waders and wading boots with tungsten studs are non-negotiable for safe navigation across our rocky riverbeds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* NUEVA SECCIÓN: Regulación Legal / Licencia de Pesca Sernapesca */}
          <section className="w-full py-px92 px-px24 md:px-px48 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto border border-brand-gold/20 bg-brand-gold/5 rounded-[8px] p-px36 md:p-px48 flex flex-col md:flex-row items-start md:items-center justify-between gap-px30">
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl md:text-3xl text-white font-normal mb-px12">
                  Legal Requirement: Recreational Fishing License
                </h2>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  To fish legally in the Aysén region, all domestic and foreign anglers are strictly required by Chilean law to carry an active recreational fishing license issued by <strong>Sernapesca</strong>. Our guiding team coordinates beats within highly regulated areas where enforcement is mandatory. Please secure your credential prior to arrival.
                </p>
              </div>
              <a 
                href="https://www.sernapesca.cl/informacion-utilidad/obtener-licencia-para-pesca-recreativa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap px-px24 py-px12 font-sans font-medium text-brand-charcoal bg-brand-gold rounded-[8px] hover:bg-brand-gold/90 transition-all uppercase text-xs tracking-wider"
              >
                Obtain Official License
              </a>
            </div>
          </section>

          {/* Consistencia global de bloques */}
          <Testimonials />
          <CinematicVideo />
        </main>

        <Footer />
      </div>
    </>
  );
}