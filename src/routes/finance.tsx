import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronRight, ChevronLeft, Check, Home, Building, MapPin,
  TrendingUp, Wallet, RefreshCw, DollarSign, Calendar, ArrowRight, Loader2
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import React, { useState, useEffect, useCallback } from "react";
import { submitLeadForm } from "@/lib/api";
import heroicResidence from "@/assets/emerald-twilight-residence.webp";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Property Finance — PHM Elite Estates" },
      { name: "description", content: "Explore property finance options with PHM Elite Estates. Tell us your goals and our specialist will guide you through the right finance solution." },
      { property: "og:title", content: "Property Finance — PHM Elite Estates" },
      { property: "og:description", content: "Find the right finance for your next property move." },
    ],
  }),
  component: FinancePage,
});

const WHY_ITEMS = [
  {
    n: "01",
    t: "Access to top lenders",
    d: "We work with a curated panel of banks, non-banks and private lenders to find the most competitive rates.",
  },
  {
    n: "02",
    t: "Bespoke structuring",
    d: "Every finance solution is structured around your specific goals, not a one-size-fits-all product.",
  },
  {
    n: "03",
    t: "End-to-end guidance",
    d: "From pre-approval to settlement, we manage the process so you can focus on finding your property.",
  },
  {
    n: "04",
    t: "Investor-grade insight",
    d: "For investment buyers, we analyse cash-flow, LVR and portfolio growth to maximise your position.",
  },
];

