export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Retail";
  year: string;
  location: string;
  area: string;
  duration: string;
  status: "Completed" | "In Delivery";
  heroImage: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  materials: { name: string; type: string }[];
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "sunlit-loft-residence",
    slug: "sunlit-loft-residence",
    number: "01",
    title: "Sunlit Loft Residence",
    subtitle: "Warm Minimalist Double-Height Penthouse",
    category: "Residential",
    year: "2025",
    location: "Downtown Dubai, UAE",
    area: "6,800 sq.ft",
    duration: "14 Weeks",
    status: "Completed",
    heroImage: "/landing/projects/image-1.png",
    galleryImages: [
      "/landing/projects/image-1.png",
      "/landing/cards-imgs/image-1.png",
      "/landing/about-story/story-top.jpg",
    ],
    summary:
      "A dual-level penthouse transformed into an atmospheric architectural sanctuary. Features bespoke rift-cut European white oak millwork, soaring acoustic slatted ceilings, and tailored ambient architectural illumination.",
    challenge:
      "Balancing high solar gain from massive floor-to-ceiling glass facades while crafting an intimate, quiet living sanctuary with zero visible mechanical services.",
    solution:
      "Engineered concealed perimeter shadow gaps for linear HVAC diffusion, integrated motorized sheer acoustic blinds, and applied monolithic warm microcement paired with rift-cut white oak joinery.",
    scope: [
      "Turnkey Fit-Out & Project Management",
      "Bespoke Architectural Millwork & Wall Cladding",
      "Acoustic Ceiling Treatment & Concealed HVAC",
      "Precision Recessed Architectural Lighting",
    ],
    materials: [
      { name: "European White Oak", type: "Rift-cut timber millwork" },
      { name: "Warm Microcement", type: "Seamless architectural flooring" },
      { name: "Fluted Travertine", type: "Floating kitchen island & hearth" },
      { name: "Acoustic Slats", type: "Sound-dampened walnut panelling" },
    ],
    featured: true,
  },
  {
    id: "pavilion-garden-villa",
    slug: "pavilion-garden-villa",
    number: "02",
    title: "Pavilion Garden Villa",
    subtitle: "Seamless Indoor-Outdoor Architectural Residence",
    category: "Residential",
    year: "2024",
    location: "Al Barari, Dubai",
    area: "12,400 sq.ft",
    duration: "20 Weeks",
    status: "Completed",
    heroImage: "/landing/projects/image-2.png",
    galleryImages: [
      "/landing/projects/image-2.png",
      "/landing/cards-imgs/image-2.png",
      "/landing/about-story/story-bottom-left.jpg",
    ],
    summary:
      "An expansive luxury estate where the boundaries between interior pavilion architecture and lush landscaped gardens dissolve. Complete custom joinery, pivot portal doors, and bespoke vanity suites.",
    challenge:
      "Executing structural openings with zero-threshold sliding glass systems across a 24-meter continuous span with seamless stone continuity.",
    solution:
      "Custom engineered recessed stainless drainage channels beneath bookmatched honed limestone tiles, aligning floor joints perfectly from the internal salon to the perimeter infinity pool.",
    scope: [
      "Full Interior Architectural Demolition & Fit-Out",
      "Custom High-Ceiling Pivot Doors (4.2m tall)",
      "Bookmatched Natural Stone Cladding",
      "Outdoor Pavilion Kitchen & Shaded Lounges",
    ],
    materials: [
      { name: "Honed Moleanos Limestone", type: "Continuous indoor/outdoor paving" },
      { name: "Brushed Bronze Profiles", type: "Custom architectural framing" },
      { name: "Smoked Thermo-Ash", type: "Exterior soffits & louvers" },
      { name: "Leather-Finish Granite", type: "Chef's show kitchen worktops" },
    ],
    featured: true,
  },
  {
    id: "oculus-sanctuary-atrium",
    slug: "oculus-sanctuary-atrium",
    number: "03",
    title: "Oculus Sanctuary Atrium",
    subtitle: "Biophilic Executive Club & Wellness Sanctuary",
    category: "Hospitality",
    year: "2024",
    location: "DIFC Gate Precinct, Dubai",
    area: "9,600 sq.ft",
    duration: "16 Weeks",
    status: "Completed",
    heroImage: "/landing/projects/image-3.png",
    galleryImages: [
      "/landing/projects/image-3.png",
      "/landing/cards-imgs/image-3.png",
      "/landing/about-story/test1.jpg",
    ],
    summary:
      "Centering around a monumental circular architectural oculus, this private sanctuary marries botanical biophilic landscaping with curved monolithic plaster and bespoke sound-dampened lounges.",
    challenge:
      "Constructing a complex compound-curved double-skin gypsum vault with precision acoustic perforations while preserving structural roof load integrity.",
    solution:
      "Prefabricated CNC fiberglass-reinforced gypsum modules mounted on seismic-rated galvanized sub-structures, incorporating high-CRI circadian light integration.",
    scope: [
      "Specialty Curved Gypsum Architecture",
      "Living Plant Wall Sub-structure & Irrigation",
      "Custom Curved Seating & Integrated Joinery",
      "Acoustic Commissioning & Reverberation Control",
    ],
    materials: [
      { name: "Sculptural Gypsum", type: "Monolithic curved vaulting" },
      { name: "Live Olive Grove & Moss", type: "Integrated biophilic planters" },
      { name: "Natural Bouclé & Linen", type: "Acoustic banquette upholstery" },
      { name: "Oxidized Copper Trim", type: "Hand-patinated accents" },
    ],
    featured: true,
  },
  {
    id: "veranda-executive-lounge",
    slug: "veranda-executive-lounge",
    number: "04",
    title: "Veranda Executive Lounge",
    subtitle: "Private Family Office & Penthouse Salon",
    category: "Commercial",
    year: "2023",
    location: "Dubai Marina, UAE",
    area: "5,200 sq.ft",
    duration: "11 Weeks",
    status: "Completed",
    heroImage: "/landing/projects/image-4.png",
    galleryImages: [
      "/landing/projects/image-4.png",
      "/landing/cards-imgs/image-4.png",
      "/landing/contact-hero.jpg",
    ],
    summary:
      "A sophisticated corporate lounge and boardroom designed for ultra-high-net-worth dealmaking. Features sound-isolated boardrooms, concealed cocktail joinery, and panoramic maritime views.",
    challenge:
      "Achieving an STC 55 acoustic privacy rating across all conference suites while retaining transparent floor-to-ceiling double-glazed partitions.",
    solution:
      "Dual-pane acoustic laminated smart-glass systems with concealed drop-down acoustic threshold seals and baffled overhead plenum sound traps.",
    scope: [
      "Commercial Turnkey Fit-Out & Partitioning",
      "Switchable Smart Privacy Glass Partitions",
      "Bespoke 16-Person Boardroom Table in Canaletto Walnut",
      "Integrated Crestron AV & Climate Control",
    ],
    materials: [
      { name: "Canaletto Walnut", type: "Bookmatched veneer wall panels" },
      { name: "Nero Marquina Marble", type: "Executive wet bar & credenza" },
      { name: "Gunmetal Acoustic Fabric", type: "Padded acoustic wall panels" },
      { name: "Matte Black Steel", type: "Architectural door frames" },
    ],
    featured: false,
  },
  {
    id: "lumina-flagship-atelier",
    slug: "lumina-flagship-atelier",
    number: "05",
    title: "Lumina Flagship Atelier",
    subtitle: "Haute Horlogerie & High Jewelry Boutiques",
    category: "Retail",
    year: "2025",
    location: "The Dubai Mall, Fashion Avenue",
    area: "3,400 sq.ft",
    duration: "9 Weeks",
    status: "Completed",
    heroImage: "/landing/cards-imgs/image-1.png",
    galleryImages: [
      "/landing/cards-imgs/image-1.png",
      "/landing/projects/image-1.png",
      "/landing/about-story/story-top.jpg",
    ],
    summary:
      "High-security luxury retail environment characterized by seamless curved plaster walls, museum-grade anti-reflective display vitrines, and 98+ CRI custom optic jewelry illumination.",
    challenge:
      "Meeting international Grade-5 ballistic vault criteria while maintaining an ethereal, ultra-light luxury showroom ambiance.",
    solution:
      "Reinforced composite steel security sub-linings completely hidden behind hand-troweled Venetian plaster and brushed champagne aluminum framing.",
    scope: [
      "Turnkey Luxury Retail Fit-Out",
      "Museum Vitrines with Concealed Lock Mechanisms",
      "Jewelry-Grade Color Rendering Lighting",
      "Armored VIP Consultation Salon",
    ],
    materials: [
      { name: "Brushed Champagne Aluminum", type: "Display framing & vitrines" },
      { name: "Polished Calacatta Borghini", type: "Solid counter plinths" },
      { name: "Hand-Troweled Venetian Plaster", type: "Curved wall finish" },
      { name: "Low-Iron Ultra-Clear Glass", type: "Anti-reflective showcases" },
    ],
    featured: true,
  },
  {
    id: "palazzo-del-sol",
    slug: "palazzo-del-sol",
    number: "06",
    title: "Palazzo Del Sol Residence",
    subtitle: "Ultra-Luxury Waterfront Estate Fit-Out",
    category: "Residential",
    year: "2024",
    location: "Palm Jumeirah Frond, Dubai",
    area: "16,500 sq.ft",
    duration: "24 Weeks",
    status: "Completed",
    heroImage: "/landing/cards-imgs/image-2.png",
    galleryImages: [
      "/landing/cards-imgs/image-2.png",
      "/landing/projects/image-2.png",
      "/landing/about-story/story-bottom-left.jpg",
    ],
    summary:
      "A masterpiece on Palm Jumeirah featuring a bespoke show kitchen with Gaggenau 400 series appliances, walk-in climate-controlled wine cellars, master walk-in wardrobe suites, and spa bathrooms.",
    challenge:
      "Handling extreme marine salinity and humidity while installing sensitive solid timber millwork and delicate bookmatched marble slabs.",
    solution:
      "State-of-the-art dual-zone dehumidification and sealed vapor-barrier envelopes, coupled with vacuum-impregnated timber stabilization treatments.",
    scope: [
      "Complete Residential Turnkey Fit-Out",
      "Master Dressing Suites & Vanity Units",
      "Glass Enclosed Wine Cellar with Precision Cooling",
      "Private Home Cinema with Acoustic Baffles",
    ],
    materials: [
      { name: "Statuario Extra Marble", type: "Bookmatched feature walls" },
      { name: "Smoked Eucalyptus", type: "Custom closet systems & joinery" },
      { name: "Polished Nickel Fixtures", type: "Marine-grade bathroom fittings" },
      { name: "Cast Bronze Pulls", type: "Bespoke architectural hardware" },
    ],
    featured: false,
  },
  {
    id: "novus-tech-campus",
    slug: "novus-tech-campus",
    number: "07",
    title: "Novus Tech Innovation Hub",
    subtitle: "Adaptive Workspace & Agile Labs",
    category: "Commercial",
    year: "2024",
    location: "Dubai Internet City",
    area: "21,000 sq.ft",
    duration: "18 Weeks",
    status: "Completed",
    heroImage: "/landing/cards-imgs/image-3.png",
    galleryImages: [
      "/landing/cards-imgs/image-3.png",
      "/landing/projects/image-3.png",
      "/landing/about-story/test2.jpg",
    ],
    summary:
      "A multi-floor modern tech headquarters designed for dynamic collaboration. Includes bleacher seating presentation auditoriums, quiet acoustic pods, wellness zones, and ergonomic hot-desking.",
    challenge:
      "Fast-track delivery across 3 open floors within an active commercial tower with strict working-hour noise regulations.",
    solution:
      "Off-site modular fabrication of partition assemblies, acoustic ceiling baffles, and MEP duct kits, reducing on-site wet trades by 65%.",
    scope: [
      "Commercial Architecture & Turnkey Build",
      "Modular Raised Access Flooring & Power Distribution",
      "Acoustic Ceiling Canopies & Baffles",
      "Town Hall Presentation Amphitheater",
    ],
    materials: [
      { name: "Recycled PET Felt", type: "Acoustic ceiling baffles" },
      { name: "Exposed Polished Concrete", type: "Industrial aesthetic flooring" },
      { name: "Natural Birch Plywood", type: "Stepped amphitheater seating" },
      { name: "Powder-Coated Steel Grid", type: "Modular space dividers" },
    ],
    featured: false,
  },
  {
    id: "solstice-dining-salon",
    slug: "solstice-dining-salon",
    number: "08",
    title: "Solstice Culinary Salon",
    subtitle: "Michelin-Caliber Fine Dining & Mixology Lounge",
    category: "Hospitality",
    year: "2023",
    location: "Jumeirah Bay Island, Dubai",
    area: "8,100 sq.ft",
    duration: "15 Weeks",
    status: "Completed",
    heroImage: "/landing/cards-imgs/image-4.png",
    galleryImages: [
      "/landing/cards-imgs/image-4.png",
      "/landing/projects/image-4.png",
      "/landing/contact-hero.jpg",
    ],
    summary:
      "An evocative fine-dining culinary temple featuring an open live-fire show kitchen, acoustic vaulted ceilings, intimate private dining grottos, and an illuminated onyx cocktail bar.",
    challenge:
      "Integrating heavy commercial extraction hoods and fire suppression systems into an ultra-low ceiling structure without disrupting acoustic comfort.",
    solution:
      "Custom silenced double-walled extraction runs with inline acoustic silencers and bespoke copper hood cowls that double as dramatic sculptural focal points.",
    scope: [
      "Hospitality Turnkey Fit-Out & Commercial Kitchen",
      "Backlit Backlit Honey Onyx Bar Counter",
      "Custom Velvet & Saddle-Leather Dining Booths",
      "Architectural Tunable White Scene Lighting",
    ],
    materials: [
      { name: "Honey Translucent Onyx", type: "Backlit bar counter & columns" },
      { name: "Hand-Hammered Raw Copper", type: "Kitchen hood sculpturing" },
      { name: "Saddle Bridle Leather", type: "Custom booth seating" },
      { name: "Dark Roasted Oak", type: "Herringbone timber parquetry" },
    ],
    featured: true,
  },
];

