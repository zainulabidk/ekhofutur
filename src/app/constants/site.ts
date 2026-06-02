export { COMPANY_CONTACT, BRAND_RESOURCES, getBrandById } from "./brandResources";

export const SITE = {
  name: "Ekho Future",
  legalName: "Ekho Future",
  tagline: "Diversified Excellence",
  description:
    "A visionary conglomerate across real estate, fashion, wellness, smart kitchen, and ChatGPT-powered digital solutions through Ekho Digix.",
} as const;

export const MAIN_NAV = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
] as const;

export const FOOTER_VENTURE_LINKS = [
  { name: "Old School", href: "/old-school" },
  { name: "Trend Setter", href: "/trend-setter" },
  { name: "Lubnas Dental", href: "/lubnas-dental" },
  { name: "Compliment", href: "/compliment" },
  { name: "Ekho Digix", href: "/ekho-digix" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
] as const;

export type Venture = {
  id: string;
  title: string;
  description: string;
  href: string;
  images: string[];
  category: string;
  tagline?: string;
  accent?: string;
  /** YouTube embed URL or direct .mp4 — shown on venture landing pages */
  videoUrl?: string;
  videoPoster?: string;
};

export const VENTURES: Venture[] = [
  {
    id: "builders",
    title: "Echo Futur Builders & Realtors",
    category: "Real Estate",
    description:
      "Expertly crafted real estate solutions for modern urban and residential developments.",
    images: [
      "https://i.postimg.cc/mgmdWB53/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
      "https://i.postimg.cc/C1TkW2Sn/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
      "https://i.postimg.cc/fR199P3P/Whats-App-Image-2026-03-10-at-2-39-01-PM.jpg",
      "https://i.postimg.cc/J7KHq0D3/Whats-App-Image-2026-03-10-at-2-39-02-PM-(1).jpg",
    ],
    href: "/builders-realtors",
    tagline: "Property development",
    accent: "#1e3a5f",
  },
  {
    id: "old-school",
    title: "Old School",
    category: "Outdoor Clothings",
    description:
      "Bringing back the classic touch with vintage designs and traditional workflows.",
    images: [
      "https://i.postimg.cc/xCSmHcK2/20260110-135802.avif",
      "https://i.postimg.cc/MHpvbRXZ/20260110-140148.jpg",
      "https://i.postimg.cc/TPv1NBhQ/20260110-135904.jpg",
      "https://i.postimg.cc/pT6t4nqX/20260110-140051.avif",
    ],
    href: "/old-school",
    tagline: "Vintage outdoor apparel",
    accent: "#D4A373",
  },
  {
    id: "trend-setter",
    title: "Trend Setter",
    category: "Outdoor Clothings",
    description:
      "Innovative and ahead of the curve, we create designs that set trends in the industry.",
    images: [
      "https://i.postimg.cc/cHQbMg2n/20260110-111923.avif",
      "https://i.postimg.cc/JncpBwH2/20260110-111940.avif",
      "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
      "https://i.postimg.cc/gj2HXxWF/20260110-112120.avif",
    ],
    href: "/trend-setter",
    tagline: "Fashion forward outdoor wear",
    accent: "#111111",
  },
  {
    id: "lubnas",
    title: "Lubnas Dental Studio",
    category: "Life Care",
    description:
      "Creating modern dental solutions with clean, professional, and approachable aesthetics.",
    images: [
      "https://i.postimg.cc/QdbwvTd6/IMG-2059.avif",
      "https://i.postimg.cc/gc8MfZMt/IMG-2061.avif",
      "https://i.postimg.cc/jdRhmknC/IMG-2062.avif",
      "https://i.postimg.cc/yxsFqkdj/IMG-2067.avif",
    ],
    href: "/lubnas-dental",
    tagline: "Modern dental care",
    accent: "#2563eb",
  },
  {
    id: "hopeful-steps",
    title: "Hopeful Steps",
    category: "Life Care",
    description:
      "Compassionate therapy and wellness services for families and individuals.",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    ],
    href: "/hopeful-steps",
    tagline: "Therapy & wellness",
    accent: "#10b981",
  },
  {
    id: "compliment",
    title: "Compliment",
    category: "Smart Kitchen",
    description:
      "Enhancing spaces and products with thoughtful design and attention to detail.",
    images: [
      "https://i.postimg.cc/brYX6Nj2/IMG-3812.avif",
      "https://i.postimg.cc/J4yYRBKh/IMG-3814.avif",
      "https://i.postimg.cc/CLf73pLq/IMG-3815.avif",
      "https://i.postimg.cc/brYX6Nj2/IMG-3812.avif",
    ],
    href: "/compliment",
    tagline: "Smart kitchen appliances",
    accent: "#ea580c",
  },
  {
    id: "pots-and-pans",
    title: "Pots & Pans",
    category: "Smart Kitchen",
    description:
      "Quality cookware for modern kitchens, blending style and functionality.",
    images: [
      "https://i.postimg.cc/xdj8SMyH/IMG-2042.avif",
      "https://i.postimg.cc/xCw9qzHc/IMG-2050.avif",
      "https://i.postimg.cc/P5ShYcYh/IMG-2052-(1).avif",
      "https://i.postimg.cc/4dtrLF7z/IMG-2056.avif",
    ],
    href: "/pots-and-pan",
    tagline: "Premium cookware",
    accent: "#78350f",
  },
  {
    id: "ekho-rascapes",
    title: "Ekho Rascapes",
    category: "Landscape",
    description:
      "Creative landscape and architectural solutions that elevate outdoor spaces.",
    images: [
      "https://i.postimg.cc/kXWypPgB/20260110-113349.avif",
      "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
      "https://i.postimg.cc/3J6HnpW9/20260110-113438.avif",
      "https://i.postimg.cc/SKn2HcG4/20260110-113458.avif",
    ],
    href: "/ekho-rascapes",
    tagline: "Landscape design",
    accent: "#166534",
  },
  {
    id: "wellness",
    title: "Home Stays & Wellness",
    category: "Hospitality",
    description:
      "Comfortable home stays and wellness centers for relaxation and rejuvenation.",
    images: [
      "https://i.postimg.cc/d0vJpRgV/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
      "https://i.postimg.cc/v8jbbwpy/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
      "https://i.postimg.cc/br2Xsd4g/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
      "https://i.postimg.cc/hjX41DHj/Whats-App-Image-2026-03-10-at-2-22-33-PM.jpg",
    ],
    href: "/wellness",
    tagline: "Stay & rejuvenate",
    accent: "#7c3aed",
  },
  {
    id: "pureflow",
    title: "Pure Flow",
    category: "Sustainability",
    description: "Water purification solutions for safe, sustainable living.",
    images: [
      "https://i.postimg.cc/HnQg6V3n/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
      "https://i.postimg.cc/wjWd4K54/Whats-App-Image-2026-03-10-at-3-12-52-PM.jpg",
      "https://i.postimg.cc/SNkFyQgb/Whats-App-Image-2026-03-10-at-3-12-53-PM.jpg",
      "https://i.postimg.cc/8P132KCT/Whats-App-Image-2026-03-10-at-3-12-54-PM.jpg",
    ],
    href: "/pure-flow",
    tagline: "Water purification",
    accent: "#0891b2",
  },
  {
    id: "ekhodigix",
    title: "Ekho Digix",
    category: "Ekho Digix",
    description:
      "Digital solutions and innovative technology services for modern businesses.",
    images: [
      "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
      "https://i.postimg.cc/Y96nVYcZ/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
      "https://i.postimg.cc/QM5091MM/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
      "https://i.postimg.cc/SNvrgD22/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
    ],
    href: "/ekho-digix",
    tagline: "Digital agency",
    accent: "#4682B4",
    videoPoster:
      "https://i.postimg.cc/Y96nVYcZ/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
  },
  {
    id: "skillbyte",
    title: "Ekho SkillByte Academy",
    category: "Ekho Digix",
    description:
      "Industry-aligned digital skills training, ChatGPT workflows, and professional AI coaching.",
    images: [
      "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
      "https://i.postimg.cc/QM5091MM/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
      "https://i.postimg.cc/SNvrgD22/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
      "https://i.postimg.cc/Y96nVYcZ/Whats-App-Image-2026-03-10-at-3-12-22-PM.jpg",
    ],
    href: "/skillbyte",
    tagline: "ChatGPT & AI training",
    accent: "#4f46e5",
    videoPoster:
      "https://i.postimg.cc/0y4BJ9dX/Whats-App-Image-2026-03-10-at-3-12-21-PM.jpg",
  },
];

