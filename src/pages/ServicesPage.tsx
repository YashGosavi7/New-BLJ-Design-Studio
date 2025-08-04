const ServicesPage = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a beautiful, functional space that reflects your personality.",
      features: ["Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Home Offices"]
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that boost productivity and employee satisfaction.",
      features: ["Office Interiors", "Retail Spaces", "Restaurants", "Showrooms", "Co-working Spaces"]
    },
    {
      title: "Hospitality Design",
      description: "Design memorable experiences for guests in hotels, resorts, and entertainment venues.",
      features: ["Hotels", "Resorts", "Cafes", "Lounges", "Event Spaces"]
    },
    {
      title: "Space Planning",
      description: "Optimize your space layout for maximum functionality and aesthetic appeal.",
      features: ["Layout Design", "Traffic Flow", "Furniture Placement", "Storage Solutions", "Lighting Design"]
    },
    {
      title: "3D Visualization",
      description: "See your space come to life before construction begins with our realistic 3D renders.",
      features: ["3D Modeling", "Virtual Tours", "Material Visualization", "Lighting Simulation", "Design Iterations"]
    },
    {
      title: "Project Management",
      description: "Full-service project management from concept to completion.",
      features: ["Timeline Management", "Vendor Coordination", "Quality Control", "Budget Management", "Progress Updates"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-4">
            Our Services
          </h1>
          <p className="text-xl text-darkGray/70 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover-lift">
              <h3 className="text-xl font-playfair font-semibold text-darkGray mb-4">
                {service.title}
              </h3>
              <p className="text-darkGray/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-darkGray/60 flex items-center">
                    <span className="w-2 h-2 bg-roseGold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-darkGray/80 mb-6">
            Ready to transform your space? Let's discuss your project.
          </p>
          <a
            href="/contact"
            className="bg-roseGold text-white px-8 py-3 rounded-lg hover:bg-roseGold/90 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;