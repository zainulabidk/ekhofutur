export type VentureListGroup = {
  title: string;
  items: string[];
};

export type VentureNumberedItem = {
  title: string;
  description: string;
};

export type VentureTableRow = {
  category: string;
  promise: string;
};

export type VentureContentBlock = {
  heading?: string;
  paragraphs?: string[];
  quote?: string;
  listGroups?: VentureListGroup[];
  numbered?: VentureNumberedItem[];
  bullets?: string[];
  table?: VentureTableRow[];
};

export type VentureContent = {
  displayTitle: string;
  headline: string;
  subheadline?: string;
  intro: string[];
  blocks: VentureContentBlock[];
  closing?: {
    heading?: string;
    quote?: string;
    paragraphs?: string[];
    tagline?: string;
  };
};

export const VENTURE_CONTENT: Record<string, VentureContent> = {
  builders: {
    displayTitle: "Echo Futur Builders & Realtors",
    headline: "Constructing Excellence",
    subheadline:
      "No Compromise in Quality. Guaranteed Value in Every Square Foot.",
    intro: [
      "At Echo Futur Builders & Realtors, we don't just build structures; we build trust. Whether it's a dream home or a critical healthcare facility, our philosophy is simple: Uncompromising Quality.",
      "As the infrastructure arm of the Echo Futur group, we combine architectural innovation with a unique Price Match Guarantee, ensuring you never have to choose between your budget and your vision.",
    ],
    blocks: [
      {
        heading: "Our Diverse Project Portfolio",
        paragraphs: [
          "Our expertise spans across residential, commercial, and specialized sectors. We bring the same level of precision to every blueprint:",
        ],
        listGroups: [
          {
            title: "Residential Excellence",
            items: [
              "Luxury Villas & Flats: Modern living spaces designed for comfort and elegance.",
              "Custom Farmhouses: Your private escape, built to blend with nature.",
            ],
          },
          {
            title: "Commercial & Hospitality",
            items: [
              "Business Hubs: High-functioning commercial spaces that drive growth.",
              "Restaurants & Homestays: Creating inviting atmospheres for the hospitality industry.",
            ],
          },
          {
            title: "Healthcare Infrastructure",
            items: [
              "Clinics & Hospitals: Specialized construction meeting the highest safety and technical standards for the medical field.",
            ],
          },
        ],
      },
      {
        heading: "The Echo Futur Construction Standard",
        numbered: [
          {
            title: "No Compromise in Quality",
            description:
              "From the foundation to the finishing touches, we use premium materials and rigorous engineering standards. We believe that a building is only as good as the parts you can't see.",
          },
          {
            title: "Price Match Guarantee",
            description:
              "We are committed to transparency. We provide top-tier construction and real estate services at the most competitive rates in the market. If you find a comparable quote, we'll match it—without cutting corners.",
          },
          {
            title: "End-to-End Solutions",
            description:
              "From land acquisition and architectural design to the final handover, our team of expert realtors and builders manage the entire lifecycle of your project.",
          },
        ],
      },
      {
        heading: "Build Your Future With Us",
        quote:
          "Your vision is our blueprint. Our quality is your peace of mind.",
        paragraphs: [
          "Whether you are looking to invest in a residential flat, launch a new restaurant, or develop a state-of-the-art hospital, Echo Futur Builders & Realtors is your partner in progress.",
        ],
      },
    ],
    closing: {
      tagline: "Echo Futur Builders & Realtors: Quality you can stand on.",
    },
  },

  "trend-setter": {
    displayTitle: "Trend Setter",
    headline: "Redefining the Modern Masculine Aesthetic",
    subheadline:
      "Premium Outdoor Apparel for the Man Who Leads, Never Follows.",
    intro: [
      "Style isn't just about what you wear; it's about the statement you make. Trend Setter is the premier menswear destination within the Echo Futur group, dedicated to the man who demands a fusion of high-street fashion and outdoor performance. We don't just follow the latest styles—we define them.",
    ],
    blocks: [
      {
        heading: "The Trend Setter Vision",
        quote: "Where the pavement ends, the style begins.",
        paragraphs: [
          "We believe that \"outdoor\" doesn't have to mean \"bulky.\" Trend Setter curates a collection of premium clothing that transitions seamlessly from a high-stakes meeting to a mountain-side retreat. Our pieces are selected for the man who values sharp silhouettes, technical fabrics, and an undeniable presence.",
        ],
      },
      {
        heading: "The Premium Apparel Collection",
        paragraphs: [
          "Our wardrobe is built on the pillars of fit, fabric, and forward-thinking design:",
        ],
        bullets: [
          "Urban-Tech Outerwear: Sleek, lightweight jackets, windbreakers, and gilets that offer weather protection without sacrificing a tailored fit.",
          "Modern Utility Wear: Cargo trousers and joggers re-imagined with premium fabrics and tapered cuts for a sophisticated, rugged look.",
          "High-Performance Knits: Breathable, moisture-wicking polos and sweaters that keep you comfortable from sunrise to sunset.",
          "Field-Ready Shirts: Precision-stitched button-downs and technical tees designed for movement and durability.",
          "Elite Layering: Minimalist vests and thermal mid-layers that provide warmth without compromising your style.",
        ],
      },
      {
        heading: "Why Trend Setter?",
        bullets: [
          "Curation Over Collection: We don't stock everything; we only stock the best. Every garment is handpicked for its \"Trend Setter\" status.",
          "The Modern Fit: Our clothing is designed for the modern physique—sharp, clean lines that flatter while allowing for total freedom of movement.",
          "Echo Futur Innovation: Leveraging the visionary spirit of Echo Futur, we bring you the latest textile technology and global fashion trends before they hit the mainstream.",
        ],
      },
      {
        heading: "Lead the Way",
        paragraphs: [
          "Don't just blend into the crowd. Elevate your outdoor wardrobe with pieces that reflect your ambition and your taste.",
        ],
      },
    ],
    closing: {
      tagline: "Trend Setter: For those who set the pace.",
    },
  },

  compliment: {
    displayTitle: "Compliment",
    headline: "The Heart of Your Smart Kitchen",
    subheadline: "Authorized Dealer for India's Most Trusted Kitchen Brands.",
    intro: [
      "A great meal starts with the right tools. At Compliment, we bridge the gap between traditional cooking and modern efficiency. As a specialized vertical of the Echo Futur group, we are proud to be the authorized destination for world-class kitchen technology.",
      "We don't just sell appliances; we provide the \"compliments\" your kitchen needs to run smarter, faster, and better.",
    ],
    blocks: [
      {
        heading: "Our Elite Brand Partners",
        paragraphs: [
          "We bring you the gold standard in kitchenware. When you shop with Compliment, you are choosing genuine products from the industry's finest:",
        ],
        bullets: [
          "Sujata: The undisputed leader in heavy-duty grinders and juicers.",
          "Prestige: India's most iconic name for innovative pressure cookers and cooktops.",
          "Hawkins: The benchmark for safety, durability, and classic engineering.",
          "Meyer: Premium, global-standard cookware for the modern gourmet chef.",
        ],
      },
      {
        heading: "Smart Solutions for Every Home",
        paragraphs: [
          "Our curated inventory is designed to simplify your culinary workflow:",
        ],
        bullets: [
          "Precision Grinding: High-torque mixer grinders that handle the toughest ingredients with ease.",
          "Next-Gen Cooking: Induction cooktops and smart pressure cookers with advanced safety features.",
          "Healthy Living: Centrifugal juicers and cold-press extractors for a nutrient-rich lifestyle.",
          "Premium Cookware: Non-stick, stainless steel, and hard-anodized solutions from Meyer and Hawkins.",
          "Kitchen Essentials: A wide array of smart accessories—from choppers to electric kettles—that save you time every single day.",
        ],
      },
      {
        heading: "The Compliment Advantage",
        quote: "Quality you can trust, from names you already love.",
        bullets: [
          "100% Authentic: As an Authorized Dealer, every product comes with a genuine brand warranty and after-sales support.",
          "Expert Curation: We select only the most efficient \"smart\" models that fit the modern Indian kitchen.",
          "The Echo Futur Guarantee: Like every Echo Futur company, Compliment is committed to bringing future-ready solutions into your home today.",
        ],
      },
      {
        heading: "Upgrade Your Culinary Experience",
        paragraphs: [
          "Why settle for ordinary when you can have the best? Visit us to explore the latest collections from Sujata, Prestige, and more.",
        ],
      },
    ],
    closing: {
      tagline: "Compliment: Giving your kitchen the edge it deserves.",
    },
  },

  "pots-and-pans": {
    displayTitle: "Pots and Pan",
    headline: "The Art of the Kitchen",
    subheadline: "Elevate Every Ingredient. Master Every Meal.",
    intro: [
      "From the first sizzle in the pan to the golden crust of a perfect bake, Pots and Pan provides the tools that turn cooking into a craft. As a proud member of the Echo Futur group, we combine cutting-edge material science with ergonomic design to bring professional-grade performance to your kitchen.",
    ],
    blocks: [
      {
        heading: "Our Collections",
        table: [
          {
            category: "Premium Cookware",
            promise:
              "Multi-clad stainless steel and refined non-stick surfaces designed for perfect heat distribution and lifelong durability.",
          },
          {
            category: "Designer Bakeware",
            promise:
              "From heavy-gauge tins to ceramic dishes—engineered for the consistent heat required for the most delicate pastries.",
          },
          {
            category: "Kitchen Appliances",
            promise:
              "High-performance tech that simplifies the complex, from precision blenders to intelligent heating elements.",
          },
        ],
      },
      {
        heading: "Why Choose Pots and Pan?",
        bullets: [
          "Professional Pedigree: We bridge the gap between industrial kitchen power and home-chef accessibility.",
          "Built for Longevity: We don't believe in \"disposable\" kitchenware. Our products are investments, designed to be passed down through generations.",
          "The Echo Futur Edge: Backed by the visionary resources of the Echo Futur parent group, we integrate the latest sustainable manufacturing processes into every piece we forge.",
        ],
        quote:
          "A great meal starts long before the stove is lit. It starts with the confidence that your tools will never let you down.",
      },
      {
        heading: "The Culinary Standard",
        paragraphs: [
          "Whether you are searing a dry-aged steak or whisking a light-as-air soufflé, Pots and Pan ensures you have the precision, control, and style you deserve. We aren't just selling kitchenware; we are fueling your culinary passion.",
        ],
      },
    ],
  },

  wellness: {
    displayTitle: "Echo Futur Home Stays & Wellness Center",
    headline: "Your Home in the Heart of Nature. Your Journey to Inner Peace.",
    intro: [
      "Tourism is more than just a destination or a journey—it is an opportunity for total rejuvenation. At the Echo Futur Home Stays & Wellness Center, we believe that true travel should refresh the mind, heal the body, and soothe the soul.",
      "We don't just offer a place to stay; we offer a sanctuary where you can disconnect from the world and reconnect with yourself.",
    ],
    blocks: [
      {
        heading: "Our Holistic Offerings",
        paragraphs: [
          "We have curated an environment where \"Hospitality meets Healing.\"",
        ],
        listGroups: [
          {
            title: "The Homestay Experience: \"Just Like Home\"",
            items: [
              "Experience the warmth of a home, not the coldness of a hotel. Our homestays are designed with comfort, privacy, and a personal touch, ensuring you feel like you belong from the moment you arrive.",
            ],
          },
          {
            title: "Wellness & Recovery Center",
            items: [
              "Step into a space dedicated to your health. From traditional therapies to modern relaxation techniques, our wellness center focuses on mental clarity and physical detoxification.",
            ],
          },
          {
            title: "Curated Tourism",
            items: [
              "We believe refreshment is the real goal of tourism. Our travel itineraries are not about rushing to landmarks; they are about slow, meaningful experiences that leave you feeling energized and inspired.",
            ],
          },
        ],
      },
      {
        heading: "The Refreshment Philosophy",
        quote:
          "Tourism is not a journey; it is a renewal. Refreshment is the real tourism for the health of your mind and body.",
        paragraphs: [
          "In the Echo Futur ecosystem, we understand that modern life is fast and exhausting. Our center is designed to be the \"pause button.\"",
        ],
        bullets: [
          "Mental Health: Quiet spaces and guided relaxation to clear the mental fog.",
          "Body Health: Nutritious, home-cooked meals and physical wellness routines.",
          "Soul Health: Immersive nature experiences and authentic local hospitality.",
        ],
      },
      {
        heading: "Why Stay With Us?",
        bullets: [
          "A \"No-Hotel\" Policy: We prioritize the comfort and soul of a real home.",
          "Integrated Wellness: Unlike standard stays, we provide access to health and wellness experts during your visit.",
          "Echo Futur Vision: As part of a forward-thinking group, we ensure our facilities are sustainable, ethical, and focused on the future of human well-being.",
        ],
      },
      {
        heading: "Reclaim Your Peace",
        paragraphs: [
          "Stop traveling just to see things. Start traveling to feel things. Whether you need a weekend of solitude or a week of physical renewal, your sanctuary is waiting.",
        ],
      },
    ],
    closing: {
      tagline: "Echo Futur Home Stays & Wellness: Refresh. Recover. Return to You.",
    },
  },
};

export function getVentureContent(id: string): VentureContent | undefined {
  return VENTURE_CONTENT[id];
}
