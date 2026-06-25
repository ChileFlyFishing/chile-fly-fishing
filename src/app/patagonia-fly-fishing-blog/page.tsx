// src/app/blog/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import BlogGridClient from "@/components/organisms/BlogGridClient"; // <-- Importamos la grilla interactiva
import { destinationsRegistry } from "../data";

export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Intelligence | Coyhaique Field Reports",
  description: "Technical fly fishing logs, river mapping, and biological analysis from Coyhaique, Chile. Expert hatch calendars and gear configurations for untamed trout.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/blog",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Intelligence | Coyhaique Field Reports",
    description: "Technical fly fishing logs, river mapping, and biological analysis from Coyhaique, Chile.",
    url: "https://chileflyfishingexpeditions.com/blog",
    type: "website",
  },
};

export default function PatagoniaFlyFishingBlog() {
  // Listado oficializado de reportes (puedes setear algunos con fecha "2025" si deseas probar el filtrado)
  const blogPosts = [
    {
      slug: "why-coyhaique-chile-is-world-famous-for-dry-fly-fishing",
      excerpt: "An in-depth biological and geological analysis of why the Aysén region remains the undisputed surface-action sanctuary of South America.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "migratory-trout-in-coyhaique-fly-fishing-season",
      excerpt: "Tracking the massive brown and rainbow trout autumn runs. Learn the exact flow mechanics and heavy fly configurations needed.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "discover-why-patagonia-chile-ultimate-wild-fly-fishing-destination",
      excerpt: "Why pure mountain isolation and strict catch-and-release protocols protect an ecosystem that cannot be replicated globally.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "explore-best-fly-fishing-waters-in-coyhaique-chile",
      excerpt: "A complete structural overview of our home waters: from the mighty Simpson River freestones to hidden limestone spring creeks.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "how-to-travel-to-coyhaique-in-patagonia-chile",
      excerpt: "Eliminating travel friction. A flawless logistical manual covering commercial transits, airport receptions, and private transfers.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "best-time-to-go-fly-fishing-in-coyhaique-patagonia-chile",
      excerpt: "Timing the hatch perfectly. Your guide to high-water early seasons, mid-summer terrestrial explosions, and windless autumn days.",
      date: "2025", // Ejemplo fijado en 2025 para comprobar la efectividad del filtro
      tag: "Chilean Patagonia"
    },
    {
      slug: "why-fly-fishing-in-patagonia-chile-is-bucket-list-experience",
      excerpt: "True luxury is defined by silence. Explore the raw aesthetic of holding a rod beneath hanging glaciers and untouched pampa valleys.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "essential-fly-fishing-gear-to-bring-patagonia-trip-coyhaique",
      excerpt: "A rigorous equipment list. Fast-action 6-weight rods, aggressive front-taper floating lines, and mandatory technical wading layers.",
      date: "2025", // Ejemplo fijado en 2025 para comprobar la efectividad del filtro
      tag: "Chilean Patagonia"
    },
    {
      slug: "coyhaique-spring-creeks-technical-guide-terrestrial-fly-patterns",
      excerpt: "Mastering sight-presentation on private glass-water ecosystems. How to bypass the selective vision of trophy brown trout.",
      date: "2026",
      tag: "Chilean Patagonia"
    },
    {
      slug: "definitive-all-inclusive-trout-fishing-trip-chilean-patagonia",
      excerpt: "Secure your dates for the upcoming 2026-2027 season. Complete package details, boutique wilderness comfort, and private guiding beats.",
      date: "2026",
      tag: "Chilean Patagonia"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Patagonia Fly Fishing Intelligence Reports",
    "description": "Comprehensive index of tactical and biological field reports for angling in Coyhaique, Chile.",
    "url": "https://chileflyfishingexpeditions.com/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts
        .map((post, idx) => {
          const registry = destinationsRegistry[post.slug];
          if (!registry) return null;
          return {
            "@type": "ListItem",
            "position": idx + 1,
            "url": `https://chileflyfishingexpeditions.com/${post.slug}`,
            "name": registry.title,
            "description": post.excerpt
          };
        })
        .filter(Boolean)
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full min-h-screen relative bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          <InternalHero 
            subtitle="Field Intelligence & Strategy"
            title="Patagonia Fly Fishing Intelligence: Reports from Coyhaique, Chile"
            paragraph="Welcome to the official Chile Fly Fishing operational archive. Access verified biological assessments, precision hatch timelines, and local tactical intelligence designed for technical anglers targeting wild trout across the unpressured aquatic systems of the Aysén region."
            imageUrl="assets/images/rainbow-trout-two-anglers-in-a-boat-coyaique.avif"
            buttonText="Analyze Field Logs"
            buttonHref="#intelligence-grid"
          />

          {/* INVOCAMOS LA NUEVA GRILLA AUTOMATIZADA CON FILTROS Y FADE EFECTO SCROLL */}
          <BlogGridClient 
            blogPosts={blogPosts} 
            destinationsRegistry={destinationsRegistry} 
          />

          <ImageGallery />
          <Testimonials />
          <CinematicVideo />
        </main>

        <Footer />
      </div>
    </>
  );
}