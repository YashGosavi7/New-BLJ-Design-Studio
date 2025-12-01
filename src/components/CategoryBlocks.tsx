import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

interface CategoryBlock {
  name: string;
  image: string;
  link: string;
}

const categories: CategoryBlock[] = [
  {
    name: "Residential",
    image: "/lovable-uploads/a504f7fa-534e-488f-b1fe-c66ce136ea3f.png",
    link: "/projects#residential"
  },
  {
    name: "Architecture",
    image: "/assets/lonavala-farmhouse-1.png",
    link: "/projects#architecture"
  },
  {
    name: "Commercial",
    image: "/lovable-uploads/commercial-bhakti-office.png",
    link: "/projects#commercial"
  },
  {
    name: "Restaurants & Hotels",
    image: "/lovable-uploads/27e6d26c-b21e-483e-85ef-def00aa16db8.png",
    link: "/projects#restaurants"
  },
  {
    name: "Hospitality",
    image: "/lovable-uploads/f816dacc-d4a7-442d-a40f-9a19b793bf20.png",
    link: "/projects#hospitality"
  }
];

const CategoryBlocks = () => {
  return (
    <section className="w-full">
      {categories.map((category, index) => (
        <Link
          key={category.name}
          to={category.link}
          className="block relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden group"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <OptimizedImage
              src={category.image}
              alt={`${category.name} design projects by Balaji Design Studio`}
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              objectFit="cover"
              priority={index < 2}
              sizes="100vw"
            />
            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          </div>

          {/* Category Name - Center aligned */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold uppercase transition-all duration-500 group-hover:tracking-[0.2em] text-center"
              style={{ 
                textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                letterSpacing: '0.1em'
              }}
            >
              {category.name}
            </h2>
          </div>

          {/* Subtle bottom line separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        </Link>
      ))}
    </section>
  );
};

export default CategoryBlocks;
