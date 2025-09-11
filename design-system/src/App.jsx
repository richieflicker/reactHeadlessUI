import { useState } from 'react'
import { ThemeProvider } from './theme/ThemeProvider'
import { ThemeContextProvider } from './theme/ThemeContext'
import { Button } from './atoms/button/Button'
import { ThemeToggle } from './atoms/theme-toggle/ThemeToggle'
import { ThemeShowcase } from './components/ThemeShowcase'
import { MoleculesShowcase } from './components/MoleculesShowcase'
import { AtomMoleculeIntegration } from './components/AtomMoleculeIntegration'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div>
                <h1>Design System Showcase</h1>
                <p>Comprehensive theme system with atomic components</p>
              </div>
              <div className={styles.themeControls}>
                <ThemeToggle size="lg" variant="outline" />
              </div>
            </div>
          </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2>Button Variants</h2>
            <div className={styles.buttonGrid}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Button Sizes</h2>
            <div className={styles.buttonGrid}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Button with Slots</h2>
            <div className={styles.buttonGrid}>
              <Button prefix="💾" variant="primary">Save</Button>
              <Button suffix="→" variant="secondary">Next</Button>
              <Button prefix="📥" suffix="↓" variant="danger">Download</Button>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Interactive Example</h2>
            <div className={styles.card}>
              <Button 
                onClick={() => setCount((count) => count + 1)}
                variant="primary"
                size="lg"
              >
                Count is {count}
              </Button>
              <p>Click the button to increment the counter</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Disabled States</h2>
            <div className={styles.buttonGrid}>
              <Button disabled variant="primary">Primary Disabled</Button>
              <Button disabled variant="secondary">Secondary Disabled</Button>
              <Button disabled variant="danger">Danger Disabled</Button>
              <Button disabled variant="link">Link Disabled</Button>
            </div>
          </section>
          <section className={styles.section}>
            <h2>Theme System</h2>
            <div className={styles.themeDemo}>
              <div className={styles.themeInfo}>
                <p>This design system supports both light and dark themes. Use the toggle in the header to switch between themes.</p>
                <p>The theme system uses CSS custom properties and automatically adapts all components to the selected theme.</p>
              </div>
              <div className={styles.themeFeatures}>
                <div className={styles.feature}>
                  <h3>🌓 System Preference Detection</h3>
                  <p>Automatically detects your system's theme preference</p>
                </div>
                <div className={styles.feature}>
                  <h3>💾 Persistent Storage</h3>
                  <p>Remembers your theme choice across sessions</p>
                </div>
                <div className={styles.feature}>
                  <h3>🎨 Semantic Colors</h3>
                  <p>Uses semantic color tokens that adapt to each theme</p>
                </div>
                <div className={styles.feature}>
                  <h3>⚡ Smooth Transitions</h3>
                  <p>Seamless transitions between light and dark modes</p>
                </div>
              </div>
            </div>
          </section>

          <ThemeShowcase />
          
          <section className={styles.section}>
            <h2>Foundation Molecules</h2>
            <MoleculesShowcase />
          </section>

          <section className={styles.section}>
            <h2>Atom-Molecule Integration</h2>
            <AtomMoleculeIntegration />
          </section>

        </main>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default App
