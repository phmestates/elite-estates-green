import { useState } from "react";
import { X, Phone, Check, MapPin, Bed, Bath, Car } from "lucide-react";
import type { Property } from "@/data/properties";
import { site } from "@/data/site";

export default function EnquiryModal({ property: p, onClose }: { property: Property; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm animate-in fade-in duration-300" />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-lg animate-in zoom-in-95 fade-in duration-300 overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="relative h-40 overflow-hidden shrink-0">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center hover:bg-white/40 transition-colors"
          >
            <X size={18} className="text-white" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">{p.category}</p>
            <h3 className="text-white font-display font-bold text-base leading-tight line-clamp-2">{p.title}</h3>
          </div>
        </div>

        {/* Property quick specs */}
        <div className="px-5 py-3 border-b border-border bg-secondary flex items-center gap-4 flex-wrap text-sm text-foreground/70">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gold" />{p.suburb}, {p.state}</span>
          {p.beds > 0 && <><span className="text-border">·</span><span className="flex items-center gap-1"><Bed size={13} className="text-gold" />{p.beds}</span></>}
          {p.baths > 0 && <><span className="text-border">·</span><span className="flex items-center gap-1"><Bath size={13} className="text-gold" />{p.baths}</span></>}
          {p.cars > 0 && <><span className="text-border">·</span><span className="flex items-center gap-1"><Car size={13} className="text-gold" />{p.cars}</span></>}
          <span className="ml-auto font-bold text-primary-dark">{p.priceLabel}</span>
        </div>

        <div className="p-5">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 grid place-items-center">
                <Check size={28} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary-dark">Enquiry Received!</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Thank you — one of our specialists will be in touch with you shortly regarding this property.
              </p>
              <div className="flex flex-col gap-2 w-full mt-2">
                <a href={site.phoneHref} className="w-full h-11 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors">
                  <Phone size={15} /> Call {site.phone}
                </a>
                <button onClick={onClose} className="w-full h-11 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-muted-foreground mb-2">
                Complete this form and our agent will contact you about this property within one business day.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-1.5">First Name *</label>
                  <input required type="text" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-1.5">Last Name *</label>
                  <input required type="text" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-1.5">Email *</label>
                <input required type="email" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-1.5">Phone *</label>
                <input required type="tel" className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-1.5">Message</label>
                <textarea rows={3} placeholder="Any questions about this property? (Optional)" className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none" />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 h-12 rounded-xl bg-gold text-primary-dark font-bold text-sm hover:bg-gold-shine hover:-translate-y-0.5 hover:shadow-gold transition-all">
                  Send Enquiry
                </button>
                <button type="button" onClick={onClose} className="h-12 px-5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">
                  Cancel
                </button>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Or call directly: <a href={site.phoneHref} className="text-primary font-semibold hover:text-gold">{site.phone}</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
