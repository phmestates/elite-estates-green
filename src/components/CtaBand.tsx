import { Link } from "@tanstack/react-router";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-emerald-deep text-white">
      {/* Golden ambient layers */}
      <div className="absolute inset-0 bg-gradient-gold-rich opacity-[0.18] mix-blend-overlay" />
      <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] rounded-full bg-gold/30 blur-[140px]" />
      <div className="absolute -bottom-32 -left-10 w-[24rem] h-[24rem] rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />
      {/* Top + bottom gold rules */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative container mx-auto px-4 lg:px-8 py-16 md:py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.4em] uppercase text-gold-shine">
            <span className="w-10 h-px bg-gradient-gold" />
            Begin the Conversation
          </div>
          <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.025em] text-balance">
            Ready to make your{" "}
            <span className="italic font-light text-gold-shine">next move?</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-xl text-base md:text-lg font-light leading-relaxed">
            Speak with a PHM Elite specialist today — no obligation, just expert local
            insight tailored to your property goals.
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col gap-3">
          <a
            href={site.phoneHref}
            className="group flex items-center justify-between gap-4 px-5 h-16 rounded-2xl bg-gradient-gold-shine text-gold-foreground shadow-gold hover:shadow-[0_18px_50px_-12px_oklch(0.68_0.16_75/0.7)] transition-all"
          >
            <span className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold-foreground/10">
                <Phone size={16} />
              </span>
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-[0.3em] opacity-70">Call us</span>
                <span className="block font-semibold text-base">{site.phone}</span>
              </span>
            </span>
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <Link
            to="/contact"
            className="group flex items-center justify-between gap-4 px-5 h-16 rounded-2xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-gold/50 text-white transition-all"
          >
            <span className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-gold/15 text-gold">
                <Mail size={16} />
              </span>
              <span className="text-left">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-white/60">Send a message</span>
                <span className="block font-medium text-base">Open contact form</span>
              </span>
            </span>
            <ArrowUpRight size={20} className="text-gold group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
