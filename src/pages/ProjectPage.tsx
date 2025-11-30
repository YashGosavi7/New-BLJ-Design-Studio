import { useParams, Navigate, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import ImageLightbox from "../components/ImageLightbox";
import { Helmet } from "react-helmet";
import { MessageCircle, ArrowLeft } from "lucide-react";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const phoneNumber = "919762000000";
  const whatsappMessage = encodeURIComponent(`Hello! I'm interested in a project similar to ${project.title}. I'd like to discuss my requirements.`);

  return (
    <>
      <Helmet>
        <title>{project.title} | {project.category} | Balaji Design Studio</title>
        <meta name="description" content={`${project.description.substring(0, 155)}...`} />
      </Helmet>
      
      <article className="min-h-screen pt-24 md:pt-32 bg-background">
        {/* Back Navigation */}
        <div className="container-editorial py-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-inter text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        <header className="pt-10 pb-5 border-b border-border">
          <div className="max-w-[900px] mx-auto px-6 animate-fade-in">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-inter mb-4 block">
              {project.category}
            </span>
            
            <h1 
              className="text-foreground mb-2.5"
              style={{ fontSize: '54px', lineHeight: '1.1' }}
            >
              {project.title}
            </h1>
            
            {project.tagline && (
              <p className="text-xl md:text-2xl text-muted-foreground mt-0 mb-5 font-playfair italic">
                {project.tagline}
              </p>
            )}
            
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-inter font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#128C7E]"
            >
              <MessageCircle size={18} />
              Enquire Now
            </a>
          </div>
        </header>

        {/* Project Images Gallery */}
        <section className="section-padding">
          <div className="container-editorial">
            <ImageLightbox 
              images={project.images}
              altPrefix={`${project.title} - ${project.category} interior design`}
            />
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
              {/* Description */}
              <div className="lg:col-span-3 space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair text-foreground mb-6">
                    Project Overview
                  </h2>
                  <div className="separator-thick mb-8" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {project.designer && (
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <span className="text-sm tracking-widest uppercase text-muted-foreground font-inter">
                      Designer
                    </span>
                    <span className="w-8 h-px bg-border" />
                    <span className="text-foreground font-medium">{project.designer}</span>
                  </div>
                )}
              </div>

              {/* Features Sidebar */}
              <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-background p-8 md:p-10">
                  <h3 className="text-xl font-playfair text-foreground mb-8">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-4 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground">
          <div className="container-editorial text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-background mb-6">
                Inspired by This Project?
              </h2>
              <p className="text-background/70 mb-10">
                Let's discuss how we can create something equally beautiful for your space.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-background border border-background"
              >
                <MessageCircle size={20} />
                Start a Conversation
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProjectPage;