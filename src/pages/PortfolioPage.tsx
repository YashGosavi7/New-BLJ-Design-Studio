import { useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import PortfolioFilter from "../components/PortfolioFilter";
import LazySection from "../components/LazySection";
import projectsData from "../data/projectsData";
import { usePerformanceMonitor, trackPerformance } from "@/hooks/usePerformanceMonitor";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Track performance metrics
  const metrics = usePerformanceMonitor();

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(projectsData.map(project => project.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    trackPerformance('portfolio-filter-start');
    const result = activeCategory === "All" 
      ? projectsData 
      : projectsData.filter(project => project.category === activeCategory);
    trackPerformance('portfolio-filter-end');
    return result;
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our collection of beautifully designed spaces"
          center
        />

        <PortfolioFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <LazySection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </LazySection>
      </div>
    </div>
  );
};

export default PortfolioPage;