function FinancePage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const [financeData, setFinanceData] = useState({
    propertyType: "",
    purpose: "",
    financeAmount: "",
    deposit: "",
    timeframe: "",
  });

  return (
    <>
      {/* HERO — Interactive Finance Form */}
      <section className="relative min-h-screen lg:h-[90vh] lg:min-h-[800px] w-full flex flex-col justify-center overflow-hidden bg-primary-dark font-sans text-primary-foreground">
        {/* Background */}
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
          <InteractiveFinanceForm data={financeData} onChange={setFinanceData} />
        </div>
      </section>

      {/* FINANCE DETAILS FORM */}
      <FinanceContactForm financeData={financeData} />

      {/* WHY CHOOSE PHM FINANCE */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Why PHM Finance</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-dark mb-4">
              Finance done the PHM way
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring the same bespoke, client-first approach to property finance as we do to every transaction.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {WHY_ITEMS.map((s) => (
              <div
                key={s.n}
                className="group bg-white rounded-xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-display text-4xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300 mb-4">{s.n}</div>
                <h3 className="font-display text-xl font-bold text-primary-dark mb-3">{s.t}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

// ─── INTERACTIVE FINANCE FORM ─────────────────────────────────────────────────

function StepContainer({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{title}</h2>
      {subtitle && <p className="text-white/70 mb-8">{subtitle}</p>}
      {children}
    </div>
  );
}

function SelectButton({ icon, label, selected, onClick }: { icon: React.ReactNode, label: string, selected: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border transition-all duration-300 ${selected
        ? "bg-gold text-primary-dark border-gold shadow-lg"
        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
        }`}
    >
      <div className={selected ? "text-primary-dark" : "text-gold"}>{icon}</div>
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );
}

function InteractiveFinanceForm({ data, onChange }: { data: any, onChange: (data: any) => void }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const updateForm = useCallback((key: string, value: string) => {
    onChange((prev: any) => ({ ...prev, [key]: value }));
  }, [onChange]);

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const goToContactDetails = () => {
    document.getElementById("finance-contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isNextEnabled = () => {
    if (step === 1) return data.propertyType !== "";
    if (step === 2) return data.purpose !== "";
    if (step === 3) return data.financeAmount !== "";
    if (step === 4) return data.deposit !== "";
    if (step === 5) return data.timeframe !== "";
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
          <StepContainer title="What type of property are you looking to finance?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <SelectButton icon={<Home size={24} />} label="House" selected={data.propertyType === "House"} onClick={() => updateForm("propertyType", "House")} />
              <SelectButton icon={<Building size={24} />} label="Apartment / Unit" selected={data.propertyType === "Apartment"} onClick={() => updateForm("propertyType", "Apartment")} />
              <SelectButton icon={<MapPin size={24} />} label="Land" selected={data.propertyType === "Land"} onClick={() => updateForm("propertyType", "Land")} />
              <SelectButton icon={<RefreshCw size={24} />} label="Other / Unsure" selected={data.propertyType === "Other"} onClick={() => updateForm("propertyType", "Other")} />
            </div>
          </StepContainer>
        )}

        {step === 2 && (
          <StepContainer title="What is the purpose of your finance?">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <SelectButton icon={<Home size={24} />} label="Buy to Live In" selected={data.purpose === "Owner-Occupier"} onClick={() => updateForm("purpose", "Owner-Occupier")} />
              <SelectButton icon={<TrendingUp size={24} />} label="Investment Property" selected={data.purpose === "Investment"} onClick={() => updateForm("purpose", "Investment")} />
              <SelectButton icon={<RefreshCw size={24} />} label="Refinance" selected={data.purpose === "Refinance"} onClick={() => updateForm("purpose", "Refinance")} />
            </div>
          </StepContainer>
        )}

        {step === 3 && (
          <StepContainer title="How much are you looking to finance?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {["Under $500K", "$500K – $1M", "$1M – $2.5M", "$2.5M – $5M", "Above $5M"].map((range) => (
                <SelectButton key={range} icon={<DollarSign size={0} />} label={range} selected={data.financeAmount === range} onClick={() => updateForm("financeAmount", range)} />
              ))}
            </div>
          </StepContainer>
        )}

        {step === 4 && (
          <StepContainer title="What deposit or equity do you have?">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {["Under 10%", "10% – 20%", "20% – 40%", "40% or more"].map((dep) => (
                <SelectButton key={dep} icon={<Wallet size={20} />} label={dep} selected={data.deposit === dep} onClick={() => updateForm("deposit", dep)} />
              ))}
            </div>
          </StepContainer>
        )}

        {step === 5 && (
          <StepContainer title="When are you looking to move?" subtitle="Select your timeframe and we'll connect you with a specialist.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {["Ready now", "Within 1–3 months", "Within 3–6 months", "Within 6–12 months"].map((time) => (
                <SelectButton key={time} icon={<Calendar size={20} />} label={time} selected={data.timeframe === time} onClick={() => updateForm("timeframe", time)} />
              ))}
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
            onClick={goToContactDetails}
            disabled={!isNextEnabled()}
            className={`inline-flex items-center gap-2 px-10 h-14 rounded-lg font-bold text-lg transition-all ${isNextEnabled()
              ? "bg-gold text-primary-dark hover:bg-gold-shine hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1"
              : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
          >
            Connect with a specialist <ArrowRight size={20} />
          </button>
        )}
      </div>

    </div>
  );
}

// ─── FINANCE CONTACT FORM ─────────────────────────────────────────────────────

function FinanceContactForm({ financeData }: { financeData: any }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const contactData = Object.fromEntries(formData.entries());

    try {
      await submitLeadForm({
        formType: "Finance",
        payload: { ...financeData, ...contactData },
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="finance-contact" className="scroll-mt-28 py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">Get in touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-dark text-balance">
              Our finance specialist will contact you
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Share your details and one of our property finance specialists will be in touch within one business day to discuss your options — no obligation, completely confidential.
            </p>

            {/* Trust points */}
            <ul className="mt-8 space-y-3">
              {[
                "No credit check required to enquire",
                "Completely confidential and obligation-free",
                "Access to 30+ lenders including private finance",
                "Specialist response within 1 business day",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-foreground/75">
                  <span className="w-5 h-5 rounded-full bg-gold/20 grid place-items-center shrink-0">
                    <Check size={12} className="text-gold" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-elegant">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 grid place-items-center">
                  <Check size={32} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-dark">Request received!</h3>
                <p className="text-muted-foreground max-w-xs">
                  Thank you — our finance specialist will be in touch with you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                      First Name <span className="text-gold">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-lg h-12 px-4 text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                      Last Name <span className="text-gold">*</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full bg-background border border-border rounded-lg h-12 px-4 text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-background border border-border rounded-lg h-12 px-4 text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                      Phone <span className="text-gold">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-background border border-border rounded-lg h-12 px-4 text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                    Property or Finance Interest
                  </label>
                  <input
                    name="interest"
                    type="text"
                    placeholder="e.g. Buying a house in Sydney, refinancing current mortgage"
                    className="w-full bg-background border border-border rounded-lg h-12 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary-dark/70 uppercase tracking-widest mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Any additional context about your finance needs... (Optional)"
                    className="w-full bg-background border border-border rounded-xl p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-10 h-14 rounded-lg bg-gold text-primary-dark font-bold text-base hover:bg-gold-shine hover:shadow-gold hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : <>Submit Enquiry <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── END ────────────────────────────────────────────────────────────────────
