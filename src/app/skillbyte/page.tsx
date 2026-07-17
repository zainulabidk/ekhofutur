"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  PenLine,
  Search,
  Share2,
  Sparkles,
  GraduationCap,
  Users,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getVentureById } from "../constants/site";
import { getBrandById } from "../constants/brandResources";

const venture = getVentureById("skillbyte")!;
const brand = getBrandById("skillbyte");
const imgs = venture.images;
const accent = venture.accent ?? "#4f46e5";

const MODULES = [
  {
    title: "AI Content & Copy",
    desc: "Blog posts, ad copy, captions, and email sequences using AI workflows with human review.",
    icon: <PenLine className="w-6 h-6" />,
  },
  {
    title: "Social Media Marketing",
    desc: "Strategy, calendars, reels ideas, and platform growth for Instagram, Facebook, and LinkedIn.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    title: "SEO & Search",
    desc: "Keyword research, on-page SEO, and content plans that help customers find you online.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Paid Ads & Analytics",
    desc: "Meta and Google campaigns, tracking setup, and reading data to improve ROI.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const PROGRAMS = [
  {
    name: "Advanced AI Digital Marketing",
    desc: "Flagship course — end-to-end digital marketing with AI tools for real business results.",
    image: imgs[0],
    badge: "Featured",
  },
  {
    name: "Corporate Team Batch",
    desc: "Custom schedules for companies training marketing and sales teams together.",
    image: imgs[1],
  },
  {
    name: "Career Starter Track",
    desc: "Portfolio projects, freelancing basics, and interview-ready skills for new graduates.",
    image: imgs[2],
  },
];

export default function SkillbytePage() {
  return (
    <main className="bg-[#faf9ff] min-h-screen font-poppins selection:bg-indigo-200 pb-0">
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs[0]}
            alt="EkhoSkillByte Academy"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-indigo-900/70 to-violet-900/50" />
        </div>

        <div className="relative z-10 px-6 md:px-24 w-full pt-[var(--site-nav-height)] pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
              style={{ backgroundColor: accent }}
            >
              <GraduationCap className="w-4 h-4" />
              Academy
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tighter uppercase italic">
              Ekho <br />
              <span className="text-indigo-300">SkillByte</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold text-white/90 leading-snug max-w-2xl">
              Advanced AI Digital Marketing Course
            </p>
            <p className="text-base md:text-lg text-white/70 font-medium max-w-2xl leading-relaxed">
              Live training for professionals and teams — learn SEO, social media, paid ads, and AI-powered
              content creation with hands-on projects from the Echo Futur ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] text-white shadow-lg"
                style={{ backgroundColor: accent }}
              >
                Enroll now
                <ArrowRight className="w-4 h-4" />
              </Link>
              {brand?.email && (
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center px-10 py-4 rounded-full border-2 border-white/30 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors"
                >
                  {brand.email}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-16 bg-white border-y border-indigo-100 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Format", val: "Live", icon: <Users className="w-5 h-5" /> },
          { label: "Focus", val: "Marketing", icon: <Megaphone className="w-5 h-5" /> },
          { label: "Tools", val: "AI + Ads", icon: <Sparkles className="w-5 h-5" /> },
          { label: "Certificate", val: "Yes", icon: <GraduationCap className="w-5 h-5" /> },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className="text-indigo-600 mb-1">{stat.icon}</div>
            <p className="text-2xl md:text-3xl font-black text-slate-900">{stat.val}</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-24 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic text-slate-900 tracking-tighter">
            Course <span className="text-indigo-600">modules</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            One program covering the full digital marketing stack — with AI integrated into every
            module, not taught as an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-10 rounded-3xl bg-white border border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div
                className="size-14 rounded-2xl flex items-center justify-center text-white mb-6"
                style={{ backgroundColor: accent }}
              >
                {mod.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 uppercase italic mb-3">
                {mod.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-24 py-32 bg-indigo-950 rounded-[3rem] mx-4 md:mx-12 text-white">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
            Programs
          </h2>
          <p className="text-indigo-300/80 text-xs font-black uppercase tracking-[0.35em]">
            Choose your path
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={prog.image}
                  alt={prog.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {prog.badge && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {prog.badge}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-black uppercase italic mb-2">{prog.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-24 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {imgs.map((src, i) => (
            <div key={src + i} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image src={src} alt={`SkillByte ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-24 py-32 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic text-slate-900 tracking-tighter leading-none">
            Start your <span className="text-indigo-600">marketing</span> career
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            New batches for the Advanced AI Digital Marketing course open regularly. Contact us for
            fees, schedules, and corporate training.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-14 py-5 rounded-full font-black uppercase tracking-widest text-[11px] text-white"
            style={{ backgroundColor: accent }}
          >
            Join SkillByte <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
