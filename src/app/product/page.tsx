import { SiteShell } from "../components/layout/SiteShell";
import { PageHero } from "../components/ui/PageHero";
import { MediaSlot } from "../components/ui/MediaSlot";
import { Reveal } from "../components/ui/Reveal";
import { SITE_MEDIA } from "../constants/media";
import { getVentureById } from "../constants/site";

const PRODUCTS = [
  {
    name: "Pure Flow Water",
    category: "Sustainability",
    ventureId: "pureflow",
    imgIndex: 0,
  },
  {
    name: "Pots & Pans Pro",
    category: "Kitchenware",
    ventureId: "pots-and-pans",
    imgIndex: 1,
  },
  {
    name: "Ekho Digix",
    category: "Technology",
    ventureId: "ekhodigix",
    imgIndex: 0,
  },
  {
    name: "Ekho Rascapes",
    category: "Landscape",
    ventureId: "ekho-rascapes",
    imgIndex: 0,
  },
] as const;

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        title="Our"
        highlight="Products"
        image={SITE_MEDIA.productHero}
        height="md"
      />

      <section className="section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => {
            const img = getVentureById(p.ventureId)?.images[p.imgIndex];
            return (
            <Reveal
              key={p.name}
              delay={i * 50}
              className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-gray-100"
            >
              <MediaSlot
                src={img}
                alt={p.name}
                fill
                className="object-cover"
                imageClassName="group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholderLabel={p.name}
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
          );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
