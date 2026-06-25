// src/app/fishing-destinations/page.tsx
import type { Metadata } from "next";
import { generateJsonLd } from "@/utils/seo";
import { SchemaData } from "@/types/seo";

import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero"; // <-- Organismo unificado
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA DE SERVIDOR (SSR)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Destinations | Coyhaique Beats",
  description: "Explore pristine freestone rivers, private high-desert spring creeks, and isolated alpine lakes in Coyhaique, Chilean Patagonia.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/fishing-destinations",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Destinations | Coyhaique Beats",
    description: "Explore pristine freestone rivers, private high-desert spring creeks, and isolated alpine lakes in Coyhaique, Chilean Patagonia.",
    url: "https://chileflyfishingexpeditions.com/fishing-destinations",
  },
};

export default function FishingDestinationsPage() {
  const waterBeats = [
    {
      title: "Patagonia Freestone Rivers",
      location: "Simpson, Ñirehuao & Hidden Valleys",
      description: "Cast large terrestrial imitations or heavy streamers into deep cutbanks and fast currents. Our freestone rivers near Coyhaique offer aggressive wild brown and rainbow trout populations that haven't seen public angling pressure in weeks.",
      tag: "Active Drifts"
    },
    {
      title: "Technical Spring Creeks",
      location: "Private High-Desert Valleys",
      description: "The ultimate challenge for the purist. Slower, glass-like waters that require matching the hatch with micro-patterns, long light leaders, and flawless approaches. A premium dry-fly ecosystem in the heart of Chilean Patagonia.",
      tag: "Sight Fishing"
    },
    {
      title: "High-Andes Lakes",
      location: "Deep Crystal Basins",
      description: "Cruising monster browns in pristine alpine lakes surrounded by ancient forests. We utilize specialized watercraft to target trophy fish feeding selectively along drop-offs and rocky shorelines where clarity is absolute.",
      tag: "Trophy Browns"
    },
    {
      title: "Isolated Patagonian Lagoons",
      location: "Backcountry Wilderness Stillwaters",
      description: "Untouched, nameless bodies of water located within private access limits. These rich stillwaters hold surprising numbers of massive trout that smash dragonflies and beetles on the surface with violence.",
      tag: "Wilderness Action"
    }
  ];

  // ========================================================
  // ENRIQUECIMIENTO SEMÁNTICO: SCHEMA JSON-LD
  // ========================================================
  const destinationSchemaConfig: SchemaData = {
    type: "Place",
    name: "Patagonia Fly Fishing Destinations Matrix",
    description: "Our private operation covers a vast matrix of water structures in Central Patagonia.",
    url: "https://chileflyfishingexpeditions.com/fishing-destinations",
    image: "assets/images/guide-and-anglers-fishing-patagonia.avif"
  };

  const jsonLd = generateJsonLd(destinationSchemaConfig);

  return (
    <>
      {/* Inyección estructural de datos para rastreadores de motores de búsqueda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          {/* IMPLEMENTACIÓN DEL ORGANISMO INTERNAL HERO REUTILIZABLE */}
          <InternalHero 
            subtitle="Coyhaique Private Beats"
            title="Patagonia Fly Fishing Destinations: The Untouched Waters of Chile"
            paragraph="Our private operation covers a vast matrix of water structures in Central Patagonia. From technical dry-fly creeks near the Argentine border to heavy freestones winding through the rainforest, we build your daily itinerary based on real-time hatch conditions."
            imageUrl="assets/images/guide-and-anglers-fishing-patagonia.avif"
            buttonText="Explore the Beats"
            buttonHref="#beats-matrix"
          />

          {/* Listado Técnico de Aguas */}
          <section id="beats-matrix" className="w-full py-px92 px-px24 md:px-px48 bg-brand-charcoal scroll-mt-px24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px48">
              {waterBeats.map((beat, index) => (
                <div key={index} className="border border-white/5 bg-neutral-900/50 p-px36 rounded-[8px] flex flex-col justify-between hover:border-white/10 transition-colors">
                  <div>
                    <div className="flex justify-between items-center mb-px24">
                      <span className="font-sans text-xs uppercase tracking-wider text-brand-gold font-semibold">
                        {beat.tag}
                      </span>
                      <span className="font-display text-sm text-white/20 font-light">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl text-white font-normal mb-px6">
                      {beat.title}
                    </h2>
                    <p className="font-sans text-xs text-white/40 mb-px24 italic">
                      {beat.location}
                    </p>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">
                      {beat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Repetición Global Consistente de Bloques */}
          <Testimonials />
          <CinematicVideo />
        </main>

        <Footer />
      </div>
    </>
  );
}