import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Fly Fishing Dubois, Wyoming: Field Notes",
  description:
    "Backcountry cutthroat lakes and Wind River badlands water near Dubois, Wyoming — the unpressured-water philosophy behind our Patagonia guiding.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/beyond-patagonia/dubois-wyoming",
  },
  openGraph: {
    title: "Fly Fishing Dubois, Wyoming: Field Notes",
    description:
      "Backcountry cutthroat lakes and Wind River badlands water near Dubois, Wyoming — the unpressured-water philosophy behind our Patagonia guiding.",
    url: "https://chileflyfishingexpeditions.com/beyond-patagonia/dubois-wyoming",
    type: "article",
  },
};

export default function DuboisWyomingArticle() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Dubois, Wyoming: Field Notes From a Patagonia Guide",
        "description":
          "Backcountry cutthroat lakes and Wind River badlands water near Dubois, Wyoming — the unpressured-water philosophy behind our Patagonia guiding.",
        "image": "https://chileflyfishingexpeditions.com/assets/images/wyoming-2.webp",
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
          "@id": "https://chileflyfishingexpeditions.com/beyond-patagonia/dubois-wyoming",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Dubois, Wyoming good for fly fishing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The upper Wind River and its high-elevation tributaries hold healthy populations of cutthroat and rainbow trout, and the town sees a fraction of the angling pressure of nearby Jackson Hole or Yellowstone.",
            },
          },
          {
            "@type": "Question",
            "name": "What kind of trout are in the Wind River near Dubois?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yellowstone cutthroat trout dominate the upper river and the high-alpine lakes, with rainbow trout and some hybrids showing up in the lower valley stretches.",
            },
          },
          {
            "@type": "Question",
            "name": "How far is Dubois from Yellowstone and Grand Teton?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dubois sits roughly 80 miles from Jackson and the south entrance to Grand Teton National Park, and about two and a half hours from Yellowstone's east entrance via Togwotee Pass.",
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
            subtitle="Beyond Patagonia • Wyoming, USA"
            title="Dubois, Wyoming: Field Notes From a Patagonia Guide"
            paragraph="Dubois sits in the upper Wind River Valley of northwest Wyoming, between the Absaroka Range and the Wind River Range, roughly two hours from Jackson Hole and Grand Teton National Park. Its water ranges from red-rock badlands freestone stretches to hike-in alpine lakes holding native cutthroat trout — remote, lightly-fished water that mirrors exactly what we look for in Patagonia."
            imageUrl="/assets/images/wyoming-2.webp"
            buttonText="Read the Field Notes"
            buttonHref="#article-density"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="article-density" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Where Dubois Sits in Wyoming&apos;s Trout Country
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Dubois is a small gateway town in Fremont County, built along the upper Wind River between two mountain ranges: the volcanic Absarokas to the north and the granite spine of the Wind River Range to the south. Despite sitting on the Togwotee Pass route between Jackson Hole and the rest of Wyoming, it stays well outside the Yellowstone/Teton traffic corridor — which is exactly why the water around it holds up.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: CONTENIDO AL DETALLE + TABLA DE ZONAS */}
          <section className="w-full py-20 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto font-sans text-base md:text-lg text-white/80 leading-relaxed space-y-8">
              <h3 className="font-display text-2xl text-white pt-4">The Backcountry Lake Fishery</h3>
              <p>
                North and west of town, the DuNoir area and the high country toward Union Pass hold alpine lakes that only open up on foot or on horseback. The reward is native cutthroat trout that rarely see a fly — the same trade-off in effort for isolation that defines the guiding zones we work around{" "}
                <Link href="/patagonia-fly-fishing-blog/uncrowded-patagonia-why-isolation-is-the-real-luxury" className="text-[#C4944E] hover:underline font-semibold">
                  Coyhaique
                </Link>.
              </p>

              <h3 className="font-display text-2xl text-white pt-4">Wind River & Badlands Water</h3>
              <p>
                Closer to town, the Wind River cuts through red-rock badlands terrain — undercut banks, broken pocket water, and enough structure to hold fish through the heat of summer. It&apos;s technical wade fishing: short, accurate casts to tight cover rather than long, open-water drifts.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-left">
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Zone</th>
                      <th className="py-3 pr-6 text-[#C4944E] font-display font-normal text-lg">Water Type</th>
                      <th className="py-3 text-[#C4944E] font-display font-normal text-lg">Species</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70 align-top">
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">DuNoir & high alpine lakes</td>
                      <td className="py-3 pr-6">Hike-in / horseback still water</td>
                      <td className="py-3">Yellowstone cutthroat trout</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 pr-6">Upper Wind River</td>
                      <td className="py-3 pr-6">Freestone river, badlands canyon</td>
                      <td className="py-3">Cutthroat & rainbow trout</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6">Union Pass high country</td>
                      <td className="py-3 pr-6">Headwater creeks</td>
                      <td className="py-3">Native cutthroat trout</td>
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
                  Chile Fly Fishing doesn&apos;t guide in Wyoming — we guide exclusively out of Coyhaique. Our guides spend time on water like the Wind River&apos;s backcountry lakes because the logic is identical to Patagonia: skip the pressured, roadside water and put in the extra hour of hiking or driving for fish that haven&apos;t seen a boat all season.
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
                  src="/assets/images/wyoming-3.webp"
                  alt="Anglers wading a clear freestone river near Dubois, Wyoming"
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
                  <h3 className="font-display text-xl text-white pb-2">Is Dubois, Wyoming good for fly fishing?</h3>
                  <p>
                    Yes. The upper Wind River and its high-elevation tributaries hold healthy populations of cutthroat and rainbow trout, and the town sees a fraction of the angling pressure of nearby Jackson Hole or Yellowstone.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">What kind of trout are in the Wind River near Dubois?</h3>
                  <p>
                    Yellowstone cutthroat trout dominate the upper river and the high-alpine lakes, with rainbow trout and some hybrids showing up in the lower valley stretches.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white pb-2">How far is Dubois from Yellowstone and Grand Teton?</h3>
                  <p>
                    Dubois sits roughly 80 miles from Jackson and the south entrance to Grand Teton National Park, and about two and a half hours from Yellowstone&apos;s east entrance via Togwotee Pass.
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
                  href="/beyond-patagonia/madison-river-montana"
                  className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold border-b border-[#C4944E]/20 pb-1 hover:border-[#C4944E] transition-all"
                >
                  Read: The Madison River, Montana
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
