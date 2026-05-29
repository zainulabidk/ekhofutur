import Image from "next/image";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SITE } from "../constants/site";

const VALUES = [
  { title: "Innovation", desc: "Cutting-edge technology and creative thinking." },
  { title: "Quality", desc: "The gold standard in every industry we serve." },
  { title: "Integrity", desc: "Trust through transparency and ethics." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        title={`About ${SITE.name}`}
        subtitle="Diversified excellence · Unified vision"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="space-y-6">
            <h2 className="heading-section">
              Building the future across{" "}
              <span className="text-[#4682B4]">industries</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-400" />
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>{SITE.description}</p>
              <p>
                We empower people and businesses to embrace the future with confidence —
                diversified growth united by exceptional service.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80"
              alt="Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding-tight bg-black text-white">
        <div className="container-site grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {VALUES.map((val, idx) => (
            <Reveal key={val.title} delay={idx * 60} className="space-y-3">
              <h3 className="text-2xl font-black uppercase italic text-yellow-400">{val.title}</h3>
              <p className="text-white/50 font-medium">{val.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
