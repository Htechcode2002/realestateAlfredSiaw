"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Coffee, Video, CheckCircle2, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AGENT_INFO } from "./data/real-estate-data";

export function BookingSection() {
  const [meetingType, setMeetingType] = useState<"coffee" | "zoom" | "onsite">("coffee");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    topic: "Selling a Property & Malaysian Market Valuation",
    notes: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-24 lg:py-32 bg-stone-50/80 text-zinc-900 relative overflow-hidden border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Introduction */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-amber-900 border border-amber-600/30 bg-amber-50 px-4 py-1.5 rounded-full">
              Personalized Real Estate Consultation
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-zinc-950 leading-[1.12]">
              Schedule a Free <br />
              <span className="italic text-zinc-600">30-Minute</span>{" "}
              <span className="text-amber-700">Consultation</span>
            </h2>

            <p className="text-zinc-600 text-base leading-relaxed font-normal">
              Whether you are preparing to sell, searching for your next home in Klang Valley, or curious about bank valuations and market trends, we offer straightforward, transparent advice with zero sales pressure.
            </p>

            {/* Consultant Profile info */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-5 flex items-center gap-4 shadow-sm">
              <img
                src={AGENT_INFO.headshot}
                alt={AGENT_INFO.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-amber-500/30"
              />
              <div>
                <p className="font-serif text-base font-bold text-zinc-900">{AGENT_INFO.name}</p>
                <p className="text-xs text-zinc-500 font-normal">{AGENT_INFO.title}</p>
                <p className="text-[10px] text-amber-800 font-mono mt-0.5 font-semibold">{AGENT_INFO.license}</p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-600 font-medium">
              <div className="flex items-center gap-3">
                <Coffee className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Meet over coffee (Pavilion Damansara Heights, Bangsar, or KLCC)</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Connect via Zoom or Google Meet from anywhere</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-amber-600 shrink-0" />
                <span>Prompt WhatsApp confirmation within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right: Booking Form in Pure White */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in zoom-in-95">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4 border border-emerald-300">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
                    Consultation Request Confirmed
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 max-w-md mx-auto font-normal leading-relaxed">
                    Thank you, {formData.name || "there"}! Alfred Siaw will reach out to you via WhatsApp / mobile shortly to confirm the appointment details.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 border-zinc-300 text-xs font-bold uppercase tracking-wider text-zinc-800"
                  >
                    Reschedule or Book Another Time
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                    <h3 className="font-serif text-lg font-bold text-zinc-900">
                      Choose Your Preferred Format
                    </h3>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">Free & Confidential</span>
                  </div>

                  {/* Meeting Format Pill Selection */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setMeetingType("coffee")}
                      className={`flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition cursor-pointer border ${
                        meetingType === "coffee"
                          ? "bg-zinc-900 text-amber-300 border-zinc-900 font-bold shadow-md"
                          : "border-zinc-300 bg-stone-50 text-zinc-700 hover:bg-stone-100"
                      }`}
                    >
                      <Coffee className="h-3.5 w-3.5" />
                      <span>In-Person Coffee</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType("zoom")}
                      className={`flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition cursor-pointer border ${
                        meetingType === "zoom"
                          ? "bg-zinc-900 text-amber-300 border-zinc-900 font-bold shadow-md"
                          : "border-zinc-300 bg-stone-50 text-zinc-700 hover:bg-stone-100"
                      }`}
                    >
                      <Video className="h-3.5 w-3.5" />
                      <span>Video Call</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMeetingType("onsite")}
                      className={`flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition cursor-pointer border ${
                        meetingType === "onsite"
                          ? "bg-zinc-900 text-amber-300 border-zinc-900 font-bold shadow-md"
                          : "border-zinc-300 bg-stone-50 text-zinc-700 hover:bg-stone-100"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Property Visit</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">Your Full Name *</label>
                      <Input
                        required
                        placeholder="e.g. Kelvin Tan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-stone-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-11 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">WhatsApp / Mobile Number *</label>
                      <Input
                        required
                        placeholder="+60 12-345 6789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-stone-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-11 rounded-xl shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">Topic You’d Like to Discuss</label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full h-11 rounded-xl border border-zinc-300 bg-stone-50 px-3 text-xs text-zinc-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option>Selling a Property & Malaysian Market Valuation</option>
                        <option>Buying a Home in Klang Valley & Off-Market Options</option>
                        <option>Foreign Purchaser Consent & RPGT / MOT Tax Inquiries</option>
                        <option>Commercial Shoplot & Land Due Diligence</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">Preferred Day or Time</label>
                      <Input
                        placeholder="e.g. Weekday morning or Saturday afternoon"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-stone-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-11 rounded-xl shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold tracking-wider text-zinc-700 uppercase">Additional Notes (Optional)</label>
                    <Input
                      placeholder="e.g. Interested in understanding recent transactions in Damansara Heights"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="bg-stone-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400 h-11 rounded-xl shadow-xs"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-13 bg-zinc-900 hover:bg-zinc-800 text-amber-300 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
                  >
                    {loading ? "Submitting..." : "Schedule My Free Consultation"}
                    <ArrowRight className="ml-2 h-4 w-4 text-amber-400" />
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
