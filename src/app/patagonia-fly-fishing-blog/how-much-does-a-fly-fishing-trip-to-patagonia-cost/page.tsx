import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patagonia Fly Fishing Trip Cost | Chile Fly Fishing",
  description: "Patagonia fly fishing trips cost USD $6,500/person, 7 nights all-inclusive. See exactly what's included, the payment schedule, and cancellation terms.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/how-much-does-a-fly-fishing-trip-to-patagonia-cost",
  },
};

export default function FlyFishingTripCostArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "How Much Does a Fly Fishing Trip to Patagonia Cost?",
        "description": "Patagonia fly fishing trips cost USD $6,500/person, 7 nights all-inclusive. See exactly what's included, the payment schedule, and cancellation terms.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/matias-sebastian-owner-chileflyfishing.webp",
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
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/how-much-does-a-fly-fishing-trip-to-patagonia-cost"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What's included in the price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The USD $6,500 per person rate includes private 4x4 ground transport (airport reception and daily transfers), 7 nights of lodge accommodation, all meals and drinks, bilingual professional guiding, catarafts, flies and technical tying supplies, and your Sernapesca recreational fishing license. International and domestic flights, travel/medical insurance, gratuities, and personal gear (rods, lines, waders, boots, wading jackets, polarized glasses) are not included."
            }
          },
          {
            "@type": "Question",
            "name": "What's the cancellation policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cancel 60 or more days before your trip and 50% of the trip value is charged as a cancellation fee (50% refunded). Cancel 30-59 days before and the fee is 70% (30% refunded). Cancel less than 30 days before and the full amount is charged, with no refund. No refund is issued for fishing days lost to weather — this is our 'Patagonia Clause.'"
            }
          },
          {
            "@type": "Question",
            "name": "How does payment work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 50% deposit secures your dates. The remaining 50% balance is due a minimum of 30 days before your trip begins."
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
            subtitle="Technical Field Report • Program & Pricing"
            title="How Much Does a Fly Fishing Trip to Patagonia Cost?"
            paragraph="A guided fly fishing trip to Patagonia with Chile Fly Fishing costs USD $6,500 per person, double occupancy, for the 2026–2027 season. The 7-night, 6-day program includes private 4x4 transportation, lodge accommodation, all meals and drinks, bilingual guiding, catarafts, flies, and your Sernapesca fishing license — everything except international flights, travel insurance, and personal gear."
            imageUrl="/assets/images/matias-sebastian-owner-chileflyfishing.webp"
            buttonText="Examine the Full Program"
            buttonHref="#cost-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="cost-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  What Exactly Is Included in the Rate
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  The USD $6,500 per person, double occupancy rate is structured as a fully operational expedition,
                  not a bare-bones trip requiring a la carte add-ons once you land in Coyhaique. Every logistical
                  layer — from your reception at Balmaceda Airport (BBA) to the last riverbank shore lunch — is
                  built into the quoted figure for the 2026–2027 season. See the full{" "}
                  <Link href="/patagonia-fly-fishing" className="text-[#C4944E] hover:underline font-semibold">
                    Patagonia fly fishing program
                  </Link>{" "}
                  for the complete itinerary breakdown.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: TABLA DE INCLUSIONES / NO INCLUSIONES */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <div>
                <h3 className="font-display text-2xl text-white pt-4 pb-4">What&apos;s Included vs. What&apos;s Not</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-left">
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Included</th>
                        <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Not Included</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70 align-top">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Private 4x4 transport (airport reception + daily transfers)</td>
                        <td className="py-3">International & domestic flights to Balmaceda (BBA)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">7 nights of lodge accommodation</td>
                        <td className="py-3">Travel / medical insurance</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">All meals and drinks</td>
                        <td className="py-3">Gratuities</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Bilingual professional guiding</td>
                        <td className="py-3">Personal gear: rods, lines, waders, boots, wading jackets, polarized glasses</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">Catarafts, flies & technical tying supplies</td>
                        <td className="py-3">—</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6">Sernapesca recreational fishing license</td>
                        <td className="py-3">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white pt-8 pb-4">Payment Structure</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-left">
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Payment</th>
                        <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Timing</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">50% deposit</td>
                        <td className="py-3">To secure your dates</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6">50% balance</td>
                        <td className="py-3">Minimum 30 days before the trip</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl text-white pt-8 pb-4">Cancellation Policy</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-left">
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Cancellation Timing</th>
                        <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Fee Charged</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">60+ days before the trip</td>
                        <td className="py-3">50% of trip value</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">59-30 days before the trip</td>
                        <td className="py-3">70% of trip value</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6">Less than 30 days before the trip</td>
                        <td className="py-3">100% of trip value (no refund)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-white/50 pt-4">
                  No refund is issued for fishing days lost to weather conditions — this is our &quot;Patagonia Clause.&quot;
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: CONTENIDO COMPLEMENTARIO (Dos Columnas) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  Why the Rate Is Fixed, Not a Quote
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Getting to Coyhaique involves a specific international-to-domestic flight connection and a
                  ground transfer inside our strict 1:30-hour operational radius. Because that logistics chain is
                  fixed, so is the rate — there&apos;s no variable markup for lodging tiers or guiding levels once you
                  book. For the full arrival breakdown, see our{" "}
                  <Link href="/patagonia-fly-fishing-blog/getting-to-coyhaique-complete-logistics-guide" className="text-[#C4944E] hover:underline font-semibold">
                    complete logistics guide to Coyhaique
                  </Link>.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-[36px] py-[18px] font-sans text-white bg-[#006DC6] rounded-[30px] hover:bg-[#006DC6]/90 transition-all uppercase text-xs tracking-wider font-semibold group"
                >
                  Secure Your Dates
                </Link>
              </div>

              <div className="w-full h-[400px] relative overflow-hidden rounded-lg bg-brand-charcoal border border-white/5">
                <img
                  src="/assets/images/cataraft-dry-fly-fishing-lake-zenteno-patagonia.avif"
                  alt="Cataraft and guided anglers fishing a remote Patagonian lake, included in the program rate"
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
                  <h3 className="font-display text-xl text-white pb-2">What&apos;s included in the price?</h3>
                  <p>
                    The USD $6,500 per person rate includes private 4x4 ground transport (airport reception and
                    daily transfers), 7 nights of lodge accommodation, all meals and drinks, bilingual professional
                    guiding, catarafts, flies and technical tying supplies, and your Sernapesca recreational fishing
                    license. International and domestic flights, travel/medical insurance, gratuities, and personal
                    gear (rods, lines, waders, boots, wading jackets, polarized glasses) are not included.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">What&apos;s the cancellation policy?</h3>
                  <p>
                    Cancel 60 or more days before your trip and 50% of the trip value is charged as a cancellation
                    fee (50% refunded). Cancel 30-59 days before and the fee is 70% (30% refunded). Cancel less
                    than 30 days before and the full amount is charged, with no refund. No refund is issued for
                    fishing days lost to weather — this is our &quot;Patagonia Clause.&quot;
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">How does payment work?</h3>
                  <p>
                    A 50% deposit secures your dates. The remaining 50% balance is due a minimum of 30 days before
                    your trip begins.
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
