"use client";

import { Play } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { MediaSlot } from "../ui/MediaSlot";
import type { VentureMedia } from "@/lib/venture-media";
import { cn } from "@/lib/cn";

type VentureMediaShowcaseProps = {
  media: VentureMedia;
  title: string;
  accent?: string;
  className?: string;
};

export function VentureMediaShowcase({
  media,
  title,
  accent = "#FFD700",
  className,
}: VentureMediaShowcaseProps) {
  const { gallery, videoUrl, videoPoster } = media;

  return (
    <section className={cn("section-padding bg-surface", className)}>
      <div className="container-site space-y-10 md:space-y-14">
        <Reveal className="max-w-2xl space-y-3">
          <p className="eyebrow" style={{ color: accent }}>
            Gallery
          </p>
          <h2 className="heading-section">Inside {title}</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {gallery.map((src, i) => (
            <Reveal
              key={`${src}-${i}`}
              delay={i * 50}
              className="relative aspect-square rounded-2xl overflow-hidden bg-black/5"
            >
              <MediaSlot
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 280px"
                imageClassName="hover:scale-105 transition-transform duration-500 ease-out"
                placeholderLabel={`${title} ${i + 1}`}
              />
            </Reveal>
          ))}
        </div>

        {videoUrl && (
          <Reveal className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl">
            {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
              <iframe
                src={videoUrl}
                title={`${title} video`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={videoPoster}
                >
                  <source src={videoUrl} />
                </video>
                <div
                  className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20"
                  aria-hidden
                >
                  <span
                    className="size-16 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: accent }}
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </span>
                </div>
              </>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
