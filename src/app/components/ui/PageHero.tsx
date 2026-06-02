import { cn } from "@/lib/cn";
import { MediaSlot } from "./MediaSlot";

type PageHeroProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  image: string;
  height?: "md" | "lg";
};

export function PageHero({
  title,
  highlight,
  subtitle,
  image,
  height = "lg",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-black pt-[var(--site-nav-height)]",
        height === "lg" ? "h-[50vh] min-h-[360px]" : "h-[42vh] min-h-[300px]"
      )}
    >
      <MediaSlot
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        imageClassName="opacity-35"
        placeholderLabel="Brand photo"
        placeholderSubtext={title}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
      <div className="relative z-10 text-center space-y-3 px-6">
        <h1 className="heading-display text-white">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-yellow-400">{highlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-white/55 tracking-[0.3em] font-black uppercase text-[10px]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
