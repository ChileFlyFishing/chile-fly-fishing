import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sight Fishing Río Baker: What to Expect",
  description:
    "What to expect sight fishing Río Baker during Patagonia's early season — big rainbow trout, high thaw-fed water, and floating-line presentations.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect",
  },
  openGraph: {
    title: "Sight Fishing Río Baker: What to Expect",
    description:
      "What to expect sight fishing Río Baker during Patagonia's early season — big rainbow trout, high thaw-fed water, and floating-line presentations.",
    url: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect",
    type: "article",
  },
};

export default function SightFishingRioBakerArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Sight Fishing Río Baker: What to Expect",
        "description":
          "What to expect sight fishing Río Baker during Patagonia's early season — big rainbow trout, high thaw-fed water, and floating-line presentations.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/big-rainbow-trout-big-trout-early-close-up-and-fly-rod-chilean-patagonia.avif",
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
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/sight-fishing-rio-baker-what-to-expect",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What line and leader should I use for sight fishing Río Baker in early season?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A floating, weight-forward line with a long leader is standard for early season sight fishing on Río Baker — you're presenting a fly directly to a visible fish, not blind-stripping the heavy sinking lines we use later in the year during the Migratory Run.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Río Baker fishable right after the spring thaw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — the higher, faster water that follows the thaw is exactly what triggers the aggressive pre-hatch feeding that makes October and November prime time for sight-fishing big rainbow trout.",
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
            subtitle="Technical Field Report • Sight Fishing"
            title="Sight Fishing Río Baker: What to Expect"
            paragraph="Sight fishing Río Baker during early season means reading high, thaw-fed currents for big rainbow trout holding tight against structure. Expect a floating line, a long leader, and a nymph or streamer presented directly to a visible fish — precise, visual work rather than blind searching, in water that runs faster and colder than the technical spring creeks of high season."
            imageUrl="/assets/images/big-rainbow-trout-big-trout-early-close-up-and-fly-rod-chilean-patagonia.avif"
            buttonText="Read the Field Notes"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Reading Río Baker After the Thaw
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Snowmelt pushes Río Baker higher and faster than it runs later in the season, and big rainbow trout respond by feeding aggressively tight against current breaks and structure rather than spread across open water. Sight fishing here means slowing down, spotting the fish first, and presenting the fly to that specific fish — the same visual discipline behind our{" "}
                  <Link href="/patagonia-fly-fishing-blog/when-is-early-season-fly-fishing-in-patagonia" className="text-[#C4944E] hover:underline font-semibold">
                    early season window
                  </Link>{" "}
                  overall.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE + TABLA DE EQUIPO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <h3 className="font-display text-2xl text-white pt-4">Tackle for Early Season Sight Fishing</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-left">
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Element</th>
                      <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Setup</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 align-top">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Line</td>
                      <td className="py-3">Floating, weight-forward</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Leader</td>
                      <td className="py-3">Long, for a drag-free approach in clear thaw water</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Fly</td>
                      <td className="py-3">Nymph or streamer, cast directly to a sighted fish rather than blind-searched</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6">Approach</td>
                      <td className="py-3">Deliberate positioning to spot the fish before the first cast</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-2xl text-white pt-4">How This Differs From Migratory Run Streamer Fishing</h3>
              <p>
                It&apos;s worth being precise here: the heavy sinking lines and articulated streamers associated with Patagonia fly fishing belong to autumn&apos;s{" "}
                <Link href="/patagonia-fly-fishing-blog/migratory-trout-mechanics-and-autumn-river-runs" className="text-[#C4944E] hover:underline font-semibold">
                  Migratory Run
                </Link>
                , not early season. On Río Baker in October and November, you&apos;re fishing to fish you can see, with a floating line — a different discipline from stripping streamers blind through a run.
              </p>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Baker Isn&apos;t the Only Early Season Water
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Lago Brown fishes very differently during the same window — still water instead of current, boat positioning instead of wading seams. See how the two compare directly in{" "}
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
                  src="/assets/images/early-season-patagonia-flyfishing.avif"
                  alt="Guide and angler sight fishing during Patagonia's early season on high, thaw-fed water"
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
                  <h3 className="font-display text-xl text-white pb-2">What line and leader should I use for sight fishing Río Baker in early season?</h3>
                  <p>
                    A floating, weight-forward line with a long leader is standard for early season sight fishing on Río Baker — you&apos;re presenting a fly directly to a visible fish, not blind-stripping the heavy sinking lines we use later in the year during the Migratory Run.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">Is Río Baker fishable right after the spring thaw?</h3>
                  <p>
                    Yes — the higher, faster water that follows the thaw is exactly what triggers the aggressive pre-hatch feeding that makes October and November prime time for sight-fishing big rainbow trout.
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
