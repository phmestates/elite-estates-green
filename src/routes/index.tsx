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
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=70"
            alt="Premium living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary/30" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-white">
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">PHM Elite Estates</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            The leading real estate experts <span className="text-gold">dedicated to results</span>
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-xl">The local specialists you can rely on and trust — from first home buyers to luxury estates.</p>

          <div className="mt-8 max-w-2xl bg-white/95 rounded-lg p-2 flex flex-col sm:flex-row gap-2 shadow-2xl">
            <input
              type="text"
              placeholder="Property address or suburb"
              className="flex-1 h-12 px-4 text-foreground rounded-md focus:outline-none"
            />
            <Link to="/selling" className="inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground font-bold uppercase tracking-wider px-5 h-12 rounded-md hover:brightness-95 transition">
              What's My Home Worth?
            </Link>
          </div>
        </div>

        {/* Award strip */}
        <div className="relative bg-ink/90 backdrop-blur text-white py-5">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Award className="text-gold" size={22} />
              <span className="font-display font-semibold">Award Winning Agency &amp; Agent 2017–2026</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm text-white/80"><strong className="text-white">4.9 / 5</strong> · Based on 485 reviews</div>
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
