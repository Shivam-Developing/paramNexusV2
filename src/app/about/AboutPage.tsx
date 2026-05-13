"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, ClipboardList, ShieldCheck, MapPin, Target, Users } from "lucide-react";
import { Galaxy } from "@/components/Galaxy";
import { MagicBento } from "@/components/MagicBento";
import { GradientText } from "@/components/GradientText";
import { Cubes } from "@/components/Cubes";
import AnimatedList from "@/components/AnimatedList";
import { useState } from "react";

const clientTabs = [
  { id: "banking", label: "Banking & Finance" },
  { id: "education", label: "Education" },
  { id: "realestate", label: "Real Estate" },
  { id: "healthcare", label: "Healthcare" },
];

const clients = {
  banking: ["HDFC Bank Legal", "PNB Bank Legal", "The Integral Urban Co-operative Bank", "Jain Finance"],
  education: ["Vision IAS", "Patanjali IAS", "Nirman IAS", "Geetanjali RAS", "Swastik Law Academy", "IIS University", "The Cambridge School", "Sainik School", "Divine Public School", "KPS Udaan", "KNS Education", "Warren Academy", "Bachpan Play School", "Kidzee Play School"],
  realestate: ["KEDIA Group", "SiddhiAnanta Group", "SiddhiRaj Group", "Kiara Group", "Urban Gaon Properties", "Sarodha Group", "Hari Om Build Home", "Jogi Real Home"],
  healthcare: ["Liberty Hospital", "JAIN ENT", "NK Dental", "Thapar Dental", "Jaipur Hearing", "Adinath ENT", "Pink City Nursing College", "Upchar Nursing College", "Krishna Nursing College", "Soni Nursing College"],
};

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("banking");

  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-0">
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Galaxy className="opacity-40" />
        </div>
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full z-[2] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
              PARAM NEXUS · Digital Wing of Param Advertising Agency
            </motion.div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-12">
              Built on Two Decades of Trust.<br />
              <GradientText>Driven by a Single Purpose.</GradientText>
            </h1>
            
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
               <div className="space-y-8">
                  <p className="text-xl lg:text-2xl text-white font-medium leading-relaxed">
                    PARAM NEXUS did not start with a blank page. 
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    It started with 20 years of <span className="text-white font-bold uppercase tracking-wide">Param Advertising Agency</span> — 
                    a firm that has spent two decades placing campaigns, building 
                    relationships, and earning the trust of Jaipur&apos;s most 
                    recognised businesses.
                  </p>
                  <p className="text-lg text-indigo-400 font-bold uppercase tracking-widest pt-4">
                    PARAM NEXUS IS THE NATURAL NEXT STEP.<br />
                    THE DIGITAL WING OF A LEGACY THAT JAIPUR ALREADY KNOWS.
                  </p>
               </div>
               
               <div className="hidden lg:block">
                  <MagicBento className="!p-10 w-80 aspect-square flex flex-col justify-between border-indigo-500/30">
                     <div>
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Verified Authority</p>
                        <h3 className="text-6xl font-black text-white">20+</h3>
                        <p className="text-xs font-bold text-indigo-400 mt-1 uppercase tracking-widest">Years of Jaipur Legacy</p>
                     </div>
                     <div className="pt-6 border-t border-white/5 space-y-3">
                        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                           <span>Bhaskar</span>
                           <span>Patrika</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                           <span>TOI</span>
                           <span>Jagran</span>
                        </div>
                     </div>
                  </MagicBento>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-20">What We Believe</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
             <MagicBento className="h-full">
                <p className="text-xl font-bold text-white mb-6 leading-tight italic">
                  &ldquo;Trust is not built in a campaign. It is built over years of showing up.&rdquo;
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Param Advertising Agency proved this in print. 
                  Param Nexus carries it forward in digital.
                </p>
             </MagicBento>

             <MagicBento className="h-full">
                <p className="text-xl font-bold text-white mb-6 leading-tight italic">
                  &ldquo;The best marketing understands the market it speaks to.&rdquo;
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We are not a Delhi agency. Not a Mumbai playbook. 
                  We are Jaipur — we understand the city&apos;s rhythms, its 
                  festivals, its customers, its languages, and its values.
                </p>
             </MagicBento>

             <MagicBento className="h-full">
                <p className="text-xl font-bold text-white mb-6 leading-tight italic">
                  &ldquo;A business&apos;s growth is our responsibility, not just our deliverable.&rdquo;
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We don&apos;t report impressions. We report outcomes. 
                  Calls. Inquiries. Customers. Results that matter 
                  to the person who wrote the cheque.
                </p>
             </MagicBento>
          </div>
        </div>
      </section>

      {/* The Foundation Section */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-10">The Foundation Param Nexus Is Built On</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-left lg:text-center">
            <p>
              Param Advertising Agency has served 1000+ businesses across 
              Jaipur — from national banks to local coaching institutes, 
              from real estate developers to healthcare institutions. 
            </p>
            <p>
              Every one of those relationships was built the same way: 
              on-time delivery, honest communication, and results that 
              kept clients coming back year after year. 
            </p>
            <p>
              Param Nexus inherits that operational standard completely. 
              Same accountability. Same work ethic. Same commitment to 
              the businesses of Jaipur — now applied to websites, 
              social media, and video content. 
            </p>
            <p className="text-white font-medium pt-4">
              When you engage Param Nexus, you are not betting on a new 
              agency finding its feet. You are working with an organisation 
              that Jaipur&apos;s business community has already vetted — 
              over 20 years and 43+ client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-20 text-center">Three Principles That Guide Everything We Do</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
             <MagicBento className="flex flex-col group">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight uppercase">The Param Advertising Legacy</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Param Advertising Agency is our parent, our foundation, 
                  and our proof of concept. Every value Param Nexus operates 
                  by was forged in two decades of print and media advertising 
                  for Jaipur&apos;s most demanding clients.
                </p>
             </MagicBento>

             <MagicBento className="flex flex-col group">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                   <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight uppercase">Jaipur Is Not Just Our Market. It Is Our Home.</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We understand this city at a level no outsider agency 
                  can replicate. The business seasons, the community 
                  relationships, the local language — it is all native to us.
                </p>
             </MagicBento>

             <MagicBento className="flex flex-col group">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                   <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight uppercase">Outcomes Over Optics.</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our definition of success is simple: did your business 
                  receive more calls, more inquiries, more customers after 
                  working with us? Follower counts and reach numbers are 
                  secondary.
                </p>
             </MagicBento>
          </div>
        </div>
      </section>

      {/* Two Wings Section */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-20 text-center">One Organisation. Two Powerful Wings.</h2>
          
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
             <div className="bg-[#FAF9F6] p-12 lg:p-20 text-black">
                <p className="text-[10px] font-bold text-amber-900 uppercase tracking-[0.3em] mb-4">Established Legacy</p>
                <h3 className="font-display text-4xl font-bold mb-10 tracking-tight">PARAM <br /> ADVERTISING AGENCY</h3>
                <div className="space-y-4 text-amber-950/70 font-bold uppercase tracking-widest text-sm">
                   <div className="flex items-center justify-between"><span>Newspapers</span> <ArrowRight className="w-4 h-4" /></div>
                   <div className="flex items-center justify-between"><span>News Channels</span> <ArrowRight className="w-4 h-4" /></div>
                   <div className="flex items-center justify-between"><span>FM Radio</span> <ArrowRight className="w-4 h-4" /></div>
                   <div className="flex items-center justify-between"><span>Cinema Advertising</span> <ArrowRight className="w-4 h-4" /></div>
                   <div className="flex items-center justify-between"><span>Outdoor Media</span> <ArrowRight className="w-4 h-4" /></div>
                   <div className="flex items-center justify-between"><span>Print & Stationery</span> <ArrowRight className="w-4 h-4" /></div>
                </div>
             </div>
             
             <div className="bg-[#0B0B0E] p-12 lg:p-20">
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">Digital Future</p>
                <h3 className="font-display text-4xl font-bold mb-10 tracking-tight">PARAM <br /> NEXUS</h3>
                <div className="space-y-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                   <div>Websites</div>
                   <div>Social Media</div>
                   <div>Video Content</div>
                   <div>Google Presence</div>
                   <div>WhatsApp Automation</div>
                   <div>Brand Content</div>
                </div>
             </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-xl font-bold text-white mb-8">Together: Print + Digital · Every Platform · Every Customer</p>
             <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
               Most businesses in Jaipur choose one or the other. 
               The ones that grow fastest use both. 
               With Param Advertising Agency and Param Nexus, you have a single 
               trusted partner covering every touchpoint.
             </p>
          </div>
        </div>
      </section>

      {/* Client Proof Section */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
             <div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">43+ Jaipur Businesses Have Trusted Param Advertising Agency</h2>
                <p className="text-gray-400 text-lg">These are not case studies. These are ongoing relationships.</p>
             </div>
             <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-indigo-400" />
                <div>
                   <p className="text-2xl font-bold text-white leading-none">43+</p>
                   <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Active Clients</p>
                </div>
             </div>
          </div>
          
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
             <div className="space-y-2">
                {clientTabs.map(tab => (
                   <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all ${activeTab === tab.id ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white"}`}
                   >
                      {tab.label}
                   </button>
                ))}
             </div>
             
             <div className="bg-[#121216]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-12">
                <div className="grid sm:grid-cols-2 gap-4">
                   {clients[activeTab as keyof typeof clients].map((client, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-indigo-500/30 transition-all">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform" />
                         <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{client}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
          
          <p className="mt-20 text-center text-gray-500 italic text-sm">
            Param Advertising Agency&apos;s client retention speaks for itself — and Param Nexus is built on the same promise.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-obsidian py-24 lg:py-32 relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Work With a Name<br />Jaipur Already Trusts?</h2>
          <p className="text-gray-400 text-lg mb-12">Whether you need a website, a social media strategy, a video for your brand, or a full print campaign — Param Nexus and Param Advertising Agency are ready to deliver it. Together.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/services/website-development" className="w-full sm:w-auto px-10 py-5 text-sm font-bold text-white bg-gradient-to-r from-neonIndigo to-purple-600 rounded-full shadow-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
               Explore Digital Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 text-sm font-bold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
               Book a Print Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
