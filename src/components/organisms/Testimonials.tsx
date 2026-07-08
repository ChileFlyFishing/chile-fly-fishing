"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  date: string;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Matias & Sebastian connected with Douglas Outdoors when they started Chile Fly Fishing back in 2019/2020. They are now great friends who just happen to run a professional fishing operation in beautiful Patagonia. Everything is taken care of and first class once you arrive in Chile. Matias and Sebastian are great hosts and would love to show you some of their favorite spots. When it's time to book your bucket list trip to Patagonia contact the Team at Chile Fly Fishing and make your trip legendary.",
    author: "Kevin J.",
    date: "February 2019",
    image: "/assets/images/kevin_j.jpg",
  },
  {
    quote:
      "A truly unforgettable week. Beautiful scenery, different waters and environments each day, and incredible lunches on the river (the Italian coffee!) But most of all, getting to know our Chile Flyfishing hosts Sebastian and Matias, our Patagonia House host Ruth, and the guides (Guillermo, Pablo, Vanessa, and Diego) who we now consider our friends. They all truly made this experience a special one.",
    author: "Julie Church",
    date: "January 2026",
    image: "/assets/images/julie-church.jpg",
  },
  {
    quote: "The BEST trip!! Fabulous guides and great hosts. Many thanks for very memorable trip!! I love CHILE!!",
    author: "Cindy Sabo",
    date: "January 2026",
    image: "/assets/images/cindy.jpg",
  },
  {
    quote:
      "We've been fortunate to fish with great guides around the world, but Sebastian stands out as one of the very best. Our conditions were tough and he took us to a beautiful, remote spring creek — clear water, wild fish, and the kind of technical sight-fishing that keeps an experienced angler fully engaged. What really impressed me was his passion for the sport — on his scheduled day off, Sebastian still invited us out wading simply because he loves being on the water.",
    author: "Scott and Christine Teele",
    date: "January 2024",
    image: "/assets/images/scott_Christine.jpeg",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className={`w-4 h-4 ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 4.5L13 10L7.5 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = TESTIMONIALS[index];

  return (
    <section className="w-full bg-brand-charcoal py-px92 px-px24 md:px-px48 border-t border-white/5">
      <div className="max-w-[1260px] mx-auto">

        {/* Cabecera Estricta */}
        <div className="mb-px60">
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Patagonia Fly Fishing Reviews: Stories from the River.
          </h2>
          <p className="font-sans text-white/60 mt-px18 text-base md:text-lg max-w-xl">
            What fellow anglers say about our unpressured waters and the absolute wilderness experience.
          </p>
        </div>

        {/* Carrusel de Testimonios */}
        <div className="flex flex-col items-center mt-px48">
          <div className="w-full max-w-2xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-gold/30 mb-px24 flex-shrink-0">
              <img
                src={current.image}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-h-[260px] sm:min-h-[220px] md:min-h-[180px] flex items-center justify-center">
              <blockquote className="font-sans text-white/90 text-base md:text-lg leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-px24">
              <cite className="font-display text-lg text-brand-gold not-italic block">
                {current.author}
              </cite>
              <span className="font-sans text-xs text-white/40 uppercase tracking-wider block mt-px4">
                {current.date}
              </span>
            </div>
          </div>

          {/* Navegación: flechas + dots */}
          <div className="flex items-center gap-px24 mt-px48">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-brand-gold hover:border-brand-gold/40 transition-colors flex items-center justify-center cursor-pointer"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex gap-px12">
              {TESTIMONIALS.map((t, i) => (
                <button
                  type="button"
                  key={t.author}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial from ${t.author}`}
                  aria-current={i === index}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    i === index ? "bg-brand-gold" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-white/15 text-white/60 hover:text-brand-gold hover:border-brand-gold/40 transition-colors flex items-center justify-center cursor-pointer"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
