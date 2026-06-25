export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Having an entire river system to ourselves for a whole week changed my perspective on trout fishing. The logistical standard and guides' knowledge are unmatched.",
      author: "Robert M.",
      location: "Wyoming, USA",
    },
    {
      id: 2,
      quote: "Technical dry fly fishing at its finest. The Ñirehuao spring creeks are hidden gems that demand precision, and the isolation is absolute.",
      author: "David K.",
      location: "Montana, USA",
    },
    {
      id: 3,
      quote: "No over-engineered itineraries. Just pristine water, aggressive wild browns, and authentic Patagonian campfires. I've already booked my next hosted trip.",
      author: "Charles L.",
      location: "Texas, USA",
    }
  ];

  return (
    <section className="w-full bg-brand-charcoal py-px92 px-px24 md:px-px48 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Cabecera Estricta */}
        <div className="mb-px60">
          <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Patagonia Fly Fishing Reviews: Stories from the River.
          </h2>
          <p className="font-sans text-white/60 mt-px18 text-base md:text-lg max-w-xl">
            What fellow anglers say about our unpressured waters and the absolute wilderness experience.
          </p>
        </div>

        {/* Grilla de Testimonios de Lujo Silencioso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px36 mt-px48">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="flex flex-col justify-between border-l border-white/10 pl-px24 py-px6"
            >
              <blockquote className="font-sans text-white/90 text-base leading-relaxed italic mb-px24">
                &ldquo;{rev.quote}&rdquo;
              </blockquote>
              <div>
                <cite className="font-display text-lg text-brand-gold not-italic block">
                  {rev.author}
                </cite>
                <span className="font-sans text-xs text-white/40 uppercase tracking-wider block mt-px4">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}