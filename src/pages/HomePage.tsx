import { Link } from "react-router-dom";
import heroImage from "../assets/hero-mansion.png";
import OptimizedImage from "../components/OptimizedImage";
import CategoryBlocks from "../components/CategoryBlocks";
import CityScrollAnimation from "../components/CityScrollAnimation";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Balaji Design Studio | Premium Interior Design in India</title>
        <meta name="description" content="Balaji Design Studio creates timeless interior and architectural experiences through detail, materiality, and refined spatial thinking. 600+ projects across India." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Premium Hero Section */}
        <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex flex-col overflow-hidden">
          {/* Background Image with subtle dark overlay */}
          <div className="absolute inset-0">
            <OptimizedImage
              src={heroImage}
              alt="Luxury interior design by Balaji Design Studio"
              className="w-full h-full"
              objectFit="cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content - Center aligned */}
          <div className="relative z-10 flex-1 flex items-center justify-center w-full px-6 md:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair mb-4 md:mb-6 leading-tight">
                Balaji Design Studio
              </h1>
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl font-inter font-light tracking-wide mb-8">
                Creative Creation by Creative People
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>

          {/* Tagline and City Scroll Bar at Bottom */}
          <div className="relative z-10 bg-darkGray/80">
            <div className="text-center py-6 md:py-8">
              <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair italic tracking-wide">
                600+ Award-Winning Projects Transforming Spaces Across India
              </p>
            </div>
            <CityScrollAnimation speed="medium" pauseOnHover={false} />
          </div>
        </section>

        {/* Category Blocks Section - Noaidwin Studio Style */}
        <CategoryBlocks />

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