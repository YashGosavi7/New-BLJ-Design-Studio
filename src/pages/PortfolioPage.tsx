import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import projectsData from "../data/projectsData";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our collection of beautifully designed spaces"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              mainImage={project.mainImage}
              area={project.area}
              year={project.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;