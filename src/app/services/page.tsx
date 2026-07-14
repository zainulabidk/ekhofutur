import Link from "next/link";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { MediaSlot } from "../components/ui/MediaSlot";
import { Reveal } from "../components/ui/Reveal";
import { VENTURES, getNavServiceGroups } from "../constants/site";
import { SITE_MEDIA } from "../constants/media";
import { ArrowRight } from "lucide-react";

const navGroups = getNavServiceGroups();

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Our Services"
        subtitle="Ventures across the Echo Futur group"
        image={SITE_MEDIA.servicesHero}
        height="md"
      />

      <section className="section-padding-tight border-b border-black/5 bg-surface">
        <div className="container-site space-y-8 md:space-y-10">
          <Reveal>
            <h2 className="heading-section">Explore ventures</h2>
            <p className="text-slate-500 font-medium mt-2 max-w-xl">
              Every Echo Futur brand at a glance — tap a card or use Menu for quick navigation.
            </p>
          </Reveal>

          <div className="space-y-8 md:space-y-10">
            {navGroups.map((group, gIdx) => (
              <Reveal key={group.category} delay={gIdx * 20}>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 mb-3">
                  {group.category}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.items.map((item) => {
                    const venture = VENTURES.find((v) => v.href === item.href);
                    if (!venture) return null;
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 bg-white hover:border-yellow-400 hover:shadow-md transition-all h-full"
                        >
                          <div className="relative aspect-[4/3] bg-slate-100">
                            <MediaSlot
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 640px) 50vw, 200px"
                              imageClassName="group-hover:scale-105 transition-transform duration-300"
                              placeholderLabel={item.name}
                            />
                          </div>
                          <div className="p-3 flex-1 flex flex-col gap-1 min-w-0">
                            <span className="text-[11px] font-black uppercase italic leading-tight text-slate-900 line-clamp-2 group-hover:text-[#4682B4] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[9px] text-slate-400 uppercase tracking-wider mt-auto flex items-center gap-1">
                              View
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
