"use client";

import { useEffect, useState } from "react";
import { getCoyhaiqueLiveConditions, RiverCondition } from "@/utils/hatchData";

export default function LiveHatchSimulator() {
  const [conditions, setConditions] = useState<RiverCondition | null>(null);

  useEffect(() => {
    // Inicializamos las condiciones biológicas reales en el cliente
    setConditions(getCoyhaiqueLiveConditions());
  }, []);

  if (!conditions) return null;

  return (
    <div className="w-full bg-[#161616] border border-white/5 rounded-[4px] p-6 md:p-8 font-sans max-w-4xl mx-auto shadow-2xl relative overflow-hidden my-12">
      {/* Indicador de transmisión en vivo estilo radar */}
      <div className="absolute top-6 right-6 flex items-center space-x-2">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="text-[10px] tracking-widest text-emerald-500 uppercase font-semibold">
          Live Stream Telemetry
        </span>
      </div>

      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#C4944E] font-semibold block mb-1">
          Coyhaique Watershed Monitor
        </span>
        <h3 className="font-display text-2xl text-white font-normal tracking-tight">
          Current Biological & Operational Status
        </h3>
      </div>

      {/* Grilla técnica de telemetría */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-y border-white/5 py-6 mb-6">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Current Window</span>
          <span className="text-sm text-white font-medium block">{conditions.seasonName}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Estimated Water Temp</span>
          <span className="text-sm text-white font-medium block font-mono">{conditions.waterTemp}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Hydrological Flow</span>
          <span className="text-sm text-white font-medium block">{conditions.flowStatus}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Dominant Target Hatch</span>
          <span className="text-sm text-brand-gold font-medium block">{conditions.dominantHatch}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="bg-white/[0.02] p-4 border border-white/5 rounded-[2px]">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-2 font-semibold">
            Tactical Rig Setup
          </span>
          <div className="space-y-1.5">
            <p className="text-white font-light">
              <strong className="text-[#C4944E] font-normal">Fly Pattern:</strong> {conditions.recommendedFly}
            </p>
            <p className="text-white font-light">
              <strong className="text-[#C4944E] font-normal">Terminal Tippet:</strong> {conditions.tippetSelection}
            </p>
          </div>
        </div>

        <div className="bg-white/[0.02] p-4 border border-white/5 rounded-[2px] flex flex-col justify-between">
          <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1 font-semibold">
            Operational Guide Strategy
          </span>
          <p className="text-white/70 font-light leading-relaxed text-xs">
            {conditions.tacticalNote}
          </p>
        </div>
      </div>
    </div>
  );
}