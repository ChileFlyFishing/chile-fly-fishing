import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Coyhaique Spring Creeks: Technical Sight Presentation",
  description: "Master the technical presentation strategies, long leaders, and stealth approaches required for sight-fishing wild brown trout in clear spring creeks.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation",
  },
};

export default function CoyhaiqueSpringCreeksTechnicalArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Coyhaique Spring Creeks: Technical Guide to Sight Presentation",
    "description": "Master the technical presentation strategies, long leaders, and stealth approaches required for sight-fishing wild brown trout in clear spring creeks.",
    "image": "https://chileflyfishingexpeditions.com/assets/images/sight-fishing-spring-creeks-coyhaique-patagonia.avif",
    "datePublished": "2026-07-01",
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
      "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation"
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
            subtitle="Technical Field Report • Sight Presentation"
            title="Coyhaique Spring Creeks: Technical Guide to Sight Presentation"
            paragraph="An analytical review of the gear configurations, angling mechanics, and stealth parameters required to intercept wild brown trout in glass-water environments."
            imageUrl="/assets/images/sight-fishing-spring-creeks-coyhaique-patagonia.avif"
            buttonText="Examine Presentation Data"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Glass-Water Micro-Hydrology & Trout Vision
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Sight-fishing within the spring creeks of Coyhaique demands a complete rejection of rapid, uncalculated casting. These ultra-clear, slow-moving water channels near our base in the Aysén region offer wild brown trout an uncompromised field of vision, allowing them to detect unnatural leader footprints and line flash instantly. Success is dictated by low-profile bank approaches, careful observation of active feeding lines, and a thorough understanding of current seam mechanics.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <p>
                To consistently bypass the selective defense of trophy trout tracking micro-currents, standard angling setups fall short. Wading must be minimized to avoid sending subsurface pressure waves downstream. Rod selections must lean toward moderate-action 4wt or 5wt setups, such as a Scott Centric or Winston Pure, paired with low-visibility fly lines that minimize impact acoustics on the surface layer.
              </p>
              <h3 className="font-display text-2xl text-white pt-4">Leader Architecture & Drift Optimization</h3>
              <p>
                Long 12ft to 15ft technical leaders tapering down to 5X or 6X fluorocarbon tippets are mandatory when presenting small terrestrial patterns or tiny Baetis nymphs. The objective is to place the fly line completely outside the trout's focal window while maintaining enough line control to execute complex slack-line mends. Timing your cast to drop the fly precisely into the feeding seam during specific emergence cycles is paramount. You can analyze these optimal hatch windows across the season in our comprehensive report on the <Link href="/fishing-season" className="text-[#C4944E] hover:underline font-semibold">Patagonia fishing season</Link>.
              </p>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Texto (Izquierda) */}
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Advanced Presentation Tactics for Selective Feeders
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Perfecting the reach cast and pile cast ensures the fly lands ahead of the leader, granting the trout an unhindered view of the fly first. In these highly technical spring creeks, a single drag-induced micro-wake will instantly flush a resident brown trout into deep woody debris. Immaculate drift mechanics coupled with well-matched matching entomological imitations provide the only reliable path to success.
                </p>
                {/* BOTÓN OBLIGATORIO DE CONTACTO */}
                <Link 
                  href="/contact" 
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm tracking-wider uppercase transition-colors rounded-md font-medium"
                >
                  Inquire About Guided Trips
                </Link>
              </div>

              {/* Columna Imagen (Derecha) */}
              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img 
                  src="/assets/images/sight-fishing-spring-creeks-coyhaique-patagonia.avif" 
                  alt="Angler making a highly technical sight-fishing presentation to a wild brown trout in a clear Coyhaique spring creek"
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