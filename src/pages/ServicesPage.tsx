import { Helmet } from "react-helmet";
import { Home, Building2, Hotel, Ruler, Eye, ClipboardList } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a beautiful, functional space that reflects your personality.",
      features: ["Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Home Offices"],
      icon: Home
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that boost productivity and employee satisfaction.",
      features: ["Office Interiors", "Retail Spaces", "Restaurants", "Showrooms", "Co-working Spaces"],
      icon: Building2
    },
    {
      title: "Hospitality Design",
      description: "Design memorable experiences for guests in hotels, resorts, and entertainment venues.",
      features: ["Hotels", "Resorts", "Cafes", "Lounges", "Event Spaces"],
      icon: Hotel
    },
    {
      title: "Space Planning",
      description: "Optimize your space layout for maximum functionality and aesthetic appeal.",
      features: ["Layout Design", "Traffic Flow", "Furniture Placement", "Storage Solutions", "Lighting Design"],
      icon: Ruler
    },
    {
      title: "3D Visualization",
      description: "See your space come to life before construction begins with our realistic 3D renders.",
      features: ["3D Modeling", "Virtual Tours", "Material Visualization", "Lighting Simulation", "Design Iterations"],
      icon: Eye
    },
    {
      title: "Project Management",
      description: "Full-service project management from concept to completion.",
      features: ["Timeline Management", "Vendor Coordination", "Quality Control", "Budget Management", "Progress Updates"],
      icon: ClipboardList
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Balaji Design Studio - Premium Interior Design Solutions</title>
        <meta name="description" content="Comprehensive interior design services including residential, commercial, hospitality, space planning, 3D visualization, and project management. Transform your space with expert designers." />
        <meta name="keywords" content="interior design services, residential design, commercial interiors, hospitality design, space planning, 3D visualization, project management, Mumbai designers" />
      </Helmet>
      
      <article className="min-h-screen pt-20 bg-gradient-to-b from-warmWhite to-lightGray/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-darkGray mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-darkGray/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive interior design solutions tailored to your vision and needs
            </p>
            <div className="w-24 h-1 bg-roseGold mx-auto mt-6"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <article 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg p-8 hover-lift hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-lightGray/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-roseGold/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-roseGold" size={24} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-playfair font-semibold text-darkGray">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-darkGray/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm md:text-base text-darkGray/70 flex items-start">
                        <span className="w-2 h-2 bg-roseGold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-r from-roseGold/10 via-lightGray/20 to-roseGold/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-playfair text-darkGray mb-4">
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg md:text-xl text-darkGray/80 mb-8">
                Let's discuss your project and bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-block bg-roseGold text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-roseGold/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServicesPage;