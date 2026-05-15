import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { properties, SUBURBS, CATEGORIES, type Property, type PropertyCategory } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";
import EnquiryModal from "./EnquiryModal";

const BEDS_OPTIONS = [0, 1, 2, 3, 4, 5];
const PRICE_FROM = [0, 500000, 750000, 900000, 1000000, 1200000, 1500000];
const PRICE_TO = [0, 750000, 1000000, 1200000, 1500000, 2000000, 5000000];

function fmt(n: number) {
  if (n === 0) return "Any";
  return `$${(n / 1000).toFixed(0)}K`;
}

export function PropertySearch({
  defaultStatus,
  defaultSuburb,
  showAll = false,
}: {
  defaultStatus?: Property["status"];
  defaultSuburb?: string;
  showAll?: boolean;
}) {
  const [suburb, setSuburb] = useState(defaultSuburb ?? "");
  const [category, setCategory] = useState<PropertyCategory | "">("");
  const [bedsMin, setBedsMin] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [enquiryProp, setEnquiryProp] = useState<Property | null>(null);

  const results = useMemo(() => {
    return properties.filter((p) => {
      if (defaultStatus && p.status !== defaultStatus) return false;
      if (suburb && !p.suburb.toLowerCase().includes(suburb.toLowerCase())) return false;
      if (category && p.category !== category) return false;
      if (bedsMin && p.beds < bedsMin) return false;
      if (priceFrom && p.price > 0 && p.price < priceFrom) return false;
      if (priceTo && p.price > 0 && p.price > priceTo) return false;
      return true;
    });
  }, [suburb, category, bedsMin, priceFrom, priceTo, defaultStatus]);

  const hasFilters = suburb || category || bedsMin || priceFrom || priceTo;

  const clearAll = () => {
    setSuburb(defaultSuburb ?? "");
    setCategory("");
    setBedsMin(0);
    setPriceFrom(0);
    setPriceTo(0);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-4 md:p-5 mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Suburb search */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
              placeholder="Search suburb or location..."
              list="suburb-list"
              className="w-full h-12 pl-11 pr-4 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm font-medium"
            />
            <datalist id="suburb-list">
              {SUBURBS.map((s) => <option key={s} value={s} />)}
            </datalist>
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as PropertyCategory | "")}
            className="h-12 px-4 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm font-medium min-w-[180px]"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>

          {/* Toggle filters */}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`h-12 px-5 rounded-xl border text-sm font-semibold flex items-center gap-2 transition-all ${showFilters ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary text-foreground/70 hover:text-primary-dark"}`}
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
            <div>
              <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">Min Bedrooms</label>
              <select value={bedsMin} onChange={(e) => setBedsMin(Number(e.target.value))} className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors">
                {BEDS_OPTIONS.map((n) => <option key={n} value={n}>{n === 0 ? "Any" : `${n}+`}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">Price From</label>
              <select value={priceFrom} onChange={(e) => setPriceFrom(Number(e.target.value))} className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors">
                {PRICE_FROM.map((p) => <option key={p} value={p}>{fmt(p)}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">Price To</label>
              <select value={priceTo} onChange={(e) => setPriceTo(Number(e.target.value))} className="w-full h-11 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:border-gold transition-colors">
                {PRICE_TO.map((p) => <option key={p} value={p}>{fmt(p)}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              {hasFilters && (
                <button onClick={clearAll} className="w-full h-11 px-4 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:text-destructive hover:border-destructive flex items-center justify-center gap-2 transition-colors">
                  <X size={14} /> Clear filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-primary-dark">{results.length}</span> {results.length === 1 ? "property" : "properties"} found
          {suburb && <span className="ml-1">in <span className="font-semibold text-primary-dark">{suburb}</span></span>}
        </p>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-gold transition-colors flex items-center gap-1">
            <X size={12} /> Clear all
          </button>
        )}
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.id} p={p} onEnquire={setEnquiryProp} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground bg-secondary rounded-2xl border border-border">
          <div className="text-4xl mb-4">🏡</div>
          <p className="font-display font-bold text-xl text-primary-dark mb-2">No properties found</p>
          <p className="text-sm">Try adjusting your filters or clearing your search.</p>
          <button onClick={clearAll} className="mt-6 px-6 h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-dark transition-colors">
            Clear filters
          </button>
        </div>
      )}

      {/* Enquiry Modal */}
      {enquiryProp && (
        <EnquiryModal property={enquiryProp} onClose={() => setEnquiryProp(null)} />
      )}
    </div>
  );
}
