import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "../layout/SiteShell";
import { PageHero } from "../ui/PageHero";
import { ContactStrip } from "../ui/ContactStrip";
import { Reveal } from "../ui/Reveal";
import type { Venture } from "@/app/constants/site";
import { getBrandById } from "@/app/constants/brandResources";

type VentureLandingProps = {
  venture: Venture;
};

export function VentureLanding({ venture }: VentureLandingProps) {
  const brand = getBrandById(venture.id);
  const accent = venture.accent ?? "#FFD700";

  return (
    <SiteShell>
      <PageHero
        title={venture.title}
        subtitle={venture.tagline ?? venture.category}
        image={venture.images[0]}
      />

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="space-y-6">
            <p
              className="text-xs font-black uppercase tracking-[0.35em]"
              style={{ color: accent }}
            >
              {venture.category}
            </p>
            <h2 className="heading-section">Built for the future</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              {venture.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              {brand?.googleDocUrl && (
                <a
                  href={brand.googleDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-black font-black uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-colors"
                >
                  Brand brief
                </a>
              )}
            </div>
            {brand?.email && (
              <a
                href={`mailto:${brand.email}`}
                className="text-sm text-slate-500 font-bold hover:text-black transition-colors"
              >
                {brand.email}
              </a>
            )}
          </Reveal>

          <div className="grid grid-cols-2 gap-2 md:gap-3">
            {venture.images.slice(0, 4).map((src, i) => (
              <Reveal key={src + i} delay={i * 40} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-400"
                  sizes="(max-width: 1024px) 50vw, 280px"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-tight bg-black text-white">
        <div className="container-site space-y-8">
          <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight">
            Contact {venture.title}
          </h3>
          <ContactStrip variant="dark" />
        </div>
      </section>
    </SiteShell>
  );
}
