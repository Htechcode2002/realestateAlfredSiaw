"use client";

import { useState } from "react";
import { CLOSING_CASES, ClosingCase, AGENT_INFO } from "./data/real-estate-data";
import { CaseDetailModal } from "./case-detail-modal";
import {
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function ClosingShowcase() {
  const [selectedCase, setSelectedCase] = useState<ClosingCase | null>(null);

  // Helper to extract clean built-up size
  const formatSqft = (raw: string) => {
    if (raw.includes("Built-up:")) {
      return raw.split("Built-up:")[1].split("(")[0].trim();
    }
    return raw.split("(")[0].trim();
  };

  return (
    <section id="closings" className="py-20 lg:py-28 bg-[#faf9f8] text-zinc-900 relative border-b border-zinc-200/80">
      {/* Full-Width Expansive Container */}
      <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 w-full">

        {/* Minimalist & Sophisticated Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-zinc-200/80 pb-8">
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
              Proven Track Record · Realized Outcomes
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[46px] text-zinc-950 tracking-tight leading-tight">
              Recent Sales &amp; Closings
            </h2>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm font-normal max-w-md leading-relaxed sm:text-right">
            Verified benchmark transactions closed across Damansara Heights, Kenny Hills, KLCC, and Mont Kiara.
          </p>
        </div>

        {/* Expansive Property Grid (6 Landmark Properties) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CLOSING_CASES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="group rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-900 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Imagery */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  {/* Top Status Tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-zinc-950/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white shadow-xs border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      SOLD
                    </span>
                    <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-200 backdrop-blur-md border border-white/10">
                      {item.closedDate}
                    </span>
                  </div>

                  {/* Negotiator Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 shadow-xs border border-white/80 backdrop-blur-xs">
                    <img
                      src={AGENT_INFO.headshot}
                      alt={AGENT_INFO.name}
                      className="h-4 w-4 rounded-full object-cover"
                    />
                    <span className="text-[10px] font-bold text-zinc-900 font-sans tracking-wide">
                      Alfred Siaw
                    </span>
                  </div>

                  {/* Bottom Image Location & Title */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <p className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white mt-1 leading-snug truncate group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 space-y-4">
                  {/* Price Row */}
                  <div className="flex items-baseline justify-between border-b border-zinc-100 pb-3.5">
                    <div>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                        Transacted Price
                      </p>
                      <p className="font-sans text-2xl sm:text-[28px] font-black text-zinc-950 mt-0.5 tracking-tight">
                        {item.soldPrice}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-200 px-3 py-1 rounded-full bg-stone-50 font-semibold">
                      {item.categoryName}
                    </span>
                  </div>

                  {/* Transaction Outcome Highlight (Clean 2-line auto-wrap, no weird truncation) */}
                  <div className="rounded-xl bg-stone-50 border border-zinc-200/80 p-3 text-xs text-zinc-800 leading-relaxed font-medium flex items-start gap-2.5 min-h-[52px]">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{item.highlight}</span>
                  </div>

                  {/* Neatly Aligned 3-Box Property Specs (Bedrooms, Bathrooms, Built-Up) */}
                  <div className="grid grid-cols-3 divide-x divide-zinc-200 bg-stone-100/70 rounded-xl border border-zinc-200/60 p-2.5 text-center">
                    <div className="px-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        Beds
                      </span>
                      <span className="block text-xs font-bold text-zinc-900 mt-0.5">
                        {item.beds} Bedrooms
                      </span>
                    </div>
                    <div className="px-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        Baths
                      </span>
                      <span className="block text-xs font-bold text-zinc-900 mt-0.5">
                        {item.baths} Bathrooms
                      </span>
                    </div>
                    <div className="px-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                        Built-Up
                      </span>
                      <span className="block text-xs font-bold text-zinc-900 mt-0.5 truncate" title={item.sqft}>
                        {formatSqft(item.sqft)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Minimalist Arrow Action */}
              <div className="px-6 pb-6 pt-1">
                <div className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:text-amber-800 transition-colors pt-3.5 border-t border-zinc-100">
                  <span>View Case Study &amp; Strategy</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-amber-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Detail Modal */}
      <CaseDetailModal
        closingCase={selectedCase}
        onClose={() => setSelectedCase(null)}
        onConsult={() => {
          setSelectedCase(null);
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </section>
  );
}
