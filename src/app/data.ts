// src/app/data.ts

export interface DestinationData {
  title: string;
  subtitle: string;
  waterType: string;
  bestMonths: string;
  description: string;
  imageUrl: string;
  tactics: string[];
}

export const destinationsRegistry: Record<string, DestinationData> = {
  // ========================================================
  // REPORTE 1: PESCA CON MOSCA SECA
  // ========================================================
  "why-coyhaique-chile-is-world-famous-for-dry-fly-fishing": {
    title: "Why Coyhaique, Chile Is World-Famous for Dry Fly Fishing",
    subtitle: "The Dry Fly Capital of South America",
    waterType: "Technical Field Note",
    bestMonths: "January - March (Terrestrial Climax)",
    imageUrl: "/assets/images/nirehuao-river-patagonia.avif",
    description: "Coyhaique's undisputed global standing as a dry fly paradise is dictated by its clear spring creeks, consistent mayfly and caddis hatches, and low angling pressure.",
    tactics: ["Beetles & Hopper Presentation", "Sight Fishing in Glass-Water Creeks", "Long 12ft Technical Leaders"]
  },

  // ========================================================
  // REPORTE 2: STREAMERS
  // ========================================================
  "migratory-trout-mechanics-and-autumn-river-runs": {
    title: "Migratory Trout Mechanics & Autumn River Runs",
    subtitle: "Tracking Massive Autumn and Early Season Runs",
    waterType: "Biological & Tactical Analysis",
    bestMonths: "October - November & April - May",
    imageUrl: "/assets/images/two-anglers-and-two-trophy-brown-trout-coyhaique-patagonia.avif",
    description: "The seasonal mechanics of migratory brown and rainbow trout in the Coyhaique river basins require strategic timing and heavy fly configurations.",
    tactics: ["Sink-Tip Lines (200-250 Grains)", "Articulated Streamer Strategies", "Autumn Run Pre-Spawn Routes"]
  },

  // ========================================================
  // REPORTE 3: NINFAS / SPRING CREEKS
  // ========================================================
  "coyhaique-spring-creeks-technical-guide-to-sight-presentation": {
    title: "Coyhaique Spring Creeks: Technical Guide to Sight Presentation",
    subtitle: "Sight Fishing Mechanics on Glass-Water Ecosystems",
    waterType: "Angling Masterclass",
    bestMonths: "January - March",
    imageUrl: "/assets/images/trophy-brown-trout-catch-release-coyhaique-patagonia.avif",
    description: "Spring creek fly fishing near Coyhaique demands an advanced approach. This guide outlines the exact tactical execution required to bypass selective vision.",
    tactics: ["Cantaria Beetle Imitations", "Low-Profile Bank Approaching", "15ft 5X Fluorocarbon Leaders"]
  },

  // ========================================================
  // REPORTE 4: MAPEO DE RÍOS (ESTRUCTURAL)
  // ========================================================
  "explore-best-fly-fishing-waters-in-coyhaique-chile": {
    title: "Explore the Best Fly Fishing Waters in Coyhaique Chile",
    subtitle: "A Complete Matrix of Central Patagonia Fisheries",
    waterType: "River Mapping & Intel",
    bestMonths: "December - April",
    imageUrl: "assets/images/chileflyfishing-patagonia.webp",
    description: "A complete structural overview of our home waters: from the mighty Simpson River freestones to hidden limestone spring creeks.",
    tactics: ["Freestone Drift Boat Maneuvers", "Alpine Lake Watercraft Sightings", "Spring Creek Technical Approaches"]
  },

  // ========================================================
  // REPORTE 5: LOGÍSTICA Y TRASLADOS
  // ========================================================
  "how-to-travel-to-coyhaique-in-patagonia-chile": {
    title: "How to Travel to Coyhaique in Patagonia Chile for Fly Fishing",
    subtitle: "Eliminating Travel Friction into the Chilean Aysén Region",
    waterType: "Logistical Blueprint",
    bestMonths: "All Year Operational Planning",
    imageUrl: "assets/images/travel-to-coyhaique.webp",
    description: "Eliminating travel friction. A flawless logistical manual covering commercial transits, airport receptions, and private transfers.",
    tactics: ["Santiago to Balmaceda Flight Layout", "Private Ground Transfer Logistics", "1.5-Hour Transit Limit"]
  }
};