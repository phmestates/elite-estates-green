import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Search, ClipboardEdit, ChevronRight, Mail, Award, ShieldCheck, Users, TrendingUp, Quote, MapPin, ArrowRight, Sparkles, Zap, LayoutGrid } from "lucide-react";
import { PropertySearch } from "@/components/PropertySearch";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBand } from "@/components/CtaBand";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { useEffect, useState } from "react";

import heroicResidence from "@/assets/emerald-twilight-residence.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PHM Elite Estates — Premium Real Estate Agents Dedicated to Results" },
      { name: "description", content: "The leading real estate experts in your area. Buy, sell or rent with PHM Elite Estates — local market leaders you can trust." },
      { property: "og:title", content: "PHM Elite Estates — Premium Real Estate" },
      { property: "og:description", content: "Local experts. Premium service. Real results." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = properties.filter((p) => p.status === "For Sale").slice(0, 6);
  const [loaded, setLoaded] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <>
      {/* HERO */}
      {/* <section className="relative overflow-hidden bg-primary-dark min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
            // src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=70"
            alt="Luxury contemporary residence at twilight"
            className="w-full h-full object-cover scale-105 opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-hero-vignette" />
          <div className="absolute inset-0 grain opacity-50 mix-blend-overlay" />
          <div className="absolute top-[-8rem] right-[-6rem] w-[36rem] h-[36rem] rounded-full bg-gold/25 blur-[140px] animate-float-slow" />
          <div className="absolute bottom-[-12rem] left-[-4rem] w-[40rem] h-[40rem] rounded-full bg-primary-glow/20 blur-[160px]" />
          <div className="absolute top-1/3 left-1/2 w-[20rem] h-[20rem] rounded-full bg-gold/10 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background/95" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pt-28 pb-32 md:pt-32 text-white w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.4em] uppercase text-white/55">
                <span className="w-10 h-px bg-gold" />
                <span>Est. 2026 — Sydney</span>
              </div>

              <h1 className="mt-7 font-display font-bold text-5xl md:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-[-0.035em] text-balance">
                A new standard<br className="hidden md:block" /> for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic font-light text-gold-shine">refined</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="goldStroke" x1="0" x2="1">
                        <stop offset="0%" stopColor="oklch(0.92 0.14 92)" />
                        <stop offset="100%" stopColor="oklch(0.62 0.16 70)" />
                      </linearGradient>
                    </defs>
                    <path d="M2 8 Q 50 2, 100 6 T 198 4" stroke="url(#goldStroke)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                living.
              </h1>

              <p className="mt-8 text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-light">
                PHM Elite Estates represents Australia's most considered homes — pairing
                deep local knowledge with the discretion and craft of a private brokerage.
              </p>

              <div className="mt-10 max-w-2xl">
                <div className="bg-white rounded-xl p-1.5 flex flex-col sm:flex-row gap-1.5 shadow-elegant">
                  <div className="flex items-center gap-3 flex-1 px-4">
                    <MapPin size={18} className="text-primary shrink-0" />
                    <input
                      type="text"
                      placeholder="Search by suburb, postcode or street"
                      className="flex-1 h-12 bg-transparent text-foreground placeholder:text-muted-foreground/70 focus:outline-none text-sm"
                    />
                  </div>
                  <Link
                    to="/selling"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold-shine text-gold-foreground font-semibold px-6 h-12 rounded-lg hover:opacity-95 transition shadow-gold group"
                  >
                    Request appraisal
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/55">
                  <span className="uppercase tracking-[0.25em]">Trending</span>
                  {["Mosman", "Paddington", "Surry Hills", "Bondi"].map((s) => (
                    <Link
                      key={s}
                      to="/property"
                      className="px-3 py-1.5 rounded-full border border-white/15 hover:border-gold hover:text-gold hover:bg-gold/5 transition"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
              {[
                { k: "$1.2B+", v: "Property sold" },
                { k: "485", v: "Five-star reviews" },
                { k: "21 days", v: "Avg. days on market" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="group relative rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 p-6 hover:border-gold/50 hover:bg-white/[0.08] transition-all overflow-hidden"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative font-display text-3xl lg:text-[2.25rem] font-bold text-gold-shine tracking-tight">{s.k}</div>
                  <div className="relative text-[11px] text-white/60 mt-2 uppercase tracking-[0.22em]">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 mt-16 text-[10px] uppercase tracking-[0.35em] text-white/40">
            <span className="w-12 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            Scroll to explore
          </div>
        </div>
      </section> */}
      {/* HERO SECTION - REFINED EDITORIAL LAYOUT */}
      <section className="relative h-[95vh] min-h-[700px] w-full flex items-center overflow-hidden bg-primary-dark font-sans text-primary-foreground selection:bg-gold-soft selection:text-ink">

        {/* 1. Optimized Cinematic Background Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={heroicResidence} // Use the generated image provided below
            alt="PHM Elite Estates - Premium Australian Residence at Twilight"
            className={`w-full h-full object-cover scale-105 transition-all duration-[15s] ease-out-sine ${loaded ? 'opacity-70 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'
              }`}
          />
          {/* Layered Luxury Gradients (Emerald Deep) for perfect text readability */}
          {/* The gradients transition from dark emerald (left) to transparent (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-hero-vignette z-10" />
          {/* subtle grain texture for depth */}
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay z-10" />
        </div>

        {/* 2. Main Content Grid - Balanced Asymmetry */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 pt-28 pb-20">

          {/* Left Column - Main Branding & Typography */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-out-sine delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Elegant, Non-Intrusive Eyebrow */}
            <div className="flex items-center gap-6 mb-8">
              <span className="w-16 h-[2px] bg-gold" />
              <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] font-bold">
                PHM Elite Estates
              </p>
            </div>

            {/* Massive Architectural Typography (Jakarta Sans) */}
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-[6.5rem] font-extrabold leading-[1.0] tracking-tighter mb-8 drop-shadow-2xl">
              A NEW STANDARD <br className="hidden md:block" />
              FOR{" "}
              {/* Gold Shimmer Text Effect */}
              <span className="text-gold-shine">Refined</span>{" "}
              living.
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl border-l-[3px] border-gold pl-6 mb-12 shadow-elegant">
              Representing Australia's most considered homes — pairing deep local knowledge with the discretion and craft of a private brokerage.
            </p>
          </div>

          {/* Right Column - Interactive 'Console' Search Area */}
          <div
            className={`lg:col-span-5 flex items-center justify-end transition-all duration-1000 ease-out-sine delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="w-full max-w-md bg-white rounded-xl p-3 shadow-elegant border border-cream">

              {/* Appraisal Callout Card */}
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-3 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 grid place-items-center rounded-full bg-gold-soft text-gold-deep shadow-inner">
                    <Zap size={24} className="animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-lg text-ink">Selling Your Property?</h4>
                    <p className="text-xs text-ink/70">Request a premium market estimation instantly.</p>
                  </div>
                </div>
                <Link
                  to="/selling"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground font-semibold px-8 h-12 rounded-md hover:bg-gold-deep transition-all duration-300 shadow-gold"
                >
                  Request appraisal
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Refined Search Area (Buy/Rent) */}
              <div className="p-4 flex flex-col gap-3">
                <p className="text-ink text-xs uppercase tracking-[0.2em] font-semibold text-center mb-1">Search Properties</p>
                <div className="flex flex-col sm:flex-row gap-1.5 p-1 bg-cream rounded-md border border-input">
                  {/* Simplified Tab Interface */}
                  <button className="flex-1 h-10 px-4 rounded font-medium text-sm bg-primary text-white shadow">Buy</button>
                  <button className="flex-1 h-10 px-4 rounded font-medium text-sm text-ink/70 hover:bg-muted transition">Rent</button>
                  <button className="flex-1 h-10 px-4 rounded font-medium text-sm text-ink/70 hover:bg-muted transition">Sold</button>
                </div>

                {/* Clean Input Field */}
                <div className="relative mt-2">
                  <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary shrink-0" />
                  <input
                    type="text"
                    placeholder="Suburb, postcode or street"
                    className="w-full h-14 pl-12 pr-6 rounded-lg bg-card text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-ring border border-input text-sm font-medium"
                  />
                </div>

                {/* Advanced Search Link */}
                <Link to="/property" className="flex items-center gap-2 text-ink text-xs hover:text-primary transition font-medium self-end group">
                  View More Filters
                  <LayoutGrid size={14} className="group-hover:rotate-6 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Hairline Structural Separation Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      </section>
      {/* FEATURE CARDS */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          <FeatureCard icon={<Search size={26} />} title="Interested in Buying?" body="Use our smart search to find your dream property. Filter by suburb, category, price and more." link={{ to: "/buying", label: "Start searching" }} />
          <FeatureCard icon={<ClipboardEdit size={26} />} title="Request an Appraisal" body="How much is your home worth? Find out the value of your home in today's market." link={{ to: "/selling", label: "Sell your home" }} />
          <FeatureCard icon={<Mail size={26} />} title="Receive Email Alerts" body="Be the first to know about new listings that match your search criteria." link={{ to: "/contact", label: "Subscribe now" }} />
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Featured listings" title="Properties for sale" subtitle="A curated selection of homes currently on the market with PHM Elite Estates." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/property" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 h-12 rounded font-semibold uppercase tracking-wider hover:bg-primary-dark transition">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Why PHM Elite</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">A premium experience, every step of the way</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { icon: <ShieldCheck size={28} />, t: "Trusted Locally", d: "Decades of combined experience in your neighbourhood." },
              { icon: <TrendingUp size={28} />, t: "Premium Results", d: "Track record of achieving above-reserve sale prices." },
              { icon: <Users size={28} />, t: "Personal Service", d: "A dedicated agent from appraisal through to settlement." },
              { icon: <Award size={28} />, t: "Award Winning", d: "Recognised year after year for service excellence." },
            ].map((v) => (
              <div key={v.t} className="text-center">
                <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-gold text-gold-foreground mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-semibold">{v.t}</h3>
                <p className="text-sm text-white/75 mt-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Client stories" title="Hear it from our happy clients" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <Quote className="text-gold" />
                <blockquote className="mt-3 text-foreground/85 italic">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-primary-dark">{t.name} · <span className="font-normal text-muted-foreground">{t.suburb}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function FeatureCard({ icon, title, body, link }: { icon: React.ReactNode; title: string; body: string; link: { to: string; label: string } }) {
  return (
    <div className="bg-card rounded-lg p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition text-center">
      <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-gold text-gold-foreground mb-4">{icon}</div>
      <h3 className="font-display text-xl font-semibold text-primary-dark">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <Link to={link.to} className="mt-4 inline-block text-sm font-semibold text-primary hover:text-gold transition">{link.label} →</Link>
    </div>
  );
}
