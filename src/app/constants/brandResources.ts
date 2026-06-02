/** Shared contact and per-brand emails for Ekho Future. Full brand copy lives in ventureContent.ts */

export const COMPANY_CONTACT = {
  phone: "+91 7902650101",
  phoneDisplay: "7902650101",
  phoneHref: "tel:+917902650101",
  whatsappHref: "https://wa.me/917902650101",
  primaryEmail: "Ekhofutur@gmail.com",
  location: "Industrial Hub, Kerala, India",
} as const;

export type BrandResource = {
  id: string;
  name: string;
  email: string;
  sitePath?: string;
};

export const BRAND_RESOURCES: BrandResource[] = [
  {
    id: "old-school",
    name: "Old School Outdoor Clothing Co.",
    email: "oldschooloutdoorclothingco@gmail.com",
    sitePath: "/old-school",
  },
  {
    id: "compliment",
    name: "Complikit",
    email: "complikitch@gmail.com",
    sitePath: "/compliment",
  },
  {
    id: "trend-setter",
    name: "Trend Setters",
    email: "trendsetters0101@gmail.com",
    sitePath: "/trend-setter",
  },
  {
    id: "builders",
    name: "Builders & Realtors",
    email: "Ekhofutur@gmail.com",
    sitePath: "/builders-realtors",
  },
  {
    id: "pots-and-pans",
    name: "Xclusive Pots & Pans",
    email: "xclusivepotsandpans@gmail.com",
    sitePath: "/pots-and-pan",
  },
  {
    id: "ekho-rascapes",
    name: "Ekho Rascapes",
    email: "ekhorascapes@gmail.com",
    sitePath: "/ekho-rascapes",
  },
  {
    id: "ekhodigix",
    name: "Ekho Digix Development",
    email: "Ekhofutur@gmail.com",
    sitePath: "/ekho-digix",
  },
  {
    id: "skillbyte",
    name: "SkillByte Advanced AI Digital Marketing",
    email: "ekhoskillbyte@gmail.com",
    sitePath: "/skillbyte",
  },
  {
    id: "ekho-future",
    name: "Ekho Future",
    email: "Ekhofutur@gmail.com",
  },
  {
    id: "pureflow",
    name: "Pure Flow",
    email: "Ekhofutur@gmail.com",
    sitePath: "/pure-flow",
  },
  {
    id: "lubnas",
    name: "Lubnas Dental Studio",
    email: "Ekhofutur@gmail.com",
    sitePath: "/lubnas-dental",
  },
  {
    id: "hopeful-steps",
    name: "Hopeful Steps",
    email: "Ekhofutur@gmail.com",
    sitePath: "/hopeful-steps",
  },
  {
    id: "wellness",
    name: "Home Stays & Wellness",
    email: "Ekhofutur@gmail.com",
    sitePath: "/wellness",
  },
];

export function getBrandById(id: string): BrandResource | undefined {
  return BRAND_RESOURCES.find((b) => b.id === id);
}
