import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/CtaBand";
import { Mail, Phone } from "lucide-react";
import { agents } from "@/data/agents";
import { site } from "@/data/site";
import founderpic from "@/assets/harpreetsirgreen.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The House of PHM — Elite Estates" },
      { name: "description", content: "Founded on a single conviction — that the most distinguished transactions are those never publicly seen." },
      { property: "og:title", content: "The House of PHM" },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground grain-fixed">

      {/* --- CINEMATIC HERO --- */}
      <section className="relative min-h-[80svh] flex items-end overflow-hidden grain pt-40 pb-20">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=80"
            alt="Luxury Residence"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="eyebrow mb-6 text-gold uppercase tracking-[0.4em] text-[11px] font-bold"
          >
            — The House of PHM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight text-primary-dark"
          >
            We represent <span className="italic text-gold font-light">homes</span>, not merely property.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75 font-light leading-relaxed"
          >
            Founded on a single conviction — that the most distinguished transactions are those never publicly seen — PHM Elite Estates curates a small, considered portfolio across Brisbane and Australia-Wide.
          </motion.p>
        </div>
      </section>

      {/* --- THE MANIFESTO --- */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Image Block */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
                alt="Manifesto Architectural Detail"
                className="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Text Block */}
            <div className="lg:col-span-7 lg:pl-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark tracking-tight">
                Our Manifesto
              </h2>
              <div className="mt-10 space-y-8 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                  We believe that true luxury is defined by discretion, profound market intelligence, and an unwavering commitment to our clients' privacy. At PHM Elite Estates, we do not chase volume; we curate excellence.
                </p>
                <p>
                  Our approach to real estate is entirely bespoke. From the initial private appraisal to the final handover of keys, every transaction is handled directly by the founder, treating your asset with the exact level of reverence it deserves.
                </p>
                <p>
                  We are not just selling square footage. We are transitioning legacies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE FOUNDER --- */}
      <section className="py-24 md:py-32 bg-secondary border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Text Content - Left Side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <p className="text-gold uppercase tracking-[0.3em] text-[11px] font-bold mb-4">The Visionary</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-dark">
                Harpreet Singh Kohli
              </h2>
              <h3 className="mt-3 text-lg font-medium tracking-widest uppercase text-foreground/60">
                Principal / Director
              </h3>

              <div className="mt-10 space-y-6 text-foreground/75 font-light leading-relaxed">
                <p>
                  With a career built on absolute discretion and record-breaking transactions, PHM Elite Estates was established by Harpreet Singh Kohli to serve a highly distinct echelon of the property market.
                </p>
                <p>
                  Moving away from the volume-driven approach of traditional real estate franchises, Harpreet's vision was clear: to offer an intensely personalized, real estate service where the client's privacy, security, and financial outcome are the sole priorities.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-12 pt-10 border-t border-border/60 space-y-5">
                <a href={site.phoneHref} className="flex items-center gap-5 hover:text-primary-dark transition-colors group">
                  <span className="w-10 h-10 rounded-full border border-gold/30 grid place-items-center group-hover:bg-gold transition-colors">
                    <Phone size={16} className="text-gold group-hover:text-primary-dark transition-colors" />
                  </span>
                  <span className="text-sm tracking-[0.1em] text-foreground/80 font-medium">{site.phone}</span>
                </a>
                <a href={site.phone2Href} className="flex items-center gap-5 hover:text-primary-dark transition-colors group">
                  <span className="w-10 h-10 rounded-full border border-gold/30 grid place-items-center group-hover:bg-gold transition-colors">
                    <Phone size={16} className="text-gold group-hover:text-primary-dark transition-colors" />
                  </span>
                  <span className="text-sm tracking-[0.1em] text-foreground/80 font-medium">{site.phone2}</span>
                </a>
                <a href="mailto:admin@phmestates.com" className="flex items-center gap-5 hover:text-primary-dark transition-colors group">
                  <span className="w-10 h-10 rounded-full border border-gold/30 grid place-items-center group-hover:bg-gold transition-colors">
                    <Mail size={16} className="text-gold group-hover:text-primary-dark transition-colors" />
                  </span>
                  <span className="text-sm tracking-[0.1em] text-foreground/80 font-medium">admin@phmestates.com</span>
                </a>
              </div>
            </div>

            {/* Founder Portrait - Right Side */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative shadow-2xl">
                <div className="absolute inset-0  group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img
                  src={founderpic}
                  alt="Harpreet Singh Kohli"
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold/40 -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* --- MEET THE TEAM --- */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gold uppercase tracking-[0.4em] text-[11px] font-bold mb-4"
            >
              — Our People
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-primary-dark tracking-tight"
            >
              Meet the <span className="italic text-gold font-light">team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 max-w-xl mx-auto text-lg text-foreground/70 font-light leading-relaxed"
            >
              A small, dedicated team committed to delivering a premium, personalised experience at every step.
            </motion.p>
          </div>

          {/* Team Grid — adapts gracefully to any number of agents */}
          <div className={`grid gap-8 justify-items-center ${agents.length === 1
            ? "grid-cols-1 max-w-sm mx-auto"
            : agents.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : agents.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}>
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group"
              >
                {/* Portrait */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-5 shadow-lg">
                  {/* <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/10 transition-colors duration-700 z-10" /> */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gold accent bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-shine to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>

                {/* Info */}
                <div className="px-1">
                  <h3 className="font-display text-xl font-bold text-primary-dark">{agent.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold font-semibold">{agent.role}</p>
                  {agent.bio && (
                    <p className="mt-3 text-sm text-foreground/65 leading-relaxed font-light">{agent.bio}</p>
                  )}

                  {/* Contact links */}
                  <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-2">
                    <a
                      href={agent.phoneHref}
                      className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary-dark transition-colors group/link"
                    >
                      <Phone size={13} className="text-gold shrink-0" />
                      <span className="group-hover/link:underline underline-offset-2">{agent.phone}</span>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary-dark transition-colors group/link"
                    >
                      <Mail size={13} className="text-gold shrink-0" />
                      <span className="group-hover/link:underline underline-offset-2 break-all">{agent.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPRAISAL CTA --- */}
      <CtaBand />

    </main>
  );
}