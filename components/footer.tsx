import Link from "next/link";
import { AGENT_INFO } from "./data/real-estate-data";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-stone-100 text-zinc-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-600/30 bg-zinc-900 text-amber-300 font-serif text-lg font-bold shadow-md">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-zinc-950">
                  DEAL MAKERS
                </span>
                <span className="text-[10px] tracking-[0.2em] text-amber-800 uppercase font-semibold">
                  Alfred Siaw · REN 24819
                </span>
              </div>
            </div>
            
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm font-normal">
              Specializing in prime residential enclaves across Kuala Lumpur and Selangor—including Damansara Heights, KLCC, Kenny Hills, Bangsar, and Desa ParkCity.
            </p>

            <div className="pt-2 text-xs space-y-2 text-zinc-600 font-medium">
              <p className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>{AGENT_INFO.license}</span>
              </p>
              <p className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-700" />
                <span>Registered with LPPEH (BOVAEP) · Member of MIEA</span>
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Kuala Lumpur Office
            </h4>
            <div className="space-y-3 text-sm font-normal">
              <p className="flex items-start gap-2.5 text-zinc-700">
                <Phone className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="font-mono font-semibold">{AGENT_INFO.phone}</span>
              </p>
              <p className="flex items-start gap-2.5 text-zinc-700">
                <Mail className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{AGENT_INFO.email}</span>
              </p>
              <p className="flex items-start gap-2.5 text-zinc-700">
                <MapPin className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{AGENT_INFO.office}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-600">
              <li>
                <a href="#closings" className="hover:text-amber-800 transition">
                  Recent Sales & Closings
                </a>
              </li>
              <li>
                <a href="#valuation" className="hover:text-amber-800 transition">
                  Free Property Valuation
                </a>
              </li>
              <li>
                <a href="#buyer-finder" className="hover:text-amber-800 transition">
                  Off-Market Listings
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-800 transition">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-800 transition">
                  Our 4-Step Process
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Escrow */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Malaysian Regulatory Standard
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Earnest deposits are held securely in agency client accounts in accordance with the Valuers, Appraisers, Estate Agents and Property Managers Act 1981 (Act 242).
            </p>
            <div className="rounded-2xl bg-white p-3.5 border border-zinc-200 text-[11px] text-zinc-600 font-medium shadow-xs">
              🇲🇾 LPPEH E(1)2088. Real Estate Negotiator: REN 24819.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <p>© 2026 {AGENT_INFO.company}. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-900 transition cursor-pointer">Privacy Policy (PDPA)</span>
            <span className="hover:text-zinc-900 transition cursor-pointer">Terms of Agency</span>
            <span className="hover:text-zinc-900 transition cursor-pointer">LPPEH Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
