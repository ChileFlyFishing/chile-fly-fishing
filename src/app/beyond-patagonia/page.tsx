// src/app/beyond-patagonia/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: "Beyond Patagonia: Madison River & Wind River Country",
  description:
    "Field notes from Chile Fly Fishing's guides on Montana's Madison River and Wyoming's Wind River country — the home waters behind our Patagonia program.",
  alternates: {
    canonical: "https://chileflyfishingexpeditions.com/beyond-patagonia",
  },
  openGraph: {
    title: "Beyond Patagonia: Madison River & Wind River Country",
    description:
      "Field notes from Chile Fly Fishing's guides on Montana's Madison River and Wyoming's Wind River country — the home waters behind our Patagonia program.",
    url: "https://chileflyfishingexpeditions.com/beyond-patagonia",
    type: "website",
  },
};

const destinations = [
  {
    slug: "madison-river-montana",
    title: "The Madison River, Montana",
    region: "Montana, USA",
    excerpt:
      "A 50-mile riffle between Quake Lake and Ennis holding some of the highest wild trout densities in the American West — and the technical water our guides use to sharpen riffle-reading and dry-dropper presentation.",
    imageUrl: "/assets/images/madison-river-montana-2.webp",
    imageAlt: "Chile Fly Fishing guide holding a wild brown trout on Montana's Madison River",
  },
  {
    slug: "dubois-wyoming",
    title: "Dubois, Wyoming",
    region: "Wind River Country, USA",
    excerpt:
      "Red-rock badlands water and hike-in alpine lakes in the upper Wind River Valley, a fraction of the angling pressure of nearby Jackson Hole — the same unpressured-water philosophy we guide by in Coyhaique.",
    imageUrl: "/assets/images/wyoming-2.webp",
    imageAlt: "Red-rock badlands and Wind River Range peaks near Dubois, Wyoming",
  },
];

export default function BeyondPatagoniaHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Beyond Patagonia: Field Notes From Our Guides' Home Waters",
        "description":
          "Field notes from Chile Fly Fishing's guides on Montana's Madison River and Wyoming's Wind River country — the home waters behind our Patagonia program.",
        "url": "https://chileflyfishingexpeditions.com/beyond-patagonia",
      },
      {
        "@type": "ItemList",
        "itemListElement": destinations.map((dest, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `https://chileflyfishingexpeditions.com/beyond-patagonia/${dest.slug}`,
          "name": dest.title,
          "description": dest.excerpt,
        })),
      },
    ],
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
            subtitle="Chile Fly Fishing Expeditions • Beyond Patagonia"
            title="Beyond Patagonia: Field Notes From Our Guides' Home Waters"
            paragraph="Beyond Patagonia is where Chile Fly Fishing's guides document the water they fish at home, in the U.S. — Montana's Madison River and the Wind River country around Dubois, Wyoming. It's not a guided program we sell; it's the technical backstory that explains why our reading of currents, hatches, and trout behavior translates directly to the rivers and spring creeks we guide in Coyhaique."
            imageUrl="/assets/images/madison-river-montana-3.webp"
            buttonText="See the Patagonia Program"
            buttonHref="/patagonia-fly-fishing"
          />

          {/* SECTION 1: DENSIDAD DE CONTENIDO */}
          <section id="content-density-section" className="w-full pt-32 px-6 md:px-12 bg-brand-charcoal scroll-mt-24">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/5 pb-16">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl md:text-4xl text-white font-normal leading-tight">
                  Why Our Guides Fish Their Clients&apos; Home Waters
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed max-w-3xl">
                  Most Chile Fly Fishing guests come from Mountain West and Pacific trout water — Montana, Wyoming, Colorado, California — and already know what technical dry-fly and streamer fishing demands. Before guiding a season in Coyhaique, our own guides spend time on that same water: reading fast riffles on the Madison, working hike-in cutthroat lakes near Dubois. It sharpens the exact skill set — drag-free drifts across broken current, precise presentation to selective fish — that defines a Patagonia expedition. See how that translates on our{" "}
                  <Link href="/patagonia-fly-fishing" className="text-[#C4944E] hover:underline font-semibold">
                    Patagonia fly fishing program
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: GRILLA DE DESTINOS */}
          <section className="w-full py-32 px-6 md:px-12 bg-brand-charcoal">
            <div className="max-w-[1260px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {destinations.map((dest) => (
                  <article
                    key={dest.slug}
                    className="flex flex-col border border-white/5 bg-neutral-900 rounded-lg overflow-hidden group hover:border-[#C4944E]/30"
                  >
                    <div className="w-full h-[320px] relative overflow-hidden bg-brand-charcoal">
                      <img
                        src={dest.imageUrl}
                        alt={dest.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                    </div>

                    <div className="p-8 flex flex-col justify-between flex-grow bg-neutral-900">
                      <div>
                        <span className="font-sans text-xs text-[#C4944E] uppercase tracking-wider font-semibold block mb-4">
                          {dest.region}
                        </span>

                        <h2 className="font-display text-2xl text-white font-normal leading-snug mb-3 group-hover:text-[#C4944E] transition-colors duration-300">
                          <Link href={`/beyond-patagonia/${dest.slug}`}>{dest.title}</Link>
                        </h2>

                        <p className="font-sans text-sm text-white/60 leading-relaxed mb-6 font-light">
                          {dest.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                        <Link
                          href={`/beyond-patagonia/${dest.slug}`}
                          className="font-sans text-xs uppercase tracking-widest text-[#C4944E] font-semibold border-b border-[#C4944E]/20 pb-1 hover:border-[#C4944E] transition-all"
                        >
                          Read the field notes
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: CIERRE (De Rockies a Los Andes) */}
          <section className="w-full py-24 px-6 md:px-12 bg-neutral-900 border-t border-b border-white/5">
            <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 flex flex-col items-start">
                <h2 className="font-display text-3xl text-white font-normal leading-tight">
                  From the Rockies to the Andes
                </h2>
                <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed">
                  These field notes aren&apos;t a second destination — Chile Fly Fishing guides exclusively out of Coyhaique, Aysén. They&apos;re here so you know what&apos;s behind the guiding: the same technical eye for riffles, hatches, and unpressured water, applied to the wild trout systems of Chilean Patagonia.
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
                  src="/assets/images/wyoming-1.webp"
                  alt="Anglers wading a backcountry alpine lake near Dubois, Wyoming"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
