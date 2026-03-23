import ScrollReveal from "./ScrollReveal";
import TextScramble from "./TextScramble";

const hours = [
  { day: "Monday", time: "7 AM – 6 PM" },
  { day: "Tuesday", time: "7 AM – 6 PM" },
  { day: "Wednesday", time: "7 AM – 6 PM" },
  { day: "Thursday", time: "7 AM – 8 PM" },
  { day: "Friday", time: "7 AM – 8 PM" },
  { day: "Saturday", time: "8 AM – 8 PM" },
  { day: "Sunday", time: "8 AM – 4 PM" },
];

export default function Visit() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="visit" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Visit</span>
            <TextScramble
              text="PULL UP."
              className="font-heading text-5xl md:text-7xl text-ink leading-[0.85] mt-3 mb-4"
            />
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal>
          <div className="map-container relative w-full h-[300px] md:h-[360px] border-2 border-ink overflow-hidden mb-8">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-93.65%2C35.26%2C-93.60%2C35.29&layer=mapnik&marker=35.275%2C-93.625"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Drip Culture area"
            />
          </div>
        </ScrollReveal>

        {/* Info grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="border-2 border-ink p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl text-ink mb-4 tracking-wide">FIND US</h3>
                <p className="text-ink-light text-[15px] leading-relaxed">
                  88 Roaster Row<br />
                  Elm Grove, AR 72830
                </p>
              </div>
              <div>
                <hr className="editorial-rule-thin my-5" />
                <div className="space-y-2">
                  <a href="tel:+14795550177" className="block text-ink-light text-sm hover:text-accent transition-colors">
                    (479) 555-0177
                  </a>
                  <a href="mailto:hello@dripculture.co" className="block text-ink-light text-sm hover:text-accent transition-colors">
                    hello@dripculture.co
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border-2 border-ink p-8 h-full">
              <h3 className="font-heading text-2xl text-ink mb-4 tracking-wide">HOURS</h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm ${
                      h.day === today ? "text-accent font-semibold" : "text-ink-light"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}