// src/app/contact-us/page.tsx
"use client";

import { useState, useEffect } from "react";
import { generateJsonLd } from "@/utils/seo";
import { SchemaData } from "@/types/seo";

// Componentes del Sistema Core (Organismos)
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero"; 
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// Componentes Específicos de la Ruta (Segmentados)
import ContactForm from "@/components/organisms/ContactForm";

export default function ContactUsPage() {
  // Ajuste: Inicializado en null para mostrar el guion hasta que la API responda
  const [milesAway, setMilesAway] = useState<number | null>(null);

  useEffect(() => {
    const COYHAIQUE_LAT = -45.5712;
    const COYHAIQUE_LON = -72.0685;

    const calculateMiles = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 3958.8;
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return Math.round(R * c);
    };

    // Ajuste: Misma URL y estructura de datos que en el Navbar
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.latitude && data.longitude) {
          const distance = calculateMiles(data.latitude, data.longitude, COYHAIQUE_LAT, COYHAIQUE_LON);
          setMilesAway(distance);
        }
      })
      .catch((err) => console.warn("Geo-IP operational matrix fallback activated smoothly:", err));
  }, []);

  const contactSchemaConfig: SchemaData = {
    type: "ContactPage",
    name: "Chile Fly Fishing Booking & Operations",
    description: "Operational booking and reservation matrix for fly fishing expeditions in Coyhaique, Chilean Patagonia.",
    url: "https://chileflyfishingexpeditions.com/contact-us",
    image: "assets/images/chilelfyfishing-nirehuao-river.avif"
  };

  const jsonLd = generateJsonLd(contactSchemaConfig);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          <InternalHero 
            subtitle="Expedition Reservations"
            title="Plan Your Expedition in Coyhaique"
            paragraph="The most productive spring creeks and river systems are dictated by seasonal conditions and limited access. Contact our team to align your preferred dates with the peak flow of the season. We manage all logistics and operations, ensuring a highly technical and seamlessly organized week on the water in Coyhaique."
            imageUrl="assets/images/chilelfyfishing-nirehuao-river.avif"
            buttonText="Secure your dates"
            buttonHref="#reservation-matrix"
          />

          <section id="reservation-matrix" className="w-full pt-[92px] pb-[46px] px-[24px] md:px-[48px] bg-[#202020] scroll-mt-[42px]">
            <div className="max-w-[1260px] mx-auto">
              <div className="border-b border-white/5 pb-[66px]">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-[54px] max-w-4xl leading-tight">
                  Your next fly-fishing adventure in Patagonia is here. <br className="hidden md:block"/>The choice is yours.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                  {/* ... (Contenido de la matriz igual al original) */}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#F9F6F0] text-neutral-900">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Ajuste: El formulario ocupa ahora el 100% del contenedor al eliminar la imagen */}
              <div className="lg:col-span-12 w-full max-w-[800px] mx-auto lg:pt-4">
                <div className="mb-[42px] text-left">
                  <h2 className="font-display text-3xl md:text-4xl text-neutral-950 font-normal mb-[12px] tracking-tight">
                    Ready to Plan Your Fly Fishing Trip to Patagonia?
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                    You&apos;re <span className="font-bold text-[#C4944E] tracking-wider">{milesAway !== null ? milesAway.toLocaleString() : "—"}</span> miles away from fishing in legendary Chilean Patagonia. <span className="text-neutral-400 block mt-0.5">This will never be far away for you.</span>
                  </p>
                </div>

                <ContactForm />
              </div>

            </div>
          </section>

          <ImageGallery />
          <Testimonials />
          <CinematicVideo />
        </main>

        <Footer />
      </div>
    </>
  );
}