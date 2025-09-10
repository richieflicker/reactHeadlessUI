import React from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import themeJson from '../theme/theme.json';

export default {
  title: 'Design Tokens',
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
        component: 'Complete design tokens showcase including typography, spacing, radius, and breakpoints with comprehensive examples and usage guidelines.'
      }
    }
  }
};

// Design Tokens Overview
export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--ds-colors-neutral-800)' }}>
          Design Tokens
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          lineHeight: '1.6', 
          color: 'var(--ds-colors-neutral-600)',
          maxWidth: '800px'
        }}>
          A comprehensive collection of design tokens that provide consistent spacing, typography, 
          radius, and breakpoint values across the entire design system. These tokens ensure 
          visual consistency and make it easy to maintain and scale the design system.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--ds-colors-primary-50)',
          border: '2px solid var(--ds-colors-primary-200)',
          borderRadius: 'var(--ds-radius-lg)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '0.75rem',
            color: 'var(--ds-colors-primary-700)'
          }}>
            Typography
          </h2>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-primary-600)',
            marginBottom: '1rem'
          }}>
            Font families, sizes, weights, line heights, and letter spacing tokens.
          </p>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            color: 'var(--ds-colors-primary-500)',
            backgroundColor: 'var(--ds-colors-primary-100)',
            padding: '0.5rem',
            borderRadius: 'var(--ds-radius-sm)'
          }}>
            {Object.keys(themeJson.typography).length} categories
          </div>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--ds-colors-secondary-50)',
          border: '2px solid var(--ds-colors-secondary-200)',
          borderRadius: 'var(--ds-radius-lg)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '0.75rem',
            color: 'var(--ds-colors-secondary-700)'
          }}>
            Spacing
          </h2>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-secondary-600)',
            marginBottom: '1rem'
          }}>
            Consistent spacing scale and aliases for margins, padding, and gaps.
          </p>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            color: 'var(--ds-colors-secondary-500)',
            backgroundColor: 'var(--ds-colors-secondary-100)',
            padding: '0.5rem',
            borderRadius: 'var(--ds-radius-sm)'
          }}>
            {Object.keys(themeJson.spacing).length + Object.keys(themeJson.spacingAliases).length} values
          </div>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--ds-colors-success-50)',
          border: '2px solid var(--ds-colors-success-200)',
          borderRadius: 'var(--ds-radius-lg)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '0.75rem',
            color: 'var(--ds-colors-success-700)'
          }}>
            Radius
          </h2>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-success-600)',
            marginBottom: '1rem'
          }}>
            Border radius values and aliases for consistent rounded corners.
          </p>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            color: 'var(--ds-colors-success-500)',
            backgroundColor: 'var(--ds-colors-success-100)',
            padding: '0.5rem',
            borderRadius: 'var(--ds-radius-sm)'
          }}>
            {Object.keys(themeJson.radius).length + Object.keys(themeJson.radiusAliases).length} values
          </div>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: 'var(--ds-colors-warning-50)',
          border: '2px solid var(--ds-colors-warning-200)',
          borderRadius: 'var(--ds-radius-lg)'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '0.75rem',
            color: 'var(--ds-colors-warning-700)'
          }}>
            Breakpoints
          </h2>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-warning-600)',
            marginBottom: '1rem'
          }}>
            Responsive breakpoints for mobile-first responsive design.
          </p>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            color: 'var(--ds-colors-warning-500)',
            backgroundColor: 'var(--ds-colors-warning-100)',
            padding: '0.5rem',
            borderRadius: 'var(--ds-radius-sm)'
          }}>
            {Object.keys(themeJson.breakpoints).length} breakpoints
          </div>
        </div>
      </div>
    </div>
  )
};

// Quick Reference
export const QuickReference = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Quick Reference</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Typography Quick Reference */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Typography
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Font Sizes</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Font Weights</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                thin, extralight, light, normal, medium, semibold, bold, extrabold, black
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Line Heights</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                none, tight, snug, normal, relaxed, loose
              </div>
            </div>
          </div>
        </div>

        {/* Spacing Quick Reference */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Spacing
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Scale</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                0, px, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Aliases</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                xs, sm, md, lg, xl, 2xl, 3xl, 4xl
              </div>
            </div>
          </div>
        </div>

        {/* Radius Quick Reference */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Radius
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Scale</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                none, sm, base, md, lg, xl, 2xl, 3xl, full, pill
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Aliases</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                xs, sm, md, lg, xl
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoints Quick Reference */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Breakpoints
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '500', color: 'var(--ds-colors-neutral-500)', marginBottom: '0.25rem' }}>Breakpoints</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--ds-typography-fontFamily-mono)', color: 'var(--ds-colors-neutral-600)' }}>
                sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

