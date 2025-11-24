import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  aspectRatio?: string;
  blurhash?: string;
  sizes?: string;
}

// Helper function to generate responsive image URLs (if using a CDN)
const getOptimizedSrc = (src: string, width?: number): string => {
  // If you're using a CDN like Cloudinary, Imgix, or similar, add optimization here
  // Example: return `${src}?w=${width}&q=80&auto=format`;
  return src;
};

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  objectFit = 'cover',
  aspectRatio,
  blurhash,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : '');
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload priority images immediately
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setImageSrc(src); // Fallback to original on error
      };
      return;
    }

    // Use Intersection Observer for lazy loading
    if (!isInView && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before image enters viewport
          threshold: 0.01
        }
      );

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [src, priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback: try to load original image
    if (imageSrc !== src) {
      setImageSrc(src);
    }
    setIsLoaded(true); // Show something even if image fails
  };

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden bg-muted', className)}
      style={{ aspectRatio: aspectRatio || 'auto' }}
    >
      {/* LQIP blur placeholder - improved with better animation */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-300/50 animate-shimmer" />
        </div>
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={imageSrc || src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            objectFit === 'cover' ? 'object-cover' : 'object-contain',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
