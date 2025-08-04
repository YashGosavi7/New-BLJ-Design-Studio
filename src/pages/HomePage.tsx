import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-lightGray to-warmWhite">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl text-darkGray font-playfair mb-6 leading-tight">
            Balaji Design Studio
          </h1>
          <p className="text-xl md:text-2xl text-darkGray/80 mb-8 max-w-2xl mx-auto">
            <strong>creative creation by creative people</strong>
          </p>
          <Link
            to="/portfolio"
            className="bg-roseGold text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-roseGold/90 transition-colors inline-block"
          >
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-lightGray">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair text-darkGray mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-darkGray/70 max-w-2xl mx-auto">
              A glimpse of our recent work across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Placeholder for featured projects */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
              <div className="h-64 bg-gradient-to-br from-roseGold/20 to-darkGray/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">Sample Project 1</h3>
                <p className="text-darkGray/70 mb-2">Residential</p>
                <p className="text-sm text-darkGray/60">Mumbai, Maharashtra</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
              <div className="h-64 bg-gradient-to-br from-roseGold/20 to-darkGray/10"></div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">Sample Project 2</h3>
                <p className="text-darkGray/70 mb-2">Commercial</p>
                <p className="text-sm text-darkGray/60">Delhi, India</p>
              </div>
            </div>
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
            <div className="bg-gradient-to-br from-roseGold/20 to-darkGray/10 rounded-lg h-96"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;