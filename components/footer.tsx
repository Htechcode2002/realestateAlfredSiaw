import { AGENT_INFO } from "./data/real-estate-data";
import { Phone, Mail, MapPin, Shield, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-stone-100 text-zinc-600 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-amber-600/30 bg-zinc-900 text-amber-300 font-mono text-base font-bold shadow-md">
                &lt;&gt;
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg sm:text-xl font-black tracking-wider text-zinc-950">
                  DEAL MAKERS
                </span>
                <span className="text-[10px] tracking-[0.2em] text-amber-800 uppercase font-semibold">
                  Alfred Siaw · REN 24819
                </span>
              </div>
            </div>
            
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Specializing in prime residential enclaves across Kuala Lumpur and Selangor—including Damansara Heights, KLCC, Kenny Hills, Bangsar, and Desa ParkCity.
            </p>

            <div className="pt-1 text-xs space-y-2 text-zinc-600 font-medium">
              <p className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{AGENT_INFO.license}</span>
              </p>
              <p className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-700 shrink-0" />
                <span>Registered with LPPEH (BOVAEP) · Member of MIEA</span>
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Kuala Lumpur Office
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-normal">
              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="flex items-start gap-2.5 text-zinc-700 hover:text-zinc-950 transition"
              >
                <Phone className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="font-mono font-semibold">{AGENT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${AGENT_INFO.email}`}
                className="flex items-start gap-2.5 text-zinc-700 hover:text-zinc-950 transition"
              >
                <Mail className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="break-all">{AGENT_INFO.email}</span>
              </a>
              <p className="flex items-start gap-2.5 text-zinc-700">
                <MapPin className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                <span>{AGENT_INFO.office}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-zinc-600">
              <li>
                <a href="#services" className="hover:text-amber-800 transition py-0.5 inline-block">
                  Advisory Services
                </a>
              </li>
              <li>
                <a href="#closings" className="hover:text-amber-800 transition py-0.5 inline-block">
                  Recent Sales &amp; Closings
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-800 transition py-0.5 inline-block">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-800 transition py-0.5 inline-block">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Escrow */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-950">
              Regulatory Standard
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed font-normal">
              Earnest deposits are held securely in accredited agency client accounts in accordance with Act 242.
            </p>
            <div className="rounded-xl sm:rounded-2xl bg-white p-3 sm:p-3.5 border border-zinc-200 text-[11px] text-zinc-600 font-medium shadow-xs">
              🇲🇾 LPPEH E(1)2088 · REN 24819.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-medium text-center sm:text-left">
          <p>© 2026 {AGENT_INFO.company}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="hover:text-zinc-900 transition cursor-pointer">Privacy Policy (PDPA)</span>
            <span className="hover:text-zinc-900 transition cursor-pointer">Terms of Agency</span>
            <span className="hover:text-zinc-900 transition cursor-pointer">LPPEH Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
