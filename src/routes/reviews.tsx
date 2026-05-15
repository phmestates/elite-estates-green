import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Stories & Reviews — PHM Elite Estates" },
      { name: "description", content: "Read what our clients have to say about their experience buying, selling, and investing with PHM Elite Estates across Australia." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client Success Stories"
        subtitle="Don't just take our word for it. Hear from the families, investors, and developers who trust PHM Elite Estates with their property journeys."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 text-gold mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} fill="currentColor" />
              ))}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">
              Consistently delivering premium results.
            </h2>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="break-inside-avoid bg-secondary rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300"
              >
                <Quote size={36} className="text-gold/20 mb-6" />
                <blockquote className="text-foreground/90 leading-relaxed md:text-lg mb-8">
                  "{t.quote}"
                </blockquote>
                
                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-primary-dark text-lg">{t.name}</p>
                    <p className="text-sm font-medium text-muted-foreground">{t.suburb}</p>
                  </div>
                  {t.role && (
                    <span className="bg-primary/5 text-primary text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                      {t.role}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leave a review CTA block */}
      <section className="py-16 bg-primary-dark border-t border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Have you worked with PHM Elite?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            We deeply value feedback from our clients. If we've recently helped you buy, sell, or invest, we'd love to hear about your experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${site.email}?subject=My Feedback for PHM Elite Estates`}
              className="inline-flex items-center justify-center px-8 h-14 rounded-xl bg-gold text-primary-dark font-bold hover:bg-gold-shine transition-colors"
            >
              Share Your Experience
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
