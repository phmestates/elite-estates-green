import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { site, navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className={`hidden md:block bg-primary-dark text-white/80 text-[12px] transition-all duration-300 ${scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"}`}>
        <div className="container mx-auto px-4 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-gold transition">
              <Phone size={12} className="text-gold" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-gold transition">
              <Mail size={12} className="text-gold" /> {site.email}
            </a>
            <span className="hidden lg:inline-flex items-center gap-2 text-white/60">
              <Clock size={12} className="text-gold" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Link to="/contact" className="px-3 py-1 hover:text-gold transition">Subscribe</Link>
            <span className="text-white/20">·</span>
            <Link to="/about" className="px-3 py-1 hover:text-gold transition">Careers</Link>
            <span className="text-white/20 mx-2">|</span>
            <a href={site.socials.facebook} aria-label="Facebook" className="w-7 h-7 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition"><Facebook size={12} /></a>
            <a href={site.socials.instagram} aria-label="Instagram" className="w-7 h-7 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition"><Instagram size={12} /></a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="w-7 h-7 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition"><Linkedin size={12} /></a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_24px_-12px_oklch(0.18_0.05_165/0.25)]" : "bg-background/85 backdrop-blur-md border-b border-border/40"}`}>
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[76px]">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative grid place-items-center w-11 h-11 rounded-xl bg-gradient-emerald-deep shadow-elegant overflow-hidden">
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 14 L16 5 L27 14 V26 H5 Z" />
                <path d="M13 26 V18 H19 V26" />
              </svg>
              <span className="absolute inset-0 ring-1 ring-inset ring-gold/40 rounded-xl" />
            </span>
            <span className="leading-none">
              <span className="flex items-baseline gap-1.5">
                <span className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-primary-dark">PHM Elite</span>
                <span className="w-1 h-1 rounded-full bg-gold" />
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-[9.5px] uppercase tracking-[0.4em] text-muted-foreground/80 font-medium">
                Estates
                <span className="w-5 h-px bg-gradient-gold" />
                Sydney
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-dark after:scale-x-100" }}
                className="relative px-3.5 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary-dark transition-colors after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-px after:bg-gradient-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/selling"
              className="hidden md:inline-flex items-center gap-2 h-11 pl-5 pr-2 rounded-full bg-primary-dark text-primary-foreground text-[13px] font-medium hover:bg-primary transition group"
            >
              <span>Free appraisal</span>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-gold-rich text-gold-foreground group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={14} />
              </span>
            </Link>

            <button
              className="lg:hidden p-2.5 rounded-md hover:bg-secondary transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-dark" }}
                className="py-3 text-sm font-medium text-foreground/80 border-b border-border/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-3 mb-2 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-primary-dark text-primary-foreground text-sm font-medium">
              <Phone size={14} className="text-gold" /> {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
