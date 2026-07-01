// src/app/fly-fishing-blog/[nombre-del-articulo]/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA INDIVIDUAL POR ARTÍCULO
// ========================================================
export const metadata: Metadata = {
  title: "Article Title | Chile Fly Fishing Blog",
  description: "Technical overview and operational notes regarding this specific beat in Coyhaique, Patagonia.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/fly-fishing-blog/nombre-del-articulo",
  },
};

export default function FlyFishingArticleDetail() {
  return (
    <div className="w-full min-h-screen relative bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO BANNER */}
        <InternalHero 
          subtitle="Technical Field Report"
          title="The Dry Fly Sanctuary: Mastering Coyhaique Surface Action"
          paragraph="An operational breakdown of seasonal flow mechanics, terrestrial hatches, and insect behaviors required to target trophy brown trout."
          imageUrl="/assets/images/rainbow-trout-two-anglers-in-a-boat-coyaique.avif"
          buttonText="Examine Report Data"
          buttonHref="#article-density"
        />

        {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
        <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                Hydrological Context & Tactical Overview
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                Every river matrix behaves differently under changing pressure levels. Understanding the precise timing of macro-invertebrate movements provides demanding anglers with an undisputed operational advantage on the water.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
        <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
          <div className="max-w-[800px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
            <p>
              When navigating the complex structural pools of the main systems near Coyhaique, presentation is everything. Drag-free drifts are hard to achieve without proper line selection and technical wading configurations.
            </p>
            <h3 className="font-display text-2xl text-white pt-4">Micro-Hatch Synchronization</h3>
            <p>
              As water temperatures rise toward midday, terrestrial structures become active along the willow lines. This shift requires rapid pattern adjustments and a delicate casting rhythm to avoid spooking active feeders.
            </p>
          </div>
        </section>

        {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
        <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna Texto (Izquierda) */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl text-white font-normal leading-tight">
                Advanced Gear Selection for Technical Spring Creeks
              </h2>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                To master glass-water environments, standard setups fall short. Fast-action 5-weight rods paired with long, delicate leaders are essential to turn over subtle beetle patterns without disturbing the smooth current lines.
              </p>
            </div>

            {/* Columna Imagen (Derecha) */}
            <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
              <img 
                src="/assets/images/rainbow-trout-two-anglers-in-a-boat-coyaique.avif" 
                alt="Technical gear selection for fly fishing"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        {/* SECTION 4: GALERÍA DE IMÁGENES */}
        <ImageGallery />

        {/* SECTION 5: TESTIMONIOS */}
        <Testimonials />

        {/* SECTION 6: VIDEO */}
        <CinematicVideo />
      </main>

      {/* SECTION 7: FOOTER */}
      <Footer />
    </div>
  );
}