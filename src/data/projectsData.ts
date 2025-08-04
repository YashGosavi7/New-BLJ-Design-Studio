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
  }
];

export default projectsData;