import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PropertySearch } from "@/components/PropertySearch";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/buying")({
  head: () => ({
    meta: [
      { title: "Buying — PHM Elite Estates | House & Land Packages" },
      { name: "description", content: "Browse house & land packages, dual key investments, and development opportunities across Queensland and Western Australia with PHM Elite Estates." },
      { property: "og:title", content: "Buying — PHM Elite Estates" },
      { property: "og:description", content: "House & land packages, dual key and development opportunities Australia-wide." },
    ],
  }),
  component: BuyingPage,
});

const STEPS = [
  { n: "01", t: "Define your goals", d: "We help clarify your budget, must-haves and ideal locations." },
  { n: "02", t: "Search smarter", d: "Curated alerts, off-market access and shortlists tailored to you." },
  { n: "03", t: "Inspect & evaluate", d: "Honest opinions on every property — value, growth and risk." },
  { n: "04", t: "Negotiate & secure", d: "Skilled negotiation to get you the right home at the right price." },
];

function BuyingPage() {
  return (
    <>
      <PageHero
        eyebrow="Buying"
        title="Find your perfect House & Land package"
        subtitle="Browse our curated portfolio of house & land packages, dual key investments, and development opportunities across QLD and WA."
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Your buying journey, simplified</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-secondary rounded-lg p-6 border border-border">
                <div className="font-display text-3xl font-bold text-gold">{s.n}</div>
                <h3 className="font-display text-lg font-semibold mt-2 text-primary-dark">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Search available properties</h2>
          <p className="text-center text-muted-foreground mt-2">Use the filters to narrow your search.</p>
          <div className="mt-10">
            <PropertySearch defaultStatus="For Sale" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
