# Foundation Molecules

This directory contains the 6 core molecules that form the foundation of the design system. These components are built according to the PRD specifications and provide the building blocks for more complex organisms and templates.

## Components

### 1. Modal System (`/modal`)
A composable, accessible modal with subcomponents.

**Components:**
- `Modal` - Main modal container
- `Modal.Header` - Modal header with optional close button
- `Modal.Body` - Modal content area
- `Modal.Footer` - Modal footer for actions

**Features:**
- Focus trapping and restoration
- Keyboard navigation (ESC to close)
- Backdrop click to close (configurable)
- ARIA compliant with proper roles and attributes

### 2. Tabs System (`/tabs`)
Accessible tab navigation with keyboard support.

**Components:**
- `Tabs` - Main tabs container
- `Tabs.List` - Tab list container
- `Tabs.Tab` - Individual tab button
- `Tabs.Panels` - Panels container
- `Tabs.Panel` - Individual panel content

**Features:**
- Keyboard navigation (arrow keys, home/end)
- ARIA compliant tablist/tab/tabpanel pattern
- Support for disabled tabs
- Smooth transitions

### 3. Accordion System (`/accordion`)
Collapsible sections with single/multi expand modes.

**Components:**
- `Accordion` - Main accordion container
- `Accordion.Item` - Individual accordion item
- `Accordion.Header` - Clickable header
- `Accordion.Body` - Collapsible content

**Features:**
- Single or multiple expand modes
- Keyboard navigation (arrow keys, home/end)
- Support for disabled items
- Smooth animations

### 4. Select (Dropdown) (`/select`)
Headless select powered by Downshift with token-styled appearance.

**Components:**
- `Select` - Main select component

**Features:**
- Powered by Downshift for accessibility
- Keyboard navigation (arrow keys, enter, escape)
- Custom styling with design tokens
- Support for disabled state

### 5. FormField (`/form-field`)
A wrapper component for form inputs with label, help text, and error handling.

**Components:**
- `FormField` - Main wrapper component

**Features:**
- Automatic label association
- Error and help text support
- Required field indicators
- Proper ARIA attributes

### 6. Card (`/card`)
A flexible container component with header, body, and footer slots.

**Components:**
- `Card` - Main card container
- `Card.Header` - Card header
- `Card.Body` - Card content
- `Card.Footer` - Card footer

**Features:**
- Multiple variants (outlined, shadowed, elevated)
- Flexible slot-based architecture
- Responsive design
- Hover effects

## Usage

```jsx
import { Modal, Tabs, Accordion, Select, FormField, Card } from './molecules';

// Modal
<Modal isOpen={isOpen} onClose={handleClose}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Actions</Modal.Footer>
</Modal>

// Tabs
<Tabs defaultIndex={0}>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab 1</Tabs.Tab>
    <Tabs.Tab index={1}>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel index={0}>Panel 1</Tabs.Panel>
    <Tabs.Panel index={1}>Panel 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

// Accordion
<Accordion multiple>
  <Accordion.Item itemId="item1">
    <Accordion.Header itemId="item1">Header</Accordion.Header>
    <Accordion.Body itemId="item1">Content</Accordion.Body>
  </Accordion.Item>
</Accordion>

// Select
<Select
  options={[{label: 'Option 1', value: 'option1'}]}
  onChange={handleChange}
  placeholder="Select an option..."
/>

// FormField
<FormField label="Email" error="Invalid email" help="We won't share this">
  <input type="email" />
</FormField>

// Card
<Card variant="outlined">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

## Design Principles

### 1. Compound Components
All molecules use the compound component pattern, allowing for flexible composition and clear API boundaries.

### 2. Accessibility First
Every component is built with accessibility in mind, including:
- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

### 3. Token-Driven Styling
All styling uses design system tokens via CSS custom properties, ensuring consistency and theming support.

### 4. Responsive Design
Components adapt to different screen sizes and work well on mobile devices.

### 5. Dark Mode Support
All components support both light and dark themes through CSS custom properties.

## Testing

Each component includes comprehensive tests covering:
- Rendering and props
- User interactions
- Keyboard navigation
- Accessibility features
- Edge cases

Run tests with:
```bash
npm test
```

## Storybook

Each component has detailed Storybook documentation with:
- Interactive controls
- Multiple examples
- Accessibility information
- Usage guidelines

Run Storybook with:
```bash
npm run storybook
```

## Success Criteria

✅ **All Molecules Implemented** - All 6 core molecules with compound API  
✅ **Token-Driven Styling** - SCSS variables only  
✅ **Storybook Documentation** - Comprehensive stories with controls  
✅ **Comprehensive Testing** - Vitest + RTL with ≥80% coverage  
✅ **Accessibility Compliant** - Full ARIA compliance & keyboard navigation  
✅ **Scalable Architecture** - Scales to Organisms/Templates without rewrite