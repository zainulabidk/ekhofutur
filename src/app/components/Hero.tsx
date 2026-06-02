"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { MediaSlot } from "./ui/MediaSlot";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { HERO_SLIDES } from "../constants/data";
import { cn } from "@/lib/cn";

function HeroComponent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="home-hero-viewport relative w-full overflow-hidden bg-black snap-start snap-always shrink-0"
      aria-label="Hero"
    >
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "hero-slide",
            i === current ? "hero-slide-active" : "hero-slide-inactive"
          )}
          aria-hidden={i !== current}
        >
          <MediaSlot
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            sizes="100vw"
            placeholderLabel={s.category}
            placeholderSubtext={s.title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75" />
        </div>
      ))}

      {/* Content fits below fixed navbar within one viewport */}
      <div className="absolute inset-0 z-20 flex flex-col pt-[var(--site-nav-height)]">
        <div className="flex-1 flex items-center min-h-0 px-6 md:px-16">
          <div className="w-full max-w-4xl">
            <div key={current} className="hero-text-in">
              <p className="text-blue-400 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-3 font-medium">
                {slide.category}
              </p>
              <h1
                className="text-white font-bold mb-2 md:mb-4 leading-[1.05] tracking-tight uppercase"
                style={{
                  fontSize: "clamp(1.75rem, 6vw, 4.5rem)",
                }}
              >
                {slide.title}
              </h1>
              <p className="text-white/75 text-sm md:text-lg mb-4 md:mb-6 font-light max-w-xl leading-relaxed line-clamp-3 md:line-clamp-none">
                {slide.description}
              </p>
              <Link
                href="/services"
                className="inline-block text-white text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] uppercase border-b border-white/80 pb-1 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Explore ventures
              </Link>
            </div>
          </div>

          <div className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 text-white tabular-nums pointer-events-none">
            <span className="text-4xl lg:text-5xl font-bold">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-lg lg:text-xl font-light opacity-60 ml-1 self-end mb-1">
              /{String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="shrink-0 pb-5 md:pb-8 px-6 flex flex-col items-center gap-4 md:gap-5">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="text-white/90 hover:text-yellow-400 transition-colors p-1"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i === current ? "w-8 bg-yellow-400" : "w-3 bg-white/35 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="text-white/90 hover:text-yellow-400 transition-colors p-1"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
          </div>

          <a
            href="#main-content"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-yellow-400 transition-colors group"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.35em]">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-yellow-400" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
