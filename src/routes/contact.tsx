import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PHM Elite Estates" },
      { name: "description", content: "Get in touch with PHM Elite Estates. Visit our office, call, email or send us a message." },
      { property: "og:title", content: "Contact PHM Elite Estates" },
      { property: "og:description", content: "Speak with a premium real estate specialist today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation"
        subtitle="Our team is here to help with buying, selling, renting or property management questions."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-3xl font-bold text-primary-dark">Get in touch</h2>
            <p className="text-muted-foreground">Drop into the office, give us a call, or send a message — whichever suits you best.</p>

            <div className="space-y-4">
              <Item icon={<MapPin size={18} />} label="Office">{site.address}</Item>
              <Item icon={<Phone size={18} />} label="Phone"><a href={site.phoneHref} className="hover:text-primary">{site.phone}</a></Item>
              <Item icon={<Mail size={18} />} label="Email"><a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a></Item>
              <Item icon={<Clock size={18} />} label="Hours">{site.hours}</Item>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=70" alt="Office location map" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-3 bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="grid place-items-center w-9 h-9 rounded-full bg-gold text-gold-foreground shrink-0">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-wider font-semibold text-primary-dark">{label}</div>
        <div className="text-sm text-foreground/85">{children}</div>
      </div>
    </div>
  );
}
