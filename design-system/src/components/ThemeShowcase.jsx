import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { Button } from '../atoms/button/Button';
import { ThemeToggle } from '../atoms/theme-toggle/ThemeToggle';
import { Input } from '../atoms/input/Input';
import { Checkbox } from '../atoms/checkbox/Checkbox';
import { Badge } from '../atoms/badge/Badge';
import styles from './ThemeShowcase.module.scss';

export function ThemeShowcase() {
  const { theme, isLight, isDark } = useTheme();

  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <h2>Theme System Showcase</h2>
        <div className={styles.themeInfo}>
          <Badge variant={isLight ? 'success' : 'info'}>
            {isLight ? 'Light Theme' : 'Dark Theme'}
          </Badge>
          <span className={styles.themeName}>Current: {theme}</span>
        </div>
      </div>

      <div className={styles.controls}>
        <ThemeToggle size="lg" variant="default" />
        <Button variant="outline" size="sm">
          Reset to System
        </Button>
      </div>

      <div className={styles.demonstration}>
        <div className={styles.section}>
          <h3>Color Palette</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorGroup}>
              <h4>Primary</h4>
              <div className={styles.colorSwatches}>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-primary-500)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-primary-600)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-primary-700)' }}></div>
              </div>
            </div>
            <div className={styles.colorGroup}>
              <h4>Neutral</h4>
              <div className={styles.colorSwatches}>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-neutral-100)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-neutral-500)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-colors-neutral-900)' }}></div>
              </div>
            </div>
            <div className={styles.colorGroup}>
              <h4>Semantic</h4>
              <div className={styles.colorSwatches}>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-semantic-background-primary)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-semantic-text-primary)' }}></div>
                <div className={styles.swatch} style={{ backgroundColor: 'var(--ds-semantic-border-primary)' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Component States</h3>
          <div className={styles.componentGrid}>
            <div className={styles.componentGroup}>
              <h4>Buttons</h4>
              <div className={styles.buttonGroup}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div className={styles.componentGroup}>
              <h4>Form Elements</h4>
              <div className={styles.formGroup}>
                <Input placeholder="Enter text..." />
                <Checkbox label="Checkbox option" />
              </div>
            </div>
            <div className={styles.componentGroup}>
              <h4>Badges</h4>
              <div className={styles.badgeGroup}>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Typography</h3>
          <div className={styles.typographyDemo}>
            <h1>Heading 1 - Main Title</h1>
            <h2>Heading 2 - Section Title</h2>
            <h3>Heading 3 - Subsection</h3>
            <p>This is a paragraph with regular text. It demonstrates how text appears in the current theme.</p>
            <p className={styles.muted}>This is muted text that provides secondary information.</p>
            <code>This is inline code that shows monospace font rendering.</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeShowcase;