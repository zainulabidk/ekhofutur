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

  "old-school": {
    displayTitle: "Old School Outdoor Clothing Co.",
    headline: "Vintage Outdoor Apparel with Timeless Character",
    subheadline: "Classic cuts. Honest fabrics. Style that outlasts seasons.",
    intro: [
      "Old School is Echo Futur's tribute to heritage outdoor wear — pieces inspired by decades past, rebuilt for today's explorer. We curate vintage-influenced jackets, tees, and utility wear that feel broken-in from day one.",
      "Every collection balances nostalgia with durability: rugged enough for the trail, refined enough for the city.",
    ],
    blocks: [
      {
        heading: "What We Stand For",
        bullets: [
          "Heritage Silhouettes: Denim, corduroy, varsity, and field jackets with authentic vintage proportions.",
          "Curated Quality: We stock fewer styles and focus on construction, fit, and fabric integrity.",
          "Outdoor Meets Everyday: Layers that move from weekend hikes to casual evenings without a wardrobe change.",
          "Echo Futur Standard: Backed by the group's commitment to honest products and lasting value.",
        ],
      },
      {
        heading: "The Collection",
        listGroups: [
          {
            title: "Outerwear",
            items: [
              "Classic denim jackets, retro windbreakers, and insulated varsity pieces.",
            ],
          },
          {
            title: "Essentials",
            items: [
              "Vintage-wash tees, corduroy trousers, and rugged overshirts.",
            ],
          },
        ],
      },
      {
        heading: "Visit Old School",
        paragraphs: [
          "Explore the latest drop in-store or connect with our team for sizing and availability across Kerala.",
        ],
      },
    ],
    closing: {
      tagline: "Old School: Wear the legacy.",
    },
  },

  lubnas: {
    displayTitle: "Lubnas Dental Studio",
    headline: "Modern Dental Care with a Personal Touch",
    subheadline: "Clean aesthetics. Gentle expertise. Smiles built to last.",
    intro: [
      "Lubnas Dental Studio delivers comprehensive oral care in a calm, contemporary setting. From routine checkups to advanced restorative work, our team combines precision technology with patient-first communication.",
      "As part of Echo Futur's Life Care vertical, we believe dental health is foundational to confidence and overall wellness.",
    ],
    blocks: [
      {
        heading: "Services We Offer",
        bullets: [
          "Dental Cleaning & Preventive Care: Professional hygiene and early detection for lifelong oral health.",
          "Root Canal & Restorative Treatment: Expert care to save natural teeth and relieve discomfort.",
          "Teeth Whitening: Safe, effective brightening for a confident smile.",
          "Orthodontics & Braces: Traditional and modern aligner options for all ages.",
          "Dental Implants: Permanent, natural-looking tooth replacement.",
          "Comprehensive Checkups: Routine exams to catch issues before they grow.",
        ],
      },
      {
        heading: "The Lubnas Experience",
        quote: "Your comfort is as important as your clinical outcome.",
        bullets: [
          "Sterile, welcoming clinic environment designed to reduce anxiety.",
          "Transparent treatment plans and clear communication at every visit.",
          "Convenient scheduling and follow-up support for families and professionals.",
        ],
      },
      {
        heading: "Book Your Appointment",
        paragraphs: [
          "New patients welcome. Contact us for consultations, emergency visits, and cosmetic dentistry inquiries.",
        ],
      },
    ],
    closing: {
      tagline: "Lubnas Dental Studio: Smile with confidence.",
    },
  },

  "hopeful-steps": {
    displayTitle: "Hopeful Steps",
    headline: "Therapy & Wellness for Every Stage of Life",
    subheadline: "Compassionate support for children, families, and individuals.",
    intro: [
      "Hopeful Steps provides speech therapy, behavioral support, counseling, and special education services in a warm, nurturing environment. We meet each person where they are — with patience, expertise, and encouragement.",
      "Our mission is simple: help every client take the next step forward with confidence.",
    ],
    blocks: [
      {
        heading: "Our Core Services",
        bullets: [
          "Speech Therapy: Communication skills through engaging, age-appropriate techniques.",
          "Child Development: Cognitive and social growth through guided play and structured activities.",
          "Behavioral Therapy: Positive strategies for emotional regulation and healthy habits.",
          "Counseling: A safe space for healing, clarity, and personal growth.",
          "Special Education: Individualized learning paths that honor each child's strengths.",
        ],
      },
      {
        heading: "Who We Serve",
        listGroups: [
          {
            title: "Children & Adolescents",
            items: [
              "Early intervention, school-readiness, and social-skills development.",
            ],
          },
          {
            title: "Families",
            items: [
              "Parent guidance, family counseling, and coordinated care plans.",
            ],
          },
        ],
      },
      {
        heading: "Start Your Journey",
        paragraphs: [
          "Reach out to schedule an assessment or book a visit. Our specialists are here to listen and build a plan that fits your needs.",
        ],
      },
    ],
    closing: {
      tagline: "Hopeful Steps: Every step matters.",
    },
  },

  "ekho-rascapes": {
    displayTitle: "Ekho Rascapes",
    headline: "Landscape & Outdoor Design That Elevates Your Space",
    subheadline: "Creative planning. Lasting greenery. Architecture in harmony with nature.",
    intro: [
      "Ekho Rascapes designs and delivers landscape solutions for homes, hospitality projects, and commercial sites. We blend horticulture, hardscaping, and architectural vision to create outdoor environments that feel intentional and alive.",
      "From concept sketches to final planting, our team manages every detail with Echo Futur's quality standard.",
    ],
    blocks: [
      {
        heading: "What We Deliver",
        bullets: [
          "Residential Gardens: Courtyards, lawns, and terrace greens tailored to your lifestyle.",
          "Commercial Landscapes: Inviting entrances, campus planting, and low-maintenance corporate exteriors.",
          "Hardscaping & Features: Pathways, retaining walls, water elements, and outdoor lighting plans.",
          "Maintenance Programs: Seasonal care to keep your investment thriving year-round.",
        ],
      },
      {
        heading: "The Rascapes Process",
        numbered: [
          {
            title: "Consult & Survey",
            description:
              "We assess soil, climate, drainage, and how you use the space before proposing a design.",
          },
          {
            title: "Design & Visualize",
            description:
              "Layouts, plant palettes, and material selections aligned with your budget and timeline.",
          },
          {
            title: "Build & Plant",
            description:
              "Skilled execution with quality materials and attention to finishing details.",
          },
        ],
      },
      {
        heading: "Transform Your Outdoors",
        paragraphs: [
          "Partner with Ekho Rascapes for projects that increase property value and daily enjoyment of your space.",
        ],
      },
    ],
    closing: {
      tagline: "Ekho Rascapes: Where design meets the outdoors.",
    },
  },

  pureflow: {
    displayTitle: "Pure Flow",
    headline: "Water Purification for Safe, Sustainable Living",
    subheadline: "Clean water at home and at work — reliable systems, honest service.",
    intro: [
      "Pure Flow provides water purification solutions engineered for Indian water conditions. We help households and businesses access safe drinking water through efficient filtration, RO systems, and maintenance you can trust.",
      "As Echo Futur's sustainability-focused brand, we prioritize health, conservation, and long-term system performance.",
    ],
    blocks: [
      {
        heading: "Solutions We Provide",
        bullets: [
          "Home RO & UV Systems: Compact units for kitchens and full-home filtration needs.",
          "Commercial Purification: Higher-capacity systems for offices, clinics, and hospitality.",
          "Filter Replacement & AMC: Scheduled service so your water quality never drops.",
          "Water Testing Guidance: Recommendations based on local TDS and contamination profiles.",
        ],
      },
      {
        heading: "Why Pure Flow?",
        quote: "Clean water should be simple — not a guessing game.",
        bullets: [
          "Genuine components and transparent pricing on every install.",
          "Technicians trained on leading purification technologies.",
          "Echo Futur accountability: one group, one standard of after-sales support.",
        ],
      },
      {
        heading: "Get Pure Water Today",
        paragraphs: [
          "Contact Pure Flow for site visits, quotations, and annual maintenance plans across Kerala.",
        ],
      },
    ],
    closing: {
      tagline: "Pure Flow: Water you can trust.",
    },
  },

  ekhodigix: {
    displayTitle: "Ekho Digix Development",
    headline: "Web & Software Development That Scales With You",
    subheadline:
      "Custom websites, apps, and digital products — engineered for performance, security, and growth.",
    intro: [
      "Ekho Digix Development is the technology arm of Echo Futur. We design and build websites, web applications, e-commerce stores, and business tools that help brands look professional and operate efficiently online.",
      "From MVPs for startups to full platforms for established companies, our team handles strategy, UI/UX, development, deployment, and ongoing support — aligned with the quality standards of the Echo Futur group.",
    ],
    blocks: [
      {
        heading: "Development Services",
        bullets: [
          "Business Websites: Fast, mobile-first sites for ventures, clinics, real estate, and retail brands.",
          "Web Applications: Dashboards, booking systems, CRM integrations, and custom internal tools.",
          "E-Commerce & Catalogs: Online stores and product showcases for Compliment, Old School, Trend Setter, and more.",
          "AI-Ready Integrations: Smart forms, chat assistants, and automation hooks where your business needs them.",
          "Maintenance & Support: Hosting guidance, updates, security patches, and feature enhancements.",
        ],
      },
      {
        heading: "Why Ekho Digix Development?",
        quote: "Your digital presence should work as hard as your team does.",
        bullets: [
          "Echo Futur Ecosystem: We understand your brands — Builders, Lubnas Dental, Digix, SkillByte, and the full portfolio.",
          "End-to-End Delivery: Discovery, design, build, launch, and handover with clear timelines.",
          "Modern Stack: Current frameworks and best practices for speed, SEO, and long-term maintainability.",
        ],
      },
      {
        heading: "What We Build For",
        listGroups: [
          {
            title: "Corporate & Ventures",
            items: [
              "Multi-brand websites, landing pages, and service portals for Echo Futur companies.",
            ],
          },
          {
            title: "Real Estate & Services",
            items: [
              "Property listings, inquiry forms, and project galleries for Builders & Realtors.",
            ],
          },
          {
            title: "Training & Marketing",
            items: [
              "Course pages and enrollment flows for SkillByte Advanced AI Digital Marketing programs.",
            ],
          },
        ],
      },
      {
        heading: "Start Your Project",
        paragraphs: [
          "Share your goals and we will propose scope, timeline, and investment. Whether you need a new site or a full product build, Ekho Digix Development is your build partner.",
        ],
      },
    ],
    closing: {
      tagline: "Ekho Digix Development: Build digital. Build future.",
    },
  },

  skillbyte: {
    displayTitle: "SkillByte Advanced AI Digital Marketing",
    headline: "Advanced AI Digital Marketing Course",
    subheadline:
      "Master AI-powered marketing — from strategy and content to ads, SEO, and analytics.",
    intro: [
      "SkillByte Advanced AI Digital Marketing is Echo Futur's flagship training program for marketers, entrepreneurs, and students who want real-world skills — not theory-only classrooms.",
      "Learn how to use AI responsibly to plan campaigns, create content, run ads, optimize SEO, and measure results across the channels that matter today.",
    ],
    blocks: [
      {
        heading: "Course Modules",
        bullets: [
          "AI Marketing Foundations: Tools, ethics, brand voice, and safe workflows for daily use.",
          "Content & Creative: Captions, blogs, ad copy, email sequences, and multilingual campaigns with human review.",
          "Paid Ads & Performance: Meta, Google, and WhatsApp campaign planning with AI-assisted optimization.",
          "SEO & Analytics: Keyword research, on-page SEO, reporting dashboards, and data-driven decisions.",
          "Automation & Assistants: Build internal marketing assistants and repeatable content systems for your brand.",
        ],
      },
      {
        heading: "Who Should Enroll?",
        listGroups: [
          {
            title: "Marketers & Agency Staff",
            items: [
              "Upgrade your stack with advanced AI workflows for clients and in-house brands.",
            ],
          },
          {
            title: "Business Owners",
            items: [
              "Run your own digital marketing with confidence — or lead your team with clear standards.",
            ],
          },
          {
            title: "Students & Career Changers",
            items: [
              "Portfolio-ready projects, certificates, and practical skills employers expect in 2026 and beyond.",
            ],
          },
        ],
      },
      {
        heading: "The SkillByte Advantage",
        quote: "Marketing moves fast. This course keeps you ahead.",
        bullets: [
          "Live, Instructor-Led Sessions: Interactive classes with Q&A and real briefs from Echo Futur brands.",
          "Hands-On Projects: Campaigns and content pieces you can show employers or clients.",
          "Certificate of Completion: Recognized training for your résumé and professional profile.",
          "Alumni Updates: Ongoing tips as AI marketing tools and platforms evolve.",
        ],
      },
      {
        heading: "Enroll in the Next Batch",
        paragraphs: [
          "New batches open regularly across Kerala and online. Contact SkillByte for schedules, corporate team pricing, and Advanced AI Digital Marketing workshop dates.",
        ],
      },
    ],
    closing: {
      tagline: "SkillByte: Advanced AI marketing. Real results.",
    },
  },
};

export function getVentureContent(id: string): VentureContent | undefined {
  return VENTURE_CONTENT[id];
}
