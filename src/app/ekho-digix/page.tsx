"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  Layers,
  Smartphone,
  Wrench,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getVentureById, whatsappUrl } from "../constants/site";

const venture = getVentureById("ekhodigix")!;
const imgs = venture.images;
const accent = venture.accent ?? "#4682B4";
const WA = whatsappUrl("Hi! I'd like to start a project with Ekho Digix.");

const SERVICES = [
  {
    title: "Web Development",
    desc: "Fast, responsive websites and landing pages built for performance, SEO, and conversions.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "App Development",
    desc: "Mobile and progressive web apps tailored to your business workflows and customers.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Custom Software",
    desc: "Dashboards, portals, and internal tools that connect your teams and data in one place.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "UI / UX Design",
    desc: "Clean interfaces and user journeys that reflect your brand and drive engagement.",
    icon: <Layers className="w-6 h-6" />,
  },
];

const DELIVERABLES = [
  {
    name: "Business Websites",
    desc: "Corporate sites, venture pages, and multi-brand portals for the Echo Futur group.",
    image: imgs[0],
  },
  {
    name: "E-Commerce Builds",
    desc: "Online stores with secure checkout, catalog management, and mobile-first layouts.",
    image: imgs[1],
  },
  {
    name: "Ongoing Support",
    desc: "Maintenance, updates, hosting guidance, and feature rollouts after launch.",
    image: imgs[2],
  },
];

export default function EkhoDigixPage() {
  return (
    <main
      className="min-h-screen font-poppins pb-0"
      style={{ backgroundColor: "#0a1628" }}
    >
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs[0]}
            alt="Ekho Digix"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(70,130,180,0.35) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-24 w-full flex flex-col md:flex-row justify-between items-end pb-24 md:pb-32 gap-10 pt-[var(--site-nav-height)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
              style={{ backgroundColor: accent }}
            >
              <Code2 className="w-4 h-4" />
              Development
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic">
              Ekho <span style={{ color: accent }}>Digix</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed">
              Web, app, and custom software development — built by Echo Futur for brands that need
              reliable digital products, not just slides.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 rounded-full border border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors"
              >
                Contact form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-16 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Stack", val: "Modern", icon: <Zap className="w-5 h-5" /> },
          { label: "Delivery", val: "Agile", icon: <Wrench className="w-5 h-5" /> },
          { label: "Security", val: "Built-in", icon: <ShieldCheck className="w-5 h-5" /> },
          { label: "Support", val: "Ongoing", icon: <Globe className="w-5 h-5" /> },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className="mb-2" style={{ color: accent }}>
              {stat.icon}
            </div>
            <p className="text-2xl md:text-3xl font-black text-white">{stat.val}</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-white/40">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-24 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors"
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: accent }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-3">
                  {feat.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight tracking-tighter">
              Development <br />
              <span style={{ color: accent }}>that ships.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium border-l-4 pl-6" style={{ borderColor: accent }}>
              Ekho Digix is the technology arm of Echo Futur. We design and build websites,
              applications, and custom tools for our own ventures and for clients who want a single
              partner from idea to launch.
            </p>
            <ul className="space-y-3 text-white/70 text-sm font-medium">
              <li className="flex gap-2">
                <span style={{ color: accent }}>→</span> Discovery, wireframes, and clear timelines
              </li>
              <li className="flex gap-2">
                <span style={{ color: accent }}>→</span> Responsive builds tested on real devices
              </li>
              <li className="flex gap-2">
                <span style={{ color: accent }}>→</span> Handover with documentation and support options
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-24 py-32 bg-[#071018] mx-6 md:mx-12 rounded-[3rem] border border-white/10 mb-24">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white tracking-tighter">
            What we <span style={{ color: accent }}>build</span>
          </h2>
          <p className="text-white/40 text-xs font-black uppercase tracking-[0.4em]">
            Recent focus areas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {DELIVERABLES.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic mb-2">{item.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-24 py-32 grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <div key={src + i} className="relative aspect-square rounded-2xl overflow-hidden">
            <Image src={src} alt={`Ekho Digix ${i + 1}`} fill className="object-cover" sizes="25vw" />
          </div>
        ))}
      </section>

      <section className="px-6 md:px-24 py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic text-white tracking-tighter leading-none">
            Build with <span style={{ color: accent }}>Digix</span>
          </h2>
          <p className="text-white/50 text-lg font-medium">
            Tell us about your website, app, or software idea — we will scope it and deliver a clear
            plan.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-14 py-5 rounded-full font-black uppercase tracking-widest text-[11px] text-white"
            style={{ backgroundColor: accent }}
          >
            Get a quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
