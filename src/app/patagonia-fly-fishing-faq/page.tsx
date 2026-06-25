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
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA
// ========================================================
export const metadata: Metadata = {
  title: "Fly Fishing FAQ | Patagonia Chile Fishing Trips",
  description: "Find answers to the most common questions about fly fishing in Patagonia, Chile. Learn about seasons, licenses, gear, and trip expectations.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-faq",
  },
  openGraph: {
    title: "Fly Fishing FAQ | Patagonia Chile Fishing Trips",
    description: "Find answers to the most common questions about fly fishing in Patagonia, Chile.",
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
        {/* HERO BANNER */}
        <InternalHero 
          subtitle="Information Center"
          title="Fly Fishing FAQ"
          paragraph="Find answers to the most common questions about fly fishing in Patagonia, Chile. Learn about the best seasons, fishing licenses, gear recommendations, and what to expect on your Chile fly fishing trip with expert local guides."
          imageUrl="assets/images/angler-nirehuao-river-patagonia-fly-fishing.avif"
          buttonText="Contact Our Team"
          buttonHref="/contact-us"
        />

        {/* SECCIÓN DOS COLUMNAS */}
        <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Everything You Need to Know Before Your Chile Fly Fishing Trip
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">When is the best time to fly fish in Patagonia?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">The best months for fly fishing in Chilean Patagonia are from November to April, during the southern spring and summer. You’ll find active trout, stable weather, and prime water conditions.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">What gear do I need for my fly fishing trip?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">We recommend bringing your own rod, reel, waders, and personal gear. However, our programs include high-quality equipment if you prefer to travel light. Just bring your passion for wild waters.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Do I need a fishing license in Chile?</h3>
                  <p className="font-sans text-sm text-white/70 leading-relaxed">Yes, a valid Chilean fishing license is required for all anglers. Don’t worry — we take care of it for you as part of your guided fly fishing trip in Patagonia.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full aspect-[4/5] rounded-[8px] overflow-hidden shadow-xl">
              <img 
                src="assets/images/brown-trout-with-fat-albert-coyhaique.avif" 
                alt="Fly fishing in Coyhaique, Chile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* COMPONENTE FAQ EXISTENTE */}
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