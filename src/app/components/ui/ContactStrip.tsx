"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_CONTACT } from "@/app/constants/site";

type ContactStripProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function ContactStrip({ variant = "dark", className }: ContactStripProps) {
  const isDark = variant === "dark";

  const items = [
    {
      icon: Phone,
      label: "Call",
      value: COMPANY_CONTACT.phone,
      href: COMPANY_CONTACT.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: COMPANY_CONTACT.primaryEmail,
      href: `mailto:${COMPANY_CONTACT.primaryEmail}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: COMPANY_CONTACT.location,
    },
  ];

  return (
    <div
      className={
        className ??
        (isDark
          ? "grid grid-cols-1 md:grid-cols-3 gap-8"
          : "grid grid-cols-1 md:grid-cols-3 gap-6")
      }
    >
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <div
            className={
              isDark
                ? "p-3 rounded-2xl bg-white/10 text-white"
                : "p-3 rounded-2xl bg-black text-white"
            }
          >
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <p
              className={
                isDark
                  ? "text-[10px] font-black uppercase tracking-widest text-white/40 mb-1"
                  : "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1"
              }
            >
              {item.label}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className={
                  isDark
                    ? "font-bold text-white hover:text-yellow-400 transition-colors"
                    : "font-bold text-black hover:text-yellow-600 transition-colors"
                }
              >
                {item.value}
              </Link>
            ) : (
              <p
                className={
                  isDark ? "font-bold text-white" : "font-bold text-slate-700"
                }
              >
                {item.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
