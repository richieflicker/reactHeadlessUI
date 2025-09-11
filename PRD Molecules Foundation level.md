
📘 PRD v2: Foundation Molecules

⸻

🔹 1. Modal System

Objective

Provide a composable, accessible modal with subcomponents.

API

<Modal backdropClose>
  <Modal.Header showClose>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Modal.Footer>
</Modal>

Props
	•	Modal: backdropClose: bool (default: true)
	•	Modal.Header: showClose: bool (default: true)
	•	Modal.Body: children
	•	Modal.Footer: children

Accessibility
	•	role="dialog", aria-modal="true".
	•	ESC closes modal.
	•	Focus trapped, restores to trigger.

Storybook
	•	Controls: backdropClose, showClose.
	•	Stories: Default, With long body scroll, With disabled backdrop close.

Vitest Tests
	•	Opens & closes via trigger.
	•	Closes on ESC key.
	•	Focus trap works.
	•	Backdrop click closes (if enabled).

⸻

🔹 2. Tabs System

Objective

Accessible tab navigation with keyboard support.

API

<Tabs defaultIndex={0}>
  <Tabs.List>
    <Tabs.Tab index={0}>Overview</Tabs.Tab>
    <Tabs.Tab index={1}>Details</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Overview content</Tabs.Panel>
    <Tabs.Panel>Details content</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

Props
	•	Tabs: defaultIndex: number
	•	Tabs.Tab: index: number

Accessibility
	•	role="tablist", role="tab", role="tabpanel".
	•	Keyboard: ArrowLeft, ArrowRight, Home, End.

Storybook
	•	Controls: defaultIndex.
	•	Stories: Default, Controlled tabs, With keyboard nav demo.

Vitest Tests
	•	Renders correct active tab.
	•	Changes tab on click.
	•	Changes tab on keyboard arrows.

⸻

🔹 3. Accordion System

Objective

Collapsible sections with single/multi expand modes.

API

<Accordion multiple>
  <Accordion.Item>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Body>Content 1</Accordion.Body>
  </Accordion.Item>
</Accordion>

Props
	•	Accordion: multiple: bool (default: false)

Accessibility
	•	role="button", aria-expanded, aria-controls.
	•	Keyboard: ArrowUp, ArrowDown, Home, End.

Storybook
	•	Controls: multiple.
	•	Stories: Single expand, Multiple expand.

Vitest Tests
	•	Expands and collapses section.
	•	Supports multiple expansion if enabled.
	•	Keyboard navigation works.

⸻

🔹 4. Select (Dropdown)

Objective

Headless select powered by Downshift, token-styled.

API

<Select
  options={[{label:"One", value:1}, {label:"Two", value:2}]}
  onChange={(val)=>console.log(val)}
/>

Props
	•	options: Array<{label, value}>
	•	onChange: func
	•	placeholder: string

Accessibility
	•	role="combobox", role="option", aria-expanded.
	•	Keyboard: ArrowUp, ArrowDown, Enter, Esc.

Storybook
	•	Controls: options, placeholder.
	•	Stories: Default, With long list, Disabled option.

Vitest Tests
	•	Opens/closes dropdown.
	•	Selects option via click.
	•	Selects option via keyboard.

⸻

🔹 5. FormField

Objective

Wrap input controls with label, help text, error.

API

<FormField
  label="Email"
  error="Invalid email"
  help="We won't share this"
/>

Props
	•	label: string
	•	error: string
	•	help: string
	•	children: node (input/select/textarea)

Accessibility
	•	Label linked via htmlFor.
	•	Error/help linked via aria-describedby.

Storybook
	•	Controls: label, error, help.
	•	Stories: Default, With error, With help.

Vitest Tests
	•	Renders label.
	•	Error text visible + aria-invalid.
	•	Help text linked with input.

⸻

🔹 6. Card

Objective

Token-driven container with slots.

API

<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Some content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>

Props
	•	Children as slots.

Accessibility
	•	Presentational only.

Storybook
	•	Stories: Outlined, Shadowed, With footer actions.

Vitest Tests
	•	Renders header, body, footer.
	•	Applies correct variants.

⸻

✅ Success Criteria (Foundation Molecules)
	•	All Molecules implemented with compound API.
	•	Styled with SCSS var(--token) only.
	•	Storybook docs for each Molecule with controls.
	•	Vitest + RTL coverage ≥ 80%.
	•	Fully ARIA-compliant & keyboard accessible.
	•	Scales to Organisms/Templates without rewrite.

⸻
