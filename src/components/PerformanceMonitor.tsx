import { useEffect } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import { performanceConfig } from '@/lib/performanceConfig';

const PerformanceMonitor = () => {
  const metrics = usePerformanceMonitor();

  useEffect(() => {
    // Development-only performance monitoring
    if (process.env.NODE_ENV === 'development') {
      const logPerformance = () => {
        console.group('🚀 Performance Metrics');
        
        if (metrics.lcp) {
          const lcpStatus = metrics.lcp <= performanceConfig.thresholds.lcp ? '✅' : '⚠️';
          console.log(`${lcpStatus} LCP: ${metrics.lcp.toFixed(2)}ms`);
        }
        
        if (metrics.fid) {
          const fidStatus = metrics.fid <= performanceConfig.thresholds.fid ? '✅' : '⚠️';
          console.log(`${fidStatus} FID: ${metrics.fid.toFixed(2)}ms`);
        }
        
        if (metrics.cls !== undefined) {
          const clsStatus = metrics.cls <= performanceConfig.thresholds.cls ? '✅' : '⚠️';
          console.log(`${clsStatus} CLS: ${metrics.cls.toFixed(3)}`);
        }
        
        if (metrics.ttfb) {
          console.log(`⏱️ TTFB: ${metrics.ttfb.toFixed(2)}ms`);
        }
        
        console.groupEnd();
      };

      // Log metrics after a delay to allow for measurements
      const timer = setTimeout(logPerformance, 3000);
      return () => clearTimeout(timer);
    }
  }, [metrics]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceMonitor;