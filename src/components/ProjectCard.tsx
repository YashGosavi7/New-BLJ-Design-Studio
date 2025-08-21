import { Link } from "react-router-dom";

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
}

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
  completionYear
}: ProjectCardProps) => {
  return (
    <Link 
      to={`/portfolio/${id}`}
      className="group block bg-white rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm font-medium bg-roseGold px-2 py-1 rounded">
              View Details
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-roseGold font-medium bg-roseGold/10 px-3 py-1 rounded-full">
            {category}
          </span>
          {completionYear && (
            <span className="text-xs text-darkGray/60">
              {completionYear}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-playfair font-semibold text-darkGray mb-2 group-hover:text-roseGold transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-darkGray/70">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-roseGold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </div>
          {size && (
            <span className="text-xs">
              {size}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;