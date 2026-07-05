import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Migratory Trout Mechanics & Autumn River Runs",
  description: "A technical report on wild brown trout migration triggers, thermal thresholds, and advanced streamer swing tactics in Coyhaique, Chile.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/migratory-trout-mechanics-and-autumn-river-runs",
  },
};

export default function MigratoryTroutAutumnRunsArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Migratory Trout Mechanics & Autumn River Runs",
    "description": "A technical report on wild brown trout migration triggers, thermal thresholds, and advanced streamer swing tactics in Coyhaique, Chile.",
    "image": "https://chileflyfishingexpeditions.com/assets/images/migratory-brown-trout-autumn-run-coyhaique.avif",
    "datePublished": "2026-04-15",
    "author": {
      "@type": "Person",
      "name": "Matías Araneda",
      "url": "https://chileflyfishingexpeditions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chile Fly Fishing Expeditions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chileflyfishingexpeditions.com/assets/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/migratory-trout-mechanics-and-autumn-river-runs"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          {/* HERO BANNER */}
          <InternalHero 
            subtitle="Technical Field Report • Autumn Migration"
            title="Migratory Trout Mechanics & Autumn River Runs"
            paragraph="An analytical investigation into the thermal thresholds, structural holding seams, and territorial triggers of migrating wild brown trout within the Aysén water networks."
            imageUrl="/assets/images/two-anglers-and-two-trophy-brown-trout-coyhaique-patagonia.avif"
            buttonText="Examine Migration Data"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Thermal Thresholds & Fluvial Staging Zones
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Anadromous and adfluvial migrations in the Coyhaique watershed stabilize when water temperatures drop below the 10°C mark. As the autumn photoperiod contracts across the Aysén region, mature lake-dwelling brown trout move into major river systems like the lower Río Simpson and Río Paloma. These large predators bypass traditional feeding lanes, positioning themselves within deep pool structures and technical current seams where they stack before entering upstream spawning gravel.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <p>
                Navigating the late-season hydrology near Coyhaique requires a precise understanding of defensive trout mechanics. Migrating brown trout transition from opportunistic insect targeting to extreme territorial aggression. To effectively reach these deep staging lanes, technical anglers swap out traditional lines for heavy sink-tips, such as Scientific Anglers Sonar Titan clear configurations, swinging large articulated sculpin patterns and intruders closely along deep clay banks and submerged boulders.
              </p>
              <h3 className="font-display text-2xl text-white pt-4">Hydrological Seam Interception</h3>
              <p>
                As seasonal rainfall alters flow velocities, migrating trout consolidate inside slow-moving water seams directly adjacent to primary currents. Presenting a fly in these zones requires precise mending sequences to eliminate surface drag and maximize fly depth. Maintaining a slow, deep swing is critical to passing directly through the trout&apos;s narrow vision window. You can evaluate how these late-season weather patterns influence water levels in our deep dive on the <Link href="/fishing-season" className="text-[#C4944E] hover:underline font-semibold">Patagonia fishing season</Link>.
              </p>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Texto (Izquierda) */}
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Tactical Rigging for Deep Fluvial Runs
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Overcoming deep, cold river currents requires high-performance gear configurations. Utilizing fast-action 7wt to 8wt rods paired with heavy composite tips allows for accurate casting of weighted patterns into heavy headwaters. Getting your presentation down instantly to the gravel bedrock is non-negotiable for bypassing non-active layers and stimulating a territorial strike from a trophy migrant.
                </p>
                {/* BOTÓN OBLIGATORIO DE CONTACTO */}
                <Link 
                  href="/contact-us" 
                  className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
                >
                  Inquire About Guided Trips
                </Link>
              </div>

              {/* Columna Imagen (Derecha) */}
              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img 
                  src="/assets/images/trophy-trout-patagonia-fly-fishing-close-season.avif" 
                  alt="Swinging heavy sink tips and articulated streamers for migratory brown trout in autumn river runs near Coyhaique"
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
    </>
  );
}