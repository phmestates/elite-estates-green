import { Link } from "@tanstack/react-router";
import { Bed, Bath, Car, MapPin, Maximize2, ArrowRight } from "lucide-react";
import type { Property } from "@/data/properties";

const statusStyles: Record<string, string> = {
  "For Sale": "bg-primary text-primary-foreground",
  "For Rent": "bg-gold text-gold-foreground",
  Sold: "bg-ink text-white",
  Leased: "bg-ink text-white",
};

const categoryStyles: Record<string, string> = {
  "House & Land": "bg-emerald-700/90 text-white",
  "Dual Key": "bg-violet-700/90 text-white",
  "Land": "bg-amber-600/90 text-white",
  "Development Opportunity": "bg-rose-700/90 text-white",
};

const priceTypeLabel: Record<string, string> = {
  fixed: "",
  from: "From ",
  contact: "",
  offers: "",
};

export function PropertyCard({ p, onEnquire }: { p: Property; onEnquire?: (p: Property) => void }) {
  const hasSpecs = p.beds > 0;

  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Status badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${statusStyles[p.status] ?? "bg-muted text-foreground"}`}>
          {p.status}
        </span>
        {/* Category badge */}
        <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${categoryStyles[p.category] ?? "bg-muted text-foreground"}`}>
          {p.category}
        </span>
        {/* Price */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <span className="bg-white/96 text-ink px-3 py-1.5 rounded-lg font-display font-bold text-sm shadow-sm">
            {priceTypeLabel[p.priceType]}{p.priceLabel}
          </span>
          {p.landArea > 0 && (
            <span className="bg-primary-dark/80 text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1">
              <Maximize2 size={11} /> {p.landArea}m²
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base text-primary-dark leading-snug line-clamp-2 mb-1">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
          <MapPin size={13} className="text-gold shrink-0" />
          {p.suburb}, {p.state}
        </p>

        {p.shortDesc && (
          <p className="text-xs text-foreground/60 leading-relaxed line-clamp-2 mb-4">
            {p.shortDesc}
          </p>
        )}

        {/* Specs */}
        {hasSpecs && (
          <div className="flex items-center gap-3 text-sm text-foreground/75 mb-4 mt-auto">
            <span className="flex items-center gap-1"><Bed size={15} className="text-gold" />{p.beds} bed</span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1"><Bath size={15} className="text-gold" />{p.baths} bath</span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1"><Car size={15} className="text-gold" />{p.cars} car</span>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-auto flex gap-2">
          <Link
            to="/property/$id"
            params={{ id: p.id }}
            className="flex-1 text-center text-sm font-bold py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            View Details <ArrowRight size={14} />
          </Link>
          <button
            onClick={() => onEnquire?.(p)}
            className="flex-1 text-center text-sm font-bold py-2.5 rounded-lg border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}
