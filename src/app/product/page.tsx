import Image from "next/image";
import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";

const PRODUCTS = [
  {
    name: "Eco-Pure Water",
    category: "Wellness",
    img: "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg",
  },
  {
    name: "Pots & Pans Pro",
    category: "Kitchenware",
    img: "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
  },
  {
    name: "EV Charge Pro",
    category: "Technology",
    img: "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
  },
  {
    name: "Smart Scapes",
    category: "Landscaping",
    img: "https://i.postimg.cc/kXWypPgB/20260110-113349.avif",
  },
];

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        title="Our"
        highlight="Products"
        image="https://i.postimg.cc/mgmdWB53/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg"
        height="md"
      />

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 50}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-gray-100"
            >
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-yellow-400 font-black uppercase tracking-widest text-[10px] mb-1">
                  {p.category}
                </p>
                <h2 className="text-white text-2xl md:text-3xl font-black uppercase italic">
                  {p.name}
                </h2>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
