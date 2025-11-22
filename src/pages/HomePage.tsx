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
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 max-w-2xl mx-auto font-light drop-shadow-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

        {/* About Section - Enhanced */}
        <section className="py-16 md:py-24 lg:py-32 bg-warmWhite">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-darkGray mb-6 leading-tight font-medium">
                    Crafting Extraordinary Spaces
                  </h2>
                  <div className="w-20 h-1 bg-roseGold mb-6 md:mb-8"></div>
                </div>
                
                <p className="text-base md:text-lg lg:text-xl text-darkGray/90 leading-relaxed">
                  With over <strong className="text-roseGold">600+ successful projects</strong> across India's leading cities, 
                  Balaji Design Studio has established itself as a premier interior 
                  design firm dedicated to creating spaces that inspire and delight.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl text-darkGray/80 leading-relaxed">
                  Our team of award-winning creative professionals brings together years of experience 
                  in residential, commercial, and hospitality design to deliver 
                  exceptional results that exceed expectations.
                </p>
                
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-roseGold text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-roseGold/90 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Learn More About Us
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <OptimizedImage
                  src={aboutTeam}
                  alt="Balaji Design Studio - Award-winning interior design team"
                  className="h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl shadow-2xl"
                  objectFit="cover"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-roseGold text-white p-6 md:p-8 rounded-xl shadow-xl">
                  <p className="text-3xl md:text-4xl font-playfair font-bold mb-1">600+</p>
                  <p className="text-xs md:text-sm font-medium">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;