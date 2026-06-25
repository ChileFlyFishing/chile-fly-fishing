// src/app/patagonia-fly-fishing/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero"; // <-- El Hero correcto con imagen estática
import UntamedWatersSection from "@/components/organisms/UntamedWatersSection";
import SeasonGrid from "@/components/organisms/SeasonGrid";
import ImageGallery from "@/components/organisms/ImageGallery";
import FAQSection from "@/components/organisms/FAQSection";
import InteractiveGallery from "@/components/organisms/InteractiveGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import { PATAGONIA_FAQS } from "@/config/faqs";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA (SSR Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Trips | Remote Coyhaique Expeditions",
  description: "Untamed catch-and-release fly fishing expeditions in Coyhaique, Chile. Target wild brown and rainbow trout across exclusive Patagonian rivers.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Trips | Remote Coyhaique Expeditions",
    description: "Untamed catch-and-release fly fishing expeditions in Coyhaique, Chile. Target wild brown and rainbow trout across exclusive Patagonian rivers.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing",
    type: "website",
  },
};

export default function PatagoniaFlyFishingPage() {
  // ========================================================
  // OPTIMIZACIÓN SEO: DATA ESTRUCTURADA SEMÁNTICA (JSON-LD)
  // ========================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": PATAGONIA_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      {/* Inyección nativa en servidor para Crawlers (Googlebot) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full min-h-screen relative bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        {/* Capa de Navegación */}
        <Navbar />

        {/* Hero personalizado con la imagen cinemática correcta para esta sección */}
        <InternalHero 
          title={<>Patagonia Fly Fishing Trips |<br />Remote Chilean Expeditions</>}
          paragraph="Trade crowded rivers for the untamed waters of Chilean Patagonia. Based out of Coyhaique, we guide dedicated anglers to the most remote corners of the map to hunt wild brown and rainbow trout."
          imageUrl="assets/images/spring-creek-anglers-patagonia-fly-fishing.avif"
          buttonText="Secure your dates"
          buttonHref="/contact-us"
        />
        
        {/* Organismos Modulares */}
        <UntamedWatersSection />
        
        <InteractiveGallery/>

        {/* NUEVA SECCIÓN: EXPEDITION DETAILS (Inclusión del programa de pesca) */}
        <section className="w-full py-[96px] px-6 md:px-12 bg-neutral-950 border-t border-white/5">
          <div className="max-w-[1440px] mx-auto">
            
            <div className="mb-[54px]">
              {/* Título H2 Estandarizado Dark Background (Playfair Display) */}
              <h2 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight leading-tight">
                The Expedition Details: Coyhaique, Patagonia
              </h2>
            </div>

            {/* Grilla Simétrica adaptada a la Regla del 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">6 Full Days on the Water</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Expertly guided drift and wade fishing across Coyhaique’s remote freestone rivers, lakes, and hidden spring creeks.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">7 Nights Premium Lodging</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Authentic Patagonian hospitality. Rest in a private, comfortable basecamp designed specifically to recharge dedicated anglers.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Chef-Prepared Meals & Shore Lunches</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  From hearty breakfasts to traditional Patagonian asados on the riverbank, and gourmet dinners to end the day.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Private 4×4 Transportation</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Rugged, reliable trucks to safely access the most isolated waters and put you exactly where the fish are.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Expert Local Guides</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Hard-rowing, bilingual professionals with decades of combined experience reading Patagonian waters.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Drinks included</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Selected Chilean wines, local beers, and premium beverages available on the water.
                </p>
              </div>
            </div>

          </div>
        </section>

        
        <ImageGallery />
        
        <FAQSection />
        
        <Testimonials />
        
        <CinematicVideo />
        
        {/* Cierre de Ecosistema */}
        <Footer />
      </main>
    </>
  );
}