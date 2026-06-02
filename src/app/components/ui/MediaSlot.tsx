import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { isUsableImage } from "@/lib/venture-images";

type MediaSlotProps = {
  src?: string | null;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Shown inside the placeholder area when no image URL */
  placeholderLabel?: string;
  placeholderSubtext?: string;
};

export function MediaSlot({
  src,
  alt,
  fill,
  width,
  height,
  className,
  imageClassName,
  sizes,
  priority,
  placeholderLabel = "Image coming soon",
  placeholderSubtext,
}: MediaSlotProps) {
  if (!isUsableImage(src)) {
    return (
      <div
        className={cn(
          "media-placeholder",
          fill && "absolute inset-0",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-8 h-8 opacity-40" strokeWidth={1.25} />
        {placeholderLabel ? (
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-center px-4 max-w-[12rem]">
            {placeholderLabel}
          </span>
        ) : null}
        {placeholderSubtext && (
          <span className="text-[10px] text-slate-400 text-center px-4">{placeholderSubtext}</span>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
        sizes={sizes ?? "100vw"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={cn("object-cover", imageClassName, className)}
      sizes={sizes}
      priority={priority}
    />
  );
}
