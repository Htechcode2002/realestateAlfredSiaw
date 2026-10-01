"use client";

import { useState } from "react";
import { Phone, MessageCircle, ChevronUp, X, MessageSquare } from "lucide-react";
import { AGENT_INFO } from "./data/real-estate-data";

export function FloatingContact() {
  const [showPopup, setShowPopup] = useState(false);

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
      
      {/* Mini Concierge Popover - Fully responsive width without screen overflow on mobile */}
      {showPopup && (
        <div className="w-[calc(100vw-32px)] max-w-[320px] sm:w-80 rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 shadow-2xl border border-zinc-200 animate-in fade-in slide-in-from-bottom-3 text-zinc-900">
          <div className="flex items-start justify-between pb-3 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800">Quick Advisory</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="p-1 text-zinc-400 hover:text-zinc-700 cursor-pointer"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-600 mt-2.5 sm:mt-3 leading-relaxed font-normal">
            Hello! Inquire directly about off-market property acquisition, private valuations, or listing your home.
          </p>
          <div className="mt-3.5 sm:mt-4 flex flex-col gap-2">
            <a
              href={`https://wa.me/${AGENT_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alfred, I am visiting your website and would like to consult.")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-bold text-white text-center uppercase tracking-wider shadow-md flex items-center justify-center gap-2 active:scale-95 transition"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Alfred</span>
            </a>
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="w-full rounded-xl bg-stone-100 border border-zinc-200 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-stone-200 text-center flex items-center justify-center gap-2 active:scale-95 transition"
            >
              <Phone className="h-3.5 w-3.5 text-zinc-600" />
              <span>Call Direct Line</span>
            </a>
            <button
              onClick={() => {
                setShowPopup(false);
                scrollToServices();
              }}
              className="text-[11px] text-zinc-500 hover:text-zinc-900 pt-1 text-center font-medium cursor-pointer"
            >
              View All 4 Services →
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* WhatsApp Direct Chat Trigger */}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 active:scale-95 transition cursor-pointer border border-emerald-400"
          aria-label="Direct Contact"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-zinc-800 shadow-lg border border-zinc-200 hover:bg-zinc-100 active:scale-95 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

    </div>
  );
}
