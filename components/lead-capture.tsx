"use client";

import { useState } from "react";
import { Building2, Home, CheckCircle2, Search, Sparkles, Shield, Clock, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AGENT_INFO } from "./data/real-estate-data";

export function LeadCapture() {
  const [activeTab, setActiveTab] = useState<"seller" | "buyer">("seller");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Seller Form State
  const [sellerData, setSellerData] = useState({
    address: "",
    propertyType: "Detached Bungalow / Villa",
    tenure: "Freehold (Pegangan Bebas)",
    size: "",
    timeline: "1 to 3 months",
    name: "",
    contact: "",
  });

  // Buyer Form State
  const [buyerData, setBuyerData] = useState({
    budget: "RM 3,000,000 - RM 5,000,000",
    area: "",
    preference: "Gated & Guarded Community",
    timeline: "Ready to view homes now",
    name: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section id="valuation" className="py-24 lg:py-32 bg-white text-zinc-900 relative border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-50 px-4 py-1 text-xs font-semibold tracking-wider text-amber-900">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-[0.16em]">Client Services & Property Advisory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950">
            How Can We Assist You?
          </h2>
          <p className="text-base text-zinc-600 font-normal leading-relaxed">
            Whether you are considering selling a property in Klang Valley or searching for your next family home, our registered team provides reliable advice and dedicated representation.
          </p>
        </div>

        {/* Lead Switcher Box */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-stone-50/70 p-6 sm:p-10 shadow-xl">
          
          {/* Top Switcher */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-zinc-200/80 border border-zinc-300/80 rounded-2xl mb-8">
            <button
              onClick={() => {
                setActiveTab("seller");
                setSubmitted(false);
              }}
              className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === "seller"
                  ? "bg-white text-zinc-950 shadow-md font-bold"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Home className="h-4 w-4 text-amber-600" />
              <span>For Owners · Free Valuation</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("buyer");
                setSubmitted(false);
              }}
              className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === "buyer"
                  ? "bg-white text-zinc-950 shadow-md font-bold"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Search className="h-4 w-4 text-amber-600" />
              <span>For Buyers · Off-Market Listings</span>
            </button>
          </div>

          {/* Form Content */}
          {submitted ? (
            <div className="rounded-3xl border border-emerald-300 bg-emerald-50/70 p-8 sm:p-12 text-center animate-in fade-in zoom-in-95">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 mb-4">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
                Thank You! Your Request Has Been Received.
              </h3>
              <p className="mt-3 text-sm text-zinc-700 max-w-lg mx-auto font-normal leading-relaxed">
                {activeTab === "seller"
                  ? "We have received your property details. Our team is pulling recent JPPH transaction caveats and panel bank indicative valuations. Alfred Siaw will contact you via WhatsApp / phone within a few hours."
                  : "Thank you for sharing your home criteria. We will review our current verified listings and private off-market properties across Klang Valley and share matching options shortly."}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-zinc-300 text-xs tracking-wider uppercase font-bold text-zinc-800"
                >
                  Submit Another Inquiry
                </Button>
                <a
                  href={`tel:${AGENT_INFO.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-2.5 text-xs font-bold text-amber-300 uppercase tracking-wider hover:bg-zinc-800 transition"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Direct WhatsApp / Call
                </a>
              </div>
            </div>
          ) : (
            <div>
              {activeTab === "seller" ? (
                /* Seller Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3.5">
                    <Sparkles className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        Indicative Bank Valuation & JPPH Caveat Analysis
                      </p>
                      <p className="text-xs text-zinc-600 font-normal">
                        Receive a comprehensive market report based on recent verified transactions in your development and indicative feedback from leading panel banks (Maybank, CIMB, Public Bank).
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Property Address, Taman or Condo Name *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Bukit Damansara, Residensi 22 Mont Kiara, Bangsar"
                        value={sellerData.address}
                        onChange={(e) => setSellerData({ ...sellerData, address: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Property Category
                      </label>
                      <select
                        value={sellerData.propertyType}
                        onChange={(e) => setSellerData({ ...sellerData, propertyType: e.target.value })}
                        className="w-full h-12 rounded-xl border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>Detached Bungalow / Villa</option>
                        <option>Semi-Detached (Semi-D)</option>
                        <option>Condominium / Sky Penthouse</option>
                        <option>Terrace / Superlink House</option>
                        <option>Commercial Shoplot / Office Building</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Land Area & Built-Up (sq. ft.)
                      </label>
                      <Input
                        placeholder="e.g. Land: 7,500 sq ft · Built-up: 5,200 sq ft"
                        value={sellerData.size}
                        onChange={(e) => setSellerData({ ...sellerData, size: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Land Tenure
                      </label>
                      <select
                        value={sellerData.tenure}
                        onChange={(e) => setSellerData({ ...sellerData, tenure: e.target.value })}
                        className="w-full h-12 rounded-xl border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>Freehold (Pegangan Bebas)</option>
                        <option>Leasehold (Pajakan)</option>
                        <option>Malay Reserve (Rizab Melayu)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Owner Name / Representative *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Dato' David Lee / Madam Tan"
                        value={sellerData.name}
                        onChange={(e) => setSellerData({ ...sellerData, name: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Mobile Number / WhatsApp *
                      </label>
                      <Input
                        required
                        placeholder="+60 12-345 6789"
                        value={sellerData.contact}
                        onChange={(e) => setSellerData({ ...sellerData, contact: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                      <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Strict confidentiality assured. LPPEH Registered Agency.</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto h-13 bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-bold px-8 rounded-xl shadow-lg text-xs uppercase tracking-wider transition-all"
                    >
                      {loading ? "Preparing Valuation..." : "Get Free Property Valuation"}
                      <ArrowRight className="ml-2 h-4 w-4 text-amber-400" />
                    </Button>
                  </div>
                </form>
              ) : (
                /* Buyer Form */
                <form id="buyer-finder" onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-start gap-3.5">
                    <Sparkles className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
                        Exclusive Off-Market & Private Enclave Listings
                      </p>
                      <p className="text-xs text-zinc-600 font-normal">
                        Many luxury homes in Damansara Heights, Kenny Hills, and prime KLCC trade quietly off-market. Share your requirements for tailored matching.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Target Budget Range
                      </label>
                      <select
                        value={buyerData.budget}
                        onChange={(e) => setBuyerData({ ...buyerData, budget: e.target.value })}
                        className="w-full h-12 rounded-xl border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>RM 1,500,000 - RM 3,000,000</option>
                        <option>RM 3,000,000 - RM 5,000,000</option>
                        <option>RM 5,000,000 - RM 10,000,000</option>
                        <option>RM 10,000,000 - RM 20,000,000</option>
                        <option>RM 20,000,000+ (Trophy Estate)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Target Location / Enclave
                      </label>
                      <Input
                        placeholder="e.g. Damansara Heights, Mont Kiara, Bangsar, Desa ParkCity"
                        value={buyerData.area}
                        onChange={(e) => setBuyerData({ ...buyerData, area: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Preferred Property Feature
                      </label>
                      <select
                        value={buyerData.preference}
                        onChange={(e) => setBuyerData({ ...buyerData, preference: e.target.value })}
                        className="w-full h-12 rounded-xl border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>Gated & Guarded Community</option>
                        <option>Unblocked KLCC / City Skyline View</option>
                        <option>Walking Distance to International Schools</option>
                        <option>Spacious Garden / Private Pool Bungalow</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Target Purchase Timeline
                      </label>
                      <select
                        value={buyerData.timeline}
                        onChange={(e) => setBuyerData({ ...buyerData, timeline: e.target.value })}
                        className="w-full h-12 rounded-xl border border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>Ready to view properties now</option>
                        <option>Within the next 1 to 3 months</option>
                        <option>Exploring opportunities casually</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        Your Full Name *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Kenneth Wong / Sarah Lim"
                        value={buyerData.name}
                        onChange={(e) => setBuyerData({ ...buyerData, name: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">
                        WhatsApp / Mobile Number *
                      </label>
                      <Input
                        required
                        placeholder="+60 12-345 6789"
                        value={buyerData.contact}
                        onChange={(e) => setBuyerData({ ...buyerData, contact: e.target.value })}
                        className="bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-12 rounded-xl shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                      <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>An advisor will review your criteria and respond promptly</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto h-13 bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-bold px-8 rounded-xl shadow-lg text-xs uppercase tracking-wider transition-all"
                    >
                      {loading ? "Processing..." : "Submit Buyer Request"}
                      <ArrowRight className="ml-2 h-4 w-4 text-amber-400" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
