import { ReactNode } from "react";
import CityScrollAnimation from "./CityScrollAnimation";
import OptimizedImage from "./OptimizedImage";

interface HeroSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlay?: boolean;
  overlayOpacity?: string;
  showCityScroll?: boolean;
  credibilityStatement?: string;
}

const HeroSection = ({
  backgroundImage,
  children,
  overlay = true,
  overlayOpacity = "bg-black/30",
  showCityScroll = false,
  credibilityStatement = "600+ Projects Across India's Leading Cities"
}: HeroSectionProps) => {
  return (
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Optimized background image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={backgroundImage}
          alt="Balaji Design Studio - Premium Interior Design"
          className="w-full h-full"
          objectFit="cover"
          priority={true}
        />
      </div>
      
      {overlay && (
        <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[0.5px]`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex-grow flex items-center justify-center">
        <div className="animate-fade-in" style={{ animationDuration: '0.8s' }}>
          {children}
        </div>
      </div>

      {showCityScroll && (
        <div className="w-full relative z-10 mt-auto backdrop-blur-sm">
          {credibilityStatement && (
            <div className="text-center py-8 bg-darkGray/80 px-4 mb-0">
              <p className="text-white font-playfair text-xl md:text-3xl font-semibold max-w-full animate-fade-in" style={{ animationDelay: '0.5s' }}>
                {credibilityStatement}
              </p>
            </div>
          )}
          <CityScrollAnimation speed="medium" pauseOnHover={false} />
        </div>
      )}
    </section>
  );
};

export default HeroSection;