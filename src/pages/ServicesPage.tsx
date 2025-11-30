import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Home, Building2, Hotel, Ruler, Eye, ClipboardList } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a beautiful, functional space that reflects your personality and lifestyle.",
      features: ["Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Home Offices"],
      icon: Home
    },
    {
      title: "Commercial Spaces",
      description: "Create inspiring work environments that boost productivity and leave lasting impressions.",
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
      description: "See your space come to life before construction begins with our realistic renders.",
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
        <title>Services | Balaji Design Studio</title>
        <meta name="description" content="Comprehensive interior design services including residential, commercial, hospitality, space planning, 3D visualization, and project management." />
      </Helmet>
      
      <article className="min-h-screen pt-24 md:pt-32 bg-background">
        {/* Header Section */}
        <section className="section-padding border-b border-border">
          <div className="container-editorial">
            <div className="max-w-3xl animate-fade-in">
              <div className="separator-thick mb-8" />
              <h1 className="text-foreground mb-8">Our Services</h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                Comprehensive interior design solutions tailored to your vision, delivered with precision and care.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <article 
                    key={index} 
                    className="bg-background p-8 md:p-12 animate-fade-in group hover:bg-muted transition-colors duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-8">
                      <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-foreground transition-colors duration-300">
                        <IconComponent className="text-foreground" size={24} />
                      </div>
                      <h2 className="text-xl md:text-2xl font-playfair text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start font-inter">
                          <span className="w-1 h-1 bg-foreground rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-background mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-background/70 mb-10">
                Let's discuss your project and bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-background text-foreground px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-background border border-background"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ServicesPage;