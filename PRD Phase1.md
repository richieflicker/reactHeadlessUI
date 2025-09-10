# 📘 PRD Pack: Atoms

This document describes the **requirements, scope, and success criteria** for all **Atom components** in the design system.  
Atoms are the **smallest building blocks**, styled via **runtime CSS variables + SCSS modules**, with documentation in Storybook and tests in Vitest.

---

## 🔹 Button

### Objective
Create a tokenized, themeable, interactive Button component. Must support variants, sizes, slots, and accessibility.

### Functional Requirements
- Variants: `default`, `primary`, `secondary`, `danger`, `link`.
- Sizes: `sm`, `md`, `lg`.
- Slots: `children`, `prefix`, `suffix`.
- States: hover, focus, active, disabled.
- Supports `onClick` and `type` (`button`, `submit`, `reset`).

### Styling & Tokens (SCSS)
```scss
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radii-md);
  font-size: var(--typography-sizes-md);
  cursor: pointer;
  border: 1px solid var(--colors-border);
  background: var(--colors-background);
  color: var(--colors-text);
}

.primary { background: var(--colors-primary); color: var(--colors-background); }
.danger  { background: var(--colors-danger); color: var(--colors-background); }
.link    { background: transparent; color: var(--colors-primary); border: none; }
.sm      { padding: var(--spacing-xs) var(--spacing-sm); font-size: var(--typography-sizes-sm); }
.lg      { padding: var(--spacing-md) var(--spacing-lg); font-size: var(--typography-sizes-lg); }

Props

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default","primary","secondary","danger","link"]),
  size: PropTypes.oneOf(["sm","md","lg"]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button","submit","reset"])
};

Storybook
	•	Controls: variant, size, disabled, children.
	•	Actions: onClick.
	•	Stories: Default, Primary, Danger, Link, With prefix/suffix, Disabled.

Testing
	•	Renders with label.
	•	Applies correct variant & size class.
	•	Fires onClick when enabled.
	•	Disabled state prevents clicks.
	•	Keyboard (Enter, Space) works.

⸻

🔹 Typography

Objective

Provide tokenized text primitives for headings, paragraphs, labels.

Functional Requirements
	•	Tags: h1–h6, p, span, label.
	•	Variants: heading, paragraph, label, button text.
	•	Slot: children.

Styling & Tokens

.h1 { font-size: var(--typography-sizes-h1); line-height: var(--typography-lineHeights-tight); }
.p  { font-size: var(--typography-sizes-md); line-height: var(--typography-lineHeights-normal); }
.label { font-weight: 600; font-size: var(--typography-sizes-sm); }

Props

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1","h2","h3","h4","h5","h6","p","span","label"]),
  children: PropTypes.node.isRequired,
  styleOverride: PropTypes.object
};

Testing
	•	Renders correct semantic tag.
	•	Applies correct token font sizes.
	•	Label links correctly to inputs.

⸻

🔹 Input

Objective

Tokenized base input with optional prefix/suffix slots.

Functional Requirements
	•	Types: text, email, number, password.
	•	Slots: prefix, suffix.
	•	States: focus, error, disabled.

Styling

.inputWrapper { display: flex; align-items: center; border: 1px solid var(--colors-border); }
.inputWrapper:focus-within { border-color: var(--colors-primary); }
.input { flex: 1; padding: var(--spacing-sm); font-size: var(--typography-sizes-md); }
.prefix, .suffix { margin: 0 var(--spacing-sm); }

Props

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text","email","number","password"]),
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  disabled: PropTypes.bool
};

Testing
	•	Updates value on typing.
	•	Prefix & suffix render correctly.
	•	Disabled prevents typing.
	•	Error adds aria-invalid.

⸻

🔹 TextArea

Objective

Multi-line input with optional char count.

Functional Requirements
	•	Configurable rows.
	•	Optional char counter.

Styling

.textarea { padding: var(--spacing-sm); border-radius: var(--radii-md); }
.textarea:focus { border-color: var(--colors-primary); }
.charCount { font-size: var(--typography-sizes-sm); color: var(--colors-text-muted); }

Props

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  showCount: PropTypes.bool
};


⸻

🔹 Checkbox

Objective

Boolean selection control.

Functional Requirements
	•	States: checked, unchecked, indeterminate.
	•	Slot: children (label).

Styling

.checkbox { width: 16px; height: 16px; border: 1px solid var(--colors-border); }
.checkbox:checked { background: var(--colors-primary); }
.label { margin-left: var(--spacing-sm); }

Props

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};


⸻

🔹 Radio

Objective

Single-choice option inside a group.

Styling

.radio { border-radius: 50%; width: 16px; height: 16px; }
.radio:checked::after { background: var(--colors-primary); border-radius: 50%; }

Props

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};


⸻

🔹 Switch (Toggle)

Objective

Boolean toggle alternative to checkbox.

Styling

.switch { width: 40px; height: 20px; background: var(--colors-muted); border-radius: var(--radii-pill); }
.switchThumb { width: 16px; height: 16px; border-radius: 50%; transition: transform 0.2s; }
.switch[aria-checked="true"] .switchThumb { transform: translateX(20px); background: var(--colors-primary); }

Props

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};


⸻

🔹 Avatar

Objective

Profile image with fallback initials.

Styling

.avatar { border-radius: 50%; background: var(--colors-muted); color: var(--colors-text); }
.avatar.sm { width: 24px; height: 24px; font-size: var(--typography-sizes-sm); }
.avatar.md { width: 40px; height: 40px; font-size: var(--typography-sizes-md); }
.avatar.lg { width: 64px; height: 64px; font-size: var(--typography-sizes-lg); }

Props

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["sm","md","lg"]),
  fallback: PropTypes.string
};


⸻

🔹 Badge

Objective

Inline status indicator.

Styling

.badge { padding: 0 var(--spacing-sm); border-radius: var(--radii-pill); font-size: var(--typography-sizes-sm); }
.badge.info { background: var(--colors-primary); color: var(--colors-background); }
.badge.success { background: var(--colors-success); color: var(--colors-background); }
.badge.warning { background: var(--colors-warning); color: var(--colors-background); }
.badge.error { background: var(--colors-danger); color: var(--colors-background); }

Props

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["info","success","warning","error"])
};


⸻

🔹 Icon

Objective

Wrapper for SVG icons, tokenized size & color.

Props

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm","md","lg"]),
  color: PropTypes.string
};


⸻

🔹 Optional Atoms

Spinner
	•	Props: size, variant.
	•	Circular rotation animation.

Divider
	•	Props: orientation (“horizontal” | “vertical”).
	•	Uses var(--colors-border).

Tooltip (Trigger, Radix-based)
	•	Slots: children, content.

Progress Bar
	•	Props: value, max.
	•	Variants: determinate, indeterminate.

Skeleton
	•	Props: variant (“text” | “circle” | “rect”).
	•	Shimmer effect.

Tag (Chip)
	•	Props: children, onRemove.
	•	Pill shape with optional close button.

Link
	•	Props: href, variant.
	•	Styled <a> wrapper.

Image
	•	Props: src, alt, radius, shadow.

Kbd
	•	Props: children.
	•	Keyboard key visual.

⸻

✅ Success Metrics for All Atoms
	•	Each atom documented in Storybook with interactive controls.
	•	80–90% test coverage in Vitest.
	•	Fully tokenized via var(--token).
	•	Accessible with keyboard + ARIA roles.
	•	Scales into molecules/organisms without modification.
