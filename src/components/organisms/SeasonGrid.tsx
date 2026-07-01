import Link from 'next/link';
import SeasonCard from "../molecules/SeasonCard";

export default function SeasonGrid() {
  const seasons = [
    {
      title: "Early Season: Big Rainbows",
      dates: "October 12 - November",
      description: "High water velocity and aggressive pre-hatch feeding. Target migratory and massive resident rainbow trout tight against the structure using heavy streamers and sink-tips.",
      imageSrc: "assets/images/apertura-temporada-flyfishing-rainbow-trout.avif"
    },
    {
      title: "High Season: World-Class Dry Fly",
      dates: "January - March",
      description: "The terrestrial explosion. Beetles and grasshoppers drop from the banks, triggering violent surface strikes in hidden spring creeks. A dry fly sight-fishing experience unique in the world.",
      imageSrc: "assets/images/brown-trout-with-fat-albert-coyhaique.avif"
    },
    {
      title: "Close Season: Trophy Browns",
      dates: "April - May",
      description: "Cooler, windless afternoons and massive mayfly hatches. Legendary brown trout begin their pre-spawn migrations through stunning autumn valleys. Your chance at a true monster.",
      imageSrc: "assets/images/two-anglers-and-two-trophy-brown-trout-coyhaique-patagonia.avif"
    }
  ];

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-brand-charcoal relative z-20">
      {/* Ensanchado de la sección completa a 1440px */}
      <div className="max-w-[1260px] mx-auto">
        
        {/* Encabezado Premium */}
        <div className="mb-20 max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-6 leading-[1.1]">
            Three Seasons, <br /> Three Distinct Patagonia Fly Fishing Challenges
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed font-light">
            The waters around Coyhaique evolve continuously. Whether you are hunting early-season giants, 
            chasing the adrenaline of dry fly sight-fishing, or stripping streamers for late-season migratory runs, 
            we time your expedition for peak performance. <Link href="/fishing-season" className="hover:text-brand-gold transition-colors duration-200 underline decoration-white/20 hover:decoration-brand-gold" > Three Seasons </Link>
          </p>
        </div>

        {/* Grilla con más aire y cajas más anchas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {seasons.map((season, index) => (
            <SeasonCard
              key={index}
              title={season.title}
              dates={season.dates}
              description={season.description}
              imageSrc={season.imageSrc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}