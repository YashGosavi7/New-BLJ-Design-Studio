import { Button } from "./ui/button";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioFilter = ({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;