// src/app/data.ts

export interface DestinationData {
  title: string;
  subtitle: string;
  waterType: string;
  bestMonths: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
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
    imageAlt: "Aerial view of the Ñirehuao River winding through open Patagonian grassland near Coyhaique",
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
    imageAlt: "Two anglers holding trophy brown trout caught during an autumn river run near Coyhaique",
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
    imageAlt: "Angler releasing a wild brown trout caught on a Coyhaique spring creek",
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
    imageAlt: "Aerial view of a turquoise Patagonian river valley in the Coyhaique fly fishing region",
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
    imageAlt: "Angler hiking to a remote fishing spot past wild horses near Coyhaique, Patagonia",
    description: "Eliminating travel friction. A flawless logistical manual covering commercial transits, airport receptions, and private transfers.",
    tactics: ["Santiago to Balmaceda Flight Layout", "Private Ground Transfer Logistics", "1.5-Hour Transit Limit"]
  },

  // ========================================================
  // BRIEF JULIO — ENCARGO 1: COSTO DEL PROGRAMA
  // ========================================================
  "how-much-does-a-fly-fishing-trip-to-patagonia-cost": {
    title: "How Much Does a Fly Fishing Trip to Patagonia Cost?",
    subtitle: "Technical Field Report • Program & Pricing",
    waterType: "Program & Pricing",
    bestMonths: "2026–2027 Season",
    imageUrl: "/assets/images/matias-sebastian-owner-chileflyfishing.webp",
    imageAlt: "Chile Fly Fishing founders Matías and Sebastián at the Coyhaique lodge basecamp",
    description: "A guided fly fishing trip to Patagonia costs USD $6,500 per person, double occupancy, for 7 nights / 6 full days, all-inclusive.",
    tactics: ["USD $6,500 per person, double occupancy", "50% deposit / 50% balance 30 days out", "60+/59-30/<30 day cancellation tiers"]
  },

  // ========================================================
  // BRIEF JULIO — ENCARGO 2: PILAR 6, LOGÍSTICA
  // ========================================================
  "getting-to-coyhaique-complete-logistics-guide": {
    title: "Getting to Coyhaique: The Complete Logistics Guide",
    subtitle: "Technical Field Report • Logistics",
    waterType: "Logistical Blueprint",
    bestMonths: "All Year Operational Planning",
    imageUrl: "/assets/images/welcome-to-coyhaique.webp",
    imageAlt: "Anglers at the Bienvenidos a Coyhaique welcome sign after arriving from Balmaceda Airport",
    description: "Fly to Santiago (SCL), connect to Balmaceda (BBA), then a 45-50 min transfer to Coyhaique under our strict 1:30-hour rule.",
    tactics: ["Santiago (SCL) to Balmaceda (BBA) domestic connection", "45-50 minute private ground transfer", "1:30-hour maximum daily transfer rule"]
  },

  // ========================================================
  // BRIEF JULIO — ENCARGO 3: PILAR 5, PAIN POINT DE AISLAMIENTO
  // ========================================================
  "uncrowded-patagonia-why-isolation-is-the-real-luxury": {
    title: "Uncrowded Patagonia: Why Isolation Is the Real Luxury",
    subtitle: "Technical Field Report • Positioning",
    waterType: "Unpressured Water",
    bestMonths: "All Seasons",
    imageUrl: "/assets/images/remote-fly-fishing-expedition-coyhaique-patagonia-chile.avif",
    imageAlt: "Aerial view of a lone drift boat on an empty remote lake near Coyhaique, Patagonia",
    description: "Every Chile Fly Fishing guiding zone sits within a 1:30-hour transfer radius of Coyhaique — small groups, unpressured wild trout water, verified.",
    tactics: ["1:30-hour maximum transfer radius", "Small guided groups, no outfitter rotation", "Strict catch-and-release handling"]
  },

  // ========================================================
  // Articulo Tecnico
  // ========================================================
  "technical-patagonia-fly-fishing-packing-list": {
    title: "The Technical Patagonia Fly Fishing Packing List: Rods, Lines, and Gear for Aysén",
    subtitle: "Technical Field Report • Equipment Architecture",
    waterType: "Logistical Blueprint",
    bestMonths: "All Year Operational Planning",
    imageUrl: "/assets/images/angler-flyfishing-simms-wader-patagonia.avif",
    imageAlt: "Angler wearing waders and a fly fishing chest pack casting a rod in Patagonia",
    description: "An exhaustive operational gear breakdown analyzing optimal fly rod actions, specific fly line grains, and premium technical apparel required to navigate the pristine watersheds of Coyhaique.",
    tactics: ["Santiago to Balmaceda Flight Layout", "Private Ground Transfer Logistics", "1.5-Hour Transit Limit"]
  }
};