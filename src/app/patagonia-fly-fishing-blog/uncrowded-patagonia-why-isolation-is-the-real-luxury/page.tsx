import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uncrowded Patagonia: Why Isolation Is the Real Luxury",
  description: "Every Chile Fly Fishing guiding zone sits within a 1:30-hour transfer radius of Coyhaique — small groups, unpressured wild trout water, verified.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/uncrowded-patagonia-why-isolation-is-the-real-luxury",
  },
};

export default function UncrowdedPatagoniaArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Uncrowded Patagonia: Why Isolation Is the Real Luxury",
        "description": "Every Chile Fly Fishing guiding zone sits within a 1:30-hour transfer radius of Coyhaique — small groups, unpressured wild trout water, verified.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/remote-fly-fishing-expedition-coyhaique-patagonia-chile.avif",
        "datePublished": "2026-07-05",
        "dateModified": "2026-07-05",
        "author": {
          "@type": "Person",
          "name": "Matías Araneda",
          "jobTitle": "Head Guide & Founder",
          "url": "https://chileflyfishingexpeditions.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Chile Fly Fishing",
          "url": "https://chileflyfishingexpeditions.com"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/uncrowded-patagonia-why-isolation-is-the-real-luxury"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does 'unpressured water' actually mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It means every guiding zone we fish — Cerro Castillo, Ñirehuao, Río Baker, Lago Brown and the surrounding systems — sits within our own 1:30-hour transfer radius from Coyhaique, guided in small groups rather than rotated through multiple outfitters. It's a verifiable operational fact, not an adjective."
            }
          },
          {
            "@type": "Question",
            "name": "How many anglers fish these waters per season?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We don't have a published exact figure for this. What we can tell you concretely: we guide in small groups within a fixed 1:30-hour radius of our Coyhaique base, so the water you fish is never shared with rotating outside operations."
            }
          }
        ]
      }
    ]
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
            subtitle="Technical Field Report • Positioning"
            title="Uncrowded Patagonia: Why Isolation Is the Real Luxury"
            paragraph="Patagonia fly fishing with Chile Fly Fishing means genuine isolation, not a marketing claim. Every guiding zone — Cerro Castillo, Ñirehuao, Río Baker, Lago Brown — sits within a strict 1:30-hour transfer radius of our Coyhaique base, fished in small groups on unpressured wild trout water. For anglers who've already fished Argentina's traditional beats, this is the next frontier: the whole river, to yourself."
            imageUrl="/assets/images/remote-fly-fishing-expedition-coyhaique-patagonia-chile.avif"
            buttonText="Examine the Isolation Rule"
            buttonHref="#isolation-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="isolation-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  The Trophy Fish Isn&apos;t the Whole Point
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  We don&apos;t believe the ultimate trip is only about the trophy fish — it&apos;s about having the
                  entire river to yourself. <em>Unpressured Waters. Absolute Isolation.</em> Most anglers who reach
                  out to us have already fished the traditional Patagonian circuits, often in Argentina, and are
                  actively looking for the next frontier: water that hasn&apos;t been worked by three guided groups
                  before lunch.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO + TABLA */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <div>
                <h3 className="font-display text-2xl text-white pt-4 pb-4">The 1:30-Hour Rule, Verified</h3>
                <p>
                  Isolation is easy to claim and hard to prove. Ours is a fixed operational rule, not a comfort
                  amenity: every one of our guiding zones sits within a maximum 1:30-hour ground transfer from our
                  Coyhaique base. That radius is what keeps the water exclusive to our own small groups instead of
                  rotating through multiple outside operations.
                </p>
                <div className="overflow-x-auto pt-6">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-left">
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Guiding Zone</th>
                        <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Transfer Time from Coyhaique</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Cerro Castillo</td>
                        <td className="py-3">≤ 1:30 hrs</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Ñirehuao</td>
                        <td className="py-3">≤ 1:30 hrs</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Río Baker</td>
                        <td className="py-3">≤ 1:30 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6">Lago Brown</td>
                        <td className="py-3">≤ 1:30 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  What Isolation Actually Buys You
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Small guided groups, catch-and-release handling that keeps the fish wet and minimizes air
                  exposure, and water that responds to careful presentation instead of pressured, educated trout.
                  See how this translates into the actual{" "}
                  <Link href="/patagonia-fly-fishing" className="text-[#C4944E] hover:underline font-semibold">
                    guided fishing program
                  </Link>{" "}
                  once you&apos;re on the ground in Coyhaique.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
                >
                  Inquire About Guided Trips
                </Link>
              </div>

              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img
                  src="/assets/images/river-lake-coyhaique-patagonia.avif"
                  alt="Empty river valley and lake near Coyhaique with no other anglers in sight"
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
                  <h3 className="font-display text-xl text-white pb-2">What does &quot;unpressured water&quot; actually mean?</h3>
                  <p>
                    It means every guiding zone we fish — Cerro Castillo, Ñirehuao, Río Baker, Lago Brown and the
                    surrounding systems — sits within our own 1:30-hour transfer radius from Coyhaique, guided in
                    small groups rather than rotated through multiple outfitters. It&apos;s a verifiable operational
                    fact, not an adjective.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">How many anglers fish these waters per season?</h3>
                  <p>
                    We don&apos;t have a published exact figure for this. What we can tell you concretely: we guide
                    in small groups within a fixed 1:30-hour radius of our Coyhaique base, so the water you fish is
                    never shared with rotating outside operations.
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
