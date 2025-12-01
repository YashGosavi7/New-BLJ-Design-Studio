import { useParams, Navigate, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import ImageLightbox from "../components/ImageLightbox";
import { Helmet } from "react-helmet";
import { MessageCircle, ArrowLeft } from "lucide-react";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const phoneNumber = "919762000000";
  const whatsappMessage = encodeURIComponent(`Hello! I'm interested in a project similar to ${project.title}. I'd like to discuss my requirements.`);

  return (
    <>
      <Helmet>
        <title>{project.title} | {project.category} | Balaji Design Studio</title>
        <meta name="description" content={`${project.description.substring(0, 155)}...`} />
      </Helmet>
      
      <article className="min-h-screen pt-24 md:pt-28 bg-background">
        {/* Back Navigation */}
        <div className="max-w-[1300px] mx-auto px-5 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-inter text-sm tracking-widest uppercase"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Project Header - Minimal */}
        <header className="pt-0 pb-5">
          <div className="max-w-[1300px] mx-auto px-5 animate-fade-in">
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-inter mb-3 block">
              {project.category}
            </span>
            
            <h1 
              className="text-foreground font-semibold"
              style={{ fontSize: '42px', lineHeight: '1.1', margin: '20px 0' }}
            >
              {project.title}
            </h1>
            
            {project.tagline && (
              <p className="text-lg text-muted-foreground font-playfair italic mb-0">
                {project.tagline}
              </p>
            )}
          </div>
        </header>

        {/* Project Images Gallery - Main Focus */}
        <section className="py-5">
          <div className="max-w-[1300px] mx-auto px-5">
            <ImageLightbox 
              images={project.images}
              altPrefix={`${project.title} - ${project.category} interior design`}
            />
          </div>
        </section>

        {/* CTA Section - Bottom */}
        <section className="py-16 bg-foreground">
          <div className="max-w-[1300px] mx-auto px-5 text-center">
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-background mb-6 text-2xl md:text-3xl font-playfair">
                Inspired by This Project?
              </h2>
              <p className="text-background/70 mb-8">
                Let's discuss how we can create something equally beautiful for your space.
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-4 font-inter font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-transparent hover:text-background border border-background"
              >
                <MessageCircle size={20} />
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default ProjectPage;