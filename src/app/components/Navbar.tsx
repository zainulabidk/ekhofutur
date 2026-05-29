"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { LOGO_URL } from "../constants/data";
import { MAIN_NAV, VENTURES, getNavServiceGroups } from "../constants/site";
import { cn } from "@/lib/cn";

function ServicesMenuPanel({
  onNavigate,
  className,
}: {
  onNavigate: () => void;
  className?: string;
}) {
  const allServices = getNavServiceGroups().flatMap((group) =>
    group.items.map((item) => ({ ...item, category: group.category }))
  );

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-min content-start",
        className
      )}
    >
      {allServices.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-white/5 transition-colors group min-w-0"
        >
          <span className="relative w-10 h-10 shrink-0 rounded-md overflow-hidden bg-white/10 border border-white/10">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="40px"
            />
          </span>
          <span className="min-w-0 flex flex-col gap-0.5">
            <span className="text-white/80 group-hover:text-yellow-400 text-[10px] sm:text-[11px] font-semibold leading-tight line-clamp-2 transition-colors">
              {item.name}
            </span>
            <span className="text-white/30 text-[8px] uppercase tracking-wider truncate">
              {item.category}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setShowServices(false);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,padding,box-shadow] duration-300",
          scrolled
            ? "bg-black/85 backdrop-blur-md py-3 border-b border-white/5 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-12 max-w-[1920px] mx-auto">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={LOGO_URL}
              alt="Ekho Future"
              width={140}
              height={44}
              className="object-contain brightness-110"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-white flex items-center gap-4 group"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <span className="text-[10px] tracking-[0.5em] font-black uppercase hidden sm:inline group-hover:text-yellow-400 transition-colors">
              Menu
            </span>
            <span className="flex flex-col gap-1.5 w-8" aria-hidden>
              <span className="h-px w-full bg-white group-hover:bg-yellow-400 transition-colors" />
              <span className="h-px w-full bg-white group-hover:bg-yellow-400 transition-colors" />
              <span className="h-px w-3/4 bg-white group-hover:bg-yellow-400 transition-colors" />
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black flex flex-col h-dvh max-h-dvh overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="shrink-0 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/10">
            <span className="text-white text-xl font-bold">EF</span>
            <button
              type="button"
              onClick={closeMenu}
              className="text-white flex items-center gap-2 hover:text-yellow-400 transition-colors"
              aria-label="Close menu"
            >
              <span className="text-sm opacity-70">Close</span>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className={cn(
              "flex-1 min-h-0 grid overflow-hidden",
              showServices
                ? "grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]"
                : "grid-cols-1"
            )}
          >
            {/* Main links */}
            <div
              className={cn(
                "flex flex-col px-6 md:px-12 py-5 lg:py-6 border-b lg:border-b-0 lg:border-r border-white/10",
                showServices ? "justify-start gap-2" : "justify-center gap-3"
              )}
            >
              <nav className="flex flex-col gap-2 md:gap-3">
                {MAIN_NAV.map((item) =>
                  item.name === "Services" ? (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setShowServices((v) => !v)}
                      className={cn(
                        "text-left font-semibold transition-colors w-fit",
                        showServices
                          ? "text-yellow-400 text-2xl md:text-3xl"
                          : "text-white/55 hover:text-white text-3xl md:text-4xl"
                      )}
                    >
                      {item.name}
                      <span className="ml-2 text-base opacity-60">
                        {showServices ? "−" : "+"}
                      </span>
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "font-semibold text-white/55 hover:text-white transition-colors w-fit",
                        showServices ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>
            </div>

            {/* Services panel — all ventures visible, no scroll */}
            {showServices && (
              <div className="min-h-0 flex flex-col justify-center px-4 md:px-8 py-3 lg:py-4 overflow-hidden">
                <p className="shrink-0 text-white/25 text-[9px] font-black uppercase tracking-[0.35em] mb-2">
                  All ventures · {VENTURES.length} brands
                </p>
                <ServicesMenuPanel onNavigate={closeMenu} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export const Navbar = memo(NavbarComponent);
