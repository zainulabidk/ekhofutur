import Link from "next/link";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { MediaSlot } from "../components/ui/MediaSlot";
import { Reveal } from "../components/ui/Reveal";
import { ServiceVentureContent } from "../components/services/ServiceVentureContent";
import { VENTURES } from "../constants/site";
import { SITE_MEDIA } from "../constants/media";
import { getVentureContent } from "../constants/ventureContent";

const FEATURED_ORDER = [
  "builders",
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

const otherVentures = VENTURES.filter(
  (v) => !FEATURED_ORDER.includes(v.id as (typeof FEATURED_ORDER)[number])
);

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

      <section className="section-padding">
        <div className="container-site space-y-16 md:space-y-20">
          {featuredVentures.map((venture, idx) => {
            const content = getVentureContent(venture.id);
            if (!content) return null;

            return (
              <Reveal
                key={venture.id}
                delay={idx * 40}
                className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-12 items-start border-b border-slate-100 pb-16 md:pb-20 last:border-0 last:pb-0"
              >
                {/* Left: imagery */}
                <div className="lg:sticky lg:top-28 grid grid-cols-2 gap-2 md:gap-3">
                  {venture.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-md"
                    >
                      <MediaSlot
                        src={img}
                        alt={venture.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        imageClassName="hover:scale-105 transition-transform duration-400"
                        placeholderLabel={venture.title}
                      />
                    </div>
                  ))}
                </div>

                {/* Right: full venture copy */}
                <ServiceVentureContent venture={venture} content={content} />
              </Reveal>
            );
          })}
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
