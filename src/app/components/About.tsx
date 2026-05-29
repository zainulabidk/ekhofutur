import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { SITE } from "../constants/site";

const FEATURES = [
  {
    title: "Diverse Portfolio",
    desc: "Excellence across fashion, healthcare, technology, and more.",
    icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
  },
  {
    title: "Customer First",
    desc: "Solutions tailored to your needs at every touchpoint.",
    icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
  },
  {
    title: "Innovation",
    desc: "Modern technology with timeless quality.",
    icon: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
  },
];

export function About() {
  return (
    <section
      className="section-padding text-white"
      style={{
        background: "linear-gradient(135deg, #000 0%, #4682B4 100%)",
      }}
    >
      <div className="container-site">
        <Reveal className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-4">
          <h2 className="heading-section text-white">
            About{" "}
            <span className="highlight-bar">
              <span>{SITE.name}</span>
            </span>
          </h2>
          <p className="text-slate-300 text-lg font-medium leading-relaxed">
            {SITE.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-b border-white/10 pb-12 md:pb-16">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className="space-y-4">
              <div className="size-14 p-3 bg-white/10 border border-white/15 rounded-xl">
                <Image src={f.icon} alt="" width={36} height={36} className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-300 font-medium leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
              alt="Our businesses"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={80} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Explore our ventures
            </h3>
            <p className="text-slate-200 font-medium leading-relaxed">
              Fashion, dental care, smart kitchen, real estate, digital agency, and wellness —
              all under one vision.
            </p>
            <Link href="/services" className="btn-accent inline-flex">
              View all services
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
