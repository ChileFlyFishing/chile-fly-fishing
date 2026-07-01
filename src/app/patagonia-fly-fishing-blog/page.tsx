// src/app/fly-fishing-blog/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import BlogGridClient from "@/components/organisms/BlogGridClient"; 
import { destinationsRegistry } from "../data";

// ========================================================
// OPTIMIZACIÓN SEO: METADATA ESTRUCTURADA
// ========================================================
export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Field Reports | Chile Fly Fishing Blog",
  description: "Technical intelligence, river mapping, and seasonal logs for fly fishing in Coyhaique, Chile. Expert hatch calendars and gear advice for Patagonian trout.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/fly-fishing-blog",
  },
  openGraph: {
    title: "Patagonia Fly Fishing Field Reports | Chile Fly Fishing Blog",
    description: "Technical intelligence, river mapping, and seasonal logs for fly fishing in Coyhaique, Chile.",
    url: "https://www.chileflyfishingexpeditions.com/fly-fishing-blog",
    type: "website",
  },
};

export default function FlyFishingBlogHub() {
  // Data estructurada con tags de tipo de pesca y año para el filtrado dinámico
  const blogPosts = [
    {
      slug: "why-coyhaique-chile-is-world-famous-for-dry-fly-fishing",
      excerpt: "An in-depth biological and geological analysis of why the Aysén region remains the undisputed surface-action sanctuary of South America.",
      date: "2026",
      tag: "Dry Fly"
    },
    {
      slug: "migratory-trout-mechanics-and-autumn-river-runs",
      excerpt: "The seasonal mechanics of migratory brown and rainbow trout in the Coyhaique river basins require strategic timing and heavy fly configurations.",
      date: "2026",
      tag: "Streamer"
    },
    {
      slug: "coyhaique-spring-creeks-technical-guide-terrestrial-fly-patterns",
      excerpt: "Mastering sight-presentation on private glass-water ecosystems. How to bypass the selective vision of trophy brown trout.",
      date: "2026",
      tag: "Nymph"
    },
    {
      slug: "explore-best-fly-fishing-waters-in-coyhaique-chile",
      excerpt: "A complete structural overview of our home waters: from the mighty Simpson River freestones to hidden limestone spring creeks.",
      date: "2026",
      tag: "Dry Fly"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Patagonia Fly Fishing Intelligence Reports",
    "description": "Comprehensive index of tactical and biological field reports for fly fishing in Coyhaique, Chile.",
    "url": "https://chileflyfishingexpeditions.com/fly-fishing-blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, idx) => {
        const registry = destinationsRegistry[post.slug];
        if (!registry) return null;
        return {
          "@type": "ListItem",
          "position": idx + 1,
          "url": `https://chileflyfishingexpeditions.com/fly-fishing-blog/${post.slug}`,
          "name": registry.title,
          "description": post.excerpt
        };
      }).filter(Boolean)
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
          {/* HERO BANNER */}
          <InternalHero 
            subtitle="Chile Fly Fishing Expeditions"
            title="Patagonia Fly Fishing Intelligence: Coyhaique Field Logs"
            paragraph="Welcome to our official archive of Chile fly fishing expeditions. This portal delivers verified technical field logs, precision hatch calendars, and local water intelligence designed for dedicated anglers targeting wild trout across the unpressured river beats of Coyhaique, Patagonia."
            imageUrl="assets/images/rainbow-trout-two-anglers-in-a-boat-coyaique.avif"
            buttonText="Analyze Field Logs"
            buttonHref="#content-density-section"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
          <section id="content-density-section" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Local Water Tactics & Biological Intel
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Our targeted scouting matrix allows anglers to master pristine Patagonian waters during their custom Patagonia fishing trip. We cover the prolific terrestrial hatches of the Ñirehuao River, the technical pools of the Simpson River, and the multi-channeled currents of the Paloma River system to ensure clean, drag-free drifts across the finest trout beats in South America.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 1 - COMPONENTE CLIENTE: LISTADO DE ARTÍCULOS CON FILTROS AVANZADOS */}
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