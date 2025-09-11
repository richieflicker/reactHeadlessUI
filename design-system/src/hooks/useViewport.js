import { useState, useEffect } from 'react';
import themeJson from '../theme/theme.json';

/**
 * Custom hook for viewport detection and breakpoint tracking
 * @returns {Object} viewport - Object containing width, height, and currentBreakpoint
 */
export const useViewport = () => {
  const [viewport, setViewport] = useState({ 
    width: 0, 
    height: 0, 
    currentBreakpoint: '' 
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      let currentBreakpoint = '';
      if (width >= parseInt(themeJson.breakpoints['2xl'])) {
        currentBreakpoint = '2xl';
      } else if (width >= parseInt(themeJson.breakpoints.xl)) {
        currentBreakpoint = 'xl';
      } else if (width >= parseInt(themeJson.breakpoints.lg)) {
        currentBreakpoint = 'lg';
      } else if (width >= parseInt(themeJson.breakpoints.md)) {
        currentBreakpoint = 'md';
      } else if (width >= parseInt(themeJson.breakpoints.sm)) {
        currentBreakpoint = 'sm';
      } else {
        currentBreakpoint = 'xs (below sm)';
      }

      setViewport({ width, height, currentBreakpoint });
    };

    // Initial update
    updateViewport();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateViewport);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
};
