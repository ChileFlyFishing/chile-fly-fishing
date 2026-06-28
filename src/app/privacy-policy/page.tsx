// src/app/privacy-policy/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/organisms/Navbar";
import InternalHero from "@/components/organisms/InternalHero";
import ImageGallery from "@/components/organisms/ImageGallery";
import Testimonials from "@/components/organisms/Testimonials";
import CinematicVideo from "@/components/organisms/CinematicVideo";
import Footer from "@/components/organisms/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LegalSection {
  type: "standard" | "list-bullet" | "list-block" | "footer-note";
  subtitle?: string;
  title?: string;
  content?: string;
  listItems?: { label?: string; text: string }[];
}

export default function PrivacyPolicyPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const legalFramework: LegalSection[] = [
    {
      type: "standard",
      title: "Data Security and Operational Trust",
      content: "At Chile Fly Fishing, we govern data handling under clear transparency rules. Our commitment is to manage user operational logs and identification structures with absolute security protocols, mitigating data friction during planning and expedition logistics."
    },
    {
      type: "list-block",
      subtitle: "Information Architecture We Collect",
      listItems: [
        { label: "Identity Records:", text: "Legal names, contact details, transmission matrices, and logistics specifications explicitly generated during booking sequences." },
        { label: "Analytical Metadata:", text: "Anonymized interaction logs, processing configurations, page paths, and engagement rates tracked to establish performance tuning." }
      ]
    },
    {
      type: "list-bullet",
      subtitle: "Operational Data Execution",
      listItems: [
        { text: "Validation and processing of operational itineraries and guiding structures." },
        { text: "Strategic refinements of interface performance based on interaction data." },
        { text: "Technical communication logs related to trip confirmations and logistical tracking." }
      ]
    },
    {
      type: "standard",
      subtitle: "Data Protection Controls",
      content: "Security infrastructure is paramount. All structural information is mapped across isolated server nodes to shield profiles against unauthorized exposure, vector attacks, or unapproved data transmissions."
    },
    {
      type: "standard",
      subtitle: "Cookie Implementations",
      content: "Technical cookies isolate active sessions to streamline browser telemetry. These can be adjusted or restricted via individual client application parameters at any stage."
    },
    {
      type: "footer-note",
      title: "Framework Adjustments",
      content: "This system framework updates periodically. Structural updates will immediately appear under this public interface with their respective verification logs."
    }
  ];

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = contentRef.current?.querySelectorAll(".legal-block-anim");
      if (blocks && blocks.length > 0) {
        gsap.fromTo(
          blocks,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }, contentRef);

    return () => ctx.revert();
  }, []);

  // Esquema JSON-LD optimizado con las entidades core de tu operación en Coyhaique
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Chile Fly Fishing",
    "description": "Official legal and data protection policy statement for Chile Fly Fishing operations based out of Coyhaique, Chilean Patagonia.",
    "url": "https://chileflyfishingexpeditions.com/privacy-policy",
    "mainEntity": {
      "@type": "DigitalDocument",
      "name": "Chile Fly Fishing Privacy Policy",
      "dateModified": "2026-06-22"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full relative bg-brand-charcoal text-white selection:bg-[#C4944E]/30 antialiased overflow-x-hidden">
        <Navbar />

        <main>
          {/* OPTIMIZACIÓN AEO: Alineación exacta y aplicación de la regla BLUF en el párrafo introductorio */}
          <InternalHero 
            subtitle="Legal Framework"
            title="Privacy Policy: Data Protocols"
            paragraph="This privacy policy establishes how Chile Fly Fishing secures, structures, and manages data when you book Patagonia fly fishing packages, coordinate logistics with our Coyhaique basecamp, or interact with our digital reservation matrix."
            imageUrl="assets/images/patagonia-flyfishing-spring-creek.webp"
            buttonText="Examine Protocol"
            buttonHref="#policy-content"
          />

          {/* CUERPO EDITORIAL LEGAL COMPONENTIZADO */}
          <section 
            id="policy-content" 
            className="w-full py-px80 px-px24 md:px-px48 bg-brand-charcoal scroll-mt-px36"
          >
            <div 
              ref={contentRef} 
              className="max-w-[1260px] mx-auto font-sans text-white/70 space-y-px42"
            >
              {legalFramework.map((section, idx) => {
                
                if (section.type === "standard") {
                  return (
                    <div key={idx} className="legal-block-anim border-b border-white/5 pb-px36">
                      {section.subtitle && (
                        <h2 className="font-sans text-xs uppercase tracking-wider text-[#C4944E] font-semibold mb-px18">
                          {section.subtitle}
                        </h2>
                      )}
                      {section.title && (
                        <h2 className="font-display text-2xl md:text-3xl text-white font-normal mb-px18">
                          {section.title}
                        </h2>
                      )}
                      <p className="text-base leading-relaxed">{section.content}</p>
                    </div>
                  );
                }

                if (section.type === "list-block") {
                  return (
                    <div key={idx} className="legal-block-anim border-b border-white/5 pb-px36">
                      <h2 className="font-sans text-xs uppercase tracking-wider text-[#C4944E] font-semibold mb-px18">
                        {section.subtitle}
                      </h2>
                      <ul className="space-y-px18 text-sm md:text-base leading-relaxed">
                        {section.listItems?.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <strong className="text-white block mb-px6">{item.label}</strong>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (section.type === "list-bullet") {
                  return (
                    <div key={idx} className="legal-block-anim border-b border-white/5 pb-px36">
                      <h2 className="font-sans text-xs uppercase tracking-wider text-[#C4944E] font-semibold mb-px18">
                        {section.subtitle}
                      </h2>
                      <ul className="list-disc pl-px24 space-y-px12 text-sm md:text-base leading-relaxed">
                        {section.listItems?.map((item, itemIdx) => (
                          <li key={itemIdx}>{item.text}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (section.type === "footer-note") {
                  return (
                    <div key={idx} className="legal-block-anim pt-px36 border-t border-white/5 text-xs text-white/40 italic">
                      <h2 className="font-display text-sm text-white/60 font-normal not-italic mb-px12">
                        {section.title}
                      </h2>
                      <p>{section.content}</p>
                    </div>
                  );
                }

                return null;
              })}
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