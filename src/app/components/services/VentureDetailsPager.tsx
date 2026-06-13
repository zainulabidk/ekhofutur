"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MediaSlot } from "../ui/MediaSlot";
import { Reveal } from "../ui/Reveal";
import { ServiceVentureContent } from "../services/ServiceVentureContent";
import type { Venture } from "@/app/constants/site";
import type { VentureContent } from "@/app/constants/ventureContent";
import { cn } from "@/lib/cn";

const PER_PAGE = 2;

type VentureWithContent = {
  venture: Venture;
  content: VentureContent;
};

type VentureDetailsPagerProps = {
  items: VentureWithContent[];
};

export function VentureDetailsPager({ items }: VentureDetailsPagerProps) {
  const totalPages = Math.ceil(items.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goToPage = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(next, totalPages - 1));
      setPage(clamped);
      scrollToTop();
    },
    [totalPages, scrollToTop]
  );

  const pageItems = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div ref={sectionRef} className="space-y-10 md:space-y-12 scroll-mt-[calc(var(--site-nav-height)+1rem)]">
      {pageItems.map((item, idx) => (
        <Reveal
          key={item.venture.id}
          delay={idx * 30}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-12 items-start border-b border-slate-100 pb-16 md:pb-20 last:border-0 last:pb-0"
        >
          <div className="lg:sticky lg:top-[calc(var(--site-nav-height)+1rem)] grid grid-cols-2 gap-2 md:gap-3 self-start">
            {item.venture.images.slice(0, 4).map((img, i) => (
              <div
                key={img + i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <MediaSlot
                  src={img}
                  alt={item.venture.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 220px"
                  imageClassName="hover:scale-105 transition-transform duration-300"
                  placeholderLabel={item.venture.title}
                />
              </div>
            ))}
          </div>

          <ServiceVentureContent venture={item.venture} content={item.content} />
        </Reveal>
      ))}

      {totalPages > 1 && (
        <nav
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2"
          aria-label="Venture details pagination"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 tabular-nums">
            Page {page + 1} of {totalPages}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
              aria-label="Previous page"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>

            <div className="flex gap-1.5" role="tablist">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => goToPage(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === page ? "w-7 bg-yellow-400" : "w-2 bg-slate-200 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page >= totalPages - 1}
              aria-label="Next page"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
