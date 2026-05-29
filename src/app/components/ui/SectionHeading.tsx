import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("space-y-3", align === "center" && "text-center", className)}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="heading-section">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-yellow-400">{highlight}</span>
          </>
        )}
      </h2>
    </Reveal>
  );
}
