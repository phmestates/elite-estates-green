import { useState } from "react";
import { toast } from "sonner";

export function AppraisalForm() {
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="bg-card border border-border rounded-lg p-6 grid gap-4 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setBusy(true);
        setTimeout(() => {
          setBusy(false);
          toast.success("Appraisal request received — we'll be in touch within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
    >
      <h3 className="font-display text-2xl font-bold text-primary-dark">Request a Free Appraisal</h3>
      <p className="text-sm text-muted-foreground -mt-2">Get a no-obligation estimate of your property's market value.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input label="Full Name" name="name" required />
        <Input label="Phone" name="phone" type="tel" required />
      </div>
      <Input label="Email" name="email" type="email" required />
      <Input label="Property Address" name="address" required />
      <label className="block">
        <span className="block text-xs font-semibold uppercase tracking-wider text-primary-dark mb-1.5">Notes</span>
        <textarea name="notes" rows={4} className="w-full px-3 py-2 border border-input rounded-md text-sm" />
      </label>
      <button disabled={busy} className="bg-primary text-primary-foreground font-bold uppercase tracking-wider py-3 rounded hover:bg-primary-dark transition disabled:opacity-60">
        {busy ? "Sending…" : "Request Appraisal"}
      </button>
    </form>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-primary-dark mb-1.5">{label}</span>
      <input {...props} className="w-full h-11 px-3 border border-input rounded-md text-sm" />
    </label>
  );
}
