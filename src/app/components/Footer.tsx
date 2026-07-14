"use client";

import Link from "next/link";
import Image from "next/image";
import {
  COMPANY_CONTACT,
  FOOTER_LEGAL_LINKS,
  FOOTER_VENTURE_LINKS,
  SITE,
} from "../constants/site";
import { LOGO_URL } from "../constants/data";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 w-full text-sm text-white pt-14 md:pt-16 font-poppins bg-gradient-to-r from-[var(--footer-from)] via-[var(--footer-via)] to-[var(--footer-to)] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 pb-12">
        <div className="sm:col-span-2 lg:col-span-1 space-y-8">
          <Link href="/" className="inline-flex items-center shrink-0 h-10 md:h-11">
            <Image
              src={LOGO_URL}
              alt="Ekho Future"
              width={130}
              height={40}
              className="object-contain brightness-110 h-full w-auto"
            />
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 group focus-within:border-yellow-400 transition-colors max-w-full">
              <input
                className="form-field form-field-dark bg-transparent border-0 rounded-xl sm:rounded-full py-3 px-4 sm:px-6 min-h-[44px]"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
              />
              <button
                type="button"
                className="bg-yellow-400 text-black px-6 sm:px-8 py-3 rounded-xl sm:rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-yellow-300 transition-transform hover:scale-105 shadow-xl shrink-0 min-h-[44px]"
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
