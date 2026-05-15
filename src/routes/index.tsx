// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Star, Search, ClipboardEdit, ChevronRight, Mail, Award, ShieldCheck, Users, TrendingUp, Quote, MapPin, ArrowRight, Sparkles, Zap, LayoutGrid } from "lucide-react";
// import { PropertySearch } from "@/components/PropertySearch";
// import { PropertyCard } from "@/components/PropertyCard";
// import { CtaBand } from "@/components/CtaBand";
// import { properties } from "@/data/properties";
// import { testimonials } from "@/data/testimonials";
// import { useEffect, useState } from "react";

// import heroicResidence from "@/assets/emerald-twilight-residence.webp";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "PHM Elite Estates — Premium Real Estate Agents Dedicated to Results" },
//       { name: "description", content: "The leading real estate experts in your area. Buy, sell or rent with PHM Elite Estates — local market leaders you can trust." },
//       { property: "og:title", content: "PHM Elite Estates — Premium Real Estate" },
//       { property: "og:description", content: "Local experts. Premium service. Real results." },
//     ],
//   }),
//   component: HomePage,
// });

// function HomePage() {
//   const featured = properties.filter((p) => p.status === "For Sale").slice(0, 6);
//   const [loaded, setLoaded] = useState(false);

//   // Trigger animations after component mounts
//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//          @keyframes customKenBurns {
//            0% { transform: scale(1); opacity: 0; }
//            /* Fast fade-in while motion already started */
//            10% { opacity: 0.9; } 
//            /* Continuous linear motion */
//            100% { transform: scale(1.1); opacity: 0.9; }
//          }
//          .animate-immediate-cinema {
//            /* forwards ensures it stays at scale(1.1) at the end */
//            animation: customKenBurns 30s linear forwards; 
//          }
//        `}
//       </style>

//       {/* HERO SECTION - MOBILE-FIRST, CINEMATIC REDESIGN */}
//       <section className="relative min-h-screen lg:h-[95vh] lg:min-h-[700px] w-full flex items-center overflow-hidden bg-primary-dark font-sans text-primary-foreground selection:bg-gold-soft selection:text-ink">

//         {/* 1. Cinematic Background with IMMEDIATE Slow Zoom */}
//         <div className="absolute inset-0 z-0 h-full w-full">
//           <img
//             src={heroicResidence}
//             alt="PHM Elite Estates - Premium Australian Residence at Twilight"
//             className="w-full h-full object-cover animate-immediate-cinema"
//           />
//           {/* CINEMATIC LAYERING: Optimized gradients for text pop and depth */}
//           <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/100 via-primary-dark/85 to-primary-dark/40 lg:via-primary-dark/70 lg:to-transparent z-10" />
//           <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/20 to-black/10 z-10" />
//           <div className="absolute inset-0 grain opacity-40 mix-blend-overlay z-10" />
//         </div>

//         {/* 2. Main Content Grid - Refined Asymmetry */}
//         <div className="relative z-20 container mx-auto px-5 lg:px-12 grid lg:grid-cols-12 gap-x-12 pt-24 pb-16 lg:pt-28 lg:pb-20">

//           {/* Left Column - Main Branding & Typography */}
//           <div
//             className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 ease-out-sine delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
//               }`}
//           >
//             {/* Elegant, Non-Intrusive Eyebrow */}
//             <div className="flex items-center gap-4 mb-6 lg:mb-8">
//               <span className="w-12 h-[2px] bg-gold" />
//               <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] font-bold">
//                 PHM Elite Estates
//               </p>
//             </div>

//             {/* Massive Architectural Typography (Jakarta Sans) */}
//             <h1 className="font-display text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] lg:leading-[1.0] tracking-tighter mb-8 drop-shadow-2xl text-balance">
//               A NEW STANDARD <br className="hidden md:block" />
//               FOR{" "}
//               {/* Gold Shimmer Text Effect */}
//               <span className="text-gold-shine relative inline-block whitespace-nowrap">Refined
//                 <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 lg:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
//                   <path d="M2 8 Q 50 2, 100 6 T 198 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" className="text-gold" />
//                 </svg>
//               </span>{" "}
//               living.
//             </h1>

//             {/* Subtitle */}
//             <p className="text-white/80 text-base md:text-lg font-light max-w-xl border-l-[3px] border-gold/40 pl-6 mb-12 shadow-elegant">
//               Representing Australia's most considered homes — pairing deep local knowledge with the discretion and craft of a real estate.
//             </p>
//           </div>

