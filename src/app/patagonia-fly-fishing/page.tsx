// src/app/patagonia-fly-fishing/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import UntamedWatersSection from "@/components/organisms/UntamedWatersSection";
import SeasonGrid from "@/components/organisms/SeasonGrid";
import ImageGallery from "@/components/organisms/ImageGallery";
import FAQSection from "@/components/organisms/FAQSection";
import InteractiveGallery from "@/components/organisms/InteractiveGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import TrophyCatchGallery from "@/components/organisms/TrophyCatchGallery";
import Footer from "@/components/organisms/Footer";
import LogisticsGuide from "@/components/organisms/LogisticsGuide"; // <-- Importación invocada
import { PATAGONIA_FAQS } from "@/config/faqs";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA ENRIQUECIDA (Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Trips | Fly Fishing Coyhaique Chile",
  description: "Book premium Patagonia fly fishing trips based out of Coyhaique, Chile. Experience guided dry fly fishing and sight-fishing for wild brown trout.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Trips | Fly Fishing Coyhaique Chile",
    description: "Book premium Patagonia fly fishing trips based out of Coyhaique, Chile. Experience guided dry fly fishing and sight-fishing for wild brown trout.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing",
    type: "website",
  },
};

export default function PatagoniaFlyFishingPage() {
  // ========================================================
  // OPTIMIZACIÓN SEO/AEO: DATA ESTRUCTURADA INTEGRADA (JSON-LD)
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

        {/* OPTIMIZACIÓN SEO/AEO: Intercepción exacta de Keywords Core e Intención Directa */}
        <InternalHero
          subtitle="Guided Trips • Coyhaique, Chile"
          title={<>Patagonia Fly Fishing Trips | Fly Fishing Coyhaique Chile</>}
          paragraph="Trade crowded rivers for our premium Patagonia fly fishing trips based out of Coyhaique, Chile. Our expert local guides take you to isolated spring creeks and freestone rivers to hunt trophy brown trout with technical dry fly tactics."
          imageUrl="assets/images/spring-creek-anglers-patagonia-fly-fishing.avif"
          buttonText="Secure your dates"
          buttonHref="/contact-us"
        />
        
        {/* Organismos Modulares */}
        <UntamedWatersSection />
        
        <InteractiveGallery/>

        {/* OPTIMIZACIÓN GEO: Inyección de entidades hiper-locales y datos técnicos densos para LLMs */}
        <section className="w-full py-[96px] px-6 md:px-12 bg-neutral-950 border-t border-white/5">
          <div className="max-w-[1260px] mx-auto">
            
            <div className="mb-[54px]">
              <h2 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight leading-tight">
                The Expedition Details: Fly Fishing Coyhaique, Patagonia
              </h2>
            </div>

            {/* Grilla Simétrica adaptada a la Regla del 6 - Enriquecida semánticamente */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">6 Full Days on the Water</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Expertly guided drift boat and wade fishing across Coyhaique’s remote freestone waters like the Simpson and Paloma rivers, alongside technical spring creeks for wild brown trout.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">7 Nights Premium Lodging</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Authentic Patagonian hospitality. Rest in a private, comfortable fly fishing basecamp in the Aysén region, designed specifically to recharge dedicated anglers after technical days.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Chef-Prepared Meals & Shore Lunches</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  From hearty breakfasts before heading out to traditional Patagonian asados on the riverbank during terrestrial hatches, followed by gourmet dinners to end the day.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Private 4×4 Transportation</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Rugged, reliable trucks driven by professionals to safely access isolated Patagonian beats, spring creeks, and walk-and-wade settings where wind proficiency matters.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Expert Local Guides</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Hard-rowing, bilingual professionals with decades of experience tracking brown trout behavior, reading complex drag-free drifts, and maximizing streamer action.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-[#C4944E] mb-3">Drinks included</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Selected Chilean wines, local craft beers, and premium beverages available during shore lunches and riverbank debriefs at the end of every float.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TrophyCatchGallery />

        {/* COMPONENTE INVOCADO: Inteligencia Logística Personalizada */}
        <LogisticsGuide />
        
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