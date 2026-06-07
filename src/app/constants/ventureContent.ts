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

  "builders-solar": {
    displayTitle: "Ekho Builders Solar",
    headline: "Power Your Property with Clean Solar Energy",
    subheadline:
      "Residential and commercial solar solutions — designed, installed, and maintained by Ekho Builders.",
    intro: [
      "Ekho Builders Solar delivers end-to-end solar energy systems for homes, apartments, clinics, offices, and commercial buildings across Kerala. From the first site survey to final commissioning, we help you cut electricity costs, reduce grid dependence, and invest in power that pays back over time.",
      "As part of the Echo Futur Builders group, we combine construction-grade planning with trusted components and professional installation — so your solar system is built to perform for years, not just look good on day one.",
    ],
    blocks: [
      {
        heading: "Solar Solutions We Provide",
        listGroups: [
          {
            title: "Residential",
            items: [
              "Rooftop solar for villas, independent homes, and apartment complexes.",
              "Grid-tied, on-grid, and hybrid systems sized to your daily consumption.",
              "Battery-ready setups for backup during outages where required.",
              "Net metering guidance and documentation support for DISCOM approvals.",
            ],
          },
          {
            title: "Commercial & Institutional",
            items: [
              "High-capacity systems for offices, showrooms, clinics, and warehouses.",
              "Solar for hospitality projects — homestays, restaurants, and wellness centres.",
              "Performance monitoring, cleaning schedules, and annual maintenance contracts.",
              "Integration with new construction projects handled by Echo Futur Builders.",
            ],
          },
        ],
      },
      {
        heading: "Our Installation Process",
        numbered: [
          {
            title: "Site Survey & Load Assessment",
            description:
              "We evaluate roof structure, shading, orientation, and your current electricity usage to recommend the right system capacity.",
          },
          {
            title: "Design & Quotation",
            description:
              "A clear proposal covering panel layout, inverter selection, estimated generation, savings, and timeline — with no hidden costs.",
          },
          {
            title: "Install & Commission",
            description:
              "Certified technicians handle mounting, wiring, safety checks, and grid connection. We test everything before handover.",
          },
          {
            title: "Support & Maintenance",
            description:
              "Post-install monitoring, cleaning, and servicing so your system keeps delivering maximum output season after season.",
          },
        ],
      },
      {
        heading: "Why Choose Ekho Builders Solar?",
        quote: "Clean energy should be reliable, transparent, and built to last.",
        bullets: [
          "Echo Futur Builders integration — solar planned alongside construction and property development.",
          "Quality panels, inverters, and mounting hardware from trusted brands.",
          "Honest sizing — we recommend what you need, not oversized systems you won't use.",
          "Local team across Kerala for surveys, installation, and after-sales support.",
          "Long-term AMC options for cleaning, inspection, and performance checks.",
        ],
      },
      {
        heading: "Ideal For",
        table: [
          {
            category: "Homeowners",
            promise: "Lower monthly bills and long-term savings on a system sized for your family.",
          },
          {
            category: "Developers",
            promise: "Solar-ready rooftops and coordinated installs for new flats and commercial builds.",
          },
          {
            category: "Businesses",
            promise: "Reduce operating costs and show a clear sustainability commitment to customers.",
          },
          {
            category: "Hospitality",
            promise: "Reliable power for homestays and wellness properties with lower running costs.",
          },
        ],
      },
      {
        heading: "Start Your Solar Project",
        paragraphs: [
          "Whether you are retrofitting an existing building or planning solar from the blueprint stage, Ekho Builders Solar is your partner for clean, dependable power.",
          "Contact us for a free site assessment, detailed quotation, and maintenance plan tailored to your property.",
        ],
      },
    ],
    closing: {
      quote: "The sun is free. Your installation shouldn't be a gamble.",
      tagline: "Ekho Builders Solar: Clean energy, built to last.",
    },
  },

  "builders-lift": {
    displayTitle: "Ekho Builders Lift",
    headline: "Reliable Elevator & Lift Solutions",
    subheadline:
      "Installation, modernization, and maintenance for residential, commercial, and hospitality buildings.",
    intro: [
      "Ekho Builders Lift provides passenger lifts, service elevators, and modernization solutions for residential towers, commercial complexes, clinics, and hospitality projects. We combine safety-first engineering with responsive maintenance so every ride is smooth, secure, and dependable.",
      "Backed by Echo Futur Builders, our lift division follows the same standards of quality, transparency, and end-to-end project management that define every structure we build — from foundation to the final floor.",
    ],
    blocks: [
      {
        heading: "Lift Services We Offer",
        listGroups: [
          {
            title: "New Installations",
            items: [
              "Passenger lifts for apartments, villas, and low- to mid-rise commercial buildings.",
              "Service and goods lifts for hospitals, hotels, warehouses, and retail spaces.",
              "Custom cab interiors, capacity planning, and shaft coordination with architects.",
              "Full project management from pit preparation to final safety certification.",
            ],
          },
          {
            title: "Modernization & Upgrades",
            items: [
              "Controller and drive upgrades for older lifts that are slow or unreliable.",
              "Cab refurbishment — panels, lighting, flooring, and handrails.",
              "Safety compliance updates to meet current standards and regulations.",
              "Energy-efficient motor and door system replacements.",
            ],
          },
          {
            title: "Maintenance & Breakdown Support",
            items: [
              "Scheduled preventive maintenance to reduce downtime and extend equipment life.",
              "24/7 emergency breakdown response for stuck passengers and critical failures.",
              "Annual safety inspections and compliance documentation.",
              "Spare parts sourcing and transparent AMC pricing.",
            ],
          },
        ],
      },
      {
        heading: "The Ekho Builders Lift Process",
        numbered: [
          {
            title: "Consult & Assess",
            description:
              "We review building type, traffic flow, shaft dimensions, and budget to recommend the right lift configuration.",
          },
          {
            title: "Design & Specify",
            description:
              "Detailed specs for capacity, speed, stops, cab finish, and safety features — aligned with your architect and builder.",
          },
          {
            title: "Install & Test",
            description:
              "Professional installation, alignment, load testing, and safety checks before the lift goes into service.",
          },
          {
            title: "Maintain & Support",
            description:
              "Ongoing servicing, emergency support, and upgrade options as your building and needs evolve.",
          },
        ],
      },
      {
        heading: "Built on the Echo Futur Standard",
        quote: "A lift is not a luxury — it is a promise of safety on every floor.",
        bullets: [
          "Integrated with Echo Futur construction projects for seamless shaft and pit coordination.",
          "Trusted components and certified installation practices.",
          "Clear quotations with no surprise add-ons after work begins.",
          "Experienced technicians for installation, repair, and modernization.",
          "AMC plans designed for residential associations, commercial owners, and hospitality operators.",
        ],
      },
      {
        heading: "Who We Serve",
        table: [
          {
            category: "Residential",
            promise: "Safe, quiet lifts for apartment blocks and premium villas.",
          },
          {
            category: "Commercial",
            promise: "High-traffic elevators for offices, retail, and business hubs.",
          },
          {
            category: "Healthcare",
            promise: "Reliable vertical transport for clinics and medical facilities.",
          },
          {
            category: "Hospitality",
            promise: "Guest-ready lifts for homestays, hotels, and wellness centres.",
          },
        ],
      },
      {
        heading: "Upgrade or Install With Confidence",
        paragraphs: [
          "Whether you are building new, replacing an ageing lift, or looking for a dependable maintenance partner, Ekho Builders Lift delivers solutions you can trust.",
          "Reach out for a site visit, technical assessment, and quotation — we will recommend the right lift for your building and budget.",
        ],
      },
    ],
    closing: {
      quote: "Every floor should feel safe. Every ride should feel smooth.",
      tagline: "Ekho Builders Lift: Safe rides, every floor.",
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
    headline: "Tourism & Hospitality Experiences That Refresh the Soul",
    subheadline: "Curated travel, stays, and guest experiences across Kerala.",
    intro: [
      "Ekho Rascapes is Echo Futur's tourism and hospitality arm — crafting journeys, stays, and guest experiences that go beyond sightseeing. We design meaningful travel that rejuvenates the mind and body.",
      "From curated itineraries to hospitality partnerships, our team brings Echo Futur's quality standard to every guest touchpoint.",
    ],
    blocks: [
      {
        heading: "What We Offer",
        bullets: [
          "Curated Tourism: Slow, meaningful itineraries focused on refreshment and discovery.",
          "Hospitality Experiences: Guest-ready environments for homestays, retreats, and wellness stays.",
          "Destination Planning: Local partnerships, activity curation, and on-ground coordination.",
          "Brand Hospitality: Support for restaurants, homestays, and tourism ventures within the Echo Futur group.",
        ],
      },
      {
        heading: "The Rascapes Approach",
        numbered: [
          {
            title: "Discover & Plan",
            description:
              "We learn your goals — relaxation, adventure, or cultural immersion — before shaping the experience.",
          },
          {
            title: "Curate & Connect",
            description:
              "Handpicked stays, routes, and local partners aligned with comfort and authenticity.",
          },
          {
            title: "Deliver & Support",
            description:
              "End-to-end coordination so every guest enjoys a seamless, memorable journey.",
          },
        ],
      },
      {
        heading: "Travel That Renews You",
        paragraphs: [
          "Partner with Ekho Rascapes for tourism and hospitality experiences that leave guests energized, inspired, and eager to return.",
        ],
      },
    ],
    closing: {
      tagline: "Ekho Rascapes: Tourism and hospitality, thoughtfully done.",
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
    displayTitle: "Ekho Digix",
    headline: "Development for Modern Business",
    subheadline:
      "Websites, apps, and custom software — scoped, built, and supported by Echo Futur.",
    intro: [
      "Ekho Digix is the development arm of Echo Futur. We build responsive websites, mobile-friendly applications, and internal tools for our group brands and for external clients who need a reliable technical partner.",
      "From landing pages and venture sites to e-commerce and business dashboards, our team handles design, development, testing, and post-launch support.",
    ],
    blocks: [
      {
        heading: "Development Services",
        bullets: [
          "Website Development: Corporate sites, portfolios, and multi-page ventures optimized for speed and SEO.",
          "App Development: Progressive web apps and mobile-ready experiences for customers and staff.",
          "Custom Software: Admin panels, booking flows, and integrations tailored to your workflow.",
          "UI / UX: Layouts and interfaces aligned with your brand across Echo Futur ventures.",
          "Maintenance: Updates, fixes, and feature additions after go-live.",
        ],
      },
      {
        heading: "Why Ekho Digix?",
        quote: "We ship working products — not presentations about products.",
        bullets: [
          "Echo Futur Portfolio: We build and maintain sites for Builders, Compliment, SkillByte, and more.",
          "Clear Process: Discovery, milestones, and demos so you always know progress.",
          "Modern Stack: Fast, secure, maintainable code your team can grow with.",
        ],
      },
      {
        heading: "Ideal For",
        listGroups: [
          {
            title: "New Ventures",
            items: [
              "Launch a professional web presence before your first customer walk-in.",
            ],
          },
          {
            title: "Growing Businesses",
            items: [
              "Redesign outdated sites, add e-commerce, or connect forms and WhatsApp leads.",
            ],
          },
          {
            title: "Echo Futur Partners",
            items: [
              "One development team that already understands the group and your customers.",
            ],
          },
        ],
      },
      {
        heading: "Start Your Project",
        paragraphs: [
          "Share your brief — we will reply with scope, timeline, and investment options for your website or application.",
        ],
      },
    ],
    closing: {
      tagline: "Ekho Digix: Build digital products that work.",
    },
  },

  skillbyte: {
    displayTitle: "Ekho SkillByte Academy",
    headline: "Advanced AI Digital Marketing Course",
    subheadline:
      "Live training in SEO, social media, paid ads, and AI-powered content — for Kerala and beyond.",
    intro: [
      "Ekho SkillByte Academy is Echo Futur's education brand. Our flagship program is the Advanced AI Digital Marketing course — a practical, module-based path for marketers, entrepreneurs, and students who want job-ready skills.",
      "Classes are live and project-based, using real examples from Echo Futur businesses so you learn what works in the market, not only in theory.",
    ],
    blocks: [
      {
        heading: "What You Will Learn",
        bullets: [
          "AI-Assisted Content: Blogs, ads, captions, and emails with efficient workflows and quality control.",
          "Social Media Marketing: Strategy, content calendars, and growth tactics for major platforms.",
          "SEO Fundamentals: Keywords, on-page optimization, and content that ranks.",
          "Paid Advertising: Meta and Google ads setup, budgets, and reading performance data.",
          "Analytics & Reporting: Track results and improve campaigns week by week.",
        ],
      },
      {
        heading: "Who Should Enroll?",
        listGroups: [
          {
            title: "Marketing Professionals",
            items: [
              "Upgrade your skill set with AI and modern digital channels.",
            ],
          },
          {
            title: "Business Owners",
            items: [
              "Run your own campaigns or lead your in-house team with confidence.",
            ],
          },
          {
            title: "Students & Freelancers",
            items: [
              "Build a portfolio and offer digital marketing services after certification.",
            ],
          },
        ],
      },
      {
        heading: "The SkillByte Advantage",
        quote: "Marketing taught by people who market Echo Futur brands every day.",
        bullets: [
          "Live Classes: Ask questions, get feedback, and complete real assignments.",
          "Certificate: Completion recognition for your CV and LinkedIn profile.",
          "Corporate Batches: Custom dates and modules for company teams.",
          "Alumni Support: Stay updated as tools and platforms change.",
        ],
      },
      {
        heading: "Enroll Today",
        paragraphs: [
          "Contact Ekho SkillByte for the next Advanced AI Digital Marketing batch, fees, and corporate training options.",
        ],
      },
    ],
    closing: {
      tagline: "Ekho SkillByte: Market smarter. Grow faster.",
    },
  },
};

export function getVentureContent(id: string): VentureContent | undefined {
  return VENTURE_CONTENT[id];
}
