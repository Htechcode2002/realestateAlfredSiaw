import { TrendingUp, Camera, Handshake, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Accurate Valuation & Pricing Strategy",
      desc: "We analyze recent verified neighborhood sales, current inventory, and active buyer demand to develop a realistic, competitive pricing strategy for your home.",
      icon: TrendingUp,
      tag: "Data-Driven Pricing Guidance",
    },
    {
      num: "02",
      title: "Professional Media & Staging Advice",
      desc: "We arrange professional photography, high-definition video walkthroughs, and tailored staging recommendations to present your property at its absolute best.",
      icon: Camera,
      tag: "Maximum Buyer Appeal & Engagement",
    },
    {
      num: "03",
      title: "Targeted Marketing & Private Showings",
      desc: "Your listing is promoted through top real estate channels and introduced directly to our private network of qualified buyers through accompanied private viewings.",
      icon: Handshake,
      tag: "Pre-Qualified Buyer Showings",
    },
    {
      num: "04",
      title: "Skilled Negotiation & Closing Support",
      desc: "We negotiate on your behalf to secure the strongest price and terms, while coordinating closely with escrow, title, and attorneys for a smooth, timely closing.",
      icon: ShieldCheck,
      tag: "Seamless, Protected Closing",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white text-zinc-900 relative border-b border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-50 px-4 py-1 text-xs font-semibold tracking-wider text-amber-900">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-[0.16em]">How We Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950">
            Our 4-Step Process for Sellers
          </h2>
          <p className="text-base text-zinc-600 font-normal leading-relaxed">
            A clear, organized approach designed to protect your interests, eliminate surprises, and help you achieve the best possible sale outcome.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-zinc-200 bg-stone-50/80 p-7 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-amber-700">
                      {step.num}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-zinc-950 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 text-[11px] font-bold text-emerald-700 tracking-wide">
                  ✓ {step.tag}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
