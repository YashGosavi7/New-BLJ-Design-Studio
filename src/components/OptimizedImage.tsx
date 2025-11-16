import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  aspectRatio?: string;
  blurhash?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  objectFit = 'cover',
  aspectRatio,
  blurhash
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Preload priority images
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
    } else {
      setImageSrc(src);
    }
  }, [src, priority]);

  return (
    <div 
      className={cn('relative overflow-hidden bg-muted', className)}
      style={{ aspectRatio: aspectRatio || 'auto' }}
    >
      {/* LQIP blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted-foreground/10 to-muted"
          aria-hidden="true"
        />
      )}
      
      <img
        src={imageSrc || src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full transition-opacity duration-500',
          objectFit === 'cover' ? 'object-cover' : 'object-contain',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
};

export default OptimizedImage;
