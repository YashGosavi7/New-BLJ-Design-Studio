import { useState, useEffect } from "react";
import { Home, Building2, Hotel } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import projectsData from "../data/projectsData";
import { Helmet } from "react-helmet";
import { preloadCriticalImages } from "../utils/imagePreloader";

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

  // Preload critical images (first 6 images) when page loads or filter changes
  useEffect(() => {
    const criticalImageUrls = filteredProjects
      .slice(0, 6)
      .map(project => project.images[0])
      .filter(Boolean);
    
    if (criticalImageUrls.length > 0) {
      preloadCriticalImages(criticalImageUrls, 6);
    }
  }, [activeFilter]);

  return (
    <>
      <Helmet>
        <title>Portfolio | Balaji Design Studio - 600+ Interior Design Projects</title>
        <meta name="description" content="Browse our award-winning portfolio of 600+ interior design projects across residential, commercial, and hospitality spaces in Mumbai, Pune, Bangalore, and more." />
        <meta name="keywords" content="interior design portfolio, residential projects, commercial designs, hospitality interiors, Mumbai interior designers, luxury home designs" />
      </Helmet>
      
      <div className="min-h-screen pt-20 bg-gradient-to-b from-warmWhite to-lightGray/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="animate-fade-in mb-16">
            <SectionTitle
              title="Our Portfolio"
              subtitle="Explore our collection of beautifully designed spaces across India"
              center
            />
          </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                aria-label={`Filter by ${category.name}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.name
                    ? "bg-roseGold text-white shadow-xl scale-105"
                    : "bg-white text-darkGray hover:bg-roseGold/10 hover:text-roseGold border border-lightGray/40 shadow-md"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
              priority={index < 3}
            />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;