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
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { getVentureById } from "../constants/site";

const venture = getVentureById("hopeful-steps")!;
const imgs = venture.images;

const SERVICES = [
  { title: "Speech Therapy", desc: "Helping individuals overcome communication barriers with playful learning techniques.", icon: <MessageCircle className="w-6 h-6" /> },
  { title: "Child Development", desc: "Nurturing cognitive and social growth through guided play and discovery.", icon: <Baby className="w-6 h-6" /> },
  { title: "Behavioral Therapy", desc: "Supportive strategies to help manage emotions and build positive habits.", icon: <Smile className="w-6 h-6" /> },
  { title: "Counseling", desc: "A safe space to talk, heal, and find clarity with professional guidance.", icon: <Heart className="w-6 h-6" /> },
  { title: "Special Education", desc: "Tailored learning paths that celebrate every child's unique way of knowing.", icon: <Sparkles className="w-6 h-6" /> }
];

const SPECIALISTS = [
  { name: "Sarah Alok", role: "Child Psychologist", img: imgs[0] },
  { name: "David Miller", role: "Speech Pathologist", img: imgs[1] },
  { name: "Priya Menon", role: "Behavioral Therapist", img: imgs[2] },
];

export default function HopefulStepsPage() {
  return (
    <main className="bg-[#FAFDFB] min-h-screen font-poppins selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={imgs[0]} 
            alt="Supportive Environment" 
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFDFB] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-24 flex flex-col items-start max-w-4xl gap-8">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
             <div className="flex flex-wrap items-center gap-3">
               <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  <Heart className="w-4 h-4" />
                  A Circle of Trust
               </div>
               <a
                 href="https://www.instagram.com/hopefulsteps_dxb"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white text-slate-600 border border-emerald-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:border-emerald-400 hover:text-emerald-600 transition-colors"
               >
                 @hopefulsteps_dxb
               </a>
             </div>
             <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight">
                Hopeful <br /> <span className="text-emerald-500 italic">Steps.</span>
             </h1>
             <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed italic">
                Supporting every step of your journey with warmth, patience, and professional care. We believe in nurturing the heart as much as the mind.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
           >
             <button className="bg-emerald-500 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3">
                Get Support <Heart className="w-5 h-5 fill-current" />
             </button>
             <button className="bg-white text-emerald-800 border-2 border-emerald-50 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:border-emerald-500 transition-all flex items-center justify-center gap-3">
                Book Visit <Calendar className="w-5 h-5" />
             </button>
           </motion.div>
        </div>

        {/* Floating Icons */}
        <div className="absolute right-[10%] top-[20%] size-32 bg-yellow-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute right-[15%] bottom-[30%] size-48 bg-emerald-100/30 rounded-full blur-3xl animate-pulse delay-700" />
      </section>

      {/* About Section */}
      <section className="px-6 md:px-24 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Where Growth <br /> <span className="text-emerald-500 italic">Feels Safe.</span></h2>
                <div className="w-20 h-2 bg-emerald-100 rounded-full" />
              </div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                <p>At Hopeful Steps, we don&apos;t see patients—we see individuals with unlimited potential. Our environment is designed to feel like a second home, full of sunlight and kindness.</p>
                <p>Whether it&apos;s helping a child find their voice or supporting a family through developmental milestones, we are here to walk beside you with expertise and empathy.</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                    <p className="text-3xl font-black text-emerald-600">95%</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Parent Satisfaction</p>
                </div>
                <div className="p-6 bg-yellow-50 rounded-3xl border border-yellow-100">
                    <p className="text-3xl font-black text-yellow-600">12+</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Expert Therapists</p>
                </div>
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-square rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl order-1 lg:order-2"
           >
              <Image 
                src={imgs[3]} 
                alt="Child Therapy" 
                fill 
                className="object-cover"
              />
           </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 bg-[#F8FBF9] rounded-3xl md:rounded-[4rem] lg:rounded-[5rem] mx-0 sm:mx-4 md:mx-12 lg:mx-24 overflow-hidden relative border border-emerald-50/50">
        <div className="text-center space-y-4 mb-20 relative z-10">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900">Healing <span className="text-emerald-500">Hands</span></h2>
             <p className="text-slate-400 font-medium italic">Tailored care for unique personalities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
           {SERVICES.map((item, idx) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-emerald-100/20"
             >
               <div className="size-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
               <p className="text-slate-500 font-medium leading-relaxed italic">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Specialists Section */}
      <section className="px-6 md:px-24 py-32">
        <div className="mb-20 space-y-2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter italic">Our Kind <br /> <span className="text-emerald-500">Hearts.</span></h2>
            <div className="w-16 h-1 bg-yellow-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {SPECIALISTS.map((doc, idx) => (
                <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-6"
                >
                    <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
                        <Image src={doc.img} alt={doc.name} fill className="object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-black text-slate-900">{doc.name}</h3>
                        <p className="text-xs uppercase font-black tracking-widest text-emerald-500">{doc.role}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 bg-emerald-500 rounded-3xl md:rounded-[4rem] lg:rounded-[5rem] mx-0 sm:mx-4 md:mx-12 lg:mx-24 my-12 md:my-20 text-white relative flex flex-col items-center">
         <div className="max-w-4xl text-center space-y-12">
            <div className="size-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10" />
            </div>
            <p className="text-xl md:text-4xl font-black italic italic leading-relaxed">
                &quot;Hopeful Steps changed our lives. Our son feels so loved and understood here. It&apos;s truly a place of magic and miracles.&quot;
            </p>
            <div className="space-y-1">
                <p className="font-black uppercase tracking-widest">Mariah G.</p>
                <p className="text-xs opacity-60 uppercase font-bold tracking-widest">Mother of Toby, 6</p>
            </div>
         </div>
      </section>

      {/* Appointment Form Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto">
         <div className="bg-white rounded-3xl md:rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-emerald-50">
            <div className="p-6 sm:p-10 md:p-16 lg:p-20 space-y-6 md:space-y-10">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Start Your <br /> Journey <span className="text-emerald-500">Gently.</span></h2>
                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="size-10 md:size-12 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600"><Phone className="w-5 h-5 md:w-6 md:h-6" /></div>
                        <p className="font-bold text-slate-600 text-sm md:text-base">+91 7902650101</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="size-10 md:size-12 shrink-0 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600"><MapPin className="w-5 h-5 md:w-6 md:h-6" /></div>
                        <p className="font-bold text-slate-600 text-sm md:text-base">Industrial Hub, Kerala, India</p>
                    </div>
                </div>
            </div>
            <div className="p-6 sm:p-10 md:p-16 lg:p-20 bg-emerald-50/30 flex flex-col justify-center">
                <form className="form-stack">
                    <div className="form-stack-2">
                        <input type="text" placeholder="Your Name" autoComplete="name" className="form-field form-field-accent-emerald rounded-3xl" />
                        <input type="tel" placeholder="Phone Number" autoComplete="tel" className="form-field form-field-accent-emerald rounded-3xl" />
                    </div>
                    <input type="email" placeholder="Email Address" autoComplete="email" className="form-field form-field-accent-emerald rounded-3xl" />
                    <select className="form-field form-field-accent-emerald rounded-3xl appearance-none">
                        <option>Choose Therapy Type</option>
                        <option>Speech Therapy</option>
                        <option>Child Development</option>
                        <option>Behavioral Therapy</option>
                    </select>
                    <button type="button" className="w-full bg-emerald-500 text-white font-black uppercase tracking-widest py-4 md:py-6 rounded-3xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 min-h-[48px]">
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
