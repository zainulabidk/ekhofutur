import Link from "next/link";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { MediaSlot } from "../components/ui/MediaSlot";
import { Reveal } from "../components/ui/Reveal";
import { VentureDetailsPager } from "../components/services/VentureDetailsPager";
import { VENTURES, getNavServiceGroups } from "../constants/site";
import { SITE_MEDIA } from "../constants/media";
import { getVentureContent } from "../constants/ventureContent";
import { ArrowRight } from "lucide-react";

const FEATURED_ORDER = [
  "builders",
  "builders-solar",
  "builders-lift",
  "ekhodigix",
  "skillbyte",
  "trend-setter",
  "compliment",
  "pots-and-pans",
  "wellness",
] as const;

const featuredVentures = FEATURED_ORDER.map((id) =>
  VENTURES.find((v) => v.id === id)
).filter((v): v is (typeof VENTURES)[number] => Boolean(v));

const featuredWithContent = featuredVentures
  .map((venture) => {
    const content = getVentureContent(venture.id);
    return content ? { venture, content } : null;
  })
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

const otherVentures = VENTURES.filter(
  (v) => !FEATURED_ORDER.includes(v.id as (typeof FEATURED_ORDER)[number])
);

const navGroups = getNavServiceGroups();

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="Ventures across the Echo Futur group"
        image={SITE_MEDIA.servicesHero}
        height="md"
      />

      {/* All ventures — one screen overview */}
      <section className="border-b border-black/5 bg-surface min-h-[calc(100svh-var(--site-nav-height))] flex flex-col">
        <div className="container-site py-8 md:py-10 flex flex-col flex-1 min-h-0">
          <Reveal className="shrink-0 mb-6 md:mb-8">
            <h2 className="heading-section">Explore ventures</h2>
            <p className="text-slate-500 font-medium mt-2 max-w-xl">
              Every Echo Futur brand at a glance — open Menu anytime for quick navigation.
            </p>
          </Reveal>

          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain scrollbar-hide -mx-1 px-1">
            <div className="space-y-8 pb-4">
              {navGroups.map((group, gIdx) => (
                <Reveal key={group.category} delay={gIdx * 30}>
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
                            <div className="p-3 flex-1 flex flex-col gap-1">
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
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site space-y-16 md:space-y-20">
          <Reveal>
            <h2 className="heading-section">Venture details</h2>
            <p className="text-slate-500 font-medium mt-2">In-depth information for each service.</p>
          </Reveal>

          <VentureDetailsPager items={featuredWithContent} />
        </div>
      </section>

      {otherVentures.length > 0 && (
        <section className="section-padding-tight bg-surface border-t border-black/5">
          <div className="container-site space-y-10">
            <Reveal>
              <h2 className="heading-section">More ventures</h2>
              <p className="text-slate-500 font-medium mt-2 max-w-xl">
                Explore the rest of the Echo Futur ecosystem.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVentures.map((venture, idx) => (
                <Reveal
                  key={venture.id}
                  delay={idx * 40}
                  className="bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <MediaSlot
                      src={venture.images[0]}
                      alt={venture.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholderLabel={venture.title}
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow mb-2">{venture.category}</p>
                    <h3 className="text-xl font-black uppercase italic mb-2">
                      {venture.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {venture.description}
                    </p>
                    <Link href={venture.href} className="btn-primary text-[9px] py-3 px-6">
                      Explore
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
