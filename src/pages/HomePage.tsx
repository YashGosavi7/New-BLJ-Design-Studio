import { Link } from "react-router-dom";
import heroImage from "../assets/hero-mansion.png";
import aboutTeam from "../assets/about-team.jpg";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import OptimizedImage from "../components/OptimizedImage";
import projectsData from "../data/projectsData";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const featuredProjects = projectsData.filter(project => project.isFeatured);

  return (
    <>
      <Helmet>
        <title>Balaji Design Studio | Award-Winning Interior Designers in Mumbai & India</title>
        <meta name="description" content="Transform your space with Balaji Design Studio. 600+ luxury residential, commercial & hospitality projects across Mumbai, Pune, Bangalore. Expert interior designers delivering premium finishes and timeless elegance." />
      </Helmet>
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <HeroSection
          backgroundImage={heroImage}
          showCityScroll={true}
          credibilityStatement="600+ Award-Winning Projects Transforming Spaces Across India"
        >
          <div className="text-center max-w-5xl mx-auto flex flex-col justify-center items-center h-full px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-playfair mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-2xl font-medium animate-fade-in">
              Balaji Design Studio
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 max-w-2xl mx-auto font-semibold drop-shadow-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Creative Creation by Creative People
            </p>
            <Link
              to="/portfolio"
              className="bg-roseGold text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-roseGold/90 hover:scale-105 transition-all duration-300 inline-block shadow-2xl backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Explore Our Portfolio
            </Link>
          </div>
        </HeroSection>

        {/* Featured Projects - Enhanced */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-lightGray/30 to-warmWhite">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <SectionTitle
              title="Featured Projects"
              subtitle="Discover our portfolio of award-winning residential, commercial, and hospitality designs"
              center
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
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
                  priority={index < 2}
                />
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/portfolio"
                className="bg-roseGold text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-roseGold/90 hover:scale-105 transition-all duration-300 inline-block shadow-lg"
              >
                View Complete Portfolio
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;