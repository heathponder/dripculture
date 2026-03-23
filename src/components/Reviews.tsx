import ScrollReveal from "./ScrollReveal";
import TextScramble from "./TextScramble";

const reviews = [
  {
    name: "Jordan P.",
    text: "This place ruined every other coffee shop for me. The cortado is perfect — not too much milk, not too little. And the space itself is gorgeous. I come here to work and end up staying for hours.",
    stars: 5,
    time: "1 week ago",
  },
  {
    name: "Mia C.",
    text: "The pour-over changed my life. I didn't know coffee could taste like that. The barista walked me through the whole process and now I'm a total snob. Worth it.",
    stars: 5,
    time: "3 weeks ago",
  },
  {
    name: "Tyler & Amanda R.",
    text: "Best vibes in town. The vinyl wall, the concrete bar, the avocado toast — everything is curated without feeling pretentious. Our favorite Saturday morning spot.",
    stars: 5,
    time: "2 weeks ago",
  },
  {
    name: "Rachel K.",
    text: "Finally a coffee shop that actually cares about what they serve. The cold brew is smooth, the pastries are fresh, and they remember your name after the second visit.",
    stars: 5,
    time: "4 days ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star text-sm">&#9733;</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-cream scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Reviews</span>
            <TextScramble
              text="WORD ON THE STREET."
              className="font-heading text-5xl md:text-7xl text-ink leading-[0.85] mt-3 mb-4"
            />
            <div className="flex items-center justify-center gap-2 text-ink-muted text-sm">
              <Stars count={5} />
              <span>4.9 on Google &middot; 300+ reviews</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="review-tilt border-2 border-border p-8 h-full flex flex-col">
                <Stars count={review.stars} />
                <p className="text-ink text-[15px] leading-[1.8] mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-ink font-semibold text-sm">{review.name}</span>
                  <span className="text-ink-muted text-xs">{review.time}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
