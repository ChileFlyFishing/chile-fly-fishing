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
  "simpson-river": {
    title: "Simpson River Expeditions",
    subtitle: "Coyhaique's Legendary Freestone",
    waterType: "Freestone River",
    bestMonths: "December - March",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    description: "The Simpson River is globally renowned for its prolific hatches and hard-fighting wild trout. Running right through the heart of the Aysén region, it offers a dramatic mix of technical dry fly pools and heavy freestone runs perfect for active drift boat operations.",
    tactics: ["Match the Hatch Caddis", "Heavy Bank Streamers", "Nymphing Deep Cutbanks"]
  },
  "nirehuao-river": {
    title: "Ñirehuao River Dry Fly",
    subtitle: "The Hopper-Feeder Paradise",
    waterType: "Meadow Freestone",
    bestMonths: "January - March",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    description: "Famous for its grasshopper explosions, the Ñirehuao winds through open valleys near the Argentine border. Winds can be brutal, but the reward is unmatched: large wild browns tracking terrestrial patterns on the surface with absolute violence.",
    tactics: ["Large Hopper Patterns", "Wind-Penetrating Casts", "Sight Fishing Shallows"]
  },

  // --- LOS 10 GRANDES ARTÍCULOS DE COYHAIQUE ---
  "why-coyhaique-chile-is-world-famous-for-dry-fly-fishing": {
    title: "Why Coyhaique, Chile Is World-Famous for Dry Fly Fishing | Patagonia Trout Fly Fishing",
    subtitle: "The Dry Fly Capital of South America",
    waterType: "Technical Field Note",
    bestMonths: "January - March (Terrestrial Climax)",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/brown-trout-fishing-spring-creek-patagonia.avif",
    description: "Coyhaique's undisputed global standing as a dry fly paradise is dictated by its clear spring creeks, consistent mayfly and caddis hatches, and low angling pressure. While other Patagonian operations rely on heavy sinking lines and generic streamer stripping, our home waters near Coyhaique trigger consistent surface responses from wild brown trout hunting beetles, grasshoppers, and selective midges in technical current seams. Iconic rivers like Río Ñirehuao and Río Emperador Guillermo demand precision, stealth, and flawless drift mechanics, offering seasoned anglers a topwater arena that cannot be replicated anywhere else on the planet.",
    tactics: ["Beetles & Hopper Presentation", "Sight Fishing in Glass-Water Creeks", "Long 12ft Technical Leaders"]
  },
  "migratory-trout-in-coyhaique-fly-fishing-season": {
    title: "Migratory Trout in Coyhaique: A Legendary Fly Fishing Season in Chilean Patagonia",
    subtitle: "Tracking Massive Autumn and Early Season Runs",
    waterType: "Biological & Tactical Analysis",
    bestMonths: "October - November & April - May",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/trophy-trout-patagonia-fly-fishing-close-season-826x1024.avif",
    description: "The seasonal mechanics of migratory brown and rainbow trout in the Coyhaique river basins require strategic timing. Early season (starting October 12) sees massive resident and migratory lake trout feeding hard in high-water conditions along freestones. Late season (April to the first week of May) triggers the pre-spawn autumn runs, where monster browns migrate upstream from deep lakes into isolated river beats. This report covers the exact drift tactics and lines needed to hook legendary trophies.",
    tactics: ["Sink-Tip Lines (200-250 Grains)", "Articulated Streamer Strategies", "Autumn Run Pre-Spawn Routes"]
  },
  "discover-why-patagonia-chile-ultimate-wild-fly-fishing-destination": {
    title: "Discover Why Patagonia Chile Is the Ultimate Wild Fly Fishing Destination for Trophy Trout Waters",
    subtitle: "Untamed Isolation vs. Crowded Public Beats",
    waterType: "Destination Guide",
    bestMonths: "October 12 - May (Full Season)",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/fish-on-the-river-of-chilean-patagonia.avif",
    description: "What sets Chilean Patagonia apart from destinations like Montana, Wyoming, or even Argentina, is its pure, unpressured wildness. Based out of Coyhaique, our fly fishing operations tap into water systems that receive zero commercial pressure for weeks. This is a 100% catch-and-release ecosystem protecting wild brown and rainbow trout lineages in deep glacial valleys, remote spring creeks, and pristine hidden lagunas.",
    tactics: ["Unpressured Boundary Exploration", "Barbless Hook Compliance", "Catch & Release Conservation Protocols"]
  },
  "explore-best-fly-fishing-waters-in-coyhaique-chile": {
    title: "Explore the Best Fly Fishing Waters in Coyhaique Chile for Wild Trout and Scenic Patagonia Rivers",
    subtitle: "A Complete Matrix of Central Patagonia Fisheries",
    waterType: "River Mapping & Intel",
    bestMonths: "December - April",
    imageUrl: "assets/images/chileflyfishing-patagonia.webp",
    description: "The geographic positioning of Coyhaique allows us to access four distinct water systems within a short transfer window. This guide outlines the technical profile of the Simpson River, the meadow sections of the Ñirehuao, the technical limestone pools of Emperador Guillermo, and the private lake basins where cruisers hunt dragonflies on the surface.",
    tactics: ["Freestone Drift Boat Maneuvers", "Alpine Lake Watercraft Sightings", "Spring Creek Technical Approaches"]
  },
  "how-to-travel-to-coyhaique-in-patagonia-chile": {
    title: "How to Travel to Coyhaique in Patagonia Chile for World-Class Fly Fishing Adventures",
    subtitle: "Eliminating Travel Friction into the Chilean Aysén Region",
    waterType: "Logistical Blueprint",
    bestMonths: "All Year Operational Planning",
    imageUrl: "assets/images/travel-to-coyhaique.webp",
    description: "Navigating your transit into the heart of Chilean Patagonia is straightforward under our operational guidance. Anglers fly internationally into Santiago (SCL), catching a 2-hour domestic connection to Balmaceda Airport (BBA). Our team manages private ground transfers directly from BBA to our Coyhaique base in under 45 minutes, enforcing a strict 1.5-hour maximum transit rule to ensure more water time.",
    tactics: ["Santiago to Balmaceda Flight Layout", "Private Ground Transfer Logistics", "1.5-Hour Transit Limit Enforcement"]
  },
  "best-time-to-go-fly-fishing-in-coyhaique-patagonia-chile": {
    title: "Best Time to Go Fly Fishing in Coyhaique Patagonia Chile and When to Catch Trophy Trout",
    subtitle: "Matching the Hatch and Seasonal Weather Cycles",
    waterType: "Hatch Calendar Index",
    bestMonths: "October 12 - First Week of May",
    imageUrl: "assets/images/best-time-to-patagonia.webp",
    description: "Timing your trip dictates your tactical approach on the water. Early season (October-December) is prime for high water levels and streamer tracking. Mid-season (January-March) unlocks the world-class dry fly terrestrial window with massive beetle and grasshopper hatches. Late autumn (April-May) is the choice for purists seeking giant migrating browns under windless, crisp skies.",
    tactics: ["Terrestrial Window Tracking", "Autumn Mayfly Emergence", "Early Season High-Water Streamers"]
  },
  "why-fly-fishing-in-patagonia-chile-is-bucket-list-experience": {
    title: "Why Fly Fishing in Patagonia Chile Is a Bucket List Experience for Anglers Seeking Remote Rivers",
    subtitle: "The Aesthetics of Pure Mountain Isolation",
    waterType: "Brand Manifest Note",
    bestMonths: "December - March",
    imageUrl: "assets/images/flyfishing-in-patagonia.webp",
    description: "True luxury in the modern fly fishing world is defined by silence and isolation. Our Coyhaique expeditions remove the commercial noise. Anglers fish surrounded by pristine hanging glaciers, temperate rainforests, and high-desert pampas, catching wild trout that behave completely naturally without pressure.",
    tactics: ["Quiet Luxury Trip Planning", "Backcountry Wilderness Wading", "Elite Hosted Group Experience"]
  },
  "essential-fly-fishing-gear-to-bring-patagonia-trip-coyhaique": {
    title: "Essential Fly Fishing Gear to Bring for Your Patagonia Trip in Coyhaique, Chilean Aysén Region",
    subtitle: "Technical Checklist for Unpredictable Wild Elements",
    waterType: "Equipment Manual",
    bestMonths: "Pre-Trip Planning Index",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/big-rainbow-trout-early-season-close-up.avif",
    description: "A comprehensive breakdown of the precise rods, lines, and layers required for Chile. We require fast-action 6-weight rods for wind cutting and hopper setups, 7 or 8-weight rods for streamer operations, and aggressive weight-forward floating lines. High-quality Gore-Tex waders and wading boots with tungsten studs are mandatory for crossing rocky riverbeds safely.",
    tactics: ["Fast-Action 6-wt Setup", "Aggressive WF Floating Lines", "Tungsten Stud Wading Prep"]
  },
  "coyhaique-spring-creeks-technical-guide-terrestrial-fly-patterns": {
    title: "Coyhaique Spring Creeks: Technical Guide to Terrestrial Fly Patterns for Trophy Brown Trout",
    subtitle: "Sight Fishing Mechanics on Glass-Water Ecosystems",
    waterType: "Angling Masterclass",
    bestMonths: "January - March",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/cataraft-dragonfly-trout-fishing-lake-zenteno-dragon-fly.avif",
    description: "Spring creek fly fishing near Coyhaique demands a masterclass approach. These private, slow-moving limestone currents require exceptional stealth, low-profile positioning, and long, fine leaders. This guide outlines the exact matching of Cantaria beetles, grasshoppers, and midge clusters to bypass the selective vision of trophy brown trout.",
    tactics: ["Cantaria Beetle Imitations", "Low-Profile Bank Approaching", "15ft 5X Fluorocarbon Leaders"]
  },
  "definitive-all-inclusive-trout-fishing-trip-chilean-patagonia": {
    title: "The Definitive All-Inclusive Trout Fishing Trip to Chilean Patagonia: 2026-2027 Season",
    subtitle: "Premium Hosted Expeditions and Complete Guiding Packages",
    waterType: "Operational Package Index",
    bestMonths: "October 2026 - May 2027 Reservation",
    imageUrl: "assets/images/flyfishing-exclusive-progam-patagoia.avif",
    description: "A full overview of our upcoming 2026-2027 seasonal fly fishing programs based out of Coyhaique. These all-inclusive, premium hosted trips handle everything: private ground transport from Balmaceda Airport (BBA), expert-led local guiding sessions across hidden basins, boutique rustic comfort accommodations, and curated culinary experiences. Secure your dates ahead of time.",
    tactics: ["Elite Hosted Trip Registrations", "Boutique Wilderness Comfort", "Curated Fishing Itineraries"]
  }
};