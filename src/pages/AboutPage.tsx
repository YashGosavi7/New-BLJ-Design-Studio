import aboutTeam from "../assets/about-team.jpg";
import OptimizedImage from "../components/OptimizedImage";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Balaji Design Studio - Expert Interior Designers</title>
        <meta name="description" content="Meet the award-winning team behind Balaji Design Studio. 10+ years of design excellence, 600+ projects, and 15+ cities served. Your trusted interior design partner." />
      </Helmet>
      
      <article className="min-h-screen pt-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <header className="text-center mb-16 md:mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair text-darkGray mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-darkGray/70 max-w-3xl mx-auto leading-relaxed">
              Transforming visions into reality with passion, creativity, and exceptional craftsmanship
            </p>
          </header>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">Our Story</h2>
                  <div className="w-20 h-1 bg-roseGold mb-6"></div>
                </div>
                
                <p className="text-lg md:text-xl text-darkGray/90 leading-relaxed">
                  Founded with a vision to transform spaces into extraordinary experiences, 
                  <strong className="text-roseGold"> Balaji Design Studio</strong> has been at the forefront of interior design innovation 
                  for over a decade.
                </p>
                
                <p className="text-lg md:text-xl text-darkGray/80 leading-relaxed">
                  Our journey began with a simple belief: every space has the potential to 
                  inspire and enhance the lives of those who inhabit it. Today, with <strong>600+ 
                  successful projects</strong> across India's leading cities, we continue to push 
                  the boundaries of design excellence.
                </p>
              </div>
              
              <OptimizedImage
                src={aboutTeam}
                alt="Balaji Design Studio - Professional interior design team in action"
                className="h-[450px] md:h-[550px] w-full rounded-2xl shadow-2xl"
                objectFit="cover"
              />
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-16 bg-gradient-to-br from-roseGold/10 to-lightGray/30 rounded-3xl p-12 md:p-16">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl md:text-6xl font-playfair text-roseGold mb-3 font-bold">600+</h3>
                <p className="text-lg md:text-xl text-darkGray/80 font-medium">Projects Completed</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl md:text-6xl font-playfair text-roseGold mb-3 font-bold">15+</h3>
                <p className="text-lg md:text-xl text-darkGray/80 font-medium">Cities Served</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl md:text-6xl font-playfair text-roseGold mb-3 font-bold">10+</h3>
                <p className="text-lg md:text-xl text-darkGray/80 font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AboutPage;