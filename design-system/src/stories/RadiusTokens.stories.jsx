import React from 'react';
import { ThemeProvider } from '../theme/ThemeProvider';
import themeJson from '../theme/theme.json';

export default {
  title: 'Design Tokens/Radius',
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
        component: 'Radius design tokens showcase including all border radius values and aliases with visual examples.'
      }
    }
  }
};

// Radius Scale
export const RadiusScale = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Scale</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.radius).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--ds-colors-primary-500)',
              borderRadius: value,
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
              var(--ds-radius-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Radius Aliases
export const RadiusAliases = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Aliases</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.radiusAliases).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem',
            border: '1px solid var(--ds-colors-neutral-200)',
            borderRadius: 'var(--ds-radius-base)'
          }}>
            <div style={{ 
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--ds-colors-secondary-500)',
              borderRadius: value,
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
              var(--ds-radiusAliases-{key})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Radius in Context - Cards
export const RadiusCards = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius in Context - Cards</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {Object.entries(themeJson.radiusAliases).map(([key, value]) => (
          <div key={key} style={{ 
            padding: '1rem',
            backgroundColor: 'var(--ds-colors-primary-50)',
            border: '2px solid var(--ds-colors-primary-200)',
            borderRadius: value,
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--ds-colors-primary-700)',
              marginBottom: '0.5rem'
            }}>
              Card with {key} radius
            </div>
            <div style={{ 
              fontSize: '0.875rem',
              color: 'var(--ds-colors-primary-600)',
              marginBottom: '0.5rem'
            }}>
              This card demonstrates the {key} border radius value in a real context.
            </div>
            <div style={{ 
              fontSize: '0.75rem',
              color: 'var(--ds-colors-primary-500)',
              fontFamily: 'var(--ds-typography-fontFamily-mono)'
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

// Radius in Context - Buttons
export const RadiusButtons = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius in Context - Buttons</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {Object.entries(themeJson.radiusAliases).map(([key, value]) => (
          <button key={key} style={{ 
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--ds-colors-primary-500)',
            color: 'white',
            border: 'none',
            borderRadius: value,
            fontSize: '0.875rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'var(--ds-colors-primary-600)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'var(--ds-colors-primary-500)';
          }}
          >
            {key} button
          </button>
        ))}
      </div>
    </div>
  )
};

// Radius in Context - Inputs
export const RadiusInputs = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius in Context - Inputs</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Object.entries(themeJson.radiusAliases).map(([key, value]) => (
          <div key={key} style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <label style={{ 
              fontSize: '0.875rem',
              fontWeight: '500',
              minWidth: '80px'
            }}>
              {key}:
            </label>
            <input 
              type="text" 
              placeholder={`Input with ${key} radius`}
              style={{ 
                padding: '0.75rem',
                border: '2px solid var(--ds-colors-neutral-300)',
                borderRadius: value,
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                minWidth: '200px'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--ds-colors-primary-500)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--ds-colors-neutral-300)';
              }}
            />
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
  )
};

// Radius Comparison
export const RadiusComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Comparison</h2>
      
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
        
        {Object.entries(themeJson.radius).map(([key, value]) => {
          const alias = Object.entries(themeJson.radiusAliases).find(([_, aliasValue]) => aliasValue === value);
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
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--ds-colors-primary-500)',
                borderRadius: value
              }} />
            </div>
          );
        })}
      </div>
    </div>
  )
};

// Special Radius Values
export const SpecialRadiusValues = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Special Radius Values</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <div style={{ 
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--ds-colors-primary-500)',
            borderRadius: 'var(--ds-radius-none)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            none
          </div>
          <div style={{ 
            fontSize: '1rem',
            fontWeight: '500',
            minWidth: '60px'
          }}>
            none
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            minWidth: '80px'
          }}>
            0
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-400)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-radius-none)
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <div style={{ 
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--ds-colors-primary-500)',
            borderRadius: 'var(--ds-radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            full
          </div>
          <div style={{ 
            fontSize: '1rem',
            fontWeight: '500',
            minWidth: '60px'
          }}>
            full
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            minWidth: '80px'
          }}>
            9999px
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-400)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-radius-full)
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          padding: '1rem',
          border: '1px solid var(--ds-colors-neutral-200)',
          borderRadius: 'var(--ds-radius-base)'
        }}>
          <div style={{ 
            width: '80px',
            height: '80px',
            backgroundColor: 'var(--ds-colors-primary-500)',
            borderRadius: 'var(--ds-radius-pill)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '500'
          }}>
            pill
          </div>
          <div style={{ 
            fontSize: '1rem',
            fontWeight: '500',
            minWidth: '60px'
          }}>
            pill
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-500)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)',
            minWidth: '80px'
          }}>
            9999px
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            color: 'var(--ds-colors-neutral-400)',
            fontFamily: 'var(--ds-typography-fontFamily-mono)'
          }}>
            var(--ds-radius-pill)
          </div>
        </div>
      </div>
    </div>
  )
};

// All Radius Tokens
export const AllRadiusTokens = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>Radius Design Tokens</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Scale</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {Object.entries(themeJson.radius).map(([key, value]) => (
              <div key={key} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1px solid var(--ds-colors-neutral-200)',
                borderRadius: 'var(--ds-radius-base)'
              }}>
                <div style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--ds-colors-primary-500)',
                  borderRadius: value
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
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Radius Aliases</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {Object.entries(themeJson.radiusAliases).map(([key, value]) => (
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
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--ds-colors-secondary-500)',
                  borderRadius: value
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