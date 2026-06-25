// src/config/seasons.ts

export interface Season {
  title: string;
  months: string;
  desc: string;
  imageUrl: string;
  href: string;
}

export const SEASONS_DATA: Season[] = [
  {
    title: "Early Season: Big Rainbows",
    months: "October 12 - December",
    desc: "High water velocity and aggressive pre-hatch feeding. Target migratory and massive resident rainbow trout tight against the structure using heavy streamers and sink-tips.",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/big-rainbow-trout-early-season-close-up.avif",
    href: "/expeditions/early-season",
  },
  {
    title: "High Season: World-Class Dry Fly",
    months: "January - March",
    desc: "The terrestrial explosion. Beetles and grasshoppers drop from the banks, triggering violent surface strikes in hidden spring creeks. A dry fly sight-fishing experience unique in the world.",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/brown-trout-fishing-spring-creek-patagonia.avif",
    href: "/expeditions/high-season",
  },
  {
    title: "Close Season: Trophy Browns",
    months: "April - May",
    desc: "Cooler, windless afternoons and massive mayfly hatches. Legendary brown trout begin their pre-spawn migrations through stunning autumn valleys. Your chance at a true monster.",
    imageUrl: "https://chileflyfishingexpeditions.com/wp-content/uploads/2026/05/trophy-trout-patagonia-fly-fishing-close-season-826x1024.avif",
    href: "/expeditions/close-season",
  },
];