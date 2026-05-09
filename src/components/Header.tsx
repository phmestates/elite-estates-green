import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, Facebook, Instagram, Linkedin, Home } from "lucide-react";
import { site, navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-ink text-white text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-3">
            <a href={site.socials.facebook} aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook size={14} /></a>
            <a href={site.socials.instagram} aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={14} /></a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={14} /></a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={`mailto:${site.email}`} className="hidden sm:inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={13} /> EMAIL US
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-1.5 bg-gold text-gold-foreground font-semibold px-3 h-9 hover:brightness-95 transition">
              <Phone size={13} /> CALL US ON {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-10 h-10 rounded-md bg-gold text-gold-foreground">
              <Home size={20} strokeWidth={2.5} />
            </span>
            <span className="font-display leading-tight">
              <span className="block text-lg font-bold tracking-wide">PHM ELITE</span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-gold">Estates</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="px-3 py-2 text-sm font-semibold uppercase tracking-wider hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden bg-primary-dark border-t border-white/10">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="py-3 text-sm font-semibold uppercase tracking-wider border-b border-white/10 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
