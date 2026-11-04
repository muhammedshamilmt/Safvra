export interface ServiceDeliverable {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: [string, string, string];
}

export interface ServiceDetailItem {
  id: number;
  slug: string;
  number: string;
  slashNumber: string;
  title: string;
  shortSubtitle: string;
  category: string;
  timeline: string;
  warranty: string;
  deliveryModel: string;
  heroImage: string;
  galleryImages: [string, string, string];
  statementText: string;
  overviewParagraphs: [string, string];
  toolsUsed: [string, string, string, string];
  deliverables: [
    ServiceDeliverable,
    ServiceDeliverable,
    ServiceDeliverable,
    ServiceDeliverable,
  ];
  processSteps: [
    ServiceProcessStep,
    ServiceProcessStep,
    ServiceProcessStep,
    ServiceProcessStep,
  ];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: ServiceDetailItem[] = [
  {
    id: 1,
    slug: "commercial-fit-out",
    number: "01",
    slashNumber: "/01",
    title: "Commercial Fit-Out",
    shortSubtitle: "Explore Our Workspace Specialties",
    category: "CORPORATE & WORKSPACE ARCHITECTURE",
    timeline: "8 – 16 Weeks",
    warranty: "5-Year Structural & MEP",
    deliveryModel: "Turnkey Design & Build",
    heroImage: "/landing/projects/image-1.png",
    galleryImages: [
      "/landing/cards-imgs/image-1.png",
      "/landing/cards-imgs/image-4.png",
      "/landing/projects/image-2.png",
    ],
    statementText:
      "We engineer high-performance commercial workspaces that unite acoustic serenity, architectural clarity, and human-centric productivity.",
    overviewParagraphs: [
      "Modern commercial environments demand more than surface aesthetics—they require seamless integration of spatial ergonomics, acoustic engineering, intelligent lighting, and resilient materiality. Our commercial fit-out division transforms raw shell-and-core floors into flagship headquarters and agile executive suites.",
      "From authority approvals and BIM-coordinated MEP systems to custom reception millwork and demountable acoustic glazing, our in-house team executes every technical package on a guaranteed milestone schedule.",
    ],
    toolsUsed: [
      "Workspace Strategy & BIM Coordination",
      "Acoustic Double-Glazed Partition Systems",
      "Turnkey HVAC, Electrical & Data MEP",
      "Bespoke Executive Millwork & Joinery",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Spatial & Acoustic Planning",
        description:
          "Data-driven workplace zoning, boardroom soundproofing, and circulation flows tailored to hybrid and executive teams.",
      },
      {
        number: "02/",
        title: "MEP & Authority Approvals",
        description:
          "Complete mechanical, electrical, plumbing, fire-life-safety engineering, and municipal compliance sign-offs.",
      },
      {
        number: "03/",
        title: "Architectural Glazing & Joinery",
        description:
          "Flush-profile acoustic glass partitions, custom timber wall cladding, and integrated reception architecture.",
      },
      {
        number: "04/",
        title: "Lighting & AV Integration",
        description:
          "Circadian DALI lighting scenes, concealed boardroom AV matrices, and smart environmental controls.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Weeks 1 – 2",
        title: "Workplace Audit & BIM Engineering",
        description:
          "We conduct laser site scanning, occupancy flow studies, and full 3D BIM clash detection across structural and MEP layers.",
        deliverables: [
          "3D Point-Cloud Site Survey",
          "Spatial Zoning & Test-Fit Layouts",
          "Itemized BOQ & Milestone Schedule",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 3 – 5",
        title: "Material Curation & Authority Sign-Off",
        description:
          "Curating commercial-grade stone, acoustic textiles, and architectural hardware while securing civil defense and landlord approvals.",
        deliverables: [
          "Physical Material Sample Boards",
          "Civil Defense & Municipality Permits",
          "Shop Drawings for Custom Joinery",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Weeks 6 – 13",
        title: "Site Execution & Precision Fit-Out",
        description:
          "Simultaneous on-site MEP rough-ins, acoustic ceiling framing, raised flooring, and off-site factory joinery fabrication.",
        deliverables: [
          "First & Second Fix MEP Installations",
          "Acoustic Glazing & Partition Erection",
          "Bespoke Reception & Pantry Fit-Out",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Weeks 14 – 16",
        title: "Testing, Commissioning & Handover",
        description:
          "Rigorous air-balancing, lux-level calibration, acoustic decibel testing, and white-glove turnkey handover.",
        deliverables: [
          "As-Built BIM Documentation",
          "MEP & Fire System Certificates",
          "5-Year Warranty & Maintenance Pack",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you execute commercial fit-outs in occupied office buildings?",
        answer:
          "Yes. We regularly work within active Grade-A commercial towers using phased night-shift schedules, negative-pressure dust containment, and strict acoustic protocols.",
      },
      {
        question: "Do you handle all municipal and landlord approvals?",
        answer:
          "Our engineering team manages all submissions, drawings, and inspections required by building management, municipal authorities, and fire-life-safety departments.",
      },
    ],
  },
  {
    id: 2,
    slug: "residential-fit-out",
    number: "02",
    slashNumber: "/02",
    title: "Residential Fit-Out",
    shortSubtitle: "Browse Our Bespoke Home Solutions",
    category: "PRIVATE VILLAS & PENTHOUSE INTERIORS",
    timeline: "10 – 18 Weeks",
    warranty: "5-Year Craftsmanship Warranty",
    deliveryModel: "Bespoke Turnkey Execution",
    heroImage: "/landing/cards-imgs/image-2.png",
    galleryImages: [
      "/landing/projects/image-2.png",
      "/landing/projects/image-4.png",
      "/landing/cards-imgs/image-3.png",
    ],
    statementText:
      "We craft serene, gallery-grade residential sanctuaries where natural stone, warm timber, and architectural light live in effortless harmony.",
    overviewParagraphs: [
      "Every private residence is an intimate reflection of how you live. Our residential fit-out practice specializes in full-scale villa transformations, penthouse reconfigurations, and bespoke apartment interiors built with museum-level detailing.",
      "From book-matched marble slabs and shadow-gap plasterwork to concealed home automation and custom dressing rooms, we orchestrate every trade in-house so your home is delivered with quiet perfection.",
    ],
    toolsUsed: [
      "Bespoke Spatial & Architectural Reconfiguration",
      "Book-Matched Natural Stone & Lime Plaster",
      "Custom Millwork, Kitchens & Walk-In Wardrobes",
      "KNX Smart Home & Architectural Lighting",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Architectural Reconfiguration",
        description:
          "Structural wall modifications, open-plan living sequences, and floor-to-ceiling glazing enhancements.",
      },
      {
        number: "02/",
        title: "Natural Stone & Surface Finishes",
        description:
          "Hand-selected travertine, marble, micro-cement, and European oak flooring installed with zero-threshold precision.",
      },
      {
        number: "03/",
        title: "Bespoke Joinery & Sanctuary Suites",
        description:
          "Custom culinary kitchens, spa-inspired stone bathrooms, and illuminated walk-in dressing rooms.",
      },
      {
        number: "04/",
        title: "Invisible Home Automation",
        description:
          "Flush keypad controls, motorized drapery pockets, multi-zone audio, and warm architectural cove lighting.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Weeks 1 – 3",
        title: "Lifestyle Discovery & Spatial Concept",
        description:
          "In-depth architectural briefing, proportion studies, and photorealistic 3D visualizations of every room.",
        deliverables: [
          "Architectural Floor Plans & Elevations",
          "Photorealistic 3D Interior Renders",
          "Curated Stone, Wood & Textile Palette",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 4 – 6",
        title: "Detailed Engineering & Quarry Selection",
        description:
          "Finalizing 1:1 joinery shop drawings, selecting raw stone slabs, and coordinating concealed HVAC slot diffusers.",
        deliverables: [
          "Full Joinery & Stone Shop Drawings",
          "Reflected Ceiling & Lighting Plans",
          "Fixed-Price Turnkey Contract",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Weeks 7 – 15",
        title: "Artisanal Fit-Out & Joinery Installation",
        description:
          "Precision civil works, waterproofing, stone laying, shadow-gap ceiling framing, and bespoke cabinet installation.",
        deliverables: [
          "Zero-Joint Stone & Timber Flooring",
          "Custom Kitchen, Doors & Wardrobes",
          "Smart Lighting & Climate Integration",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Weeks 16 – 18",
        title: "Styling, Snagging & White-Glove Handover",
        description:
          "Multi-point quality inspection, fine surface sealing, architectural lighting scene programming, and key handover.",
        deliverables: [
          "150-Point Quality Assurance Sign-Off",
          "Natural Stone & Timber Care Kit",
          "Dedicated Post-Handover Concierge",
        ],
      },
    ],
    faqs: [
      {
        question: "Can we customize every piece of joinery and stone in our residence?",
        answer:
          "Yes. Every kitchen island, wardrobe interior, vanity basin, and door profile is custom-drawn and fabricated specifically for your residence.",
      },
      {
        question: "How do you keep us updated if we are traveling during the fit-out?",
        answer:
          "Your dedicated Project Director provides weekly high-resolution photo/video walk-throughs and live milestone tracking reports.",
      },
    ],
  },
  {
    id: 3,
    slug: "retail-fit-out",
    number: "03",
    slashNumber: "/03",
    title: "Retail Fit-Out",
    shortSubtitle: "Deep Dive into Our Retail Capabilities",
    category: "FLAGSHIP BOUTIQUES & SHOWROOMS",
    timeline: "6 – 12 Weeks",
    warranty: "3-Year Commercial Warranty",
    deliveryModel: "Fast-Track Turnkey Fit-Out",
    heroImage: "/landing/cards-imgs/image-3.png",
    galleryImages: [
      "/landing/projects/image-4.png",
      "/landing/cards-imgs/image-1.png",
      "/landing/projects/image-1.png",
    ],
    statementText:
      "We translate brand identity into sculptural retail environments thatchoreograph customer discovery and elevate every product interaction.",
    overviewParagraphs: [
      "Flagship retail and hospitality spaces require theatrical precision under tight commercial launch deadlines. We partner with luxury houses, concept boutiques, and design showrooms to build immersive physical spaces.",
      "From monolithic display plinths and high-CRI gallery lighting to mall management compliance and security integration, our retail fit-out teams deliver flawless openings on schedule.",
    ],
    toolsUsed: [
      "Customer Journey & Merchandising Flow",
      "Bespoke Metal, Stone & Glass Display Plinths",
      "High-CRI Museum-Grade Track & Accent Lighting",
      "Mall Management & Fast-Track Night Execution",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Facade & Storefront Architecture",
        description:
          "High-impact structural glazing, custom bronze or stone portals, and precision architectural signage.",
      },
      {
        number: "02/",
        title: "Sculptural Merchandising Fixtures",
        description:
          "Bespoke display tables, illuminated shelving niches, and cash-wrap counters crafted in stone, metal, and wood.",
      },
      {
        number: "03/",
        title: "High-CRI Gallery Lighting",
        description:
          "Pin-spot product illumination (CRI 97+) engineered to render textures, jewelry, and textiles with true color fidelity.",
      },
      {
        number: "04/",
        title: "VIP Lounges & Fitting Suites",
        description:
          "Acoustically private clienteling rooms with custom drapery, flattering mirror lighting, and bespoke seating.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Weeks 1 – 2",
        title: "Brand Translation & Mall Compliance",
        description:
          "Aligning global brand guidelines with local mall criteria, MEP tie-ins, and structural storefront engineering.",
        deliverables: [
          "Mall RDD Submission Package",
          "3D Storefront & Fixture Engineering",
          "Fast-Track Procurement Schedule",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 3 – 5",
        title: "Off-Site Display & Joinery Prototyping",
        description:
          "While site civil works begin, our joinery workshop fabricates and pre-assembles all display fixtures for zero-defect installation.",
        deliverables: [
          "1:1 Fixture & Finish Mockups",
          "Custom Metalwork & Stone Plinths",
          "Integrated LED Display Wiring",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Weeks 6 – 10",
        title: "Site Fit-Out & Facade Glazing",
        description:
          "24/7 coordinated site execution covering flooring, acoustic ceilings, storefront glazing, and fixture installation.",
        deliverables: [
          "Structural Storefront Glazing",
          "Seamless Terrazzo / Stone Flooring",
          "Bespoke Display & Fitting Room Install",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Weeks 11 – 12",
        title: "Lighting Focus & Launch Handover",
        description:
          "Precision aiming of every spotlight, security/POS testing, and spotless handover ahead of visual merchandising.",
        deliverables: [
          "Scene-Calibrated Lighting Focus",
          "Mall Final Inspection Clearance",
          "Launch-Ready Store Handover",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you coordinate directly with mall Retail Design & Delivery (RDD) teams?",
        answer:
          "Yes. We have extensive experience working with premier shopping destinations and handle all RDD submissions, hoarding permits, and night-work logistics.",
      },
      {
        question: "Can you fabricate custom display fixtures from international brand architects?",
        answer:
          "Absolutely. We regularly localize and value-engineer global architectural concept packs while preserving 100% design fidelity.",
      },
    ],
  },
  {
    id: 4,
    slug: "design-build-turnkey",
    number: "04",
    slashNumber: "/04",
    title: "Design & Build (Turnkey)",
    shortSubtitle: "Explore Our Comprehensive Project Phases",
    category: "SINGLE-SOURCE ARCHITECTURE & EXECUTION",
    timeline: "12 – 24 Weeks",
    warranty: "5-Year Comprehensive Warranty",
    deliveryModel: "Single-Point Turnkey Responsibility",
    heroImage: "/landing/projects/image-2.png",
    galleryImages: [
      "/landing/projects/image-1.png",
      "/landing/cards-imgs/image-4.png",
      "/landing/projects/image-3.png",
    ],
    statementText:
      "One unified studio from first sketch to final key handover—eliminating friction between architectural vision and on-site construction.",
    overviewParagraphs: [
      "Traditional projects suffer when architects and contractors work in silos. Our Design & Build (Turnkey) model unites interior architects, structural engineers, quantity surveyors, and master craftsmen under one roof.",
      "Because our build team is involved from concept stage, every spatial detail is engineered for buildability and budget certainty—compressing delivery timelines by up to 30% while safeguarding design purity.",
    ],
    toolsUsed: [
      "Integrated Architectural Design & 3D Visualization",
      "Fixed-Price Bill of Quantities & Value Engineering",
      "In-House MEP, Civil & Custom Joinery Divisions",
      "FF&E Global Procurement & White-Glove Styling",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Concept & 3D Architecture",
        description:
          "Complete spatial masterplanning, material direction, and cinema-grade 3D renders.",
      },
      {
        number: "02/",
        title: "Technical & MEP Engineering",
        description:
          "Full construction drawings, structural calculations, HVAC/electrical schematics, and permit management.",
      },
      {
        number: "03/",
        title: "Turnkey Construction & Joinery",
        description:
          "End-to-end civil works, stone masonry, wood flooring, gypsum ceilings, and bespoke millwork.",
      },
      {
        number: "04/",
        title: "FF&E Curation & Final Styling",
        description:
          "Sourcing, customs clearance, and placement of loose furniture, sculptural lighting, drapery, and art.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Weeks 1 – 4",
        title: "Architectural Vision & Feasibility",
        description:
          "Establishing spatial flow, aesthetic direction, and a transparent target budget from day one.",
        deliverables: [
          "Master Spatial Layout",
          "3D Architectural Concept Pack",
          "Preliminary Cost Plan",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 5 – 8",
        title: "Detailed Design & Fixed BOQ",
        description:
          "Producing full IFC construction drawings and locking in a guaranteed fixed-price turnkey contract.",
        deliverables: [
          "Issued-for-Construction (IFC) Drawings",
          "Signed Material & Finish Sample Box",
          "Guaranteed Fixed-Price BOQ",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Weeks 9 – 20",
        title: "Parallel Fabrication & Site Build",
        description:
          "While site civil and MEP works progress, joinery and stone packages are fabricated in parallel to save weeks.",
        deliverables: [
          "Full Civil, MEP & Ceiling Execution",
          "Custom Joinery & Stone Installation",
          "Weekly Digital Progress Dashboards",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Weeks 21 – 24",
        title: "FF&E Installation & Turnkey Handover",
        description:
          "Furniture placement, artwork hanging, system commissioning, and final handover ready for immediate occupancy.",
        deliverables: [
          "Complete FF&E & Drapery Dressing",
          "Final Commissioning Certificates",
          "5-Year Turnkey Warranty",
        ],
      },
    ],
    faqs: [
      {
        question: "How does Design & Build save time compared to hiring separate firms?",
        answer:
          "By overlapping detailed engineering, authority approvals, and long-lead material procurement with early site preparation, we eliminate tender delays and contractor disputes.",
      },
      {
        question: "Is the contract price fixed before construction starts?",
        answer:
          "Yes. Once the design and material specifications are approved in Phase 02, we lock in a fixed-price turnkey agreement.",
      },
    ],
  },
  {
    id: 5,
    slug: "kitchen-installation",
    number: "05",
    slashNumber: "/05",
    title: "Kitchen Installation",
    shortSubtitle: "Bespoke Culinary Architecture & Cabinetry",
    category: "CUSTOM CULINARY SYSTEMS & STONE ISLANDS",
    timeline: "4 – 8 Weeks",
    warranty: "5-Year Cabinetry & Hardware Warranty",
    deliveryModel: "Custom Fabrication & Precision Fit-Out",
    heroImage: "/landing/projects/image-4.png",
    galleryImages: [
      "/landing/cards-imgs/image-2.png",
      "/landing/cards-imgs/image-1.png",
      "/landing/projects/image-1.png",
    ],
    statementText:
      "Sculptural culinary spaces engineered with monolithic stone islands, concealed pocket doors, and millimeter-accurate German hardware.",
    overviewParagraphs: [
      "The kitchen is the architectural anchor of the modern home. We design, fabricate, and install bespoke show kitchens and heavy-duty chef prep kitchens that merge minimalist monolithic geometry with effortless daily ergonomics.",
      "Every carcass, drawer organizer, mitered stone waterfall edge, and integrated appliance housing is laser-measured and installed by our specialist culinary joinery team.",
    ],
    toolsUsed: [
      "Mitered Sintered Stone & Natural Marble Islands",
      "Blum / Grass Soft-Close & Servo-Drive Hardware",
      "Concealed Pocket-Door Breakfast & Bar Stations",
      "Flush Gaggenau, Miele & Sub-Zero Integration",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Ergonomic Culinary Planning",
        description:
          "Workflow triangulation between prep islands, cooking zones, concealed pantries, and social dining areas.",
      },
      {
        number: "02/",
        title: "Monolithic Stone Countertops",
        description:
          "45-degree mitered waterfall islands and full-height backsplashes in quartzite, marble, or sintered porcelain.",
      },
      {
        number: "03/",
        title: "Moisture-Resistant Custom Millwork",
        description:
          "Marine-grade carcasses, smoked oak veneers, matte anti-fingerprint lacquers, and fluted glass vitrines.",
      },
      {
        number: "04/",
        title: "Appliance & MEP Commissioning",
        description:
          "Exact ventilation ducting, under-counter task lighting, boiling-water tap systems, and flush appliance alignment.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Week 1",
        title: "Laser Site Survey & Appliance Spec",
        description:
          "3D laser measurement of walls and MEP points alongside exact technical specs for every built-in appliance.",
        deliverables: [
          "Millimeter-Accurate Kitchen Layout",
          "MEP & Extraction Point Drawings",
          "Appliance Integration Matrix",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 2 – 5",
        title: "CNC Fabrication & Stone Waterjet Cutting",
        description:
          "Precision CNC cabinetry machining, multi-coat lacquer curing, and waterjet cutting of stone countertops.",
        deliverables: [
          "Factory Pre-Assembled Cabinetry",
          "Mitered Stone Countertop Slabs",
          "Custom Cutlery & Pantry Inserts",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Weeks 6 – 7",
        title: "On-Site Cabinetry & Stone Installation",
        description:
          "Laser-leveled base and tall unit installation, seamless stone bonding, and concealed LED channel wiring.",
        deliverables: [
          "2mm Reveal Alignment Across Doors",
          "Seamless Stone Island & Backsplash",
          "Integrated Sensor Task Lighting",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Week 8",
        title: "Appliance Calibration & Handover",
        description:
          "Hinge tension tuning, stone nano-sealing, and full operational testing of all appliances and plumbing.",
        deliverables: [
          "Nano-Sealed Countertop Protection",
          "Calibrated Soft-Close Hardware",
          "5-Year Kitchen Warranty Certificate",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you integrate our existing or newly purchased luxury appliances?",
        answer:
          "Yes. Simply share the model numbers and our engineers build the exact ventilation clearances and flush custom panels required.",
      },
      {
        question: "What countertop materials do you recommend for heavy culinary use?",
        answer:
          "For show kitchens we offer natural marble and quartzite with nano-sealer; for heavy-use chef kitchens we recommend heat- and stain-proof sintered stone (Dekton/Laminam).",
      },
    ],
  },
  {
    id: 6,
    slug: "wood-flooring",
    number: "06",
    slashNumber: "/06",
    title: "Wood Flooring",
    shortSubtitle: "Precision Timber & Parquet Craftsmanship",
    category: "ENGINEERED OAK, CHEVRON & HERRINGBONE",
    timeline: "2 – 5 Weeks",
    warranty: "10-Year Structural Timber Warranty",
    deliveryModel: "Subfloor Prep & Master Parquet Lay",
    heroImage: "/landing/cards-imgs/image-1.png",
    galleryImages: [
      "/landing/projects/image-1.png",
      "/landing/cards-imgs/image-2.png",
      "/landing/projects/image-4.png",
    ],
    statementText:
      "Warm, architectural timber floors laid with zero-threshold transitions, acoustic subfloor engineering, and timeless European parquet geometry.",
    overviewParagraphs: [
      "A great timber floor grounds the entire atmosphere of an interior. We supply and install wide-plank engineered European oak, French chevron, classic herringbone, and bespoke Versailles panels engineered specifically for climate stability.",
      "From self-leveling screed and moisture barriers to flush stone-to-wood transitions and shadow-gap skirtings, our master parquetry installers deliver whisper-quiet, creak-free floors.",
    ],
    toolsUsed: [
      "Wide-Plank Engineered European Oak",
      "French 45° Chevron & Classic Herringbone",
      "Self-Leveling Subfloor & Acoustic Membranes",
      "Zero-Threshold Stone & Shadow-Gap Transitions",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Subfloor Moisture & Leveling",
        description:
          "Hygrometer moisture testing, epoxy vapor barriers, and laser-leveled self-smoothing compounds.",
      },
      {
        number: "02/",
        title: "Acoustic Underlayment",
        description:
          "High-density cork-rubber acoustic membranes that eliminate hollow footstep sound and enhance underfoot comfort.",
      },
      {
        number: "03/",
        title: "Precision Parquet & Plank Laying",
        description:
          "Full-spread彈性 adhesive bonding for wide planks, herringbone, and chevron patterns aligned to room axes.",
      },
      {
        number: "04/",
        title: "Flush Transitions & Matte Oiling",
        description:
          "Cork expansion micro-joints against marble thresholds, recessed skirting profiles, and natural UV-matte oil finishes.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Days 1 – 4",
        title: "Subfloor Audit & Timber Acclimatization",
        description:
          "Measuring slab moisture content (CM method) and acclimatizing timber packs in the climate-controlled site.",
        deliverables: [
          "Subfloor Moisture & Flatness Report",
          "Pattern Set-Out & Axis Drawings",
          "On-Site Timber Acclimatization",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Days 5 – 9",
        title: "Vapor Barrier & Laser Screed Leveling",
        description:
          "Applying primer, moisture barriers, and self-leveling compound to achieve a <2mm tolerance over 2 meters.",
        deliverables: [
          "Epoxy Moisture Barrier Coating",
          "Laser-Leveled Subfloor Surface",
          "Acoustic Membrane Installation",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Days 10 – 20",
        title: "Master Parquet & Wide-Plank Installation",
        description:
          "Precision laying of planks or chevron patterns with zero-step transitions into adjoining stone or tile rooms.",
        deliverables: [
          "Full-Bond Timber Installation",
          "Flush Marble-to-Wood Transitions",
          "Custom Stair Nose & Riser Cladding",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Days 21 – 25",
        title: "Buffing, Protective Oiling & Handover",
        description:
          "Fine finish buffing, natural hardwax oil protection, skirting detailing, and breathable floor protection.",
        deliverables: [
          "UV Hardwax Oil Protective Coat",
          "Flush Skirting & Door Undercuts",
          "10-Year Timber Care Guide",
        ],
      },
    ],
    faqs: [
      {
        question: "Is engineered wood flooring suitable for air-conditioned climates?",
        answer:
          "Yes. Our multi-layer cross-laminated birch core with a thick 4mm–6mm European oak wear layer is specifically engineered to resist humidity and temperature fluctuations without cupping.",
      },
      {
        question: "Can you achieve a completely flush transition between wood and marble tiles?",
        answer:
          "Yes. We calculate exact subfloor build-up heights so the wood meets stone with a 2mm color-matched flexible seal and no raised metal strips.",
      },
    ],
  },
  {
    id: 7,
    slug: "door-installation",
    number: "07",
    slashNumber: "/07",
    title: "Door Installation",
    shortSubtitle: "Architectural Flush & Pivot Door Systems",
    category: "FULL-HEIGHT, CONCEALED FRAME & ACOUSTIC DOORS",
    timeline: "3 – 6 Weeks",
    warranty: "5-Year Structural & Hardware Warranty",
    deliveryModel: "Custom Fabrication & Laser Alignment",
    heroImage: "/landing/cards-imgs/image-4.png",
    galleryImages: [
      "/landing/projects/image-3.png",
      "/landing/cards-imgs/image-3.png",
      "/landing/projects/image-2.png",
    ],
    statementText:
      "Full-height architectural portals with concealed aluminum frames, whisper-quiet magnetic latches, and solid-core acoustic serenity.",
    overviewParagraphs: [
      "Doors define the tactile rhythm of moving through architecture. We engineer and install floor-to-ceiling filomuro (flush-to-wall) doors, monumental pivot entrances, and fluted-glass sliding partitions.",
      "With extruded concealed aluminum subframes plastered directly into the wall, our doors sit 100% flush with surrounding surfaces—finished in matching wall texture, natural veneer, or architectural bronze.",
    ],
    toolsUsed: [
      "Concealed Filomuro Extruded Aluminum Frames",
      "3D Adjustable Simonswerk Concealed Hinges",
      "FritsJurgens Monumental Pivot Systems",
      "Solid-Core 42dB Acoustic & Fire-Rated Leaves",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Concealed Flush-to-Wall Frames",
        description:
          "Architrave-free aluminum subframes that integrate seamlessly into masonry or gypsum partitions.",
      },
      {
        number: "02/",
        title: "Full-Height Architectural Leaves",
        description:
          "Custom door leaves up to 3.2 meters high with internal steel tension rods to prevent warping.",
      },
      {
        number: "03/",
        title: "Acoustic & Drop-Seal Engineering",
        description:
          "Solid acoustic cores paired with automatic bottom drop-seals and perimeter gaskets for bedroom privacy.",
      },
      {
        number: "04/",
        title: "Magnetic Locks & Designer Hardware",
        description:
          "Silent magnetic latches, concealed 3-axis hinges, and minimal architectural lever handles.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Week 1",
        title: "Aperture Survey & Swing Schedule",
        description:
          "Laser verification of every structural opening, finished floor level (FFL), and wall thickness.",
        deliverables: [
          "Complete Door Schedule & Handing Plan",
          "Subframe & Wall Thickness Details",
          "Hardware & Finish Specification",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 2 – 4",
        title: "Subframe First-Fix & Leaf Fabrication",
        description:
          "Installing concealed aluminum frames during wall plastering while door leaves are CNC-machined in our factory.",
        deliverables: [
          "Laser-Plumbed Concealed Subframes",
          "Anti-Warp Steel-Core Door Leaves",
          "Factory-Mortised Lock & Hinge Pockets",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Week 5",
        title: "Leaf Hanging & 3-Axis Calibration",
        description:
          "Mounting leaves onto 3D concealed hinges and calibrating uniform 2.5mm shadow reveals around all edges.",
        deliverables: [
          "Precision 3D Hinge Alignment",
          "Automatic Acoustic Drop-Seal Tuning",
          "Magnetic Latch & Handle Fitment",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Week 6",
        title: "Acoustic Testing & Final Handover",
        description:
          "Testing closing smoothness, acoustic seal compression, and delivering warranty documentation.",
        deliverables: [
          "Cycle & Latch Smoothness Sign-Off",
          "Finish & Veneer Protection Check",
          "5-Year Door System Warranty",
        ],
      },
    ],
    faqs: [
      {
        question: "When should concealed flush door frames be installed during a renovation?",
        answer:
          "Concealed filomuro frames are installed during the first-fix partition/plastering stage so plasterers can skim flush up to the aluminum profile.",
      },
      {
        question: "How do you prevent tall floor-to-ceiling doors from warping over time?",
        answer:
          "All doors over 2.4m height include internal adjustable steel straightening rods and moisture-balanced engineered stiles.",
      },
    ],
  },
  {
    id: 8,
    slug: "wardrobe-installation",
    number: "08",
    slashNumber: "/08",
    title: "Wardrobe Installation",
    shortSubtitle: "Custom Walk-In Closets & Dressing Rooms",
    category: "BOUTIQUE DRESSING SUITES & BESPOKE STORAGE",
    timeline: "3 – 6 Weeks",
    warranty: "5-Year Joinery & LED Warranty",
    deliveryModel: "Bespoke Millwork & On-Site Fit-Out",
    heroImage: "/landing/projects/image-3.png",
    galleryImages: [
      "/landing/cards-imgs/image-2.png",
      "/landing/projects/image-4.png",
      "/landing/cards-imgs/image-4.png",
    ],
    statementText:
      "Boutique walk-in dressing rooms and floor-to-ceiling wardrobes crafted with smoked glass, saddle leather, and warm sensor illumination.",
    overviewParagraphs: [
      "A finely tailored wardrobe brings calm order to daily rituals. We design and build walk-in dressing rooms, glass-front display closets, and flush architectural wall wardrobes tailored to your exact garment and accessory collection.",
      "Combining slim anodized bronze frames, tinted fluted glass, velvet-lined watch drawers, and warm 2700K integrated LED lighting, every module is crafted like fine furniture.",
    ],
    toolsUsed: [
      "Slim Anodized Bronze & Smoked Glass Doors",
      "Saddle Leather & Alcantara Drawer Organizers",
      "Integrated 2700K Motion-Sensor LED Profiles",
      "Soft-Close Concealed Runners & Island Vitrines",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Garment-Specific Internal Zoning",
        description:
          "Custom compartment heights for long gowns, tailored suits, handbag shelving, and illuminated shoe galleries.",
      },
      {
        number: "02/",
        title: "Glass & Timber Facade Systems",
        description:
          "Hinged, coplanar sliding, or open walk-in systems in smoked glass, fluted glass, or book-matched wood veneer.",
      },
      {
        number: "03/",
        title: "Jewelry & Watch Accessory Islands",
        description:
          "Center dressing islands with glass-top vitrine drawers, bespoke suede dividers, and concealed safes.",
      },
      {
        number: "04/",
        title: "Warm Museum-Grade LED Integration",
        description:
          "Glare-free vertical and shelf-recessed LED strips triggered automatically by door proximity sensors.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Week 1",
        title: "Inventory Mapping & 3D Elevation Design",
        description:
          "Cataloging storage needs and designing internal elevations down to every drawer divider and hanging rail.",
        deliverables: [
          "Internal Elevation & Section Drawings",
          "3D Dressing Room Visualization",
          "Veneer, Leather & Metal Finish Samples",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 2 – 4",
        title: "Precision CNC Joinery & Glass Tempering",
        description:
          "Machining carcasses, routing concealed LED channels, and tempering custom bronze-framed glass doors.",
        deliverables: [
          "Pre-Wired LED Shelving & Gables",
          "Custom Leather & Suede Drawer Trays",
          "Tempered Smoked / Fluted Glass Doors",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Week 5",
        title: "Clean-Room Site Assembly & Scribing",
        description:
          "Fitting wardrobes with shadow-gap or flush scribed ceiling fillers so they read as built-in architecture.",
        deliverables: [
          "Floor-to-Ceiling Scribed Fitment",
          "Transformer & Sensor Wiring",
          "Soft-Close Hinge & Runner Calibration",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Week 6",
        title: "Detailing & White-Glove Handover",
        description:
          "Glass polishing, sensor timing check, and final inspection of all drawers, locks, and lighting.",
        deliverables: [
          "Full Illumination & Sensor Check",
          "Velvet & Leather Care Kit",
          "5-Year Joinery Warranty",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you build wardrobes into angled ceilings or irregular alcoves?",
        answer:
          "Yes. Because every module is custom-fabricated from laser site scans, we scribe seamlessly around beams, columns, and sloped ceilings.",
      },
      {
        question: "Are the LED lights replaceable in the future?",
        answer:
          "Yes. All LED strips are housed in accessible aluminum diffuser profiles with serviceable drivers.",
      },
    ],
  },
  {
    id: 9,
    slug: "vanity-installation",
    number: "09",
    slashNumber: "/09",
    title: "Vanity Installation",
    shortSubtitle: "Sculptural Stone Basins & Spa Vanities",
    category: "MONOLITHIC MARBLE BASINS & BATHROOM ARCHITECTURE",
    timeline: "2 – 4 Weeks",
    warranty: "5-Year Waterproof & Stone Warranty",
    deliveryModel: "Custom Stone & Marine Joinery Fit-Out",
    heroImage: "/landing/cards-imgs/image-2.png",
    galleryImages: [
      "/landing/cards-imgs/image-4.png",
      "/landing/projects/image-2.png",
      "/landing/cards-imgs/image-1.png",
    ],
    statementText:
      "Floating monolithic stone basins, moisture-proof fluted joinery, and halo-lit mirror cabinetry crafted for serene spa rituals.",
    overviewParagraphs: [
      "Bathroom vanities require an exacting marriage of sculptural beauty and wet-zone durability. We craft floating stone trough basins with concealed slot drainage, marine-grade timber cabinetry, and recessed medicine cabinets.",
      "Every vanity is structural-bracketed into the wall for a weightless floating silhouette and paired with custom PVD brass or matte black wall-mounted tapware.",
    ],
    toolsUsed: [
      "Mitered Monolithic Marble & Travertine Basins",
      "Concealed Slot-Drain & Siphon Drawer Cutouts",
      "100% Waterproof Marine-Ply & PVD Metalwork",
      "Anti-Fog Backlit Architectural Mirrors",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Monolithic Stone Trough Basins",
        description:
          "Custom-carved or mitered natural stone basins with removable stone drain covers and seamless integrated decks.",
      },
      {
        number: "02/",
        title: "Floating Marine-Grade Cabinetry",
        description:
          "Cantilevered steel brackets supporting waterproof fluted oak, walnut, or matte polyurethane drawer units.",
      },
      {
        number: "03/",
        title: "Recessed Mirror & Grooming Storage",
        description:
          "Heated anti-fog mirrors with CRI 95+ facial lighting and internal shaver/charging sockets.",
      },
      {
        number: "04/",
        title: "Concealed Plumbing & Tapware Alignment",
        description:
          "Exact coordination of in-wall mixer bodies, bottle traps, and low-profile siphon-saving drawers.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Week 1",
        title: "Plumbing Set-Out & Stone Slab Selection",
        description:
          "Verifying wall reinforcement, concealed mixer heights, and selecting the exact vein pattern of your stone slab.",
        deliverables: [
          "Structural Bracket & Plumbing Drawing",
          "Vein-Matched Stone Layout",
          "Mirror & Lighting Elevation",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 2 – 3",
        title: "Stone Basin Carving & Marine Joinery",
        description:
          "Waterjet cutting, hand-honing mitered basin edges, and fabricating waterproof drawer units.",
        deliverables: [
          "Hydro-Tested Mitered Stone Basin",
          "Marine-Sealed Joinery Carcass",
          "Custom Anti-Fog Mirror Assembly",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Week 4",
        title: "Cantilever Mounting & Plumbing Hookup",
        description:
          "Anchoring structural steel brackets, mounting the vanity and basin, and sealing all wet joints with neutral-cure silicone.",
        deliverables: [
          "Cantilevered Floating Installation",
          "Leak-Tested Waste & Mixer Connection",
          "Nano-Hydrophobic Stone Sealing",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Final Day",
        title: "Water Flow & Lighting Commissioning",
        description:
          "Testing drainage slope, mirror demister pads, and drawer soft-close clearance around plumbing.",
        deliverables: [
          "24-Hour Drainage & Seal Verification",
          "Stone Maintenance & PH-Neutral Care Kit",
          "5-Year Wet-Zone Warranty",
        ],
      },
    ],
    faqs: [
      {
        question: "How are heavy marble vanities supported on the wall without legs?",
        answer:
          "We install heavy-duty galvanized steel cantilever brackets bolted directly into structural masonry or reinforced steel wall studs prior to tiling.",
      },
      {
        question: "Does natural marble stain from bathroom cosmetics?",
        answer:
          "We treat all natural stone basins with penetrative fluoropolymer nano-sealers that repel water, oils, and soaps while keeping the natural honed feel.",
      },
    ],
  },
  {
    id: 10,
    slug: "gypsum-ceiling",
    number: "10",
    slashNumber: "/10",
    title: "Gypsum Ceiling",
    shortSubtitle: "Shadow-Gap Ceilings & Architectural Lighting Coves",
    category: "ACOUSTIC COFFERS, LINEAR DIFFUSERS & COVE LIGHTING",
    timeline: "2 – 5 Weeks",
    warranty: "5-Year Crack-Free Structural Warranty",
    deliveryModel: "Laser-Framed Gypsum & Lighting Integration",
    heroImage: "/landing/projects/image-1.png",
    galleryImages: [
      "/landing/projects/image-4.png",
      "/landing/cards-imgs/image-3.png",
      "/landing/projects/image-2.png",
    ],
    statementText:
      "Crisp architectural ceiling planes with perimeter shadow-gaps, flangeless magnetic track channels, and invisible linear AC diffusers.",
    overviewParagraphs: [
      "The fifth wall of any room dictates its sense of volume and light. Our gypsum ceiling specialists engineer clean, uncluttered overhead planes where air conditioning, drapery pockets, and lighting tracks disappear into architectural geometry.",
      "Using heavy-gauge galvanized framing, double-layer acoustic boarding, and fiberglass mesh jointing, our ceilings remain razor-straight and crack-free for decades.",
    ],
    toolsUsed: [
      "Perimeter 20mm Architectural Shadow-Gap Profiles",
      "Flangeless Trimless Magnetic Track & Downlight Channels",
      "Frameless Linear Slot HVAC Diffusers & Access Hatches",
      "Double-Layer Acoustic & Moisture-Resistant Gypsum",
    ],
    deliverables: [
      {
        number: "01/",
        title: "Shadow-Gap & Curtain Pocket Detailing",
        description:
          "Crisp aluminum shadow-gap trims around room perimeters and deep recessed pockets for motorized drapery.",
      },
      {
        number: "02/",
        title: "Trimless Lighting & Cove Architecture",
        description:
          "Plaster-in magnetic track systems, knife-edge indirect LED coves, and glare-free trimless pin-spots.",
      },
      {
        number: "03/",
        title: "Frameless Linear AC Integration",
        description:
          "Coordinating continuous 1-slot or 2-slot mud-in linear diffusers and concealed magnetic maintenance hatches.",
      },
      {
        number: "04/",
        title: "Acoustic & Crack-Resistant Framing",
        description:
          "Anti-vibration hanger rods, rockwool acoustic insulation, and multi-stage Q4 level skimming.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Week 1",
        title: "Reflected Ceiling Plan (RCP) Coordination",
        description:
          "Aligning lighting fixtures, AC diffusers, speakers, and sprinklers along clean geometric axes.",
        deliverables: [
          "Coordinated RCP & Section Details",
          "Laser Ceiling Height Benchmarks",
          "HVAC Plenum & Access Hatch Plan",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Weeks 2 – 3",
        title: "Laser Steel Framing & MEP First-Fix",
        description:
          "Erecting heavy-gauge channels, acoustic rockwool batts, linear AC plenums, and recessed track housings.",
        deliverables: [
          "Laser-Leveled Suspension Grid",
          "Installed Trimless Track & Diffuser Profiles",
          "Acoustic Rockwool Insulation Layer",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Week 4",
        title: "Boarding, Shadow-Gaps & Q4 Skimming",
        description:
          "Fixing staggered gypsum boards, aluminum shadow-gap beads, paper-tape joints, and full-surface Q4 skim coating.",
        deliverables: [
          "Crack-Free Staggered Board Joints",
          "Razor-Sharp Knife-Edge Light Coves",
          "Q4 Raking-Light Inspected Finish",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Week 5",
        title: "Acoustic Priming & Lighting Fit-Off",
        description:
          "Ultra-matte architectural painting and snapping in magnetic spotlights and LED cove diffusers.",
        deliverables: [
          "Ultra-Matte Zero-Glare Ceiling Paint",
          "Commissioned Cove & Track Lighting",
          "5-Year Crack-Free Warranty",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you prevent hairline cracks at gypsum ceiling joints?",
        answer:
          "We use L-shaped single-board cutouts around corners (never joining at corners), expansion control joints on long spans, and multi-layer fiberglass tape with flexible polymer compounds.",
      },
      {
        question: "Can AC maintenance still be performed with a seamless gypsum ceiling?",
        answer:
          "Yes. We install plaster-in concealed access hatches with hidden push-latches that blend invisibly into the ceiling plane.",
      },
    ],
  },
  {
    id: 11,
    slug: "general-maintenance",
    number: "11",
    slashNumber: "/11",
    title: "General Maintenance",
    shortSubtitle: "Complete Facility Care & Property Upkeep",
    category: "PREVENTIVE MEP, JOINERY & SURFACE PRESERVATION",
    timeline: "On-Demand & Annual Contracts",
    warranty: "100% Service Guarantee",
    deliveryModel: "Dedicated Rapid-Response & Scheduled Care",
    heroImage: "/landing/projects/image-4.png",
    galleryImages: [
      "/landing/cards-imgs/image-1.png",
      "/landing/projects/image-2.png",
      "/landing/cards-imgs/image-2.png",
    ],
    statementText:
      "Preserving the architectural integrity, mechanical performance, and fine finishes of your residential or commercial property year-round.",
    overviewParagraphs: [
      "Fine interiors deserve proactive stewardship. Our General Maintenance division provides both scheduled preventive facility care and rapid-response technical support for luxury residences, offices, and retail spaces.",
      "From HVAC coil sanitization and electrical load balancing to natural stone repolishing, timber floor re-oiling, and joinery hardware calibration, our uniformed technicians keep every system running silently and flawlessly.",
    ],
    toolsUsed: [
      "Preventive HVAC, Electrical & Plumbing Servicing",
      "Natural Marble Crystallization & Timber Re-Oiling",
      "Joinery Hinge, Door & Smart-Lock Calibration",
      "Acoustic Gypsum Touch-Ups & Architectural Repainting",
    ],
    deliverables: [
      {
        number: "01/",
        title: "MEP & HVAC Preventive Care",
        description:
          "Quarterly AC filter/duct sanitization, thermostat calibration, electrical thermal imaging, and plumbing pressure checks.",
      },
      {
        number: "02/",
        title: "Stone & Timber Surface Restoration",
        description:
          "Diamond honing and nano-sealing of marble surfaces plus deep cleaning and hardwax re-oiling of wood floors.",
      },
      {
        number: "03/",
        title: "Joinery & Architectural Hardware Tuning",
        description:
          "Re-aligning concealed door hinges, kitchen soft-close runners, sliding wardrobe tracks, and silicone wet seals.",
      },
      {
        number: "04/",
        title: "24/7 Priority Rapid Response",
        description:
          "Direct hotline access to our multi-trade engineering team for urgent electrical, AC, or water-leak interventions.",
      },
    ],
    processSteps: [
      {
        step: "/01",
        phase: "PHASE 01",
        duration: "Initial Visit",
        title: "Comprehensive Property Health Audit",
        description:
          "A 120-point inspection covering MEP systems, AC performance, wet-area seals, joinery alignment, and surface finishes.",
        deliverables: [
          "120-Point Digital Condition Report",
          "Thermal & Moisture Diagnostic Scan",
          "Tailored Annual Maintenance Schedule",
        ],
      },
      {
        step: "/02",
        phase: "PHASE 02",
        duration: "Quarterly",
        title: "Scheduled MEP & Climate Servicing",
        description:
          "Proactive servicing of FCU/HVAC units, drainage traps, water heaters, and electrical distribution boards.",
        deliverables: [
          "Sanitized HVAC Coils & Linear Diffusers",
          "Electrical Load & RCD Safety Check",
          "Plumbing Valve & Seal Replacement",
        ],
      },
      {
        step: "/03",
        phase: "PHASE 03",
        duration: "Bi-Annually",
        title: "Fine Finish & Joinery Preservation",
        description:
          "Refreshing wall paint touch-ups, adjusting cabinet/door hardware, and resealing stone and wood surfaces.",
        deliverables: [
          "Calibrated Doors, Drawers & Locks",
          "Re-Sealed Marble & Oiled Wood Floors",
          "Fresh Sanitary Silicone Seals",
        ],
      },
      {
        step: "/04",
        phase: "PHASE 04",
        duration: "Year-Round",
        title: "Dedicated Concierge & Digital Logbook",
        description:
          "Every visit is documented in your property's digital maintenance logbook to protect long-term asset value.",
        deliverables: [
          "Digital Service History Logbook",
          "Priority Emergency Call-Out SLA",
          "Annual Asset Preservation Review",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you offer annual maintenance contracts (AMC) for villas and offices?",
        answer:
          "Yes. We offer tailored Silver, Gold, and Platinum Annual Maintenance Contracts covering scheduled preventive visits and priority emergency call-outs.",
      },
      {
        question: "Can we book a one-off deep maintenance and snagging refresh?",
        answer:
          "Absolutely. Many clients book our 3-day Property Refresh package prior to moving in, hosting events, or listing a property.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

