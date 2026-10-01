"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare, PhoneCall, ShieldCheck, HelpCircle } from "lucide-react";
import { AGENT_INFO } from "./data/real-estate-data";

interface FaqItem {
  id: string;
  number: string;
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    number: "01",
    q: "How do you accurately determine the market value of prime property in Kuala Lumpur?",
    a: "We conduct a rigorous Comparative Market Analysis (CMA) by cross-referencing three independent data sources: verified transacted caveats from the Valuation and Property Services Department (JPPH), current active sub-sale listings in your specific taman or condominium, and desktop valuations from leading panel banks (Maybank, CIMB, Public Bank). This ensures your listing is priced for maximum realized profit without lingering on the market.",
  },
  {
    id: "faq-2",
    number: "02",
    q: "How do you guarantee 100% confidentiality for off-market sales?",
    a: "For high-profile owners in enclaves like Damansara Heights, Kenny Hills, and prime KLCC, we enforce strict non-disclosure. There are zero public portal listings, zero social media broadcasts, and zero open street signages. Prospective buyers must sign a legally binding Non-Disclosure Agreement (NDA) and demonstrate verified financial capability before receiving any property dossier or viewing access.",
  },
  {
    id: "faq-3",
    number: "03",
    q: "What is the standard procedure and timeline for transacting luxury property in Malaysia?",
    a: "Upon price agreement, the buyer signs the Letter of Offer (OTP) and places a 3% earnest deposit into an accredited stakeholder escrow account. The formal Sale and Purchase Agreement (SPA) is typically signed within 14 to 21 working days, accompanied by the balance 7% deposit. Full completion is generally within 90 calendar days from the unconditional date, with a standard 30-day extension clause.",
  },
  {
    id: "faq-4",
    number: "04",
    q: "Can you assist with Real Property Gains Tax (RPGT / CKHT) and conveyancing?",
    a: "Yes. While we are licensed real estate negotiators under LPPEH, we work hand-in-hand with Malaysia's top conveyancing law firms. Our legal partners assist both sellers and buyers with CKHT tax filing exemptions, Memorandum of Transfer (MOT) stamp duty structuring, bank loan redemption, and State Authority consent filings.",
  },
  {
    id: "faq-5",
    number: "05",
    q: "Are foreign purchasers permitted to buy luxury properties in Kuala Lumpur?",
    a: "Yes, subject to state guidelines. In Wilayah Persekutuan Kuala Lumpur, foreign nationals and foreign entities may purchase freehold or leasehold residential properties typically priced above RM 1,000,000 (certain designated prime zones maintain specific thresholds). We coordinate state consent applications and can advise expatriate families and MM2H holders throughout the acquisition.",
  },
  {
    id: "faq-6",
    number: "06",
    q: "What makes Alfred Siaw's advisory different from generic mass-market agencies?",
    a: "Mass-market agents rely on generic portal listings and wait for inquiries. In contrast, Alfred Siaw operates with private banking precision: producing 4K architectural twilight cinematography, directly pitching to an exclusive roster of 450+ verified high-net-worth families, and maintaining an average 103.8% sale-to-list ratio with transactions averaging just 14 days to offer.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white text-zinc-900 relative border-b border-zinc-200/80">
      {/* Expansive Full-Width Container matching previous sections */}
      <div className="mx-auto max-w-[1540px] px-4 sm:px-8 lg:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Section Title & Direct Support Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Frequently Asked Questions
              </p>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-zinc-950 tracking-tight leading-tight">
                Clear Answers to Common Inquiries
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                Transparent guidance on bank valuations, discreet off-market transactions, legal conveyancing, and the Malaysian luxury property landscape.
              </p>
            </div>

            {/* Direct Broker Contact Card */}
            <div className="rounded-2xl bg-stone-50 border border-zinc-200/80 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <ShieldCheck className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-zinc-950">
                    Have a Confidential Question?
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Connect directly with Alfred Siaw
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                Whether you need a confidential valuation for a family estate or advice on acquiring off-market land, we provide prompt, private counsel.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${AGENT_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alfred, I have a question regarding prime property.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Direct</span>
                </a>

                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="h-10 px-4 rounded-xl bg-white hover:bg-stone-100 text-zinc-800 border border-zinc-200 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-zinc-500" />
                  <span>Call Line</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_LIST.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-zinc-900 bg-white shadow-md"
                      : "border-zinc-200/90 bg-stone-50/60 hover:border-zinc-400 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-4 pr-4">
                      <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-zinc-900 transition-colors pt-0.5">
                        {faq.number}
                      </span>
                      <span className="font-sans text-sm sm:text-base font-bold text-zinc-900 group-hover:text-amber-900 transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen ? "bg-zinc-950 text-white rotate-180" : "bg-stone-200/70 text-zinc-600"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-zinc-100">
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
