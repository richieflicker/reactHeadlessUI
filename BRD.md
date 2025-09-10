📑 BRD: Atoms Layer — Atomic Design System

1. Objective

Build the foundation layer (Atoms) of a React-based design system that is:
	•	Atomic & modular: smallest reusable UI primitives.
	•	Themeable: styled using tokenized CSS variables (var(--token)) injected at runtime.
	•	Accessible: compliant with ARIA and keyboard navigation.
	•	Documented: interactive in Storybook with live controls.
	•	Tested: reliable with Vitest + React Testing Library.

⸻

2. Scope

In Scope
	•	Development of core Atoms:
	•	Button
	•	Typography
	•	Input
	•	TextArea
	•	Checkbox
	•	Radio
	•	Switch (Toggle)
	•	Avatar
	•	Badge
	•	Icon
	•	Development of optional Atoms:
	•	Spinner
	•	Divider
	•	Tooltip (trigger, via Radix)
	•	Progress Bar
	•	Skeleton
	•	Tag (Chip)
	•	Link
	•	Image
	•	Kbd
	•	Storybook documentation for each Atom.
	•	Vitest test coverage (≥80%).
	•	Theming with theme.json injected into :root as CSS variables.

Out of Scope
	•	Molecules (Select, FormField, Card).
	•	Organisms (Table, DatePicker, Navbar).
	•	Templates & Pages.

⸻

3. Business Requirements

ID	Requirement	Rationale
BR-1	Atoms must use tokens via CSS variables	Enables consistent theming & runtime theme switching
BR-2	Atoms must be scalable & composable	Must combine cleanly into molecules & organisms
BR-3	Atoms must support variants & states	UX consistency (e.g., Button → primary, danger; Input → error, disabled)
BR-4	Each Atom must be documented in Storybook	Ensures discoverability & adoption
BR-5	Each Atom must be unit tested	Guarantees stability & prevents regressions
BR-6	Accessibility must be embedded	Inclusive design, WCAG compliance


⸻

4. Functional Requirements (High-Level)
	1.	Button: Supports variants, sizes, slots, and disabled state.
	2.	Typography: Provides semantic text elements (h1–h6, p, label, span).
	3.	Input: Supports text types with prefix/suffix slots.
	4.	TextArea: Multi-line input with optional char counter.
	5.	Checkbox: Boolean selection, indeterminate state.
	6.	Radio: Single-selection, grouped behavior.
	7.	Switch: Boolean toggle with animated thumb.
	8.	Avatar: Image with fallback initials.
	9.	Badge: Inline status indicator with variants.
	10.	Icon: Token-driven size and color wrapper for SVG.
	11.	Optional Atoms: Spinner, Divider, Tooltip trigger, Progress, Skeleton, Tag, Link, Image, Kbd.

⸻

5. Non-Functional Requirements
	•	Performance: Render in <5ms; CSS variables ensure fast theme switching.
	•	Maintainability: Clear folder structure (atoms/[component]).
	•	Scalability: Adding new variants requires only token + SCSS update.
	•	Consistency: All Atoms consume tokens uniformly.

⸻

6. Dependencies
	•	React 18 + Vite.
	•	SCSS Modules.
	•	Storybook (Vite builder).
	•	Vitest + React Testing Library.
	•	PropTypes for runtime prop validation.
	•	Radix UI (for Tooltip/Popover).

⸻

7. Deliverables
	•	src/atoms/* → JSX + SCSS Module files.
	•	src/theme/theme.json → token definition.
	•	src/theme/ThemeProvider.jsx → runtime injection of CSS variables.
	•	Storybook stories with interactive controls for each Atom.
	•	Vitest test cases (≥80% coverage).
	•	Documentation (docs/atoms-prd.md and this BRD).

⸻

8. Success Criteria
	•	✅ All Atoms implemented and styled via CSS variables.
	•	✅ Storybook shows each Atom with interactive controls & actions.
	•	✅ Unit tests achieve ≥80% coverage.
	•	✅ Theme switching (light/dark) works without rebuild.
	•	✅ Atoms reusable in Molecules/Organisms with no modifications.
	•	✅ Accessibility verified (keyboard navigation, ARIA roles).
