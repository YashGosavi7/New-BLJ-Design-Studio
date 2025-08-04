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
            {featuredProjects.map((project) => (
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

      {/* About Section */}
      <section className="section-padding bg-warmWhite">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair text-darkGray mb-6">
                About Our Studio
              </h2>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                With over 600+ successful projects across India's leading cities, 
                Balaji Design Studio has established itself as a premier interior 
                design firm dedicated to creating spaces that inspire and delight.
              </p>
              <p className="text-lg text-darkGray/80 mb-8 leading-relaxed">
                Our team of creative professionals brings together years of experience 
                in residential, commercial, and hospitality design to deliver 
                exceptional results that exceed expectations.
              </p>
              <Link
                to="/about"
                className="bg-roseGold text-white px-6 py-3 rounded-lg hover:bg-roseGold/90 transition-colors inline-block"
              >
                Learn More About Us
              </Link>
            </div>
            <img 
              src={aboutTeam} 
              alt="Balaji Design Studio Team" 
              className="h-96 w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;