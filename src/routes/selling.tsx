// import { createFileRoute } from "@tanstack/react-router";
// import { PageHero } from "@/components/PageHero";
// import { AppraisalForm } from "@/components/AppraisalForm";
// import { CtaBand } from "@/components/CtaBand";
// import { PropertyCard } from "@/components/PropertyCard";
// import { properties } from "@/data/properties";

// export const Route = createFileRoute("/selling")({
//   head: () => ({
//     meta: [
//       { title: "Selling — PHM Elite Estates" },
//       { name: "description", content: "Selling your home? Request a free appraisal from PHM Elite Estates and discover the true market value of your property." },
//       { property: "og:title", content: "Selling with PHM Elite Estates" },
//       { property: "og:description", content: "Request a no-obligation appraisal today." },
//     ],
//   }),
//   component: SellingPage,
// });

// const STEPS = [
//   { n: "01", t: "Free appraisal", d: "Honest, evidence-based valuation tailored to your property." },
//   { n: "02", t: "Marketing strategy", d: "Custom campaign across digital, print and the PHM buyer database." },
//   { n: "03", t: "Buyer engagement", d: "Open homes, private inspections and qualified buyer matching." },
//   { n: "04", t: "Negotiate & settle", d: "We secure the best price and guide you through to settlement." },
// ];

// function SellingPage() {
//   const recentSold = properties.filter((p) => p.status === "Sold").slice(0, 3);

//   return (
//     <>
//       <PageHero
//         eyebrow="Selling"
//         title="Achieve a premium result with PHM Elite"
//         subtitle="A boutique approach, a national reach. Discover what your property is really worth."
//         image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=70"
//       />

//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 items-start">
//           <div>
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">How we sell your home</h2>
//             <p className="mt-3 text-muted-foreground">A clear, considered process designed to maximise your sale price and minimise your stress.</p>
//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {STEPS.map((s) => (
//                 <div key={s.n} className="bg-secondary rounded-lg p-5 border border-border">
//                   <div className="font-display text-2xl font-bold text-gold">{s.n}</div>
//                   <h3 className="font-display text-lg font-semibold mt-1 text-primary-dark">{s.t}</h3>
//                   <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <AppraisalForm />
//         </div>
//       </section>

//       {recentSold.length > 0 && (
//         <section className="py-16 md:py-20 bg-secondary">
//           <div className="container mx-auto px-4">
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center">Recently sold by PHM Elite</h2>
//             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {recentSold.map((p) => <PropertyCard key={p.id} p={p} />)}
//             </div>
//           </div>
//         </section>
//       )}

//       <CtaBand />
//     </>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ChevronLeft, Check, Home, Building, MapPin, HelpCircle, ArrowRight, DollarSign, Key, Users } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import React, { useState, useEffect, useRef, useCallback } from "react";

import heroicResidence from "@/assets/emerald-twilight-residence.webp";

export const Route = createFileRoute("/selling")({
  head: () => ({
    meta: [
      { title: "Selling & Leasing — PHM Elite Estates" },
      { name: "description", content: "Selling or leasing your home? Request a free appraisal from PHM Elite Estates and discover the true market value of your property." },
      { property: "og:title", content: "Appraisals with PHM Elite Estates" },
      { property: "og:description", content: "Request a no-obligation appraisal today." },
    ],
  }),
  component: SellingPage,
});

const STEPS = [
  { n: "01", t: "Free appraisal", d: "Honest, evidence-based valuation tailored to your property." },
  { n: "02", t: "Marketing strategy", d: "Custom campaign across digital, print and the PHM buyer database." },
  { n: "03", t: "Buyer engagement", d: "Open homes, private inspections and qualified buyer matching." },
  { n: "04", t: "Negotiate & settle", d: "We secure the best price and guide you through to settlement." },
];

