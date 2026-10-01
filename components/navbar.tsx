"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Mail } from "lucide-react";
import { AGENT_INFO } from "./data/real-estate-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0b131e]/90 backdrop-blur-md text-white border-b border-white/10 shadow-lg"
          : "bg-transparent text-white border-b border-white/10"
      }`}
    >
      {/* Top Utility Bar - Transparent over Hero */}
      <div className="hidden md:block border-b border-white/10 text-[11px] text-zinc-300">
        <div className="mx-auto flex h-8 max-w-[1540px] items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Social Icons Left */}
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">f</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">wa</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">tt</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">𝕏</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">in</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">yt</span>
            <span className="hover:text-white transition cursor-pointer text-xs font-bold">ig</span>
          </div>

          {/* Contact Direct Right */}
          <div className="flex items-center gap-6 font-mono text-zinc-200">
            <a
              href={`tel:${AGENT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>{AGENT_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${AGENT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition font-sans"
            >
              <Mail className="h-3 w-3 text-emerald-400" />
              <span>{AGENT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - 100% Transparent Floating Over Hero */}
      <div className="mx-auto flex h-16 sm:h-20 max-w-[1540px] items-center justify-between px-4 sm:px-8 lg:px-12">
        
        {/* Brand Logo - WP Residence Style */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white font-mono font-bold text-sm tracking-wider border border-white/20 shadow-sm backdrop-blur-xs group-hover:bg-white/20 transition">
            <span>&lt;&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base sm:text-lg font-black tracking-wider text-white uppercase leading-none drop-shadow-sm">
              DEAL MAKERS
            </span>
            <span className="text-[10px] font-semibold tracking-[0.22em] text-zinc-300 uppercase mt-1">
              Alfred Siaw · REN 24819
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Clean Transparent Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[13px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo("closings")}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Recent Sales
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Direct Phone / Contact Button Right */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${AGENT_INFO.phone}`}
            className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition shadow-xs backdrop-blur-xs font-mono tracking-wide"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-400" />
            <span>{AGENT_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-white hover:bg-white/10 border border-white/20"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#070d17]/98 backdrop-blur-2xl px-5 py-6 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 text-white">
          <div className="flex flex-col space-y-1 text-sm font-medium">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-between text-left font-bold text-emerald-400 py-3 border-b border-white/10 text-base"
            >
              <span>Home</span>
              <span className="text-xs text-emerald-400/80">● Active</span>
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center justify-between text-left hover:text-white py-3 border-b border-white/10 text-zinc-200 text-sm active:bg-white/5 rounded-lg px-1 transition"
            >
              <span>Services</span>
              <span className="text-xs text-zinc-500">4 Advisory Areas</span>
            </button>
            <button
              onClick={() => scrollTo("closings")}
              className="flex items-center justify-between text-left hover:text-white py-3 border-b border-white/10 text-zinc-200 text-sm active:bg-white/5 rounded-lg px-1 transition"
            >
              <span>Recent Sales &amp; Closings</span>
              <span className="text-xs text-amber-300 font-semibold">RM 680M+</span>
            </button>
            <button
              onClick={() => scrollTo("testimonials")}
              className="flex items-center justify-between text-left hover:text-white py-3 border-b border-white/10 text-zinc-200 text-sm active:bg-white/5 rounded-lg px-1 transition"
            >
              <span>Client Testimonials</span>
              <span className="text-xs text-amber-400">5.0 ★</span>
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="flex items-center justify-between text-left hover:text-white py-3 border-b border-white/10 text-zinc-200 text-sm active:bg-white/5 rounded-lg px-1 transition"
            >
              <span>Frequently Asked Questions</span>
              <span className="text-xs text-zinc-500">FAQ</span>
            </button>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-5 space-y-2.5">
              <a
                href={`https://wa.me/${AGENT_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alfred, I am visiting your mobile website and would like to consult.")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition"
              >
                <span>WhatsApp Alfred Directly</span>
              </a>

              <a
                href={`tel:${AGENT_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full h-10 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold hover:bg-white/20 active:scale-95 transition"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span>Call {AGENT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
