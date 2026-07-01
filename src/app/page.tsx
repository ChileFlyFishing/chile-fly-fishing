// src/app/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import SeasonGrid from "@/components/organisms/SeasonGrid"; 
import DestinationsGrid from "@/components/organisms/DestinationsGrid"; 
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import Partners from "@/components/organisms/Partners";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import TextAnimationProvider from "@/components/providers/TextAnimationProvider"; 
import Link from 'next/link';

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA HOME (SSR Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Chile Fly Fishing & Guided Patagonia Fishing Trips | Coyhaique Base",
  description: "Experience premium Chile fly fishing expeditions. Book guided Patagonia fishing trips, scout legendary spring creeks, and target wild brown trout from our Coyhaique base.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com",
  },
  openGraph: {
    title: "Chile Fly Fishing & Guided Patagonia Fishing Trips | Coyhaique Base",
    description: "Experience premium Chile fly fishing expeditions. Book guided Patagonia fishing trips, scout legendary spring creeks, and target wild brown trout from our Coyhaique base.",
    url: "https://chileflyfishingexpeditions.com",
    type: "website",
  },
};

export default function HomePage() {
  // ========================================================
  // OPTIMIZACIÓN SEO/GEO: DATA ESTRUCTURADA INSTITUCIONAL
  // ========================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Lodge",
    "name": "Chile Fly Fishing Expeditions",
    "image": "https://chileflyfishingexpeditions.com/assets/images/chilelfyfishing-nirehuao-river.avif",
    "@id": "https://chileflyfishingexpeditions.com/#organization",
    "url": "https://chileflyfishingexpeditions.com",
    "telephone": "",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coyhaique",
      "addressRegion": "Aysén",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -45.5712,
      "longitude": -72.0685
    },
    "description": "Premium technical fly fishing expeditions and guided trips in Chilean Patagonia, operating from our strategic base in Coyhaique.",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Guided Fly Fishing",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Premium Lodging",
        "value": true
      }
    ]
  };

  return (
    <>
      {/* Inyección estructural en servidor para la validación de Entidad de Google e IAs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full min-h-screen relative bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        {/* Capa de Navegación */}
        <Navbar />

        {/* Activamos el motor GSAP para envolver las secciones y el Hero */}
        <TextAnimationProvider>
          
          {/* HERO BANNER - REESTRUCTURADO Y LIMPIO */}
          <header className="relative w-full h-[85vh] flex items-center pt-24 md:pt-32 justify-start px-6 md:px-12 lg:px-24 overflow-hidden bg-neutral-950">
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
                style={{ 
                  backgroundImage: `url('assets/images/chilelfyfishing-nirehuao-river.avif')`,
                  backgroundAttachment: 'fixed'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#202020] via-[#202020]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent" />
            </div>
            
            <div className="max-w-[1440px] mx-auto w-full relative z-10">
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-[#C4944E] font-semibold mb-4 block">
                Exclusive Fly Fishing Operations • Coyhaique, Chile
              </span>
              
              <h1 className="animate-text font-display text-4xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight max-w-4xl leading-[1.05] mb-6">
                Chile Fly Fishing & Guided <span className="font-display italic text-white/90">Patagonia Fishing Trips</span>
              </h1>
              
              {/* Un solo párrafo conciso, directo e impactante */}
              <div className="max-w-2xl font-sans text-sm md:text-base text-neutral-300 leading-relaxed mb-8">
                <p>
                  We operate technical Chile fly fishing expeditions across the structural river diversity of the Aysén Region. From our strategic base in Coyhaique, our expert Patagonia fishing guides provide daily access to productive dry fly action, remote spring creeks, and deep streamer setups tailored for wild brown trout proficiency.
                </p>
              </div>
              
              {/* Mantenemos y damos mayor visibilidad a los CTA Core */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link href="/contact-us" className="inline-flex items-center justify-center px-12 py-4 font-sans font-semibold text-[#202020] bg-[#C4944E] rounded-[20px] shadow-xl hover:bg-white transition-all uppercase text-xs tracking-wider">
                  Secure Your Dates
                </Link>
                <Link href="/patagonia-fly-fishing" className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold text-white border border-white/20 rounded-[20px] hover:bg-white/5 hover:border-white transition-all uppercase text-xs tracking-wider">
                  Explore Programs
                </Link>
              </div>
            </div>
          </header>

          {/* NUEVA SECCIÓN: MANIFIESTO INTRODUCTORIO (Soporte SEO & GEO denso) */}
          <section className="w-full py-[80px] px-6 md:px-12 lg:px-24 bg-[#202020] border-b border-white/5">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-display text-2xl md:text-3xl text-[#C4944E] font-normal tracking-tight leading-tight">
                  The Scouting Matrix:<br />Pristine Patagonian Waters
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Our targeted scouting matrix allows anglers to master pristine Patagonian waters during their custom Patagonia fishing trip. We cover the prolific terrestrial hatches of the Ñirehuao River, the technical pools of the Simpson River, and the multi-channeled currents of the Paloma River system to ensure clean, drag-free drifts across the finest trout beats in South America. <Link href="/fishing-season" className="text-brand-gold hover:underline transition-colors duration-200" > Terrestrial hatches </Link>
                </p>
              </div>
            </div>
          </section>

          {/* SECCIÓN: THREE SEASONS */}
          <SeasonGrid />

          {/* SECCIÓN: DESTINATIONS AUTOMATIZADA CON FADE SCROLL Y IMÁGENES LIMPÍAS */}
          <DestinationsGrid />

          {/* Módulos de Cierre de Ecosistema */}
          <ImageGallery />
          <Testimonials />
          <Partners /> 
          <CinematicVideo />

        </TextAnimationProvider>

        <Footer />
      </main>
    </>
  );
}