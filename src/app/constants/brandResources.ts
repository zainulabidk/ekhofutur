/** Shared contact, asset links, and per-brand Google resources for Ekho Future. */

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
  googleDocUrl?: string;
  sitePath?: string;
};

export const BRAND_RESOURCES: BrandResource[] = [
  {
    id: "old-school",
    name: "Old School Outdoor Clothing Co.",
    email: "oldschooloutdoorclothingco@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1hLCisnOe-YDxFU0Y88Yv7LISkGqTYudpkqeqJm80VZo/edit",
    sitePath: "/old-school",
  },
  {
    id: "compliment",
    name: "Complikit",
    email: "complikitch@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1UwFQfdAtcnGztRpceu5d6EwelSgPD7g2jP_f08mKjnQ/edit",
    sitePath: "/compliment",
  },
  {
    id: "trend-setters",
    name: "Trend Setters",
    email: "trendsetters0101@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1EC6Ru1ack0uJxqQpl7OIyQqLqsIhQDOLWyECCm6hQrs/edit",
    sitePath: "/trend-setter",
  },
  {
    id: "builders",
    name: "Builders & Realtors",
    email: "Ekhofutur@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1ZUEnn2ks7Pp4zA6XfKN_7ckAmp4DIEz9nFSgZyznpuE/edit",
    sitePath: "/builders-realtors",
  },
  {
    id: "pots-pans",
    name: "Xclusive Pots & Pans",
    email: "xclusivepotsandpans@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1JMgW-pzsIb_wAwiQxLMTiknQCIirFDpXENzwzx7gQfU/edit",
    sitePath: "/pots-and-pan",
  },
  {
    id: "ekho-rascapes",
    name: "Ekho Rascapes",
    email: "ekhorascapes@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1b-a3akTgmFnZfZfyvCyLP3XlKU3zYWGqWQtqX-omuuk/edit",
    sitePath: "/ekho-rascapes",
  },
  {
    id: "skillbyte",
    name: "Ekho SkillByte",
    email: "ekhoskillbyte@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1dO4-uRkiaDUwkBujFI14eIHeFDRQrlEVp5aNkOycUyw/edit",
    sitePath: "/skillbyte",
  },
  {
    id: "ekho-future",
    name: "Ekho Future",
    email: "Ekhofutur@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1HIgFetZW4iBWoEETqiBQ-qv_TnEtEt6IlJFsDcCYAXM/edit",
  },
  {
    id: "pureflow",
    name: "Pure Flow",
    email: "Ekhofutur@gmail.com",
    googleDocUrl:
      "https://docs.google.com/document/d/1aat_WDD0mcMebOb9i7vRpryqEffAwNSyucsWNCD9KXc/edit",
    sitePath: "/pure-flow",
  },
];

export function getBrandById(id: string): BrandResource | undefined {
  return BRAND_RESOURCES.find((b) => b.id === id);
}
