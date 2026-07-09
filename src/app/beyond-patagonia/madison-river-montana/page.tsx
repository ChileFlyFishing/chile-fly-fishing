import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Fishing the Madison River, Montana: Field Notes",
  description:
    "Why the Madison's 50-mile riffle is one of the American West's defining trout fisheries, and how fishing it shapes the way we guide in Patagonia.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/beyond-patagonia/madison-river-montana",
  },
  openGraph: {
    title: "Fishing the Madison River, Montana: Field Notes",
    description:
      "Why the Madison's 50-mile riffle is one of the American West's defining trout fisheries, and how fishing it shapes the way we guide in Patagonia.",
    url: "https://chileflyfishingexpeditions.com/beyond-patagonia/madison-river-montana",
    type: "article",
  },
};

export default function MadisonRiverMontanaArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "The Madison River, Montana: Field Notes From a Patagonia Guide",
        "description":
          "Why the Madison's 50-mile riffle is one of the American West's defining trout fisheries, and how fishing it shapes the way we guide in Patagonia.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/madison-river-montana-2.webp",
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
          "@id": "https://chileflyfishingexpeditions.com/beyond-patagonia/madison-river-montana",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes the Madison River technically demanding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Its continuous riffle and pocket-water structure means a drag-free drift has to hold across several current seams at once, and the trout see enough pressure to key tightly on natural drift and precise fly selection.",
            },
          },
          {
            "@type": "Question",
            "name": "When is the best time to fish the Madison River?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Late June through mid-July for the salmonfly and golden stone hatch, and September through October for pre-runoff streamer fishing to migrating brown trout, are widely considered the two strongest windows.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you need a drift boat to fish the Madison?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Long sections, including the stretch between Quake Lake and Ennis, are wade-accessible, though a drift boat covers more water in a day and reaches pools that are difficult to wade to.",
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
            subtitle="Beyond Patagonia • Montana, USA"
            title="The Madison River, Montana: Field Notes From a Patagonia Guide"
            paragraph="The Madison River runs roughly 50 miles between Quake Lake and Ennis, Montana, through continuous riffles and pocket water that hold some of the highest densities of wild rainbow and brown trout in the American West. It's demanding, technical water — fast currents, selective fish, shifting hatches — and it's where our own guides sharpen the exact skills we bring to Patagonia."
            imageUrl="/assets/images/madison-river-montana-2.webp"
            buttonText="Read the Field Notes"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Where the Madison Fits in Montana&apos;s Trout Water
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  The Madison begins at the confluence of the Firehole and Gibbon rivers inside Yellowstone National Park, then runs north through Hebgen Lake and Quake Lake before opening into the broad valley between Ennis and Three Forks, where it joins the Jefferson and Gallatin to form the Missouri. Along the way it changes character completely — clear, spring-creek-like currents near the park giving way to the open riffle water the valley stretch is known for.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE + TABLA DE HATCHES */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <h3 className="font-display text-2xl text-white pt-4">Reading the 50-Mile Riffle</h3>
              <p>
                The stretch between Quake Lake and Ennis is locally nicknamed the &quot;50-Mile Riffle&quot; for a reason: it&apos;s near-continuous broken water, with few defined pools to anchor a drift. Both wading and drift-boat anglers have to mend across multiple current seams in the same cast, since a fly dragging even slightly in one seam gets refused by trout holding in the next. It&apos;s the same discipline our guides apply to the structural pools of the{" "}
                <Link href="/patagonia-fly-fishing-blog/explore-best-fly-fishing-waters-in-coyhaique-chile" className="text-[#C4944E] hover:underline font-semibold">
                  Simpson and Ñirehuao rivers
                </Link>{" "}
                back in Coyhaique.
              </p>

              <h3 className="font-display text-2xl text-white pt-4">Hatches That Set the Calendar</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-left">
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Window</th>
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Hatch / Focus</th>
                      <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Tactic</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 align-top">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Late June – mid-July</td>
                      <td className="py-3 pr-6">Salmonflies & golden stones</td>
                      <td className="py-3">Large dries and dry-dropper rigs tight to the bank</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">July – August</td>
                      <td className="py-3 pr-6">PMDs, caddis, terrestrials</td>
                      <td className="py-3">Long, light tippet and precise drag-free drifts</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6">September – October</td>
                      <td className="py-3 pr-6">Pre-runoff brown trout</td>
                      <td className="py-3">Sink-tip lines, articulated streamers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3: POR QUÉ LO PESCAMOS NOSOTROS MISMOS */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Why We Fish It Ourselves
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  This isn&apos;t a trip Chile Fly Fishing sells — we guide exclusively out of Coyhaique. Our guides spend time on rivers like the Madison because the riffle-reading, the fast dry-dropper adjustments, and the pressure of fishing to selective, well-educated trout are the same tools we use on{" "}
                  <Link href="/patagonia-fly-fishing-blog/coyhaique-spring-creeks-technical-guide-to-sight-presentation" className="text-[#C4944E] hover:underline font-semibold">
                    Coyhaique&apos;s spring creeks
                  </Link>. Different river, same discipline.
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
                  src="/assets/images/madison-river-montana-3.webp"
                  alt="Chile Fly Fishing guide holding a wild rainbow trout on Montana's Madison River"
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
                  <h3 className="font-display text-xl text-white pb-2">What makes the Madison River technically demanding?</h3>
                  <p>
                    Its continuous riffle and pocket-water structure means a drag-free drift has to hold across several current seams at once, and the trout see enough pressure to key tightly on natural drift and precise fly selection.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">When is the best time to fish the Madison River?</h3>
                  <p>
                    Late June through mid-July for the salmonfly and golden stone hatch, and September through October for pre-runoff streamer fishing to migrating brown trout, are widely considered the two strongest windows.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">Do you need a drift boat to fish the Madison?</h3>
                  <p>
                    No. Long sections, including the stretch between Quake Lake and Ennis, are wade-accessible, though a drift boat covers more water in a day and reaches pools that are difficult to wade to.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/beyond-patagonia"
                  className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold border-b border-[#C4944E]/20 pb-1 hover:border-[#C4944E] transition-all"
                >
                  Back to Beyond Patagonia
                </Link>
                <Link
                  href="/beyond-patagonia/dubois-wyoming"
                  className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold border-b border-[#C4944E]/20 pb-1 hover:border-[#C4944E] transition-all"
                >
                  Read: Dubois, Wyoming
                </Link>
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
