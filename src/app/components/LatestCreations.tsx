import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { CREATIONS } from "../constants/data";

export function LatestCreations() {
  return (
    <section className="section-padding-tight bg-white border-t border-black/5">
      <div className="container-site">
        <Reveal className="text-center mb-10 md:mb-12 space-y-3">
          <h2 className="heading-section">
            Our Latest{" "}
            <span className="highlight-bar">
              <span>Creations</span>
            </span>
          </h2>
          <p className="text-black/45 max-w-lg mx-auto text-base font-medium">
            Recent work across our ventures — crafted with intention and style.
          </p>
        </Reveal>

        <div className="hidden md:flex items-stretch gap-2 h-[320px] w-full max-w-4xl mx-auto">
          {CREATIONS.map((src, idx) => (
            <Reveal
              key={src}
              delay={idx * 50}
              className="relative group flex-1 min-w-0 rounded-xl overflow-hidden shadow-md hover:flex-[2] transition-[flex] duration-500 ease-out"
            >
              <Image
                src={src}
                alt={`Creation ${idx + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </Reveal>
          ))}
        </div>

        <div className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {CREATIONS.map((src, idx) => (
            <div
              key={src}
              className="relative snap-center shrink-0 w-[240px] h-[280px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Creation ${idx + 1}`}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
