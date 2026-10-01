import { STATS_DATA } from "./data/real-estate-data";
import { TrendingUp, Clock, BadgePercent, ThumbsUp } from "lucide-react";

export function StatsBar() {
  const icons = [TrendingUp, Clock, BadgePercent, ThumbsUp];

  return (
    <div className="relative z-20 -mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
        {STATS_DATA.map((item, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className={`flex flex-col space-y-1.5 ${
                idx !== 0 ? "border-l border-zinc-200 pl-4 sm:pl-7" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
                  {item.label}
                </span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950">
                {item.value}
              </div>
              <div className="text-[11px] font-semibold tracking-wide text-emerald-700 flex items-center gap-1">
                <span>{item.change}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
