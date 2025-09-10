import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import themeJson from '../theme/theme.json';

export default {
  title: 'Design Tokens/Breakpoints',
  component: () => null,
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeJson}>
        <div style={{ padding: '2rem', fontFamily: 'var(--ds-typography-fontFamily-sans)' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Breakpoints design tokens showcase including responsive breakpoints with visual examples and current viewport detection.'
      }
    }
  }
};

// Breakpoints Overview
export const BreakpointsOverview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Breakpoints Overview</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.breakpoints).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: '100px',
              height: '60px',
              backgroundColor: 'var(--ds-colors-primary-500)',
              borderRadius: 'var(--ds-radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              {key}
            </div>
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '500',
              minWidth: '60px'
            }}>
              {key}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '80px'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-400)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              var(--ds-breakpoints-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Current Viewport Detection
const ViewportDetector = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0, currentBreakpoint: '' });

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

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return (
    <div style={{ 
      padding: '1rem',
      backgroundColor: 'var(--ds-colors-primary-50)',
      border: '2px solid var(--ds-colors-primary-200)',
      borderRadius: 'var(--ds-radius-base)',
      marginBottom: '2rem'
    }}>
      <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-primary-700)' }}>
        Current Viewport
      </h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--ds-colors-primary-600)' }}>
          <strong>Width:</strong> {viewport.width}px
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--ds-colors-primary-600)' }}>
          <strong>Height:</strong> {viewport.height}px
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--ds-colors-primary-600)' }}>
          <strong>Breakpoint:</strong> {viewport.currentBreakpoint}
        </div>
      </div>
    </div>
  );
};

export const CurrentViewport = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Current Viewport Detection</h2>
      <ViewportDetector />
      <p style={{ fontSize: '0.875rem', color: 'var(--ds-colors-neutral-600)' }}>
        Resize your browser window to see the current viewport dimensions and active breakpoint update in real-time.
      </p>
    </div>
  )
};

