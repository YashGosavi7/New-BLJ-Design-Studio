import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { cn } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';

interface ImageLightboxProps {
  images: string[];
  altPrefix?: string;
  className?: string;
  gridCols?: string;
}

const ImageLightbox = ({ 
  images, 
  altPrefix = 'Gallery image',
  className,
  gridCols = 'grid-cols-1 md:grid-cols-2'
}: ImageLightboxProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image,
  }));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={cn(`grid ${gridCols} gap-4 md:gap-6`, className)}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden bg-muted cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
            aria-label={`View ${altPrefix} ${index + 1} in fullscreen`}
          >
            <OptimizedImage
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full aspect-[4/3] image-hover-zoom"
              objectFit="cover"
              priority={index < 4}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-background text-foreground px-4 py-2 text-xs tracking-widest uppercase font-inter">
                  View
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        animation={{ fade: 300 }}
        carousel={{
          finite: false,
          preload: 2,
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.98)' },
        }}
      />
    </>
  );
};

export default ImageLightbox;