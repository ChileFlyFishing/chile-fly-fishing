import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Technical Patagonia Fly Fishing Packing List | Gear Guide",
  description: "Master the water column near Coyhaique. Rig the optimal rod weights, lines, and gear for wild trout in Patagonian wind.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/technical-patagonia-fly-fishing-packing-list",
  },
};

export default function TechnicalPackingListArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Technical Patagonia Fly Fishing Packing List: Rods, Lines, and Gear for Aysén",
    "description": "An exhaustive operational gear breakdown analyzing optimal fly rod actions, specific fly line grains, and premium technical apparel required to navigate the pristine watersheds of Coyhaique, Chile.",
    "image": "https://chileflyfishingexpeditions.com/assets/images/angler-flyfishing-simms-wader-patagonia.avif",
    "datePublished": "2026-07-04",
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
      "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/technical-patagonia-fly-fishing-packing-list"
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
            subtitle="Technical Field Report • Equipment Architecture"
            title="The Technical Patagonia Fly Fishing Packing List: Rods, Lines, and Gear for Aysén"
            paragraph="An exhaustive operational gear breakdown analyzing optimal fly rod actions, specific fly line grains, and premium technical apparel required to navigate the pristine watersheds of Coyhaique."
            imageUrl="/assets/images/angler-flyfishing-simms-wader-patagonia.avif"
            buttonText="Examine Gear Specs"
            buttonHref="#gear-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO (Título Izquierda, Párrafo Derecha) */}
          <section id="gear-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Equipment Selection & Environmental Realities
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Fly fishing in the complex hydrological networks of the Aysén Region demands a highly specialized, technical equipment selection. Standard general-purpose trout setups fail under the operational strain of high Patagonian wind velocities and variable river structures. To achieve pinpoint accuracy and clean presentations on wild brown and rainbow trout near Coyhaique, your gear setup must be engineered around powerful, fast-action fly rods, advanced multi-density fly lines, and durable technical wading configurations.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE DEL ARTÍCULO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              
              <div>
                <h3 className="font-display text-2xl text-white pb-2">Choosing the Right Fly Rod Weights for Patagonian Wind (5wt vs 6wt vs 7wt)</h3>
                <p>
                  To conquer the strong Patagonian steppe wind, quick line speed and high tracking tracking accuracy are absolute requirements. A fast-action 9-foot 6-weight fly rod stands as the ultimate versatile tool for the Coyhaique watershed, offering the structural spine needed to punch heavy terrestrial dry flies through intense crosswinds while maintaining enough tip sensitivity for delicate presentations. For smaller, isolated spring creeks where precision sight fishing dominates, a fast-action 5-weight rod allows for stealthy bank approaches and immaculate tracking, whereas tracking large migratory fish on expansive freestone channels like the Río Baker necessitates a robust 7-weight configuration.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white pt-4 pb-2">Floating Lines vs Sink-Tips: Master the Water Column in Coyhaique Rivers</h3>
                <p>
                  Adapting your presentation to matching insect behaviors across diverse water depths requires a dual-line strategy. Weight-forward floating lines (WF) feature an aggressive front taper engineered to cycle large Fat Alberts, grasshoppers, and beetle patterns seamlessly along willow-lined banks during the high summer season. Conversely, when large migratory brown trout retreat into deeper current seams during the cooler months, switching to advanced sink-tips or integrated sinking lines (200 to 250 grains) becomes mandatory to cut through technical currents and present large articulated streamers directly inside the strike zone. You can study how these line configurations align with seasonal insect life cycles in our breakdown of the <Link href="/fishing-season" className="text-[#C4944E] hover:underline font-semibold">Patagonia fishing season</Link>.
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white pt-4 pb-2">Essential Outerwear: Waders and Wading Boots for Remote Backcountry Beats</h3>
                <p>
                  Navigating the rugged, unpressured riparian terrain of Patagonia requires heavy-duty, high-breathability outerwear that withstands intense physical abrasion. Premium multi-layer GORE-TEX waders are highly recommended to provide reliable thermal protection against cold, glacier-fed currents while maintaining structural flexibility during extensive backcountry hikes. Wading boots must be equipped with high-traction Vibram rubber soles combined with tungsten-carbide studs to prevent slipping on slick volcanic rock substrates and unstable gravel bars common across the region.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas - Texto Izquierda, Imagen Derecha) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Columna Texto (Izquierda) */}
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Seamless Expeditions: Flawless Logistics and All-Inclusive Travel Comfort
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Our custom private expeditions are completely streamlined from the moment you touch down in Patagonia. We coordinate your entire arrival route—from international transfers at Santiago International Airport (SCL) down to the 2.5-hour domestic flight landing at Balmaceda Airport (BBA). With private 4x4 ground transport, premium local lodging, fishing licenses, and top-tier cataraft configurations fully managed, your sole focus remains entirely on reading the water.
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
                  src="/assets/images/angler-flyfishing-simms-wader-patagonia.avif"
                  alt="Angler wearing waders and a fly fishing chest pack casting a rod in Patagonia"
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