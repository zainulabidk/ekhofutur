"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { MediaSlot } from "./ui/MediaSlot";
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
    <div className={cn("space-y-4 md:space-y-5", className)}>
      {groups.map((group) => (
        <div key={group.category}>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/35 mb-2 sticky top-0 bg-[#0a0a0a]/95 py-1 z-10">
            {group.category}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0.5">
            {group.items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-white/[0.06] transition-colors group"
                >
                  <span className="relative w-9 h-9 shrink-0 rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10">
                    <MediaSlot
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="36px"
                      imageClassName="group-hover:scale-105 transition-transform duration-300"
                      placeholderLabel=" "
                      className="media-placeholder-dark"
                    />
                  </span>
                  <span className="min-w-0 flex-1 flex items-center justify-between gap-1.5">
                    <span className="text-white/90 group-hover:text-yellow-400 text-[11px] font-semibold leading-tight line-clamp-2 transition-colors">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 shrink-0 text-white/20 group-hover:text-yellow-400 transition-colors" />
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicesPage = pathname === "/services";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (isOpen) return;
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
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeMenu]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[var(--site-nav-height)] flex items-center transition-[background,box-shadow,border-color] duration-300",
          scrolled || !isHome || isOpen
            ? "bg-black/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/10"
            : "bg-black/20 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="flex items-center justify-between w-full px-6 md:px-12 max-w-[1920px] mx-auto">
          <Link href="/" className="flex items-center shrink-0 h-10 md:h-11">
            <Image
              src={LOGO_URL}
              alt="Ekho Future"
              width={130}
              height={40}
              className="object-contain brightness-110 h-full w-auto"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={openMenu}
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
          className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col h-dvh max-h-dvh overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="shrink-0 flex items-center justify-between h-[var(--site-nav-height)] px-6 md:px-12 border-b border-white/[0.06]">
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

          <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] overflow-hidden">
            {/* Nav links — compact column */}
            <div className="shrink-0 lg:shrink flex flex-row lg:flex-col gap-4 lg:gap-1 px-6 md:px-10 py-4 lg:py-6 border-b lg:border-b-0 lg:border-r border-white/[0.06] overflow-x-auto lg:overflow-visible scrollbar-hide">
              <nav className="flex flex-row lg:flex-col gap-4 lg:gap-1 min-w-max lg:min-w-0">
                {MAIN_NAV.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "font-semibold transition-colors whitespace-nowrap py-1",
                      item.href === pathname ||
                        (item.name === "Services" && isServicesPage)
                        ? "text-yellow-400 text-lg lg:text-2xl"
                        : "text-white/50 hover:text-white text-lg lg:text-2xl"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="hidden lg:inline text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-yellow-400 transition-colors mt-auto pt-6"
              >
                Contact us →
              </Link>
            </div>

            {/* Ventures — always visible, scroll inside panel */}
            <div className="min-h-0 flex flex-col overflow-hidden">
              <div className="shrink-0 flex items-center justify-between px-6 md:px-10 py-3 border-b border-white/[0.06]">
                <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30">
                  All ventures
                </p>
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400/80 hover:text-yellow-400 transition-colors"
                >
                  Services page →
                </Link>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 md:px-10 py-4 scrollbar-hide">
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
