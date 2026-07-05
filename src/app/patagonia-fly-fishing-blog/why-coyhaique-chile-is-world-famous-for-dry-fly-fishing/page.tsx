import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why Coyhaique Is World-Famous for Dry Fly Fishing",
  description: "An in-depth analysis of why the Aysén region remains the undisputed surface-action sanctuary of South America for wild brown trout.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/why-coyhaique-chile-is-world-famous-for-dry-fly-fishing",
  },
};

export default function WhyCoyhaiqueDryFlyArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Coyhaique Is World-Famous for Dry Fly Fishing",
    "description": "An in-depth analysis of why the Aysén region remains the undisputed surface-action sanctuary of South America for wild brown trout.",
    "image": "https://chileflyfishingexpeditions.com/assets/images/trophy-brown-trout-catch-release-coyhaique-patagonia.avif",
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
      "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/why-coyhaique-chile-is-world-famous-for-dry-fly-fishing"
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
            subtitle="Technical Field Report • Dry Fly"
            title="The Dry Fly Capital: Why Coyhaique is World-Famous for Surface Action"
            paragraph="An in-depth biological and geological analysis of why the Aysén region remains the undisputed surface-action sanctuary of South America."
            imageUrl="/assets/images/trophy-brown-trout-catch-release-coyhaique-patagonia.avif"
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
                  Coyhaique&apos;s undisputed global standing as a dry fly paradise is dictated by its clear spring creeks, consistent mayfly and caddis hatches, and low angling pressure. While other Patagonian operations rely on heavy sinking lines and generic streamer stripping, our home waters near Coyhaique trigger consistent surface responses from wild brown trout hunting beetles, grasshoppers, and selective midges in technical current seams.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <p>
                When navigating the complex structural pools of the main systems near Coyhaique, presentation is everything. Drag-free drifts are hard to achieve without proper line selection and technical wading configurations. Iconic rivers like Río Ñirehuao, Río Simpson, and Río Paloma demand precision, stealth, and flawless drift mechanics, offering seasoned anglers a topwater arena that cannot be replicated anywhere else on the planet.
              </p>
              <h3 className="font-display text-2xl text-white pt-4">Micro-Hatch Synchronization</h3>
              <p>
                As water temperatures rise toward midday, terrestrial structures become active along the willow lines. This shift requires rapid pattern adjustments and a delicate casting rhythm to avoid spooking active feeders. Timing your execution directly with these cycles is key to intercepting trophy fish. You can study these intervals closely in our technical overview of the <Link href="/fishing-season" className="text-[#C4944E] hover:underline font-semibold">Patagonia fishing season</Link>.
              </p>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Texto (Izquierda) */}
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Advanced Presentation for Glass-Water Creeks
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  To master glass-water environments, standard setups fall short. Long 12ft technical leaders, low-profile bank approaches, and immaculate beetle and hopper presentations are mandatory to bypass the selective vision of trophy brown trout tracking micro-currents.
                </p>
              </div>

              {/* Columna Imagen (Derecha) */}
              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img 
                  src="/assets/images/spring-creek-anglers-patagonia-fly-fishing.avif" 
                  alt="Dry fly fishing presentation in Coyhaique spring creeks"
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