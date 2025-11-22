import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/balaji-logo.png";

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition-opacity ml-4 md:ml-6 mt-3"
          >
            <img
              src={logoImage}
              alt="Balaji Design Studio"
              className="w-[130px] md:w-[160px] lg:w-[180px] h-auto object-contain brightness-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-lato font-semibold text-base lg:text-lg tracking-wide py-2 px-1 transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "text-roseGold font-bold"
                    : "text-darkGray hover:text-roseGold"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-roseGold transform origin-left transition-transform duration-300 ${
                  isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-darkGray hover:text-roseGold transition-colors hover:scale-110 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-lightGray animate-fade-in" aria-label="Mobile navigation">
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 px-4 font-lato font-semibold text-base tracking-wide transition-colors ${
                    isActive(item.path)
                      ? "text-roseGold bg-roseGold/10 font-bold"
                      : "text-darkGray hover:text-roseGold hover:bg-roseGold/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;