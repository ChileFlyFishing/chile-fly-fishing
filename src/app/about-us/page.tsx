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
  title: "About Our Guiding Team & Philosophy | Coyhaique",
  description: "Meet the professional operations and local guiding team behind Chile Fly Fishing in Coyhaique. Decades of combined water reading in Chilean Patagonia.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/about-us",
  },
  openGraph: {
    title: "About Our Guiding Team & Philosophy | Coyhaique",
    description: "Meet the professional operations and local guiding team behind Chile Fly Fishing in Coyhaique.",
    url: "https://chileflyfishingexpeditions.com/about-us",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
      {/* SECCIÓN 1: Menú Global (Fuera del main para correcta accesibilidad) */}
      <Navbar />

      {/* CUERPO PRINCIPAL DE LA PÁGINA */}
      <main>
        {/* SECCIÓN 2: Hero Banner Transversal con Propiedades Obligatorias Aliniadas */}
        <InternalHero 
          subtitle="Behind the Operation"
          title="Local Roots. Unmatched Expertise on Chilean Patagonia Waters."
          paragraph="Based out of Coyhaique, Chile Fly Fishing was born to push further into the isolation of the Aysén region. We bridge the gap between seasoned anglers and technical, un-crowded river systems."
          imageUrl="assets/images/cataraft-dry-fly-fishing-lake-zenteno-patagonia.avif"
          buttonText="Contact Our Guides"
          buttonHref="/contact-us"
        />

        {/* SECCIÓN 3: Contenido Editorial (Profundización técnica sin redundancias) */}
        <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
            {/* Columna de Título Destacado (Playfair Display) */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl md:text-4xl text-[#C4944E] tracking-tight leading-tight">
                We don&apos;t just guide here. We call this wilderness home.
              </h2>
            </div>
            
            {/* Columna de Texto de Soporte (Inter) */}
            <div className="lg:col-span-7 font-sans text-white/70 text-base md:text-lg leading-relaxed space-y-[24px]">
              <p>
                Our guiding philosophy rejects the rigid, over-engineered approach of standard fishing tourism. We treat our clients as true expedition partners, mapping out custom beats daily based on shifting hatches, wind direction, and your personal casting goals.
              </p>
              <p>
                From technical dry-fly presentation in crystal-clear spring creeks to targeting aggressive trout with heavy freestone streamers, our team brings decades of combined local water reading to your drift. No generic itineraries, just raw angling execution.
              </p>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: OUR FOUNDERS */}
        <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#F9F6F0] text-neutral-900 border-t border-black/5">
          <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-xl">
              <img 
                src="assets/images/matias-sebastian-owner-chileflyfishing.webp" 
                alt="Matías and Sebastián, founders of Chile Fly Fishing in Coyhaique" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-6">Our Founders</h2>
                <p className="font-sans text-base leading-relaxed text-neutral-600">
                  Matías our founder, Sebastian our co-founder, are passionate local anglers born and raised in Coyhaique. Young, energetic, and deeply connected to the rivers and landscapes of Patagonia, they live to see the happiness of each guest who travels here in search of unforgettable fly fishing adventures.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">A Deep Passion for Fly Fishing</h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">Fly fishing is more than a sport for us. It is a way of life that connects us with the wild beauty of Patagonia every single day.</p>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Warm and Welcoming Hosts</h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">At Chile Fly Fishing, you are not just another guest — you are welcomed like a lifelong friend into our family.</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-[#C4944E]">Unmatched Passion for Patagonia’s Waters</h3>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">Every day, we strive to share the magic of Coyhaique’s pristine waters, offering experiences filled with excitement, beauty, and unforgettable moments.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: LOCAL EXPERTISE (4 Columnas Dark) */}
        <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020] border-t border-white/5">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {[
                { t: "Local expertise", d: "Our expert guides are native to Coyhaique and know every secret spot for trophy wild trout." },
                { t: "Legendary Fishing Destinations", d: "Access to exclusive spring creeks, rivers, lakes, and lagoons in the heart of Patagonia." },
                { t: "Authentic Patagonia Hospitality", d: "We create a warm, friendly environment where you will feel at home while exploring the wilderness." },
                { t: "Commitment to Sustainability", d: "We respect and protect Patagonia’s pristine waters to ensure a thriving ecosystem for future generations." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <h3 className="font-display text-xl text-white mb-4">{item.t}</h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed max-w-[280px]">{item.d}</p>
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
  );
}