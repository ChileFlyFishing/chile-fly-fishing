// src/app/destinos/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Componentes del Sistema Core (Organismos)
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery"; 
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

// Datos y Utilidades de SEO
import { destinationsRegistry } from "../data";
import { generateJsonLd } from "@/utils/seo";
import { SchemaData } from "@/types/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ========================================================
// 1. GENERACIÓN DE METADATOS DINÁMICOS (SEO FIRST)
// ========================================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinationsRegistry[slug];

  if (!destination) return {};

  const cleanDescription = destination.description.substring(0, 155);

  return {
    title: `${destination.title} | Fly Fishing Patagonia`,
    description: cleanDescription,
    alternates: {
      canonical: `https://chileflyfishingexpeditions.com/destinos/${slug}`,
    },
    openGraph: {
      title: `${destination.title} | Chile Fly Fishing`,
      description: cleanDescription,
      url: `https://chileflyfishingexpeditions.com/destinos/${slug}`,
      type: "website",
      images: [
        {
          url: destination.imageUrl,
          alt: destination.title,
          width: 1200,
          height: 630,
        }
      ],
    }
  };
}

// ========================================================
// 2. CONTROLADOR Y ORQUESTADOR SEMÁNTICO
// ========================================================
export default async function DynamicDestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinationsRegistry[slug];

  if (!destination) {
    notFound();
  }

  // Configuración técnica del Schema 'Place' enfocado en locaciones de pesca
  const destinationSchemaConfig: SchemaData = {
    type: "Place",
    name: destination.title,
    description: destination.description,
    url: `https://chileflyfishingexpeditions.com/destinos/${slug}`,
    image: destination.imageUrl,
    additionalProps: {
      waterType: destination.waterType,
      bestMonths: destination.bestMonths,
      tactics: destination.tactics
    }
  };

  const jsonLd = generateJsonLd(destinationSchemaConfig);

  // Generamos un extracto limpio para el párrafo introductorio del Hero
  const summaryParagraph = destination.description.split(".")[0] + ".";

  return (
    <>
      {/* Inyección Estricta de JSON-LD en Servidor */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-[#202020] text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        {/* SECCIÓN 1: Menú (Fuera del eje principal de lectura) */}
        <Navbar />

        {/* CUERPO SEMÁNTICO DE LA RUTA */}
        <main>
          {/* SECCIÓN 2: Hero Transversal Actualizado con la firma obligatoria completa */}
          <InternalHero 
            subtitle={`${destination.waterType} • Best: ${destination.bestMonths}`}
            title={destination.title}
            paragraph={`${summaryParagraph} Explore our technical setup and seasonal strategies for this premier Patagonian water system.`}
            imageUrl={destination.imageUrl}
            buttonText="Inquire About This Beat"
            buttonHref="/contact-us"
          />

          {/* SECCIÓN 3: Reporte Editorial y Desglose de Tácticas */}
          <section className="w-full py-[92px] px-[24px] md:px-[48px] bg-[#202020]">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
              <div className="lg:col-span-7">
                <h2 className="font-display text-xs uppercase tracking-wider text-[#C4944E] font-semibold mb-[24px]">
                  Water Overview & Logistics
                </h2>
                <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed">
                  {destination.description}
                </p>
              </div>
              
              <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 p-[36px] rounded-[4px]">
                <h3 className="font-display text-xl text-white font-normal mb-[24px]">
                  Required Tactical Setup
                </h3>
                <ul className="space-y-[18px]">
                  {destination.tactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-center font-sans text-sm text-white/80">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#C4944E] mr-[12px] block" />
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bloques del Cierre Maestro */}
          <ImageGallery />
          <Testimonials />
          <CinematicVideo />
        </main>

        {/* SECCIÓN FINAL: Cierre Global */}
        <Footer />
      </div>
    </>
  );
}