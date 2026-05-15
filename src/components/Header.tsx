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
    <header className="sticky top-0 z-50 w-full">

      {/* Utility bar */}
      <div
        className={`hidden md:block bg-primary-dark text-white/90 text-[12px] font-medium transition-all duration-500 ease-in-out ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-11 opacity-100 border-b border-white/10"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-gold transition-colors duration-300">
              <Phone size={13} className="text-gold" /> {site.phone}
            </a>
            <span className="text-white/20">·</span>
            <a href={site.phone2Href} className="inline-flex items-center gap-2 hover:text-gold transition-colors duration-300">
              <Phone size={13} className="text-gold" /> {site.phone2}
            </a>
            <a href={`mailto:${site.email}`} className="hidden xl:inline-flex items-center gap-2 hover:text-gold transition-colors duration-300">
              <Mail size={13} className="text-gold" /> {site.email}
            </a>
            <span className="hidden 2xl:inline-flex items-center gap-2 text-white/60">
              <Clock size={13} className="text-gold" /> {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="px-3 py-1 hover:text-gold transition-colors duration-300">Subscribe</Link>
            <span className="text-white/20">·</span>
            <Link to="/about" className="px-3 py-1 hover:text-gold transition-colors duration-300">Careers</Link>
            <span className="text-white/20 mx-2">|</span>
            <div className="flex items-center gap-1">
              <a href={site.socials.facebook} aria-label="Facebook" className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition-all duration-300"><Facebook size={14} /></a>
              <a href={site.socials.instagram} aria-label="Instagram" className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition-all duration-300"><Instagram size={14} /></a>
              <a href={site.socials.linkedin} aria-label="LinkedIn" className="w-8 h-8 grid place-items-center rounded-full hover:bg-white/10 hover:text-gold transition-all duration-300"><Linkedin size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-500 ease-in-out ${scrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "bg-background/80 backdrop-blur-md border-b border-border/40"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[80px]">

          {/* Brand */}
          <Link to="/" className="flex items-center sm:items-baseline gap-2 group">
            <span className="font-display text-2xl lg:text-[1.75rem] font-bold tracking-wider text-primary-dark">
              PHM
            </span>
            <span
              className={`uppercase font-semibold tracking-[0.3em] transition-all duration-700 ease-in-out text-muted-foreground/90 ${scrolled ? "text-[10px]" : "text-[11px]"
                }`}
            >
              Elite Estates
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-dark font-semibold after:scale-x-100" }}
                className="relative px-4 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary-dark transition-colors duration-300 after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[2px] after:bg-gold after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Link
              to="/selling"
              className="hidden md:inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-primary-dark text-primary-foreground text-[13px] font-semibold hover:bg-primary-dark/90 hover:shadow-xl hover:shadow-primary-dark/10 transition-all duration-300 group"
            >
              <span className="tracking-wide">Free appraisal</span>
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gold text-primary-dark group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-11 h-11 grid place-items-center rounded-lg hover:bg-secondary text-foreground transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="bg-background/98 backdrop-blur-2xl border-t border-border shadow-2xl">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-dark bg-secondary/50 border-l-4 border-gold pl-3" }}
                className="py-3.5 px-4 text-[15px] font-medium text-foreground/80 hover:bg-secondary hover:text-primary-dark transition-all duration-300 rounded-md mb-1 border-l-4 border-transparent hover:border-gold/50"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border/60 px-4 flex flex-col gap-2">
              <a href={site.phoneHref} className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary-dark text-primary-foreground text-[14px] font-semibold shadow-lg hover:bg-primary-dark/90 transition-all">
                <Phone size={16} className="text-gold" /> {site.phone}
              </a>
              <a href={site.phone2Href} className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full border border-border text-primary-dark text-[14px] font-semibold hover:bg-secondary transition-all">
                <Phone size={16} className="text-gold" /> {site.phone2}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}