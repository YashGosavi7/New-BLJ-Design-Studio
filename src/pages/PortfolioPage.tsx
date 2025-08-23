import { useState } from "react";
import { Home, Building2, Hotel } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import projectsData from "../data/projectsData";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    { name: "All", icon: null, count: projectsData.length },
    { name: "Residential", icon: Home, count: projectsData.filter(p => p.category === "Residential").length },
    { name: "Commercial", icon: Building2, count: projectsData.filter(p => p.category === "Commercial").length },
    { name: "Hospitality", icon: Hotel, count: projectsData.filter(p => p.category === "Hospitality").length }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our collection of beautifully designed spaces"
          center
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.name
                    ? "bg-roseGold text-white shadow-lg"
                    : "bg-white text-darkGray hover:bg-roseGold/10 hover:text-roseGold border border-gray-200"
                }`}
              >
                {IconComponent && <IconComponent size={18} />}
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.name
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-darkGray/60"
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

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