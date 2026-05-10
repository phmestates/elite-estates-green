import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative grid place-items-center w-11 h-11 rounded-full bg-gradient-emerald text-primary-foreground shadow-elegant">
            <span className="font-display font-semibold text-lg leading-none tracking-tight">P</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-gradient-gold ring-2 ring-background" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-[1.3rem] font-bold tracking-tight text-primary-dark">
              PHM Elite<span className="text-gold">.</span>
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Estates · Est. 2017
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary-dark after:scale-x-100" }}
              className="relative px-3.5 py-2 text-[13px] font-medium text-foreground/75 hover:text-primary-dark transition-colors after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-px after:bg-gradient-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden md:inline-flex items-center gap-2 h-11 pl-4 pr-2 rounded-full bg-primary-dark text-primary-foreground text-sm font-medium hover:bg-primary transition group"
          >
            <Phone size={14} className="text-gold" />
            <span className="opacity-90">{site.phone}</span>
            <span className="grid place-items-center w-7 h-7 rounded-full bg-gradient-gold text-gold-foreground group-hover:rotate-45 transition-transform">
              <ChevronRight size={14} />
            </span>
          </a>

          <button
            className="lg:hidden p-2.5 rounded-md hover:bg-secondary transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
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
