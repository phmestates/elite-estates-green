import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — PHM Elite Estates" },
      { name: "description", content: "Property insights, market updates and expert tips from the PHM Elite Estates team." },
      { property: "og:title", content: "Blog — PHM Elite Estates" },
      { property: "og:description", content: "Property insights and local market updates." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights for buyers, sellers and investors"
        subtitle="Expert advice and local market updates from the PHM Elite team."
        image="https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-semibold">
                  <span>{p.category}</span>
                  <span className="text-muted-foreground">· {p.date}</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-semibold text-primary-dark group-hover:text-primary transition">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Read article →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
