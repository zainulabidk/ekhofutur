import Link from "next/link";
import { MediaSlot } from "./ui/MediaSlot";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { getCategoryGroups } from "../constants/site";

export function Categories() {
  const categoryGroups = getCategoryGroups();

  return (
    <section className="section-padding bg-white border-t border-black/5">
      <div className="container-site space-y-16 md:space-y-20">
        {categoryGroups.map((group, gIdx) => (
          <div key={group.mainTitle} className="space-y-8">
            <Reveal delay={gIdx * 40} className="flex items-center gap-6">
              <h2 className="heading-section shrink-0">{group.mainTitle}</h2>
              <div className="flex-1 h-px bg-black/8" />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.subItems.map((item, iIdx) => (
                <Reveal
                  key={item.name}
                  delay={iIdx * 50}
                  className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-lg hover:bg-white transition-shadow duration-300 flex flex-col gap-6"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight group-hover:text-[#4682B4] transition-colors">
                      {item.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-yellow-400" />
                    <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 aspect-[2/1]">
                    {item.images.slice(0, 4).map((src, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative overflow-hidden rounded-xl"
                      >
                        <MediaSlot
                          src={src}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          placeholderLabel={item.name}
                        />
                      </div>
                    ))}
                  </div>

                  <Link href={item.href} className="btn-primary w-fit mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
