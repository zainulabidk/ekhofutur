import Link from "next/link";
import { MediaSlot } from "../ui/MediaSlot";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "../layout/SiteShell";
import { PageHero } from "../ui/PageHero";
import { ContactStrip } from "../ui/ContactStrip";
import { Reveal } from "../ui/Reveal";
import { ServiceVentureContent } from "../services/ServiceVentureContent";
import { VentureMediaShowcase } from "./VentureMediaShowcase";
import type { Venture } from "@/app/constants/site";
import { whatsappUrl } from "@/app/constants/brandResources";
import { getVentureContent } from "@/app/constants/ventureContent";
import { getVentureMedia } from "@/lib/venture-media";

type VentureLandingProps = {
  venture: Venture;
};

export function VentureLanding({ venture }: VentureLandingProps) {
  const accent = venture.accent ?? "#FFD700";
  const content = getVentureContent(venture.id);
  const media = getVentureMedia(venture.id);
  const WA = whatsappUrl(`Hi! I'm interested in ${venture.title}.`);

  return (
    <SiteShell>
      <PageHero
        title={venture.title}
        subtitle={venture.tagline ?? venture.category}
        image={venture.images[0]}
      />

      <section className="section-padding-tight border-b border-black/5 bg-surface">
        <div className="container-site flex flex-wrap items-center justify-between gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            className="text-sm text-slate-500 font-bold hover:text-black transition-colors"
          >
            Contact form →
          </Link>
        </div>
      </section>

      {content ? (
        <section className="section-padding">
          <div className="container-site max-w-4xl">
            <Reveal>
              <ServiceVentureContent
                venture={venture}
                content={content}
                showExploreLink={false}
              />
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="section-padding">
          <div className="container-site max-w-3xl">
            <Reveal className="space-y-4">
              <p
                className="text-xs font-black uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                {venture.category}
              </p>
              <h2 className="heading-section">About {venture.title}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{venture.description}</p>
            </Reveal>
          </div>
        </section>
      )}

      {media && <VentureMediaShowcase media={media} title={venture.title} accent={accent} />}

      {venture.videoPoster && !venture.videoUrl && (
        <section className="section-padding-tight">
          <div className="container-site">
            <Reveal className="relative aspect-video rounded-3xl overflow-hidden group">
              <MediaSlot
                src={venture.videoPoster}
                alt={`${venture.title} demo`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                placeholderLabel="Demo media"
                placeholderSubtext={venture.title}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 gap-4">
                <p className="text-white text-xl md:text-3xl font-black uppercase italic tracking-tight max-w-lg">
                  {venture.id === "ekhodigix" || venture.id === "skillbyte"
                    ? "Book a live AI demo or workshop"
                    : "See our work in action"}
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ backgroundColor: accent }}
                >
                  Request a session
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

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
