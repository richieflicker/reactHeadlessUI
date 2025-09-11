
📑 BRD: Molecules (Modal, Tabs, Accordion)

⸻

1. Objective

Develop Modal, Tabs, and Accordion as compound components that are:
	•	Provider-driven but self-contained (no global provider clutter).
	•	Scalable: reusable across SaaS apps, dashboards, and admin panels.
	•	Accessible: ARIA-compliant + keyboard navigation.
	•	Tokenized: styled with runtime CSS variables (var(--token)).
	•	Documented: fully interactive in Storybook.
	•	Tested: reliable with Vitest + React Testing Library.

⸻

2. Scope

In Scope
	•	Modal system: Modal, ModalHeader, ModalBody, ModalFooter.
	•	Tabs system: Tabs, Tabs.List, Tabs.Tab, Tabs.Panels, Tabs.Panel.
	•	Accordion system: Accordion, AccordionItem, AccordionHeader, AccordionBody.
	•	Accessibility and ARIA roles for all.
	•	Interactive Storybook stories with controls.
	•	Unit and accessibility tests.

Out of Scope
	•	Global modal manager (future).
	•	Advanced features like draggable modals, nested tabs, multi-level accordions (Phase 2).

⸻

3. Business Requirements

ID	Requirement	Rationale
MOL-10	Modal must use compound subcomponents	Clean API (<Modal><ModalHeader/></Modal>)
MOL-11	Modal must handle focus, ESC, scroll lock	Production-grade UX
MOL-12	Tabs must support keyboard navigation	Inclusive design (Arrow, Home/End keys)
MOL-13	Tabs must expose compound API	Developer-friendly (Tabs.List, Tabs.Tab)
MOL-14	Accordion must support single & multiple expand	Common use cases
MOL-15	All Molecules must be styled via tokens	Consistent theming
MOL-16	All Molecules must be tested & documented	Reliability & adoption


⸻

4. Functional Requirements

4.1 Modal
	•	Compound API:

<Modal>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Actions</Modal.Footer>
</Modal>


	•	States: open, close.
	•	Close methods: ESC, backdrop click, close button.
	•	Prevent body scroll when open.
	•	Focus trap + return focus to trigger.
	•	Token-driven styling.

⸻

4.2 Tabs
	•	Compound API:

<Tabs>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Content 1</Tabs.Panel>
    <Tabs.Panel>Content 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>


	•	Controlled/uncontrolled state.
	•	Keyboard support: ArrowLeft, ArrowRight, Home, End.
	•	ARIA roles: tablist, tab, tabpanel.

⸻

4.3 Accordion
	•	Compound API:

<Accordion>
  <Accordion.Item>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Body>Content 1</Accordion.Body>
  </Accordion.Item>
</Accordion>


	•	Modes: single (one open) / multiple (many open).
	•	Keyboard support: ArrowUp, ArrowDown, Home, End.
	•	ARIA roles: button, region.
	•	Animations for expand/collapse.

⸻

5. Non-Functional Requirements
	•	Performance: Local provider per instance (no global clutter).
	•	Maintainability: Compound API → easy to extend.
	•	Scalability: Can add subcomponents (Modal.Close, Tabs.Indicator) without breaking API.
	•	Accessibility: Full ARIA role + keyboard compliance.

⸻

6. Dependencies
	•	React 18 + Vite.
	•	SCSS Modules.
	•	Storybook (Vite builder).
	•	Vitest + RTL.
	•	No external UI libs (Modal, Tabs, Accordion built from core).

⸻

7. Deliverables
	•	src/molecules/modal/* → Modal + subcomponents.
	•	src/molecules/tabs/* → Tabs + subcomponents.
	•	src/molecules/accordion/* → Accordion + subcomponents.
	•	SCSS modules with tokenized styling.
	•	Storybook stories (interactive).
	•	Vitest test suites.
	•	Docs (docs/molecules-prd.md + this BRD).

⸻

8. Success Criteria
	•	✅ Modal opens/closes correctly, traps focus, restores trigger focus.
	•	✅ Tabs keyboard navigation works, ARIA roles correct.
	•	✅ Accordion expands/collapses smoothly, accessible via keyboard.
	•	✅ All styled via tokens, no hardcoded CSS.
	•	✅ Storybook shows all variants + interactions.
	•	✅ Test coverage ≥ 80%.

⸻

9. Future Enhancements (Phase 2)
	•	Modal stacking / global modal manager.
	•	Lazy loading for Tabs.Panel.
	•	Accordion nested rendering with animations.
	•	Close-on-route-change for Modal.
	•	RTL support across all Molecules.

⸻
