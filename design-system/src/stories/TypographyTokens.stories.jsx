import React from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import themeJson from '../theme/theme.json';

export default {
  title: 'Design Tokens/Typography',
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
        component: 'Typography design tokens showcase including font families, sizes, weights, line heights, and letter spacing.'
      }
    }
  }
};

// Font Families
export const FontFamilies = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Font Families</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--ds-colors-neutral-600)' }}>
            Sans Serif (Default)
          </h3>
          <p style={{ 
            fontFamily: 'var(--ds-typography-fontFamily-sans)',
            fontSize: '1.125rem',
            lineHeight: '1.5'
          }}>
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <code style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-typography-fontFamily-sans)
          </code>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--ds-colors-neutral-600)' }}>
            Serif
          </h3>
          <p style={{ 
            fontFamily: 'var(--ds-typography-fontFamily-serif)',
            fontSize: '1.125rem',
            lineHeight: '1.5'
          }}>
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <code style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-typography-fontFamily-serif)
          </code>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--ds-colors-neutral-600)' }}>
            Monospace
          </h3>
          <p style={{ 
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            fontSize: '1.125rem',
            lineHeight: '1.5'
          }}>
            The quick brown fox jumps over the lazy dog. 1234567890
          </p>
          <code style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-typography-fontFamily-mono)
          </code>
        </div>
      </div>
    </div>
  )
};

// Font Sizes
export const FontSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Font Sizes</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(themeJson.typography.fontSize).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              fontSize: value,
              fontWeight: '600',
              minWidth: '200px',
              lineHeight: '1.2'
            }}>
              {key.toUpperCase()} - The quick brown fox
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '120px'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-400)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              var(--ds-typography-fontSize-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Font Weights
export const FontWeights = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Font Weights</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.typography.fontWeight).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              fontSize: '1.25rem',
              fontWeight: value,
              minWidth: '200px',
              lineHeight: '1.2'
            }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Weight
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '60px'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-400)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              var(--ds-typography-fontWeight-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Line Heights
export const LineHeights = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Line Heights</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.typography.lineHeight).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              fontSize: '1rem',
              lineHeight: value,
              minWidth: '300px',
              maxWidth: '400px'
            }}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)} Line Height</strong><br />
              This is a sample paragraph that demonstrates the line height spacing. 
              Notice how the text flows and the vertical rhythm is established. 
              The line height affects readability and the overall visual appearance of text blocks.
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '60px'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-400)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              var(--ds-typography-lineHeight-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Letter Spacing
export const LetterSpacing = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Letter Spacing</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.typography.letterSpacing).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              fontSize: '1.25rem',
              letterSpacing: value,
              minWidth: '200px',
              lineHeight: '1.2'
            }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Spacing
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
              var(--ds-typography-letterSpacing-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Typography Scale
export const TypographyScale = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Typography Scale</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {Object.entries(themeJson.typographyAliases.sizes).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              fontSize: value,
              fontWeight: key.startsWith('h') ? '600' : '400',
              minWidth: '300px',
              lineHeight: key.startsWith('h') ? 'var(--ds-typography-lineHeight-tight)' : 'var(--ds-typography-lineHeight-normal)'
            }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} - Sample Text
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '120px'
            }}>
              {value}
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: 'var(--ds-colors-neutral-400)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              var(--ds-typography-sizes-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// All Typography Tokens
export const AllTypographyTokens = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Typography Design Tokens</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Font Families</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {Object.entries(themeJson.typography.fontFamily).map(([key, value]) => (
              <div key={key} style={{ 
                padding: '1rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--ds-colors-neutral-600)' }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <p style={{ fontFamily: value, fontSize: '1.125rem', lineHeight: '1.5', marginBottom: '0.5rem' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
                <code style={{ fontSize: '0.75rem', color: 'var(--ds-colors-neutral-500)', fontFamily: 'var(--ds-typography-fontFamily-mono)' }}>
                  var(--ds-typography-fontFamily-{key})
                </code>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Font Sizes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {Object.entries(themeJson.typography.fontSize).map(([key, value]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                padding: '0.75rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)'
              }}>
                <div style={{ 
                  fontSize: value,
                  fontWeight: '500',
                  minWidth: '150px'
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
                  fontSize: '0.75rem', 
                  color: 'var(--ds-colors-neutral-400)',
                  fontFamily: 'var(--ds-typography-fontFamily-mono)'
                }}>
                  var(--ds-typography-fontSize-{key})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};