"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Baby,
  Sparkles,
  MessageCircle,
  Phone,
  Calendar,
  MapPin,
  Smile,
  Activity,
  Utensils,
  Users,
  Instagram,
  ExternalLink,
  HandHeart,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getVentureById } from "../constants/site";

const venture = getVentureById("hopeful-steps")!;
const imgs = venture.images;

const INSTAGRAM_URL = "https://www.instagram.com/hopefulsteps_dxb";
const WEBSITE_URL = "https://hopefulstepsdxb.com";
const PHONE = "+971 55 394 1711";
const PHONE_HREF = "tel:+971553941711";
const EMAIL = "info@hopefulstepsdxb.com";
const ADDRESS = "Al Nasr Palace — Shop No. 2, Oud Metha, Dubai, UAE";

const SERVICES = [
  {
    title: "Speech & Language",
    desc: "Enhancing communication, articulation, and language development through engaging, age-appropriate techniques.",
    icon: <MessageCircle className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/speech-therapy.jpg",
  },
  {
    title: "Occupational Therapy",
    desc: "Building self-esteem, daily living skills, and independence through structured, play-based sessions.",
    icon: <HandHeart className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/counseling.jpg",
  },
  {
    title: "Physiotherapy",
    desc: "Supporting movement, balance, strength, and coordination for confident physical development.",
    icon: <Activity className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/ig-7.jpg",
  },
  {
    title: "Sensory Integration",
    desc: "Helping children self-regulate emotions and responses to sensory input in a calm, supportive space.",
    icon: <Sparkles className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/ig-3.jpg",
  },
  {
    title: "Feeding Therapy",
    desc: "Assisting with food aversions, oral motor skills, and picky eating — progress one bite at a time.",
    icon: <Utensils className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/ig-4.jpg",
  },
  {
    title: "Group Therapy",
    desc: "Peer-based learning that grows social skills, confidence, and friendship in a safe group setting.",
    icon: <Users className="w-6 h-6" />,
    img: "/ventures/hopeful-steps/ig-5.jpg",
  },
];

const APPROACH = [
  {
    title: "Holistic & Multidisciplinary",
    desc: "Speech, OT, physio, and behavioral specialists collaborate so every child gets comprehensive care.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Individualized Plans",
    desc: "Custom intervention plans after detailed assessment — built around each child’s goals and pace.",
    icon: <Baby className="w-5 h-5" />,
  },
  {
    title: "Play-Based Therapy",
    desc: "Movement, sensory play, and fun activities make sessions engaging while driving real progress.",
    icon: <Smile className="w-5 h-5" />,
  },
  {
    title: "Family Partnership",
    desc: "Parents receive home strategies and ongoing guidance so growth continues beyond the clinic.",
    icon: <Users className="w-5 h-5" />,
  },
];

const TEAM = [
  { name: "Somya Raina", role: "Co-Founder", img: imgs[1] },
  { name: "Ajooba Anjoom", role: "Co-Founder · Speech Language Pathologist", img: imgs[0] },
  { name: "Rajit Ahuja", role: "Business Development / Advisor", img: imgs[2] },
];

const TESTIMONIALS = [
  {
    quote:
      "My son joined Hopeful Steps a few months ago. Miss Soumya and Miss Ajooba are talented and passionate — I really appreciate their work.",
    name: "Sammm Shakoor",
  },
  {
    quote:
      "We can see lots of positive changes in my daughter, especially after the winter camp — speech and behaviour improved in a short time.",
    name: "Anuj Pareek",
  },
  {
    quote:
      "We started with summer camp, saw progress, and continued. Hopeful Steps is doing a great job for our son.",
    name: "Mobashir Nazar",
  },
];

const GALLERY = [
  { src: "/ventures/hopeful-steps/speech-therapy.jpg", alt: "Speech therapy session" },
  { src: "/ventures/hopeful-steps/counseling.jpg", alt: "Child counseling session" },
  { src: "/ventures/hopeful-steps/ig-4.jpg", alt: "Feeding therapy progress" },
  { src: "/ventures/hopeful-steps/ig-5.jpg", alt: "Progress stories from Instagram" },
  { src: "/ventures/hopeful-steps/ig-3.jpg", alt: "Sensory cuddle box at Hopeful Steps" },
  { src: "/ventures/hopeful-steps/ig-7.jpg", alt: "Physio and motor progress" },
  { src: "/ventures/hopeful-steps/site-gl2.jpg", alt: "Clinic activity" },
  { src: "/ventures/hopeful-steps/site-gl3.jpg", alt: "Learning through play" },
];

