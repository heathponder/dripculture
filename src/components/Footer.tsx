export default function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="font-heading text-3xl text-bg tracking-widest">
              DRIP CULTURE<span className="text-accent">.</span>
            </span>
            <p className="text-bg/70 text-sm leading-relaxed mt-3">
              Specialty coffee and creative space. Elm Grove, AR.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-bg/50 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Navigate</h4>
            <div className="space-y-2.5">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Our Story", href: "#story" },
                { label: "The Space", href: "#space" },
                { label: "Reviews", href: "#reviews" },
                { label: "Visit", href: "#visit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-bg/70 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-bg/50 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Contact</h4>
            <div className="space-y-2.5 text-bg/70 text-sm">
              <p>88 Roaster Row</p>
              <p>Elm Grove, AR 72830</p>
              <a href="tel:+14795550177" className="block hover:text-accent transition-colors">(479) 555-0177</a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {["instagram", "tiktok", "google"].map((p) => (
                <a
                  key={p}
                  href="#"
                  className="w-9 h-9 border border-bg/40 flex items-center justify-center text-bg/60 hover:text-accent hover:border-accent transition-all"
                  aria-label={p}
                >
                  {p === "instagram" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  )}
                  {p === "tiktok" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.16a8.16 8.16 0 004.76 1.53v-3.5a4.85 4.85 0 01-1-.5z"/></svg>
                  )}
                  {p === "google" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-bg/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-bg/50 text-xs">
            &copy; {new Date().getFullYear()} Drip Culture. All rights reserved.
          </p>
          <a
            href="https://wymzy.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-bg/70 text-xs">Website by</span>
            <img src="/images/wymzy-logo-full.png" alt="Wymzy Industries" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
