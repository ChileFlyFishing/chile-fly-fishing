import type { Metadata } from "next";

// Componentes del Sistema Core (Organismos)
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery"; 
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

// Componentes Específicos de la Ruta (Segmentados)
import SeasonCard from "@/components/molecules/SeasonCard";
import LiveHatchSimulator from "@/components/atoms/LiveHatchSimulator"; 

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTATICA (SSR Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Best Time to Fly Fish in Patagonia | Patagonia Fishing Seasons",
  description: "Discover the best time to fly fish in Patagonia. Complete guide to Coyhaique fishing seasons, brown trout hatch charts, weather, and regulations.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/fishing-season",
  },
  openGraph: {
    title: "Best Time to Fly Fish in Patagonia | Patagonia Fishing Seasons",
    description: "Discover the best time to fly fish in Patagonia. Complete guide to Coyhaique fishing seasons, brown trout hatch charts, weather, and regulations.",
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
      description: "Our official operations kick off on October 12th. Post-spawning wild brown and rainbow trout feed aggressively after the Patagonian winter. High water levels in freestone rivers like the Simpson and Paloma force trophy fish near the banks. This is an exceptional window for targeting massive trout with large baitfish streamer patterns and 200-250 grain sinking lines."
    },
    {
      period: "January - March",
      name: "Peak Dry Fly & Terrestrials",
      tactics: "Match the Hatch / Sight Fishing",
      description: "The absolute climax for the dry-fly purist and the premier window for Patagonia fly fishing trips. Warmer temperatures trigger massive hatches of grasshoppers, beetles, and caddisflies along the famous Ñirehuao river. Technical spring creeks become active sight-fishing arenas where perfect drag-free drifts, long light leaders, and extreme stealth are mandatory."
    },
    {
      period: "April - First Week of May",
      name: "Late Season Autumn Runs",
      tactics: "Technical Dries & Large Streamers",
      description: "Operations conclude during the first week of May. As fall foliage transforms the valleys of the Aysén region, large brown trout begin their pre-spawn migrations. Days are cooler, wind intensity drops, and intense mayfly hatches dominate quiet afternoons. A peaceful, highly rewarding timeline for seasoned anglers seeking legendary trophy trout in isolated waters."
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
        {/* SECCIÓN 1: Menú Global (Fuera del main por semántica SEO) */}
        <Navbar />

        {/* CUERPO CENTRAL DE LA EXPERIENCIA */}
        <main>
          {/* OPTIMIZACIÓN AEO: Aplicación de la regla BLUF en el párrafo introductorio */}
          <InternalHero 
            subtitle="Operational Blueprint"
            title="Patagonia Fly Fishing Seasons: Best Time to Fish Coyhaique"
            paragraph="The best time to fly fish in Patagonia is between January and March for peak dry fly terrestrial action, while the early season starting October 12 and late autumn offer optimal windows for trophy trout on streamers. Successfully navigating the diverse Patagonia fishing seasons requires a tactical reading of hatches, wind proficiency, and water levels across the Aysén region."
            imageUrl="assets/images/guide-and-anglers-fishing-patagonia.avif"
            buttonText="View Mandatory Gear"
            buttonHref="#technical-gear"
          />

          {/* 2. INYECCIÓN DEL SIMULADOR EN VIVO (MÓDULO INTERACTIVO INTRODUCTORIO) */}
          <div className="w-full px-6 md:px-12 bg-[#202020] pt-12">
            <LiveHatchSimulator />
          </div>

          {/* Desglose Cronológico de Temporadas */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
            <div className="max-w-[1440px] mx-auto space-y-[72px]">
              {seasonsDetailed.map((season, index) => (
                <div key={index} className="border-t border-white/10 pt-[36px] grid grid-cols-1 md:grid-cols-12 gap-[24px]">
                  <div className="md:col-span-4">
                    <span className="font-sans text-xs uppercase tracking-wider text-[#C4944E] font-semibold block mb-[6px]">
                      {season.period}
                    </span>
                    <h2 className="font-display text-2xl lg:text-3xl text-white font-normal">
                      {season.name}
                    </h2>
                    <span className="inline-block mt-[12px] text-xs font-sans bg-neutral-900 px-[12px] py-[6px] rounded-full border border-white/5 text-white/60">
                      {season.tactics}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed pt-[6px]">
                      {season.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN: Mandatory Gear and Technical Preparation */}
          <section id="technical-gear" className="w-full py-[92px] px-[24px] md:px-[48px] bg-neutral-900 border-t border-b border-white/5 scroll-mt-[42px]">
            <div className="max-w-[1440px] mx-auto">
              <div className="mb-[60px] max-w-3xl">
                <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-[18px]">
                  Mandatory Gear and Technical Preparation
                </h2>
                <p className="font-sans text-white/60 text-base leading-relaxed">
                  Success across the different Patagonia fishing seasons is dictated by equipment preparation. The volatile weather conditions in Coyhaique demand reliable, high-performance gear capable of handling heavy winds and technical dry fly casting scenarios.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[36px]">
                <div className="border-l border-[#C4944E]/20 pl-[24px]">
                  <h3 className="font-display text-xl text-[#C4944E] mb-[12px]">Rod Selection</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    A fast-action 6-weight rod is the mandatory primary tool for penetrating the Patagonian wind and turning over heavy terrestrial beetle and hopper rigs. A robust 7 or 8-weight rod is strictly required for heavy streamer operations on lakes and large river systems.
                  </p>
                </div>
                <div className="border-l border-[#C4944E]/20 pl-[24px]">
                  <h3 className="font-display text-xl text-[#C4944E] mb-[12px]">Fly Lines</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Standard lines underperform in Aysén. Equip weight-forward floating lines with an aggressive front taper (half-size heavy) to load fast-action rods quickly with minimal false casting. For early season freestone settings, a 200-250 grain sink-tip line is required.
                  </p>
                </div>
                <div className="border-l border-[#C4944E]/20 pl-[24px]">
                  <h3 className="font-display text-xl text-[#C4944E] mb-[12px]">Technical Apparel</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">
                    Weather in the heart of Patagonia is highly volatile. A strict technical layering system is required. Premium Gore-Tex waders and wading boots with tungsten studs are non-negotiable for safe navigation across our slick, rocky riverbeds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: Regulación Legal / Licencia de Pesca Sernapesca */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
            <div className="max-w-[1440px] mx-auto border border-[#C4944E]/20 bg-[#C4944E]/5 rounded-[8px] p-[36px] md:p-[48px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[30px]">
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl md:text-3xl text-white font-normal mb-[12px]">
                  Legal Requirement: Recreational Fishing License
                </h2>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  To fish legally during the Patagonia fly fishing season, all domestic and foreign anglers are strictly required by Chilean law to carry an active recreational fishing license issued by <strong>Sernapesca</strong>. Our guiding team coordinates beats within highly regulated areas where enforcement is mandatory. Please secure your credential prior to arrival.
                </p>
              </div>
              <Link
                href="https://www.sernapesca.cl/informacion-utilidad/obtener-licencia-para-pesca-recreativa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap px-[24px] py-[12px] font-sans font-semibold text-white bg-[#006DC6] rounded-[4px] hover:bg-[#006DC6]/90 transition-colors uppercase text-xs tracking-wider"
              >
                Obtain Official License
              </Link>
            </div>
          </section>

          {/* Consistencia de Bloques Sensoriales (Inyección de la Galería arriba de Testimonios) */}
          <ImageGallery />
          <Testimonials />
          <CinematicVideo />
        </main>

        {/* SECCIÓN FINAL: Cierre Global (Fuera del main) */}
        <Footer />
      </div>
    </>
  );
}