export default function HopefulStepsPage() {
  return (
    <main className="bg-[#FAFDFB] min-h-screen font-poppins selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgs[0]}
            alt="Speech therapy at Hopeful Steps"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFDFB] via-[#FAFDFB]/90 to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-24 flex flex-col items-start max-w-4xl gap-8 py-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <Heart className="w-4 h-4" />
                Pediatric Therapy · Dubai
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-600 border border-emerald-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:border-emerald-400 hover:text-emerald-600 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                @hopefulsteps_dxb
              </a>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95]">
              Hopeful <br />
              <span className="text-emerald-500 italic">Steps.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              Therapy programme for every child — speech, occupational, physio, sensory, feeding,
              and group care in a warm, play-based clinic in Oud Metha.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={PHONE_HREF}
              className="bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3"
            >
              Book Assessment <Calendar className="w-5 h-5" />
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-800 border-2 border-emerald-50 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:border-emerald-500 transition-all flex items-center justify-center gap-3"
            >
              Visit Website <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-24 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-widest text-emerald-500">
                Who we are
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                Where every child&apos;s <br />
                <span className="text-emerald-500 italic">journey matters.</span>
              </h2>
              <div className="w-20 h-2 bg-emerald-100 rounded-full" />
            </div>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                At Hopeful Steps, we believe every child deserves a safe, supportive, and joyful
                environment to thrive. Our multidisciplinary team crafts personalized plans after a
                detailed assessment — using evidence-based, play-centered methods.
              </p>
              <p>
                From finding a first word to building balance, feeding confidence, or social skills,
                we walk beside families with patience, expertise, and heart. Based at Booster Medical
                Centre, Al Nasr Palace, Oud Metha.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                <p className="text-3xl font-black text-emerald-600">7+</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-1">
                  Therapy programs
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100">
                <p className="text-3xl font-black text-yellow-600">2.8K</p>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-1">
                  Instagram family
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-2xl order-1 lg:order-2"
          >
            <Image
              src={imgs[1]}
              alt="Counseling and play-based therapy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our <span className="text-emerald-500 italic">approach</span>
          </h2>
          <p className="text-slate-500 font-medium">
            Holistic, child-centered care designed to nurture emotional, cognitive, and social growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPROACH.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-7 bg-white rounded-[2rem] border border-emerald-50 shadow-sm"
            >
              <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 bg-[#F8FBF9] rounded-3xl md:rounded-[4rem] lg:rounded-[5rem] mx-0 sm:mx-4 md:mx-12 lg:mx-24 overflow-hidden relative border border-emerald-50/50">
        <div className="text-center space-y-4 mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">
            Programs & <span className="text-emerald-500">care</span>
          </h2>
          <p className="text-slate-400 font-medium">
            Tailored therapy for communication, movement, sensory needs, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-emerald-100/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram gallery */}
      <section className="px-6 md:px-24 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
              <Instagram className="w-4 h-4" /> From @hopefulsteps_dxb
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Progress in <span className="text-emerald-500 italic">pictures.</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700"
          >
            Follow on Instagram <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl ${
                idx === 0 || idx === 5 ? "aspect-[3/4] md:row-span-1" : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-24 py-16 md:py-28 bg-white border-y border-emerald-50">
        <div className="mb-14 space-y-2">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">
            Meet our <span className="text-emerald-500">team.</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-5"
            >
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                <p className="text-xs uppercase font-black tracking-widest text-emerald-500 mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            What <span className="text-emerald-500 italic">parents</span> say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 md:p-10 bg-emerald-500 text-white rounded-[2.5rem] flex flex-col justify-between gap-8"
            >
              <p className="text-lg md:text-xl font-medium leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>
              <footer className="text-xs font-black uppercase tracking-widest opacity-80">
                {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Contact / booking */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl md:rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-emerald-50">
          <div className="p-6 sm:p-10 md:p-16 lg:p-20 space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Start your <br /> journey <span className="text-emerald-500">gently.</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-md">
              Leave your details or call us — we&apos;ll help schedule an assessment for your child.
            </p>
            <div className="space-y-4 md:space-y-5">
              <a href={PHONE_HREF} className="flex items-center gap-4 md:gap-6 group">
                <div className="size-10 md:size-12 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="font-bold text-slate-600 text-sm md:text-base group-hover:text-emerald-600 transition-colors">
                  {PHONE}
                </p>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 md:gap-6 group">
                <div className="size-10 md:size-12 shrink-0 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="font-bold text-slate-600 text-sm md:text-base group-hover:text-emerald-600 transition-colors">
                  {EMAIL}
                </p>
              </a>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="size-10 md:size-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="font-bold text-slate-600 text-sm md:text-base">{ADDRESS}</p>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 group"
              >
                <div className="size-10 md:size-12 shrink-0 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="font-bold text-slate-600 text-sm md:text-base group-hover:text-emerald-600 transition-colors">
                  @hopefulsteps_dxb
                </p>
              </a>
            </div>
          </div>
          <div className="p-6 sm:p-10 md:p-16 lg:p-20 bg-emerald-50/40 flex flex-col justify-center">
            <form className="form-stack">
              <div className="form-stack-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="form-field form-field-accent-emerald rounded-3xl"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className="form-field form-field-accent-emerald rounded-3xl"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                className="form-field form-field-accent-emerald rounded-3xl"
              />
              <select className="form-field form-field-accent-emerald rounded-3xl appearance-none">
                <option>Choose Therapy Type</option>
                <option>Speech & Language Therapy</option>
                <option>Occupational Therapy</option>
                <option>Physiotherapy</option>
                <option>Sensory Integration</option>
                <option>Feeding Therapy</option>
                <option>Group Therapy</option>
                <option>Early Intervention</option>
              </select>
              <button
                type="button"
                className="w-full bg-emerald-500 text-white font-black uppercase tracking-widest py-4 md:py-6 rounded-3xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 min-h-[48px]"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
