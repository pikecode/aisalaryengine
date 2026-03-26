# Check-in Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a reusable check-in modal that opens from the header, matches the provided visual reference, and preserves the `点击展开` interaction.

**Architecture:** The header buttons will remain lightweight and only toggle modal visibility. A dedicated modal component will own the overlay, close behavior, and expanded/collapsed check-in content so the visual logic stays isolated from the header. PC and mobile header variants will both reuse the same modal entry point for consistency, with no login or eligibility logic yet.

**Tech Stack:** Vue 3 SFCs, TypeScript, Tailwind CSS utility classes, scoped CSS, existing Pinia stores for future extension.

---

### Task 1: Add reusable check-in modal component

**Files:**
- Create: `src/components/common/CheckinModal.vue`

- [ ] **Step 1: Write the component shell**

Create a Vue SFC that accepts `modelValue` and emits `update:modelValue` so the header can open and close it.

- [ ] **Step 2: Add the modal overlay and panel**

Render a full-screen dark overlay and a centered panel that matches the provided reference proportions.

- [ ] **Step 3: Add close interactions**

Close the modal from the overlay, the close icon, and the keyboard Escape key.

- [ ] **Step 4: Add collapsed and expanded states**

Default to the collapsed visual state and toggle a local `expanded` state when the user clicks `点击展开`.

- [ ] **Step 5: Add the static check-in content**

Render the hero artwork area, reward copy, day cards, expand link, and primary check-in button as static content for now.

- [ ] **Step 6: Verify the component renders**

Run: `npm run build`

Expected: Build succeeds and the new component is included in the bundle.

- [ ] **Step 7: Commit**

```bash
git add src/components/common/CheckinModal.vue
git commit -m "feat: add check-in modal component"
```

### Task 2: Wire PC header to open modal

**Files:**
- Modify: `src/components/common/AppHeaderPC.vue`
- Modify: `src/components/common/AppHeader.vue`

- [ ] **Step 1: Add modal state to the PC header shell**

Import the new modal and create a simple `checkinOpen` state.

- [ ] **Step 2: Hook the button click**

Change the PC `打卡` button to set the open state to true.

- [ ] **Step 3: Mount the modal alongside the header**

Render `CheckinModal` at the same header level so it can overlay the page content.

- [ ] **Step 4: Verify the PC header still renders**

Run: `npm run build`

Expected: Build succeeds and the header still compiles.

- [ ] **Step 5: Commit**

```bash
git add src/components/common/AppHeader.vue src/components/common/AppHeaderPC.vue
git commit -m "feat: wire PC check-in modal"
```

### Task 3: Wire mobile header to open modal

**Files:**
- Modify: `src/components/common/AppHeaderH5.vue`
- Modify: `src/components/common/AppHeader.vue`

- [ ] **Step 1: Add modal state to the mobile header shell**

Import the modal and create a local open flag.

- [ ] **Step 2: Hook the mobile check-in button**

Change the compact mobile `打卡` button to open the modal.

- [ ] **Step 3: Mount the modal in the mobile header tree**

Render the modal so it overlays the mobile page content correctly.

- [ ] **Step 4: Verify mobile header build output**

Run: `npm run build`

Expected: Build succeeds with both header variants compiled.

- [ ] **Step 5: Commit**

```bash
git add src/components/common/AppHeader.vue src/components/common/AppHeaderH5.vue
git commit -m "feat: wire mobile check-in modal"
```

### Task 4: Polish modal layout to match the reference

**Files:**
- Modify: `src/components/common/CheckinModal.vue`

- [ ] **Step 1: Compare the component against the reference**

Check spacing, corner radius, button size, and the expanded grid density against the provided image.

- [ ] **Step 2: Tune the CSS**

Adjust panel size, content spacing, typography, and the collapsed/expanded transition so it visually matches the reference.

- [ ] **Step 3: Verify in build**

Run: `npm run build`

Expected: Build succeeds after the visual adjustments.

- [ ] **Step 4: Commit**

```bash
git add src/components/common/CheckinModal.vue
git commit -m "fix: align check-in modal with reference"
```

### Task 5: Validate the end-to-end interaction

**Files:**
- No code changes expected

- [ ] **Step 1: Run the production build**

Run: `npm run build`

Expected: Build succeeds.

- [ ] **Step 2: Open the app and test the flow**

Open the home page, click the PC and mobile `打卡` buttons, verify the modal opens, `点击展开` toggles the content, and the close actions work.

- [ ] **Step 3: Record any follow-up fixes**

If the reference still differs, capture the deltas as a separate small task instead of expanding scope here.
