import type { Venture } from "@/app/constants/site";
import { getVentureById } from "@/app/constants/site";

export type VentureMedia = {
  hero: string;
  gallery: string[];
  videoUrl?: string;
  videoPoster?: string;
};

export function getVentureMedia(ventureId: string): VentureMedia | undefined {
  const venture = getVentureById(ventureId);
  if (!venture) return undefined;

  return {
    hero: venture.images[0] ?? "",
    gallery: venture.images,
    videoUrl: venture.videoUrl,
    videoPoster: venture.videoPoster ?? venture.images[1],
  };
}

export function requireVenture(ventureId: string): Venture {
  const venture = getVentureById(ventureId);
  if (!venture) {
    throw new Error(`Venture not found: ${ventureId}`);
  }
  return venture;
}
