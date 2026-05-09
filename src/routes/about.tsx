import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { agents } from "@/data/agents";
import { Mail, Phone, Award, Target, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PHM Elite Estates" },
      { name: "description", content: "Meet the PHM Elite Estates team — local property specialists committed to delivering premium results for every client." },
      { property: "og:title", content: "About PHM Elite Estates" },
      { property: "og:description", content: "Meet the team behind premium local real estate." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local experts. Premium service. Real results."
        subtitle="PHM Elite Estates is a boutique agency built on integrity, market knowledge and genuine care."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">Our story</h2>
            <p className="mt-4 text-muted-foreground">Founded with a simple ambition — to redefine what premium real estate service looks like in our community — PHM Elite Estates has grown into a trusted boutique agency known for results, integrity and an unwavering client focus.</p>
            <p className="mt-3 text-muted-foreground">Our agents combine deep local knowledge with sophisticated marketing and the kind of attention to detail you only get from a team that genuinely cares about your outcome.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70" alt="Our team at work" className="rounded-lg shadow-xl w-full h-80 object-cover" />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">What we stand for</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: <HeartHandshake size={26} />, t: "Integrity first", d: "Straight talk, transparent advice and no surprises — ever." },
              { icon: <Target size={26} />, t: "Results driven", d: "We're measured by your outcome — not our promises." },
              { icon: <Award size={26} />, t: "Award winning", d: "Recognised for excellence year after year by industry peers." },
            ].map((v) => (
              <div key={v.t} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-gold text-gold-foreground mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-primary-dark">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Meet the team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((a) => (
              <div key={a.email} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-primary-dark">{a.name}</h3>
                  <p className="text-sm text-gold font-semibold uppercase tracking-wider">{a.role}</p>
                  <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Phone size={14} className="text-primary" />{a.phone}</div>
                    <div className="flex items-center gap-2"><Mail size={14} className="text-primary" /><span className="truncate">{a.email}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
