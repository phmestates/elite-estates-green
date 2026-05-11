import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Search, ClipboardEdit, Mail, Award, ShieldCheck, Users, TrendingUp, Quote, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { PropertySearch } from "@/components/PropertySearch";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBand } from "@/components/CtaBand";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";

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

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary-dark min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Premium architectural home"
            className="w-full h-full object-cover scale-110 opacity-95"
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
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm text-[11px] font-medium tracking-[0.28em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-gold shadow-gold" />
                <span className="text-gold-shine">Sydney · Boutique Real Estate</span>
              </span>

              <h1 className="mt-8 font-display font-extrabold text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.0] tracking-[-0.035em] text-balance">
                Find a home that<br className="hidden md:block" /> feels{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic font-light text-gold-shine">unmistakably</span>
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
                yours.
              </h1>

              <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed font-light">
                We curate Australia's most considered homes — pairing local insight with
                concierge-grade service from first viewing to final settlement.
              </p>

              <div className="mt-10 max-w-2xl">
                <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-elegant ring-1 ring-gold/30">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-gold opacity-40 blur-md -z-10" />
                  <div className="flex items-center gap-2 flex-1 px-4">
                    <MapPin size={18} className="text-primary" />
                    <input
                      type="text"
                      placeholder="Suburb, postcode or street"
                      className="flex-1 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                    />
                  </div>
                  <Link
                    to="/selling"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold-shine text-gold-foreground font-semibold px-6 h-12 rounded-xl hover:opacity-95 transition shadow-gold group"
                  >
                    Get a free appraisal
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
