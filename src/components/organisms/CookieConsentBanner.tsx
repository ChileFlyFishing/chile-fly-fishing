"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  const respond = (value: "accepted" | "declined") => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] bg-brand-charcoal border-t border-white/10 px-6 py-5 md:px-12 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
      <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
          We use cookies, including approximate location data (Geo-IP), to personalize your
          experience and understand site traffic. By continuing to browse, you accept our{" "}
          <Link href="/privacy-policy" className="text-[#C4944E] underline hover:text-white">
            Privacy Policy
          </Link>{" "}
          and terms of use.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => respond("declined")}
            className="px-5 py-2.5 rounded-[8px] border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="px-5 py-2.5 rounded-[8px] bg-[#006DC6] hover:bg-[#005091] text-white text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
