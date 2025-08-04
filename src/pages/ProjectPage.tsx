import { useParams, Navigate } from "react-router-dom";
import projectsData from "../data/projectsData";

const ProjectPage = () => {
  const { projectId } = useParams();
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  // If project not found, redirect to portfolio
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-roseGold mb-2">{project.tagline}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-darkGray/70">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-roseGold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {project.location}
            </span>
            <span>{project.size}</span>
            <span>{project.completionYear}</span>
            <span className="text-roseGold font-medium">{project.budget}</span>
          </div>
        </div>

        {/* Project Images Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-playfair text-darkGray mb-4">Project Overview</h2>
              <p className="text-darkGray/80 leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm text-darkGray/60 mb-4">
                <span className="font-medium">Designer:</span>
                <span className="ml-2">{project.designer}</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-playfair text-darkGray mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-darkGray/80">
                    <span className="w-2 h-2 bg-roseGold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;