import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { properties, SUBURBS, type Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

const TYPES: Property["type"][] = ["House", "Unit", "Townhouse", "Villa", "Duplex"];
const PRICES = [0, 250000, 500000, 750000, 1000000, 1500000, 2000000, 5000000];

export function PropertySearch({ defaultStatus }: { defaultStatus?: Property["status"] }) {
  const [suburb, setSuburb] = useState("");
  const [type, setType] = useState("");
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [bedsMin, setBedsMin] = useState(0);
  const [baths, setBaths] = useState(0);
  const [airCon, setAirCon] = useState(false);
  const [pool, setPool] = useState(false);
  const [security, setSecurity] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    return properties.filter((p) => {
      if (defaultStatus && p.status !== defaultStatus) return false;
      if (suburb && p.suburb !== suburb) return false;
      if (type && p.type !== type) return false;
      if (priceFrom && p.price < priceFrom) return false;
      if (priceTo && p.price > priceTo) return false;
      if (bedsMin && p.beds < bedsMin) return false;
      if (baths && p.baths < baths) return false;
      if (airCon && !p.features.airCon) return false;
      if (pool && !p.features.pool) return false;
      if (security && !p.features.security) return false;
      return true;
    });
  }, [suburb, type, priceFrom, priceTo, bedsMin, baths, airCon, pool, security, defaultStatus]);

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        className="bg-secondary border border-border rounded-lg p-5 md:p-6 grid gap-4 md:grid-cols-4"
      >
        <Field label="Suburb">
          <select value={suburb} onChange={(e) => setSuburb(e.target.value)} className="select-base">
            <option value="">Any</option>
            {SUBURBS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field label="House Category">
          <select value={type} onChange={(e) => setType(e.target.value)} className="select-base">
            <option value="">Any</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Price From">
          <select value={priceFrom} onChange={(e) => setPriceFrom(Number(e.target.value))} className="select-base">
            <option value={0}>Any</option>
            {PRICES.map((p) => <option key={p} value={p}>${p.toLocaleString()}</option>)}
          </select>
        </Field>
        <Field label="Price To">
          <select value={priceTo} onChange={(e) => setPriceTo(Number(e.target.value))} className="select-base">
            <option value={0}>Any</option>
            {PRICES.map((p) => <option key={p} value={p}>${p.toLocaleString()}</option>)}
          </select>
        </Field>
        <Field label="Bedrooms Min">
          <select value={bedsMin} onChange={(e) => setBedsMin(Number(e.target.value))} className="select-base">
            <option value={0}>Any</option>
            {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n}+</option>)}
          </select>
        </Field>
        <Field label="Bathrooms">
          <select value={baths} onChange={(e) => setBaths(Number(e.target.value))} className="select-base">
            <option value={0}>Any</option>
            {[1,2,3,4].map((n) => <option key={n} value={n}>{n}+</option>)}
          </select>
        </Field>
        <div className="md:col-span-2 flex flex-wrap items-end gap-4 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" checked={airCon} onChange={(e) => setAirCon(e.target.checked)} className="accent-primary" />Air Conditioning</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={pool} onChange={(e) => setPool(e.target.checked)} className="accent-primary" />Pool</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={security} onChange={(e) => setSecurity(e.target.checked)} className="accent-primary" />Security</label>
        </div>
        <button type="submit" className="md:col-span-4 inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground font-bold uppercase tracking-wider py-3 rounded hover:brightness-95 transition">
          <Search size={18} /> Search Properties
        </button>
      </form>

      <style>{`.select-base{width:100%;height:42px;padding:0 12px;border:1px solid var(--border);background:white;border-radius:6px;color:var(--ink);font-size:14px}`}</style>

      {(submitted || defaultStatus) && (
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-4">{results.length} {results.length === 1 ? "property" : "properties"} found</p>
          {results.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => <PropertyCard key={p.id} p={p} />)}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-muted rounded-lg">No properties match your filters. Try widening your search.</div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-primary-dark mb-1.5">{label}</span>
      {children}
    </label>
  );
}
