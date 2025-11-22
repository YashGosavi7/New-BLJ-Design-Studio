import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { cn } from '@/lib/utils';

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
  gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
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
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-roseGold focus:ring-offset-2"
            aria-label={`View ${altPrefix} ${index + 1} in fullscreen`}
          >
            <img
              src={image}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              loading={index < 3 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-darkGray font-medium text-sm">Click to expand</span>
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
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </>
  );
};

export default ImageLightbox;
