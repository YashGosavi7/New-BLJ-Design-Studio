import { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  showCityScroll?: boolean;
  credibilityStatement?: string;
  className?: string;
}

const HeroSection = ({ 
  children, 
  backgroundImage, 
  showCityScroll = false, 
  credibilityStatement,
  className = ""
}: HeroSectionProps) => {
  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Pune", "Hyderabad", 
    "Kolkata", "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Kanpur"
  ];

  return (
    <section 
      className={`relative min-h-screen flex flex-col justify-center ${className}`}
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40"></div>}
      
      <div className="relative z-10 flex-1 flex items-center">
        {children}
      </div>

      {/* Credibility Statement */}
      {credibilityStatement && (
        <div className="relative z-10 text-center pb-8">
          <p className="text-white/90 text-lg font-medium bg-black/20 backdrop-blur-sm inline-block px-6 py-3 rounded-lg border border-white/20">
            {credibilityStatement}
          </p>
        </div>
      )}

      {/* City Scroll */}
      {showCityScroll && (
        <div className="relative z-10 bg-black/30 backdrop-blur-sm border-t border-white/20 py-4 overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap">
            {[...cities, ...cities].map((city, index) => (
              <span 
                key={index}
                className="inline-block text-white/80 text-sm font-medium mx-8 hover:text-roseGold transition-colors"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;