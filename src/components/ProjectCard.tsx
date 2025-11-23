import { Link } from "react-router-dom";
import { Home, Building2, Hotel, MapPin, Ruler, Calendar } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  designer?: string;
  tagline?: string;
  index?: number;
  size?: string;
  completionYear?: string;
  priority?: boolean;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'residential':
      return Home;
    case 'commercial':
      return Building2;
    case 'hospitality':
      return Hotel;
    default:
      return Home;
  }
};

const ProjectCard = ({
  id,
  title,
  category,
  location,
  image,
  designer,
  tagline,
  index = 0,
  size,
  completionYear,
  priority = false
}: ProjectCardProps) => {
  const CategoryIcon = getCategoryIcon(category);
  
  return (
    <article
      className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <Link to={`/portfolio/${id}`}>
        {/* Project Image with Optimization */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <OptimizedImage
            src={image}
            alt={`${title} - ${category} interior design project in ${location}`}
            className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            objectFit="cover"
            aspectRatio="16/9"
<<<<<<< HEAD
            priority={priority}
=======
            priority={index !== undefined && index < 4}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
>>>>>>> 194cef3 (Configure for Netlify deployment and optimize image loading)
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300">
            <CategoryIcon className="text-roseGold" size={16} />
            <span className="text-sm font-semibold text-darkGray">{category}</span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8 space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-darkGray mb-3 group-hover:text-roseGold transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex items-center space-x-2 text-darkGray/70 mb-3">
              <MapPin size={18} className="text-roseGold flex-shrink-0" />
              <span className="text-base font-medium">{location}</span>
            </div>
            
            {designer && (
              <p className="text-sm text-darkGray/60 italic">by {designer}</p>
            )}
          </div>

          {/* Additional Details */}
          <div className="flex flex-wrap gap-4 pt-3 border-t border-lightGray/50">
            {completionYear && (
              <div className="flex items-center space-x-2 text-sm text-darkGray/70">
                <Calendar size={16} className="text-roseGold" />
                <span className="font-medium">{completionYear}</span>
              </div>
            )}
            {size && (
              <div className="flex items-center space-x-2 text-sm text-darkGray/70">
                <Ruler size={16} className="text-roseGold" />
                <span className="font-medium">{size}</span>
              </div>
            )}
          </div>
          
          <div className="pt-3">
            <span className="inline-flex items-center text-roseGold font-medium text-sm group-hover:gap-2 gap-1 transition-all duration-300">
              View Project
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;