import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Río Baker vs Lago Brown: Which to Fish First",
  description:
    "Río Baker is moving freestone water, Lago Brown is still water fished from a boat. How to think about the two during Patagonia's early season.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/rio-baker-vs-lago-brown-which-to-fish-first",
  },
  openGraph: {
    title: "Río Baker vs Lago Brown: Which to Fish First",
    description:
      "Río Baker is moving freestone water, Lago Brown is still water fished from a boat. How to think about the two during Patagonia's early season.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/rio-baker-vs-lago-brown-which-to-fish-first",
    type: "article",
  },
};

export default function RioBakerVsLagoBrownArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Río Baker vs Lago Brown: Which to Fish First",
        "description":
          "Río Baker is moving freestone water, Lago Brown is still water fished from a boat. How to think about the two during Patagonia's early season.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/early-season-patagonia-flyfishing.avif",
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
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/rio-baker-vs-lago-brown-which-to-fish-first",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Río Baker or Lago Brown better for early season fly fishing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neither is objectively better — they're different types of water. Río Baker is moving freestone current suited to wading or drift-boat fishing, while Lago Brown is still water fished from a boat. Guides choose between them day to day based on conditions.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need different gear for the river versus the lake?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The core approach — floating line, long leader, sight-presented fly — carries over, but positioning changes: you're reading current seams on the river and reading structure or cruising fish on the lake.",
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
            subtitle="Technical Field Report • Water Comparison"
            title="Río Baker vs Lago Brown: Which to Fish First"
            paragraph="There's no fixed order — guides read Río Baker's flow and Lago Brown's surface conditions each morning and choose based on wind, water level, and how far the thaw has progressed that week. Broadly, Río Baker is moving freestone water suited to wading or drift-boat sight-fishing, while Lago Brown is still water requiring boat positioning and slower, more deliberate presentations."
            imageUrl="/assets/images/early-season-patagonia-flyfishing.avif"
            buttonText="Read the Field Notes"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  What Makes a River Different From a Lake Here
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Río Baker moves — you&apos;re reading current seams, holding lies, and structure to find where a fish sits against the flow. Lago Brown doesn&apos;t — you&apos;re reading the surface for cruising fish and working from a boat instead of a wading position. The{" "}
                  <Link href="/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect" className="text-[#C4944E] hover:underline font-semibold">
                    sight-fishing discipline
                  </Link>{" "}
                  carries over to both, but how you apply it changes with the water type.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: TABLA COMPARATIVA */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <h3 className="font-display text-2xl text-white pt-4">Río Baker vs. Lago Brown at a Glance</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-left">
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg"></th>
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Río Baker (River)</th>
                      <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Lago Brown (Lake)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 align-top">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6 text-white/90 font-semibold">Water type</td>
                      <td className="py-3 pr-6">Moving freestone current</td>
                      <td className="py-3">Still water</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6 text-white/90 font-semibold">Typical access</td>
                      <td className="py-3 pr-6">Wading or drift boat</td>
                      <td className="py-3">Boat</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6 text-white/90 font-semibold">Reading the water</td>
                      <td className="py-3 pr-6">Current seams, breaks, holding lies</td>
                      <td className="py-3">Structure, drop-offs, cruising fish</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6 text-white/90 font-semibold">Presentation style</td>
                      <td className="py-3 pr-6">Drift-based, cast upstream or across</td>
                      <td className="py-3">Cast to a sighted or cruising fish, retrieve-based</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-white/90 font-semibold">Best suited for</td>
                      <td className="py-3 pr-6">Anglers who prefer moving water and classic drift presentations</td>
                      <td className="py-3">Anglers who prefer sight-casting to visibly working fish</td>
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
                  So, Which Do You Fish First?
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Honestly, it depends on the day — wind direction favors one over the other, and how far the thaw has progressed changes water levels on Río Baker faster than it changes Lago Brown. For the full picture of what this window looks like before you land, start with{" "}
                  <Link href="/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia" className="text-[#C4944E] hover:underline font-semibold">
                    when early season actually happens
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
                  src="/assets/images/apertura-temporada-flyfishing-rainbow-trout.avif"
                  alt="Angler releasing a rainbow trout during Patagonia's early season"
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
                  <h3 className="font-display text-xl text-white pb-2">Is Río Baker or Lago Brown better for early season fly fishing?</h3>
                  <p>
                    Neither is objectively better — they&apos;re different types of water. Río Baker is moving freestone current suited to wading or drift-boat fishing, while Lago Brown is still water fished from a boat. Guides choose between them day to day based on conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">Do I need different gear for the river versus the lake?</h3>
                  <p>
                    The core approach — floating line, long leader, sight-presented fly — carries over, but positioning changes: you&apos;re reading current seams on the river and reading structure or cruising fish on the lake.
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
