export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality";
  location: string;
  size: string;
  completionYear: string;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
  designer?: string;
  tagline?: string;
  style?: string;
  challenges?: string;
  solutions?: string;
  materials?: string[];
  testimonial?: {
    content: string;
    author: string;
  };
  websiteUrl?: string;
  area?: string;
  completionDate?: string;
  budget?: string;
  client?: string;
}

const projectsData: Project[] = [
  {
    id: "shivam-kamthe-residence",
    title: "Shivam Kamthe",
    category: "Residential",
    location: "Pune",
    size: "3,200 sq ft",
    completionYear: "2024",
    description: "A stunning contemporary residential project featuring luxurious interiors with a perfect blend of modern aesthetics and warm wood tones. The design showcases sophisticated living spaces, elegant bedrooms, and functional work areas with premium finishes and thoughtful lighting design.",
    features: [
      "Modern TV unit with black marble accent wall",
      "Integrated work stations with custom wood paneling",
      "Luxurious hallway with marble walls and modern lighting",
      "Master bedroom with geometric wood headboard design",
      "Spacious walk-in closet with built-in wardrobes",
      "Contemporary living areas with wood slat feature walls",
      "Premium lighting with chandelier and accent fixtures",
      "Custom furniture with yellow accent cushions",
      "Floating bed design with ambient lighting",
      "Seamless indoor design with modern furnishings"
    ],
    images: [
      "/lovable-uploads/a504f7fa-534e-488f-b1fe-c66ce136ea3f.png",
      "/lovable-uploads/0f062b8d-d618-4df0-b6dc-2c6520488546.png",
      "/lovable-uploads/613621ba-6945-4d21-8d99-260670303f42.png",
      "/lovable-uploads/0b324120-62fa-4e0e-88d8-81a64a047c69.png",
      "/lovable-uploads/d58c7fcc-2b3f-4c12-866e-00827cfdb9ee.png",
      "/lovable-uploads/2775dc98-86c9-4796-b232-d1a0d28fce04.png",
      "/lovable-uploads/147ffc7d-c7be-4cca-8559-d009312ed317.png",
      "/lovable-uploads/3f9c99ad-2f56-4a1c-8cbc-a753e03b1c16.png",
      "/lovable-uploads/ad928b6f-d69e-43f7-9344-aa96903073fc.png",
      "/lovable-uploads/8b6b4a3f-1194-4fd7-8dca-b76ee6f79ab7.png",
      "/lovable-uploads/a0e0244e-52af-4aef-abf0-88cbee61321f.png",
      "/lovable-uploads/f64dff40-7bcf-4966-80df-e392cdda93e2.png",
      "/lovable-uploads/e9aeb1a8-4a81-497f-b952-c27bfd0b175c.png",
      "/lovable-uploads/77fd11ec-2be6-42c9-af33-d03ef27a1851.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Contemporary luxury living",
    budget: "₹48 Lakhs"
  },
  {
    id: "advocates-office",
    title: "Advocate's Office",
    category: "Commercial",
    location: "Mumbai",
    size: "2,500 sq ft",
    completionYear: "2024",
    description: "A sophisticated legal office design that combines professional elegance with modern functionality. The space features custom woodwork, justice-themed branding, ergonomic workstations, and collaborative meeting areas designed to inspire confidence and trust.",
    features: [
      "Custom fluted wood paneling and reception desk",
      "Justice-themed branding and wall graphics",
      "Modern conference room with wooden furniture",
      "Ergonomic workstations with dual monitor setups",
      "Built-in blue legal library with organized filing system",
      "Professional waiting areas with legal artwork",
      "Glass partition meeting rooms for privacy",
      "Warm LED lighting throughout the space"
    ],
    images: [
      "/lovable-uploads/c7008476-95b9-415a-93ad-a925deb4eaf4.png",
      "/lovable-uploads/2526b36d-d246-4236-b54d-6adb403565d8.png",
      "/lovable-uploads/b938685a-a65d-4c34-9aa6-b0cfca682c38.png",
      "/lovable-uploads/17036511-5f5e-4999-8045-2ac47da1fcac.png",
      "/lovable-uploads/8654b605-137d-4272-a30f-be202489103f.png",
      "/lovable-uploads/9e230ae6-5102-4a39-be0d-513aa59f05f3.png",
      "/lovable-uploads/1dca7dd0-1433-4c67-8162-e63f72dc5b91.png",
      "/lovable-uploads/3c4e256c-2b94-4b38-b2e3-7c505b6b95b4.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Professional legal workspace design",
    budget: "₹35 Lakhs"
  },
  {
    id: "7-treats-hotel",
    title: "7 Treats Hotel & Restaurant",
    category: "Hospitality",
    location: "Pune",
    size: "8,000 sq ft",
    completionYear: "2025",
    description: "7 Treats Hotel & Restaurant is a contemporary hospitality project that seamlessly blends modern design with warm, inviting atmospheres. The space features distinctive green wall branding, innovative rope lighting installations, geometric mirror patterns, and a sophisticated bar area with premium bottle displays.",
    features: [
      "Signature green moss wall with illuminated branding",
      "Innovative rope chandelier lighting installation",
      "Premium bar area with extensive bottle display shelving",
      "Multi-level dining areas with staircase access",
      "Suspended umbrella ceiling art installation",
      "Geometric mirror pattern entrance doors",
      "Luxurious booth seating with tufted leather upholstery",
      "Custom wooden slat partitions for privacy"
    ],
    images: ["/assets/hero-living-room.jpg"],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Contemporary hospitality design",
    budget: "₹1.2 Crores"
  },
  {
    id: "luxury-villa-mumbai",
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Mumbai",
    size: "3,500 sq ft",
    completionYear: "2023",
    description: "A stunning 4-bedroom villa with contemporary design elements and luxury finishes that perfectly balance aesthetics with practicality.",
    features: [
      "Open plan living spaces",
      "Premium marble flooring",
      "Designer lighting installations",
      "Custom-built wardrobes",
      "Modern kitchen with island",
      "Master suite with walk-in closet"
    ],
    images: ["/assets/project-bedroom.jpg"],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Sophisticated luxury living",
    budget: "₹45 Lakhs"
  },
  {
    id: "corporate-office-delhi",
    title: "Corporate Office Headquarters",
    category: "Commercial",
    location: "Delhi",
    size: "15,000 sq ft",
    completionYear: "2023",
    description: "Modern corporate office space designed for productivity and employee wellbeing with ergonomic design and innovative lighting solutions.",
    features: [
      "Open workspace design",
      "Executive conference rooms",
      "Collaborative work zones",
      "Ergonomic furniture",
      "Smart lighting systems",
      "Breakout areas and café"
    ],
    images: ["/assets/project-office.jpg"],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Future of workspace design",
    budget: "₹1.2 Crores"
  },
  {
    id: "boutique-hotel-goa",
    title: "Boutique Hotel Design",
    category: "Hospitality",
    location: "Goa",
    size: "8,000 sq ft",
    completionYear: "2022",
    description: "Elegant boutique hotel with coastal influences and modern amenities, creating memorable guest experiences.",
    features: [
      "Coastal design elements",
      "Luxury guest suites",
      "Infinity pool area",
      "Spa and wellness center",
      "Beachfront restaurant",
      "Local art integration"
    ],
    images: ["/assets/about-team.jpg"],
    isFeatured: false,
    designer: "Balaji Design Studio",
    tagline: "Coastal luxury hospitality",
    budget: "₹80 Lakhs"
  },
  {
    id: "roop-jewelers",
    title: "Roop Jewelers",
    category: "Commercial",
    location: "Mumbai, India",
    size: "1,200 sq ft",
    completionYear: "2024",
    description: "A luxury jewelry store designed to showcase exquisite collections in an elegant and sophisticated environment. The design features clean lines, premium materials, and strategic lighting to enhance the jewelry displays.",
    features: [
      "Premium display cases with integrated lighting",
      "Modern reception and consultation areas",
      "Strategic ambient and accent lighting",
      "Luxurious marble and wood finishes",
      "Climate-controlled environment",
      "Security-integrated design elements"
    ],
    images: [
      "/lovable-uploads/27e6d26c-b21e-483e-85ef-def00aa16db8.png",
      "/lovable-uploads/21b32361-1a1c-4ba4-b3b6-e1d71a2907e7.png",
      "/lovable-uploads/e429e799-7e8e-4a17-98cf-aae30a5e7299.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Luxury retail experience with sophisticated elegance",
    budget: "₹45,00,000"
  }
];

export default projectsData;