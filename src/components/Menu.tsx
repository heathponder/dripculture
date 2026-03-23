import ScrollReveal from "./ScrollReveal";
import TextScramble from "./TextScramble";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

const drinks: MenuItem[] = [
  { name: "Espresso", desc: "Double shot, house blend", price: "3.50" },
  { name: "Cortado", desc: "Equal parts espresso & steamed milk", price: "4.50" },
  { name: "Flat White", desc: "Velvety microfoam, double ristretto", price: "5.00" },
  { name: "Latte", desc: "Espresso, steamed milk, your choice of milk", price: "5.50" },
  { name: "Americano", desc: "Espresso lengthened with hot water", price: "4.00" },
  { name: "Mocha", desc: "Espresso, house chocolate, steamed milk", price: "5.75" },
  { name: "Pour-Over", desc: "Single origin, brewed to order", price: "5.00" },
  { name: "Cold Brew", desc: "18-hour steeped, smooth & strong", price: "5.00" },
  { name: "Drip Coffee", desc: "House blend, batch brewed fresh", price: "3.00" },
  { name: "Nitro Cold Brew", desc: "On tap, creamy with no cream", price: "5.75" },
];

const food: MenuItem[] = [
  { name: "Avocado Toast", desc: "Sourdough, smashed avo, chili flakes, flaky salt", price: "8.50" },
  { name: "Croissant", desc: "Butter, almond, or chocolate — baked daily", price: "4.50" },
  { name: "Banana Bread", desc: "House-made, thick slice, walnuts", price: "4.00" },
  { name: "Breakfast Burrito", desc: "Eggs, black beans, salsa verde", price: "9.50" },
  { name: "Granola Bowl", desc: "House granola, Greek yogurt, seasonal fruit, honey", price: "7.50" },
  { name: "Egg & Cheese", desc: "Fried egg, cheddar, arugula on brioche", price: "7.00" },
  { name: "Açaí Bowl", desc: "Açaí blend, banana, granola, coconut flakes", price: "9.00" },
  { name: "Matcha Muffin", desc: "House-baked, white chocolate chips, glaze", price: "4.50" },
  { name: "Salmon Toast", desc: "Cream cheese, capers, dill on sourdough", price: "10.50" },
  { name: "Cookie", desc: "Rotating flavor — ask what's fresh", price: "3.50" },
];

function MenuRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="menu-item flex items-baseline justify-between py-4 border-b border-border group">
        <div className="flex-1 pr-4">
          <span className="text-ink font-semibold text-[15px] group-hover:text-accent transition-colors">{item.name}</span>
          <span className="text-ink-muted text-sm ml-3">{item.desc}</span>
        </div>
        <span className="text-ink font-heading text-xl tracking-wide">${item.price}</span>
      </div>
    </ScrollReveal>
  );
}

function MenuCategory({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="mb-12 last:mb-0 break-inside-avoid">
      <ScrollReveal>
        <h3 className="font-heading text-3xl text-ink mb-2 tracking-wide">{title}</h3>
        <hr className="editorial-rule w-10 mb-0" />
      </ScrollReveal>
      {items.map((item, i) => (
        <MenuRow key={item.name} item={item} index={i} />
      ))}
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-20 bg-cream scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">The Menu</span>
            <TextScramble
              text="WHAT WE POUR."
              className="font-heading text-5xl md:text-7xl text-ink leading-[0.85] mt-3 mb-4"
            />
            <p className="text-ink-muted text-sm max-w-sm mx-auto">
              Every drink made to order. Oat, almond, and coconut milk available.
              Ask your barista what&apos;s on the single-origin rotation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-12">
          <MenuCategory title="DRINKS" items={drinks} />
          <MenuCategory title="FOOD" items={food} />
        </div>

        <ScrollReveal>
          <p className="text-center text-ink-muted text-xs mt-10 tracking-wide uppercase">
            All prices subject to change &middot; Extra shots $1 &middot; Alternative milks +$0.75
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
