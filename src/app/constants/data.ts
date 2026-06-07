export { INDUSTRY_TIMELINE } from "./site";
import { heroImageForVenture } from "./media";
import { getVentureImage } from "@/lib/venture-images";

export const HERO_SLIDES = [
  {
    id: 1,
    category: "Real Estate",
    title: "Building Dreams",
    description: "Expertly crafted architectural and urban developments",
    image: heroImageForVenture("builders", 0),
  },
  {
    id: 2,
    category: "Pure Flow",
    title: "Pure Flow Water",
    description: "Safe purification systems for home and business",
    image: heroImageForVenture("pureflow", 0),
  },
  {
    id: 3,
    category: "Dental Excellence",
    title: "Smile with Confidence",
    description: "Advanced dental care and aesthetic treatments",
    image: heroImageForVenture("lubnas", 0),
  },
  {
    id: 4,
    category: "Outdoor Clothing",
    title: "Style Redefined",
    description: "Premium apparel for the modern adventurer",
    image: heroImageForVenture("trend-setter", 0),
  },
  {
    id: 5,
    category: "Smart Kitchen",
    title: "Culinary Excellence",
    description: "Innovative tools for the contemporary home chef",
    image: heroImageForVenture("compliment", 0),
  },
  {
    id: 6,
    category: "AI & Technology",
    title: "Development",
    description: "Web and app development through Ekho Digix",
    image: heroImageForVenture("ekhodigix", 0),
  },
  {
    id: 7,
    category: "Lifestyle",
    title: "Wellness Sanctuary",
    description: "Curated space for relaxation and rejuvenation",
    image: heroImageForVenture("wellness", 0),
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Dental Studio Client",
    text: "Ekho Future transformed our office with their dental studio. Professional service, modern equipment, and a team that truly cares about patient comfort.",
    image: getVentureImage("lubnas", 1)!,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Pure Flow Customer",
    text: "Our Pure Flow system delivers clean water every day. Installation was smooth and maintenance support has been excellent.",
    image: getVentureImage("pureflow", 1)!,
  },
  {
    id: 3,
    name: "Amira Hassan",
    role: "Trend Setter Customer",
    text: "Found the perfect outdoor look for my trip. The collection is stunning and the staff made shopping a delightful experience.",
    image: getVentureImage("trend-setter", 1)!,
  },
];

export const CREATIONS = [
  "https://i.postimg.cc/xCSmHcK2/20260110-135802.avif",
  "https://i.postimg.cc/cHQbMg2n/20260110-111923.avif",
  "https://i.postimg.cc/QdbwvTd6/IMG-2059.avif",
  "https://i.postimg.cc/brYX6Nj2/IMG-3812.avif",
  "https://i.postimg.cc/xdj8SMyH/IMG-2042.avif",
  "https://i.postimg.cc/kXWypPgB/20260110-113349.avif",
];

/** Navbar / marketing logo (remote). Favicons: `src/app/icon.png`, `apple-icon.png`, `public/favicon.png`. */
export const LOGO_URL = "https://i.postimg.cc/T2J3XnZb/TRANSPARENT.png";
