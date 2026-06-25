// src/utils/hatchData.ts

export interface RiverCondition {
  seasonName: string;
  waterTemp: string;
  flowStatus: string;
  dominantHatch: string;
  recommendedFly: string;
  tippetSelection: string;
  tacticalNote: string;
}

export function getCoyhaiqueLiveConditions(): RiverCondition {
  const currentMonth = new Date().getMonth(); // 0 = Enero, 11 = Diciembre

  // Noviembre - Diciembre (Early Season)
  if (currentMonth === 10 || currentMonth === 11) {
    return {
      seasonName: "Early Season Operations",
      waterTemp: "48°F - 54°F",
      flowStatus: "High & Oxygenated (Freestone Peak)",
      dominantHatch: "Mayfly Nymphs (Baetis) & Caddis Larvae",
      recommendedFly: "Weighted Streamers (Black/Olive Sculpzilla #4)",
      tippetSelection: "0X - 2X Maxima Chameleon",
      tacticalNote: "Target deep cutbanks and eddy lines. High water requires fast-sinking lines (200-250 grains) to punch through the column and trigger post-spawn aggressive brown trout strikes."
    };
  }

  // Enero - Febrero (Peak High Season)
  if (currentMonth === 0 || currentMonth === 1) {
    return {
      seasonName: "Peak High Season Operations",
      waterTemp: "56°F - 62°F",
      flowStatus: "Stable, Ultra-Clear Thermal Baseline",
      dominantHatch: "Terrestrials (Foam Beetles, Hoppers) & Dragonflies",
      recommendedFly: "Chernobyl Ant #6 / Fat Albert #8",
      tippetSelection: "3X - 4X Trout Hunter Fluorocarbon",
      tacticalNote: "Flawless dry fly sight-fishing window. Fish are looking up. Deliver precise tracking presentations directly into the foam lines with perfect drag-free drifts against the Patagonian structure."
    };
  }

  // Marzo (Late High Season)
  if (currentMonth === 2) {
    return {
      seasonName: "Late High Season Operations",
      waterTemp: "52°F - 56°F",
      flowStatus: "Dropping & Extremely Technical Clarity",
      dominantHatch: "Midges, Late Willow Flies & Autumn Beetles",
      recommendedFly: "Parachute Adams #14 / Extended Body Hopper",
      tippetSelection: "4X - 5X Deceiver Tippet",
      tacticalNote: "Slowing water demands absolute stealth and longer leaders. Shadows will spook trophy resident trout. Approach spring creeks with low profiles and presentation-first casting loops."
    };
  }

  // Abril - Mayo (Late Season / Autumn Transition)
  if (currentMonth === 3 || currentMonth === 4) {
    return {
      seasonName: "Late Season Trophy Operations",
      waterTemp: "44°F - 50°F",
      flowStatus: "Low, Cold & Highly Concentrated Pools",
      dominantHatch: "None / Aggressive Pre-Spawn Migration",
      recommendedFly: "Articulated Streamers (Sex Dungeon #2)",
      tippetSelection: "1X - 2X Fluorocarbon",
      tacticalNote: "The autumn migration is active. Giant migratory Salmo trutta are moving into shallower gravel bars. Extreme patience, slow swing retrieves, and territorial streamer placement are mandatory."
    };
  }

  // Junio - Octubre (Off-Season / Biological Winter Spawning)
  return {
    seasonName: "Winter Biological Spawning Window (Rivers Closed)",
    waterTemp: "38°F - 43°F",
    flowStatus: "Cold Baseline Flows • Ecosystem Regeneration",
    dominantHatch: "Subsurface Micro-Midges & Winter Mayflies",
    recommendedFly: "Tying Bench Preparation / Egg Patterns (Spring Preview)",
    tippetSelection: "N/A - System Conservation Mode",
    tacticalNote: "Our river systems are currently resting for the natural spawning cycle. Guides are scouting new remote beats and securing exclusive access. Bookings are open exclusively for the upcoming spring hatch."
  };
}