⸻

📘 PRD: Atomic, Tokenized, Headless React Component System

Project Type: Vite + React + Storybook + SCSS Modules + CSS Variables (runtime token system)

⸻

1. Objective

To build a scalable React component library following Atomic Design methodology, styled with token-based CSS variables (injected at runtime), documented via Storybook, and tested with Vitest.
The system must be themeable, headless-first, and production-ready for future SaaS/fintech applications.

⸻

2. Scope

In Scope
	•	Token System: JSON → CSS variables injected at runtime.
	•	Atomic Components: Atoms → Molecules → Organisms → Templates.
	•	Styling: SCSS modules consuming var(--token) only.
	•	Docs: Storybook with interactive controls.
	•	Testing: Vitest + RTL with ≥80% coverage on atoms and molecules.
	•	Accessibility (a11y): ARIA compliance, keyboard support.
	•	Third-Party Headless Plugins:
	•	@tanstack/react-table → Table.
	•	downshift → Select.
	•	@radix-ui/react-popover → Popover/Tooltip.
	•	react-aria/useCalendar → DatePicker.

Out of Scope
	•	Non-React frameworks (Vue/Angular).
	•	CSS-in-JS solutions (styled-components, emotion).
	•	Direct Figma → code automation.

⸻

3. Atomic Hierarchy
	•	Atoms: Button, Input, TextArea, Typography, Icon, Avatar, Badge, Checkbox, Radio, Switch, Spinner, Divider, Tooltip Trigger, Progress Bar, Skeleton, Tag, Link.
	•	Molecules: Select (Downshift), FormField, Card.
	•	Organisms: Table (TanStack), DatePicker (React Aria), Navbar, Sidebar, Tabs.
	•	Templates: PageShell, Section layouts.
	•	Pages: Demo compositions (for Storybook only).

⸻

4. Token System
	•	Defined in theme.json as raw values.
	•	Injected into :root as CSS variables via ThemeProvider.
	•	Example:

{
  "colors": {
    "background": "#ffffff",
    "text": "#111111",
    "primary": "#6200ee"
  },
  "spacing": { "sm": "8px", "md": "12px", "lg": "16px" },
  "radii": { "sm": "4px", "md": "8px" }
}

	•	Usage in SCSS:

.button {
  padding: var(--spacing-md);
  background-color: var(--colors-primary);
}


⸻

5. Component Guidelines
	•	Props typed with prop-types (runtime validation).
	•	Variants handled via SCSS modules (.primary, .danger, .link).
	•	Slots pattern:
	•	Atoms → children, prefix/suffix.
	•	Molecules → Named + render props.
	•	Organisms → Render prop slots.
	•	Templates → Named slots.
	•	Accessibility: ARIA roles, keyboard navigation.

⸻

6. Storybook Requirements
	•	Each component must:
	•	Have controls (for props like variant, children, disabled).
	•	Have actions (onClick, onChange).
	•	Support theme switching in toolbar (light/dark).
	•	Story hierarchy:
	•	Atoms → Molecules → Organisms → Templates.
	•	Example:

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["default", "primary", "danger"] },
    children: { control: "text" },
    onClick: { action: "clicked" }
  }
};


⸻

7. Testing Requirements
	•	Framework: Vitest + RTL.
	•	Each atom must test:
	•	Rendering with variants.
	•	Events (onClick, onChange).
	•	Accessibility attributes.
	•	Each molecule/organism must test:
	•	Slot rendering.
	•	Keyboard navigation.
	•	ARIA compliance.
	•	Coverage: ≥80% for atoms/molecules.

⸻

8. Deliverables
	•	src/atoms/ → all atoms implemented with SCSS modules.
	•	src/molecules/ → Select, FormField, Card.
	•	src/organisms/ → Table, DatePicker, Navbar.
	•	src/theme/ → theme.json, ThemeProvider.jsx.
	•	Storybook stories for each component.
	•	Vitest test files for each atom/molecule/organism.

⸻

9. Success Metrics
	•	All atoms/molecules documented with interactive controls in Storybook.
	•	Theme switching works globally (light/dark).
	•	80%+ test coverage.
	•	All components accessible with keyboard + ARIA roles.
	•	Library is tree-shakable and works in consumer apps.

⸻

10. Roadmap (Phases)
	•	Phase 1 : Setup repo, theme provider, tokens, atoms (Button, Input, Typography).
	•	Phase 2 : Add remaining atoms, Storybook controls, tests.
	•	Phase 3 : Molecules (Select, FormField, Card) with headless slots.
	•	Phase 4 : Organisms (Table, DatePicker, Navbar).
	•	Phase 5 : Templates + Demo pages.
	•	Phase 6 : QA, polish, publish package.

⸻
