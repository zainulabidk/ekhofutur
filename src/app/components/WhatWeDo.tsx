import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { MediaSlot } from "./ui/MediaSlot";
import { SITE } from "../constants/site";
import { SITE_MEDIA, VENTURE_AVATARS } from "../constants/media";

export function WhatWeDo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <Reveal className="relative shadow-xl rounded-2xl overflow-hidden shrink-0 w-full md:max-w-md group">
          <MediaSlot
            src={SITE_MEDIA.homeAbout}
            alt="Team collaboration"
            width={400}
            height={500}
            className="w-full h-auto"
            imageClassName="w-full h-auto grayscale group-hover:grayscale-0 transition-[filter] duration-500"
            placeholderLabel="Team photo"
          />
          <div className="flex items-center gap-3 absolute bottom-6 left-6 bg-white p-3 rounded-xl shadow-lg border border-black/5">
            <div className="flex -space-x-3 shrink-0">
              {VENTURE_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="relative size-8 rounded-full border-2 border-white overflow-hidden bg-slate-100"
                >
                  <MediaSlot src={src} alt="" fill sizes="32px" placeholderLabel=" " />
                </div>
              ))}
              <div className="flex items-center justify-center text-[9px] text-white size-8 rounded-full border-2 border-white bg-[#4682B4] font-black">
                50+
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight">
              Join {SITE.name}
            </p>
          </div>
        </Reveal>

        <div className="max-w-lg space-y-6">
          <Reveal>
            <p className="eyebrow text-slate-500 mb-2">What we do</p>
            <h2 className="heading-section text-slate-900">
              <span className="highlight-bar">
                <span>Diversified</span>
              </span>{" "}
              excellence
            </h2>
            <div className="w-20 h-1 mt-4 rounded-full bg-gradient-to-r from-[#4682B4] to-[#DDD9FF]" />
          </Reveal>

          <Reveal delay={80} className="space-y-4 text-slate-600 font-medium leading-relaxed">
            <p>{SITE.description}</p>
            <p>
              From fashion and dental care to digital services and sustainable living — one
              partner for every venture.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Link href="/about" className="btn-primary">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
