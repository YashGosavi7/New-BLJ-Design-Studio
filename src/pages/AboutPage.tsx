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
            <div>
              <h2 className="text-3xl font-playfair text-darkGray mb-6">Our Story</h2>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                Founded with a vision to transform spaces into extraordinary experiences, 
                Balaji Design Studio has been at the forefront of interior design innovation 
                for over a decade.
              </p>
              <p className="text-lg text-darkGray/80 leading-relaxed">
                Our journey began with a simple belief: every space has the potential to 
                inspire and enhance the lives of those who inhabit it. Today, with 600+ 
                successful projects across India's leading cities, we continue to push 
                the boundaries of design excellence.
              </p>
            </div>
            <img 
              src={aboutTeam} 
              alt="Balaji Design Studio Team" 
              className="h-96 w-full object-cover rounded-lg"
            />
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
              <h3 className="text-4xl font-playfair text-roseGold mb-2">10+</h3>
              <p className="text-darkGray/70">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;