"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import {
  COMPANY_CONTACT,
  FOOTER_LEGAL_LINKS,
  FOOTER_VENTURE_LINKS,
  MAIN_NAV,
  SITE,
} from "../constants/site";
import { LOGO_URL } from "../constants/data";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden border-t border-white/[0.06]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-yellow-400/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="container-site relative px-6 md:px-12 lg:px-20 pt-14 md:pt-20 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6">
            <Link
              href="/"
              className="inline-flex items-center shrink-0 h-14 md:h-16"
            >
              <Image
                src={LOGO_URL}
                alt="Ekho Future"
                width={200}
                height={64}
                className="object-contain brightness-110 h-full w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-sm">
              {SITE.description}
            </p>
            <div className="flex flex-col gap-3 pt-1">
              <a
                href={COMPANY_CONTACT.phoneHref}
                className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-yellow-400 transition-colors w-fit"
              >
                <span className="flex items-center justify-center size-9 rounded-xl bg-white/[0.06] border border-white/[0.08] text-yellow-400 shrink-0">
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                </span>
                {COMPANY_CONTACT.phone}
              </a>
              <a
                href={`mailto:${COMPANY_CONTACT.primaryEmail}`}
                className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-yellow-400 transition-colors w-fit break-all"
              >
                <span className="flex items-center justify-center size-9 rounded-xl bg-white/[0.06] border border-white/[0.08] text-yellow-400 shrink-0">
                  <Mail className="w-4 h-4" strokeWidth={1.75} />
                </span>
                {COMPANY_CONTACT.primaryEmail}
              </a>
              <p className="inline-flex items-center gap-3 text-sm text-white/45">
                <span className="flex items-center justify-center size-9 rounded-xl bg-white/[0.06] border border-white/[0.08] text-yellow-400 shrink-0">
                  <MapPin className="w-4 h-4" strokeWidth={1.75} />
                </span>
                {COMPANY_CONTACT.location}
              </p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-400/90 mb-5">
              Explore
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-3">
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[11px] font-bold uppercase tracking-widest text-white/45 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between gap-3 mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-400/90">
                Ventures
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-white/35 hover:text-yellow-400 transition-colors"
              >
                View all
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-3">
              {FOOTER_VENTURE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[11px] font-bold uppercase tracking-widest text-white/45 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-400/90 mb-5">
              Stay Connected
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              Updates on ventures, offers, and industry insights.
            </p>
            <form
              className="flex flex-col gap-2.5 p-2 rounded-2xl bg-white/[0.04] border border-white/[0.08] focus-within:border-yellow-400/50 transition-colors"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                className="form-field form-field-dark bg-transparent border-0 rounded-xl py-3 px-4 min-h-[44px]"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-300 transition-colors min-h-[44px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 md:gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/30">
            © {new Date().getFullYear()}{" "}
            <span className="text-yellow-400">{SITE.name}</span>
            <span className="text-white/20"> · All rights reserved</span>
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer legal"
          >
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
