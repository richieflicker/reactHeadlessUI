import { useState } from 'react'
import { ThemeProvider } from './theme/ThemeProvider'
import { Button } from './atoms/button/Button'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Design System Showcase</h1>
          <p>Comprehensive theme system with atomic components</p>
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
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
