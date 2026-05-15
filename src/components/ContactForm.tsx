import { useState } from "react";
import { toast } from "sonner";

import { submitLeadForm } from "@/lib/api";

export function ContactForm() {
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      await submitLeadForm({ formType: "Contact", payload });
      toast.success("Thanks — your message has been received.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Phone" name="phone" type="tel" />
      <Field label="Subject" name="subject" />
      <label className="block">
        <span className="block text-xs font-semibold uppercase tracking-wider text-primary-dark mb-1.5">Message</span>
        <textarea name="message" rows={5} required className="w-full px-3 py-2 border border-input rounded-md text-sm" />
      </label>
      <button disabled={busy} className="bg-primary text-primary-foreground font-bold uppercase tracking-wider py-3 rounded hover:bg-primary-dark transition disabled:opacity-60">
        {busy ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-primary-dark mb-1.5">{label}</span>
      <input {...props} className="w-full h-11 px-3 border border-input rounded-md text-sm" />
    </label>
  );
}
