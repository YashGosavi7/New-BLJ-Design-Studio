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
  },
  {
    id: "golden-leaf-banquet-hall",
    title: "Golden Leaf Banquet Hall",
    category: "Hospitality",
    location: "Mumbai, India",
    size: "12,000 sq ft",
    completionYear: "2024",
    description: "A magnificent banquet hall featuring classical Roman-inspired architecture with ornate columns, sculptural elements, and luxurious water features. The design creates a grand and opulent atmosphere perfect for prestigious events and celebrations.",
    features: [
      "Classical Roman-inspired architecture",
      "Ornate Corinthian columns and capitals",
      "Sculptural lion and statue installations",
      "Decorative swan water features",
      "Premium marble and stone finishes",
      "Grand entrance with arched doorways",
      "Elegant outdoor courtyards",
      "Sophisticated lighting design"
    ],
    images: [
      "/lovable-uploads/f816dacc-d4a7-442d-a40f-9a19b793bf20.png",
      "/lovable-uploads/50c7c58a-9db2-421d-8c09-ca3f343fd126.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Classical grandeur meets modern luxury",
    budget: "₹2.5 Crores"
  },
  {
    id: "nana-office",
    title: "Nana Office",
    category: "Commercial",
    location: "Mumbai, India",
    size: "3,500 sq ft",
    completionYear: "2024",
    description: "A modern commercial office space designed for Shree Datta Developers featuring contemporary interiors with glass partitions, professional branding, and comfortable client meeting areas. The design emphasizes transparency, professionalism, and modern workplace aesthetics.",
    features: [
      "Glass entrance doors with city skyline backdrop",
      "Professional reception area with branded backdrop",
      "Modern waiting lounge with vibrant blue seating",
      "Premium marble flooring throughout",
      "Contemporary lighting with circular fixtures",
      "Climate-controlled environment",
      "Professional meeting spaces",
      "Corporate branding integration"
    ],
    images: [
      "/lovable-uploads/da34718b-1dd2-467c-9383-52efb9a4556a.png",
      "/lovable-uploads/97252ea5-fbc4-43ad-aa71-e190b049e8a7.png",
      "/lovable-uploads/bd2d5d18-df08-45b6-bb0a-a6d31d6cf2f8.png",
      "/lovable-uploads/6d1ae78b-a779-496d-a345-31260b64b72b.png",
      "/lovable-uploads/50584fa5-3e83-485e-9439-959018c24930.png",
      "/lovable-uploads/42151f33-96fa-494a-baa4-186001c5d881.png",
      "/lovable-uploads/583d84fc-010f-46c6-8b21-fa3a560bed2d.png",
      "/lovable-uploads/315b0ded-aeb7-4704-aab7-0df0770e0207.png",
      "/lovable-uploads/c883ee17-c7e0-44ff-97af-e0a3dda37053.png",
      "/lovable-uploads/0dfe4632-7458-4742-91ac-0cdd638cbc3f.png",
      "/lovable-uploads/081419d1-186f-498f-b164-184b5a4bc546.png",
      "/lovable-uploads/22fb6c4d-a756-4a20-bfbc-6f81f318f04e.png",
      "/lovable-uploads/0ec1872e-29d4-4544-9cb0-8853f60e1790.png",
      "/lovable-uploads/e89c8d17-fba2-49bb-b4a4-4bfdf60b528a.png",
      "/lovable-uploads/888f3377-e37f-4c94-87f8-ce2f4366c5e2.png",
      "/lovable-uploads/87bba3af-0e68-4d2a-abcb-4988894e6a29.png",
      "/lovable-uploads/fd00566e-6eff-48e5-aae9-817c95d13265.png",
      "/lovable-uploads/70ac0439-74a2-4ced-bde2-b3d3546a8b94.png",
      "/lovable-uploads/61b47d8d-6775-47d8-86c7-7c2d2d271777.png",
      "/lovable-uploads/0d797a53-3b9d-4d9e-ae19-ec78a6f75f07.png",
      "/lovable-uploads/072a6c68-6143-4b67-95f8-aa2a6a01445a.png",
      "/lovable-uploads/b8e5f610-75d2-46f1-9af2-264cfb8c8bc3.png",
      "/lovable-uploads/ba992646-90b9-4fcf-89ca-581c88635c21.png",
      "/lovable-uploads/aee4b25d-ab0b-4c99-ac9e-359e815068e7.png",
      "/lovable-uploads/8a2339ce-79e7-49a4-a6d8-1f93936627d1.png",
      "/lovable-uploads/1368bc55-831e-45e8-a2b5-dd50e0ce9158.png",
      "/lovable-uploads/e11d298f-0d5b-4f49-aa03-40b183bc9af6.png",
      "/lovable-uploads/d4adbd8f-06e1-4dd4-8d66-6906b9d84233.png",
      "/lovable-uploads/d36baf9d-ff0b-44ab-9e91-c9d6395f7356.png",
      "/lovable-uploads/bebb1401-f971-4525-8413-29eb85c5dcde.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Professional workspace with modern elegance",
    budget: "₹28 Lakhs"
  },
  {
    id: "sunil-jawale-residence",
    title: "Mr. Sunil Jawale Residence",
    category: "Residential",
    location: "Mumbai, India",
    size: "2,800 sq ft",
    completionYear: "2024",
    description: "A sophisticated residential project featuring contemporary design with warm wood accents and modern amenities. The space showcases custom entrance doors with artistic paneling, open-plan living and dining areas, and elegant ceiling treatments that create a harmonious blend of comfort and style.",
    features: [
      "Custom wood-paneled entrance doors with decorative nameplate",
      "Contemporary living spaces with neutral color palette",
      "Sophisticated ceiling design with wood accent strips",
      "Open-plan dining area with modern pendant lighting",
      "Premium flooring with elegant area rugs",
      "Modern furniture with comfortable seating arrangements",
      "Artistic wall treatments and botanical artwork",
      "Seamless integration of living and dining spaces"
    ],
    images: [
      "/lovable-uploads/d5d4a107-e610-42a9-bf27-36b3fa57243b.png",
      "/lovable-uploads/e5a84077-f7e6-4bbd-bbe3-563b7bc2215e.png",
      "/lovable-uploads/eea82f4b-0873-4687-a223-83d358ba73c6.png",
      "/lovable-uploads/6504c478-fa0e-462b-a6c1-635914837a72.png",
      "/lovable-uploads/ba70f42a-7d49-4c4f-ac90-55f168abc61f.png",
      "/lovable-uploads/4ee72e3f-bdd0-491b-9522-2d3c459dccdf.png",
      "/lovable-uploads/773a479b-3465-4131-9589-5b79424f5b62.png",
      "/lovable-uploads/0c28cde4-b83e-4495-b144-b3a750363380.png",
      "/lovable-uploads/2833e792-9807-43c4-a848-4943ad4a1ba1.png"
    ],
    isFeatured: true,
    designer: "Balaji Design Studio",
    tagline: "Contemporary elegance with warm wood accents",
    budget: "₹42 Lakhs"
  }
];

export default projectsData;