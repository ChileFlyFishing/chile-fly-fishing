"use client";

import { useRef, useState } from "react";
import { COUNTRIES } from "@/lib/contact-schema";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+1 ",
    country: "Chile",
    message: "",
    agree: false,
    website: "", // honeypot: real users never fill this in
  });
  const formLoadedAt = useRef(Date.now());

  const countries = COUNTRIES;

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
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formRenderedAt: formLoadedAt.current }),
      });

      if (!response.ok) throw new Error('Failed to transmit.');
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error transmitting your manifest. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ajuste de padding + 5px adicionales (de 12px/16px a 17px/21px)
  const inputClasses = "w-full bg-white border border-neutral-200 text-neutral-900 rounded-[8px] px-5 py-[17px] text-sm focus:outline-none focus:border-[#C4944E]/50 transition-all font-sans placeholder:text-neutral-400";

  if (isSubmitted) {
    return (
      <div className="w-full min-h-[450px] flex flex-col items-center justify-center text-center px-4 transition-all duration-500">
        <div className="max-w-xl flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2 animate-bounce">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 text-left">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-2">
        <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className={inputClasses} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@email.com" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Phone Number (inc. area code)</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 000 0000" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Country</label>
        <select name="country" value={formData.country} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-xs uppercase tracking-wider text-neutral-500 font-semibold">Expedition Goals & Notes</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Detail target requirements..." className={`${inputClasses} resize-none`} />
      </div>

      <div className="flex items-start gap-3 my-2">
        <input type="checkbox" name="agree" id="agree" checked={formData.agree} onChange={handleChange} required className="mt-1 w-4 h-4 rounded border-neutral-300 text-[#C4944E] focus:ring-[#C4944E]/30 accent-[#C4944E] cursor-pointer" />
        <label htmlFor="agree" className="font-sans text-xs text-neutral-800 leading-relaxed font-light cursor-pointer select-none">
          I acknowledge that premier river beats and guided excursions are strictly limited by seasonal capacity. My submission serves to initiate coordination of final booking dates with the operational guiding team in Coyhaique. I accept the <a href="https://chileflyfishingexpeditions.com/privacy-policy" target="_blank" className="text-[#C4944E] underline hover:text-[#006DC6]">privacy policies</a>.
        </label>
      </div>

      <div className="w-full pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-10 py-5 bg-[#006DC6] hover:bg-[#005091] disabled:bg-neutral-400 text-white rounded-[20px] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Transmitting...</span>
            </div>
          ) : (
            <span>Submit Manifest of Intent</span>
          )}
        </button>
      </div>
    </form>
  );
}