import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { ServiceVentureContent } from "../components/services/ServiceVentureContent";
import { VENTURES } from "../constants/site";
import { getVentureContent } from "../constants/ventureContent";

const FEATURED_ORDER = [
  "builders",
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
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        height="md"
      />

      <section className="section-padding">
        <div className="container-site space-y-16 md:space-y-20">
          {featuredVentures.map((venture, idx) => {
            const content = getVentureContent(venture.id)!;

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
                      <Image
                        src={img}
                        alt={venture.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-400"
                        sizes="(max-width: 1024px) 50vw, 220px"
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
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
                >
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
