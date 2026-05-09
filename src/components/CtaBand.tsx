import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export function CtaBand() {
  return (
    <section className="relative bg-gold text-gold-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to make your next move?</h2>
          <p className="mt-2 text-gold-foreground/80 max-w-xl">Speak with a PHM Elite specialist today — no obligation, just expert local insight tailored to your property goals.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 h-12 rounded font-semibold hover:bg-primary-dark transition"><Phone size={16} /> Call Us</a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-ink text-white px-5 h-12 rounded font-semibold hover:bg-ink/80 transition"><Mail size={16} /> Contact Form</Link>
        </div>
      </div>
    </section>
  );
}
