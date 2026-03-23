export default function Marquee() {
  const items = [
    "POUR-OVER", "ESPRESSO", "COLD BREW", "CORTADO", "LATTE ART",
    "SINGLE ORIGIN", "HOUSE ROASTED", "OAT MILK", "VINYL", "COMMUNITY"
  ];

  const repeated = [...items, ...items];

  return (
    <div className="bg-ink py-3 overflow-hidden border-y-2 border-ink">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-heading text-bg text-lg tracking-[0.2em] mx-8 flex items-center gap-8">
            {item}
            <span className="text-accent text-xs">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
