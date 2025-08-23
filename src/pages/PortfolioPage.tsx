import { useState } from "react";
import { Home, Building2, Hotel, Send } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Residential");

  const categories = [
    { name: "Residential", icon: Home },
    { name: "Commercial", icon: Building2 },
    { name: "Hospitality", icon: Hotel }
  ];

  const filteredProjects = projectsData.filter(project => project.category === activeFilter);

  const handleWhatsAppConnect = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-darkGray mb-6 leading-tight">
            Explore Our Portfolio: Spaces Designed with Attention to Detail
          </h1>
          <p className="text-lg md:text-xl text-darkGray/70 mb-8 max-w-3xl mx-auto">
            Founded in 2012, with over 600 projects across Tier 1 cities.
          </p>
          
          {/* WhatsApp Connect Button */}
          <button
            onClick={handleWhatsAppConnect}
            className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-8 py-4 rounded-full font-medium text-lg hover:bg-green-200 transition-all duration-300 border-2 border-green-200 hover:border-green-300 mb-12"
          >
            <Send className="w-5 h-5" />
            Connect on WhatsApp
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
                  activeFilter === category.name
                    ? "bg-roseGold text-white shadow-lg"
                    : "bg-white text-darkGray hover:bg-roseGold/10 hover:text-roseGold border border-gray-200"
                }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              image={project.images[0]}
              size={project.size}
              completionYear={project.completionYear}
              designer={project.designer}
              tagline={project.tagline}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;