// Responsive Grid Example
export const ResponsiveGrid = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Responsive Grid Example</h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'var(--ds-colors-neutral-50)',
        borderRadius: 'var(--ds-radius-base)'
      }}>
        {Object.entries(themeJson.breakpoints).map(([key, value]) => (
          <div key={key} style={{ 
            padding: '1rem',
            backgroundColor: 'white',
            border: '2px solid var(--ds-colors-primary-200)',
            borderRadius: 'var(--ds-radius-base)',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--ds-colors-primary-700)',
              marginBottom: '0.5rem'
            }}>
              {key}
            </div>
            <div style={{ 
              fontSize: '0.875rem',
              color: 'var(--ds-colors-primary-600)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              marginBottom: '0.5rem'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.75rem',
              color: 'var(--ds-colors-neutral-500)'
            }}>
              {key === 'sm' && 'Mobile landscape'}
              {key === 'md' && 'Tablet portrait'}
              {key === 'lg' && 'Tablet landscape'}
              {key === 'xl' && 'Desktop'}
              {key === '2xl' && 'Large desktop'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Breakpoint Ranges
export const BreakpointRanges = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Breakpoint Ranges</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)',
          backgroundColor: 'var(--ds-colors-neutral-50)'
        }}>
          <div style={{ 
            width: '100px',
            height: '40px',
            backgroundColor: 'var(--ds-colors-primary-500)',
            borderRadius: 'var(--ds-radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            xs
          </div>
          <div style={{ 
            fontSize: '1rem',
            fontWeight: '500',
            minWidth: '100px'
          }}>
            Extra Small
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            minWidth: '120px'
          }}>
            &lt; 640px
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-400)'
          }}>
            Mobile phones
          </div>
        </div>

        {Object.entries(themeJson.breakpoints).map(([key, value], index) => {
          const nextBreakpoint = Object.values(themeJson.breakpoints)[index + 1];
          const range = nextBreakpoint ? `${value} - ${parseInt(nextBreakpoint) - 1}px` : `≥ ${value}`;
          
          return (
            <div key={key} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)'
            }}>
              <div style={{ 
                width: '100px',
                height: '40px',
                backgroundColor: 'var(--ds-colors-primary-500)',
                borderRadius: 'var(--ds-radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {key}
              </div>
              <div style={{ 
                fontSize: '1rem',
                fontWeight: '500',
                minWidth: '100px'
              }}>
                {key === 'sm' && 'Small'}
                {key === 'md' && 'Medium'}
                {key === 'lg' && 'Large'}
                {key === 'xl' && 'Extra Large'}
                {key === '2xl' && '2X Large'}
              </div>
              <div style={{ 
                fontSize: '0.875rem', 
                color: 'var(--ds-colors-neutral-500)',
                fontFamily: 'var(--ds-typography-fontFamily-mono)',
                minWidth: '120px'
              }}>
                {range}
              </div>
              <div style={{ 
                fontSize: '0.875rem', 
                color: 'var(--ds-colors-neutral-400)'
              }}>
                {key === 'sm' && 'Mobile landscape'}
                {key === 'md' && 'Tablet portrait'}
                {key === 'lg' && 'Tablet landscape'}
                {key === 'xl' && 'Desktop'}
                {key === '2xl' && 'Large desktop'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

// CSS Media Query Examples
export const CSSMediaQueryExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>CSS Media Query Examples</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.breakpoints).map(([key, value]) => (
          <div key={key} style={{ 
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)',
            backgroundColor: 'var(--ds-colors-neutral-50)'
          }}>
            <h3 style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '0.5rem',
              color: 'var(--ds-colors-neutral-700)'
            }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Breakpoint
            </h3>
            <div style={{ 
              fontSize: '0.875rem',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              backgroundColor: 'var(--ds-colors-neutral-100)',
              padding: '0.75rem',
              borderRadius: 'var(--ds-radius-sm)',
              marginBottom: '0.5rem',
              overflow: 'auto'
            }}>
              {`@media (min-width: ${value}) {
  /* Styles for ${key} and up */
}`}
            </div>
            <div style={{ 
              fontSize: '0.75rem',
              color: 'var(--ds-colors-neutral-500)'
            }}>
              Use this media query to apply styles for {key} breakpoint and larger screens
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Responsive Typography Example
export const ResponsiveTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Responsive Typography Example</h2>
      
      <div style={{ 
        padding: '1rem',
        border: '1px solid var(--ds-colors-neutral-200)',
        borderRadius: 'var(--ds-radius-base)',
        backgroundColor: 'var(--ds-colors-neutral-50)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '1rem',
          color: 'var(--ds-colors-neutral-800)'
        }}>
          Responsive Heading
        </h1>
        <p style={{ 
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          lineHeight: '1.6',
          color: 'var(--ds-colors-neutral-600)',
          marginBottom: '1rem'
        }}>
          This heading and paragraph use CSS clamp() to scale responsively across all breakpoints. 
          The text will be smaller on mobile devices and larger on desktop screens.
        </p>
        <div style={{ 
          fontSize: '0.75rem',
          color: 'var(--ds-colors-neutral-500)',
          fontFamily: 'var(--ds-typography-fontFamily-mono)',
          backgroundColor: 'var(--ds-colors-neutral-100)',
          padding: '0.5rem',
          borderRadius: 'var(--ds-radius-sm)'
        }}>
          {`font-size: clamp(1.5rem, 4vw, 3rem);`}
        </div>
      </div>
    </div>
  )
};

// All Breakpoints Tokens
export const AllBreakpointsTokens = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Breakpoints Design Tokens</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Breakpoints Scale</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
            {Object.entries(themeJson.breakpoints).map(([key, value]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)'
              }}>
                <div style={{ 
                  width: '60px',
                  height: '30px',
                  backgroundColor: 'var(--ds-colors-primary-500)',
                  borderRadius: 'var(--ds-radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {key}
                </div>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  minWidth: '40px'
                }}>
                  {key}
                </div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--ds-colors-neutral-500)',
                  fontFamily: 'var(--ds-typography-fontFamily-mono)'
                }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Usage Guidelines</h2>
          <div style={{ 
            padding: '1rem',
            backgroundColor: 'var(--ds-colors-info-50)',
            border: '1px solid var(--ds-colors-info-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-info-700)' }}>
              Mobile-First Approach
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--ds-colors-info-600)', marginBottom: '0.5rem' }}>
              Start with mobile styles as the base, then use min-width media queries to enhance for larger screens.
            </p>
            <div style={{ 
              fontSize: '0.75rem',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              backgroundColor: 'var(--ds-colors-info-100)',
              padding: '0.5rem',
              borderRadius: 'var(--ds-radius-sm)',
              color: 'var(--ds-colors-info-700)'
            }}>
              {`/* Mobile first */
.component { /* base styles */ }

@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};