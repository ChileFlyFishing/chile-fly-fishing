// src/components/organisms/TrophyCatchGallery.tsx
import Image from "next/image";

export default function TrophyCatchGallery() {
  const speciesData = [
    {
      title: "Rainbow Trout",
      image: "/assets/images/rainbow-trout-release.avif",
      habitat: ["Lakes", "Rivers", "Spring Creeks"],
      flies: ["Streamer", "Dragon Fly", "Hopper", "Fat Albert", "Chernobyl", "Mayflies"]
    },
    {
      title: "Brown Trout",
      image: "/assets/images/brown-trout-on-the-net.avif",
      habitat: ["Lakes", "Rivers", "Spring Creeks"],
      flies: ["Streamer", "Dragon Fly", "Hopper", "Fat Albert", "Chernobyl", "Mayflies"]
    }
  ];

  return (
    <section className="w-full py-px92 px-px24 bg-neutral-950">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px48">
        {speciesData.map((specie, idx) => (
          <div key={idx} className="group border border-white/10 p-px24 rounded-[8px] bg-brand-charcoal">
            {/* Contenedor de imagen */}
            <div className="relative w-full h-[300px] mb-px24 overflow-hidden rounded-[4px]">
              <Image 
                src={specie.image} 
                alt={specie.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <h3 className="font-display text-2xl text-brand-gold mb-px24">{specie.title}</h3>

            {/* Habitat */}
            <div className="mb-px24">
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-px12">Habitat:</p>
              <ul className="flex flex-wrap gap-px12">
                {specie.habitat.map((item, i) => (
                  <li key={i} className="text-sm bg-white/5 px-px12 py-px6 rounded">{item}</li>
                ))}
              </ul>
            </div>

            {/* Flies */}
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-px12">Tactical Fly Selection:</p>
              <ul className="grid grid-cols-2 gap-px12">
                {specie.flies.map((fly, i) => (
                  <li key={i} className="text-sm text-white/80">• {fly}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}