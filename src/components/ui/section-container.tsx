import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'gradient';
}

const SectionContainer = ({ 
  children, 
  className, 
  id,
  background = 'white' 
}: SectionContainerProps) => {
  const bgClasses = {
    white: 'bg-warmWhite',
    gray: 'bg-lightGray/20',
    gradient: 'bg-gradient-to-b from-warmWhite via-lightGray/10 to-warmWhite'
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        bgClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
