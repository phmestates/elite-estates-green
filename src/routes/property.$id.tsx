import { createFileRoute, Link } from "@tanstack/react-router";

import { getPropertyById, getProperties } from "@/lib/api";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/data/site";
import {
  Bed, Bath, Car, MapPin, Maximize2, Check, Phone, Mail,
  ArrowLeft, ChevronRight, Home, Share2, ArrowRight, X, ChevronLeft, Image, Loader2
} from "lucide-react";
import { useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import type { Property } from "@/data/properties";
import { submitLeadForm } from "@/lib/api";
import agentImg from "@/assets/harpreetsirgreen.jpeg";
export const Route = createFileRoute("/property/$id")({
  loader: async ({ params }) => {
    const p = await getPropertyById(params.id);
    if (!p) return { p: null, all: [] };
    const all = await getProperties();
    return { p, all };
  },
  component: PropertyDetailPage,
});

const GALLERY_EXTRAS = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=75",
];

const categoryColors: Record<string, string> = {
  "House & Land": "bg-emerald-700 text-white",
  "Dual Key": "bg-violet-700 text-white",
  "Land": "bg-amber-600 text-white",
  "Development Opportunity": "bg-rose-700 text-white",
};

const pricePrefix: Record<string, string> = {
  fixed: "", from: "From ", contact: "", offers: "",
};

function PropertyDetailPage() {
  const { id } = Route.useParams();
  const { p, all: properties } = Route.useLoaderData();

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <div className="text-6xl">🏡</div>
        <h1 className="font-display text-3xl font-bold text-primary-dark">Property not found</h1>
        <p className="text-muted-foreground">This listing may have been removed or the link is incorrect.</p>
        <Link to="/property" className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-dark transition-colors">
          <ArrowLeft size={16} /> View All Properties
        </Link>
      </div>
    );
  }

  const galleryImages = [p.image, ...GALLERY_EXTRAS];
  const related = properties.filter((r) => r.id !== p.id && (r.suburb === p.suburb || r.category === p.category)).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link to="/" className="hover:text-primary-dark flex items-center gap-1"><Home size={13} /> Home</Link>
          <ChevronRight size={13} className="text-border" />
          <Link to="/property" className="hover:text-primary-dark">Properties</Link>
          <ChevronRight size={13} className="text-border" />
          <span className="text-primary-dark font-medium line-clamp-1">{p.title}</span>
        </div>
      </div>

      <PropertyGallery images={galleryImages} title={p.title} />

      <div className="bg-primary-dark text-white py-6">
        <div className="container mx-auto px-4 max-w-6xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${categoryColors[p.category] ?? "bg-muted text-foreground"}`}>{p.category}</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground">{p.status}</span>
            </div>
            <h1 className="font-display text-xl md:text-3xl font-bold text-white">{p.title}</h1>
            <p className="text-white/70 flex items-center gap-1.5 mt-1 text-sm"><MapPin size={14} className="text-gold" />{p.suburb}, {p.state}</p>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Price</p>
            <p className="font-display text-2xl md:text-3xl font-bold text-gold">{pricePrefix[p.priceType]}{p.priceLabel}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {p.beds > 0 && <StatChip icon={<Bed size={20} className="text-gold" />} label="Bedrooms" value={String(p.beds)} />}
              {p.baths > 0 && <StatChip icon={<Bath size={20} className="text-gold" />} label="Bathrooms" value={String(p.baths)} />}
              {p.cars > 0 && <StatChip icon={<Car size={20} className="text-gold" />} label="Garage" value={`${p.cars} car`} />}
              {p.landArea > 0 && <StatChip icon={<Maximize2 size={20} className="text-gold" />} label="Land" value={`${p.landArea}m\u00B2`} />}
              {p.floorArea && <StatChip icon={<Home size={20} className="text-gold" />} label="Floor" value={`${p.floorArea}m\u00B2`} />}
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary-dark mb-5">About this property</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                {p.description.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>

            {p.features.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-primary-dark mb-5">Features & inclusions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border">
                      <span className="w-6 h-6 rounded-full bg-gold/20 grid place-items-center shrink-0"><Check size={13} className="text-gold" /></span>
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="font-display text-2xl font-bold text-primary-dark mb-5">Floor Plan</h2>
              <div className="rounded-2xl border-2 border-dashed border-border bg-secondary flex flex-col items-center justify-center py-16 gap-4">
                <Image size={40} className="text-muted-foreground/40" />
                <p className="font-display font-semibold text-lg text-primary-dark">Floor plan coming soon</p>
                <p className="text-sm text-muted-foreground">Contact our agent to request the full floor plan for this property.</p>
                <a href={site.phoneHref} className="mt-2 inline-flex items-center gap-2 px-6 h-11 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary-dark transition-colors">
                  <Phone size={15} /> Call {site.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-28 space-y-4">
              <div className="bg-primary-dark rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold shrink-0">
                    <img src={agentImg} alt="Agent" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Harpreet Singh Kohli</p>
                    <p className="text-gold text-xs uppercase tracking-widest">Principal & Director</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={site.phoneHref} className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-gold text-primary-dark font-bold text-sm hover:bg-gold-shine transition-all">
                    <Phone size={15} /> {site.phone}
                  </a>
                  <a href={site.phone2Href} className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all">
                    <Phone size={15} /> {site.phone2}
                  </a>
                  <a href={`mailto:${site.email}`} className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 border border-white/20 text-white/80 text-sm hover:bg-white/10 transition-all">
                    <Mail size={15} /> Email Agent
                  </a>
                </div>
              </div>
              <EnquiryForm property={p} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-14 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl font-bold text-primary-dark">Similar properties</h2>
              <Link to="/property" className="text-sm font-bold text-primary hover:text-gold flex items-center gap-1 transition-colors">View all <ArrowRight size={15} /></Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <PropertyCard key={r.id} p={r} />)}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </main>
  );
}

