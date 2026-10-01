"use client";

import { useState } from "react";
import { Phone, MessageCircle, Calculator, ChevronUp, X } from "lucide-react";
import { AGENT_INFO } from "./data/real-estate-data";

export function FloatingContact() {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToValuation = () => {
    const el = document.getElementById("valuation");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Mini Concierge Popover in Pure White */}
      {showPopup && (
        <div className="w-80 rounded-3xl bg-white p-5 shadow-2xl border border-zinc-200 animate-in fade-in slide-in-from-bottom-3 text-zinc-900">
          <div className="flex items-start justify-between pb-3 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Quick Assistance</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-zinc-400 hover:text-zinc-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-600 mt-3 leading-relaxed font-normal">
            Hello! Have questions about current property values in your neighborhood or interested in exploring available homes?
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setShowPopup(false);
                scrollToValuation();
              }}
              className="w-full rounded-xl bg-zinc-900 py-2.5 text-xs font-bold text-amber-300 hover:bg-zinc-800 text-center uppercase tracking-wider shadow-md"
            >
              📊 Get Free Home Valuation
            </button>
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="w-full rounded-xl bg-stone-100 border border-zinc-200 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-stone-200 text-center flex items-center justify-center gap-2"
            >
              <Phone className="h-3.5 w-3.5 text-amber-600" />
              Call Alfred Directly
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex items-center gap-2.5">
        {/* Quick Home Valuation Button */}
        <button
          onClick={scrollToValuation}
          className="hidden sm:flex items-center gap-2 rounded-full bg-zinc-900 text-amber-300 px-5 py-3 text-xs font-bold tracking-wider uppercase shadow-xl hover:bg-zinc-800 transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <Calculator className="h-4 w-4 text-amber-400" />
          <span>Free Valuation</span>
        </button>

        {/* WhatsApp / Direct Chat Trigger */}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 transition-all transform hover:scale-105 cursor-pointer border border-emerald-400"
          aria-label="Direct Contact"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-800 shadow-lg border border-zinc-200 hover:bg-zinc-100 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
}