//           {/* Right Column - Interactive Appraisal Area (Inspired by Screenshot) */}
//           <div
//             className={`lg:col-span-5 flex items-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 ease-out-sine delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//           >
//             <div className="w-full lg:max-w-[28rem] bg-white/95 backdrop-blur-xl rounded-xl p-6 lg:p-8 shadow-2xl border border-white/20">

//               <div className="text-center mb-6">
//                 <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-dark tracking-tight mb-2">
//                   What's your property worth?
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   The local experts that you can rely on and trust.
//                 </p>
//               </div>

//               {/* Seamless Attached Input & Button */}
//               <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-input bg-white shadow-sm focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all">
//                 <div className="relative flex-1">
//                   <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-dark/50 shrink-0" />
//                   <input
//                     type="text"
//                     placeholder="Property address"
//                     className="w-full h-14 pl-11 pr-4 bg-transparent text-primary-dark placeholder:text-muted-foreground/60 focus:outline-none text-sm font-medium"
//                   />
//                 </div>
//                 <Link
//                   to="/selling"
//                   className="flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-dark font-semibold px-6 h-14 transition-colors duration-300 sm:w-auto w-full text-sm whitespace-nowrap shadow-inner"
//                 >
//                   What's My Home Worth?
//                 </Link>
//               </div>

//               {/* Trust Indicators */}
//               <div className="mt-8 pt-6 border-t border-border/50 flex flex-col items-center justify-center gap-2">
//                 <div className="flex items-center gap-2 text-[13px] font-bold text-primary-dark uppercase tracking-wider">
//                   <Award size={18} className="text-gold" />
//                   Award Winning Agency
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm font-medium text-primary-dark">4.9 out of 5</p>
//                   <p className="text-xs text-muted-foreground mt-0.5">Based on 485 reviews</p>
//                 </div>
//                 <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-primary">
//                   <Star size={12} className="fill-primary text-primary" />
//                   Rate My Agent
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* 3. Hairline Structural Separation Border */}
//         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

//       </section>

//       {/* FEATURE CARDS */}
//       <section className="py-16 md:py-20 bg-secondary">
//         <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
//           <FeatureCard icon={<Search size={26} />} title="Interested in Buying?" body="Use our smart search to find your dream property. Filter by suburb, category, price and more." link={{ to: "/buying", label: "Start searching" }} />
//           <FeatureCard icon={<ClipboardEdit size={26} />} title="Request an Appraisal" body="How much is your home worth? Find out the value of your home in today's market." link={{ to: "/selling", label: "Sell your home" }} />
//           <FeatureCard icon={<Mail size={26} />} title="Receive Email Alerts" body="Be the first to know about new listings that match your search criteria." link={{ to: "/contact", label: "Subscribe now" }} />
//         </div>
//       </section>

//       {/* FEATURED PROPERTIES */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <SectionHeading eyebrow="Featured listings" title="Properties for sale" subtitle="A curated selection of homes currently on the market with PHM Elite Estates." />
//           <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
//           </div>
//           <div className="mt-10 text-center">
//             <Link to="/property" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 h-12 rounded font-semibold uppercase tracking-wider hover:bg-primary-dark transition">View All Properties</Link>
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-16 md:py-20 bg-primary-dark text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-2xl mx-auto">
//             <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">Why PHM Elite</p>
//             <h2 className="font-display text-3xl md:text-4xl font-bold">A premium experience, every step of the way</h2>
//           </div>
//           <div className="mt-12 grid gap-8 md:grid-cols-4">
//             {[
//               { icon: <ShieldCheck size={28} />, t: "Trusted Locally", d: "Decades of combined experience in your neighbourhood." },
//               { icon: <TrendingUp size={28} />, t: "Premium Results", d: "Track record of achieving above-reserve sale prices." },
//               { icon: <Users size={28} />, t: "Personal Service", d: "A dedicated agent from appraisal through to settlement." },
//               { icon: <Award size={28} />, t: "Award Winning", d: "Recognised year after year for service excellence." },
//             ].map((v) => (
//               <div key={v.t} className="text-center">
//                 <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-gold text-gold-foreground mb-4">{v.icon}</div>
//                 <h3 className="font-display text-lg font-semibold">{v.t}</h3>
//                 <p className="text-sm text-white/75 mt-2">{v.d}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="py-16 md:py-20">
//         <div className="container mx-auto px-4">
//           <SectionHeading eyebrow="Client stories" title="Hear it from our happy clients" />
//           <div className="mt-10 grid gap-6 md:grid-cols-3">
//             {testimonials.map((t) => (
//               <figure key={t.name} className="bg-card border border-border rounded-lg p-6 shadow-sm">
//                 <Quote className="text-gold" />
//                 <blockquote className="mt-3 text-foreground/85 italic">“{t.quote}”</blockquote>
//                 <figcaption className="mt-4 text-sm font-semibold text-primary-dark">{t.name} · <span className="font-normal text-muted-foreground">{t.suburb}</span></figcaption>
//               </figure>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CtaBand />
//     </>
//   );
// }

