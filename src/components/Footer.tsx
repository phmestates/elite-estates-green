import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { site, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold text-white">PHM ELITE <span className="text-gold">ESTATES</span></div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">{site.tagline} Local market expertise, premium service, real results.</p>
          <div className="mt-5 flex gap-3">
            <a href={site.socials.facebook} aria-label="Facebook" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Facebook size={16} /></a>
            <a href={site.socials.instagram} aria-label="Instagram" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Instagram size={16} /></a>
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Linkedin size={16} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-gold transition">{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>
                <span className="block">{site.address}</span>
                <span className="text-white/50 text-xs">{site.addressDetail}</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-gold shrink-0" />
              <a href={site.phoneHref} className="hover:text-gold">{site.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-gold shrink-0" />
              <a href={site.phone2Href} className="hover:text-gold">{site.phone2}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-gold shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-gold break-all">{site.email}</a>
            </li>
            <li className="text-white/60 text-xs pt-1">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} PHM Elite Estates. All rights reserved.</span>
          <span>Crafted with care for property excellence.</span>
        </div>
      </div>
    </footer>
  );
}
