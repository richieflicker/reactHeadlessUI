import React from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import themeJson from '../theme/theme.json';

export default {
  title: 'Design Tokens/Spacing',
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
        component: 'Spacing design tokens showcase including all spacing values and aliases with visual examples.'
      }
    }
  }
};

// Spacing Scale
export const SpacingScale = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Scale</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.spacing).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: value,
              height: '2rem',
              backgroundColor: 'var(--ds-colors-primary-500)',
              borderRadius: 'var(--ds-radius-sm)',
              minWidth: '1rem'
            }} />
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
              var(--ds-spacing-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Spacing Aliases
export const SpacingAliases = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Aliases</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.spacingAliases).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: value,
              height: '2rem',
              backgroundColor: 'var(--ds-colors-secondary-500)',
              borderRadius: 'var(--ds-radius-sm)',
              minWidth: '1rem'
            }} />
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
              var(--ds-spacingAliases-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Spacing in Context - Padding
export const SpacingPadding = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing in Context - Padding</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {Object.entries(themeJson.spacingAliases).map(([key, value]) => (
          <div key={key} style={{ 
            padding: value,
            backgroundColor: 'var(--ds-colors-primary-50)',
            border: '2px solid var(--ds-colors-primary-200)',
            borderRadius: 'var(--ds-radius-base)',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--ds-colors-primary-700)'
            }}>
              {key} padding
            </div>
            <div style={{ 
              fontSize: '0.75rem',
              color: 'var(--ds-colors-primary-600)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              marginTop: '0.25rem'
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Spacing in Context - Margin
export const SpacingMargin = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing in Context - Margin</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.spacingAliases).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ 
              width: '60px',
              height: '40px',
              backgroundColor: 'var(--ds-colors-secondary-500)',
              borderRadius: 'var(--ds-radius-sm)'
            }} />
            <div style={{ 
              width: value,
              height: '2px',
              backgroundColor: 'var(--ds-colors-neutral-300)'
            }} />
            <div style={{ 
              width: '60px',
              height: '40px',
              backgroundColor: 'var(--ds-colors-success-500)',
              borderRadius: 'var(--ds-radius-sm)'
            }} />
            <div style={{ 
              fontSize: '0.875rem',
              color: 'var(--ds-colors-neutral-600)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              minWidth: '80px'
            }}>
              {key}: {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Spacing in Context - Gap
export const SpacingGap = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing in Context - Gap</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.spacingAliases).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex',
            gap: value,
            padding: '1rem',
            backgroundColor: 'var(--ds-colors-neutral-50)',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--ds-colors-primary-500)',
              borderRadius: 'var(--ds-radius-sm)'
            }} />
            <div style={{ 
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--ds-colors-secondary-500)',
              borderRadius: 'var(--ds-radius-sm)'
            }} />
            <div style={{ 
              width: '40px',
              height: '40px',
              backgroundColor: 'var(--ds-colors-success-500)',
              borderRadius: 'var(--ds-radius-sm)'
            }} />
            <div style={{ 
              fontSize: '0.875rem',
              color: 'var(--ds-colors-neutral-600)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)',
              alignSelf: 'center',
              marginLeft: 'auto'
            }}>
              {key}: {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Spacing Comparison
export const SpacingComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Comparison</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '1rem',
          padding: '1rem',
          backgroundColor: 'var(--ds-colors-neutral-50)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ds-colors-neutral-700)' }}>Scale</h3>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ds-colors-neutral-700)' }}>Aliases</h3>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ds-colors-neutral-700)' }}>Value</h3>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--ds-colors-neutral-700)' }}>Visual</h3>
        </div>
        
        {Object.entries(themeJson.spacing).slice(0, 10).map(([key, value]) => {
          const alias = Object.entries(themeJson.spacingAliases).find(([_, aliasValue]) => aliasValue === value);
          return (
            <div key={key} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '1rem',
              padding: '1rem',
              border: '1px solid var(--ds-colors-neutral-200)',
              borderRadius: 'var(--ds-radius-base)',
              alignItems: 'center'
            }}>
              <div style={{ 
                fontSize: '0.875rem',
                fontWeight: '500',
                fontFamily: 'var(--ds-typography-fontFamily-mono)'
              }}>
                {key}
              </div>
              <div style={{ 
                fontSize: '0.875rem',
                color: 'var(--ds-colors-neutral-600)',
                fontFamily: 'var(--ds-typography-fontFamily-mono)'
              }}>
                {alias ? alias[0] : '-'}
              </div>
              <div style={{ 
                fontSize: '0.875rem',
                color: 'var(--ds-colors-neutral-500)',
                fontFamily: 'var(--ds-typography-fontFamily-mono)'
              }}>
                {value}
              </div>
              <div style={{ 
                width: value,
                height: '1rem',
                backgroundColor: 'var(--ds-colors-primary-500)',
                borderRadius: 'var(--ds-radius-sm)',
                minWidth: '0.5rem'
              }} />
            </div>
          );
        })}
      </div>
    </div>
  )
};

// All Spacing Tokens
export const AllSpacingTokens = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Spacing Design Tokens</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Scale</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {Object.entries(themeJson.spacing).map(([key, value]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)'
              }}>
                <div style={{ 
                  width: value,
                  height: '1rem',
                  backgroundColor: 'var(--ds-colors-primary-500)',
                  borderRadius: 'var(--ds-radius-sm)',
                  minWidth: '0.25rem'
                }} />
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Spacing Aliases</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {Object.entries(themeJson.spacingAliases).map(([key, value]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1px solid var(--ds-colors-secondary-200)',
                borderRadius: 'var(--ds-radius-base)',
                backgroundColor: 'var(--ds-colors-secondary-50)'
              }}>
                <div style={{ 
                  width: value,
                  height: '1rem',
                  backgroundColor: 'var(--ds-colors-secondary-500)',
                  borderRadius: 'var(--ds-radius-sm)',
                  minWidth: '0.25rem'
                }} />
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
      </div>
    </div>
  )
};