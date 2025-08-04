import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-roseGold">
              Balaji Design Studio
            </h3>
            <p className="text-lightGray mb-4 leading-relaxed">
              Creating beautiful, functional spaces that reflect your unique style and enhance your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-lightGray hover:text-roseGold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-lightGray hover:text-roseGold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-lightGray hover:text-roseGold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-lightGray hover:text-roseGold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-lightGray hover:text-roseGold transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-lightGray hover:text-roseGold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-lightGray hover:text-roseGold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-lightGray hover:text-roseGold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-lightGray">
              <li>Residential Design</li>
              <li>Commercial Spaces</li>
              <li>Office Interiors</li>
              <li>Hospitality Design</li>
              <li>Space Planning</li>
              <li>3D Visualization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-roseGold" />
                <span className="text-lightGray">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-roseGold" />
                <span className="text-lightGray">info@balajidesign.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-roseGold mt-1" />
                <span className="text-lightGray">
                  123 Design Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-lightGray/20 mt-8 pt-8 text-center">
          <p className="text-lightGray">
            © {new Date().getFullYear()} Balaji Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;