import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBand } from "@/components/CtaBand";

import { getProperties } from "@/lib/api";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/renting")({
  head: () => ({
    meta: [
      { title: "Renting — PHM Elite Estates" },
      { name: "description", content: "Browse rental properties and landlord services with PHM Elite Estates property management." },
      { property: "og:title", content: "Renting with PHM Elite Estates" },
      { property: "og:description", content: "Quality rentals and trusted property management." },
    ],
  }),
  loader: () => getProperties(),
  component: RentingPage,
});

function RentingPage() {
  const properties = Route.useLoaderData();
  const rentals = properties.filter((p) => p.status === "For Rent");

  return (
    <>
      <PageHero
        eyebrow="Renting"
        title="Quality rentals, trusted property management"
        subtitle="Whether you're searching for your next home or a reliable manager for your investment, we've got you covered."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Available rentals</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentals.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Landlords</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">Property management done right</h2>
            <p className="mt-3 text-muted-foreground">Maximise your investment return with proactive management, transparent reporting and rigorous tenant selection.</p>
            <ul className="mt-6 grid gap-3">
              {[
                "Thorough tenant screening and reference checks",
                "Regular routine inspections with photo reports",
                "Online owner portal with real-time updates",
                "Dedicated property manager — never a call centre",
                "Competitive management fees with no hidden extras",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />{b}</li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70" alt="Modern interior" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
