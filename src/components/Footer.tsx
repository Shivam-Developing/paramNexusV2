import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react";

const serviceLinks = [
  { label: "Website Dev", href: "/services/website-development" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "KliqueNexus", href: "/kliquenexus" },
  { label: "Starter Bundle", href: "/#starter-bundle" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Legacy", href: "/our-legacy" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/918744003727", icon: <MessageSquare className="w-5 h-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-gray-500 border-t border-white/5 relative overflow-hidden">
      {/* Ambient bleed */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-neonIndigo/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand Logos */}
          <div className="lg:col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <img src="/logo.jpeg" alt="Param Nexus" className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  PARAM NEXUS
                </h3>
                <p className="text-[10px] font-bold text-neonIndigo uppercase tracking-[0.2em]">Digital Growth Agency · Jaipur</p>
              </div>
            </div>
            <div className="mb-8 pt-6 border-t border-white/5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">A proud digital division of</p>
              <h4 className="font-display text-base font-bold text-gray-400 uppercase tracking-widest">
                PARAM ADVERTISING AGENCY
              </h4>
              <Link href="/our-legacy" className="inline-flex items-center gap-2 text-[10px] font-bold text-cyberCyan mt-2 uppercase tracking-[0.2em] hover:text-white transition-colors">
                [→ Visit Legacy Page]
              </Link>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-neonIndigo/20 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-neonIndigo/30"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold text-white uppercase tracking-[0.3em] mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-neonIndigo shrink-0" />
                <div className="space-y-1.5">
                  <a href="tel:+918744003727" className="text-sm hover:text-white transition-colors block font-medium">
                    +91 87440 03727
                  </a>
                  <a href="tel:+918619620062" className="text-sm hover:text-white transition-colors block font-medium">
                    +91 86196 20062
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neonIndigo group-hover/item:bg-neonIndigo group-hover/item:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:nexusparam@gmail.com" className="text-sm hover:text-white transition-colors font-medium">
                  nexusparam@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4 group/item">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neonIndigo group-hover/item:bg-neonIndigo group-hover/item:text-white transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <a 
                  href="https://maps.google.com/?q=Param+Advertising+Jaipur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed hover:text-white transition-colors"
                >
                  Param Cloth Store, 22, Arjun Nagar Phatak Rd, Kartarpura Phatak, Bhagwati Nagar, Bais Godam, Jaipur, Rajasthan 302006
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-neonIndigo shrink-0" />
                <span className="text-sm">Mon–Sat: 10am–7pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest">
            © 2026 Param Nexus · A Division of Param Advertising Agency
          </p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[11px] font-medium text-gray-600 hover:text-white transition-colors uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] font-medium text-gray-600 hover:text-white transition-colors uppercase tracking-widest">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
