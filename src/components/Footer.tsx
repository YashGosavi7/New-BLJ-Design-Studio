import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-editorial py-16 md:py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-playfair text-background mb-4">
              Balaji Design Studio
            </h3>
            <p className="text-background/60 max-w-md leading-relaxed font-inter mb-6">
              Creating timeless interior and architectural experiences through detail, materiality, and refined spatial thinking.
            </p>
            <a
              href="https://www.instagram.com/balaji_design_studio_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
              <span className="text-sm font-inter">Follow us</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-background/60 font-inter mb-6">
              Navigation
            </h4>
            <nav className="space-y-4">
              <Link to="/" className="block text-background/80 hover:text-background transition-colors font-inter text-sm">Home</Link>
              <Link to="/portfolio" className="block text-background/80 hover:text-background transition-colors font-inter text-sm">Portfolio</Link>
              <Link to="/services" className="block text-background/80 hover:text-background transition-colors font-inter text-sm">Services</Link>
              <Link to="/contact" className="block text-background/80 hover:text-background transition-colors font-inter text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-background/60 font-inter mb-6">Contact</h4>
            <div className="space-y-4 text-sm font-inter">
              <a href="tel:+919762000000" className="block text-background/80 hover:text-background transition-colors">+91 97620 00000</a>
              <a href="mailto:balajidesignstudio@hotmail.com" className="block text-background/80 hover:text-background transition-colors">balajidesignstudio@hotmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs tracking-widest uppercase font-inter">© {currentYear} Balaji Design Studio</p>
          <p className="text-background/40 text-xs tracking-widest uppercase font-inter">Design With Intention</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;