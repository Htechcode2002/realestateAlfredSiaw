"use client";

import { KeyRound, Home, Calculator, Compass, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
  targetId: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    icon: KeyRound,
    title: "Sell Your Home",
    subtitle: "Exclusive Representation",
    description: "Data-backed valuation, bespoke twilight staging, and targeted access to over 450+ verified high-net-worth buyers.",
    actionText: "List With Alfred",
    targetId: "hero-section",
  },
  {
    number: "02",
    icon: Home,
    title: "Free Valuation",
    subtitle: "Comparative Market Analysis",
    description: "Receive a transparent, data-driven report benchmarking recent JPPH caveat records and active neighborhood transactions.",
    actionText: "Request Valuation",
    targetId: "hero-section",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Certified Appraisal",
    subtitle: "Bank Benchmark Comps",
    description: "Official desktop valuations coordinated with Maybank, CIMB, and Public Bank to establish peak realized asset value.",
    actionText: "Explore Appraisal",
    targetId: "hero-section",
  },
  {
    number: "04",
    icon: Compass,
    title: "Buy a Home",
    subtitle: "Private Acquisition",
    description: "VIP access to unlisted bungalows, sky penthouses, and private estates across Damansara Heights, Kenny Hills, and KLCC.",
    actionText: "Search Properties",
    targetId: "hero-section",
  },
];

export function OurServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[#faf9f7] text-zinc-900 py-20 lg:py-28 border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Refined Luxury Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Tailored Advisory &amp; Solutions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-zinc-950 tracking-tight leading-tight">
            Our Services for You
          </h2>
          <div className="w-12 h-0.5 bg-zinc-300 mx-auto my-3" />
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
            Highlighting the best of prime property solutions tailored for you. Exclusive representation, transparent valuations, and discreet off-market transactions.
          </p>
        </div>

        {/* 4 Minimalist Luxury Cards in ONE Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl bg-white p-8 sm:p-9 border border-zinc-200/90 hover:border-zinc-900 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[400px] cursor-pointer"
                onClick={() => scrollTo(item.targetId)}
              >
                <div>
                  {/* Top Bar: Minimalist Index Number + Clean Line Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
                    <span className="font-mono text-xs font-semibold text-zinc-400 tracking-wider">
                      {item.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100/80 text-zinc-800 group-hover:bg-zinc-950 group-hover:text-amber-300 transition-colors duration-300">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <h3 className="font-serif text-xl font-bold text-zinc-950 group-hover:text-zinc-900 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-800/80">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 text-xs leading-relaxed font-normal pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action: Sophisticated Minimalist Arrow Link */}
                <div className="pt-8 border-t border-zinc-100">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:text-amber-800 transition-colors">
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-amber-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
