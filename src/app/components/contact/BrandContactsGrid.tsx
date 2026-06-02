import Link from "next/link";
import { Mail } from "lucide-react";
import { BRAND_RESOURCES } from "@/app/constants/site";

const BRAND_LABELS: Record<string, string> = {
  "old-school": "Old School",
  compliment: "Complikit",
  "trend-setter": "Trend Setters",
  builders: "Builders & Realtors",
  "pots-and-pans": "Pots & Pans",
  "ekho-rascapes": "Ekho Rascapes",
  ekhodigix: "Digix Development",
  skillbyte: "SkillByte AI Marketing",
  "ekho-future": "Ekho Future",
  pureflow: "Pure Flow",
  lubnas: "Lubnas Dental",
  "hopeful-steps": "Hopeful Steps",
  wellness: "Home Stays & Wellness",
};

export function BrandContactsGrid() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-slate-900">
          Brand contacts
        </h2>
        <p className="text-slate-500 text-sm font-medium mt-1">
          Reach the right team directly — all ventures at a glance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {BRAND_RESOURCES.map((brand) => {
          const label = BRAND_LABELS[brand.id] ?? brand.name;

          return (
            <div
              key={brand.id}
              className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 hover:border-yellow-400 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <span className="font-black text-sm uppercase italic tracking-tight text-slate-900">
                {label}
              </span>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors min-w-0"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-yellow-500" />
                <span className="text-xs font-medium truncate" title={brand.email}>
                  {brand.email}
                </span>
              </a>
              {brand.sitePath && (
                <Link
                  href={brand.sitePath}
                  className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-yellow-600 transition-colors w-fit"
                >
                  View venture →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
