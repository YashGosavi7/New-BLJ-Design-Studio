/**
 * Utility functions for preloading images to improve performance
 */

/**
 * Preloads a single image
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preloads multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(src => preloadImage(src).catch(err => {
    console.warn('Image preload failed:', err);
    return Promise.resolve();
  })));
};

/**
 * Preloads critical images (first few images in viewport)
 */
export const preloadCriticalImages = (images: string[], count: number = 4): void => {
  const criticalImages = images.slice(0, count);
  preloadImages(criticalImages).catch(err => {
    console.warn('Critical images preload failed:', err);
  });
};

/**
 * Creates a low-quality placeholder data URL
 */
export const createPlaceholder = (width: number = 400, height: number = 300): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a simple gradient placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#e5e7eb');
    gradient.addColorStop(1, '#d1d5db');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

