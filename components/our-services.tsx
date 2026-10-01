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
    <section id="services" className="bg-[#faf9f7] text-zinc-900 py-14 sm:py-20 lg:py-28 border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Refined Luxury Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 lg:mb-20 space-y-2 sm:space-y-3">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            Tailored Advisory &amp; Solutions
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[44px] font-normal text-zinc-950 tracking-tight leading-tight">
            Our Services for You
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-zinc-300 mx-auto my-2.5 sm:my-3" />
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-light">
            Highlighting the best of prime property solutions tailored for you. Exclusive representation, transparent valuations, and discreet off-market transactions.
          </p>
        </div>

        {/* 4 Minimalist Luxury Cards: 1 Column on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl bg-white p-6 sm:p-8 lg:p-9 border border-zinc-200/90 hover:border-zinc-900 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-0 sm:min-h-[380px] lg:min-h-[400px] cursor-pointer active:scale-[0.99]"
                onClick={() => scrollTo(item.targetId)}
              >
                <div>
                  {/* Top Bar: Minimalist Index Number + Clean Line Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-zinc-100">
                    <span className="font-mono text-xs font-semibold text-zinc-400 tracking-wider">
                      {item.number}
                    </span>
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-stone-100/80 text-zinc-800 group-hover:bg-zinc-950 group-hover:text-amber-300 transition-colors duration-300">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-2.5 sm:mb-3">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-zinc-900 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-800/80">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 text-xs leading-relaxed font-normal pt-1 sm:pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action: Sophisticated Minimalist Arrow Link */}
                <div className="pt-5 sm:pt-8 mt-4 sm:mt-0 border-t border-zinc-100">
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
