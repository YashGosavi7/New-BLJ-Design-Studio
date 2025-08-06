import { Link } from "react-router-dom";
import heroImage from "../assets/hero-living-room.jpg";
import aboutTeam from "../assets/about-team.jpg";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

const HomePage = () => {
  const featuredProjects = projectsData.filter(project => project.isFeatured);

  return (
    <div className="min-h-screen">
      {/* Original Hero Section */}
      <HeroSection
        backgroundImage={heroImage}
        showCityScroll={true}
        credibilityStatement="600+ Projects Across India's Leading Cities"
      >
        <div className="text-center max-w-4xl mx-auto flex flex-col justify-end h-full pb-20">
          <h1 className="text-4xl md:text-6xl text-white font-playfair mb-6 leading-tight">
            Balaji Design Studio
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            <strong>creative creation by creative people</strong>
          </p>
          <Link
            to="/portfolio"
            className="bg-roseGold text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-roseGold/90 transition-colors inline-block"
          >
            Explore Our Work
          </Link>
        </div>
      </HeroSection>

      {/* Featured Projects */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto">
          <SectionTitle
            title="Featured Projects"
            subtitle="A glimpse of our recent work across India"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project, index) => (
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

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-roseGold text-white px-6 py-3 rounded-lg hover:bg-roseGold/90 transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;