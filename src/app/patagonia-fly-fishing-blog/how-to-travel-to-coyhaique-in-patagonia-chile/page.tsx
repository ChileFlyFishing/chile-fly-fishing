import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Travel to Coyhaique for Fly Fishing | Patagonia",
  description: "The definitive logistics report on flights, regional transfers, and seasonal entry requirements for angling in Coyhaique, Chile.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/how-to-travel-to-coyhaique-in-patagonia-chile",
  },
};

export default function TravelToCoyhaiqueFlyFishingArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Travel to Coyhaique in Patagonia Chile for Fly Fishing",
    "description": "The definitive logistics report on flights, regional transfers, and seasonal entry requirements for angling in Coyhaique, Chile.",
    "image": "https://chileflyfishingexpeditions.com/assets/images/travel-logistics-coyhaique-patagonia-fly-fishing.avif",
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
      "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/how-to-travel-to-coyhaique-in-patagonia-chile"
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
            subtitle="Logistics Blueprint • Route Mapping"
            title="How to Travel to Coyhaique in Patagonia Chile for Fly Fishing"
            paragraph="An analytical structural breakdown of flight paths, regional tarmac connections, and entry frameworks required to reach the surface-action sanctuary of Aysén."
            imageUrl="/assets/images/travel-to-coyhaique.webp"
            buttonText="Examine Logistics Data"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Commercial Flight Corridors & Transfer Protocols
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Reaching the clear spring creeks and freestone complexes of Coyhaique requires a standardized two-leg aviation blueprint. International anglers must first clear customs at Santiago International Airport (SCL) before boarding a domestic connection to Balmaceda Airport (BBA), the primary jet airfield serving the Aysén region. From Balmaceda, a structural 45-minute highway transfer connects travelers directly to our staging base in Coyhaique, mitigating transit fatigue and ensuring rapid access to wild brown trout networks.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <p>
                When organizing commercial flight bookings, allocating a minimum of three hours in Santiago (SCL) is mandatory to accommodate luggage re-checking and domestic terminal transitions. Major carriers including LATAM Airlines operate frequent daily flights using Airbus A320 and A321 configurations to Balmaceda. Because flight schedules optimize during the warm thermal peaks of the Southern Hemisphere summer, strategic timing ensures minimal layovers before deploying your multi-piece technical rods on destination waters.
              </p>
              <h3 className="font-display text-2xl text-white pt-4">Customs Clearance & Rod Case Transport</h3>
              <p>
                Chilean agricultural inspection authorities maintain rigorous biosecurity protocols regarding organic material and used outdoor equipment. Anglers must declare all wading boots and multi-section fly rods upon arrival to guarantee clearance without administrative delays. Ensuring your gear is meticulously cleaned before packing prevents local ecosystem contamination. To cross-reference flight arrivals with optimal biological hatches and water levels, examine our detailed overview of the <Link href="/fishing-season" className="text-[#C4944E] hover:underline font-semibold">Patagonia fishing season</Link>.
              </p>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Texto (Izquierda) */}
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Ground Logistics & Seamless Backcountry Access
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Navigating the unpaved access routes to rivers like Río Ñirehuao or the remote channels of Río Paloma demands reliable, high-clearance four-wheel-drive vehicles. Our operational structure eliminates secondary booking friction by providing private, expert-guided ground transport directly from Balmaceda tarmac straight to our local water networks, ensuring your technical sight-fishing apparatus is deployed efficiently without logistical bottlenecks.
                </p>
                {/* BOTÓN OBLIGATORIO DE CONTACTO CON ESTILO DEL HERO BANNER */}
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
                  src="/assets/images/how-to-travel-to-coyhaique-in-patagonia-chile.avif" 
                  alt="Angler arriving with fly rod cases for an expedition in Coyhaique, Patagonia Chile"
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