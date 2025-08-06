import aboutTeam from "../assets/about-team.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">
            About Us
          </h1>
          <p className="text-xl text-darkGray/70 max-w-2xl mx-auto">
            Learn more about Balaji Design Studio and our passion for creating exceptional spaces
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <img 
              src="/lovable-uploads/6fa1e20b-cc3d-48c4-8aab-d956fb4cb1e1.png" 
              alt="Balaji Design Studio - Dalpat Suthar" 
              className="h-96 w-full object-cover rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-playfair text-darkGray mb-6">Our Story</h2>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                Founded in 2007 by Dalpat Suthar, Balaji Design Studio has grown from a small studio to a leading interior design firm with over 600 completed projects across all Tier 1 cities in India.
              </p>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                Our approach blends cultural heritage with modern elegance, creating spaces that feel like home no matter the scale or purpose. We believe that thoughtful design has the power to transform not just spaces, but the lives of those who inhabit them.
              </p>
              <p className="text-lg text-darkGray/80 leading-relaxed">
                From Mumbai to Delhi, Bangalore to Chennai, our designs reflect the diverse influences and unique character of each region, while maintaining our signature warmth and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-4xl font-playfair text-roseGold mb-2">600+</h3>
              <p className="text-darkGray/70">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-playfair text-roseGold mb-2">15+</h3>
              <p className="text-darkGray/70">Cities Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-playfair text-roseGold mb-2">17+</h3>
              <p className="text-darkGray/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;