"use client";

import { useState, useEffect, useCallback, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../constants/data";
import { MAIN_NAV, getNavServiceGroups } from "../constants/site";
import { cn } from "@/lib/cn";

function ServicesMenuPanel({
  onNavigate,
  className,
}: {
  onNavigate: () => void;
  className?: string;
}) {
  const groups = getNavServiceGroups();

  return (
    <div className={cn("space-y-6", className)}>
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/35 mb-3">
            {group.category}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {group.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-xl p-2 hover:bg-white/[0.06] transition-colors group"
                >
                  <span className="relative w-11 h-11 shrink-0 rounded-lg overflow-hidden bg-white/5 ring-1 ring-white/10">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="44px"
                    />
                  </span>
                  <span className="min-w-0 flex-1 flex items-center justify-between gap-2">
                    <span className="text-white/90 group-hover:text-yellow-400 text-xs font-semibold leading-snug line-clamp-2 transition-colors">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-white/20 group-hover:text-yellow-400 transition-colors" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setShowServices(false);
  }, []);

  const openServices = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setShowServices(true);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setShowServices(false), 120);
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

  useEffect(() => {
    if (!isOpen) return;

    const mq = window.matchMedia("(max-width: 1023px)");
    const syncMobile = () => {
      if (mq.matches) setShowServices(true);
    };
    syncMobile();
    mq.addEventListener("change", syncMobile);
    return () => mq.removeEventListener("change", syncMobile);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,padding,box-shadow] duration-300",
          scrolled
            ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/[0.06] shadow-lg shadow-black/10"
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
            <span className="text-[10px] tracking-[0.45em] font-black uppercase hidden sm:inline group-hover:text-yellow-400 transition-colors">
              Menu
            </span>
            <span className="flex flex-col gap-1.5 w-8" aria-hidden>
              <span className="h-px w-full bg-white group-hover:bg-yellow-400 transition-colors" />
              <span className="h-px w-full bg-white group-hover:bg-yellow-400 transition-colors" />
              <span className="h-px w-3/4 ml-auto bg-white group-hover:bg-yellow-400 transition-colors" />
            </span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col h-dvh max-h-dvh overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="shrink-0 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/[0.06]">
            <Link href="/" onClick={closeMenu} className="opacity-90 hover:opacity-100 transition-opacity">
              <Image src={LOGO_URL} alt="Ekho Future" width={120} height={38} className="object-contain" />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-colors text-[10px] font-black uppercase tracking-[0.25em]"
              aria-label="Close menu"
            >
              Close
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className={cn(
              "flex-1 min-h-0 grid overflow-hidden transition-[grid-template-columns] duration-300 ease-out",
              showServices
                ? "grid-cols-1 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]"
                : "grid-cols-1"
            )}
            onMouseEnter={() => {
              if (window.matchMedia("(min-width: 1024px)").matches) openServices();
            }}
            onMouseLeave={scheduleCloseServices}
          >
            <div
              className={cn(
                "flex flex-col px-6 md:px-12 py-8 lg:py-10 border-b lg:border-b-0 lg:border-r border-white/[0.06]",
                showServices ? "justify-start" : "justify-center"
              )}
            >
              <nav className="flex flex-col gap-1">
                {MAIN_NAV.map((item) =>
                  item.name === "Services" ? (
                    <div key={item.name}>
                      <Link
                        href="/services"
                        onClick={closeMenu}
                        onMouseEnter={openServices}
                        className={cn(
                          "block font-semibold transition-colors w-fit py-1",
                          showServices
                            ? "text-yellow-400 text-2xl md:text-3xl lg:text-4xl"
                            : "text-white/50 hover:text-white text-3xl md:text-4xl lg:text-5xl"
                        )}
                      >
                        {item.name}
                      </Link>
                      <p className="text-white/25 text-[10px] mt-1 hidden lg:block tracking-wide">
                        Hover to explore ventures
                      </p>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "font-semibold text-white/50 hover:text-white transition-colors w-fit py-1",
                        showServices ? "text-xl md:text-2xl" : "text-3xl md:text-4xl lg:text-5xl"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-auto pt-10 hidden lg:block">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-yellow-400 transition-colors"
                >
                  Contact us →
                </Link>
              </div>
            </div>

            <div
              className={cn(
                "min-h-0 flex flex-col transition-all duration-300 ease-out",
                showServices
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 pointer-events-none max-lg:hidden lg:translate-x-2"
              )}
            >
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 md:px-10 py-6 lg:py-10 scrollbar-hide">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30">
                    Our ventures
                  </p>
                  <Link
                    href="/services"
                    onClick={closeMenu}
                    className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400/80 hover:text-yellow-400 transition-colors"
                  >
                    View all
                  </Link>
                </div>
                <ServicesMenuPanel onNavigate={closeMenu} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const Navbar = memo(NavbarComponent);
