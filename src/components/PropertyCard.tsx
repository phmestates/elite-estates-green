import { Link } from "@tanstack/react-router";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

const statusStyles: Record<Property["status"], string> = {
  "For Sale": "bg-primary text-primary-foreground",
  "For Rent": "bg-gold text-gold-foreground",
  Sold: "bg-ink text-white",
  Leased: "bg-ink text-white",
};

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${statusStyles[p.status]}`}>{p.status}</span>
        <span className="absolute bottom-3 right-3 bg-white/95 text-ink px-3 py-1 rounded font-display font-bold text-sm">{p.priceLabel}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">{p.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5"><MapPin size={14} className="text-primary" />{p.address}, {p.suburb}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-foreground/80">
          <span className="flex items-center gap-1.5"><Bed size={16} className="text-primary" />{p.beds}</span>
          <span className="flex items-center gap-1.5"><Bath size={16} className="text-primary" />{p.baths}</span>
          <span className="flex items-center gap-1.5"><Car size={16} className="text-primary" />{p.cars}</span>
          <span className="ml-auto text-xs uppercase tracking-wider text-muted-foreground">{p.type}</span>
        </div>
        <Link to="/property" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-gold transition">View Details →</Link>
      </div>
    </article>
  );
}
