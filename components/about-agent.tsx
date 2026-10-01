"use client";

import { Award, CheckCircle2, ShieldCheck, Briefcase, TrendingUp, Users, FileText, Lock, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENT_INFO } from "./data/real-estate-data";

export function AboutAgent() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-agent" className="py-24 bg-stone-50/70 border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-50 px-4 py-1 text-xs font-bold tracking-wider uppercase text-amber-900 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-amber-600" />
            <span>Meet The Dealmaker</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-950 tracking-tight">
            Who Is Alfred Siaw & What Does He Do?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            A seasoned luxury real estate negotiator dedicated to securing exceptional outcomes for property owners, corporate principals, and discerning investors across Malaysia’s premier enclaves.
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Portrait & Authority Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-7 border border-zinc-200 shadow-xl shadow-stone-900/5">
              
              {/* Photo & Badge */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-amber-100 blur-sm opacity-60" />
                <img
                  src={AGENT_INFO.headshot}
                  alt="Deal Makers Alfred Siaw"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-2 right-2 rounded-2xl bg-zinc-950 text-amber-300 px-3 py-1 text-xs font-bold shadow-md flex items-center gap-1.5 border border-amber-400/30">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>REN 24819</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="text-center space-y-1">
                <h3 className="font-serif text-2xl font-bold text-zinc-950">
                  Alfred Siaw
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-800">
                  Founder & Senior Dealmaker · DEAL MAKERS
                </p>
                <p className="text-xs text-zinc-500 font-mono">
                  Board of Valuers, Appraisers, Estate Agents (LPPEH)
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-zinc-100 text-center">
                <div className="rounded-xl bg-stone-50 p-3 border border-zinc-200/60">
                  <p className="font-serif text-xl font-bold text-zinc-950">RM 680M+</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wide mt-0.5">Career Transacted</p>
                </div>
                <div className="rounded-xl bg-stone-50 p-3 border border-zinc-200/60">
                  <p className="font-serif text-xl font-bold text-zinc-950">12+ Years</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wide mt-0.5">Prime KL/Selangor</p>
                </div>
                <div className="rounded-xl bg-stone-50 p-3 border border-zinc-200/60">
                  <p className="font-serif text-xl font-bold text-zinc-950">14 Days</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wide mt-0.5">Avg. Offer Time</p>
                </div>
                <div className="rounded-xl bg-stone-50 p-3 border border-zinc-200/60">
                  <p className="font-serif text-xl font-bold text-zinc-950">100%</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wide mt-0.5">Confidentiality Rate</p>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${AGENT_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20Alfred,%20I%20would%20like%20to%20consult%20you%20regarding%20a%20property.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-xs tracking-wider uppercase shadow-sm transition active:scale-95"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Direct WhatsApp to Alfred</span>
                </a>
                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-stone-50 hover:bg-stone-100 text-zinc-800 font-semibold py-2.5 text-xs transition"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-700" />
                  <span>Call {AGENT_INFO.phone}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Clear Explanations of Services & Expertise */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                Professional Expertise & Services
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-zinc-950">
                What Alfred Siaw Does For High-Value Clients
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                In Malaysia’s premium real estate landscape, multi-million Ringgit transactions require far more than placing an ad online. Alfred Siaw acts as your strategic dealmaker—combining deep financial valuation models, off-market buyer circles, and end-to-end legal oversight.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="space-y-4 pt-2">
              
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs hover:border-amber-400/80 transition group">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-zinc-950">
                      1. Record-Breaking Property Closings for Sellers
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      We represent luxury homeowners and developers in Damansara Heights, KLCC, Kenny Hills, and Bangsar. Through high-production staging, JPPH transacted caveats analysis, and targeted outreach to verified domestic and foreign buyers, we consistently secure sale prices at or above market valuation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs hover:border-amber-400/80 transition group">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-zinc-950">
                      2. Private Off-Market Sourcing for HNW Buyers
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Many of the finest properties in Kuala Lumpur are never publicly advertised. Alfred maintains direct relationships with high-net-worth families, corporate leaders, and institutional funds, giving buyers confidential access to unlisted trophy bungalows, penthouses, and redevelopment land parcels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs hover:border-amber-400/80 transition group">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-zinc-950">
                      3. Flawless SPA, Bank Valuation & Legal Management
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      From the Letter of Offer (OTP) and earnest deposit escrow to Sale and Purchase Agreement (SPA) signing, State Consent filings for foreign purchasers, loan drawdown, and title transfer—Alfred coordinates with Malaysia’s top conveyancing firms to guarantee a frictionless settlement.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Callout Banner */}
            <div className="rounded-2xl bg-zinc-950 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
              <div className="space-y-1 text-center sm:text-left">
                <p className="font-serif text-base font-bold text-amber-300">
                  Ready to discuss your property goals?
                </p>
                <p className="text-xs text-zinc-400">
                  Every conversation is held under strict professional non-disclosure.
                </p>
              </div>
              <Button
                onClick={() => scrollTo("valuation")}
                className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 transition-transform active:scale-95"
              >
                <span>Request Private Appraisal</span>
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
