"use client";

import { ShieldCheck, MessageSquare, ArrowUpRight } from "lucide-react";
import { AGENT_INFO } from "./data/real-estate-data";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] lg:h-screen lg:min-h-[680px] bg-slate-950 overflow-hidden flex items-end border-b-2 border-zinc-200">
      
      {/* 🏙️ Iconic Kuala Lumpur Petronas Twin Towers Skyline (Malaysia) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kl_skyline.jpg"
          alt="Kuala Lumpur Petronas Twin Towers Skyline - Malaysia"
          className="h-full w-full object-cover object-[62%_center] lg:object-[center_32%]"
        />
        {/* Responsive luxury contrast overlay: vertical vignette on mobile, horizontal corridor on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/70 lg:bg-gradient-to-r lg:from-slate-950/75 lg:via-transparent lg:to-slate-950/70" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Hero Content Container - Fully optimized for both mobile and desktop */}
      <div className="relative z-10 mx-auto max-w-[1760px] px-4 sm:px-8 lg:px-14 w-full pt-20 sm:pt-24 lg:pt-32 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end min-h-0 lg:min-h-[620px]">
          
          {/* Left Column: Standing Agent Cutout Portrait (Left Anchor) */}
          <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start items-end order-2 lg:order-1 self-end leading-none mt-2 sm:mt-4 lg:mt-0">
            <div className="relative w-52 sm:w-72 lg:w-[460px] xl:w-[500px] flex justify-center lg:justify-start items-end leading-none">
              <img
                src={AGENT_INFO.headshot}
                alt={AGENT_INFO.name}
                className="w-full h-auto max-h-[30vh] sm:max-h-[42vh] lg:max-h-[82vh] object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] block -mb-0.5"
              />
            </div>
          </div>

          {/* Center Corridor: Completely Clear Sightline for the Petronas Twin Towers */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-2 pointer-events-none" />

          {/* Right Column: Enlarged on Desktop, Sleek & Readable on Mobile */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 pb-3 sm:pb-8 lg:pb-16 xl:pb-20 lg:pl-8 xl:pl-14">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full bg-slate-950/70 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20 text-white shadow-md mb-2.5 sm:mb-4">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 shrink-0" />
              <span className="text-[10px] sm:text-xs lg:text-[13px] font-semibold tracking-wider uppercase">
                LPPEH Licensed Negotiator · REN 24819
              </span>
            </div>

            {/* Main Agent Name */}
            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-[72px] xl:text-[82px] text-white tracking-tight leading-[1.05] sm:leading-[1.0] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              Alfred Siaw
            </h1>
            
            {/* Subtitle */}
            <p className="font-serif text-base sm:text-xl lg:text-3xl text-amber-300 font-semibold mt-1.5 sm:mt-3 tracking-wide drop-shadow-md">
              Prime Luxury Real Estate Dealmaker
            </p>

            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-zinc-300 font-semibold mt-1">
              Deal Makers Realty · Kuala Lumpur, Malaysia
            </p>

            {/* Description */}
            <p className="text-zinc-100 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mt-2.5 sm:mt-4 drop-shadow-md font-light">
              Prime residential advisory &amp; confidential off-market transactions across <strong className="text-white font-medium">Damansara Heights, Kenny Hills, KLCC &amp; Bangsar</strong>.
            </p>

            {/* Credibility Stats - Mobile 3-column compact */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full max-w-lg my-3.5 sm:my-6 pt-3 sm:pt-5 border-t border-white/20">
              <div className="bg-slate-950/60 backdrop-blur-md rounded-xl p-2 sm:p-3.5 border border-white/15 text-center lg:text-left shadow-lg">
                <p className="font-serif text-base sm:text-2xl lg:text-3xl font-bold text-white">RM 680M+</p>
                <p className="text-[9px] sm:text-xs text-zinc-300 font-medium mt-0.5 sm:mt-1 truncate">Career Volume</p>
              </div>
              <div className="bg-slate-950/60 backdrop-blur-md rounded-xl p-2 sm:p-3.5 border border-white/15 text-center lg:text-left shadow-lg">
                <p className="font-serif text-base sm:text-2xl lg:text-3xl font-bold text-white">12+ Years</p>
                <p className="text-[9px] sm:text-xs text-zinc-300 font-medium mt-0.5 sm:mt-1 truncate">Luxury Focus</p>
              </div>
              <div className="bg-slate-950/60 backdrop-blur-md rounded-xl p-2 sm:p-3.5 border border-white/15 text-center lg:text-left shadow-lg">
                <p className="font-serif text-base sm:text-2xl lg:text-3xl font-bold text-emerald-400">100%</p>
                <p className="text-[9px] sm:text-xs text-zinc-300 font-medium mt-0.5 sm:mt-1 truncate">Confidentiality</p>
              </div>
            </div>

            {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full max-w-md lg:max-w-none">
              <a
                href={`https://wa.me/${AGENT_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alfred, I would like to consult with you regarding prime property in Kuala Lumpur.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto h-11 sm:h-12 lg:h-13 px-6 sm:px-7 lg:px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Alfred</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo("closings")}
                className="w-full sm:w-auto h-11 sm:h-12 lg:h-13 px-5 sm:px-6 lg:px-7 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Recent Sales</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-700" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
