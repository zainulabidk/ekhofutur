import { getVentureImage } from "@/lib/venture-images";

/** Ekho Future team / corporate photography */
export const TEAM_HERO_IMAGE =
  "https://i.postimg.cc/rw7qbsxt/business-people-team-up-together-work.jpg";

export const SITE_MEDIA = {
  aboutHero: getVentureImage("builders", 0)!,
  aboutTeam: TEAM_HERO_IMAGE,
  contactHero: getVentureImage("builders", 1)!,
  productHero: getVentureImage("builders", 0)!,
  servicesHero: getVentureImage("builders", 0)!,
  homeAbout: TEAM_HERO_IMAGE,
} as const;

/** Homepage hero slides — each tied to a venture asset */
export const HERO_VENTURE_MAP = [
  { ventureId: "builders", imageIndex: 0 },
  { ventureId: "pureflow", imageIndex: 0 },
  { ventureId: "lubnas", imageIndex: 0 },
  { ventureId: "trend-setter", imageIndex: 0 },
  { ventureId: "compliment", imageIndex: 0 },
  { ventureId: "ekhodigix", imageIndex: 0 },
  { ventureId: "wellness", imageIndex: 0 },
] as const;

export function heroImageForVenture(ventureId: string, index = 0): string {
  return getVentureImage(ventureId, index) ?? TEAM_HERO_IMAGE;
}

/** Small avatars for homepage sections */
export const VENTURE_AVATARS = [
  getVentureImage("lubnas", 0)!,
  getVentureImage("pureflow", 0)!,
  getVentureImage("trend-setter", 0)!,
] as const;
