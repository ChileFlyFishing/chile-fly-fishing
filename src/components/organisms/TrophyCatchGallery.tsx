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
    <section className="w-full py-px92 px-px24 bg-white">
      <div className="max-w-[1260px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px48">
        {speciesData.map((specie, idx) => (
          <div key={idx} className="group overflow-hidden rounded-[8px] bg-white border border-neutral-200 shadow-sm hover:shadow-xl transition-shadow duration-500">
            {/* Imagen cinematográfica a sangre completa, sin padding */}
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={specie.image}
                alt={specie.title}
                fill
                className="object-cover saturate-[1.08] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/5 pointer-events-none" />
            </div>

            {/* Bloque de texto con su propio padding para legibilidad total */}
            <div className="p-px24 md:p-px30">
              <h3 className="font-display text-2xl text-neutral-900 mb-px24">{specie.title}</h3>

              {/* Habitat */}
              <div className="mb-px24">
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-px12">Habitat:</p>
                <ul className="flex flex-wrap gap-px12">
                  {specie.habitat.map((item, i) => (
                    <li key={i} className="text-sm bg-neutral-100 text-neutral-800 px-px12 py-px6 rounded">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Flies */}
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold mb-px12">Tactical Fly Selection:</p>
                <ul className="grid grid-cols-2 gap-px12">
                  {specie.flies.map((fly, i) => (
                    <li key={i} className="text-sm text-neutral-700">• {fly}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}