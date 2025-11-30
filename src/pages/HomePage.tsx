import { Link } from "react-router-dom";
import heroImage from "../assets/hero-mansion.png";
import ProjectCard from "../components/ProjectCard";
import OptimizedImage from "../components/OptimizedImage";
import projectsData from "../data/projectsData";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const featuredProjects = projectsData.filter(project => project.isFeatured);

  return (
    <>
      <Helmet>
        <title>Balaji Design Studio | Premium Interior Design in India</title>
        <meta name="description" content="Balaji Design Studio creates timeless interior and architectural experiences through detail, materiality, and refined spatial thinking. 600+ projects across India." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Premium Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Background Image with subtle dark overlay */}
          <div className="absolute inset-0">
            <OptimizedImage
              src={heroImage}
              alt="Luxury interior design by Balaji Design Studio"
              className="w-full h-full"
              objectFit="cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content - Center-left aligned */}
          <div className="relative z-10 container-editorial w-full">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-white mb-8 leading-none">
                Design That<br />Defines Spaces.
              </h1>
              <p className="text-white/80 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl font-inter font-light leading-relaxed">
                Balaji Design Studio creates timeless interior and architectural experiences through detail, materiality, and refined spatial thinking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center bg-white text-black px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-black hover:text-white border border-white"
                >
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-transparent text-white px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black border border-white/50"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center text-white/60">
              <span className="text-xs tracking-widest uppercase mb-4 font-inter">Scroll</span>
              <div className="w-px h-12 bg-white/30" />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section-padding bg-background">
          <div className="container-editorial">
            {/* Section Header */}
            <div className="mb-16 md:mb-24 animate-fade-in">
              <div className="separator-thick mb-8" />
              <h2 className="text-foreground mb-6">Selected Projects</h2>
              <p className="text-muted-foreground max-w-xl">
                A curated collection of our finest residential, commercial, and hospitality designs across India.
              </p>
            </div>

            {/* Projects Grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  image={project.images[0]}
                  completionYear={project.completionYear}
                  index={index}
                  priority={index < 2}
                />
              ))}
            </div>

            {/* View All CTA */}
            <div className="mt-16 md:mt-24 text-center animate-fade-in">
              <Link
                to="/portfolio"
                className="btn-outline inline-block"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Studio Statement */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="separator-thick mx-auto mb-12" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-playfair text-foreground leading-relaxed mb-8">
                "We believe great design is invisible—it simply feels right. Every space we create tells a story of craftsmanship, intention, and timeless beauty."
              </blockquote>
              <cite className="text-sm tracking-widest uppercase text-muted-foreground font-inter not-italic">
                — Balaji Design Studio
              </cite>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-background mb-6">Let's Build Something Beautiful.</h2>
              <p className="text-background/70 mb-12 max-w-lg mx-auto">
                Ready to transform your space? We'd love to hear about your project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-background text-foreground px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-background border border-background"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;