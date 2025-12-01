import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import { Helmet } from "react-helmet";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const location = useLocation();
  
  const categories = ["All", "Residential", "Commercial", "Restaurants"];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Handle hash scroll on page load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  // Preload first 6 images for better UX
  useEffect(() => {
    const imagesToPreload = filteredProjects.slice(0, 6).map(p => p.images[0]);
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [filteredProjects]);

  return (
    <>
      <Helmet>
        <title>Projects | Balaji Design Studio</title>
        <meta name="description" content="Explore our portfolio of award-winning interior design projects across residential, commercial, and hospitality sectors." />
      </Helmet>
      
      <article className="min-h-screen pt-24 md:pt-28 bg-background">
        {/* Header Section */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="max-w-[1300px] mx-auto px-5">
            <div className="max-w-3xl animate-fade-in">
              <div className="separator-thick mb-6" />
              <h1 className="text-foreground mb-6 text-3xl md:text-4xl">Our Projects</h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                A curated collection of our finest residential, commercial, and hospitality designs across India.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Navigation - Static */}
        <section className="py-2.5 border-b border-border bg-background">
          <div className="max-w-[1300px] mx-auto px-5">
            <nav className="flex flex-wrap gap-2 md:gap-6" aria-label="Project categories">
              {categories.map((category) => (
                <a
                  key={category}
                  href={category === "All" ? "/projects" : `/projects#${category.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveFilter(category);
                    if (category !== "All") {
                      const element = document.getElementById(category.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`px-3 py-2 font-inter text-sm tracking-wider uppercase transition-all duration-300 ${
                    activeFilter === category
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                  }`}
                  style={{ letterSpacing: '1px', fontSize: '14px' }}
                  aria-current={activeFilter === category ? "page" : undefined}
                >
                  {category === "Restaurants" ? "Restaurants & Hotels" : category}
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({category === "All" 
                      ? projectsData.length 
                      : projectsData.filter(p => p.category === category).length
                    })
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Projects by Category */}
        {["Residential", "Commercial", "Restaurants"].map((category) => {
          const categoryProjects = projectsData.filter(p => p.category === category);
          if (activeFilter !== "All" && activeFilter !== category) return null;
          if (categoryProjects.length === 0) return null;
          
          return (
            <section key={category} id={category.toLowerCase()} className="py-5 border-b border-border last:border-b-0">
              <div className="max-w-[1300px] mx-auto px-5">
                <h2 className="text-xl md:text-2xl font-playfair text-foreground mb-5">
                  {category === "Restaurants" ? "Restaurants & Hotels" : category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {categoryProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      category={project.category}
                      location={project.location}
                      image={project.images[0]}
                      index={index}
                      priority={index < 4}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </article>
    </>
  );
};

export default ProjectsPage;