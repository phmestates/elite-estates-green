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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Premium architectural home"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-primary-glow/20 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36 text-white">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 pl-1.5 pr-4 py-1.5 text-xs font-medium tracking-wide">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-gradient-gold text-gold-foreground">
                  <Sparkles size={12} />
                </span>
                Award-winning boutique agency
              </span>

              <h1 className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
                Find a home that<br className="hidden md:block" /> feels <span className="text-gold">unmistakably yours.</span>
              </h1>

              <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
                PHM Elite Estates curates Australia's most considered homes — pairing local
                insight with concierge-grade service from first viewing to final settlement.
              </p>

              <div className="mt-10 max-w-2xl">
                <div className="bg-white/95 backdrop-blur rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-elegant">
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
                    className="inline-flex items-center justify-center gap-2 bg-gradient-emerald text-primary-foreground font-medium px-6 h-12 rounded-xl hover:opacity-95 transition shadow-gold"
                  >
                    Get a free appraisal
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
                  <span>Popular:</span>
                  {["Mosman", "Paddington", "Surry Hills", "Bondi"].map((s) => (
                    <Link key={s} to="/property" className="hover:text-gold transition">{s}</Link>
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
                <div key={s.v} className="rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-5">
                  <div className="font-display text-3xl text-gold">{s.k}</div>
                  <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative bg-primary-dark text-white">
          <div className="container mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-sm">
            <div className="flex items-center gap-2">
              <Award className="text-gold" size={18} />
              <span>Award-winning agency &amp; agent · 2017–2026</span>
            </div>
            <span className="hidden md:inline w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-white/80"><strong className="text-white">4.9</strong> from 485 client reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY SEARCH */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Find your next home" title="Search the local market" subtitle="Filter by suburb, type, price, bedrooms and key features to find the property that fits." />
          <div className="mt-10">
            <PropertySearch />
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
