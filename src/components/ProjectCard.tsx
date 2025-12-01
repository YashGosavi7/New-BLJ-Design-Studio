import { Link } from "react-router-dom";
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

const ProjectCard = ({
  id,
  title,
  category,
  image,
  index = 0,
  priority = false
}: ProjectCardProps) => {
  return (
    <article
      className="group block animate-fade-in"
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'both'
      }}
    >
      <Link to={`/projects/${id}`} className="block">
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
          <OptimizedImage
            src={image}
            alt={`${title} - ${category} interior design project`}
            className="w-full h-full image-hover-zoom"
            objectFit="cover"
            aspectRatio="4/3"
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Category badge - appears on hover */}
          <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="bg-background text-foreground px-4 py-2 text-xs tracking-widest uppercase font-inter">
              {category}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-2">
          <h3 className="text-base md:text-lg font-playfair text-foreground group-hover:opacity-70 transition-opacity duration-300">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-inter">
              {category}
            </span>
            <span className="text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-inter">
              View Project →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;