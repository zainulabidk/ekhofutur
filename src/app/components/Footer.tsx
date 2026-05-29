"use client";

import Link from "next/link";
import {
  COMPANY_CONTACT,
  FOOTER_LEGAL_LINKS,
  FOOTER_VENTURE_LINKS,
  SITE,
} from "../constants/site";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 w-full text-sm text-white pt-14 md:pt-16 font-poppins bg-gradient-to-r from-[var(--footer-from)] via-[var(--footer-via)] to-[var(--footer-to)] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 pb-12">
        <div className="sm:col-span-2 lg:col-span-1 space-y-8">
          <Link href="/" className="inline-block relative w-48 h-12">
            <svg
              width="157"
              height="40"
              viewBox="0 0 157 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924"
                fill="white"
              />
              <path
                d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
                stroke="#FFD700"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className="text-lg/relaxed font-medium text-white/70 italic max-w-sm">
            {SITE.description}
          </p>
          <div className="space-y-2 text-white/50 text-sm">
            <a
              href={COMPANY_CONTACT.phoneHref}
              className="block hover:text-white transition-colors"
            >
              {COMPANY_CONTACT.phone}
            </a>
            <a
              href={`mailto:${COMPANY_CONTACT.primaryEmail}`}
              className="block hover:text-white transition-colors"
            >
              {COMPANY_CONTACT.primaryEmail}
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:items-center">
          <div className="space-y-6">
            <h2 className="font-black uppercase tracking-widest text-lg mb-8 italic text-yellow-400 underline decoration-yellow-400/20 underline-offset-8">
              Our Ventures
            </h2>
            <div className="flex flex-col space-y-4">
              {FOOTER_VENTURE_LINKS.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-white/40 hover:text-white transition-all font-bold uppercase text-[10px] tracking-widest italic group flex items-center gap-2"
                >
                  <div className="w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-4" />
                  {service.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="text-white/40 hover:text-white transition-all font-bold uppercase text-[10px] tracking-widest italic group flex items-center gap-2"
              >
                <div className="w-0 h-[1px] bg-yellow-400 transition-all group-hover:w-4" />
                View all services
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-black uppercase tracking-widest text-lg mb-8 italic text-yellow-400 underline decoration-yellow-400/20 underline-offset-8">
            Stay Connected
          </h2>
          <div className="space-y-6 max-w-sm">
            <p className="text-white/40 font-bold italic text-lg leading-relaxed">
              Get updates on our ventures, offers, and industry insights.
            </p>
            <div className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 group focus-within:border-yellow-400 transition-colors">
              <input
                className="bg-transparent placeholder-white/20 text-white outline-none w-full py-2 px-6 font-bold text-sm"
                placeholder="Enter your email"
                type="email"
              />
              <button
                type="button"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-yellow-300 transition-transform hover:scale-105 shadow-xl"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
          Copyright {new Date().getFullYear()} ©{" "}
          <span className="text-yellow-400 italic">{SITE.name}</span> All Rights
          Reserved.
        </p>
        <div className="flex gap-8">
          {FOOTER_LEGAL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
