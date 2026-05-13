"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, Newspaper, Tv, Radio, Film, Image, Printer, 
  MapPin, ClipboardList, Globe, Info, Zap, ShieldCheck
} from "lucide-react";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { BlurText } from "@/components/BlurText";
import { GradientText } from "@/components/GradientText";
import { Cubes } from "@/components/Cubes";

const publisherLogos = [
  { name: "Hindustan Times", path: "/assets/logos/Logo_Assets/publishers/ht.png" },
  { name: "Dainik Bhaskar", path: "/assets/logos/Logo_Assets/publishers/bhaskar.jpeg" },
  { name: "Rajasthan Patrika", path: "/assets/logos/Logo_Assets/publishers/patrika.jpeg" },
  { name: "Times of India", path: "/assets/logos/Logo_Assets/publishers/toi.png" },
  { name: "Dainik Jagran", path: "/assets/logos/Logo_Assets/publishers/jagran.png" },
  { name: "Zee TV", path: "/assets/logos/Logo_Assets/publishers/zee.png" },
  { name: "Radio Mirchi", path: "/assets/logos/Logo_Assets/publishers/mirchi.jpeg" },
  { name: "PVR INOX", path: "/assets/logos/Logo_Assets/publishers/pvr.png" },
];

const mediaNetwork = [
  {
    icon: <Newspaper className="w-6 h-6 text-indigo-400" />,
    title: "Newspapers",
    items: ["Hindustan Times", "Dainik Bhaskar", "Rajasthan Patrika", "Times of India", "Dainik Jagran", "Amar Ujala", "Punjab Kesari", "Samachar Jagat"]
  },
  {
    icon: <Tv className="w-6 h-6 text-cyan-400" />,
    title: "News Channels",
    items: ["Zee TV", "India News", "ETV Rajasthan"]
  },
  {
    icon: <Radio className="w-6 h-6 text-purple-400" />,
    title: "FM Radio",
    items: ["Radio Mirchi", "Red FM", "Big FM", "My FM", "Tadka FM"]
  },
  {
    icon: <Film className="w-6 h-6 text-indigo-400" />,
    title: "Cinema Advertising",
    items: ["PVR INOX Multiplexes", "Regional Theatres"]
  },
  {
    icon: <Image className="w-6 h-6 text-cyan-400" />,
    title: "Outdoor Media",
    items: ["Hoardings", "Billboards", "LED Screens", "Mobile Vans", "Banners"]
  },
  {
    icon: <Printer className="w-6 h-6 text-purple-400" />,
    title: "Printing Services",
    items: ["Brochures", "Cutouts", "Pamphlets", "Full Business Stationery"]
  },
];

const bridgeSteps = [
  { left: "Newspapers", right: "Websites" },
  { left: "News Channels", right: "Social Media" },
  { left: "FM Radio", right: "Video Content" },
  { left: "Cinema Ads", right: "Google Presence" },
  { left: "Outdoor Media", right: "WhatsApp Automation" },
  { left: "Print Services", right: "Brand Content" },
];

export default function LegacyPage() {
  return (
    <div className="bg-obsidian text-white selection:bg-indigo-500/30">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="relative z-[10] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <img src="/logo.jpeg" alt="Param Advertising" className="w-32 h-32 rounded-3xl mx-auto border border-white/10 shadow-2xl mb-8" />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                Est. 2000s · Two Decades of Authority
              </div>
           </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95] mb-12">
            JAIPUR HAS READ OUR CLIENTS&apos; ADS <br />
            <GradientText>FOR OVER TWO DECADES.</GradientText>
          </h1>
          
          <div className="space-y-8 text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            <p>
              Param Advertising Agency did not start in the digital age. 
              We started with the power of the printed word and the morning newspaper. 
            </p>
            <p>
              Before websites. Before Instagram. Before Google. 
              There was print — and <span className="text-white font-bold uppercase tracking-wide">Param Advertising Agency</span> was placing campaigns 
              in every major newspaper in Rajasthan since the early 2000s.
            </p>
          </div>
        </div>
      </section>

      {/* Network Marquee */}
      <section className="bg-obsidian py-20 border-y border-white/5 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 mb-12 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white uppercase tracking-[0.3em]">Our Media Network</h2>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Authorized Agency for Every Major Publisher</p>
         </div>
         
         <div className="flex gap-12 animate-infinite-scroll">
            {[...publisherLogos, ...publisherLogos].map((pub, i) => (
               <div key={i} className="flex-shrink-0 flex items-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white/10">
                  <img src={pub.path} alt={pub.name} className="h-8 object-contain" />
                  <span className="text-sm font-bold text-gray-400 whitespace-nowrap">{pub.name}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
        <Cubes className="absolute bottom-0 right-0 opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-24 text-center">One Call. Every Major Platform in Jaipur.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaNetwork.map((media, i) => (
              <MagicBento key={i} className="flex flex-col group">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                   {media.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-6 tracking-tight uppercase">{media.title}</h3>
                <div className="space-y-3 flex-1">
                   {media.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-indigo-500/40" />
                         {item}
                      </div>
                   ))}
                </div>
              </MagicBento>
            ))}
          </div>
        </div>
      </section>

      {/* The Two Wings Architecture */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
               One Organisation. Two Powerful Wings.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Newspaper advertising builds credibility for today. Digital marketing captures 
              the next generation. We are the only agency in Jaipur delivering both seamlessly.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-[#0B0B0E]">
             {/* Left — Print */}
             <div className="p-10 lg:p-20 bg-[#FAF9F6] text-black">
                <h3 className="font-display text-3xl font-bold mb-2 tracking-tight">PARAM <br /> ADVERTISING AGENCY</h3>
                <p className="text-[10px] text-amber-900 uppercase tracking-[0.3em] font-bold mb-12">Traditional Trust</p>
                <div className="space-y-6">
                  {bridgeSteps.map((b, i) => (
                    <div key={i} className="text-sm text-amber-950/60 font-bold uppercase tracking-widest flex items-center justify-between">
                      {b.left}
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </div>
                  ))}
                </div>
             </div>
             
             {/* Center Bridge */}
             <div className="hidden lg:flex flex-col items-center justify-center px-12 bg-white/[0.02] border-x border-white/5">
                <ShieldCheck className="w-12 h-12 text-indigo-500/20" />
             </div>
             
             {/* Right — Digital */}
             <div className="p-10 lg:p-20">
                <h3 className="font-display text-3xl font-bold text-white mb-2 tracking-tight">PARAM <br /> NEXUS</h3>
                <p className="text-[10px] text-indigo-400 uppercase tracking-[0.3em] font-bold mb-12">Digital Dominance</p>
                <div className="space-y-6">
                  {bridgeSteps.map((b, i) => (
                    <div key={i} className="text-sm text-gray-500 font-bold uppercase tracking-widest">
                      {b.right}
                    </div>
                  ))}
                </div>
             </div>
          </div>
          
          <div className="mt-20 text-center">
             <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
                No gaps. No handoffs. No explaining your brand twice. 
                With Param Advertising Agency and Param Nexus, you have a single 
                trusted partner covering every touchpoint.
             </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Scale on Every Platform?</h2>
          <p className="text-gray-400 text-lg mb-12">Whether you need the authority of print or the reach of digital — we are Jaipur&apos;s most trusted partner for business growth.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
               Book a Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/website-development" className="w-full sm:w-auto px-10 py-5 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
               Explore Digital Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
