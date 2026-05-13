"use client";

import AnimatedList from "@/components/AnimatedList";
import { GradientText } from "@/components/GradientText";

const clientLogos = [
  { name: "HDFC Bank", path: "/assets/logos/Logo_Assets/clients/hdfc.png" },
  { name: "PNB Bank", path: "/assets/logos/Logo_Assets/clients/pnb.png" },
  { name: "Vision IAS", path: "/assets/logos/Logo_Assets/clients/vision.png" },
  { name: "KEDIA Group", path: "/assets/logos/Logo_Assets/clients/kedia.jpeg" },
  { name: "Patanjali IAS", path: "/assets/logos/Logo_Assets/clients/patanjali.jpeg" },
  { name: "Liberty Hospital", path: "/assets/logos/Logo_Assets/clients/liberty.png" },
  { name: "IIS University", path: "/assets/logos/Logo_Assets/clients/iis.jpeg" },
  { name: "Cambridge School", path: "/assets/logos/Logo_Assets/clients/cambridge.jpeg" },
  { name: "Vision IAS", path: "/assets/logos/Logo_Assets/clients/vision.png" },
  { name: "HDFC Bank", path: "/assets/logos/Logo_Assets/clients/hdfc.png" },
];

export default function TrustStrip() {
  const items = clientLogos.map((client, i) => (
    <div key={i} className="flex items-center gap-4 group/client">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover/client:bg-white/10 transition-all duration-300">
        <img 
          src={client.path} 
          alt={client.name} 
          className="max-w-full max-h-full object-contain filter grayscale group-hover/client:grayscale-0 transition-all duration-500" 
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover/client:text-white transition-colors">
          Trusted Client
        </span>
        <span className="text-sm font-bold text-gray-300 group-hover/client:text-indigo-400 transition-colors">
          {client.name}
        </span>
      </div>
    </div>
  ));

  return (
    <section className="bg-obsidian py-24 border-y border-white/5 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Trusted by Jaipur&apos;s
              <br />
              <GradientText>Most Recognised Businesses</GradientText>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Over 20 years, Param Advertising has built relationships with national banks, 
              top coaching institutes, and Jaipur&apos;s leading real estate developers. 
              That same trust now powers your digital growth.
            </p>
            <div className="flex items-center gap-8 border-t border-white/5 pt-10">
               <div>
                  <p className="text-3xl font-display font-bold text-white">43+</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Jaipur Clients</p>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div>
                  <p className="text-3xl font-display font-bold text-white">20+</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Years Legacy</p>
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
            <AnimatedList 
              items={items} 
              className="max-h-[450px]" 
              displayScrollbar={false}
              showGradients={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
