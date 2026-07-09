import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When Is Early Season Fly Fishing in Patagonia?",
  description:
    "Early season fly fishing in Patagonia runs October through November, targeting big rainbow trout on Río Baker and Lago Brown after spring snowmelt.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia",
  },
  openGraph: {
    title: "When Is Early Season Fly Fishing in Patagonia?",
    description:
      "Early season fly fishing in Patagonia runs October through November, targeting big rainbow trout on Río Baker and Lago Brown after spring snowmelt.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia",
    type: "article",
  },
};

export default function EarlySeasonArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "When Is Early Season Fly Fishing in Patagonia?",
        "description":
          "Early season fly fishing in Patagonia runs October through November, targeting big rainbow trout on Río Baker and Lago Brown after spring snowmelt.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/apertura-temporada-flyfishing-rainbow-trout.avif",
        "datePublished": "2026-07-09",
        "dateModified": "2026-07-09",
        "author": {
          "@type": "Person",
          "name": "Matías Araneda",
          "jobTitle": "Head Guide & Founder",
          "url": "https://chileflyfishingexpeditions.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Chile Fly Fishing",
          "url": "https://chileflyfishingexpeditions.com",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When does early season fly fishing start in Patagonia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Early season, what we call The Awakening, runs from October through November on Río Baker and Lago Brown, once spring snowmelt raises water levels and triggers aggressive pre-hatch feeding.",
            },
          },
          {
            "@type": "Question",
            "name": "What species can I target in October and November?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Large resident and migratory rainbow trout are the primary target during early season, holding tight to structure in the high, fast water that follows the thaw.",
            },
          },
        ],
      },
    ],
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
            subtitle="Technical Field Report • Early Season"
            title="When Is Early Season Fly Fishing in Patagonia?"
            paragraph="Early season fly fishing in Patagonia — The Awakening — runs from October through November, right after Andean snowmelt swells Río Baker and Lago Brown. High, fast water triggers aggressive pre-hatch feeding, and sight-fishing to large resident and migratory rainbow trout holding tight against structure is the defining technique of this opening window."
            imageUrl="/assets/images/apertura-temporada-flyfishing-rainbow-trout.avif"
            buttonText="Read the Field Notes"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Why the Thaw Window Matters
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  As Andean snowmelt feeds into Río Baker and Lago Brown, water levels rise and cool, pushing big rainbow trout into an aggressive pre-hatch feeding pattern before the terrestrial hatches of high season even begin. It&apos;s a narrow, technical window — higher water velocity than the low, clear conditions of{" "}
                  <Link href="/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation" className="text-[#C4944E] hover:underline font-semibold">
                    high-season spring creeks
                  </Link>{" "}
                  — that rewards anglers who can read structure and current seams quickly.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: TABLA — LAS 3 TEMPORADAS EN CONTEXTO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <p>
                Río Baker and Lago Brown are the two zones we work during early season, targeting rainbow trout with sight-fishing tactics rather than the blind-searching heavier setups used later in the year. Here&apos;s how that fits alongside our other two seasonal windows.
              </p>

              <h3 className="font-display text-2xl text-white pt-4">Patagonia&apos;s Three Seasonal Windows</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-left">
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Window</th>
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Zone Focus</th>
                      <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Technique</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 align-top">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Early Season — The Awakening (Oct–Nov)</td>
                      <td className="py-3 pr-6">Río Baker, Lago Brown</td>
                      <td className="py-3">Sight fishing big rainbow trout post-thaw</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">High Season — The Surface Game (Dec–Jan)</td>
                      <td className="py-3 pr-6">Hidden lagoons & spring creeks</td>
                      <td className="py-3">Dry fly, hopper/terrestrial hatch, brown trout</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6">Migratory Run — The Final Challenge (autumn)</td>
                      <td className="py-3 pr-6">Remote rivers</td>
                      <td className="py-3">Articulated streamers, sinking lines, migratory brown trout</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  What to Expect on the Water
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Every fish is released using our strict catch-and-release handling, kept wet and out of the air for the shortest possible time. For the tackle and technique specifics, see our breakdown of{" "}
                  <Link href="/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect" className="text-[#C4944E] hover:underline font-semibold">
                    sight fishing Río Baker
                  </Link>
                  , or compare the two zones directly in{" "}
                  <Link href="/patagonia-fly-fishing-blog/rio-baker-vs-lago-brown-which-to-fish-first" className="text-[#C4944E] hover:underline font-semibold">
                    Río Baker vs. Lago Brown
                  </Link>.
                </p>
                <Link
                  href="/patagonia-fly-fishing"
                  className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
                >
                  See the Patagonia Program
                </Link>
              </div>

              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img
                  src="/assets/images/big-rainbow-trout-big-trout-early-season-vertical-chilean-patagonia.avif"
                  alt="Angler holding a big rainbow trout caught during Patagonia's early season"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* SECTION 4: FAQ REAL */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto">
              <h2 className="font-display text-3xl text-white font-normal leading-tight mb-10">
                Frequently Asked Questions
              </h2>
              <div className="space-y-10 font-sans text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="font-display text-xl text-white pb-2">When does early season fly fishing start in Patagonia?</h3>
                  <p>
                    Early season, what we call The Awakening, runs from October through November on Río Baker and Lago Brown, once spring snowmelt raises water levels and triggers aggressive pre-hatch feeding.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">What species can I target in October and November?</h3>
                  <p>
                    Large resident and migratory rainbow trout are the primary target during early season, holding tight to structure in the high, fast water that follows the thaw.
                  </p>
                </div>
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
