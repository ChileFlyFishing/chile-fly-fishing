"use client";

import { useState } from "react";
import { PATAGONIA_FAQS, FAQItem } from "@/config/faqs";

// ============================================================================
// MOLÉCULA: FAQAccordionItem
// Encapsula el estado de apertura, la accesibilidad (ARIA) y el diseño visual.
// ============================================================================
function FAQAccordionItem({ faq, isOpen, onToggle }: { 
  faq: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void; 
}) {
  return (
    <div className="border-b border-white/10 pb-[18px] mb-[18px] last:border-0 last:pb-0 last:mb-0 transition-colors duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-[12px] group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-[18px] md:text-[24px] text-white group-hover:text-[#C4944E] transition-colors duration-200 tracking-tight">
          {faq.q}
        </span>
        <span 
          className={`ml-[24px] text-[24px] text-[#C4944E] transform transition-transform duration-300 ease-out flex-shrink-0`}
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      <div
        className={`grid transition-all duration-300 ease-in-out text-[#202020]/40`}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-[16px] leading-[1.6] text-white/70 pt-[6px] pb-[12px] max-w-[none]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// ORGANISMO: FAQSection
// Orquesta la lista de preguntas utilizando una estructura semántica limpia.
// ============================================================================
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto para guiar al usuario

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="w-full bg-[#202020] py-[92px] px-[24px] md:px-[48px] border-t border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[none] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[42px]">
        
        {/* Columna Izquierda: Título y Contexto Semántico */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#C4944E] mb-[12px] block font-semibold">
            Expedition Logistics
          </span>
          <h2 
            id="faq-heading" 
            className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-white font-normal tracking-tight"
          >
            Frequently <br className="hidden md:inline" />
            Asked Questions.
          </h2>
        </div>

        {/* Columna Derecha: Acordeón de Contenido */}
        <div className="lg:col-span-8 bg-white/[0.02] p-[30px] md:p-[42px] rounded-sm border border-white/5">
          <div className="flex flex-col">
            {PATAGONIA_FAQS.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}