function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[55vh] min-h-[300px] max-h-[520px]">
        <div className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden cursor-pointer group" onClick={() => setLightbox(0)}>
          <img src={images[0]} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        {images.slice(1, 5).map((img, i) => (
          <div key={i} className="hidden md:block relative overflow-hidden cursor-pointer group" onClick={() => setLightbox(i + 1)}>
            <img src={img} alt={`View ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="bg-primary-dark px-4 py-2 flex justify-end">
        <button onClick={() => setLightbox(0)} className="text-white/80 text-sm hover:text-gold flex items-center gap-2 transition-colors">
          <Image size={14} /> View all {images.length} photos
        </button>
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col" onClick={() => setLightbox(null)}>
          <div className="flex items-center justify-between px-4 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/60 text-sm">{lightbox + 1} / {images.length}</span>
            <button onClick={() => setLightbox(null)} className="w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition-colors">
              <X size={20} className="text-white" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center relative px-16" onClick={(e) => e.stopPropagation()}>
            <button onClick={prev} className="absolute left-4 w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition-colors">
              <ChevronLeft size={22} className="text-white" />
            </button>
            <img src={images[lightbox]} alt={`View ${lightbox + 1}`} className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl" />
            <button onClick={next} className="absolute right-4 w-10 h-10 rounded-full bg-white/10 grid place-items-center hover:bg-white/20 transition-colors">
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
          <div className="shrink-0 px-4 py-4 flex gap-2 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
            {images.map((img, i) => (
              <button key={i} onClick={() => setLightbox(i)} className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === lightbox ? "border-gold scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function EnquiryForm({ property: p }: { property: Property }) {
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      propertyId: p.id,
      propertyAddress: `${p.suburb}, ${p.state}`,
      ...Object.fromEntries(formData.entries()),
    };

    try {
      await submitLeadForm({ formType: "Property Enquiry", payload });
      setDone(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="font-display font-bold text-xl text-primary-dark mb-1">Enquire now</h3>
      <p className="text-sm text-muted-foreground mb-5">We respond within one business day.</p>
      {done ? (
        <div className="flex flex-col items-center text-center py-8 gap-3">
          <div className="w-12 h-12 rounded-full bg-gold/20 grid place-items-center"><Check size={24} className="text-gold" /></div>
          <p className="font-display font-bold text-lg text-primary-dark">Enquiry sent!</p>
          <p className="text-sm text-muted-foreground">Our agent will be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input required name="firstName" type="text" placeholder="First name" className="h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors w-full" />
            <input required name="lastName" type="text" placeholder="Last name" className="h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors w-full" />
          </div>
          <input required name="email" type="email" placeholder="Email address" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors" />
          <input required name="phone" type="tel" placeholder="Phone number" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors" />
          <textarea name="message" rows={3} defaultValue={`I am interested in: ${p.title}`} className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-all resize-none" />
          <button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl bg-gold text-primary-dark font-bold text-sm hover:bg-gold-shine hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Enquiry <ArrowRight size={15} /></>}
          </button>
          <p className="text-center text-xs text-muted-foreground">Or call: <a href={site.phoneHref} className="text-primary font-semibold hover:text-gold">{site.phone}</a></p>
        </form>
      )}
    </div>
  );
}

function StatChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-secondary rounded-2xl p-4 border border-border text-center">
      {icon}
      <span className="font-display font-bold text-xl text-primary-dark">{value}</span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}
