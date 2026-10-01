"use client";

import { TESTIMONIALS } from "./data/real-estate-data";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#faf9f8] text-zinc-900 relative border-b border-zinc-200/80">
      {/* Expansive Full-Width Container (matches the successful sales section) */}
      <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 w-full">
        
        {/* Minimalist & Sophisticated Header (No Filter) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-zinc-200/80 pb-8">
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
              Verified Reviews · Client Feedback
            </p>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[46px] text-zinc-950 tracking-tight leading-tight">
              Client Testimonials &amp; Trust
            </h2>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm font-normal max-w-md leading-relaxed sm:text-right">
            Firsthand accounts from Dato&apos; Sri, corporate founders, and high-net-worth families represented by Alfred Siaw.
          </p>
        </div>

        {/* 4 Cards Grid - Expansive Across Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white p-7 sm:p-8 border border-zinc-200/90 hover:border-zinc-900 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[460px]"
            >
              <div className="space-y-5">
                {/* Top Row: 5 Stars + Verified Transaction Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200/60">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                {/* Outcome Pill */}
                <div className="rounded-xl bg-stone-50 border border-zinc-100 p-2.5 text-[11px] text-zinc-800 leading-snug">
                  <span className="block text-zinc-400 font-medium text-[10px] uppercase tracking-wider">
                    Transacted Property
                  </span>
                  <span className="font-bold text-zinc-900 mt-0.5 block truncate">
                    {item.property.split("(")[0].trim()}
                  </span>
                  <span className="text-amber-800 font-semibold block text-[11px] mt-1">
                    ✓ {item.result}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-600 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover ring-1 ring-zinc-200"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-950 tracking-tight truncate">
                      {item.name}
                    </h4>
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Trust & Credibility Footer Bar */}
        <div className="mt-14 rounded-2xl bg-white border border-zinc-200/80 p-6 sm:p-7 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            <div className="pt-2 md:pt-0">
              <p className="font-sans text-xl sm:text-2xl font-black text-zinc-950">5.0 ★★★★★</p>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold mt-0.5">
                Client Rating
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-sans text-xl sm:text-2xl font-black text-zinc-950">100%</p>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold mt-0.5">
                Discretion &amp; NDA
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-sans text-xl sm:text-2xl font-black text-zinc-950">14 Days</p>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold mt-0.5">
                Average Offer Time
              </p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-sans text-xl sm:text-2xl font-black text-zinc-950">RM 680M+</p>
              <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold mt-0.5">
                Career Sales Closed
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
