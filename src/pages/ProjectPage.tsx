import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-darkGray mb-8 text-center">
          Project Details
        </h1>
        <p className="text-center text-darkGray/70 mb-12">
          Project ID: {projectId}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="h-96 bg-gradient-to-br from-roseGold/20 to-darkGray/10 rounded-lg mb-8"></div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="font-playfair text-darkGray">Project Overview</h2>
            <p className="text-darkGray/80">
              This project showcases our expertise in creating beautiful, functional spaces
              that perfectly balance aesthetics with practicality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;