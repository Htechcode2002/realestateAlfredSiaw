"use client";

import { ClosingCase } from "./data/real-estate-data";
import { X, CheckCircle, Clock, MapPin, Bed, Bath, Maximize, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseDetailModalProps {
  closingCase: ClosingCase | null;
  onClose: () => void;
  onConsult: () => void;
}

export function CaseDetailModal({ closingCase, onClose, onConsult }: CaseDetailModalProps) {
  if (!closingCase) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-zinc-200 shadow-2xl text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2.5 text-white hover:bg-black/90 transition backdrop-blur-sm shadow-md"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
          <img
            src={closingCase.image}
            alt={closingCase.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white shadow-lg">
              ● VERIFIED CLOSED SALE
            </span>
            <span className="rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-wider text-amber-300 backdrop-blur-md">
              {closingCase.categoryName}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <p className="text-xs font-medium tracking-wide text-zinc-200 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              {closingCase.location}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {closingCase.title}
            </h3>
            <div className="flex flex-wrap items-baseline gap-3 mt-2">
              <span className="font-serif text-3xl font-black text-amber-300">
                {closingCase.soldPrice}
              </span>
              <span className="text-xs bg-amber-400/20 text-amber-200 border border-amber-400/40 px-2.5 py-0.5 rounded font-medium">
                {closingCase.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-4 gap-2 rounded-2xl bg-stone-50 p-4 text-center border border-zinc-200">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Time on Market</p>
              <p className="font-serif text-base sm:text-lg font-bold text-zinc-900 mt-1 flex items-center justify-center gap-1">
                <Clock className="h-3.5 w-3.5 text-amber-700" />
                {closingCase.daysOnMarket} Days
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Bedrooms / Baths</p>
              <p className="font-serif text-base sm:text-lg font-bold text-zinc-900 mt-1">
                {closingCase.beds} Beds · {closingCase.baths} Baths
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Square Footage</p>
              <p className="font-serif text-base sm:text-lg font-bold text-zinc-900 mt-1">
                {closingCase.sqft}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Closing Date</p>
              <p className="font-serif text-base sm:text-lg font-bold text-amber-700 mt-1">
                {closingCase.closedDate}
              </p>
            </div>
          </div>

          {/* Property Context */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800 mb-2.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              The Property & Context
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-zinc-200 font-normal">
              {closingCase.story}
            </p>
          </div>

          {/* Marketing & Sale Strategy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-800 mb-2.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
              Our Strategy & Results
            </h4>
            <div className="space-y-2.5">
              {closingCase.strategy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback Quote */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-800 mb-1">
              Client Feedback
            </p>
            <p className="text-sm italic font-serif text-zinc-800 leading-relaxed">
              {closingCase.sellerQuote}
            </p>
          </div>

          {/* Modal Footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200">
            <div>
              <p className="text-xs text-zinc-500">Planning to sell a similar property?</p>
              <p className="text-sm font-bold text-zinc-900">Let’s discuss your property’s potential</p>
            </div>
            <Button
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-bold px-6 text-xs uppercase tracking-wider"
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
