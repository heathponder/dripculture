import ScrollReveal from "./ScrollReveal";
import TextScramble from "./TextScramble";

const photos = [
  { src: "/images/interior.jpg", label: "The main bar", span: "col-span-2 row-span-2" },
  { src: "/images/latte.jpg", label: "Latte art", span: "" },
  { src: "/images/pourover.jpg", label: "Pour-over station", span: "" },
  { src: "/images/vibes.jpg", label: "Morning light", span: "col-span-2" },
  { src: "/images/pastry.jpg", label: "Fresh pastries daily", span: "" },
  { src: "/images/espresso.jpg", label: "Pulling shots", span: "" },
  { src: "/images/counter.jpg", label: "The counter", span: "" },
  { src: "/images/beans.jpg", label: "House-roasted beans", span: "" },
];

export default function Space() {
  return (
    <section id="space" className="py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase">The Space</span>
            <TextScramble
              text="MORE THAN A COFFEE SHOP."
              className="font-heading text-6xl md:text-8xl text-ink leading-[0.85] mt-3 mb-4"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.label} delay={i * 0.08} className={photo.span}>
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white text-xs font-semibold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
