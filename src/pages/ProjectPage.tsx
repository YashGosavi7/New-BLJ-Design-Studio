import { useParams, Navigate } from "react-router-dom";
import projectsData from "../data/projectsData";
import ImageLightbox from "../components/ImageLightbox";
import { Helmet } from "react-helmet";
import { MapPin, Calendar, Ruler, Tag, MessageCircle } from "lucide-react";

const ProjectPage = () => {
  const { projectId } = useParams();
  
  // Find the project by ID
  const project = projectsData.find(p => p.id === projectId);
  
  // If project not found, redirect to portfolio
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | {project.category} Interior Design by Balaji Design Studio</title>
        <meta name="description" content={`${project.description.substring(0, 155)}...`} />
      </Helmet>
      
      <article className="min-h-screen pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          {/* Project Header - Enhanced */}
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-roseGold/10 text-roseGold px-6 py-2 rounded-full mb-6">
              <span className="font-semibold">{project.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-darkGray mb-6 leading-tight">
              {project.title}
            </h1>
            
            {project.tagline && (
              <p className="text-xl md:text-2xl text-roseGold mb-8 font-medium">{project.tagline}</p>
            )}
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919762000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg mb-8"
            >
              <MessageCircle size={20} />
              Connect on WhatsApp
            </a>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-base md:text-lg text-darkGray/70">
              <span className="flex items-center gap-2">
                <MapPin size={20} className="text-roseGold" />
                <strong>{project.location}</strong>
              </span>
              <span className="flex items-center gap-2">
                <Ruler size={20} className="text-roseGold" />
                {project.size}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={20} className="text-roseGold" />
                {project.completionYear}
              </span>
              {project.budget && (
                <span className="flex items-center gap-2">
                  <Tag size={20} className="text-roseGold" />
                  <strong className="text-roseGold">{project.budget}</strong>
                </span>
              )}
            </div>
          </header>

          {/* Project Images Gallery - Interactive Lightbox */}
          <div className="mb-16 md:mb-20">
            <ImageLightbox 
              images={project.images}
              altPrefix={`${project.title} - ${project.category} interior design view`}
            />
          </div>

          {/* Project Details - Enhanced Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 md:gap-16">
              {/* Description - Takes more space */}
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair text-darkGray mb-6">Project Overview</h2>
                  <div className="w-20 h-1 bg-roseGold mb-6"></div>
                  <p className="text-lg md:text-xl text-darkGray/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {project.designer && (
                  <div className="flex items-center gap-3 text-base md:text-lg text-darkGray/70 bg-lightGray/30 px-6 py-4 rounded-xl">
                    <span className="font-semibold text-darkGray">Designer:</span>
                    <span className="text-roseGold font-medium">{project.designer}</span>
                  </div>
                )}
              </div>

              {/* Features - Sidebar */}
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-lightGray/40 to-warmWhite p-8 rounded-2xl shadow-lg sticky top-24">
                  <h3 className="text-2xl md:text-3xl font-playfair text-darkGray mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-base md:text-lg text-darkGray/80">
                        <span className="w-2.5 h-2.5 bg-roseGold rounded-full mr-4 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectPage;