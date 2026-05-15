import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PHM Elite Estates" },
      { name: "description", content: "Get in touch with PHM Elite Estates. Call, email or send us a message — we're available Australia-wide." },
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
        subtitle="Our team is here to help with buying, selling, renting or property finance questions."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-3xl font-bold text-primary-dark">Get in touch</h2>
            <p className="text-muted-foreground">Give us a call or send a message — whichever suits you best. We operate Australia-wide.</p>

            <div className="space-y-4">
              <Item icon={<MapPin size={18} />} label="Office">
                <span className="block">{site.address}</span>
                <span className="text-xs text-muted-foreground">{site.addressDetail}</span>
              </Item>
              <Item icon={<Phone size={18} />} label="Phone">
                <a href={site.phoneHref} className="hover:text-primary block">{site.phone}</a>
                <a href={site.phone2Href} className="hover:text-primary block">{site.phone2}</a>
              </Item>
              <Item icon={<Mail size={18} />} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-primary break-all">{site.email}</a>
              </Item>
              <Item icon={<Clock size={18} />} label="Hours">{site.hours}</Item>
            </div>

            {/* Virtual office visual */}
            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=70"
                alt="Australia landscape — virtual office"
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent flex items-end p-4">
                <div>
                  <p className="text-white font-display font-bold text-lg">Virtual Office</p>
                  <p className="text-white/70 text-sm">Australia-Wide Service</p>
                </div>
              </div>
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
