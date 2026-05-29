"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="relative w-full h-[min(100svh,900px)] overflow-hidden bg-black">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "hero-slide",
            i === current ? "hero-slide-active" : "hero-slide-inactive"
          )}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center z-20">
        <div className="px-6 md:px-16 max-w-4xl">
          <div key={current} className="hero-text-in">
            <p className="text-blue-400 text-sm md:text-base tracking-[0.25em] uppercase mb-3 font-medium">
              {slide.category}
            </p>
            <h1
              className="text-white font-bold mb-4 leading-[1.05] tracking-tight uppercase"
              style={{
                fontSize: "clamp(2.25rem, 7vw, 5.5rem)",
              }}
            >
              {slide.title}
            </h1>
            <p className="text-white/75 text-base md:text-lg mb-6 font-light max-w-xl leading-relaxed">
              {slide.description}
            </p>
            <Link
              href="/services"
              className="inline-block text-white text-xs tracking-[0.35em] uppercase border-b border-white/80 pb-1 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
            >
              Explore ventures
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute top-1/2 right-8 md:right-12 -translate-y-1/2 text-white z-20 tabular-nums">
        <span className="text-5xl font-bold">{String(current + 1).padStart(2, "0")}</span>
        <span className="text-xl font-light opacity-60 ml-1">
          /{String(HERO_SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="text-white/90 hover:text-yellow-400 transition-colors"
        >
          <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
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
          className="text-white/90 hover:text-yellow-400 transition-colors"
        >
          <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