// function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
//   return (
//     <div className="text-center max-w-2xl mx-auto">
//       {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">{eyebrow}</p>}
//       <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark">{title}</h2>
//       {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
//     </div>
//   );
// }

// function FeatureCard({ icon, title, body, link }: { icon: React.ReactNode; title: string; body: string; link: { to: string; label: string } }) {
//   return (
//     <div className="bg-card rounded-lg p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition text-center">
//       <div className="mx-auto w-14 h-14 grid place-items-center rounded-full bg-gold text-gold-foreground mb-4">{icon}</div>
//       <h3 className="font-display text-xl font-semibold text-primary-dark">{title}</h3>
//       <p className="mt-2 text-sm text-muted-foreground">{body}</p>
//       <Link to={link.to} className="mt-4 inline-block text-sm font-semibold text-primary hover:text-gold transition">{link.label} →</Link>
//     </div>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Landmark, Mail, ShieldCheck, Users, TrendingUp, Quote, Award } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBand } from "@/components/CtaBand";
import { properties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import { useEffect, useState } from "react";

import heroicResidence from "@/assets/emerald-twilight-residence.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PHM Elite Estates — Premium Real Estate Agents Dedicated to Results" },
      { name: "description", content: "The leading real estate experts in your area. Buy, sell or rent with PHM Elite Estates — local market leaders you can trust." },
      { property: "og:title", content: "PHM Elite Estates — Premium Real Estate" },
      { property: "og:description", content: "Local experts. Premium service. Real results." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = properties.filter((p) => p.status === "For Sale").slice(0, 6);
  const [loaded, setLoaded] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>
        {`
         @keyframes customKenBurns {
           0% { transform: scale(1); opacity: 0; }
           10% { opacity: 0.9; } 
           100% { transform: scale(1.1); opacity: 0.9; }
         }
         .animate-immediate-cinema {
           animation: customKenBurns 30s linear forwards; 
         }
       `}
      </style>

      {/* HERO SECTION - MOBILE-FIRST, CINEMATIC REDESIGN */}
      <section className="relative min-h-screen lg:h-[95vh] lg:min-h-[800px] w-full flex items-center overflow-hidden bg-primary-dark font-sans text-primary-foreground selection:bg-gold-soft selection:text-ink">

        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <img
            src={heroicResidence}
            alt="PHM Elite Estates - Premium Australian Residence at Twilight"
            className="w-full h-full object-cover animate-immediate-cinema"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/100 via-primary-dark/85 to-primary-dark/40 lg:via-primary-dark/70 lg:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/20 to-black/10 z-10" />
          <div className="absolute inset-0 grain opacity-40 mix-blend-overlay z-10" />
        </div>

        {/* Main Content Grid - Balanced 50/50 for wider desktop console */}
        <div className="relative z-20 container mx-auto px-5 lg:px-10 xl:px-12 grid lg:grid-cols-2 gap-x-12 pt-28 pb-20 lg:pt-32 lg:pb-24 items-center">

          {/* Left Column - Main Branding & Typography */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ease-out-sine delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <span className="w-12 h-[2px] bg-gold" />
              <p className="text-white/80 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold">
                PHM Elite Estates
              </p>
            </div>

            {/* Typography */}
            <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold leading-[1.05] lg:leading-[1.0] tracking-tighter mb-8 drop-shadow-2xl text-balance">
              A NEW STANDARD <br className="hidden md:block" />
              FOR{" "}
              <span className="text-gold-shine relative inline-block whitespace-nowrap">Refined
                <svg className="absolute -bottom-2 lg:-bottom-3 left-0 w-full h-3 lg:h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" className="text-gold" />
                </svg>
              </span>{" "}
              living.
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base md:text-lg lg:text-xl font-light max-w-xl border-l-[3px] border-gold/40 pl-6 mb-12 shadow-elegant leading-relaxed">
              Representing Australia's most considered homes — pairing deep local knowledge with the discretion and craft of a real estate leader.
            </p>
          </div>

          {/* Right Column - Enhanced Interactive Appraisal Console */}
          <div
            className={`flex items-center lg:justify-end mt-10 lg:mt-0 transition-all duration-1000 ease-out-sine delay-600 w-full ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Widened max-w and increased padding for breathing room */}
            <div className="w-full max-w-[38rem] bg-white/98 backdrop-blur-3xl rounded-2xl p-7 sm:p-10 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden ml-auto">

              {/* Premium Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-gold-shine to-gold" />

              {/* Console Header */}
              <div className="text-center mb-10 mt-2">
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-dark tracking-tight mb-4">
                  What's your property worth?
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg">
                  The local experts that you can rely on and trust.
                </p>
              </div>

              {/* Massive, Seamless Input & Button Group */}
              <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border-2 border-input bg-white shadow-sm focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300">
                <div className="relative flex-1 min-w-[240px]">
                  <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-primary-dark/40 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter property address..."
                    className="w-full h-14 sm:h-16 pl-14 pr-4 bg-transparent text-primary-dark placeholder:text-muted-foreground/60 focus:outline-none text-base font-medium"
                  />
                </div>
                <Link
                  to="/selling"
                  className="flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-dark font-semibold px-6 sm:px-8 h-14 sm:h-16 transition-colors duration-300 w-full sm:w-auto text-[15px] sm:text-base whitespace-nowrap shadow-inner border-l-0 sm:border-l border-primary/20 shrink-0"
                >
                  What's My Home Worth?
                </Link>
              </div>

              {/* Finance Your Property CTA Box */}
              <div className="mt-10 pt-10 border-t border-border/60">
                <div className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300 border border-primary/10 rounded-xl p-6 lg:p-7 flex flex-col sm:flex-row items-center gap-5 lg:gap-6 text-center sm:text-left group">
                  <div className="w-14 h-14 shrink-0 grid place-items-center rounded-full bg-white shadow-sm text-primary group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                    <Landmark size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xl text-primary-dark leading-tight">Finance Your Property</h4>
                    <p className="text-sm sm:text-base text-primary-dark/70 mt-1.5">Tailored finance solutions from our specialist team.</p>
                  </div>
                  <Link
                    to="/finance"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground font-semibold px-8 h-12 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 w-full sm:w-auto text-base shrink-0"
                  >
                    Explore Finance
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Structural Separation Border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-3">
          <FeatureCard icon={<Search size={28} />} title="Interested in Buying?" body="Use our smart search to find your dream property. Filter by suburb, category, price and more." link={{ to: "/buying", label: "Start searching" }} />
          <FeatureCard icon={<Landmark size={28} />} title="Finance Your Property" body="Explore tailored finance options with our specialist. From first home to investment — we find the right fit." link={{ to: "/finance", label: "Explore finance" }} />
          <FeatureCard icon={<Mail size={28} />} title="Receive Email Alerts" body="Be the first to know about new listings that match your search criteria." link={{ to: "/contact", label: "Subscribe now" }} />
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Featured listings" title="Properties for sale" subtitle="A curated selection of homes currently on the market with PHM Elite Estates." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/property" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 h-14 rounded font-bold uppercase tracking-wider hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">Why PHM Elite</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">A premium experience, every step of the way</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              { icon: <ShieldCheck size={32} />, t: "Trusted Locally", d: "Decades of combined experience in your neighbourhood." },
              { icon: <TrendingUp size={32} />, t: "Premium Results", d: "Track record of achieving above-reserve sale prices." },
              { icon: <Users size={32} />, t: "Personal Service", d: "A dedicated agent from appraisal through to settlement." },
              { icon: <Award size={32} />, t: "Award Winning", d: "Recognised year after year for service excellence." },
            ].map((v) => (
              <div key={v.t} className="text-center group">
                <div className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-gold text-gold-foreground mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/20">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold">{v.t}</h3>
                <p className="text-sm text-white/70 mt-3 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Client stories" title="Hear it from our happy clients" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <Quote size={32} className="text-gold opacity-50 mb-4" />
                <blockquote className="text-foreground/85 italic leading-relaxed text-lg">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-bold text-primary-dark uppercase tracking-wider">{t.name} <span className="text-muted-foreground font-medium normal-case tracking-normal ml-1">· {t.suburb}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}

function FeatureCard({ icon, title, body, link }: { icon: React.ReactNode; title: string; body: string; link: { to: string; label: string } }) {
  return (
    <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center group">
      <div className="mx-auto w-16 h-16 grid place-items-center rounded-full bg-gold text-gold-foreground mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gold/20">{icon}</div>
      <h3 className="font-display text-2xl font-bold text-primary-dark">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
      <Link to={link.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors uppercase tracking-wider group-hover:gap-3">
        {link.label} <span className="transition-all">&rarr;</span>
      </Link>
    </div>
  );
}