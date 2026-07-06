import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting to Coyhaique: Complete Logistics Guide",
  description: "Fly to Santiago (SCL), connect to Balmaceda (BBA), then a 45-50 min transfer to Coyhaique. The complete route, airlines, and our 1:30-hour transfer rule.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/getting-to-coyhaique-complete-logistics-guide",
  },
};

export default function GettingToCoyhaiqueLogisticsGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Getting to Coyhaique: The Complete Logistics Guide",
        "description": "Fly to Santiago (SCL), connect to Balmaceda (BBA), then a 45-50 min transfer to Coyhaique. The complete route, airlines, and our 1:30-hour transfer rule.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/welcome-to-coyhaique.webp",
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
          "@id": "https://chileflyfishingexpeditions.com/patagonia-fly-fishing-blog/getting-to-coyhaique-complete-logistics-guide"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I get to Coyhaique from the US?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fly internationally to Santiago (SCL), then take a domestic connection of roughly 2.5 hours to Balmaceda Airport (BBA). Our guide receives you at BBA and drives you 45-50 minutes to Coyhaique by private 4x4."
            }
          },
          {
            "@type": "Question",
            "name": "What airport do I fly into?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Balmaceda Airport (BBA), the regional airport serving Coyhaique and the Aysén region, reached via a domestic connection from Santiago (SCL)."
            }
          },
          {
            "@type": "Question",
            "name": "How long is the transfer from the airport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The private ground transfer from Balmaceda Airport to Coyhaique takes 45-50 minutes. This is consistent with our operational rule that no daily transfer to any fishing beat during your stay exceeds 1 hour 30 minutes."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Chile Fly Fishing",
        "description": "Technical fly-fishing guiding operation based in Coyhaique, Aysén, Chilean Patagonia.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coyhaique",
          "addressRegion": "Aysén",
          "addressCountry": "CL"
        },
        "url": "https://chileflyfishingexpeditions.com"
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
            subtitle="Technical Field Report • Logistics"
            title="Getting to Coyhaique: The Complete Logistics Guide"
            paragraph="Getting to Coyhaique from the US takes one international flight to Santiago (SCL), then a domestic connection of roughly 2.5 hours to Balmaceda Airport (BBA). Our guide receives you at BBA and drives you 45-50 minutes to Coyhaique — no leg of any daily transfer during your stay ever exceeds 1 hour 30 minutes, a hard operational rule we hold across every guided beat."
            imageUrl="/assets/images/welcome-to-coyhaique.webp"
            buttonText="Examine the Full Route"
            buttonHref="#logistics-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="logistics-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Why the 1:30-Hour Rule Matters
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Every guiding zone we operate — Cerro Castillo, Ñirehuao, Río Baker, Lago Brown, and the
                  surrounding systems — sits within a strict 1:30-hour ground transfer radius of Coyhaique. That&apos;s
                  a fixed operational rule, not a marketing claim: no daily transfer to the water ever exceeds it.
                  See the full{" "}
                  <Link href="/patagonia-fly-fishing" className="text-[#C4944E] hover:underline font-semibold">
                    Patagonia fly fishing program
                  </Link>{" "}
                  for what that access buys you once you&apos;re on the water.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: TABLA ITINERARIO PASO A PASO */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <div>
                <h3 className="font-display text-2xl text-white pt-4 pb-4">Arrival Itinerary, Step by Step</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-left">
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Step</th>
                        <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Leg</th>
                        <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">1</td>
                        <td className="py-3 pr-6">International flight to Santiago (SCL)</td>
                        <td className="py-3">Varies by origin city</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">2</td>
                        <td className="py-3 pr-6">Domestic flight, Santiago (SCL) → Balmaceda (BBA)</td>
                        <td className="py-3">~2.5 hours</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">3</td>
                        <td className="py-3 pr-6">Guide reception at Balmaceda Airport</td>
                        <td className="py-3">—</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-6">4</td>
                        <td className="py-3 pr-6">Private 4x4 ground transfer, BBA → Coyhaique</td>
                        <td className="py-3">45-50 minutes</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-6">5</td>
                        <td className="py-3 pr-6">Daily transfers to fishing beats during your stay</td>
                        <td className="py-3">Never exceeds 1:30 hrs</td>
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
                  What This Means for Your Trip Cost
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  Because the arrival route and transfer radius are fixed operational facts, they&apos;re baked
                  directly into a single program rate rather than a variable quote. See exactly what that rate
                  includes in our{" "}
                  <Link href="/patagonia-fly-fishing-blog/how-much-does-a-fly-fishing-trip-to-patagonia-cost" className="text-[#C4944E] hover:underline font-semibold">
                    fly fishing trip cost breakdown
                  </Link>.
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
                  src="/assets/images/how-to-travel-to-coyhaique-in-patagonia-chile.avif"
                  alt="Anglers arriving at the Bienvenidos a Coyhaique welcome sign after their transfer from Balmaceda Airport"
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
                  <h3 className="font-display text-xl text-white pb-2">How do I get to Coyhaique from the US?</h3>
                  <p>
                    Fly internationally to Santiago (SCL), then take a domestic connection of roughly 2.5 hours to
                    Balmaceda Airport (BBA). Our guide receives you at BBA and drives you 45-50 minutes to
                    Coyhaique by private 4x4.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">What airport do I fly into?</h3>
                  <p>
                    Balmaceda Airport (BBA), the regional airport serving Coyhaique and the Aysén region, reached
                    via a domestic connection from Santiago (SCL).
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">How long is the transfer from the airport?</h3>
                  <p>
                    The private ground transfer from Balmaceda Airport to Coyhaique takes 45-50 minutes. This is
                    consistent with our operational rule that no daily transfer to any fishing beat during your
                    stay exceeds 1 hour 30 minutes.
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