/** @deprecated Use VENTURES — kept for existing imports */
export const INDUSTRY_TIMELINE = VENTURES.map((v) => ({
  id: v.id,
  title: v.title,
  description: v.description,
  images: v.images,
  url: v.href,
}));

export type NavServiceItem = {
  id: string;
  name: string;
  href: string;
  image: string;
};

export type NavServiceGroup = {
  category: string;
  items: NavServiceItem[];
};

export function getNavServiceGroups(): NavServiceGroup[] {
  const order = [
    "Real Estate",
    "Outdoor Clothings",
    "Life Care",
    "Smart Kitchen",
    "Landscape",
    "Hospitality",
    "Sustainability",
    "Ekho Digix",
  ];

  const grouped = new Map<string, NavServiceItem[]>();

  for (const venture of VENTURES) {
    const items = grouped.get(venture.category) ?? [];
    items.push({
      id: venture.id,
      name: venture.title,
      href: venture.href,
      image: venture.images[0],
    });
    grouped.set(venture.category, items);
  }

  return order
    .filter((cat) => grouped.has(cat))
    .map((category) => ({
      category,
      items: grouped.get(category)!,
    }));
}

export function getVentureById(id: string): Venture | undefined {
  return VENTURES.find((v) => v.id === id);
}

export function getCategoryGroups() {
  return getNavServiceGroups().map((group) => ({
    mainTitle: group.category,
    subItems: group.items
      .map((item) => {
        const venture = VENTURES.find((v) => v.href === item.href);
        if (!venture) return null;
        return {
          name: item.name,
          href: item.href,
          description: venture.description,
          images: venture.images,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null),
  }));
}
