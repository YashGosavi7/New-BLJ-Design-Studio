// Performance optimization configuration based on the JSON prompt
export const performanceConfig = {
  // Image optimization settings
  images: {
    formats: ['webp', 'avif', 'jpeg'],
    quality: {
      high: 85,
      medium: 65,
      low: 45
    },
    sizes: {
      thumbnail: 300,
      medium: 800,
      large: 1200,
      xlarge: 1920
    },
    lazyLoading: {
      threshold: 0.1,
      rootMargin: '50px'
    }
  },

  // Critical resource hints
  preloadResources: [
    // Fonts
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
    // Key images (first fold)
    { href: '/assets/hero-living-room.jpg', as: 'image' }
  ],

  // Performance thresholds (Core Web Vitals)
  thresholds: {
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms) 
    cls: 0.1   // Cumulative Layout Shift
  },

  // Lazy loading configuration
  lazyLoading: {
    images: true,
    iframes: true,
    videos: true,
    sections: true
  },

  // Bundle optimization
  bundling: {
    minify: true,
    treeshaking: true,
    codeSplitting: true
  }
};

// Performance monitoring utilities
export const performanceMetrics = {
  // Track performance marks
  mark: (name: string) => {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  },

  // Measure between marks
  measure: (name: string, startMark?: string, endMark?: string) => {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        const measures = performance.getEntriesByName(name, 'measure');
        return measures[measures.length - 1]?.duration || 0;
      } catch (e) {
        console.warn(`Performance measurement failed for ${name}:`, e);
        return 0;
      }
    }
    return 0;
  },

  // Get navigation timing
  getNavigationTiming: () => {
    if (typeof performance !== 'undefined' && performance.getEntriesByType) {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return nav ? {
        domContentLoaded: nav.domContentLoadedEventEnd - nav.navigationStart,
        loadComplete: nav.loadEventEnd - nav.navigationStart,
        ttfb: nav.responseStart - nav.requestStart,
        domInteractive: nav.domInteractive - nav.navigationStart
      } : null;
    }
    return null;
  }
};