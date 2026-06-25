import Link from "next/link";

export default function SeasonHatches() {
  const seasons = [
    {
      title: "Early Season",
      months: "November - December",
      description: "High water levels and aggressive trout post-spawning. Exceptional time for large streamers and heavy nymphs in pristine valleys.",
      slug: "/early-season-november-december",
      accent: "text-brand-forest",
    },
    {
      title: "Peak Dry Fly Season",
      months: "January - March",
      description: "The climax of terrestrial insects. Beetles, hoppers, and caddisflies rule the surface of the technical Ñirehuao Spring Creeks.",
      slug: "/peak-dry-fly-season-in-coyhaique-spring-creek-terrestrial-fishing",
      accent: "text-brand-gold",
    },
    {
      title: "Late Season",
      months: "April - May",
      description: "Stunning fall colors and the migration of trophy brown trout. Technical water reading, mayfly hatches, and strategic streamer tactics.",
      slug: "/late-season-fly-fishing-in-coyhaique-migratory-trout-fall-tactics",
      accent: "text-brand-blue",
    }
  ];

  return (
    <section className="w-full bg-brand-sand py-px92 px-px24 md:px-px48">
      <div className="max-w-[1260px] mx-auto">
        
        {/* Cabecera optimizada: max-w-5xl permite que el manifiesto respire a lo ancho */}
        <div className="mb-px60 text-center max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-brand-charcoal mb-px30 leading-tight">
            Unpressured Waters. Absolute Isolation.
          </h2>
          <p className="font-sans text-brand-charcoal/80 leading-relaxed text-base tracking-normal">
            At Chile Fly Fishing, we believe the ultimate journey isn&apos;t just about the trophy fish; 
            it&apos;s about having the river entirely to yourself. We don&apos;t over-engineer the experience. 
            We invite you to cast in waters that don&apos;t have names on public maps, to read currents 
            that haven&apos;t seen another angler in weeks, and to share a genuine campfire with guides 
            who call this wilderness home. Three distinct seasons. Three entirely different challenges. 
            Welcome to Chilean Patagonia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px30 mt-px60">
          {seasons.map((season) => (
            <div key={season.slug} className="bg-white p-px36 rounded-[8px] border border-neutral-200 flex flex-col justify-between shadow-sm">
              <div>
                <span className={`font-sans text-xs uppercase tracking-wider font-semibold ${season.accent} mb-px12 block`}>
                  {season.months}
                </span>
                <h3 className="font-display text-2xl text-brand-charcoal mb-px18">
                  {season.title}
                </h3>
                <p className="font-sans text-brand-charcoal/70 leading-relaxed mb-px30 text-sm">
                  {season.description}
                </p>
              </div>
              <Link 
                href={season.slug}
                className="font-sans text-sm font-medium text-brand-blue hover:text-brand-charcoal transition-colors flex items-center gap-2"
              >
                View seasonal tactics <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}