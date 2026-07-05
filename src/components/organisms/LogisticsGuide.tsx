// src/components/organisms/LogisticsGuide.tsx
import Link from 'next/link';
import { headers } from 'next/headers';

interface LogisticsInfo {
  originLabel: string;
  hub: string;
  route: string;
  airlines: string;
  gearTip: string;
}

const logisticsIntelligence: Record<string, LogisticsInfo> = {
  'US': {
    originLabel: "the United States",
    hub: "Dallas (DFW) or Miami (MIA)",
    route: "The most efficient path is to fly to Santiago de Chile (SCL) via American Airlines or LATAM. Once in Santiago, connect via domestic flights on LATAM or Sky Airline directly to Balmaceda (BBA).",
    airlines: "LATAM, American Airlines, Delta Air Lines.",
    gearTip: "LATAM Airlines is highly recommended for traveling anglers. They typically allow 9ft rod tubes as carry-on, but always verify your specific fare class before check-in."
  },
  'DEFAULT': {
    originLabel: "International Origins",
    hub: "Santiago de Chile (SCL)",
    route: "Fly to Santiago International Airport (SCL). From there, proceed to the domestic terminal for your connecting flight to Balmaceda (BBA), the gateway to Coyhaique.",
    airlines: "LATAM, Sky Airline.",
    gearTip: "Ensure your fly-fishing gear is packed in a hard-shell travel case. Domestic connections in Chile are strictly regulated regarding cabin dimensions."
  }
};

export default async function LogisticsGuide() {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  
  const info = country === 'US' ? logisticsIntelligence['US'] : logisticsIntelligence['DEFAULT'];

  return (
    <section className="w-full py-px92 px-px24 bg-brand-charcoal text-white">
      <div className="max-w-[1260px] mx-auto border border-white/10 p-px48 rounded-[8px]">
        <h2 className="font-display text-2xl mb-px36 text-brand-gold">
          Logistics for your expedition from {info.originLabel}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px36 mb-px36">
          <div className="space-y-px18">
            <p className="text-white/60 text-sm uppercase tracking-wider font-semibold">Recommended Hub</p>
            <p className="text-lg">{info.hub}</p>
            
            <p className="text-white/60 text-sm uppercase tracking-wider font-semibold mt-px24">Optimal Route</p>
            <p className="text-sm leading-relaxed">{info.route}</p>
          </div>
          
          <div className="space-y-px18">
            <p className="text-white/60 text-sm uppercase tracking-wider font-semibold">Primary Carriers</p>
            <p className="text-sm">{info.airlines}</p>
            
            <div className="bg-white/5 p-px24 rounded-[4px] mt-px24 border-l-2 border-brand-gold">
              <p className="text-white/80 italic text-sm">{info.gearTip}</p>
            </div>
          </div>
        </div>

        <Link
          href="/contact-us"
          className="mt-[30px] inline-flex items-center justify-center px-[36px] py-[18px] font-sans font-medium text-white bg-[#006DC6] rounded-[30px] shadow-lg hover:bg-[#006DC6]/90 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm tracking-wide uppercase font-semibold"
        >
          Secure your date
        </Link>
      </div>
    </section>
  );
}