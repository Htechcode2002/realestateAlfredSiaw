"use client";

import { Home, Key, Shield, Compass, HeartHandshake, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BaltimoreServices() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#fdfcfb] text-[#011640] py-20 lg:py-28 border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Baltimore Voyage Headline Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 pb-12 border-b border-zinc-200/70">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc8664]">
              A Curated Real Estate Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#011640]">
              Let’s go on a voyage to discover your perfect home in Kuala Lumpur.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Our belief in the transformative power of prime real estate motivates us to redefine the very essence of luxury living. With data-backed valuations, verified high-net-worth buyers, and complete privacy, we turn complex transactions into seamless outcomes.
            </p>
            <div className="pt-5">
              <Button
                onClick={() => scrollTo("valuation")}
                className="bg-[#011640] hover:bg-[#0a2355] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md"
              >
                <span>Discover How We Work</span>
                <ArrowRight className="ml-2 h-4 w-4 text-[#e2837a]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Baltimore Signature 3 Action Cards (Buy, Sell, Off-Market) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1: Buy */}
          <div className="group rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-md hover:shadow-2xl hover:border-[#e2837a]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdf2f0] text-[#e2837a] group-hover:bg-[#011640] group-hover:text-white transition duration-300">
                <Home className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#011640]">
                  Buy a <br />Property
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Immerse yourself in a world of possibilities as you discover prestigious bungalows, penthouses, and private estates across Damansara Heights, KLCC, and Kenny Hills.
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollTo("closings")}
              className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bc8664] group-hover:text-[#011640] transition cursor-pointer"
            >
              <span>Explore Curated Listings</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 2: Sell */}
          <div className="group rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-md hover:shadow-2xl hover:border-[#e2837a]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdf2f0] text-[#e2837a] group-hover:bg-[#011640] group-hover:text-white transition duration-300">
                <Key className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#011640]">
                  Sell a <br />Property
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Unlock the door to a seamless, rewarding transaction. We leverage active JPPH transaction caveats and panel bank comps to achieve top realized sale pricing.
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollTo("valuation")}
              className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bc8664] group-hover:text-[#011640] transition cursor-pointer"
            >
              <span>Request Indicative Valuation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 3: Off-Market & Private Advisory */}
          <div className="group rounded-3xl bg-white p-8 border border-zinc-200/80 shadow-md hover:shadow-2xl hover:border-[#e2837a]/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fdf2f0] text-[#e2837a] group-hover:bg-[#011640] group-hover:text-white transition duration-300">
                <Shield className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-[#011640]">
                  Off-Market <br />Advisory
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  For owners desiring non-public marketing and buyers seeking unlisted trophy assets. 100% confidential introductions backed by professional non-disclosure.
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollTo("about-agent")}
              className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#bc8664] group-hover:text-[#011640] transition cursor-pointer"
            >
              <span>Learn About Private Sourcing</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Baltimore 4 Core Values Section ("What we do / Core Values") */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#bc8664]">
              Our Professional Principles
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#011640]">
              Built on Integrity, Discretion & High Performance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Value 1: Customer Focus */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-[#bc8664]">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#011640]">
                Customer Focus
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Placing clients’ needs at the forefront and providing personalized, attentive advisory throughout every step of the closing.
              </p>
            </div>

            {/* Value 2: Trustworthiness */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-[#bc8664]">
                <Shield className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#011640]">
                Trustworthiness
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Building trust through reliability, consistency, and strict non-disclosure for prominent families and high-profile figures.
              </p>
            </div>

            {/* Value 3: Professionalism */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-[#bc8664]">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#011640]">
                Professionalism
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Maintaining the highest standards of LPPEH regulatory conduct, continuous market research, and conveyancing expertise.
              </p>
            </div>

            {/* Value 4: Accountability */}
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-[#bc8664]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#011640]">
                Accountability
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Taking complete responsibility for valuation accuracy, buyer pre-qualification, and seamless legal SPA execution.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
