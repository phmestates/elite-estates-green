import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { AppraisalForm } from "@/components/AppraisalForm";
import { CtaBand } from "@/components/CtaBand";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/selling")({
  head: () => ({
    meta: [
      { title: "Selling — PHM Elite Estates" },
      { name: "description", content: "Selling your home? Request a free appraisal from PHM Elite Estates and discover the true market value of your property." },
      { property: "og:title", content: "Selling with PHM Elite Estates" },
      { property: "og:description", content: "Request a no-obligation appraisal today." },
    ],
  }),
  component: SellingPage,
});

const STEPS = [
  { n: "01", t: "Free appraisal", d: "Honest, evidence-based valuation tailored to your property." },
  { n: "02", t: "Marketing strategy", d: "Custom campaign across digital, print and the PHM buyer database." },
  { n: "03", t: "Buyer engagement", d: "Open homes, private inspections and qualified buyer matching." },
  { n: "04", t: "Negotiate & settle", d: "We secure the best price and guide you through to settlement." },
];

function SellingPage() {
  const recentSold = properties.filter((p) => p.status === "Sold").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Selling"
        title="Achieve a premium result with PHM Elite"
        subtitle="A boutique approach, a national reach. Discover what your property is really worth."
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">How we sell your home</h2>
            <p className="mt-3 text-muted-foreground">A clear, considered process designed to maximise your sale price and minimise your stress.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {STEPS.map((s) => (
                <div key={s.n} className="bg-secondary rounded-lg p-5 border border-border">
                  <div className="font-display text-2xl font-bold text-gold">{s.n}</div>
                  <h3 className="font-display text-lg font-semibold mt-1 text-primary-dark">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
          <AppraisalForm />
        </div>
      </section>

      {recentSold.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Recently sold by PHM Elite</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentSold.map((p) => <PropertyCard key={p.id} p={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
