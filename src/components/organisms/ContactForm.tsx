"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    experience: "",
    message: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulación de latencia de red para la microinteracción de carga
      await new Promise((resolve) => setTimeout(resolve, 1400));
      console.log("Booking Manifest Sent successfully:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-white border border-neutral-200 text-neutral-900 rounded-[8px] px-4 py-3 text-sm focus:outline-none focus:border-[#C4944E]/50 transition-all font-sans placeholder:text-neutral-400";

  // AJUSTE 1: Sin caja blanca. Texto limpio centrado vertical y horizontalmente sobre el fondo crema.
  if (isSubmitted) {
    return (
      <div className="w-full min-h-[450px] lg:min-h-[580px] flex flex-col items-center justify-center text-center px-4 md:px-8 transition-all duration-500">
        <div className="max-w-xl flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#C4944E]/10 flex items-center justify-center mb-2 animate-bounce">
            <svg className="w-6 h-6 text-[#C4944E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-sans text-base md:text-lg text-neutral-900 font-light leading-relaxed">
            Excellent, your message has been sent. We&apos;ll review it just like we did when we reviewed our dry fly for catching those big brown trout in the Ñirehuao River.
          </p>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C4944E] font-semibold mt-4">
            Operations Dispatch Base • Coyhaique
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 text-left">
      
      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Matias Araneda" required className={inputClasses} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Phone / WhatsApp</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+56 9 ...." required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Preferred Window</label>
          <input type="text" name="dates" value={formData.dates} onChange={handleChange} placeholder="e.g., Mid-January" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Fly Fishing Proficiency</label>
          <select name="experience" value={formData.experience} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
            <option value="" disabled>Select proficiency level</option>
            <option value="beginner">Beginner (First times on water)</option>
            <option value="intermediate">Intermediate (Comfortable casting)</option>
            <option value="advanced">Advanced (Technical dry fly & wind proficient)</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Expedition Goals & Notes</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Detail target requirements..." className={`${inputClasses} resize-none`} />
      </div>

      <div className="flex items-start gap-3 my-2">
        <input type="checkbox" name="agree" id="agree" checked={formData.agree} onChange={handleChange} required className="mt-1 w-4 h-4 rounded border-neutral-300 text-[#C4944E] focus:ring-[#C4944E]/30 accent-[#C4944E] cursor-pointer" />
        <label htmlFor="agree" className="font-sans text-xs text-neutral-800 leading-relaxed font-light cursor-pointer select-none">
          I understand that prime river beats and hosted trips are strictly limited by seasonal capacity. I submit this manifest to coordinate final booking dates with the operational guiding team in Coyhaique.
        </label>
      </div>

      {/* AJUSTE 2 Y 3: Botón Azul Corporativo con Microinteracción de Carga */}
      <div className="w-full pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#006DC6] hover:bg-[#005091] disabled:bg-neutral-400 text-white rounded-[20px] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md min-w-[240px] disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Transmitting Manifest...</span>
            </div>
          ) : (
            <span>Submit Manifest of Intent</span>
          )}
        </button>
      </div>

    </form>
  );
}