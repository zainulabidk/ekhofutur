"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { MediaSlot } from "./ui/MediaSlot";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { HERO_SLIDES } from "../constants/data";
import { cn } from "@/lib/cn";

const SLIDE_COUNT = HERO_SLIDES.length;
const AUTOPLAY_MS = 7000;

function HeroComponent() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const nextSlide = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prevSlide = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility, { passive: true });
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = HERO_SLIDES[current];
  const prevIndex = (current - 1 + SLIDE_COUNT) % SLIDE_COUNT;
  const visibleIndices = new Set([current, prevIndex]);

  return (
    <section
      className="home-hero-viewport relative w-full overflow-hidden bg-black snap-start shrink-0"
      aria-label="Hero"
      aria-roledescription="carousel"
    >
      {HERO_SLIDES.map((s, i) => {
        if (!visibleIndices.has(i)) return null;

        return (
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
        );
      })}

      <div className="absolute inset-0 z-20 flex flex-col pt-[var(--site-nav-height)]">
        <div className="flex-1 flex items-center min-h-0 px-6 md:px-16">
          <div className="w-full max-w-4xl">
            <div key={current} className="hero-text-in">
              <p className="text-blue-400 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-3 font-medium">
                {slide.category}
              </p>
              <h1
                className="text-white font-bold mb-2 md:mb-4 leading-[1.05] tracking-tight uppercase"
                style={{ fontSize: "clamp(1.75rem, 6vw, 4.5rem)" }}
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

          <div
            className="absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 text-white tabular-nums pointer-events-none"
            aria-live="polite"
          >
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-base md:text-lg lg:text-xl font-light opacity-60 ml-1 self-end mb-1">
              /{String(SLIDE_COUNT).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="shrink-0 pb-5 md:pb-8 px-6 flex flex-col items-center gap-4 md:gap-5">
          <nav
            className="flex items-center gap-4 md:gap-6"
            aria-label="Hero slide pagination"
          >
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="text-white/90 hover:text-yellow-400 transition-colors p-1"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
            </button>
            <div className="flex gap-2" role="tablist">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}: ${s.title}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "pagination-dot",
                    i === current ? "pagination-dot-active" : "pagination-dot-inactive"
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
          </nav>

          <a
            href="#main-content"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-yellow-400 transition-colors group scroll-smooth"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.35em]">Scroll</span>
            <ChevronDown
              className="w-5 h-5 animate-bounce group-hover:text-yellow-400"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
