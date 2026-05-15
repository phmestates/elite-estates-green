import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, Landmark, Mail, ShieldCheck, Users, TrendingUp, Quote, Award, MapPin, ArrowRight, LineChart } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBand } from "@/components/CtaBand";
import { properties, SUBURBS } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { useEffect, useState, useRef } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import type { Property } from "@/data/properties";
import heroicResidence from "@/assets/emerald-twilight-residence.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PHM Elite Estates — House & Land Packages Across Australia" },
      { name: "description", content: "Explore premium house & land packages, dual key investments, and development opportunities across Queensland and Western Australia with PHM Elite Estates." },
      { property: "og:title", content: "PHM Elite Estates — Premium House & Land Packages" },
      { property: "og:description", content: "House & land packages. Personal service. Real results." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = properties.slice(0, 6);
  const [loaded, setLoaded] = useState(false);
  const [enquiryProp, setEnquiryProp] = useState<Property | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>
        {`
         @keyframes customKenBurns {
           0% { transform: scale(1); opacity: 0; }
           10% { opacity: 0.9; }
           100% { transform: scale(1.1); opacity: 0.9; }
         }
         .animate-immediate-cinema {
           animation: customKenBurns 30s linear forwards;
         }
       `}
      </style>

      {/* HERO */}
      <section className="relative min-h-screen lg:h-[95vh] lg:min-h-[800px] w-full flex items-center overflow-hidden bg-primary-dark text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <img src={heroicResidence} alt="PHM Elite Estates" className="w-full h-full object-cover animate-immediate-cinema" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/100 via-primary-dark/85 to-primary-dark/40 lg:via-primary-dark/70 lg:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/20 to-black/10 z-10" />
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-5 lg:px-10 xl:px-12 grid lg:grid-cols-2 gap-x-12 pt-28 pb-20 lg:pt-32 lg:pb-24 items-center">

          {/* Left */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ease-out-sine delay-300 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <span className="w-12 h-[2px] bg-gold" />
              <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold">PHM Elite Estates</p>
            </div>

            <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold leading-[1.05] tracking-tighter mb-8 drop-shadow-2xl text-balance">
              A NEW STANDARD <br className="hidden md:block" />
              FOR{" "}
              <span className="text-gold-shine relative inline-block whitespace-nowrap">
                Refined
                <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 lg:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" className="text-gold" />
                </svg>
              </span>{" "}
              living.
            </h1>

            <p className="text-white/80 text-base md:text-lg lg:text-xl font-light max-w-xl border-l-[3px] border-gold/40 pl-6 mb-10 leading-relaxed">
              Specialising in house & land packages, dual key investments and development opportunities across QLD and WA.
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                { value: `${properties.length}`, label: "Active Listings" },
                { value: "Australia-wide", label: "Coverage" },
                { value: "4", label: "Categories" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Search Console */}
          <div className={`flex items-center lg:justify-end mt-10 lg:mt-0 transition-all duration-1000 delay-600 w-full ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-full max-w-[38rem] bg-white/98 backdrop-blur-3xl rounded-2xl p-7 sm:p-10 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden ml-auto">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-gold-shine to-gold" />

              <div className="text-center mb-8 mt-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-dark tracking-tight mb-3">
                  What is your property worth?
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Get a free, no-obligation appraisal from our experts.
                </p>
              </div>

              <HeroSearch />

              <div className="mt-8 pt-8 border-t border-border/60">
                <div className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300 border border-primary/10 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 group">
                  <div className="w-12 h-12 shrink-0 grid place-items-center rounded-full bg-white shadow-sm group-hover:scale-110 transition-all duration-500">
                    <Landmark size={22} className="text-gold" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-display font-bold text-lg text-primary-dark">Finance Your Property</h4>
                    <p className="text-sm text-primary-dark/70 mt-0.5">Tailored solutions from our specialist team.</p>
                  </div>
                  <Link to="/finance" className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground font-semibold px-6 h-11 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all w-full sm:w-auto text-sm shrink-0">
                    Explore Finance
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          <FeatureCard icon={<Search size={28} />} title="Interested in Buying?" body="Browse house & land packages, dual key, and development opportunities across QLD and WA." link={{ to: "/buying", label: "Start searching" }} />
          <FeatureCard icon={<Landmark size={28} />} title="Finance Your Property" body="Explore tailored finance options with our specialist. From first home to investment — we find the right fit." link={{ to: "/finance", label: "Explore finance" }} />
          <FeatureCard icon={<Mail size={28} />} title="Receive Email Alerts" body="Be the first to know about new listings that match your search criteria." link={{ to: "/contact", label: "Subscribe now" }} />
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Featured listings"
            title="Properties for sale"
            subtitle={`${properties.length} active listings across Queensland and Western Australia — house & land packages, dual key investments, and development opportunities.`}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PropertyCard key={p.id} p={p} onEnquire={setEnquiryProp} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/property" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 h-14 rounded-xl font-bold uppercase tracking-wider hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              View All {properties.length} Properties <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Why PHM Elite</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">A premium experience, every step of the way</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              { icon: <ShieldCheck size={32} />, t: "Trusted Specialist", d: "Expert knowledge of QLD and WA house & land packages and investment property." },
              { icon: <TrendingUp size={32} />, t: "Investment Focused", d: "Strong rental yields, dual key opportunities, and growth corridor expertise." },
              { icon: <Users size={32} />, t: "Personal Service", d: "A dedicated agent from first enquiry through to settlement — always direct." },
              { icon: <Award size={32} />, t: "End-to-End Support", d: "Finance, contracts, builder coordination — we manage the whole journey." },
            ].map((v) => (
              <div key={v.t} className="text-center group">
                <div className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-gold text-gold-foreground mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/20">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold">{v.t}</h3>
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Client stories" title="Hear it from our clients" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure key={t.name} className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <Quote size={32} className="text-gold opacity-50 mb-4" />
                <blockquote className="text-foreground/85 italic leading-relaxed text-lg">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm font-bold text-primary-dark uppercase tracking-wider">
                  {t.name} <span className="text-muted-foreground font-medium normal-case tracking-normal ml-1">· {t.suburb}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 h-14 rounded-xl font-bold uppercase tracking-wider hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              Read All Client Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />

      {enquiryProp && (
        <EnquiryModal property={enquiryProp} onClose={() => setEnquiryProp(null)} />
      )}
    </>
  );
}

// ─── HERO SEARCH WITH AUTOCOMPLETE ──────────────────────────────────────────

function HeroSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSugg, setShowSugg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (val: string) => {
    setQuery(val);
    if (val.length >= 1) {
      const matches = SUBURBS.filter((s) => s.toLowerCase().startsWith(val.toLowerCase()));
      setSuggestions(matches);
      setShowSugg(matches.length > 0);
    } else {
      setShowSugg(false);
    }
  };

  const handleSelect = (suburb: string) => {
    setQuery(suburb);
    setShowSugg(false);
    navigate({ to: "/selling" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/selling" });
    setShowSugg(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border-2 border-input bg-white shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300">
        <div className="relative flex-1">
          <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-dark/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => { if (suggestions.length > 0) setShowSugg(true); }}
            onBlur={() => setTimeout(() => setShowSugg(false), 150)}
            placeholder="Enter your address or suburb..."
            className="w-full h-14 sm:h-16 pl-12 pr-4 bg-transparent text-primary-dark placeholder:text-muted-foreground/60 focus:outline-none text-sm sm:text-base font-medium"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-dark font-semibold px-5 sm:px-7 h-14 sm:h-16 transition-colors w-full sm:w-auto text-sm sm:text-base whitespace-nowrap shrink-0"
        >
          <LineChart size={18} className="mr-2" /> Get Appraisal
        </button>
      </div>

      {showSugg && suggestions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-white rounded-xl border border-border shadow-xl overflow-hidden">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onMouseDown={() => handleSelect(s)}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-primary-dark hover:bg-secondary transition-colors text-left"
            >
              <MapPin size={14} className="text-gold shrink-0" />
              <span className="font-medium">{s}</span>
              <span className="ml-auto text-xs text-muted-foreground">
                {properties.filter((p) => p.suburb === s).length} listing{properties.filter((p) => p.suburb === s).length !== 1 ? "s" : ""}
              </span>
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-xs text-muted-foreground">
        {SUBURBS.length} suburbs ·{" "}
        <Link to="/property" className="text-primary font-semibold hover:text-gold">
          View all listings
        </Link>
      </p>
    </form>
  );
}

// ─── SHARED COMPONENTS ──────────────────────────────────────────────────────

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}

function FeatureCard({ icon, title, body, link }: { icon: React.ReactNode; title: string; body: string; link: { to: string; label: string } }) {
  return (
    <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center group">
      <div className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-gold text-gold-foreground mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/20">{icon}</div>
      <h3 className="font-display text-2xl font-bold text-primary-dark">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
      <Link to={link.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors uppercase tracking-wider group-hover:gap-3">
        {link.label} <span>&rarr;</span>
      </Link>
    </div>
  );
}