// Usage Examples
export const UsageExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Usage Examples</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Typography Usage */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Typography Usage
          </h3>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            backgroundColor: 'var(--ds-colors-neutral-100)',
            padding: '0.75rem',
            borderRadius: 'var(--ds-radius-sm)',
            marginBottom: '0.5rem',
            overflow: 'auto'
          }}>
{`/* CSS */
.heading {
  font-size: var(--ds-typography-fontSize-2xl);
  font-weight: var(--ds-typography-fontWeight-bold);
  line-height: var(--ds-typography-lineHeight-tight);
}

/* SCSS */
.text {
  font-family: var(--ds-typography-fontFamily-sans);
  font-size: var(--ds-typographyAliases-sizes-md);
}`}
          </div>
        </div>

        {/* Spacing Usage */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Spacing Usage
          </h3>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            backgroundColor: 'var(--ds-colors-neutral-100)',
            padding: '0.75rem',
            borderRadius: 'var(--ds-radius-sm)',
            marginBottom: '0.5rem',
            overflow: 'auto'
          }}>
{`/* CSS */
.card {
  padding: var(--ds-spacing-4);
  margin: var(--ds-spacing-2);
  gap: var(--ds-spacingAliases-md);
}

/* SCSS */
.container {
  padding: var(--ds-spacingAliases-lg);
  margin-bottom: var(--ds-spacing-8);
}`}
          </div>
        </div>

        {/* Radius Usage */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Radius Usage
          </h3>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            backgroundColor: 'var(--ds-colors-neutral-100)',
            padding: '0.75rem',
            borderRadius: 'var(--ds-radius-sm)',
            marginBottom: '0.5rem',
            overflow: 'auto'
          }}>
{`/* CSS */
.button {
  border-radius: var(--ds-radius-base);
}

.card {
  border-radius: var(--ds-radiusAliases-lg);
}

.avatar {
  border-radius: var(--ds-radius-full);
}`}
          </div>
        </div>

        {/* Breakpoints Usage */}
        <div style={{ 
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--ds-colors-neutral-700)' }}>
            Breakpoints Usage
          </h3>
          <div style={{ 
            fontSize: '0.75rem',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            backgroundColor: 'var(--ds-colors-neutral-100)',
            padding: '0.75rem',
            borderRadius: 'var(--ds-radius-sm)',
            marginBottom: '0.5rem',
            overflow: 'auto'
          }}>
{`/* CSS */
.container {
  padding: var(--ds-spacing-4);
}

@media (min-width: var(--ds-breakpoints-md)) {
  .container {
    padding: var(--ds-spacing-8);
  }
}

@media (min-width: var(--ds-breakpoints-lg)) {
  .container {
    padding: var(--ds-spacing-12);
  }
}`}
          </div>
        </div>
      </div>
    </div>
  )
};

// All Design Tokens Summary
export const AllDesignTokens = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>All Design Tokens</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Typography Summary */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Typography Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {Object.entries(themeJson.typography).map(([category, values]) => (
              <div key={category} style={{ 
                padding: '1rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)',
                backgroundColor: 'var(--ds-colors-primary-50)'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-primary-700)' }}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-primary-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                  {Object.keys(values).length} values
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing Summary */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ 
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              backgroundColor: 'var(--ds-colors-secondary-50)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-secondary-700)' }}>
                Scale
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-secondary-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                {Object.keys(themeJson.spacing).length} values
              </div>
            </div>
            <div style={{ 
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              backgroundColor: 'var(--ds-colors-secondary-50)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-secondary-700)' }}>
                Aliases
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-secondary-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                {Object.keys(themeJson.spacingAliases).length} values
              </div>
            </div>
          </div>
        </div>

        {/* Radius Summary */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ 
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              backgroundColor: 'var(--ds-colors-success-50)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-success-700)' }}>
                Scale
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-success-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                {Object.keys(themeJson.radius).length} values
              </div>
            </div>
            <div style={{ 
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              backgroundColor: 'var(--ds-colors-success-50)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-success-700)' }}>
                Aliases
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-success-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                {Object.keys(themeJson.radiusAliases).length} values
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoints Summary */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Breakpoints Tokens</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ 
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              backgroundColor: 'var(--ds-colors-warning-50)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--ds-colors-warning-700)' }}>
                Breakpoints
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--ds-colors-warning-600)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                {Object.keys(themeJson.breakpoints).length} breakpoints
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};