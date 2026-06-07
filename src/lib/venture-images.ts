import { getVentureById } from "@/app/constants/site";

/** Resolve a venture image by index (clamps to last available). */
export function getVentureImage(ventureId: string, index = 0): string | undefined {
  const venture = getVentureById(ventureId);
  if (!venture?.images.length) return undefined;
  const safeIndex = Math.max(0, Math.min(index, venture.images.length - 1));
  return venture.images[safeIndex];
}

export function getVentureImages(ventureId: string): string[] {
  return getVentureById(ventureId)?.images ?? [];
}

export function isUsableImage(src?: string | null): src is string {
  const value = src?.trim();
  return Boolean(value?.startsWith("http") || value?.startsWith("/"));
}
