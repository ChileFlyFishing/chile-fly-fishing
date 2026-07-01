// src/app/about-us/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTÁTICA (SSR Next.js 15)
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Guides | About Our Coyhaique Team",
  description: "Meet the professional Patagonia fly fishing guides behind our Coyhaique operations. Decades of combined local water reading across the Aysén region.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/about-us",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Guides | About Our Coyhaique Team",
    description: "Meet the professional Patagonia fly fishing guides behind our Coyhaique operations. Decades of combined local water reading across the Aysén region.",
    url: "https://chileflyfishingexpeditions.com/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  // ========================================================
  // OPTIMIZACIÓN SEO/GEO: DATA ESTRUCTURADA DE GUIADO (JSON-LD)
  // ========================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GuideService",
    "name": "Chile Fly Fishing Guides",
    "description": "Professional fly fishing guiding service specializing in technical drift boat and walk-and-wade expeditions in Coyhaique, Patagonia.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chile Fly Fishing Expeditions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coyhaique",
        "addressRegion": "Aysén",
        "addressCountry": "CL"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Aysén Region"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Patagonia"
      }
    ]
  };

  return (
    <>
      {/* Inyección estructural para rastreadores SEO e Inteligencias Artificiales */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        {/* SECCIÓN 1: Menú Global */}
        <Navbar />

        {/* CUERPO PRINCIPAL DE LA PÁGINA */}
        <main>
          {/* OPTIMIZACIÓN AEO: Aplicación estricta de la regla BLUF en el Hero */}
          <InternalHero 
            subtitle="Behind the Operation"
            title="Patagonia Fly Fishing Guides: Local Roots in Coyhaique"
            paragraph="Based out of Coyhaique, Chile Fly Fishing operates technical expeditions across the isolated river channels of the Aysén region. Our native Patagonia fishing guides bridge the gap between dedicated anglers and un-crowded, productive river systems."
            imageUrl="assets/images/cataraft-dry-fly-fishing-lake-zenteno-patagonia.avif"
            buttonText="Contact Our Guides"
            buttonHref="/contact-us"
          />

          {/* SECCIÓN 3: Contenido Editorial (Profundización técnica de pescador a pescador) */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl text-[#C4944E] tracking-tight leading-tight">
                  We don&apos;t just guide here. We call this wilderness home.
                </h2>
              </div>
              
              <div className="lg:col-span-7 font-sans text-white/70 text-base md:text-lg leading-relaxed space-y-[24px]">
                <p>
                  Our guiding philosophy rejects the rigid, over-engineered approach of standard commercial tourism. We treat our clients as true expedition partners, mapping out custom beats daily based on shifting hatches, real-time wind direction, and your personal casting goals.
                </p>
                <p>
                  From technical dry-fly presentation in crystal-clear spring creeks to targeting trophy brown trout with heavy freestone streamers, our team brings decades of combined <Link href="/fishing-season" className="text-brand-gold hover:underline transition-colors duration-200" > local water reading </Link> to your drift. No generic itineraries, just raw angling execution.
                </p>
              </div>
            </div>
          </section>

          {/* NUEVA SECCIÓN: OUR FOUNDERS (Refinamiento de Brand Voice y Humanización) */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#F9F6F0] text-neutral-900 border-t border-black/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-xl">
                <img 
                  src="assets/images/matias-sebastian-owner-chileflyfishing.webp" 
                  alt="Matías and Sebastián, professional Patagonia fly fishing guides in Coyhaique" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">Our Founders</h2>
                  <p className="font-sans text-base leading-relaxed text-neutral-600">
                    Matías, our founder, and Sebastián, our co-founder, are professional local anglers born and raised in Coyhaique. Energetic and deeply connected to the hydrology of Aysén, they manage operations to ensure seamless execution, horizontal communication, and absolute technical proficiency on every <Link href="/fishing-season" className="text-brand-gold hover:underline transition-colors duration-200" > hosted trip </Link>.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Technical Water Command</h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">Fly fishing is an operational discipline. We spend our lives analyzing hatches and flow patterns across the Aysén region to build optimal scouting matrices.</p>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Horizontal Collaboration</h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">At Chile Fly Fishing, you are an active member of the expedition. We connect over shared angling standards and horizontal trust.</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Deep Regional Footprint</h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed">Every operational day is engineered to share the reality of Coyhaique’s pristine beats, delivering precise angling execution and raw Patagonian hydrology.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NUEVA SECCIÓN: LOCAL EXPERTISE (Densidad Informativa para GEO / LLMs) */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020] border-t border-white/5">
            <div className="max-w-[1260px] mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
  {[
    { 
      t: "Native Water Reading", 
      d: "Our expert guides are native to Coyhaique, providing technical access to exclusive trout beats and complex drifts." 
    },
    { 
      t: "Targeted Scouting Matrix", 
      d: "Access isolated spring creeks, freestone rivers, and deep glacial lakes across the core of Chilean Patagonia." 
    },
    { 
      t: "Sophisticated Hospitality", 
      d: "We maintain a direct, deeply human environment at our basecamp, ensuring dedicated anglers can seamlessly recharge." 
    },
    { 
      t: "Ecosystem Stewardship", 
      // Separamos el texto para envolver la palabra clave en el Link
      d1: "We strictly practice and enforce catch-and-release protocols to protect the ",
      linkText: "wild brown trout populations",
      d2: " of Aysén."
    }
  ].map((item, i) => (
    <div key={i} className="flex flex-col items-center text-center">
      <h3 className="font-display text-xl text-white mb-4">{item.t}</h3>
      <p className="font-sans text-sm text-white/60 leading-relaxed max-w-[280px]">
        {/* Si el objeto tiene la propiedad d1, renderiza la estructura con el Link */}
        {item.d1 ? (
          <>
            {item.d1}
            <Link 
              href="/fishing-season" 
              className="text-brand-gold hover:underline transition-colors duration-200"
            >
              {item.linkText}
            </Link>
            {item.d2}
          </>
        ) : (
          // Si no, renderiza la descripción normal
          item.d 
        )}
      </p>
    </div>
  ))}
</div>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-10 py-4 bg-[#C4944E] hover:bg-[#C4944E]/90 text-white rounded-[20px] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                Secure your fishing trips
              </Link>
            </div>
          </section>

          {/* Galería de Imágenes */}
          <ImageGallery />

          {/* Ecosistema de Cierre Organismos */}
          <Testimonials />
          <CinematicVideo />
        </main>

        {/* SECCIÓN 4: Cierre Global */}
        <Footer />
      </div>
    </>
  );
}