function SellingPage() {
  const recentSold = properties.filter((p) => p.status === "Sold").slice(0, 3);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* INTERACTIVE HERO APPRAISAL FORM */}
      <section className="relative min-h-screen lg:h-[90vh] lg:min-h-[800px] w-full flex flex-col justify-center overflow-hidden bg-primary-dark font-sans text-primary-foreground">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={heroicResidence}
            alt="Premium Residence"
            className={`w-full h-full object-cover transition-transform duration-[20s] ease-out ${loaded ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/80 to-primary-dark/95 z-10" />
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">
          <InteractiveAppraisal />
        </div>
      </section>

      {/* HOW WE SELL YOUR HOME */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-dark mb-4">How we represent your home</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A clear, considered process designed to maximise your result, attract the right audience, and minimise your stress.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.n} className="group bg-white rounded-xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="font-display text-4xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300 mb-4">{s.n}</div>
                <h3 className="font-display text-xl font-bold text-primary-dark mb-3">{s.t}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENTLY SOLD */}
      {recentSold.length > 0 && (
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Proven Results</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-dark">Recently sold by PHM Elite</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentSold.map((p) => <PropertyCard key={p.id} p={p} />)}
            </div>
            <div className="mt-16 text-center">
              <Link to="/property" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors uppercase tracking-wider group">
                Explore our past sales <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}

// --- INTERACTIVE APPRAISAL COMPONENT ---

function InteractiveAppraisal() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Form State
  const [formData, setFormData] = useState({
    intent: "",
    type: "",
    priceRange: "",
    timeframe: "",
    propertyStatus: "",
    description: "",
    address: "",
    sameAddress: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Stable callback — never recreated, so FastInput/FastTextarea never get
  // a new function reference on every keystroke (which was causing re-renders).
  const updateForm = useCallback((key: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Validation
  const isNextEnabled = () => {
    if (step === 1) return formData.intent !== "";
    if (step === 2) return formData.type !== "";
    if (step === 3) return formData.priceRange !== "";
    if (step === 4) return formData.timeframe !== "";
    if (step === 5) return formData.propertyStatus !== "" || formData.description.trim() !== "";
    return true;
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-8 lg:mb-12">
        <div className="flex justify-between text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
          <span>Step {step}</span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Dynamic Form Content */}
      <div className="w-full relative min-h-[440px] flex flex-col items-center justify-center">

        {step === 1 && (
          <StepContainer title="How much is my property worth?" subtitle="Connecting you with your area expert.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <SelectButton icon={<DollarSign size={24} />} label="Selling your home" selected={formData.intent === "Selling"} onClick={() => updateForm("intent", "Selling")} />
              <SelectButton icon={<Key size={24} />} label="Leasing your home" selected={formData.intent === "Leasing"} onClick={() => updateForm("intent", "Leasing")} />
            </div>
          </StepContainer>
        )}

        {step === 2 && (
          <StepContainer title="What type of property is it?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <SelectButton icon={<Home size={24} />} label="House" selected={formData.type === "House"} onClick={() => updateForm("type", "House")} />
              <SelectButton icon={<Building size={24} />} label="Unit / Apartment" selected={formData.type === "Unit"} onClick={() => updateForm("type", "Unit")} />
              <SelectButton icon={<MapPin size={24} />} label="Land" selected={formData.type === "Land"} onClick={() => updateForm("type", "Land")} />
              <SelectButton icon={<HelpCircle size={24} />} label="Other" selected={formData.type === "Other"} onClick={() => updateForm("type", "Other")} />
            </div>
          </StepContainer>
        )}

        {step === 3 && (
          <StepContainer title="Your expected price range">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {["Below $1M", "$1M to $2.5M", "$2.5M to $5M", "Above $5M"].map((range) => (
                <SelectButton key={range} label={range} selected={formData.priceRange === range} onClick={() => updateForm("priceRange", range)} />
              ))}
            </div>
          </StepContainer>
        )}

        {step === 4 && (
          <StepContainer title={`How soon do you want to ${formData.intent === "Leasing" ? "lease" : "sell"}?`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {["Immediately", "Within 3 to 6 months", "Within 6 to 12 months", "More than 12 months"].map((time) => (
                <SelectButton key={time} label={time} selected={formData.timeframe === time} onClick={() => updateForm("timeframe", time)} />
              ))}
            </div>
          </StepContainer>
        )}

        {step === 5 && (
          <StepContainer title="What best describes your property?" subtitle="Select an option or provide specific details below.">
            <div className="w-full max-w-2xl flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SelectButton icon={<Home size={20} />} label="Owner Occupied" selected={formData.propertyStatus === "Owner Occupied"} onClick={() => updateForm("propertyStatus", "Owner Occupied")} />
                <SelectButton icon={<Users size={20} />} label="Tenanted" selected={formData.propertyStatus === "Tenanted"} onClick={() => updateForm("propertyStatus", "Tenanted")} />
                <SelectButton icon={<Key size={20} />} label="Vacant" selected={formData.propertyStatus === "Vacant"} onClick={() => updateForm("propertyStatus", "Vacant")} />
              </div>
              <div className="relative">
                <FastTextarea
                  className="w-full h-32 bg-white/5 border border-white/20 rounded-xl p-5 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none text-base"
                  placeholder="Any recent renovations or additional details? (Optional)"
                  value={formData.description}
                  onChange={(val: string) => updateForm("description", val)}
                />
              </div>
            </div>
          </StepContainer>
        )}

        {step === 6 && (
          <StepContainer title="Final details for your appraisal" subtitle="Where should we send your premium market estimation?">
            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-left shadow-2xl">

              <div className="mb-6">
                <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Property Address <span className="text-gold">*</span></label>
                <FastInput
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Street address, suburb, postcode"
                  value={formData.address}
                  onChange={(val: string) => updateForm("address", val)}
                />
                <label className="flex items-center gap-3 mt-4 cursor-pointer group w-fit">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.sameAddress ? 'bg-gold border-gold' : 'border-white/40 group-hover:border-gold'}`}>
                    {formData.sameAddress && <Check size={14} className="text-primary-dark" />}
                  </div>
                  <span className="text-sm text-white/80 select-none">The address above is also my home address</span>
                  <input type="checkbox" className="hidden" checked={formData.sameAddress} onChange={(e) => updateForm("sameAddress", e.target.checked)} />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">First Name <span className="text-gold">*</span></label>
                  <FastInput
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                    value={formData.firstName}
                    onChange={(val: string) => updateForm("firstName", val)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Last Name <span className="text-gold">*</span></label>
                  <FastInput
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                    value={formData.lastName}
                    onChange={(val: string) => updateForm("lastName", val)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Email <span className="text-gold">*</span></label>
                  <FastInput
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                    value={formData.email}
                    onChange={(val: string) => updateForm("email", val)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Phone <span className="text-gold">*</span></label>
                  <FastInput
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-gold transition-colors"
                    value={formData.phone}
                    onChange={(val: string) => updateForm("phone", val)}
                  />
                </div>
              </div>

            </div>
          </StepContainer>
        )}

      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-2xl flex items-center justify-between mt-8 lg:mt-12">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="inline-flex items-center gap-2 px-6 h-12 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white transition-all"
          >
            <ChevronLeft size={18} /> Previous
          </button>
        ) : <div />}

        {step < totalSteps ? (
          <button
            onClick={nextStep}
            disabled={!isNextEnabled()}
            className={`inline-flex items-center gap-2 px-8 h-12 rounded-lg font-bold transition-all ${isNextEnabled()
              ? "bg-gold text-primary-dark shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-gold-shine hover:-translate-y-0.5"
              : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
          >
            Next <ChevronRight size={18} />
          </button>
        ) : (
          <button
            className="inline-flex items-center gap-2 px-10 h-14 rounded-lg bg-gold text-primary-dark font-bold text-lg hover:bg-gold-shine hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all"
          >
            Request Appraisal <Check size={20} />
          </button>
        )}
      </div>

    </div>
  );
}


// --- SIMPLE CONTROLLED INPUTS ---
// Plain controlled inputs. The previous debounced wrappers caused typing
// to feel stuck / lose focus because of the inward-sync useEffect.

function FastInput({ value, onChange, className, type, placeholder }: {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-gramm="false"
    />
  );
}

function FastTextarea({ value, onChange, className, placeholder }: {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  placeholder?: string;
}) {
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-gramm="false"
    />
  );
}


// --- HELPER COMPONENTS ---

function StepContainer({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl text-balance">
          {subtitle}
        </p>
      )}
      <div className={!subtitle ? "mt-4 lg:mt-8 w-full flex justify-center" : "w-full flex justify-center"}>
        {children}
      </div>
    </div>
  );
}

function SelectButton({ icon, label, selected, onClick }: { icon?: React.ReactNode; label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full h-20 sm:h-24 flex items-center justify-center gap-4 px-6 rounded-xl border-2 transition-all duration-300 overflow-hidden group ${selected
        ? "bg-gold border-gold text-primary-dark shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-[1.02]"
        : "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-gold/50"
        }`}
    >
      {icon && (
        <div className={`transition-colors duration-300 ${selected ? "text-primary-dark" : "text-gold"}`}>
          {icon}
        </div>
      )}
      <span className="font-display text-base sm:text-lg font-bold tracking-wide z-10">{label}</span>

      {/* Subtle hover effect background */}
      {!selected && <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
    </button>
  );
}