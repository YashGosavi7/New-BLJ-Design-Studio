interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, center = false, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-darkGray mb-6 font-semibold">
        {title}
      </h2>
      {center && <div className="w-24 h-1 bg-roseGold mx-auto mb-6"></div>}
      {subtitle && (
        <p className="text-lg md:text-xl text-darkGray/70 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;