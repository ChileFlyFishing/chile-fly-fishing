// src/app/patagonia-fly-fishing-faq/page.tsx
import type { Metadata } from "next";
import { PATAGONIA_FAQS } from "@/config/faqs";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import FAQSection from "@/components/organisms/FAQSection";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA (SSR Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing FAQ | Chile Fly Fishing Expeditions",
  description: "Get expert answers about our premium Patagonia fly fishing packages. Detailed guides on Coyhaique seasons, mandatory gear, and Sernapesca licensing rules.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-faq",
  },
  openGraph: {
    title: "Patagonia Fly Fishing FAQ | Chile Fly Fishing Expeditions",
    description: "Get expert answers about our premium Patagonia fly fishing packages. Detailed guides on Coyhaique seasons, mandatory gear, and Sernapesca licensing rules.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-faq",
    type: "website",
  },
};

export default function FAQPage() {
  // ========================================================
  // DATA ESTRUCTURADA SEMÁNTICA (JSON-LD)
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
    <div className="w-full min-h-screen bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

      <main>
        {/* HERO BANNER - Optimización AEO con Regla BLUF */}
        <InternalHero 
          subtitle="Information Center"
          title="Patagonia Fly Fishing FAQ: Technical Operations"
          paragraph="Find direct answers regarding our premium Patagonia fly fishing packages based out of Coyhaique. Learn about optimal tactical seasons, mandatory equipment preparation, and legal Sernapesca recreational fishing regulations required for Chilean Patagonia."
          imageUrl="assets/images/angler-nirehuao-river-patagonia-fly-fishing.avif"
          buttonText="Contact Our Team"
          buttonHref="/contact-us"
        />

        {/* SECCIÓN DOS COLUMNAS - Consistencia Semántica y Rigurosidad Técnica */}
        <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Operational Preparation for Your Chile Fly Fishing Expeditions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">When is the best time to fly fish in Patagonia?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">The best time for dry fly terrestrial hatches in Coyhaique is January through March. Early season (October 12-December) and autumn offer optimal high-water windows for targeting massive post-spawn brown trout utilizing aggressive streamer tactics.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">What tactical gear is mandatory for the trip?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">Anglers must bring fast-action 5wt to 6wt rods for technical dry drifts and robust 7wt setups for streamer actions. Heavy front-taper floating lines and premium Gore-Tex waders with tungsten studs are strictly required to manage local winds and rocky riverbeds.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">How do I secure the mandatory Chilean fishing license?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">All domestic and international anglers are strictly required by law to carry an active recreational credential issued directly by Sernapesca. Our operational team will provide the official digital gateway links to secure your license prior to arriving at our basecamp.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full aspect-[4/5] rounded-[8px] overflow-hidden shadow-xl">
              <img 
                src="assets/images/brown-trout-with-fat-albert-coyhaique.avif" 
                alt="Technical dry fly sight-fishing in Coyhaique, Chilean Patagonia" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* COMPONENTE FAQ EXISTENTE (Inyecta dinámicamente PATAGONIA_FAQS optimizadas) */}
        <FAQSection />

        {/* ECOSISTEMA DE CIERRE */}
        <ImageGallery />
        <Testimonials />
        <CinematicVideo />
      </main>

      <Footer />
    </div>
  );
}