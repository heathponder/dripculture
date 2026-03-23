import ScrollReveal from "./ScrollReveal";
import TextScramble from "./TextScramble";

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background watermark text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <div className="font-heading text-[12rem] md:text-[20rem] text-ink/[0.03] whitespace-nowrap tracking-widest leading-none">
          DRIP CULTURE DRIP CULTURE
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">Our Story</span>
              <hr className="editorial-rule w-12 mt-3 mb-6" />
              <TextScramble
                text="WE DON'T DO MEDIOCRE."
                className="font-heading text-5xl md:text-7xl text-ink leading-[0.9] mb-8"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-ink-light leading-[1.8] mb-5 text-[15px]">
                Drip Culture started in 2021 as a pop-up out of a garage with a single Chemex and a
                bag of Ethiopian Yirgacheffe. We were tired of burnt, over-extracted, sit-in-a-pot-for-hours
                coffee. So we made our own.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-ink-light leading-[1.8] mb-5 text-[15px]">
                Now we roast in-house every week, source directly from farms we actually know, and pull
                shots on equipment that costs more than our first car. Every cup is brewed to order.
                No drip pots. No batch brew. No shortcuts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-ink-light leading-[1.8] text-[15px]">
                The space is just as important as the coffee. Concrete floors, exposed brick, a vinyl
                wall curated by local DJs, and a long communal table where strangers become regulars.
                This isn&apos;t a drive-through. It&apos;s a destination.
              </p>
            </ScrollReveal>
          </div>

          {/* Images — stacked editorial layout */}
          <div className="relative">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/images/barista.jpg" alt="Barista crafting a pour-over" className="w-full h-full object-cover grayscale-[20%]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-ink bg-bg p-3 shadow-xl hidden md:block">
                <img src="/images/beans.jpg" alt="Fresh roasted beans" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
