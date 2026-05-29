import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/Reveal";
import { VENTURES } from "../constants/site";

export function IndustryTimeline() {
  return (
    <section className="section-padding bg-white border-t border-black/5">
      <div className="container-site max-w-5xl space-y-10 md:space-y-12">
        {VENTURES.map((item, idx) => (
          <Reveal
            key={item.id}
            delay={idx * 40}
            className="relative pl-8 md:pl-10 border-l-2 border-yellow-400"
          >
            <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-yellow-400 border-2 border-white" />

            <div className="bg-surface p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight mb-4">
                {item.title}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600 font-medium leading-relaxed">{item.description}</p>
                  <Link href={item.href} className="btn-primary">
                    Visit venture
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {item.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 200px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
